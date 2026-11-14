/**
 * Mulwa Clinical Exam Portal
 * Courses & Examination Blocks Curriculum Registry
 *
 * Defines the educational tracks (KRN, HCA) and academic stages (Block 1, Block 2, Finals).
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { CourseInfo, BlockInfo, CourseId, BlockId, PastPaper } from '../types';
import { BLOCK1_ALL_PAPERS, KRN_FINALS_ALL_PAPERS, HCA_ALL_PAPERS } from './papers';
import { SAQ_CATEGORIES } from './saqData';

const countQuestions = (papers: PastPaper[]): number =>
  papers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0);

const BLOCK1_PAPERS_COUNT = BLOCK1_ALL_PAPERS.length;
const BLOCK1_QUESTIONS_COUNT = countQuestions(BLOCK1_ALL_PAPERS);
const KRN_FINALS_PAPERS_COUNT = KRN_FINALS_ALL_PAPERS.length;
const KRN_FINALS_QUESTIONS_COUNT = countQuestions(KRN_FINALS_ALL_PAPERS);
const KRN_PAPERS_COUNT = BLOCK1_PAPERS_COUNT + KRN_FINALS_PAPERS_COUNT;
const KRN_QUESTIONS_COUNT = BLOCK1_QUESTIONS_COUNT + KRN_FINALS_QUESTIONS_COUNT;
const HCA_PAPERS_COUNT = HCA_ALL_PAPERS.length;
const HCA_QUESTIONS_COUNT = countQuestions(HCA_ALL_PAPERS);
const TOTAL_SAQ_COUNT = SAQ_CATEGORIES.reduce((sum, cat) => sum + (cat.questions?.length || 0), 0);

export const COURSES: CourseInfo[] = [
  {
    id: 'KRN',
    name: 'KRN',
    fullName: 'KRN',
    tagline: 'Diploma in Registered Nursing Examination Portal',
    description: 'Official examination papers, clinical rationales, high-yield SAQs, and lecture study curriculum across all training stages.',
    isAvailable: true,
    activeBadge: `Active · ${KRN_PAPERS_COUNT} Papers`,
    papersCount: KRN_PAPERS_COUNT,
    questionsCount: KRN_QUESTIONS_COUNT,
    saqCount: TOTAL_SAQ_COUNT
  },
  {
    id: 'HCA',
    name: 'HCA',
    fullName: 'HCA',
    tagline: 'Certified Healthcare Assistant & Patient Care Support',
    description: 'Patient safety, vital signs assessment, infection prevention, basic care protocols, and college final examinations.',
    isAvailable: true,
    activeBadge: `Active · ${HCA_PAPERS_COUNT} Papers`,
    papersCount: HCA_PAPERS_COUNT,
    questionsCount: HCA_QUESTIONS_COUNT,
    saqCount: 0
  }
];

export const KRN_BLOCKS: BlockInfo[] = [
  {
    id: 'block1',
    courseId: 'KRN',
    title: 'Block 1',
    code: 'MSN 101, 102, 103, 105 · PHM 102 · PEN 101 · MHN 201',
    subtitle: 'Respiratory, Trauma, Pharmacology 1 & 2, Paediatrics 1, Blood/Lymph & GIT',
    description: `Core foundational clinical nursing papers including ${BLOCK1_PAPERS_COUNT} curated examination papers, ${BLOCK1_QUESTIONS_COUNT.toLocaleString()} MCQs, and ${TOTAL_SAQ_COUNT} SAQs.`,
    isAvailable: true,
    activeBadge: `Active · ${BLOCK1_PAPERS_COUNT} Papers`,
    papersCount: BLOCK1_PAPERS_COUNT,
    questionsCount: BLOCK1_QUESTIONS_COUNT,
    saqCount: TOTAL_SAQ_COUNT,
    units: [
      'Respiratory Disorders',
      'Trauma and Emergency',
      'Pharmacology 1',
      'Pharmacology 2',
      'Paediatrics 1',
      'Blood and Lymph Disorders',
      'GIT Disorders'
    ]
  },
  {
    id: 'block2',
    courseId: 'KRN',
    title: 'Block 2',
    code: 'MSN 201, 202, 203 · RH 201',
    subtitle: 'Cardiovascular, Renal, Gastrointestinal & Reproductive Health',
    description: 'Specialized clinical nursing curriculum and examination question banks currently in preparation.',
    isAvailable: false,
    activeBadge: 'Coming Soon',
    papersCount: 0,
    questionsCount: 0,
    saqCount: 0,
    units: [
      'Cardiovascular Disorders',
      'Renal & Urology Nursing',
      'Gastrointestinal Nursing',
      'Reproductive Health & Midwifery'
    ]
  },
  {
    id: 'finals',
    courseId: 'KRN',
    title: 'Finals & Licensure',
    code: 'KRCHN Final Exams',
    subtitle: 'March 2009–2014, Sept 2012–2013, Sept 2019 & 2021 Finals',
    description: `Comprehensive qualifying and hospital/college final examination papers across all clinical domains (${KRN_FINALS_QUESTIONS_COUNT.toLocaleString()} MCQs across 30 revision sets).`,
    isAvailable: true,
    activeBadge: `Active · ${KRN_FINALS_PAPERS_COUNT} Papers`,
    papersCount: KRN_FINALS_PAPERS_COUNT,
    questionsCount: KRN_FINALS_QUESTIONS_COUNT,
    saqCount: 0,
    units: [
      'College Final Exams'
    ]
  }
];

export const HCA_BLOCKS: BlockInfo[] = [
  {
    id: 'block1',
    courseId: 'HCA',
    title: 'Stage 1: Foundations',
    code: 'HCA 101',
    subtitle: 'Fundamentals of Healthcare Support & Infection Control',
    description: 'Introductory patient hygiene, bed making, feeding, and medical asepsis modules.',
    isAvailable: false,
    activeBadge: 'Coming Soon',
    papersCount: 0,
    questionsCount: 0,
    saqCount: 0,
    units: ['Basic Patient Care', 'Infection Prevention', 'Vital Signs Monitoring']
  },
  {
    id: 'block2',
    courseId: 'HCA',
    title: 'Stage 2: Clinical Support',
    code: 'HCA 102',
    subtitle: 'Assisting in Clinical Procedures & First Aid',
    description: 'Clinical assistance, emergency first aid, mobility support, and documentation.',
    isAvailable: false,
    activeBadge: 'Coming Soon',
    papersCount: 0,
    questionsCount: 0,
    saqCount: 0,
    units: ['Mobility & Transfer', 'Nutrition Support', 'First Aid Response']
  },
  {
    id: 'finals',
    courseId: 'HCA',
    title: 'College Final Exams',
    code: 'HCA Final Exams',
    subtitle: 'College Final Exam Past Papers',
    description: 'Official College Final Examination papers covering general patient care, infection control, first aid, nutrition, anatomy and physiology, and professional practice.',
    isAvailable: true,
    activeBadge: 'Active · 2 Papers',
    papersCount: 2,
    questionsCount: 198,
    saqCount: 0,
    units: ['HCA']
  }
];

export function getCourseById(courseId: CourseId): CourseInfo | undefined {
  return COURSES.find(c => c.id === courseId);
}

export function getBlocksForCourse(courseId: CourseId): BlockInfo[] {
  if (courseId === 'KRN') return KRN_BLOCKS;
  if (courseId === 'HCA') return HCA_BLOCKS;
  return [];
}

export function getBlockById(courseId: CourseId, blockId: BlockId): BlockInfo | undefined {
  const blocks = getBlocksForCourse(courseId);
  return blocks.find(b => b.id === blockId);
}
