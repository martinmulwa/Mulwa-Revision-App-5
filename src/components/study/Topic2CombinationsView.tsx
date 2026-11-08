/**
 * Mulwa Clinical Exam Portal
 * Topic 2 Study Guide View: Antimicrobial Combinations, Synergism and Beta-lactamase Resistance
 *
 * Adheres to:
 * - 100% complete content from 02_Combinations_Synergism_and_Beta-lactamase_a5dd642a.md
 * - Zero horizontal scroll on mobile (dual layout: mobile cards + desktop tables)
 * - Enhanced font sizes for mobile readability (text-sm to text-base, high contrast)
 * - Interactive past papers & self-test
 */

import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Share2,
  RotateCcw,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_2,
  StudyExamQuestion,
  SelfTestQuestion
} from '../../data/study';

export type StudyActiveTab = 'all' | 'theory' | 'focus' | 'exam_pairs' | 'master_table' | 'self_test' | 'summary';

interface Topic2CombinationsViewProps {
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

export default function Topic2CombinationsView({
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
}: Topic2CombinationsViewProps) {
  const currentTopic = ANTIBIOTICS_SECTION_2;

  return (
    <div className="space-y-6 max-w-full overflow-hidden">
      {/* ========================================================= */}
      {/* PART A: THEORY                                            */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'theory') && (
        <section className="space-y-4 pt-1" id="topic2-part-a">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part A: Theory & Core Concepts
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Combinations & Resistance</span>
          </div>

          {/* A1: Results of Combination Therapy */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A1. Lecture Slide</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What happens when two drugs are given together? (Results of Combination Therapy)
              </h3>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.combinationResults.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200/80 pb-1.5">
                    <h4 className="font-bold text-sm text-slate-900 break-words">
                      {item.result}
                    </h4>
                    <div className="self-start sm:self-auto shrink-0">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-900">
                        {item.simpleMaths}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    <span className="font-bold text-slate-900">Slide Definition: </span>
                    {item.slideDefinition}
                  </p>
                  <div className="text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-0.5">Easy Clinical Examples:</span>
                    <span className="text-slate-700 leading-relaxed">{item.easyExample}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm divide-y divide-slate-200">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                  <tr>
                    <th className="p-3.5 w-1/4">Result</th>
                    <th className="p-3.5 w-1/3">Slide Definition</th>
                    <th className="p-3.5 w-28">Simple Maths</th>
                    <th className="p-3.5 w-1/3">Easy Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.combinationResults.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {item.result}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed font-medium">
                        {item.slideDefinition}
                      </td>
                      <td className="p-3.5 align-top whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-teal-50 text-teal-800 border border-teal-200">
                          {item.simpleMaths}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed text-xs sm:text-sm">
                        {item.easyExample}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note-Check Callout */}
            <div className="bg-amber-50 border border-amber-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-amber-950 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">Note-check for Exams:</strong>
                <span>{currentTopic.theory.noteCheckA1}</span>
              </div>
            </div>

            {/* Car Pushing Rationale */}
            <div className="bg-blue-50/80 border border-blue-200/80 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-blue-950 flex items-start gap-2.5">
              <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">Clinical Rationale (The Car Analogy):</strong>
                <span>{currentTopic.theory.rationaleA1}</span>
              </div>
            </div>
          </div>

          {/* A2: Indications for Clinical Use of Combinations */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A2. Lecture Slide</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                When is it right to combine antibiotics? (Indications)
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentTopic.theory.indications.map(ind => (
                <div
                  key={ind.number}
                  className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {ind.number}
                  </span>
                  <div className="space-y-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      {ind.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {ind.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rule of thumb for nurses */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-rose-950 flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">Rule of Thumb for Nurses:</strong>
                <span>{currentTopic.theory.nursingRuleOfThumb}</span>
              </div>
            </div>
          </div>

          {/* A3: Synergism: Aminoglycosides + Beta-Lactams */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A3. Lecture Slide</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Synergism: Aminoglycosides + Beta-lactams
              </h3>
            </div>

            {/* Key Mechanism Callout */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-teal-200 bg-teal-50/70 space-y-1.5">
              <div className="flex items-center gap-2 text-teal-950 font-bold text-sm sm:text-base">
                <Zap className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Key Mechanism of Synergism:</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-900 leading-relaxed font-medium">
                {currentTopic.theory.synergismMechanism.mechanism}
              </p>
            </div>

            {/* Synergism Pairs: Mobile Cards */}
            <div className="sm:hidden space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Synergism Combination Pairs
              </span>
              {currentTopic.theory.synergismMechanism.pairs.map((pair, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Infection</span>
                  <h4 className="font-bold text-sm text-slate-900">{pair.infection}</h4>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Combination</span>
                    <p className="text-xs sm:text-sm font-bold text-teal-900 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/80 mt-0.5">
                      {pair.combination}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Synergism Pairs: Desktop Table */}
            <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm divide-y divide-slate-200">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                  <tr>
                    <th className="p-3.5 w-1/2">Infection</th>
                    <th className="p-3.5 w-1/2">Combination (from Slide)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.synergismMechanism.pairs.map((pair, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {pair.infection}
                      </td>
                      <td className="p-3.5 text-teal-900 font-bold align-top leading-relaxed">
                        {pair.combination}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kenya Link Callout */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-amber-300 bg-amber-50/90 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base">
                <Stethoscope className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Kenya Clinical Connection (MoH Basic Paediatric Protocols):</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                {currentTopic.theory.synergismMechanism.kenyaLink}
              </p>
            </div>
          </div>

          {/* A4: Beta-lactamase: The Enzyme That Causes Resistance */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A4. Past Paper Focus</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Beta-lactamase: The Enzyme That Causes Resistance
              </h3>
            </div>

            {/* Core Points */}
            <div className="space-y-2">
              {currentTopic.theory.betaLactamaseSection.corePoints.map((point, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#0B1B3D] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Two Ways to Beat It */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                Two Proven Strategies to Overcome Beta-Lactamase:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentTopic.theory.betaLactamaseSection.twoWaysToBeatIt.map((way, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2">
                    <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{way.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {way.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Destroyed Note */}
            <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed text-slate-800">
              <strong className="text-slate-950 font-bold block mb-0.5">Critical Non-Beta-Lactam Rule:</strong>
              <span>{currentTopic.theory.betaLactamaseSection.notDestroyedNote}</span>
            </div>
          </div>

          {/* A5: Resistance and Antimicrobial Stewardship */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A5. Clinical Practice</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Resistance and Antimicrobial Stewardship
              </h3>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-slate-950">Definition of Resistance: </strong>
                {currentTopic.theory.resistanceAndStewardship.resistanceDefinition}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-rose-950">Major Causes: </strong>
                {currentTopic.theory.resistanceAndStewardship.causes}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                Stewardship Rules for Nurses:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentTopic.theory.resistanceAndStewardship.stewardshipRules.map((rule, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-white flex items-start gap-2.5 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART B: EXAM FOCUS                                        */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'focus') && (
        <section className="space-y-4 pt-1" id="topic2-part-b">
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

            {/* Mobile Responsive Cards */}
            <div className="sm:hidden space-y-3">
              {currentTopic.examFocus.frequencyTable.map((f, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 overflow-hidden">
                  <div className="border-b border-slate-200/80 pb-1.5">
                    <h4 className="font-bold text-sm text-slate-900 break-words">
                      {f.concept}
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-teal-700 block">Tested Papers</span>
                      <p className="text-slate-800 font-bold leading-relaxed mt-0.5 break-words">{f.papers}</p>
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
                    <th className="p-3.5 w-1/3">Tested Concept</th>
                    <th className="p-3.5 w-1/3">Past Papers</th>
                    <th className="p-3.5 w-1/3">Typical Trap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.examFocus.frequencyTable.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {f.concept}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed font-semibold">
                        {f.papers}
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
        <section className="space-y-4 pt-1" id="topic2-part-c">
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
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5 transition-all"
                  id={`topic2-exam-q-${q.number}`}
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
                          className={`p-3 sm:p-3.5 rounded-xl border flex items-start gap-3 transition-all min-h-[48px] cursor-pointer text-left w-full ${btnStyle}`}
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
        <section className="space-y-4 pt-1" id="topic2-part-e">
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
              <span>6 High-Yield Strategy Rules</span>
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
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentTopic.memoryAids.map((aid, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
                    {aid.title}
                  </h4>
                  <div className="p-2.5 rounded-lg bg-white border border-teal-200/80 font-bold text-xs sm:text-sm text-slate-900">
                    "{aid.mnemonic}"
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
        <section className="space-y-4 pt-1" id="topic2-part-f">
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
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3"
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
        <section className="space-y-4 pt-1" id="topic2-part-g">
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
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold break-words">
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
