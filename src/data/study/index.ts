/**
 * Mulwa Clinical Exam Portal
 * Study Curriculum Barrel & Aggregator
 *
 * Strict 5-tier navigation hierarchy:
 * 1. Homescreen Dashboard -> "Study"
 * 2. Select Block (Block 1)
 * 3. Select Unit (Pharmacology 1)
 * 4. Select Category (Antibiotics)
 * 5. Select Topic ("1. Foundations: Classification of Antibiotics")
 * 6. Topic Study Guide Reader
 *
 * Only active blocks, units, categories, and topics with available study content are included.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 6.0.0
 */

import { ANTIBIOTICS_SECTION_1 } from './antibioticsContent';
import { ANTIBIOTICS_SECTION_2 } from './combinationsContent';
import { ANTIBIOTICS_SECTION_3 } from './penicillinsContent';
import { ANTIBIOTICS_SECTION_4 } from './cephalosporinsContent';
import { ANTIBIOTICS_SECTION_5 } from './carbapenemsContent';
import { ANTIBIOTICS_SECTION_6 } from './macrolidesContent';
import { ANTIBIOTICS_SECTION_7 } from './lincosamidesContent';

export * from './antibioticsContent';
export * from './combinationsContent';
export * from './penicillinsContent';
export * from './cephalosporinsContent';
export * from './carbapenemsContent';
export * from './macrolidesContent';
export * from './lincosamidesContent';

export interface StudyTopicItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  status: 'available';
  readTime: string;
}

export interface StudyUnitCategory {
  id: string;
  name: string;
  description: string;
  status: 'available';
  topics: StudyTopicItem[];
}

export interface StudyBlockUnit {
  id: string;
  name: string;
  code: string;
  description: string;
  iconType: 'pharmacology' | 'respiratory' | 'trauma';
  categories: StudyUnitCategory[];
}

export interface StudyBlock {
  id: string;
  name: string;
  code: string;
  description: string;
  status: 'available';
  units: StudyBlockUnit[];
}

export const STUDY_CURRICULUM: StudyBlock[] = [
  {
    id: 'block1',
    name: 'Block 1',
    code: 'MSN 101, 102, 103',
    description: 'Foundations of Clinical Medicine & Nursing Practice',
    status: 'available',
    units: [
      {
        id: 'pharmacology-1',
        name: 'Pharmacology 1',
        code: 'MSN 103',
        description: 'Clinical Pharmacology Unit',
        iconType: 'pharmacology',
        categories: [
          {
            id: 'antibiotics',
            name: 'Antibiotics',
            description: 'Antimicrobial foundations, bacterial targets, and exam preparation',
            status: 'available',
            topics: [
              {
                id: ANTIBIOTICS_SECTION_1.id,
                number: '1',
                title: '1. Foundations: Classification of Antibiotics',
                shortTitle: '1. Foundations: Classification of Antibiotics',
                subtitle: 'Definitions, 5 targets, selective toxicity, 30S vs 50S ribosomes, static vs cidal rules, and past papers',
                status: 'available',
                readTime: '12 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_2.id,
                number: '2',
                title: '2. Combinations: Synergism and Beta-lactamase',
                shortTitle: '2. Combinations: Synergism & Beta-lactamase',
                subtitle: 'Results of combination therapy, indications, synergism mechanisms, beta-lactamase & stewardship',
                status: 'available',
                readTime: '12 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_3.id,
                number: '3',
                title: '3. Penicillins: Main Classes & Penicillins',
                shortTitle: '3. Penicillins',
                subtitle: 'Overview of main classes, 4 penicillin groups, depot formulations, paediatric dosing, anaphylaxis & Kenya protocols',
                status: 'available',
                readTime: '14 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_4.id,
                number: '4',
                title: '4. Cephalosporins: Generations & Clinical Rules',
                shortTitle: '4. Cephalosporins',
                subtitle: '1st to 5th generations, BBB penetration, ceftriaxone pearls, LAME blind spots & cross-allergy rules',
                status: 'available',
                readTime: '13 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_5.id,
                number: '5',
                title: '5. Carbapenems: Broad-Spectrum & Reserve Rules',
                shortTitle: '5. Carbapenems',
                subtitle: 'Imipenem/cilastatin, meropenem, ESBLs, DHP-1, seizure watch & hospital antimicrobial stewardship',
                status: 'available',
                readTime: '10 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_6.id,
                number: '6',
                title: '6. Macrolides: 50S Inhibitors & Clinical Rules',
                shortTitle: '6. Macrolides',
                subtitle: '50S subunit, atypical pneumonia, H. pylori triple therapy, CYP3A4 interactions & IV phlebitis',
                status: 'available',
                readTime: '11 min read'
              },
              {
                id: ANTIBIOTICS_SECTION_7.id,
                number: '7',
                title: '7. Lincosamides & Antibiotic-Associated Diarrhoea',
                shortTitle: '7. Lincosamides & AAD',
                subtitle: 'Clindamycin, 50S inhibition, Toxic Shock Syndrome, C. difficile colitis, Enterogermina & loperamide',
                status: 'available',
                readTime: '13 min read'
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getStudyBlockById(blockId: string): StudyBlock | undefined {
  return STUDY_CURRICULUM.find(b => b.id === blockId);
}

export function getStudyUnitById(blockId: string, unitId: string): StudyBlockUnit | undefined {
  const block = getStudyBlockById(blockId);
  if (!block) return undefined;
  return block.units.find(u => u.id === unitId);
}

export function getStudyTopicById(topicId: string) {
  if (topicId === ANTIBIOTICS_SECTION_7.id) {
    return ANTIBIOTICS_SECTION_7;
  }
  if (topicId === ANTIBIOTICS_SECTION_6.id) {
    return ANTIBIOTICS_SECTION_6;
  }
  if (topicId === ANTIBIOTICS_SECTION_5.id) {
    return ANTIBIOTICS_SECTION_5;
  }
  if (topicId === ANTIBIOTICS_SECTION_4.id) {
    return ANTIBIOTICS_SECTION_4;
  }
  if (topicId === ANTIBIOTICS_SECTION_3.id) {
    return ANTIBIOTICS_SECTION_3;
  }
  if (topicId === ANTIBIOTICS_SECTION_2.id) {
    return ANTIBIOTICS_SECTION_2;
  }
  return ANTIBIOTICS_SECTION_1;
}
