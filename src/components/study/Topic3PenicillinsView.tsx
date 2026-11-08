/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Component View: 3. Penicillins (Main Classes Overview & Penicillins)
 *
 * Implements 100% complete content preservation across all Parts A to G:
 * - Part A: Theory (Main Classes, Penicillin Foundations, 4 Groups, Depot Forms, Side Effects, Nursing Care & Anaphylaxis, Paediatric Dosing, Kenya Pneumonia Protocols)
 * - Part B: Exam Focus & Frequency Analysis (Mobile Responsive Cards with zero horizontal scroll & Desktop Table)
 * - Part C & D: Past-Paper Questions & Explanations (Interactive Q1 to Q7)
 * - Part E: How to Always Get These Right (7 Rules + 3 Mnemonics)
 * - Part F: Interactive Mini Self-Test (4 practice items)
 * - Part G: Rapid Section Summary (8 high-yield bullets with copy feature)
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
  HeartPulse,
  Activity,
  Zap,
  Info
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_3,
  StudyExamQuestion,
  SelfTestQuestion
} from '../../data/study';
import { StudyActiveTab } from './Topic2CombinationsView';

interface Topic3PenicillinsViewProps {
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

export default function Topic3PenicillinsView({
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
}: Topic3PenicillinsViewProps) {
  const currentTopic = ANTIBIOTICS_SECTION_3;

  return (
    <div className="space-y-6 max-w-full overflow-hidden">
      {/* ========================================================= */}
      {/* PART A: THEORY                                            */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'theory') && (
        <section className="space-y-4 pt-1" id="topic3-part-a">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part A: Theory & Core Concepts
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Penicillins & Class Overview</span>
          </div>

          {/* A1: Overview of the Main Classes */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A1. Lecture Slide</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Classes of Antibiotics (Curriculum Overview)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                The lecture slides organize antimicrobial pharmacology into the following major chemical and functional families:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentTopic.theory.mainClassesOverview.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 break-words min-w-0">
                      {item.name}
                    </h4>
                  </div>
                  <div className="text-xs sm:text-sm space-y-1 pt-1">
                    <p className="text-slate-800 font-semibold leading-relaxed break-words">
                      <span className="text-slate-500 font-bold block text-2xs uppercase">Representative Drugs</span>
                      {item.members}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed break-words pt-0.5">
                      <span className="text-slate-500 font-bold block text-2xs uppercase">Mechanism Target</span>
                      {item.mechanismHighlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-700 italic">
              Note: This guide takes each major class in the exact order presented in your Block 1 lecture slides, starting with penicillins.
            </div>
          </div>

          {/* A2: What are Penicillins? */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A2. Foundation</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What Are Penicillins? (Discovery, Structure & Mechanism)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="font-bold text-slate-900 block text-sm">Historical Origin & Ring Structure</span>
                <p className="text-slate-700 leading-relaxed">
                  {currentTopic.theory.penicillinFoundations.origin}
                </p>
                <p className="text-slate-800 font-medium leading-relaxed pt-1 border-t border-slate-200">
                  {currentTopic.theory.penicillinFoundations.betaLactamRing}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="font-bold text-slate-900 block text-sm">Mechanism of Action (Bactericidal)</span>
                <p className="text-slate-700 leading-relaxed">
                  {currentTopic.theory.penicillinFoundations.mechanism}
                </p>
                <p className="text-teal-900 font-bold text-xs bg-teal-50 px-2 py-1 rounded border border-teal-200/80 mt-1 inline-block">
                  Only effective against actively dividing bacteria
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Primary Indications from Lecture Slide
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                {currentTopic.theory.penicillinFoundations.slideUses}
              </p>
            </div>

            {/* Safety Rationale Callout */}
            <div className="bg-teal-50/80 border border-teal-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-teal-950 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-sm sm:text-base text-teal-900 block mb-0.5">
                  Rationale for Safety in Pregnancy & Lactation:
                </strong>
                <span className="text-teal-950">{currentTopic.theory.penicillinFoundations.safetyRationale}</span>
              </div>
            </div>
          </div>

          {/* A3: The Four Groups of Penicillins */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A3. Core Taxonomy</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Four Penicillin Groups (Lecture Slides)
              </h3>
            </div>

            {/* Mobile Responsive Cards (Zero Horizontal Scrolling) */}
            <div className="sm:hidden space-y-3">
              {currentTopic.theory.fourGroups.map(grp => (
                <div key={grp.groupNumber} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                    <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      #{grp.groupNumber}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 break-words min-w-0 flex-1">
                      {grp.groupName}
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <span className="text-xs uppercase font-extrabold text-teal-700 block">Drugs from Slide</span>
                      <p className="text-slate-900 font-bold leading-relaxed mt-0.5 break-words">{grp.drugs}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold text-slate-500 block">Antimicrobial Spectrum</span>
                      <p className="text-slate-800 leading-relaxed mt-0.5 break-words">{grp.spectrum}</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-200/70">
                      <span className="text-xs uppercase font-extrabold text-indigo-900 block">Key Facts for Exam</span>
                      <p className="text-indigo-950 font-medium leading-relaxed mt-0.5 break-words">{grp.keyFacts}</p>
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
                    <th className="p-3.5 w-1/4">Group</th>
                    <th className="p-3.5 w-1/4">Drugs (Slide)</th>
                    <th className="p-3.5 w-1/4">Spectrum</th>
                    <th className="p-3.5 w-1/4">Key Facts (Exam)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.theory.fourGroups.map(grp => (
                    <tr key={grp.groupNumber} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 align-top">
                        #{grp.groupNumber}. {grp.groupName}
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold align-top leading-relaxed">
                        {grp.drugs}
                      </td>
                      <td className="p-3.5 text-slate-700 align-top leading-relaxed">
                        {grp.spectrum}
                      </td>
                      <td className="p-3.5 text-slate-800 align-top leading-relaxed text-xs sm:text-sm font-medium">
                        {grp.keyFacts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Extra Depot Forms Tested Callout */}
            <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-3.5 sm:p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-purple-950 font-bold text-sm sm:text-base">
                <Syringe className="w-5 h-5 text-purple-700 shrink-0" />
                <span>Extra Repository / Depot Forms (Heavily Tested)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white p-3 rounded-lg border border-purple-200/90 space-y-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap pb-1 border-b border-purple-100">
                    <strong className="font-bold text-purple-950 text-sm">{currentTopic.theory.depotForms.benzathine.name}</strong>
                    <span className="text-2xs font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200 shrink-0">
                      NEVER IV
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{currentTopic.theory.depotForms.benzathine.nature}</p>
                  <p className="text-rose-900 font-bold leading-relaxed">{currentTopic.theory.depotForms.benzathine.route}</p>
                  <p className="text-slate-800 pt-0.5 font-medium">
                    <strong className="text-slate-900">Uses: </strong>{currentTopic.theory.depotForms.benzathine.indications}
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-purple-200/90 space-y-1">
                  <strong className="font-bold text-purple-950">{currentTopic.theory.depotForms.procaine.name}</strong>
                  <p className="text-slate-700 leading-relaxed">{currentTopic.theory.depotForms.procaine.nature}</p>
                  <p className="text-purple-900 font-semibold text-xs pt-1">
                    Intermediate-duration depot; gives reliable therapeutic levels for 12–24 hours after deep IM administration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* A4: Side Effects */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A4. Adverse Reactions</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Penicillin Side Effects (From Mild to Fatal)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentTopic.theory.sideEffects.map((se, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border space-y-1.5 ${
                    idx === 1
                      ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                      : idx === 0
                      ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    {idx === 1 ? (
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span>{se.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed font-medium">
                    {se.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* A5: Nursing Care & Anaphylaxis Protocol */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A5. Clinical Nursing Action</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Nursing Care & Anaphylaxis Emergency Protocol
              </h3>
            </div>

            {/* Checklist */}
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                5 Golden Nursing Responsibilities
              </span>
              <div className="grid grid-cols-1 gap-2">
                {currentTopic.theory.nursingCare.checks.map((chk, i) => (
                  <div key={i} className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                      {chk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Anaphylaxis Box */}
            <div className="p-4 rounded-xl border-2 border-rose-300 bg-rose-50/90 text-rose-950 space-y-2.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-rose-700 shrink-0" />
                  <h4 className="font-bold text-sm sm:text-base text-rose-950">
                    Emergency Anaphylaxis Protocol (Drug of Choice: Epinephrine IM)
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-rose-200 text-rose-900 border border-rose-300">
                  Life-Saving First-Line
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                <div className="bg-white/90 p-2.5 rounded-lg border border-rose-200">
                  <span className="font-bold text-rose-900 block">First-Line Drug & Route:</span>
                  <p className="text-rose-950 font-extrabold text-sm mt-0.5">
                    {currentTopic.theory.nursingCare.anaphylaxisProtocol.firstLineDrug}
                  </p>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Site: {currentTopic.theory.nursingCare.anaphylaxisProtocol.injectionSite}
                  </p>
                </div>
                <div className="bg-white/90 p-2.5 rounded-lg border border-rose-200">
                  <span className="font-bold text-rose-900 block">Dosage & Frequency:</span>
                  <p className="text-slate-900 font-semibold mt-0.5">
                    Adult: {currentTopic.theory.nursingCare.anaphylaxisProtocol.adultDose}
                  </p>
                  <p className="text-slate-900 font-semibold mt-0.5">
                    Child: {currentTopic.theory.nursingCare.anaphylaxisProtocol.childDose}
                  </p>
                  <p className="text-rose-800 text-xs mt-0.5">
                    {currentTopic.theory.nursingCare.anaphylaxisProtocol.repeatInterval}
                  </p>
                </div>
              </div>

              <p className="text-xs text-rose-900 font-bold leading-relaxed pt-1 border-t border-rose-200">
                {currentTopic.theory.nursingCare.anaphylaxisProtocol.secondLineNote}
              </p>
            </div>
          </div>

          {/* A6: Paediatric Dose Arithmetic */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A6. Mathematical Safety</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Paediatric Dose Arithmetic (Doses are Per Kilogram)
              </h3>
            </div>

            <div className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/70 text-indigo-950 space-y-2">
              <span className="font-extrabold text-xs uppercase tracking-wider text-indigo-900 block">
                Standard Dose Formula
              </span>
              <p className="font-mono font-bold text-sm sm:text-base text-[#0B1B3D] bg-white p-2.5 rounded-lg border border-indigo-200 break-words">
                {currentTopic.theory.paediatricDosing.formula}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm pt-1">
                <div>
                  <strong className="text-indigo-950">Kenya Child Standard:</strong>
                  <p className="text-indigo-900 mt-0.5">{currentTopic.theory.paediatricDosing.kenyaStandardChildDose}</p>
                </div>
                <div>
                  <strong className="text-indigo-950">Worked Example:</strong>
                  <p className="text-indigo-900 font-bold mt-0.5">{currentTopic.theory.paediatricDosing.arithmeticExample}</p>
                </div>
              </div>
              <p className="text-xs text-indigo-800 italic pt-1 border-t border-indigo-200">
                {currentTopic.theory.paediatricDosing.protocolRule}
              </p>
            </div>
          </div>

          {/* A7: Kenya Pneumonia Treatment Protocols */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">A7. National Protocols</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Kenya Treatment Link: Pneumonia Guidelines
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-xs font-extrabold text-slate-500 uppercase block">1. Non-Severe Pneumonia</span>
                <strong className="text-slate-900 font-bold text-sm block">Oral Amoxicillin</strong>
                <p className="text-slate-700 leading-relaxed">{currentTopic.theory.kenyaPneumoniaGuidelines.nonSevere}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/70 space-y-1">
                <span className="text-xs font-extrabold text-teal-800 uppercase block">2. Severe Child Pneumonia</span>
                <strong className="text-teal-950 font-bold text-sm block">Benzyl Penicillin + Gentamicin</strong>
                <p className="text-teal-900 leading-relaxed">{currentTopic.theory.kenyaPneumoniaGuidelines.severeChild}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-xs font-extrabold text-slate-500 uppercase block">3. Adult / Community Pneumonia</span>
                <strong className="text-slate-900 font-bold text-sm block">Amoxicillin + Macrolide</strong>
                <p className="text-slate-700 leading-relaxed">{currentTopic.theory.kenyaPneumoniaGuidelines.adultCommunityAcquired}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* PART B: EXAM FOCUS                                        */}
      {/* ========================================================= */}
      {(activeSubTab === 'all' || activeSubTab === 'focus') && (
        <section className="space-y-4 pt-1" id="topic3-part-b">
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
        <section className="space-y-4 pt-1" id="topic3-part-c">
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
                  id={`topic3-exam-q-${q.number}`}
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
        <section className="space-y-4 pt-1" id="topic3-part-e">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide">
              Part E: How to Always Get These Right & Memory Aids
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Rules & Mnemonics</span>
          </div>

          {/* 7 Strategy Rules */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>7 High-Yield Strategy Rules for Penicillin Questions</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
        <section className="space-y-4 pt-1" id="topic3-part-f">
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
        <section className="space-y-4 pt-1" id="topic3-part-g">
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
