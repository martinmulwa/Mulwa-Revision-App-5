/**
 * Mulwa Clinical Exam Portal
 * Unit Revision Modes Hub
 *
 * Displays grouped category cards (Past Papers, Practice & Review, Study)
 * matching the portal's design system with dynamic counts, badges, and status cues.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  FileText,
  GraduationCap,
  AlertCircle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  X
} from 'lucide-react';
import { AppNavTab, SessionProgress } from '../types';
import { BOARD_PAST_PAPERS, TNH_PRACTICE_PAPERS, findPaper } from '../data/questions';
import { getCategoriesByUnit } from '../data/saqData';
import { INITIAL_SESSION, getUnitProgressSummary } from '../utils/storage';

interface UnitHubProps {
  unitName: string;
  onNavigateSection: (tab: AppNavTab) => void;
  onBack?: () => void;
  progress?: SessionProgress;
  onResetUnitProgress?: (unitName: string) => void;
}

export function getUnitCapabilities(unitName: string) {
  const isRespiratory = unitName === 'Respiratory Disorders';
  const isTrauma = unitName === 'Trauma and Emergency' || unitName === 'Trauma and Emergency Nursing';
  const isPharm = unitName === 'Pharmacology 1';
  const isHca = unitName === 'HCA' || unitName.includes('HCA') || unitName.includes('Health Care');
  const isFinals = unitName === 'College Final Exams' || unitName.includes('Final Exam') || unitName.includes('Finals');

  return {
    hasMcq: true,
    hasSaq: !isHca && !isFinals && (isRespiratory || isTrauma),
    hasPractice: !isHca && !isFinals && (isRespiratory || isTrauma),
    hasStudy: !isHca && !isFinals && isPharm,
    hasMistakes: true,
    isHca,
    isFinals
  };
}

export default function UnitHub({
  unitName,
  onNavigateSection,
  onBack,
  progress,
  onResetUnitProgress
}: UnitHubProps) {
  const caps = getUnitCapabilities(unitName);
  const [showResetModal, setShowResetModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Unit-specific progress summary
  const unitSummary = useMemo(
    () => getUnitProgressSummary(progress || INITIAL_SESSION, unitName),
    [progress, unitName]
  );

  // Unit MCQ paper metrics
  const mcqMetrics = useMemo(() => {
    const papers = BOARD_PAST_PAPERS.filter(p => {
      const u = p.unit || p.category || '';
      if (unitName === 'Trauma and Emergency' || unitName === 'Trauma and Emergency Nursing') {
        return u === 'Trauma and Emergency' || u === 'Trauma and Emergency Nursing' || p.category === 'Trauma and Emergency';
      }
      if (unitName === 'Pharmacology 1') {
        return u === 'Pharmacology 1' || u === 'Pharmacology' || p.category === 'Pharmacology 1';
      }
      if (unitName === 'Pharmacology 2') {
        return u === 'Pharmacology 2' || p.category === 'Pharmacology 2';
      }
      if (unitName === 'Paediatrics 1') {
        return u.includes('Paediatric') || p.id.includes('paediatric');
      }
      if (unitName === 'HCA' || unitName.includes('HCA') || unitName.includes('Health Care')) {
        return u === 'HCA' || p.id.startsWith('hca-') || u.includes('HCA') || u.includes('Health Care');
      }
      if (unitName === 'Blood and Lymph Disorders' || unitName === 'Blood and Lymphatics' || unitName.includes('Blood and Lymph')) {
        return u.includes('Blood') || p.id.includes('blood') || p.category === 'Blood and Lymph Disorders';
      }
      if (unitName === 'GIT Disorders' || unitName === 'GIT' || unitName.includes('GIT')) {
        return u.includes('GIT') || p.id.includes('git') || p.category === 'GIT Disorders';
      }
      if (unitName === 'College Final Exams' || unitName.includes('Final Exam') || unitName.includes('Finals')) {
        return (u === 'College Final Exams' || p.id.startsWith('krn-collegefinal') || p.category === 'College Final Exam' || p.category === 'College Final Exams') && !p.id.startsWith('hca-');
      }
      return u === unitName || p.category === unitName;
    });

    const papersCount = papers.length;
    const questionsCount = papers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0);
    return { papersCount, questionsCount };
  }, [unitName]);

  // Unit SAQ metrics
  const saqMetrics = useMemo(() => {
    if (!caps.hasSaq) return { saqCount: 0, conditionsCount: 0 };
    const categories = getCategoriesByUnit(unitName);
    const questions = categories.flatMap(c => c.questions || []);
    return {
      saqCount: questions.length,
      conditionsCount: categories.length
    };
  }, [unitName, caps.hasSaq]);

  // Unit TNH Practice metrics
  const practiceMetrics = useMemo(() => {
    if (!caps.hasPractice) return { mcqCount: 0, saqCount: 0 };
    if (unitName === 'Respiratory Disorders') {
      const papers = TNH_PRACTICE_PAPERS.filter(p => (p.unit || p.category) === 'Respiratory Disorders');
      return {
        mcqCount: papers.length,
        saqCount: 0
      };
    }
    if (unitName === 'Trauma and Emergency' || unitName === 'Trauma and Emergency Nursing') {
      const papers = TNH_PRACTICE_PAPERS.filter(
        p => (p.unit || p.category) === 'Trauma and Emergency' || (p.unit || p.category) === 'Trauma and Emergency Nursing'
      );
      return {
        mcqCount: papers.length,
        saqCount: 72
      };
    }
    return { mcqCount: 0, saqCount: 0 };
  }, [unitName, caps.hasPractice]);

  // Unit Mistakes count
  const unitMistakesCount = useMemo(() => {
    if (!progress || !progress.incorrectQuestions) return 0;
    let count = 0;
    progress.incorrectQuestions.forEach(rec => {
      const paper = findPaper(rec.paperId);
      if (!paper) return;
      const rawUnit = paper.unit || paper.category || '';
      const isMatch =
        rawUnit === unitName ||
        ((unitName === 'Trauma and Emergency' || unitName === 'Trauma and Emergency Nursing') &&
         (rawUnit === 'Trauma and Emergency' || rawUnit === 'Trauma and Emergency Nursing')) ||
        (unitName === 'Paediatrics 1' && !rawUnit.includes('Trauma') && (rawUnit.includes('Paediatric') || paper.id.includes('paediatric'))) ||
        (unitName === 'Pharmacology 1' && (rawUnit === 'Pharmacology 1' || rawUnit === 'Pharmacology')) ||
        (unitName === 'Pharmacology 2' && rawUnit === 'Pharmacology 2') ||
        ((unitName === 'Blood and Lymph Disorders' || unitName === 'Blood and Lymphatics' || unitName.includes('Blood and Lymph')) &&
         (rawUnit.includes('Blood') || paper.id.includes('blood'))) ||
        ((unitName === 'GIT Disorders' || unitName.includes('GIT')) &&
         (rawUnit.includes('GIT') || paper.id.includes('git'))) ||
        ((unitName === 'HCA' || unitName.includes('HCA') || unitName.includes('Health Care')) &&
         (rawUnit === 'HCA' || rawUnit.includes('HCA') || paper.id.startsWith('hca-') || rawUnit.includes('Health Care')));
      if (isMatch) count++;
    });
    return count;
  }, [progress, unitName]);

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-unit-hub">
      {/* Unit Header Bar with Back Button and Unit Reset Progress */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/90 gap-2">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="btn-unit-hub-back"
              title="Back to Units"
              aria-label="Back to units"
            >
              <ChevronLeft className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug truncate">
              {unitName}
            </h1>
          </div>
        </div>

        {onResetUnitProgress && (
          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            disabled={!unitSummary.hasProgress}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 ${
              unitSummary.hasProgress
                ? 'text-rose-700 bg-rose-50 hover:bg-rose-100/90 border-rose-200/90'
                : 'text-slate-400 bg-slate-50 border-slate-200 cursor-not-allowed opacity-60'
            }`}
            id="btn-unit-reset-progress"
            title={unitSummary.hasProgress ? `Reset progress for ${unitName}` : `No active progress in ${unitName}`}
            aria-label={`Reset progress for ${unitName}`}
          >
            <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
            <span className="hidden sm:inline">Reset Progress</span>
            <span className="sm:hidden">Reset</span>
          </button>
        )}
      </div>

      {/* Final Exams Layout (HCA & KRN Finals): ONLY MCQ Bank and Review Mistakes */}
      {caps.isHca || caps.isFinals ? (
        <div className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {/* MCQ Bank Card */}
            <button
              type="button"
              onClick={() => onNavigateSection('papers')}
              className="bg-gradient-to-br from-white via-white to-indigo-50/60 rounded-2xl border border-slate-200/90 hover:border-indigo-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
              id="btn-unit-card-mcqs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/80 border border-indigo-200/90 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug truncate">
                    MCQ Bank
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                    {mcqMetrics.papersCount} Papers · {mcqMetrics.questionsCount} Questions
                  </p>
                </div>
              </div>
              <ChevronRight
                className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                strokeWidth={2}
              />
            </button>

            {/* Review Mistakes Card */}
            <button
              type="button"
              onClick={() => onNavigateSection('review')}
              className="bg-gradient-to-br from-white via-white to-rose-50/60 rounded-2xl border border-slate-200/90 hover:border-rose-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
              id="btn-unit-card-mistakes"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-rose-100/80 border border-rose-200/90 flex items-center justify-center text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-all shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-rose-950 transition-colors leading-snug truncate">
                    Review Mistakes
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                    Targeted Weak Areas
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-bold border transition-colors ${
                    unitMistakesCount > 0
                      ? 'bg-rose-100 text-rose-800 border-rose-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {unitMistakesCount}
                </span>
                <ChevronRight
                  className="w-4 h-4 text-slate-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={2}
                />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* 1. PAST PAPERS GROUP */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
              Past Papers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* MCQ Bank Card */}
              {caps.hasMcq ? (
                <button
                  type="button"
                  onClick={() => onNavigateSection('papers')}
                  className="bg-gradient-to-br from-white via-white to-indigo-50/60 rounded-2xl border border-slate-200/90 hover:border-indigo-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                  id="btn-unit-card-mcqs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100/80 border border-indigo-200/90 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug truncate">
                        MCQ Bank
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        {mcqMetrics.papersCount} Papers · {mcqMetrics.questionsCount} Questions
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                    strokeWidth={2}
                  />
                </button>
              ) : (
                <div
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        MCQ Bank
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                        No MCQs available
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SAQ Bank Card */}
              {caps.hasSaq ? (
                <button
                  type="button"
                  onClick={() => onNavigateSection('saqs')}
                  className="bg-gradient-to-br from-white via-white to-purple-50/60 rounded-2xl border border-slate-200/90 hover:border-purple-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                  id="btn-unit-card-saqs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200/90 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-purple-950 transition-colors leading-snug truncate">
                        SAQ Bank
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        {saqMetrics.saqCount} SAQs across {saqMetrics.conditionsCount} Conditions
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                    strokeWidth={2}
                  />
                </button>
              ) : (
                <div
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        SAQ Bank
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                        Coming Soon · In Preparation
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. PRACTICE & REVIEW GROUP */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
              Practice & Review
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* TNH Practice Card */}
              {caps.hasPractice ? (
                <button
                  type="button"
                  onClick={() => onNavigateSection('tnh_practice')}
                  className="bg-gradient-to-br from-white via-white to-teal-50/60 rounded-2xl border border-slate-200/90 hover:border-teal-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                  id="btn-unit-card-practice"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-teal-100/80 border border-teal-200/90 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-teal-950 transition-colors leading-snug truncate">
                        TNH Practice
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        {practiceMetrics.mcqCount > 0 && `${practiceMetrics.mcqCount} MCQ Papers`}
                        {practiceMetrics.mcqCount > 0 && practiceMetrics.saqCount > 0 && ' · '}
                        {practiceMetrics.saqCount > 0 && `${practiceMetrics.saqCount} SAQ Questions`}
                        {practiceMetrics.mcqCount === 0 && practiceMetrics.saqCount === 0 && 'Practice Modules'}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                    strokeWidth={2}
                  />
                </button>
              ) : (
                <div
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        TNH Practice
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                        Coming Soon · In Preparation
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Review Mistakes Card */}
              {caps.hasMistakes ? (
                <button
                  type="button"
                  onClick={() => onNavigateSection('review')}
                  className="bg-gradient-to-br from-white via-white to-rose-50/60 rounded-2xl border border-slate-200/90 hover:border-rose-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                  id="btn-unit-card-mistakes"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-rose-100/80 border border-rose-200/90 flex items-center justify-center text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-all shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-rose-950 transition-colors leading-snug truncate">
                        Review Mistakes
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        Targeted Weak Areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border transition-colors ${
                        unitMistakesCount > 0
                          ? 'bg-rose-100 text-rose-800 border-rose-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {unitMistakesCount}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 text-slate-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all"
                      strokeWidth={2}
                    />
                  </div>
                </button>
              ) : (
                <div
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        Review Mistakes
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                        No mistakes logged
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. STUDY GROUP */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
              Study
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {caps.hasStudy ? (
                <button
                  type="button"
                  onClick={() => onNavigateSection('study')}
                  className="bg-gradient-to-br from-white via-white to-emerald-50/60 rounded-2xl border border-slate-200/90 hover:border-emerald-400 p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
                  id="btn-unit-card-study"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200/90 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-950 transition-colors leading-snug truncate">
                        Study
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        Curriculum & Lecture Notes
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                    strokeWidth={2}
                  />
                </button>
              ) : (
                <div
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        Study
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                        Curriculum Notes in Preparation
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* 4. UNIT PROGRESS SUMMARY & RESET CARD */}
      <div className="pt-2">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/90 flex items-center justify-center text-slate-600 shrink-0">
                <RotateCcw className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {unitName} Progress
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {unitSummary.hasProgress ? (
                    <span>
                      {unitSummary.completedSetsCount} completed · {unitSummary.mistakesCount} mistakes
                      {unitSummary.inProgressSetsCount > 0 ? ` · ${unitSummary.inProgressSetsCount} in-progress` : ''}
                    </span>
                  ) : (
                    'No test activity recorded.'
                  )}
                </p>
              </div>
            </div>

            {onResetUnitProgress && (
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                disabled={!unitSummary.hasProgress}
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border transition-all active:scale-95 cursor-pointer shrink-0 ${
                  unitSummary.hasProgress
                    ? 'text-rose-700 bg-rose-50 hover:bg-rose-100 border-rose-200 shadow-2xs'
                    : 'text-slate-400 bg-slate-100 border-slate-200 cursor-not-allowed opacity-60'
                }`}
                id="btn-unit-reset-progress-card"
              >
                <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
                <span>Reset Progress</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showResetModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-reset-title"
        >
          <div className="bg-white rounded-2xl border border-slate-200 max-w-sm w-full p-5 shadow-2xl space-y-3.5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                <AlertTriangle className="w-4.5 h-4.5 stroke-[2.2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 id="modal-reset-title" className="text-base font-bold text-slate-900 leading-snug">
                  Reset Progress?
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Clear all test scores and mistakes for <strong className="text-slate-700">{unitName}</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 -mt-1 -mr-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Metric Strip */}
            <div className="flex items-center justify-around py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div>
                <div className="font-bold text-slate-900 text-sm">{unitSummary.completedSetsCount}</div>
                <div className="text-slate-500 text-[10px]">Completed</div>
              </div>
              <div className="w-px h-5 bg-slate-200" />
              <div>
                <div className="font-bold text-slate-900 text-sm">{unitSummary.mistakesCount}</div>
                <div className="text-slate-500 text-[10px]">Mistakes</div>
              </div>
              {unitSummary.inProgressSetsCount > 0 && (
                <>
                  <div className="w-px h-5 bg-slate-200" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{unitSummary.inProgressSetsCount}</div>
                    <div className="text-slate-500 text-[10px]">In-Progress</div>
                  </div>
                </>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onResetUnitProgress) {
                    onResetUnitProgress(unitName);
                  }
                  setShowResetModal(false);
                  setToastMessage(`Progress reset.`);
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                id="btn-confirm-reset-unit"
              >
                <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-900 text-white text-xs font-semibold shadow-lg border border-emerald-700/80 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
