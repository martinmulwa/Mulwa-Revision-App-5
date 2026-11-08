/**
 * Mulwa Clinical Exam Portal
 * Paper Filtering, Search, and Sorting Engine
 *
 * Provides high-performance, deterministic filtering and multi-criterion sorting
 * by Year, Month, Exam Type, Completion Status, and Title.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper, SessionProgress } from '../types';
import { getRevisionSetsForPaper } from '../data/questions';
import { makeSetKey } from './storage';

export type PaperSortOption =
  | 'year-desc'
  | 'year-asc'
  | 'month-asc'
  | 'month-desc'
  | 'title-asc'
  | 'title-desc'
  | 'questions-desc'
  | 'questions-asc';

export type PaperStatusFilter = 'all' | 'completed' | 'in_progress' | 'unattempted';

export interface PaperFilterState {
  searchQuery: string;
  selectedYear: string;
  selectedMonth: string;
  selectedExamType: string;
  selectedStatus: PaperStatusFilter;
  sortBy: PaperSortOption;
}

export const DEFAULT_PAPER_FILTERS: PaperFilterState = {
  searchQuery: '',
  selectedYear: 'all',
  selectedMonth: 'all',
  selectedExamType: 'all',
  selectedStatus: 'all',
  sortBy: 'year-desc'
};

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const;

export const MONTH_MAP: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};

export const SORT_OPTIONS: Array<{ value: PaperSortOption; label: string }> = [
  { value: 'year-desc', label: 'Newest First' },
  { value: 'year-asc', label: 'Oldest First' }
];

/**
 * Normalizes and extracts the calendar month from paper metadata or title.
 */
export function getPaperMonth(paper: PastPaper): string | undefined {
  if (paper.month && paper.month.trim() !== '') {
    const raw = paper.month.trim();
    // Capitalize first letter
    const lower = raw.toLowerCase();
    for (const m of MONTH_NAMES) {
      if (lower === m.toLowerCase()) return m;
    }
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  }

  const t = paper.title.toLowerCase();
  for (const m of MONTH_NAMES) {
    const ml = m.toLowerCase();
    if (t.includes(ml)) return m;
    if (ml === 'september' && (t.includes('sept') || t.includes('sep'))) return 'September';
    if (ml === 'february' && t.includes('feb')) return 'February';
    if (ml === 'january' && t.includes('jan')) return 'January';
    if (ml === 'august' && t.includes('aug')) return 'August';
    if (ml === 'october' && t.includes('oct')) return 'October';
    if (ml === 'november' && t.includes('nov')) return 'November';
    if (ml === 'december' && t.includes('dec')) return 'December';
    if (ml === 'march' && t.includes('mar')) return 'March';
    if (ml === 'april' && t.includes('apr')) return 'April';
  }
  return undefined;
}

/**
 * Extracts a numeric 4-digit year for sorting.
 */
export function getPaperYearNum(paper: PastPaper): number {
  if (paper.year && paper.year !== 'Practice') {
    const num = parseInt(paper.year, 10);
    if (!isNaN(num) && num > 1900 && num < 2100) return num;
  }
  const match = paper.title.match(/\b(20\d\d)\b/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 0; // for Practice or unspecified
}

/**
 * Normalizes exam type for categorization and filtering.
 */
export function getPaperExamType(paper: PastPaper): string {
  if (paper.examType && paper.examType.trim() !== '') {
    return paper.examType;
  }
  const t = paper.title.toLowerCase();
  if (t.includes('cat 1') || t.includes('cat i') || t.includes('cat1')) return 'CAT';
  if (t.includes('cat 2') || t.includes('cat ii') || t.includes('cat2')) return 'CAT';
  if (t.includes('supplementary') || t.includes('special')) return 'Supplementary';
  if (t.includes('end of block')) return 'End of Block';
  if (t.includes('first block')) return 'First Block';
  if (t.includes('final') || t.includes('hospital final') || t.includes('college final')) return 'College Final Exam';
  if (t.includes('practice') || paper.year === 'Practice') return 'Practice';
  return 'Main Exam';
}

/**
 * Evaluates candidate progress for a past paper.
 */
export function getPaperStatus(
  paper: PastPaper,
  progress: SessionProgress
): 'completed' | 'in_progress' | 'unattempted' {
  const sets = getRevisionSetsForPaper(paper.id);
  if (sets.length === 0) return 'unattempted';

  const completedCount = sets.filter(s => !!progress.completedSets[makeSetKey(paper.id, s.id)]).length;
  if (completedCount === sets.length) {
    return 'completed';
  }

  const hasInProgress = sets.some(s => !!progress.inProgressSets[makeSetKey(paper.id, s.id)]);
  if (completedCount > 0 || hasInProgress) {
    return 'in_progress';
  }

  return 'unattempted';
}

/**
 * Collects distinct years present in the given papers array.
 */
export function getDistinctYears(papers: PastPaper[]): string[] {
  const years = new Set<string>();
  papers.forEach(p => {
    if (p.year && p.year !== 'Practice') {
      years.add(p.year);
    } else {
      const yr = getPaperYearNum(p);
      if (yr > 0) years.add(yr.toString());
      else if (p.year === 'Practice' || p.examType === 'Practice') years.add('Practice');
    }
  });

  return Array.from(years).sort((a, b) => {
    if (a === 'Practice') return 1;
    if (b === 'Practice') return -1;
    return parseInt(b, 10) - parseInt(a, 10);
  });
}

/**
 * Collects distinct calendar months present in the given papers array in calendar order.
 */
export function getDistinctMonths(papers: PastPaper[]): string[] {
  const months = new Set<string>();
  papers.forEach(p => {
    const m = getPaperMonth(p);
    if (m) months.add(m);
  });

  return Array.from(months).sort((a, b) => {
    const ordA = MONTH_MAP[a.toLowerCase()] || 99;
    const ordB = MONTH_MAP[b.toLowerCase()] || 99;
    return ordA - ordB;
  });
}

/**
 * Collects distinct exam types present in the given papers array.
 */
export function getDistinctExamTypes(papers: PastPaper[]): string[] {
  const types = new Set<string>();
  papers.forEach(p => {
    types.add(getPaperExamType(p));
  });

  return Array.from(types).sort();
}

/**
 * Evaluates whether any non-default filter is active.
 */
export function hasActiveFilters(filters: PaperFilterState): boolean {
  return (
    filters.searchQuery.trim() !== '' ||
    filters.selectedYear !== 'all' ||
    filters.selectedMonth !== 'all' ||
    filters.selectedExamType !== 'all' ||
    filters.selectedStatus !== 'all' ||
    filters.sortBy !== 'year-desc'
  );
}

/**
 * Counts how many specific filters (excluding default sort) are active.
 */
export function getActiveFilterCount(filters: PaperFilterState): number {
  let count = 0;
  if (filters.searchQuery.trim() !== '') count++;
  if (filters.selectedYear !== 'all') count++;
  if (filters.selectedMonth !== 'all') count++;
  if (filters.selectedExamType !== 'all') count++;
  if (filters.selectedStatus !== 'all') count++;
  if (filters.sortBy !== 'year-desc') count++;
  return count;
}

/**
 * Applies multi-parameter filtering and sorting to an array of past papers.
 */
export function filterAndSortPapers(
  papers: PastPaper[],
  filters: PaperFilterState,
  progress: SessionProgress
): PastPaper[] {
  const query = filters.searchQuery.trim().toLowerCase();

  const filtered = papers.filter(paper => {
    const paperMonth = getPaperMonth(paper);
    const paperYear = paper.year || (getPaperYearNum(paper) > 0 ? getPaperYearNum(paper).toString() : '');
    const paperExamType = getPaperExamType(paper);
    const paperStatus = getPaperStatus(paper, progress);

    // 1. Text Search Query
    if (query !== '') {
      const matchTitle = paper.title.toLowerCase().includes(query);
      const matchYear = paperYear.toLowerCase().includes(query);
      const matchMonth = paperMonth ? paperMonth.toLowerCase().includes(query) : false;
      const matchType = paperExamType.toLowerCase().includes(query);
      const matchUnit = (paper.unit || paper.category || '').toLowerCase().includes(query);
      const matchId = paper.id.toLowerCase().includes(query);

      if (!matchTitle && !matchYear && !matchMonth && !matchType && !matchUnit && !matchId) {
        return false;
      }
    }

    // 2. Year Filter
    if (filters.selectedYear !== 'all') {
      if (filters.selectedYear === 'Practice') {
        const isPractice = paper.year === 'Practice' || paperExamType === 'Practice';
        if (!isPractice) return false;
      } else {
        const numericYear = getPaperYearNum(paper);
        const targetYear = parseInt(filters.selectedYear, 10);
        if (numericYear !== targetYear && paper.year !== filters.selectedYear) {
          return false;
        }
      }
    }

    // 3. Month Filter
    if (filters.selectedMonth !== 'all') {
      if (!paperMonth || paperMonth.toLowerCase() !== filters.selectedMonth.toLowerCase()) {
        return false;
      }
    }

    // 4. Exam Type Filter
    if (filters.selectedExamType !== 'all') {
      if (paperExamType !== filters.selectedExamType && paper.examType !== filters.selectedExamType) {
        return false;
      }
    }

    // 5. Completion Status Filter
    if (filters.selectedStatus !== 'all') {
      if (paperStatus !== filters.selectedStatus) {
        return false;
      }
    }

    return true;
  });

  // Sort
  return filtered.sort((a, b) => {
    const yearA = getPaperYearNum(a);
    const yearB = getPaperYearNum(b);

    const monthA = getPaperMonth(a);
    const monthB = getPaperMonth(b);
    const ordA = monthA ? (MONTH_MAP[monthA.toLowerCase()] || 0) : 0;
    const ordB = monthB ? (MONTH_MAP[monthB.toLowerCase()] || 0) : 0;

    const countA = a.questions?.length || a.totalQuestions || 0;
    const countB = b.questions?.length || b.totalQuestions || 0;

    switch (filters.sortBy) {
      case 'year-desc': {
        if (yearA !== yearB) return yearB - yearA;
        if (ordA !== ordB) return ordB - ordA;
        return a.title.localeCompare(b.title, undefined, { numeric: true });
      }

      case 'year-asc': {
        if (yearA !== yearB) {
          // Put Practice (year 0) at the end for oldest-to-newest
          if (yearA === 0) return 1;
          if (yearB === 0) return -1;
          return yearA - yearB;
        }
        if (ordA !== ordB) return ordA - ordB;
        return a.title.localeCompare(b.title, undefined, { numeric: true });
      }

      case 'month-asc': {
        if (ordA !== ordB) {
          if (ordA === 0) return 1;
          if (ordB === 0) return -1;
          return ordA - ordB;
        }
        if (yearA !== yearB) return yearB - yearA;
        return a.title.localeCompare(b.title, undefined, { numeric: true });
      }

      case 'month-desc': {
        if (ordA !== ordB) return ordB - ordA;
        if (yearA !== yearB) return yearB - yearA;
        return a.title.localeCompare(b.title, undefined, { numeric: true });
      }

      case 'title-asc':
        return a.title.localeCompare(b.title, undefined, { numeric: true });

      case 'title-desc':
        return b.title.localeCompare(a.title, undefined, { numeric: true });

      case 'questions-desc':
        if (countA !== countB) return countB - countA;
        return a.title.localeCompare(b.title, undefined, { numeric: true });

      case 'questions-asc':
        if (countA !== countB) return countA - countB;
        return a.title.localeCompare(b.title, undefined, { numeric: true });

      default:
        return 0;
    }
  });
}
