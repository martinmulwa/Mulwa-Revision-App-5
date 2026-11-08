/**
 * Mulwa Clinical Exam Portal
 * Topic 1 Study Guide View: Classification of Antibiotics & Foundations
 *
 * Adheres to:
 * - 100% complete content preservation across all parts A to G
 * - Zero horizontal scroll on mobile (dual layout: mobile cards + desktop tables)
 * - Enhanced font sizes for mobile readability
 * - Fully interactive past papers & self-test
 */

import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Share2,
  RotateCcw
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_1,
  StudyExamQuestion,
  SelfTestQuestion
} from '../../data/study';
import { StudyActiveTab } from './Topic2CombinationsView';

interface Topic1FoundationsViewProps {
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

export default function Topic1FoundationsView({
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
}: Topic1FoundationsViewProps) {
  const currentTopic = ANTIBIOTICS_SECTION_1;

  return (
    <div className="space-y-6 max-w-full overflow-hidden">
      {/* ========================================================= */}
      {/* PART A: THEORY                                            */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'theory') && (
        <section className="space-y-4 pt-1" id="topic1-part-a">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part A: Theory & Core Concepts
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Definitions & Mechanisms</span>
          </div>

          {/* A1: Definitions */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              A1. Definitions (Lecture Slide: Antimicrobials)
            </h3>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.definitions.map((def, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200/80 pb-1.5">
                    {def.term}
                  </h4>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {def.meaning}
                  </p>
                  <div className="text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-0.5">Clinical Examples:</span>
                    <span className="text-slate-700 leading-relaxed">{def.examples}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm divide-y divide-slate-200">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                  <tr>
                    <th className="p-3.5 w-1/4">Term</th>
                    <th className="p-3.5 w-1/2">Meaning in Simple Words</th>
                    <th className="p-3.5 w-1/4">Clinical Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.definitions.map((def, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {def.term}
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed">
                        {def.meaning}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed font-medium">
                        {def.examples}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note-Check Alert */}
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Note-Check (Lecture Slide Clarifications):</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-amber-900 pl-1 leading-relaxed">
                {currentTopic.theory.noteCheckA1.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>

            {/* Rationale callout */}
            <div className="bg-blue-50/70 border border-blue-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-blue-950 flex items-start gap-2.5">
              <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-sm sm:text-base">Rationale (Why this matters):</strong>{' '}
                <span className="leading-relaxed block mt-0.5 text-blue-900">{currentTopic.theory.rationaleA1}</span>
              </div>
            </div>
          </div>

          {/* A2: Three ways to classify */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              A2. Three Ways to Classify Antibiotics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentTopic.theory.threeWaysToClassify.map(item => (
                <div key={item.number} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.number}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* A3: Mechanism of Action & Selective Toxicity */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                A3. Classification by MECHANISM OF ACTION
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                Key idea: <strong className="text-slate-900 font-bold">“Selective Toxicity”</strong> — {currentTopic.theory.selectiveToxicity}
              </p>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.bacterialTargets.map(tgt => (
                <div key={tgt.number} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                    <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      #{tgt.number}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 break-words min-w-0 flex-1">
                      {tgt.target}
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Why it is a good target</span>
                      <p className="text-slate-800 leading-relaxed mt-0.5">{tgt.whyGoodTarget}</p>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Antibiotic Groups (Lecture Slides)</span>
                      <p className="text-slate-900 font-bold leading-relaxed mt-0.5">{tgt.antibioticGroups}</p>
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
                    <th className="p-3.5 w-1/4">Bacterial Target</th>
                    <th className="p-3.5 w-1/3">Why It Is a Good Target</th>
                    <th className="p-3.5 w-5/12">Antibiotic Groups (From Lecture Slides)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.bacterialTargets.map(tgt => (
                    <tr key={tgt.number} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        #{tgt.number}: {tgt.target}
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed">
                        {tgt.whyGoodTarget}
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold align-top leading-relaxed">
                        {tgt.antibioticGroups}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Reading the diagram on the slide */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                Reading the Diagram on the Lecture Slide
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentTopic.theory.diagramReading.map((d, i) => (
                  <div key={i} className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                    <h5 className="text-sm font-bold text-[#0B1B3D]">{d.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{d.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 pt-0.5 italic">
                {currentTopic.theory.diagramNoteCheck}
              </p>
            </div>

            {/* Memory Aids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Ribosomes Mnemonic */}
              <div className="bg-purple-50/70 border border-purple-200/90 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
                    Ribosome Subunits Memory Aid
                  </span>
                  <span className="text-sm font-extrabold text-purple-950">
                    “{currentTopic.theory.ribosomeMnemonic.mnemonic}”
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-purple-950 space-y-1.5">
                  {currentTopic.theory.ribosomeMnemonic.breakdown.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <strong className="font-bold shrink-0">{b.label}:</strong>
                      <span className="break-words">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5 Targets Mnemonic */}
              <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    5 Targets Memory Aid
                  </span>
                  <span className="text-sm font-extrabold text-amber-950">
                    “{currentTopic.theory.fiveTargetsMnemonic.mnemonic}”
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 font-bold leading-relaxed">
                  {currentTopic.theory.fiveTargetsMnemonic.breakdown}
                </p>
                <p className="text-xs sm:text-sm text-amber-800 font-semibold">
                  Wall → Membrane → Protein → Nucleic Acid → Folate
                </p>
              </div>
            </div>
          </div>

          {/* A4: Classification by Spectrum */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              A4. Classification by SPECTRUM (Slide: Antimicrobial Spectrum)
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {currentTopic.theory.spectrumSection.definition}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-sky-200 bg-sky-50/60 space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-sky-950">
                  {currentTopic.theory.spectrumSection.narrow.title}
                </h4>
                <p className="text-xs sm:text-sm text-sky-900 leading-relaxed">{currentTopic.theory.spectrumSection.narrow.desc}</p>
                <p className="text-xs sm:text-sm font-semibold text-sky-950 pt-0.5">
                  <strong>Examples:</strong> {currentTopic.theory.spectrumSection.narrow.examples}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-teal-950">
                  {currentTopic.theory.spectrumSection.broad.title}
                </h4>
                <p className="text-xs sm:text-sm text-teal-900 leading-relaxed">{currentTopic.theory.spectrumSection.broad.desc}</p>
                <p className="text-xs sm:text-sm font-semibold text-teal-950 pt-0.5">
                  <strong>Examples:</strong> {currentTopic.theory.spectrumSection.broad.examples}
                </p>
              </div>
            </div>

            {/* Gram Positive vs Gram Negative Refresher */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm text-slate-700">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                {currentTopic.theory.spectrumSection.refresher.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <strong className="text-slate-900 font-bold">Gram-positive:</strong>{' '}
                  <span className="text-slate-700">{currentTopic.theory.spectrumSection.refresher.gramPos}</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Gram-negative:</strong>{' '}
                  <span className="text-slate-700">{currentTopic.theory.spectrumSection.refresher.gramNeg}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pt-1 border-t border-slate-200">
                {currentTopic.theory.spectrumSection.refresher.whyItMatters}
              </p>
            </div>

            {/* Nurse Rationale */}
            <div className="bg-rose-50/70 border border-rose-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-rose-950 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-sm sm:text-base">Rationale for Nurses:</strong>{' '}
                <span className="leading-relaxed block mt-0.5 text-rose-900">{currentTopic.theory.spectrumSection.nurseRationale}</span>
              </div>
            </div>
          </div>

          {/* A5: Mode of Action (Bacteriostatic vs Bactericidal) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              A5. Classification by MODE OF ACTION (Slide: Mode of Action)
            </h3>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.modeOfAction.comparison.map((row, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 border-b border-slate-200/80 pb-1.5">
                    {row.feature}
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="p-2.5 rounded-lg bg-purple-50/80 border border-purple-200/80">
                      <span className="text-xs uppercase font-extrabold text-purple-900 block">Bacteriostatic</span>
                      <p className="text-purple-950 leading-relaxed mt-0.5 font-medium">{row.static}</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-teal-50/80 border border-teal-200/80">
                      <span className="text-xs uppercase font-extrabold text-teal-900 block">Bactericidal</span>
                      <p className="text-teal-950 leading-relaxed mt-0.5 font-medium">{row.cidal}</p>
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
                    <th className="p-3.5 w-1/4">Feature</th>
                    <th className="p-3.5 w-3/8 text-purple-900">Bacteriostatic</th>
                    <th className="p-3.5 w-3/8 text-teal-900">Bactericidal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.modeOfAction.comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {row.feature}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed">
                        {row.static}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed">
                        {row.cidal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Lecture Slide Contradictions Note */}
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Note-Check: Lecture Slide Contradictions Resolved for Exams</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-amber-900 pl-1 leading-relaxed">
                {currentTopic.theory.modeOfAction.slideContradictionsNote.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Mnemonics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/70 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
                    Bacteriostatic Mnemonic
                  </span>
                  <span className="text-sm font-extrabold text-purple-950">
                    “{currentTopic.theory.modeOfAction.mnemonics.staticMnemonic}”
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-purple-950 leading-relaxed font-semibold">
                  {currentTopic.theory.modeOfAction.mnemonics.staticBreakdown}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/70 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Bactericidal Mnemonic
                  </span>
                  <span className="text-sm font-extrabold text-teal-950">
                    “{currentTopic.theory.modeOfAction.mnemonics.cidalMnemonic}”
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-teal-950 leading-relaxed font-semibold">
                  {currentTopic.theory.modeOfAction.mnemonics.cidalBreakdown}
                </p>
              </div>
            </div>

            {/* Clinical pearl on antagonism */}
            <div className="bg-rose-50/70 border border-rose-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-rose-950 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-rose-900 text-sm sm:text-base">Clinical Pearl & Pharmacological Antagonism:</strong>{' '}
                <span className="leading-relaxed block mt-0.5 text-rose-950">{currentTopic.theory.modeOfAction.clinicalPearl}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART B: EXAM FOCUS                                        */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'focus') && (
        <section className="space-y-4 pt-1" id="topic1-part-b">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part B: Exam Focus & Frequency Analysis
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">How Examiners Test This Section</span>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="font-bold text-sm sm:text-base">The Question Style:</strong> {currentTopic.examFocus.summary}
              </p>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.examFocus.frequencyTable.map((f, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words">
                      {f.topic}
                    </h4>
                    <div className="self-start shrink-0">
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded border break-words ${
                          f.frequency.includes('Very High')
                            ? 'bg-rose-50 text-rose-800 border-rose-200'
                            : f.frequency.includes('High')
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {f.frequency}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Typical Stem Wording</span>
                      <p className="text-slate-800 italic leading-relaxed mt-0.5 break-words">"{f.typicalWording}"</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Typical Distractors</span>
                      <p className="text-slate-700 leading-relaxed mt-0.5 break-words">{f.typicalDistractors}</p>
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
                    <th className="p-3.5 w-1/4">What Examiners Ask</th>
                    <th className="p-3.5 w-32">Frequency</th>
                    <th className="p-3.5 w-1/3">Typical Stem Wording</th>
                    <th className="p-3.5 w-1/4">Typical Distractor Decoys</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.examFocus.frequencyTable.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {f.topic}
                      </td>
                      <td className="p-3.5 align-top whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold border ${
                            f.frequency.includes('Very High')
                              ? 'bg-rose-50 text-rose-800 border-rose-200'
                              : f.frequency.includes('High')
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {f.frequency}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed font-medium italic">
                        {f.typicalWording}
                      </td>
                      <td className="p-3.5 text-slate-600 align-top leading-relaxed text-xs sm:text-sm">
                        {f.typicalDistractors}
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
        <section className="space-y-4 pt-1" id="topic1-part-c">
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
                  id={`topic1-exam-q-${q.number}`}
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

          {/* Pattern You Should Notice Box */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Pattern You Should Notice: Recycled 4-Option Pairs (2023, 2024, 2025)
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The <strong className="text-slate-900 font-bold">same four pairs</strong> are recycled repeatedly across Block 1 papers. Only the stem changes. Memorize this exact decoding table:
            </p>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-2.5">
              {currentTopic.recycledOptionPairs.map((p, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-slate-200/80 pb-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 break-words">
                      {p.pair}
                    </h4>
                    <div className="self-start sm:self-auto shrink-0">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded border ${
                          p.color === 'indigo'
                            ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                            : p.color === 'purple'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : p.color === 'rose'
                            ? 'bg-rose-50 text-rose-800 border-rose-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        {p.badge}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold break-words">
                    {p.action}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm divide-y divide-slate-200">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                  <tr>
                    <th className="p-3.5 w-1/3">Option Pair</th>
                    <th className="p-3.5 w-5/12">Mechanism / Biochemical Action</th>
                    <th className="p-3.5 w-1/4">Examiner Tag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.recycledOptionPairs.map((p, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {p.pair}
                      </td>
                      <td className="p-3.5 text-slate-800 font-semibold align-top leading-relaxed">
                        {p.action}
                      </td>
                      <td className="p-3.5 align-top whitespace-nowrap">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                            p.color === 'indigo'
                              ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                              : p.color === 'purple'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : p.color === 'rose'
                              ? 'bg-rose-50 text-rose-800 border-rose-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}
                        >
                          {p.badge}
                        </span>
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
      {/* PART E: STRATEGY & MASTER TABLE                          */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'master_table') && (
        <section className="space-y-4 pt-1" id="topic1-part-e">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part E: Strategy & Master Table
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">6 Rules + 11 Drug Classes</span>
          </div>

          {/* 6 Strategy Rules */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              6 Rules to Guarantee Marks on Antibiotic Questions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentTopic.rulesToGetTheseRight.map((rule, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold break-words">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Master Comparison Table */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Master Comparison Table (11 High-Yield Classes)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Comprehensive synthesis of targets, mode of action, and high-yield pearls.
              </p>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.masterComparisonTable.map((row, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2 border-b border-slate-200/80 pb-2">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 break-words">
                        {row.drugClass}
                      </h4>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-0.5 break-words">
                        Target: {row.target}
                      </span>
                    </div>
                    <div className="self-start sm:self-auto shrink-0">
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded border ${
                          row.staticOrCidal === 'Cidal'
                            ? 'bg-teal-50 text-teal-800 border-teal-200'
                            : row.staticOrCidal === 'Static'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : 'bg-slate-50 text-slate-800 border-slate-200'
                        }`}
                      >
                        {row.staticOrCidal}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-xs sm:text-sm">
                    <span className="text-xs uppercase font-extrabold text-slate-500 block">High-Yield Pearls</span>
                    <p className="text-slate-800 leading-relaxed mt-0.5 font-medium break-words">{row.rememberPearls}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm divide-y divide-slate-200">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                  <tr>
                    <th className="p-3.5 w-1/4">Antibiotic Class</th>
                    <th className="p-3.5 w-1/4">Target</th>
                    <th className="p-3.5 w-28">Static / Cidal</th>
                    <th className="p-3.5 w-1/2">High-Yield Pearls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.masterComparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        {row.drugClass}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top font-semibold">
                        {row.target}
                      </td>
                      <td className="p-3.5 align-top whitespace-nowrap">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                            row.staticOrCidal === 'Cidal'
                              ? 'bg-teal-50 text-teal-800 border-teal-200'
                              : row.staticOrCidal === 'Static'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : 'bg-slate-50 text-slate-800 border-slate-200'
                          }`}
                        >
                          {row.staticOrCidal}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed text-xs sm:text-sm">
                        {row.rememberPearls}
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
      {/* PART F: MINI SELF-TEST                                    */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'self_test') && (
        <section className="space-y-4 pt-1" id="topic1-part-f">
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
        <section className="space-y-4 pt-1" id="topic1-part-g">
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
