/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Component View: 4. Cephalosporins (Generations & Clinical Rules)
 *
 * Implements 100% complete content preservation across all Parts A to G:
 * - Part A: Theory (Foundations, 1st to 5th Generations, Routes, Ceftriaxone Cautions, LAME Rule, Side Effects & Cross-Allergy)
 * - Part B: Exam Focus & Frequency Analysis (Mobile Responsive Cards with zero horizontal scroll & Desktop Table)
 * - Part C & D: Past-Paper Questions & Explanations (Interactive Q1 to Q7)
 * - Part E: How to Always Get These Right (6 Rules + 4 Mnemonics)
 * - Part F: Interactive Mini Self-Test (4 practice items)
 * - Part G: Rapid Section Summary (7 high-yield bullets with copy feature)
 *
 * Responsive, clinical, high-contrast, zero-horizontal-scroll layout.
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
  Sparkles
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_4,
  StudyExamQuestion,
  SelfTestQuestion
} from '../../data/study';
import { StudyActiveTab } from './Topic2CombinationsView';

interface Topic4CephalosporinsViewProps {
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

export default function Topic4CephalosporinsView({
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
}: Topic4CephalosporinsViewProps) {
  const currentTopic = ANTIBIOTICS_SECTION_4;

  return (
    <div className="space-y-6 max-w-full overflow-hidden">
      {/* ========================================================= */}
      {/* PART A: THEORY                                            */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'theory') && (
        <section className="space-y-4 pt-1" id="topic4-part-a">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part A: Theory & Core Concepts
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">1st to 5th Generations</span>
          </div>

          {/* A1: What are cephalosporins? */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A1. Introduction</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What Are Cephalosporins? (Chemistry & Mechanism)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="font-bold text-slate-900 block text-sm">Chemical Nature & Lineage</span>
                <p className="text-slate-700 leading-relaxed">
                  {currentTopic.theory.foundations.nature}
                </p>
                <p className="text-slate-600 leading-relaxed text-xs pt-1 border-t border-slate-200">
                  {currentTopic.theory.foundations.whyGenerations}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 space-y-1.5">
                <span className="font-bold text-teal-950 block text-sm">Bactericidal Mechanism (Identical to Penicillins)</span>
                <p className="text-teal-900 leading-relaxed font-medium">
                  {currentTopic.theory.foundations.mechanism}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Primary Indications from Lecture Slides
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                {currentTopic.theory.foundations.uses}
              </p>
            </div>
          </div>

          {/* A2: The Generations (The Heart of this Topic) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A2. The Generation Ladder</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The 5 Generations of Cephalosporins (Spectrum Progression)
              </h3>
            </div>

            {/* Golden Rule Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border-2 border-amber-300 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-amber-950 flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-sm sm:text-base text-amber-900 block mb-0.5">
                  The Golden Rule of Cephalosporin Generations:
                </strong>
                <span className="font-semibold text-amber-950">{currentTopic.theory.goldenRule}</span>
              </div>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.generationsTable.map((row, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                    <h4 className="text-sm font-bold text-slate-900 break-words">
                      {row.generation}
                    </h4>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0B1B3D] text-white">
                      Gen {idx + 1}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-teal-700 block">Drugs from Slide</span>
                      <p className="text-slate-900 font-bold leading-relaxed mt-0.5 break-words">{row.drugs}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Antimicrobial Spectrum</span>
                      <p className="text-slate-800 leading-relaxed mt-0.5 break-words font-medium">{row.spectrum}</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-200/80">
                      <span className="text-xs uppercase font-extrabold text-indigo-900 block">Key Exam Facts</span>
                      <p className="text-indigo-950 font-semibold leading-relaxed mt-0.5 break-words">{row.keyExamFacts}</p>
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
                    <th className="p-3.5 w-1/6">Generation</th>
                    <th className="p-3.5 w-1/3">Drugs on Your Slides</th>
                    <th className="p-3.5 w-1/4">Spectrum</th>
                    <th className="p-3.5 w-1/4">Key Exam Facts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.generationsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {row.generation}
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold align-top leading-relaxed">
                        {row.drugs}
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed">
                        {row.spectrum}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed text-xs sm:text-sm font-medium">
                        {row.keyExamFacts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note-Check Callout */}
            <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-slate-800 flex items-start gap-2.5">
              <Brain className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-slate-900 block mb-0.5">
                  Note-Check on Bacterial Meningitis (Slide Detail vs Clinical Practice):
                </strong>
                <span>{currentTopic.theory.noteCheckSlideDetail}</span>
              </div>
            </div>
          </div>

          {/* A3: Routes of Administration & Ceftriaxone Cautions */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A3. Clinical Administration</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Routes of Administration & Ceftriaxone Cautions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-teal-950 text-sm">
                  <Pill className="w-4 h-4 text-teal-700" />
                  <span>Oral Formulations</span>
                </div>
                <p className="text-teal-950 font-semibold leading-relaxed">
                  {currentTopic.theory.routes.oral}
                </p>
                <p className="text-teal-800 text-xs">
                  Preferred for outpatient mild-to-moderate skin infections and uncomplicated cystitis.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/60 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-indigo-950 text-sm">
                  <Syringe className="w-4 h-4 text-indigo-700" />
                  <span>Parenteral Formulations (IV / IM)</span>
                </div>
                <p className="text-indigo-950 font-semibold leading-relaxed">
                  {currentTopic.theory.routes.parenteral}
                </p>
                <p className="text-indigo-800 text-xs">
                  Ceftriaxone given once daily; IM injections are painful and routinely reconstituted with 1% lidocaine.
                </p>
              </div>
            </div>

            {/* Ceftriaxone Warnings Callout */}
            <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Critical Ceftriaxone Safety Warnings</span>
              </div>
              <ul className="space-y-1.5 pl-1 leading-relaxed">
                {currentTopic.theory.routes.ceftriaxoneCautions.map((warn, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* A4: What Cephalosporins Do NOT Cover (LAME) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">A4. Microbiological Blind Spots</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What Cephalosporins Do NOT Cover (The "LAME" Rule)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {currentTopic.theory.lameRule.explanation}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {currentTopic.theory.lameRule.breakdown.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-rose-700 text-white font-extrabold flex items-center justify-center text-sm shrink-0">
                      {item.letter}
                    </span>
                    <h4 className="font-bold text-sm text-rose-950 break-words min-w-0">
                      {item.pathogen}
                    </h4>
                  </div>
                  <p className="text-xs text-rose-900 pt-1 leading-relaxed font-medium">
                    {item.clinicalPearl}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-slate-100 p-3 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              Clinical Pearl: This blind spot explains why standard pneumonia protocols combine cephalosporins with macrolides (for atypicals), and neonatal meningitis protocols pair ceftriaxone/cefotaxime with ampicillin (for Listeria).
            </div>
          </div>

          {/* A5: Side Effects & Cross-Allergies */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A5. Adverse Reactions</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Side Effects, Cross-Reactivity & Pregnancy Safety
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="font-bold text-slate-900 block text-sm">Common & Mild Effects</span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {currentTopic.theory.sideEffects.common}
                </p>
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-bold text-teal-900 block">Pregnancy Safety:</span>
                  <p className="text-teal-950 font-semibold mt-0.5">
                    {currentTopic.theory.sideEffects.pregnancyCategory}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1.5">
                <span className="font-bold text-amber-950 block text-sm">Cross-Reactivity with Penicillin (5% to 10%)</span>
                <p className="text-amber-900 leading-relaxed">
                  {currentTopic.theory.sideEffects.hypersensitivity}
                </p>
              </div>
            </div>

            {/* High-Yield Side Effect Extras */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 text-xs sm:text-sm">
              <span className="font-extrabold uppercase tracking-wider text-slate-600 block text-xs">
                Pharmacological Extras Tested in Exams:
              </span>
              <ul className="space-y-1.5 pl-1 leading-relaxed text-slate-800">
                {currentTopic.theory.sideEffects.extras.map((extra, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                    <span>{extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART B: EXAM FOCUS                                        */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'focus') && (
        <section className="space-y-4 pt-1" id="topic4-part-b">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part B: Exam Focus & Frequency Analysis
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">High-Yield Tested Blueprints</span>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/70 text-xs sm:text-sm text-teal-950 leading-relaxed font-medium">
              <strong className="font-bold block mb-1">Key Examiner Focus:</strong>
              {currentTopic.examFocus.summary}
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.examFocus.frequencyTable.map((f, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 overflow-hidden">
                  <div className="border-b border-slate-200/80 pb-1.5">
                    <h4 className="font-bold text-sm text-slate-900 break-words">
                      {f.topic}
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-teal-700 block">Source Papers</span>
                      <p className="text-slate-800 font-bold leading-relaxed mt-0.5 break-words">{f.sourcePapers}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold text-rose-700 block">Typical Trap</span>
                      <p className="text-slate-700 leading-relaxed mt-0.5 break-words">{f.trap}</p>
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
                    <th className="p-3.5 w-5/12">Topic</th>
                    <th className="p-3.5 w-1/4">Source Papers</th>
                    <th className="p-3.5 w-1/3">Typical Trap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.examFocus.frequencyTable.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {f.topic}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed font-semibold">
                        {f.sourcePapers}
                      </td>
                      <td className="p-3.5 text-rose-900 align-top leading-relaxed text-xs sm:text-sm font-medium">
                        {f.trap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART C & D: PAST-PAPER QUESTIONS & EXPLANATIONS          */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'exam_pairs') && (
        <section className="space-y-4 pt-1" id="topic4-part-c">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part C & D: Past-Paper Questions & Explanations
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Attempt First, Reveal Solution</span>
          </div>

          <div className="space-y-3.5">
            {currentTopic.pastPaperQuestions.map((q: StudyExamQuestion) => {
              const selectedOpt = examAnswers[q.id];
              const isRevealed = !!revealedRationales[q.id];
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5 transition-all overflow-hidden"
                  id={`topic4-exam-q-${q.number}`}
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
                      const isOptionSelected = selectedOpt === opt.key;
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
                        {q.notes && (
                          <p className="text-slate-600 italic text-xs sm:text-sm break-words">
                            {q.notes}
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

      {/* ========================================================= */}
      {/* PART E: STRATEGY RULES & MEMORY AIDS                     */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'master_table') && (
        <section className="space-y-4 pt-1" id="topic4-part-e">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part E: How to Always Get These Right & Memory Aids
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Rules & Mnemonics</span>
          </div>

          {/* 6 Strategy Rules */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>6 High-Yield Strategy Rules for Cephalosporin Questions</span>
            </h3>

            <div className="space-y-2.5">
              {currentTopic.rulesToGetTheseRight.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold break-words min-w-0 flex-1">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Memory Aids */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Exam Memory Aids & Mnemonics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentTopic.memoryAids.map((aid, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2 overflow-hidden">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
                    {aid.title}
                  </h4>
                  <div className="p-2.5 rounded-lg bg-white border border-teal-200/80 font-bold text-xs sm:text-sm text-slate-900 break-words">
                    "{aid.mnemonic}"
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium break-words">
                    {aid.breakdown}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART F: MINI SELF-TEST                                    */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'self_test') && (
        <section className="space-y-4 pt-1" id="topic4-part-f">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part F: Interactive Mini Self-Test
            </h2>
            <button
              onClick={onResetSelfTest}
              className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-3.5">
            {currentTopic.miniSelfTest.map((item: SelfTestQuestion, idx) => {
              const selectedIdx = selfTestAnswers[item.id];
              const isAnswered = selectedIdx !== undefined;
              const isCorrect = selectedIdx === item.correctIndex;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 overflow-hidden"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words min-w-0 flex-1">
                      {item.question}
                    </h3>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {item.options.map((opt, optIndex) => {
                      const isThisSelected = selectedIdx === optIndex;
                      const isThisCorrect = optIndex === item.correctIndex;

                      let btnCls = 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-800';

                      if (isAnswered) {
                        if (isThisCorrect) {
                          btnCls = 'border-teal-500 bg-teal-50 text-teal-950 font-bold';
                        } else if (isThisSelected) {
                          btnCls = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
                        } else {
                          btnCls = 'border-slate-200 bg-slate-50/40 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={optIndex}
                          type="button"
                          onClick={() => onSelectSelfTestOption(item.id, optIndex)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer break-words leading-relaxed ${btnCls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Answer Explanation */}
                  {isAnswered && (
                    <div className="pt-1.5 text-xs sm:text-sm">
                      <div
                        className={`p-3 rounded-xl border leading-relaxed break-words ${
                          isCorrect
                            ? 'bg-teal-50/90 border-teal-200 text-teal-950 font-medium'
                            : 'bg-rose-50/90 border-rose-200 text-rose-950 font-medium'
                        }`}
                      >
                        <span className="font-bold">
                          {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                        </span>
                        {item.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART G: SECTION SUMMARY                                   */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'summary') && (
        <section className="space-y-4 pt-1" id="topic4-part-g">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part G: Rapid Section Summary
            </h2>
            <button
              onClick={onCopySummary}
              className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedLink ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-2.5">
            <div className="grid grid-cols-1 gap-2.5">
              {currentTopic.summaryBullets.map((bullet, idx) => (
                <div key={idx} className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold break-words min-w-0 flex-1">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
