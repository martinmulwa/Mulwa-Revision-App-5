/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Component View: 7. Lincosamides & Antibiotic-Associated Diarrhoea
 *
 * Implements 100% complete content preservation across all Parts A to G:
 * - Part A: Theory (What are lincosamides, Indications, Pseudomembranous Colitis 6-step management, AAD, Probiotics & Loperamide rules)
 * - Part B: Exam Focus & Frequency Analysis (Mobile Responsive Cards & Desktop Matrix Table)
 * - Part C & D: Past-Paper Questions & Explanations (Interactive Q1 to Q5 MCQs + Q6 to Q9 True/False cluster)
 * - Part E: How to Always Get These Right (5 Rules + 3 Memory Aids)
 * - Part F: Interactive Mini Self-Test (4 practice items with score tracker & retry)
 * - Part G: Rapid Section Summary (4 high-yield bullets with copy feature)
 *
 * Fully responsive, high-contrast, zero-horizontal-scroll layout with generous breathing room.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShieldAlert,
  Pill,
  Syringe,
  Info,
  Brain,
  Layers,
  Sparkles,
  Zap,
  Activity,
  HeartCrack,
  Flame,
  Stethoscope,
  Ban,
  Droplet
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_7,
  StudyExamQuestion,
  SelfTestQuestion
} from '../../data/study';
import { StudyActiveTab } from './Topic2CombinationsView';

interface Topic7LincosamidesViewProps {
  activeSubTab: StudyActiveTab;
  examAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  revealedRationales: Record<string, boolean>;
  selfTestAnswers: Record<string, number>;
  onSelectExamOption: (questionId: string, optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onToggleRationale: (questionId: string) => void;
  onSelectSelfTestOption: (qId: string, optionIdx: number) => void;
  onResetSelfTest: () => void;
  onCopySummary: () => void;
  copiedLink: boolean;
}

export default function Topic7LincosamidesView({
  activeSubTab,
  examAnswers,
  revealedRationales,
  selfTestAnswers,
  onSelectExamOption,
  onToggleRationale,
  onSelectSelfTestOption,
  onResetSelfTest,
  onCopySummary,
  copiedLink
}: Topic7LincosamidesViewProps) {
  const currentTopic = ANTIBIOTICS_SECTION_7;

  const showTheory = activeSubTab === 'all' || activeSubTab === 'theory';
  const showFocus = activeSubTab === 'all' || activeSubTab === 'focus';
  const showExamPairs = activeSubTab === 'all' || activeSubTab === 'exam_pairs';
  const showMasterTable = activeSubTab === 'all' || activeSubTab === 'master_table';
  const showSelfTest = activeSubTab === 'all' || activeSubTab === 'self_test';
  const showSummary = activeSubTab === 'all' || activeSubTab === 'summary';

  // Calculate self-test score
  const answeredCount = Object.keys(selfTestAnswers).length;
  const correctCount = currentTopic.miniSelfTest.reduce((acc, q) => {
    return acc + (selfTestAnswers[q.id] === q.correctIndex ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-6 sm:space-y-8 max-w-full overflow-hidden" id="study-topic-7-lincosamides">
      {/* =========================================================
          PART A: THEORY
          ========================================================= */}
      {showTheory && (
        <section className="space-y-5" id="part-a-theory">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
            <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              A
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                PART A: THEORY & LECTURE BLUEPRINTS
              </h2>
              <p className="text-xs text-slate-500">
                Clindamycin mechanism, indications, C. difficile pseudomembranous colitis, probiotics & loperamide pharmacology
              </p>
            </div>
          </div>

          {/* A1: What are lincosamides? */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4 overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-teal-800">
                  A1. Definition, Mechanism & Spectrum
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mt-0.5">
                  What Are Lincosamides?
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Pill className="w-3.5 h-3.5 text-teal-600" />
                  Agents & Mechanism of Action
                </h4>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Core Agents:</strong> <strong>Lincomycin</strong> and <strong>Clindamycin</strong> (clindamycin is a chlorinated semi-synthetic derivative with superior potency, bioavailability, and clinical utility).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Mechanism (slide):</strong> Reversibly binds to the <strong>50S ribosomal subunit</strong> of bacteria, blocking peptidyltransferase transpeptidation and protein synthesis → <strong>bacteriostatic</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Antimicrobial Spectrum:</strong> Highly potent against Gram-positive cocci (staphylococci, streptococci) and anaerobic pathogens (<em>Bacteroides fragilis</em>, peptostreptococci, clostridia).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50/60 border border-rose-200/80 rounded-xl p-3.5 sm:p-4 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                  Microbiological Blind Spots (Not Covered)
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-rose-950">Lincosamides have ZERO activity against:</p>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-950 font-medium text-xs">
                      ✗ <strong>Gram-negative aerobes:</strong> <em>E. coli</em>, <em>Klebsiella</em>, <em>Pseudomonas aeruginosa</em>, <em>Proteus</em> (outer membrane barrier).
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-950 font-medium text-xs">
                      ✗ <strong>Enterococci:</strong> <em>E. faecalis</em> and <em>E. faecium</em> are intrinsically resistant.
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-950 font-medium text-xs">
                      ✗ <strong>Hospital MRSA:</strong> Often exhibits inducible cross-resistance (MLSb phenotype).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indications Card Deck */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Clinical Uses from Lecture Slides & Exam Blueprints:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                {currentTopic.theory.indications.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-200/90 bg-slate-50 space-y-2 shadow-2xs flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-2xs font-extrabold px-2 py-0.5 rounded bg-teal-100 text-teal-900 border border-teal-200">
                          {ind.examBadge}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug pt-1">
                        {ind.indication}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        <strong>Context:</strong> {ind.clinicalContext}
                      </p>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs leading-relaxed font-semibold">
                      <span className="text-teal-900 font-bold block mb-0.5">Clinical Rationale:</span>
                      {ind.rationale}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* A2: The Big Warning: Pseudomembranous Colitis */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4 overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-rose-800">
                  A2. High-Yield Complication (Lecture Slide)
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mt-0.5">
                  Pseudomembranous Colitis (<em>Clostridioides difficile</em>)
                </h3>
              </div>
            </div>

            {/* Pathophysiology Box */}
            <div className="bg-amber-50 border border-amber-300/80 rounded-xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span>The Culprit & Mechanism of Action:</span>
              </div>
              <p className="leading-relaxed whitespace-pre-line font-medium text-slate-800">
                {currentTopic.theory.pseudomembranousColitis.pathophysiology}
              </p>
              <div className="pt-1 text-xs text-amber-900 font-semibold border-t border-amber-200">
                <strong>Timeline:</strong> {currentTopic.theory.pseudomembranousColitis.onsetTiming}
              </div>
            </div>

            {/* 6 Nursing Management Steps: Non-cramped, structured cards */}
            <div className="space-y-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 block">
                6-Step Nursing Management & Infection Control Protocol:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {currentTopic.theory.pseudomembranousColitis.nursingManagementSteps.map(step => (
                  <div
                    key={step.stepNumber}
                    className={`p-3.5 sm:p-4 rounded-xl border flex flex-col justify-between space-y-2.5 shadow-2xs ${
                      step.stepNumber === 3
                        ? 'bg-rose-50/80 border-rose-300 text-rose-950'
                        : step.stepNumber === 5
                        ? 'bg-teal-50/80 border-teal-300 text-teal-950'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                          #{step.stepNumber}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed font-medium pl-8">
                        {step.action}
                      </p>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/90 text-xs mt-1">
                      <span className="font-bold text-rose-900 block mb-0.5">Examiner Alert:</span>
                      <span className="font-semibold text-slate-800">{step.keyWarning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* A3: Antibiotic-Associated Diarrhoea in General & Loperamide */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4 overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shrink-0 mt-0.5">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-teal-800">
                  A3. Clinical Cluster
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mt-0.5">
                  Antibiotic-Associated Diarrhoea (AAD), Probiotics & Loperamide Rules
                </h3>
              </div>
            </div>

            {/* Mild Form & Probiotics */}
            <div className="bg-teal-50/60 border border-teal-200 rounded-xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm text-teal-950">
              <h4 className="font-bold text-sm text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600" />
                Mild Antibiotic Diarrhoea & The Role of Probiotics
              </h4>
              <p className="leading-relaxed font-medium text-slate-800">
                {currentTopic.theory.aadGeneral.mildFormDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                {currentTopic.theory.aadGeneral.managementRules.map((rule, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-white border border-teal-200/80 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loperamide Deep-Dive Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm">
                    Loperamide (Imodium) — Tested Pharmacology & Strict Nursing Rules
                  </h4>
                </div>
                <span className="text-2xs font-extrabold px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-200">
                  Heavily Tested
                </span>
              </div>

              <div className="space-y-2 text-slate-700 leading-relaxed font-medium">
                <p>
                  <strong>Mechanism:</strong> {currentTopic.theory.aadGeneral.loperamideCoreFacts.mechanism}
                </p>
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950">
                  <strong className="block text-amber-900 font-bold mb-0.5">
                    The 48-Hour Discontinuation Rule (Past Paper MCQ):
                  </strong>
                  <span>{currentTopic.theory.aadGeneral.loperamideCoreFacts.stoppingRule}</span>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-900 block font-bold">Absolute Contraindications:</strong>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                    {currentTopic.theory.aadGeneral.loperamideCoreFacts.contraindications.map((ci, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-xs">
                        <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{ci}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PART B: EXAM FOCUS
          ========================================================= */}
      {showFocus && (
        <section className="space-y-4" id="part-b-focus">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
            <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              B
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                PART B: EXAM FOCUS & PAPER FREQUENCY
              </h2>
              <p className="text-xs text-slate-500">
                Past papers analysis for lincosamides, C. difficile, Enterogermina & loperamide
              </p>
            </div>
          </div>

          {/* Mobile Responsive Cards */}
          <div className="sm:hidden space-y-3">
            {currentTopic.examFocus.map((row, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-2.5 overflow-hidden"
              >
                <div className="border-b border-slate-200/70 pb-2">
                  <h3 className="font-bold text-sm text-slate-900 break-words">
                    {row.topic}
                  </h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-2xs font-extrabold uppercase tracking-wider text-teal-800 block mb-0.5">
                      Source Papers
                    </span>
                    <span className="font-bold text-slate-800">{row.sourcePapers}</span>
                  </div>
                  <div>
                    <span className="text-2xs font-extrabold uppercase tracking-wider text-rose-800 block mb-0.5">
                      Exam Trap / Strategy
                    </span>
                    <p className="text-slate-700 leading-relaxed font-medium break-words">
                      {row.trap}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm divide-y divide-slate-200">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                <tr>
                  <th className="p-3.5 w-5/12">Topic / Concept Tested</th>
                  <th className="p-3.5 w-1/4">Source Papers</th>
                  <th className="p-3.5 w-1/3">Exam Trap / Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {currentTopic.examFocus.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="p-3.5 font-bold text-slate-900 align-top">
                      {row.topic}
                    </td>
                    <td className="p-3.5 text-slate-800 align-top leading-relaxed font-semibold">
                      <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 text-xs">
                        {row.sourcePapers}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-800 align-top leading-relaxed text-xs sm:text-sm font-medium">
                      {row.trap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* =========================================================
          PART C & D: PAST-PAPER QUESTIONS & EXPLANATIONS
          ========================================================= */}
      {showExamPairs && (
        <section className="space-y-5" id="part-c-past-papers">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                C/D
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  PART C & D: PAST-PAPER QUESTIONS & EXPLANATIONS
                </h2>
                <p className="text-xs text-slate-500">
                  Attempt these 9 past-paper questions (including the linked True/False cluster), then inspect full rationales and trap alerts
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {currentTopic.pastPaperQuestions.map((q: StudyExamQuestion) => {
              const selectedOption = examAnswers[q.id];
              const isRevealed = !!revealedRationales[q.id];
              const isCorrect = selectedOption === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5 transition-all overflow-hidden"
                  id={`lincosamides-q-${q.number}`}
                >
                  {/* Stem Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3">
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                          Q{q.number}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                          {q.examRef}
                        </span>
                        {q.notes && (
                          <span className="text-xs text-slate-500 font-semibold truncate">
                            {q.notes}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words pt-1">
                        {q.stem}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleRationale(q.id)}
                      className="self-start sm:self-auto px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl min-h-[36px] shrink-0 cursor-pointer transition-colors"
                    >
                      {isRevealed ? 'Hide Rationale' : 'Solution'}
                    </button>
                  </div>

                  {/* Options Selector Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map(opt => {
                      const isOptionSelected = selectedOption === opt.key;
                      const isOptionCorrect = opt.key === q.correctAnswer;

                      let btnStyle = 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-800';

                      if (isRevealed) {
                        if (isOptionCorrect) {
                          btnStyle = 'border-teal-500 bg-teal-50/90 text-teal-950 font-bold';
                        } else if (isOptionSelected) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
                        } else {
                          btnStyle = 'border-slate-200 bg-slate-50/40 text-slate-400';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'border-teal-500 bg-teal-50/80 text-teal-950 font-bold';
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => onSelectExamOption(q.id, opt.key)}
                          className={`p-3 sm:p-3.5 rounded-xl border flex items-start gap-3 transition-all min-h-[48px] cursor-pointer text-left w-full overflow-hidden ${btnStyle}`}
                        >
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                              isRevealed && isOptionCorrect
                                ? 'bg-teal-700 text-white'
                                : isRevealed && isOptionSelected
                                ? 'bg-rose-600 text-white'
                                : isOptionSelected
                                ? 'bg-[#0B1B3D] text-white'
                                : 'bg-white border border-slate-300 text-slate-700'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="text-sm sm:text-base font-semibold leading-relaxed break-words flex-1 min-w-0">
                            {opt.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Revealed Explanation Drawer */}
                  {isRevealed && (
                    <div className="border-t border-slate-100 pt-3 space-y-2.5 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                            isCorrect
                              ? 'bg-teal-50 text-teal-900 border border-teal-200'
                              : 'bg-rose-50 text-rose-900 border border-rose-200'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-teal-600" />
                              Correct Answer: {q.correctAnswer}
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              Correct Answer: {q.correctAnswer}
                            </>
                          )}
                        </span>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-2 text-sm sm:text-base leading-relaxed">
                        <p className="text-slate-800 break-words">
                          <strong className="text-teal-950 font-bold">Why:</strong> {q.explanation}
                        </p>
                        <p className="text-slate-700 break-words">
                          <strong className="text-rose-950 font-bold">Wrong Options:</strong> {q.wrongOptionsExplanation}
                        </p>
                        {q.trapAlert && (
                          <p className="text-amber-950 bg-amber-50 p-3 rounded-lg border border-amber-200 font-medium break-words text-xs sm:text-sm">
                            <strong className="font-bold">Examiner Trap:</strong> {q.trapAlert}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          PART E: HOW TO ALWAYS GET THESE RIGHT (STRATEGY & MNEMONICS)
          ========================================================= */}
      {showMasterTable && (
        <section className="space-y-5" id="part-e-strategy">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
            <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              E
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                PART E: HOW TO ALWAYS GET THESE RIGHT
              </h2>
              <p className="text-xs text-slate-500">
                Core decision rules, memory aids & clinical heuristics
              </p>
            </div>
          </div>

          {/* Strategy Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentTopic.strategyRules.map(rule => (
              <div
                key={rule.ruleNumber}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-2 flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-teal-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {rule.ruleNumber}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug break-words">
                      {rule.ruleTitle}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 break-words font-medium">
                    {rule.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Memory Aids */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4 overflow-hidden">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <Brain className="w-5 h-5 text-teal-600" />
              <span>High-Yield Clinical Mnemonics</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentTopic.memoryAids.map((aid, i) => (
                <div
                  key={i}
                  className="bg-teal-50/60 border border-teal-200/80 rounded-xl p-3.5 space-y-1.5 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-1">
                    <span className="text-2xs font-extrabold uppercase tracking-wider text-teal-800">
                      {aid.title}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-teal-950 leading-snug break-words">
                      "{aid.phrase}"
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed pt-1 break-words font-medium">
                      {aid.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PART F: MINI SELF-TEST
          ========================================================= */}
      {showSelfTest && (
        <section className="space-y-5" id="part-f-self-test">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                F
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  PART F: MINI SELF-TEST
                </h2>
                <p className="text-xs text-slate-500">
                  4 rapid clinical practice items to reinforce high-yield concepts
                </p>
              </div>
            </div>

            {answeredCount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-900">
                  Score: {correctCount} / {currentTopic.miniSelfTest.length}
                </span>
                <button
                  onClick={onResetSelfTest}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Reset quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {currentTopic.miniSelfTest.map((q: SelfTestQuestion, idx: number) => {
              const selectedIdx = selfTestAnswers[q.id];
              const isAnswered = selectedIdx !== undefined;
              const isCorrect = selectedIdx === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 overflow-hidden"
                  id={`self-test-${q.id}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-teal-800">
                      Practice Item {idx + 1} of {currentTopic.miniSelfTest.length}
                    </span>
                    {isAnswered && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-900'
                            : 'bg-rose-100 text-rose-900'
                        }`}
                      >
                        {isCorrect ? 'Correct' : 'Review Answer'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed break-words">
                    {q.question}
                  </h3>

                  <div className="grid grid-cols-1 gap-1.5">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedIdx === oIdx;
                      const isOptionCorrect = oIdx === q.correctIndex;

                      let optClass =
                        'border-slate-200/90 bg-slate-50/70 text-slate-800 hover:bg-slate-100 hover:border-slate-300';

                      if (isOptionSelected) {
                        if (isOptionCorrect) {
                          optClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                        } else {
                          optClass = 'border-rose-500 bg-rose-50 text-rose-950 font-semibold';
                        }
                      } else if (isAnswered && isOptionCorrect) {
                        optClass = 'border-emerald-300 bg-emerald-50/50 text-emerald-900';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => onSelectSelfTestOption(q.id, oIdx)}
                          className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-2.5 cursor-pointer min-h-[40px] overflow-hidden ${optClass}`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                              isOptionSelected
                                ? isOptionCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-600 text-white'
                                : 'bg-white border border-slate-300 text-slate-700'
                            }`}
                          >
                            {String.fromCharCode(97 + oIdx)}
                          </span>
                          <span className="flex-1 leading-relaxed break-words">{opt}</span>
                          {isOptionSelected && (
                            <span className="shrink-0 mt-0.5">
                              {isOptionCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <XCircle className="w-4 h-4 text-rose-600" />
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 leading-relaxed mt-2 animate-in fade-in duration-200 break-words">
                      <strong className="text-slate-900 block font-semibold mb-0.5">
                        Clinical Rationale:
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          PART G: SECTION SUMMARY
          ========================================================= */}
      {showSummary && (
        <section className="space-y-4" id="part-g-summary">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                G
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  PART G: SECTION SUMMARY & HIGH-YIELD TAKEAWAYS
                </h2>
                <p className="text-xs text-slate-500">
                  4 essential bullets to remember walking into the exam room
                </p>
              </div>
            </div>

            <button
              onClick={onCopySummary}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[34px]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Summary Copied!' : 'Copy Summary'}</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 overflow-hidden">
            <div className="space-y-2">
              {currentTopic.summaryBullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed overflow-hidden"
                >
                  <span className="w-5 h-5 rounded-md bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="break-words font-medium">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
