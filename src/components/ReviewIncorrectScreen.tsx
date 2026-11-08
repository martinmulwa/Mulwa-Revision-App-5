/**
 * Mulwa Clinical Exam Portal
 * Mistakes Review Queue Screen
 *
 * Provides targeted clinical remediation for questions scoring below threshold (50%),
 * rendering authentic single-choice and true/false interactive interfaces with full rationales
 * and automatic resolution when retest is mastered (>= 80%).
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Check,
  Award,
  AlertCircle,
  CheckCircle2,
  X,
  Tag,
  RotateCcw
} from 'lucide-react';
import { SessionProgress, Question, AnswerState, QResult, OptionKey } from '../types';
import { PAST_PAPERS } from '../data/questions';
import { resolveQuestionType } from '../utils/questionHelpers';
import { scoreQuestion } from '../utils/scoring';

interface ReviewIncorrectScreenProps {
  progress: SessionProgress;
  onBack: () => void;
  onRemoveRecord: (recordId: string) => void;
  selectedUnit?: string | null;
  onClearUnitMistakes?: (unit: string) => void;
}

export default function ReviewIncorrectScreen({
  progress,
  onBack,
  onRemoveRecord,
  selectedUnit,
  onClearUnitMistakes
}: ReviewIncorrectScreenProps) {
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>(null);
  const [retestStates, setRetestStates] = useState<Record<string, AnswerState>>({});

  const incorrectRecords = progress.incorrectQuestions;

  // Build lookup of all questions across available papers with their unit association
  const allQuestionsMap = new Map<string, { question: Question; unit: string }>();
  PAST_PAPERS.forEach(paper => {
    const rawUnit = paper.unit || paper.category || '';
    let canonicalUnit = rawUnit;
    if (paper.id.includes('paediatric') || rawUnit.toLowerCase().includes('paediatric')) {
      canonicalUnit = 'Paediatrics 1';
    } else if (rawUnit === 'Pharmacology' || rawUnit === 'Pharmacology 1') {
      canonicalUnit = 'Pharmacology 1';
    } else if (rawUnit === 'Respiratory Disorders') {
      canonicalUnit = 'Respiratory Disorders';
    } else if (rawUnit === 'Trauma and Emergency Nursing' || rawUnit === 'Trauma and Emergency') {
      canonicalUnit = 'Trauma and Emergency';
    } else if (rawUnit === 'HCA' || rawUnit.includes('HCA') || rawUnit.includes('Health Care Support Assistant') || paper.id.startsWith('hca-')) {
      canonicalUnit = 'HCA';
    } else if (rawUnit.includes('Blood') || paper.id.includes('blood')) {
      canonicalUnit = 'Blood and Lymph Disorders';
    } else if (rawUnit.includes('GIT') || paper.id.includes('git')) {
      canonicalUnit = 'GIT Disorders';
    } else if (rawUnit === 'College Final Exams' || rawUnit.includes('College Final') || paper.id.startsWith('krn-collegefinal')) {
      canonicalUnit = 'College Final Exams';
    }

    (paper.questions || []).forEach(q => {
      allQuestionsMap.set(q.id, { question: q, unit: canonicalUnit });
    });
  });

  const resolvedQuestions = incorrectRecords
    .map(record => {
      const match = allQuestionsMap.get(record.questionId);
      if (!match) return null;
      if (selectedUnit) {
        const isMatch =
          match.unit === selectedUnit ||
          ((selectedUnit === 'Trauma and Emergency' || selectedUnit === 'Trauma and Emergency Nursing') &&
           (match.unit === 'Trauma and Emergency' || match.unit === 'Trauma and Emergency Nursing')) ||
          ((selectedUnit === 'HCA' || selectedUnit.includes('HCA')) && (match.unit === 'HCA' || match.unit.includes('HCA'))) ||
          ((selectedUnit === 'Blood and Lymph Disorders' || selectedUnit.includes('Blood and Lymph')) && (match.unit === 'Blood and Lymph Disorders' || match.unit.includes('Blood and Lymph'))) ||
          ((selectedUnit === 'GIT Disorders' || selectedUnit.includes('GIT')) && (match.unit === 'GIT Disorders' || match.unit.includes('GIT')));
        if (!isMatch) return null;
      }
      return {
        record,
        question: match.question
      };
    })
    .filter((item): item is { record: typeof incorrectRecords[0]; question: Question } => item !== null);

  const handleToggleExpand = (id: string) => {
    setExpandedRecordId(expandedRecordId === id ? null : id);
  };

  const handleRetestOption = (recordId: string, question: Question, key: OptionKey) => {
    const qType = resolveQuestionType(question);
    const result = scoreQuestion(question, key);
    const newState: AnswerState = {
      type: qType,
      questionType: qType,
      selectedOption: key,
      submitted: true,
      revealed: true,
      confirmed: true,
      result
    };

    setRetestStates(prev => ({ ...prev, [question.id]: newState }));

    // If student answered correctly, auto-resolve and remove from queue
    if (result.earned >= 1) {
      setTimeout(() => {
        onRemoveRecord(recordId);
      }, 1500);
    }
  };

  return (
    <div className="space-y-5" id="screen-review-incorrect">
      {/* Header Navigation */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-800 transition-all rounded-lg active:scale-95 shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer"
          id="back-button-review"
          title="Back to Dashboard"
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-3">
          {selectedUnit && onClearUnitMistakes && resolvedQuestions.length > 0 && (
            <button
              type="button"
              onClick={() => {
                if (window.confirm(`Clear all ${resolvedQuestions.length} logged mistakes for ${selectedUnit}?`)) {
                  onClearUnitMistakes(selectedUnit);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-all cursor-pointer shadow-2xs active:scale-95"
              id="btn-clear-unit-mistakes"
              title={`Clear all mistakes for ${selectedUnit}`}
            >
              <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
              <span className="hidden sm:inline">Clear Mistakes</span>
              <span className="sm:hidden">Clear</span>
            </button>
          )}

          <div className="text-right">
            <h1 className="text-sm sm:text-base font-bold text-slate-900">
              {selectedUnit ? `${selectedUnit} · Mistakes` : 'Mistakes Review'}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {resolvedQuestions.length} {resolvedQuestions.length === 1 ? 'Question' : 'Questions'}
            </p>
          </div>
        </div>
      </div>

      {resolvedQuestions.length === 0 ? (
        <div className="border border-slate-200/90 bg-slate-50/50 p-8 sm:p-10 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle className="w-5 h-5" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-800">Queue is Clear</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              You have no questions flagged for review.
            </p>
          </div>
          <button
            onClick={onBack}
            className="mt-2 px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#162f5f] text-white text-xs sm:text-sm font-semibold rounded-xl cursor-pointer min-h-[44px] transition-colors"
          >
            Dashboard
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {resolvedQuestions.map(({ record, question }, idx) => {
            const isExpanded = expandedRecordId === record.id;
            const qType = resolveQuestionType(question);
            const isTrueFalse = qType === 'true_false';
            const retestState = retestStates[question.id];
            const isRetested = retestState?.submitted ?? false;
            const retestSelected = retestState?.selectedOption;
            const retestCorrect = retestSelected === question.correctAnswer;

            const availableOptions = (Object.keys(question.options || {}) as OptionKey[])
              .filter(k => question.options[k] !== undefined && question.options[k] !== '')
              .sort();

            return (
              <div
                key={record.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs"
              >
                {/* Summary Header */}
                <div
                  onClick={() => handleToggleExpand(record.id)}
                  className="p-4 sm:p-4.5 flex items-start justify-between gap-3.5 cursor-pointer hover:bg-slate-50 transition-colors min-h-[64px]"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 border border-rose-200">
                        Item {idx + 1}
                      </span>
                      {question.sourceRef && (
                        <span className="text-[10px] text-slate-500 font-medium truncate">
                          {question.sourceRef}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug truncate">
                      {question.text}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveRecord(record.id);
                      }}
                      className="text-xs font-bold text-slate-400 hover:text-rose-600 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer min-h-[44px] flex items-center"
                      title="Dismiss from queue"
                    >
                      Dismiss
                    </button>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Interactive Remediation */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-200 space-y-3 animate-fade-in text-sm">
                    <p className="text-base font-bold text-slate-900 leading-relaxed sm:leading-[1.65]">
                      {question.text}
                    </p>

                    {/* Interactive Retest Option Selection */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                        Retest:
                      </span>

                      {isTrueFalse ? (
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                          {(['A', 'B'] as const).map(key => {
                            const label = key === 'A' ? 'True' : 'False';
                            const isSelected = retestSelected === key;
                            const isCorrect = question.correctAnswer === key;

                            let btnStyle = 'bg-white border-slate-200 hover:border-[#0B1B3D] text-slate-900 shadow-2xs';
                            if (isRetested) {
                              if (isCorrect) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                              else if (isSelected && !isCorrect) btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                              else btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                            }

                            return (
                              <button
                                key={key}
                                type="button"
                                disabled={isRetested}
                                onClick={() => handleRetestOption(record.id, question, key)}
                                className={`p-3.5 rounded-xl border text-left font-bold transition-all flex items-center justify-between min-h-[48px] cursor-pointer disabled:cursor-default active:scale-[0.99] ${btnStyle}`}
                              >
                                <span className="text-base font-bold">{key}. {label}</span>
                                {isRetested && isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                                {isRetested && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-600" />}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-2.5 sm:space-y-3">
                          {availableOptions.map(key => {
                            const isSelected = retestSelected === key;
                            const isCorrect = question.correctAnswer === key;

                            let btnStyle = 'bg-white border-slate-200 hover:border-[#0B1B3D] text-slate-800 shadow-2xs';
                            if (isRetested) {
                              if (isCorrect) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                              else if (isSelected && !isCorrect) btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                              else btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                            }

                            return (
                              <button
                                key={key}
                                type="button"
                                disabled={isRetested}
                                onClick={() => handleRetestOption(record.id, question, key)}
                                className={`w-full p-3 sm:p-3.5 rounded-xl border text-left font-medium transition-all flex items-start justify-between gap-3 min-h-[48px] cursor-pointer disabled:cursor-default active:scale-[0.99] ${btnStyle}`}
                              >
                                <span className="flex-1 text-[14px] sm:text-[15px] leading-relaxed">
                                  <strong className="mr-1.5 text-slate-900">{key}.</strong>
                                  {question.options[key]}
                                </span>
                                {isRetested && isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                                {isRetested && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Rationale and Marking Point */}
                    {isRetested && (
                      <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-xl space-y-2.5 animate-fade-in shadow-xs mt-3.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className={`text-xs font-bold uppercase tracking-wider ${retestCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                            {retestCorrect ? '✓ Correct! Resolved.' : `✗ Incorrect (Correct: ${question.correctAnswer})`}
                          </span>
                        </div>

                        {isTrueFalse && (
                          <div className="text-xs font-bold text-slate-900">
                            {question.correctAnswer === 'A' ? 'Verdict: True' : 'Verdict: False'}
                          </div>
                        )}

                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Rationale:</span>
                          <p className="text-[14px] text-slate-800 leading-relaxed sm:leading-[1.7] whitespace-pre-line font-normal">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
