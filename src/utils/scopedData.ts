/**
 * Mulwa Clinical Exam Portal
 * Unified Data Provider & Question Provider
 *
 * All users have full, unrestricted access to all examination papers, MCQs, and SAQs.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 3.0.0
 */

import { PastPaper, Question, SAQPart, SAQQuestion } from '../types';
import { findPaper } from '../data/questions';

/**
 * Returns all past papers without restrictions.
 */
export function getScopedPapers(papers: PastPaper[]): PastPaper[] {
  return papers;
}

/**
 * Returns the requested exam paper without restrictions.
 */
export function getScopedPaper(rawPaper: PastPaper | undefined): PastPaper | undefined {
  return rawPaper;
}

/**
 * Returns all SAQ condition categories without restrictions.
 */
export function getScopedSAQCategories(categories: SAQPart[]): SAQPart[] {
  return categories;
}

/**
 * Returns all SAQ questions for a category without restrictions.
 */
export function getScopedSAQQuestions(questions: SAQQuestion[]): SAQQuestion[] {
  return questions;
}

/**
 * Retrieves questions for a specific set with full access for all candidates.
 */
export function getScopedQuestionsForSet(paperId: string, setIdentifier: string | number): Question[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const setNumber = typeof setIdentifier === 'number'
    ? setIdentifier
    : parseInt(String(setIdentifier).replace(/\D/g, ''), 10) || 1;

  return (paper.questions || []).filter(q => q.setNumber === setNumber);
}
