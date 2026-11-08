/**
 * Block 1 · Master SAQ Question Bank Aggregator
 * Combines unit-specific SAQ question banks:
 * - Respiratory Disorders (Normal/Official Past Paper SAQs: 29 questions)
 * - Trauma and Emergency Nursing (Normal/Official Past Paper SAQs: 11 questions)
 * - TNH Practice: Trauma and Emergency Nursing SAQ Bank (Sets 1–4: 72 questions across 16 Modules)
 */

import respiratorySaqsRaw from './respiratory-disorders/respiratorySaqs.json';
import traumaSaqsRaw from './trauma-and-emergency-nursing/traumaSaqs.json';
import tnhPracticeSaqsRaw from './tnh-practice/tnhPracticeSaqs.json';
import { SAQBankData, SAQQuestion, SAQPart } from '../../../types';

export const RESPIRATORY_SAQ_BANK = respiratorySaqsRaw as unknown as SAQBankData;
export const TRAUMA_SAQ_BANK = traumaSaqsRaw as unknown as SAQBankData;
export const TNH_PRACTICE_SAQ_BANK = tnhPracticeSaqsRaw as unknown as SAQBankData;

/** Normal (Official Board/Class Past Paper) SAQ Parts */
export const NORMAL_SAQ_PARTS: SAQPart[] = [
  ...(RESPIRATORY_SAQ_BANK.parts || []),
  ...(TRAUMA_SAQ_BANK.parts || [])
];

export const NORMAL_SAQ_QUESTIONS: SAQQuestion[] = NORMAL_SAQ_PARTS.flatMap(
  (part) => part.questions
);

/** TNH Practice SAQ Bank Parts (Specific to Trauma and Emergency Nursing) */
export const TNH_PRACTICE_SAQ_PARTS: SAQPart[] = TNH_PRACTICE_SAQ_BANK.parts || [];

export const TNH_PRACTICE_SAQ_QUESTIONS: SAQQuestion[] = TNH_PRACTICE_SAQ_PARTS.flatMap(
  (part) => part.questions
);

/** Unified Block 1 SAQ Bank containing all SAQs across normal past papers and TNH practice */
export const BLOCK1_SAQ_BANK: SAQBankData = {
  id: 'block1-master-saq-question-bank',
  title: 'Block 1: Master SAQ Question Bank',
  subtitle: 'Categorized by clinical unit: Respiratory Disorders, Trauma & Emergency Nursing, and TNH Practice.',
  author: 'MULWA <martinmulwa95@gmail.com>',
  version: '5.0.0',
  block: 'Block 1',
  category: 'Block 1 Clinical Units',
  totalQuestions:
    (RESPIRATORY_SAQ_BANK.totalQuestions || 0) +
    (TRAUMA_SAQ_BANK.totalQuestions || 0) +
    (TNH_PRACTICE_SAQ_BANK.totalQuestions || 0),
  parts: [
    ...NORMAL_SAQ_PARTS,
    ...TNH_PRACTICE_SAQ_PARTS
  ]
};

export const SAQ_BANK = BLOCK1_SAQ_BANK;

/** All condition categories across normal past papers and TNH practice */
export const SAQ_CATEGORIES: SAQPart[] = SAQ_BANK.parts;

export const ALL_SAQ_QUESTIONS: SAQQuestion[] = SAQ_BANK.parts.flatMap(
  (part) => part.questions
);

export const NORMAL_SAQ_UNITS_LIST = [
  'Respiratory Disorders',
  'Trauma and Emergency'
] as const;

export type SAQCategoryName = typeof NORMAL_SAQ_UNITS_LIST[number] | 'Trauma and Emergency Nursing' | 'TNH Practice';

/**
 * Returns SAQ categories for a normal unit or TNH Practice.
 */
export function getCategoriesByUnit(categoryName: string): SAQPart[] {
  if (categoryName === 'TNH Practice') {
    return TNH_PRACTICE_SAQ_PARTS;
  }
  const isTrauma = categoryName === 'Trauma and Emergency' || categoryName === 'Trauma and Emergency Nursing';
  return NORMAL_SAQ_PARTS.filter((c) => {
    const cat = c.category || c.questions?.[0]?.category || 'Respiratory Disorders';
    if (isTrauma) {
      return cat === 'Trauma and Emergency' || cat === 'Trauma and Emergency Nursing';
    }
    return cat === categoryName;
  });
}

/**
 * Returns TNH Practice SAQ categories specifically for a unit (e.g. Trauma and Emergency).
 */
export function getTNHSaqCategoriesForUnit(unitName: string): SAQPart[] {
  if (unitName === 'Trauma and Emergency' || unitName === 'Trauma and Emergency Nursing' || unitName === 'TNH Practice') {
    return TNH_PRACTICE_SAQ_PARTS;
  }
  return [];
}

export function getSAQsByUnit(categoryName: string): SAQQuestion[] {
  return getCategoriesByUnit(categoryName).flatMap((c) => c.questions);
}

export function getCategoryById(categoryId: string): SAQPart | undefined {
  return SAQ_CATEGORIES.find((c) => c.id === categoryId);
}

export function getSAQsByCategory(categoryId: string): SAQQuestion[] {
  const cat = getCategoryById(categoryId);
  return cat ? cat.questions : [];
}

export function getSAQById(id: string): SAQQuestion | undefined {
  return ALL_SAQ_QUESTIONS.find(
    (q) => q.id === id || q.qNumber.toLowerCase() === id.toLowerCase()
  );
}

export const SAQ_PARTS = SAQ_CATEGORIES;
