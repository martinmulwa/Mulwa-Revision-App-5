/**
 * Mulwa Clinical Exam Portal
 * MCQ Past Papers & TNH Practice Library
 *
 * Streamlined, minimalist Block 1 navigation with rich filtering and sorting:
 * - Level 1: Block 1 unit list with universal past paper search & quick filter
 * - Level 2: Unit's Past / Practice Papers listing with multi-parameter filter & sort:
 *   * Filter by Year (2009–2026, Practice)
 *   * Filter by Month (January–December)
 *   * Filter by Exam Type (End of Block, Supplementary, CAT, Main, Final Exam, Special, Practice)
 *   * Filter by Completion Status (Completed, In Progress, Unattempted)
 *   * Sort by Date (Newest/Oldest), Month (Jan–Dec / Dec–Jan), Title (A–Z), Questions count
 *   * Instant text search matching title, year, month, type, and unit
 *   * Unit vs All Units scope toggle
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 14.0.0
 */

import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Wind,
  Activity,
  Pill,
  Baby,
  CheckCircle2,
  BookOpen,
  Award,
  Droplets,
  Utensils,
  Search,
  X,
  Calendar,
  RotateCcw,
  Clock,
  ChevronDown,
  Scissors
} from 'lucide-react';
import { SessionProgress, PastPaper } from '../types';
import { BOARD_PAST_PAPERS, TNH_PRACTICE_PAPERS, getRevisionSetsForPaper } from '../data/questions';
import { getCategoriesByUnit } from '../data/saqData';
import { makeSetKey } from '../utils/storage';
import {
  PaperFilterState,
  DEFAULT_PAPER_FILTERS,
  SORT_OPTIONS,
  getPaperMonth,
  getPaperYearNum,
  getPaperExamType,
  getPaperStatus,
  getDistinctYears,
  getDistinctMonths,
  hasActiveFilters,
  filterAndSortPapers
} from '../utils/paperFilters';

interface PastPapersLibraryProps {
  progress: SessionProgress;
  onSelectPaper: (paperId: string) => void;
  onBack: () => void;
  activeSection?: 'past_papers' | 'tnh_practice';
  onSectionChange?: (section: 'past_papers' | 'tnh_practice') => void;
  selectedUnit?: string | null;
  onSelectUnit?: (unit: string | null) => void;
  onSelectSAQCategory?: (categoryId: string) => void;
  selectedBank?: 'mcq' | 'saq' | null;
  onSelectBank?: (bank: 'mcq' | 'saq' | null) => void;
}

export default function PastPapersLibrary({
  progress,
  onSelectPaper,
  onBack,
  activeSection = 'past_papers',
  selectedUnit: controlledSelectedUnit,
  onSelectUnit: controlledOnSelectUnit,
  onSelectSAQCategory,
  selectedBank: controlledSelectedBank,
  onSelectBank: controlledOnSelectBank
}: PastPapersLibraryProps) {
  const [internalSelectedUnit, setInternalSelectedUnit] = React.useState<string | null>(null);
  const [internalSelectedBank, setInternalSelectedBank] = useState<'mcq' | 'saq' | null>(null);

  // Filter & Sort State
  const [filterState, setFilterState] = useState<PaperFilterState>(DEFAULT_PAPER_FILTERS);

  const selectedUnit = controlledSelectedUnit !== undefined ? controlledSelectedUnit : internalSelectedUnit;
  const setSelectedUnit = (unit: string | null) => {
    if (controlledOnSelectUnit) {
      controlledOnSelectUnit(unit);
    } else {
      setInternalSelectedUnit(unit);
    }
  };

  const selectedBank = controlledSelectedBank !== undefined ? controlledSelectedBank : internalSelectedBank;
  const setSelectedBank = (bank: 'mcq' | 'saq' | null) => {
    if (controlledOnSelectBank) {
      controlledOnSelectBank(bank);
    } else {
      setInternalSelectedBank(bank);
    }
  };

  const isPastPapers = activeSection === 'past_papers';
  const sourcePapers = isPastPapers ? BOARD_PAST_PAPERS : TNH_PRACTICE_PAPERS;

  // Block 1 Units Definitions (Unified full access)
  const unitsDefinition = useMemo(() => {
    const respiratoryPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Respiratory Disorders' || p.category === 'Respiratory Disorders'
    );
    const traumaPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Trauma and Emergency' ||
           (p.unit || p.category) === 'Trauma and Emergency Nursing' ||
           p.category === 'Trauma and Emergency' ||
           p.category === 'Trauma and Emergency Nursing'
    );
    const pharmacologyPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Pharmacology 1' || p.category === 'Pharmacology 1' || p.unit === 'Pharmacology'
    );
    const pharmacology2Papers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Pharmacology 2' || p.category === 'Pharmacology 2'
    );
    const perioperativePapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Perioperative Nursing' || p.category === 'Perioperative Nursing'
    );
    const paediatricsPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Paediatrics 1' ||
           p.category === 'Paediatrics 1' ||
           p.unit === 'Paediatrics Communicable Diseases' ||
           p.unit === 'Paediatric Medical Surgical Conditions' ||
           p.unit === 'Paediatric Nursing I' ||
           p.id.includes('paediatric')
    );
    const bloodPapers = sourcePapers.filter(
      p => (p.unit || p.category || '').includes('Blood') || p.id.includes('blood')
    );
    const gitPapers = sourcePapers.filter(
      p => (p.unit || p.category || '').includes('GIT') || p.id.includes('git')
    );
    const hcaPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'HCA' ||
           p.id.startsWith('hca-') ||
           (p.unit || '').includes('HCA') ||
           (p.unit || '').includes('Health Care Support Assistant')
    );
    const collegeFinalPapers = sourcePapers.filter(
      p => ((p.unit || p.category) === 'College Final Exams' ||
           p.id.startsWith('krn-collegefinal') ||
           p.id.includes('hospitalfinal') ||
           p.block === 'finals' ||
           p.category === 'College Final Exam' ||
           p.category === 'College Final Exams' ||
           (p.unit || '').includes('College Final')) &&
           !p.id.startsWith('hca-')
    );

    const allUnits = [
      {
        id: 'Respiratory Disorders',
        title: 'Respiratory Disorders',
        papersCount: respiratoryPapers.length,
        questionsCount: respiratoryPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: respiratoryPapers.length,
        unitType: 'respiratory' as const,
        saqCount: 0
      },
      {
        id: 'Trauma and Emergency',
        title: 'Trauma and Emergency',
        papersCount: traumaPapers.length,
        questionsCount: traumaPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: traumaPapers.length,
        unitType: 'trauma' as const,
        saqCount: 72
      },
      {
        id: 'Pharmacology 1',
        title: 'Pharmacology 1',
        papersCount: pharmacologyPapers.length,
        questionsCount: pharmacologyPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: pharmacologyPapers.length,
        unitType: 'pharmacology' as const,
        saqCount: 0
      },
      {
        id: 'Pharmacology 2',
        title: 'Pharmacology 2',
        papersCount: pharmacology2Papers.length,
        questionsCount: pharmacology2Papers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: pharmacology2Papers.length,
        unitType: 'pharmacology2' as const,
        saqCount: 0
      },
      {
        id: 'Perioperative Nursing',
        title: 'Perioperative Nursing',
        papersCount: perioperativePapers.length,
        questionsCount: perioperativePapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: perioperativePapers.length,
        unitType: 'perioperative' as const,
        saqCount: 0
      },
      {
        id: 'Paediatrics 1',
        title: 'Paediatrics 1',
        papersCount: paediatricsPapers.length,
        questionsCount: paediatricsPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: paediatricsPapers.length,
        unitType: 'paediatrics' as const,
        saqCount: 0
      },
      {
        id: 'Blood and Lymph Disorders',
        title: 'Blood and Lymph Disorders',
        papersCount: bloodPapers.length,
        questionsCount: bloodPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: bloodPapers.length,
        unitType: 'blood' as const,
        saqCount: 0
      },
      {
        id: 'GIT Disorders',
        title: 'GIT Disorders',
        papersCount: gitPapers.length,
        questionsCount: gitPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: gitPapers.length,
        unitType: 'git' as const,
        saqCount: 0
      },
      ...(collegeFinalPapers.length > 0 ? [{
        id: 'College Final Exams',
        title: 'College Final Exams',
        papersCount: collegeFinalPapers.length,
        questionsCount: collegeFinalPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: collegeFinalPapers.length,
        unitType: 'finals' as const,
        saqCount: 0
      }] : []),
      ...(hcaPapers.length > 0 ? [{
        id: 'HCA',
        title: 'HCA',
        papersCount: hcaPapers.length,
        questionsCount: hcaPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        rawTotalPapers: hcaPapers.length,
        unitType: 'hca' as const,
        saqCount: 0
      }] : [])
    ];

    if (!isPastPapers) {
      return allUnits.filter(u => u.papersCount > 0 || u.saqCount > 0);
    }
    return allUnits;
  }, [sourcePapers, isPastPapers]);

  const tnhSaqCategories = useMemo(() => {
    if (selectedUnit === 'Trauma and Emergency' || selectedUnit === 'Trauma and Emergency Nursing') {
      return getCategoriesByUnit('TNH Practice');
    }
    return [];
  }, [selectedUnit]);

  const tnhSaqTotalQuestions = useMemo(() => {
    return tnhSaqCategories.flatMap(c => c.questions || []).length;
  }, [tnhSaqCategories]);

  // Papers belonging to the currently selected Unit
  const rawScopedUnitPapers = useMemo(() => {
    if (!selectedUnit) return [];
    return sourcePapers.filter(
      p => {
        const u = p.unit || p.category || '';
        if (selectedUnit === 'Trauma and Emergency' || selectedUnit === 'Trauma and Emergency Nursing') {
          return u === 'Trauma and Emergency' ||
                 u === 'Trauma and Emergency Nursing' ||
                 p.category === 'Trauma and Emergency' ||
                 p.category === 'Trauma and Emergency Nursing';
        }
        if (
          selectedUnit === 'HCA' ||
          selectedUnit.includes('HCA') ||
          selectedUnit.includes('Health Care Support Assistant')
        ) {
          return (
            u === 'HCA' ||
            u.includes('HCA') ||
            u.includes('Health Care Support Assistant') ||
            p.id.startsWith('hca-')
          );
        }
        if (
          selectedUnit === 'Blood and Lymph Disorders' ||
          selectedUnit === 'Blood and Lymphatics' ||
          selectedUnit.includes('Blood and Lymph')
        ) {
          return u.includes('Blood') || p.id.includes('blood') || p.category === 'Blood and Lymph Disorders';
        }
        if (
          selectedUnit === 'GIT Disorders' ||
          selectedUnit === 'GIT' ||
          selectedUnit.includes('GIT')
        ) {
          return u.includes('GIT') || p.id.includes('git') || p.category === 'GIT Disorders';
        }
        if (
          selectedUnit === 'College Final Exams' ||
          selectedUnit.includes('College Final') ||
          selectedUnit.includes('Final Exam')
        ) {
          return (
            (u === 'College Final Exams' ||
             p.id.startsWith('krn-collegefinal') ||
             p.id.includes('hospitalfinal') ||
             p.block === 'finals' ||
             p.category === 'College Final Exam' ||
             p.category === 'College Final Exams') &&
            !p.id.startsWith('hca-')
          );
        }
        return u === selectedUnit ||
               p.category === selectedUnit ||
               (selectedUnit === 'Pharmacology 1' && p.unit === 'Pharmacology') ||
               (selectedUnit === 'Paediatrics 1' && (
                 p.unit === 'Paediatrics 1' ||
                 p.category === 'Paediatrics 1' ||
                 p.unit === 'Paediatrics Communicable Diseases' ||
                 p.unit === 'Paediatric Medical Surgical Conditions' ||
                 p.unit === 'Paediatric Nursing I' ||
                 p.id.includes('paediatric')
               ));
      }
    );
  }, [selectedUnit, sourcePapers]);

  // Determine current active pool of papers to filter/sort
  const effectiveBasePapers = useMemo(() => {
    if (!selectedUnit) {
      return sourcePapers;
    }
    return rawScopedUnitPapers;
  }, [selectedUnit, sourcePapers, rawScopedUnitPapers]);

  // Derived filter options based on effective base papers
  const distinctYears = useMemo(() => getDistinctYears(effectiveBasePapers), [effectiveBasePapers]);
  const distinctMonths = useMemo(() => getDistinctMonths(effectiveBasePapers), [effectiveBasePapers]);

  // Filtered & sorted papers
  const filteredPapers = useMemo(() => {
    return filterAndSortPapers(effectiveBasePapers, filterState, progress);
  }, [effectiveBasePapers, filterState, progress]);

  const isFiltered = useMemo(() => hasActiveFilters(filterState), [filterState]);

  const handleResetFilters = () => {
    setFilterState(DEFAULT_PAPER_FILTERS);
  };

  // Reusable Filter & Sort Bar Component
  // Clean, focused controls: Search, Year, Month, Sort.
  // No horizontal scrollbars, no overloaded options.
  const renderFilterBar = () => (
    <div className="space-y-2 bg-white border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 shadow-2xs w-full max-w-full min-w-0 box-border overflow-hidden">
      {/* Search Input (Full width, instant clear icon) */}
      <div className="relative w-full min-w-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={filterState.searchQuery}
          onChange={(e) => setFilterState(prev => ({ ...prev, searchQuery: e.target.value }))}
          placeholder="Search papers by year, month, title..."
          className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D]/20 focus:border-[#0B1B3D] transition-all"
          aria-label="Search exam papers"
        />
        {filterState.searchQuery && (
          <button
            type="button"
            onClick={() => setFilterState(prev => ({ ...prev, searchQuery: '' }))}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
            title="Clear search"
            aria-label="Clear search text"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Streamlined Controls: Year, Month, and Sort */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full min-w-0 max-w-full">
        {/* 1. Year Filter */}
        <div className="min-w-0 w-full space-y-1">
          <label htmlFor="filter-year-select" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
            Year
          </label>
          <div className="relative w-full min-w-0">
            <select
              id="filter-year-select"
              value={filterState.selectedYear}
              onChange={(e) => setFilterState(prev => ({ ...prev, selectedYear: e.target.value }))}
              className="w-full min-w-0 max-w-full pl-2.5 pr-7 py-1.5 sm:py-2 text-xs font-semibold bg-slate-50 hover:bg-slate-100/80 text-slate-800 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D]/20 focus:border-[#0B1B3D] cursor-pointer truncate appearance-none shadow-2xs transition-colors"
              aria-label="Filter by Year"
            >
              <option value="all">All Years ({distinctYears.length})</option>
              {distinctYears.map(yr => (
                <option key={yr} value={yr}>
                  {yr === 'Practice' ? 'Practice' : yr}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* 2. Month Filter */}
        <div className="min-w-0 w-full space-y-1">
          <label htmlFor="filter-month-select" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
            Month
          </label>
          <div className="relative w-full min-w-0">
            <select
              id="filter-month-select"
              value={filterState.selectedMonth}
              onChange={(e) => setFilterState(prev => ({ ...prev, selectedMonth: e.target.value }))}
              className="w-full min-w-0 max-w-full pl-2.5 pr-7 py-1.5 sm:py-2 text-xs font-semibold bg-slate-50 hover:bg-slate-100/80 text-slate-800 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D]/20 focus:border-[#0B1B3D] cursor-pointer truncate appearance-none shadow-2xs transition-colors"
              aria-label="Filter by Month"
            >
              <option value="all">All Months ({distinctMonths.length})</option>
              {distinctMonths.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* 3. Sort Selector */}
        <div className="col-span-2 sm:col-span-1 min-w-0 w-full space-y-1">
          <label htmlFor="filter-sort-select" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
            Sort
          </label>
          <div className="relative w-full min-w-0">
            <select
              id="filter-sort-select"
              value={filterState.sortBy}
              onChange={(e) => setFilterState(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="w-full min-w-0 max-w-full pl-2.5 pr-7 py-1.5 sm:py-2 text-xs font-semibold bg-slate-50 hover:bg-slate-100/80 text-slate-800 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D]/20 focus:border-[#0B1B3D] cursor-pointer truncate appearance-none shadow-2xs transition-colors"
              aria-label="Sort exam papers"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Active Filter Pills Strip (Only when filters are applied) */}
      {isFiltered && (
        <div className="flex items-center gap-1.5 flex-wrap pt-1.5 text-xs border-t border-slate-100">
          <span className="text-slate-400 text-[10px] font-medium mr-0.5 shrink-0">Active:</span>

          {filterState.searchQuery.trim() !== '' && (
            <button
              type="button"
              onClick={() => setFilterState(prev => ({ ...prev, searchQuery: '' }))}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer text-[11px] max-w-full"
              title="Remove search query"
            >
              <span className="truncate max-w-[120px]">Search: "{filterState.searchQuery}"</span>
              <X className="w-3 h-3 text-slate-400 hover:text-slate-600 shrink-0" />
            </button>
          )}

          {filterState.selectedYear !== 'all' && (
            <button
              type="button"
              onClick={() => setFilterState(prev => ({ ...prev, selectedYear: 'all' }))}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold border border-indigo-200/60 transition-colors cursor-pointer text-[11px]"
              title="Remove year filter"
            >
              <span>Year: {filterState.selectedYear}</span>
              <X className="w-3 h-3 text-indigo-400 hover:text-indigo-600 shrink-0" />
            </button>
          )}

          {filterState.selectedMonth !== 'all' && (
            <button
              type="button"
              onClick={() => setFilterState(prev => ({ ...prev, selectedMonth: 'all' }))}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold border border-sky-200/60 transition-colors cursor-pointer text-[11px]"
              title="Remove month filter"
            >
              <span>Month: {filterState.selectedMonth}</span>
              <X className="w-3 h-3 text-sky-400 hover:text-sky-600 shrink-0" />
            </button>
          )}

          {filterState.sortBy !== 'year-desc' && (
            <button
              type="button"
              onClick={() => setFilterState(prev => ({ ...prev, sortBy: 'year-desc' }))}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer text-[11px]"
              title="Reset sort to newest first"
            >
              <span className="truncate max-w-[140px]">Sort: {SORT_OPTIONS.find(o => o.value === filterState.sortBy)?.label}</span>
              <X className="w-3 h-3 text-slate-400 hover:text-slate-600 shrink-0" />
            </button>
          )}

          <button
            type="button"
            onClick={handleResetFilters}
            className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:underline px-1 py-0.5 cursor-pointer ml-auto shrink-0 inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear all</span>
          </button>
        </div>
      )}
    </div>
  );

  // Reusable Paper Card Component
  const renderPaperCard = (paper: PastPaper) => {
    const totalQuestions = paper.questions?.length || paper.totalQuestions || 0;
    const isPractice = paper.examType === 'Practice' || paper.year === 'Practice';
    const paperMonth = getPaperMonth(paper);
    const paperYear = isPractice ? 'Practice' : (paper.year || (getPaperYearNum(paper) > 0 ? getPaperYearNum(paper).toString() : ''));
    const paperExamType = getPaperExamType(paper);
    const paperStatus = getPaperStatus(paper, progress);

    // Dynamic color coding for year badge
    const yearNum = getPaperYearNum(paper);
    let badgeClass = 'bg-slate-50 text-slate-700 border-slate-200/80';
    if (isPractice) {
      badgeClass = 'bg-teal-50 text-teal-800 border-teal-200/80';
    } else if (yearNum >= 2025) {
      badgeClass = 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
    } else if (yearNum >= 2023) {
      badgeClass = 'bg-sky-50 text-sky-700 border-sky-200/80';
    } else if (yearNum >= 2020) {
      badgeClass = 'bg-blue-50 text-blue-700 border-blue-200/80';
    } else {
      badgeClass = 'bg-purple-50 text-purple-700 border-purple-200/80';
    }

    const sets = getRevisionSetsForPaper(paper.id);
    const completedSetsCount = sets.filter(s => !!progress.completedSets[makeSetKey(paper.id, s.id)]).length;
    const isAllCompleted = paperStatus === 'completed';
    const isInProgress = paperStatus === 'in_progress';

    return (
      <button
        key={paper.id}
        type="button"
        onClick={() => onSelectPaper(paper.id)}
        id={`paper-card-${paper.id}`}
        className="w-full text-left bg-white border border-slate-200/90 hover:border-indigo-400 p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
      >
        <div className="min-w-0 space-y-1.5 flex-1">
          {/* Title Row */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug">
              {paper.title}
            </h3>

            {/* Year Badge */}
            {paperYear && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${badgeClass}`}>
                {paperYear}
              </span>
            )}

            {/* Month Badge */}
            {paperMonth && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/90">
                {paperMonth}
              </span>
            )}

            {/* Exam Type Badge (if distinct from Main) */}
            {paperExamType && paperExamType !== 'Main Exam' && paperExamType !== 'Practice' && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/80">
                {paperExamType}
              </span>
            )}

            {/* Unit Badge when searching on Level 1 */}
            {selectedUnit === null && (paper.unit || paper.category) && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200/80">
                {paper.unit || paper.category}
              </span>
            )}

            {/* Status Badges */}
            {isAllCompleted && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Completed
              </span>
            )}

            {isInProgress && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-600" />
                In Progress
              </span>
            )}
          </div>

          {/* Subtitle / Metrics Row */}
          <p className="text-xs text-slate-500 font-medium">
            <span>{totalQuestions} Questions</span>
            <span className="mx-1">·</span>
            <span>{sets.length} {sets.length === 1 ? 'Set' : 'Sets'}</span>
            {completedSetsCount > 0 && !isAllCompleted && (
              <span className="text-indigo-600 font-semibold ml-1">
                ({completedSetsCount}/{sets.length} Completed)
              </span>
            )}
          </p>
        </div>

        <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] group-hover:translate-x-0.5 transition-all shrink-0" />
      </button>
    );
  };

  // ==========================================
  // LEVEL 1: Block 1 Units List (Matching SAQ view)
  // ==========================================
  if (selectedUnit === null) {
    return (
      <div className="space-y-4" id="screen-past-papers-units">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
              id="back-btn-library"
              title="Back"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
            </button>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {isPastPapers ? 'MCQ Bank' : 'TNH Practice'}
              </h1>
              <p className="text-xs text-slate-500">
                {sourcePapers.length} Papers · {sourcePapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0)} Questions
              </p>
            </div>
          </div>
        </div>

        {/* Global Filter Bar */}
        {renderFilterBar()}

        {/* If user filtered on Level 1, show matching papers directly */}
        {isFiltered ? (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                Matching Exam Papers ({filteredPapers.length})
              </span>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Back to Units
              </button>
            </div>

            {filteredPapers.length === 0 ? (
              <div className="border border-slate-200/90 bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-2xs">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">No exam papers found</h3>
                  <p className="text-xs text-slate-500 max-w-sm">
                    No papers matched your search criteria. Try adjusting your year, month, or search terms.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-[#0B1B3D] text-white rounded-xl text-xs font-bold hover:bg-indigo-900 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredPapers.map(renderPaperCard)}
              </div>
            )}
          </div>
        ) : (
          /* Normal Block 1 Units List */
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                Select Clinical Unit
              </h2>
              <span className="text-xs text-slate-400 font-medium">
                {unitsDefinition.length} Units Available
              </span>
            </div>

            {/* List of Unit Buttons */}
            <div className="space-y-2">
              {unitsDefinition.map(unit => {
                const iconStyles = {
                  respiratory: {
                    box: 'bg-sky-50 text-sky-600 border-sky-200/80 group-hover:bg-sky-100 group-hover:text-sky-700',
                    icon: <Wind className="w-4.5 h-4.5" />
                  },
                  trauma: {
                    box: 'bg-rose-50 text-rose-600 border-rose-200/80 group-hover:bg-rose-100 group-hover:text-rose-700',
                    icon: <Activity className="w-4.5 h-4.5" />
                  },
                  pharmacology: {
                    box: 'bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-100 group-hover:text-amber-700',
                    icon: <Pill className="w-4.5 h-4.5" />
                  },
                  pharmacology2: {
                    box: 'bg-emerald-50 text-emerald-600 border-emerald-200/80 group-hover:bg-emerald-100 group-hover:text-emerald-700',
                    icon: <Pill className="w-4.5 h-4.5" />
                  },
                  perioperative: {
                    box: 'bg-violet-50 text-violet-600 border-violet-200/80 group-hover:bg-violet-100 group-hover:text-violet-700',
                    icon: <Scissors className="w-4.5 h-4.5" />
                  },
                  paediatrics: {
                    box: 'bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-100 group-hover:text-amber-700',
                    icon: <Baby className="w-4.5 h-4.5" />
                  },
                  blood: {
                    box: 'bg-red-50 text-red-600 border-red-200/80 group-hover:bg-red-100 group-hover:text-red-700',
                    icon: <Droplets className="w-4.5 h-4.5" />
                  },
                  git: {
                    box: 'bg-orange-50 text-orange-600 border-orange-200/80 group-hover:bg-orange-100 group-hover:text-orange-700',
                    icon: <Utensils className="w-4.5 h-4.5" />
                  },
                  finals: {
                    box: 'bg-indigo-50 text-indigo-600 border-indigo-200/80 group-hover:bg-indigo-100 group-hover:text-indigo-700',
                    icon: <Award className="w-4.5 h-4.5" />
                  },
                  hca: {
                    box: 'bg-emerald-50 text-emerald-600 border-emerald-200/80 group-hover:bg-emerald-100 group-hover:text-emerald-700',
                    icon: <Award className="w-4.5 h-4.5" />
                  }
                }[unit.unitType];

                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnit(unit.id)}
                    id={`unit-card-${unit.id}`}
                    className="w-full text-left bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${iconStyles.box}`}>
                        {iconStyles.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
                          {unit.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {isPastPapers ? (
                            unit.papersCount > 0
                              ? `${unit.papersCount} ${unit.papersCount === 1 ? 'Paper' : 'Papers'} · ${unit.questionsCount} Questions`
                              : '0 Papers'
                          ) : (
                            `MCQ Bank: ${unit.questionsCount} Qs · SAQ Bank: ${unit.saqCount} Qs`
                          )}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // LEVEL: TNH Practice Mode Selection (MCQ vs SAQ)
  // ==========================================
  if (!isPastPapers && selectedBank === null) {
    return (
      <div className="max-w-md mx-auto py-8 sm:py-14 space-y-4" id="screen-tnh-practice-mode-selection">
        <div className="flex items-center mb-1">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-95"
            id="btn-practice-back-to-hub"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back</span>
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6 tracking-tight">
          {selectedUnit}
        </h1>

        <button
          type="button"
          onClick={() => setSelectedBank('mcq')}
          className="w-full py-4 px-6 rounded-2xl bg-[#0B1B3D] hover:bg-indigo-900 text-white font-bold text-base sm:text-lg text-center transition-all cursor-pointer shadow-xs active:scale-[0.99]"
          id="btn-practice-mode-mcq"
        >
          MCQs
        </button>

        {tnhSaqTotalQuestions > 0 ? (
          <button
            type="button"
            onClick={() => setSelectedBank('saq')}
            className="w-full py-4 px-6 rounded-2xl bg-[#0B1B3D] hover:bg-indigo-900 text-white font-bold text-base sm:text-lg text-center transition-all cursor-pointer shadow-xs active:scale-[0.99]"
            id="btn-practice-mode-saq"
          >
            SAQs
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="w-full py-4 px-6 rounded-2xl bg-slate-100 text-slate-400 border border-slate-200 font-bold text-base sm:text-lg text-center cursor-not-allowed opacity-60"
            id="btn-practice-mode-saq-disabled"
            title="No SAQs in practice for this unit"
          >
            SAQs
          </button>
        )}
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: Unit's Papers / Sets List
  // ==========================================
  return (
    <div className="space-y-4" id="screen-past-papers-list">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (!isPastPapers) {
                setSelectedBank(null);
              } else {
                onBack();
              }
            }}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
            id="back-btn-unit"
            title={!isPastPapers ? "Back to Practice Modes" : "Back to Unit Hub"}
            aria-label="Back"
          >
            <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-slate-400 truncate">
              <span className="text-indigo-900 font-bold">{selectedUnit === 'HCA' ? 'HCA' : 'Block 1'}</span>
              <span>·</span>
              <span>{isPastPapers ? 'MCQ Bank' : (selectedBank === 'mcq' ? 'MCQ Sets' : 'SAQ Sets')}</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug truncate">
              {selectedUnit}
            </h1>
          </div>
        </div>

        {/* Paper count pill */}
        <div className="text-right">
          <span className="text-xs font-bold text-slate-700 tabular-nums">
            {filteredPapers.length} of {effectiveBasePapers.length}
          </span>
          <span className="hidden sm:inline text-xs text-slate-400 font-medium ml-1">Papers</span>
        </div>
      </div>

      {/* Filter & Sort Bar (Only when viewing MCQ papers) */}
      {(isPastPapers || selectedBank === 'mcq') && renderFilterBar()}

      {/* Content Rendering: If SAQ Bank in TNH Practice */}
      {!isPastPapers && selectedBank === 'saq' ? (
        tnhSaqCategories.length > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1 py-1">
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                Trauma & Emergency Nursing SAQ Modules (Sets 1–4)
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {tnhSaqCategories.length} Modules · {tnhSaqTotalQuestions} Questions
              </span>
            </div>
            {tnhSaqCategories.map(category => {
              const catQuestions = category.questions || [];
              const displayCount = catQuestions.length;
              const masteredInCat = catQuestions.filter(q => (progress.masteredSAQs || []).includes(q.id)).length;
              const isAllMastered = catQuestions.length > 0 && masteredInCat === catQuestions.length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectSAQCategory && onSelectSAQCategory(category.id)}
                  className="w-full text-left bg-white border border-slate-200/90 hover:border-amber-400 p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
                  id={`tnh-saq-category-${category.id}`}
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-950 transition-colors leading-snug">
                        {category.title}
                      </h3>
                      {isAllMastered && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Mastered
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {`${displayCount} ${displayCount === 1 ? 'Question' : 'Questions'}`}
                      {masteredInCat > 0 && !isAllMastered && ` · ${masteredInCat} Mastered`}
                    </p>
                  </div>
                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" />
                </button>
              );
            })}
          </div>
        ) : (
          <div className="border border-slate-200/90 bg-white p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-3 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-md">
              <h3 className="text-base font-bold text-slate-900">
                SAQ Bank — {selectedUnit}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                No SAQ questions available for this unit yet. For now, all practice questions for this unit are organized under the MCQ Bank.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedBank('mcq')}
              className="px-4 py-2 bg-[#0B1B3D] text-white rounded-lg text-xs font-bold hover:bg-[#132A5E] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              View MCQ Bank ({effectiveBasePapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0)} Questions)
            </button>
          </div>
        )
      ) : filteredPapers.length === 0 ? (
        <div className="border border-slate-200/90 bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              {isFiltered ? 'No matching papers found' : 'No papers available for this unit yet'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm">
              {isFiltered
                ? 'Try clearing some filters or searching with different keywords.'
                : 'There are currently no examination papers uploaded for this category.'}
            </p>
          </div>
          {isFiltered ? (
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#0B1B3D] text-white rounded-xl text-xs font-bold hover:bg-indigo-900 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Reset All Filters
            </button>
          ) : (
            <button
              onClick={() => setSelectedUnit(null)}
              className="px-3.5 py-1.5 bg-[#0B1B3D] text-white rounded-lg text-xs font-bold hover:bg-[#132A5E] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Back to Units
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-2" id="papers-container">
          {filteredPapers.map(renderPaperCard)}
        </div>
      )}
    </div>
  );
}
