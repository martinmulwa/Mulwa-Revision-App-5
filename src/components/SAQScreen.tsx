/**
 * Mulwa Clinical Exam Portal
 * SAQ Question Revision Screen
 *
 * Implements:
 * - 1-question-at-a-time presentation within the selected condition category
 * - Direct "Reveal Solution" action (no active recall prompt/scratchpad)
 * - Large, highly-readable typography matching the MCQ explanation view
 * - Memory aids, mnemonics, and "Ace It" examiner scoring advice
 * - Self-mastery toggle and seamless prev/next category pacing
 * - Zero AI star icons
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Lightbulb,
  Bookmark,
  ArrowLeft,
  Flame,
  Award,
  AlertTriangle,
  BookOpen,
  Check
} from 'lucide-react';
import { SAQQuestion } from '../types';

/**
 * Strips leading numbers/bullets from point strings to prevent duplicate numbering
 * with the numbered badge, while preserving continuation numbering (e.g. 6, 7, 8 in Section B).
 */
function parsePoint(pt: string, fallbackIndex: number): { number: string | number; text: string } {
  const match = pt.match(/^\s*(\d+)[\.\)]\s*(.*)$/s);
  if (match) {
    return {
      number: match[1],
      text: match[2].trim()
    };
  }
  return {
    number: fallbackIndex + 1,
    text: pt.trim()
  };
}

/**
 * Computes responsive column widths so tables fit inside mobile viewports without horizontal scrollbars.
 */
function getTableColWidthClass(totalCols: number, colIdx: number, isShortFirstCol: boolean): string {
  if (isShortFirstCol && colIdx === 0) {
    return 'w-8 sm:w-12 text-center';
  }
  if (totalCols === 4) {
    if (isShortFirstCol) {
      if (colIdx === 1) return 'w-[28%] sm:w-[26%]';
      if (colIdx === 2) return 'w-[24%] sm:w-[22%]';
      return 'w-auto';
    }
    return 'w-1/4';
  }
  if (totalCols === 3) {
    if (isShortFirstCol) {
      if (colIdx === 1) return 'w-[40%] sm:w-[36%]';
      return 'w-auto';
    }
    return 'w-1/3';
  }
  if (totalCols === 2) {
    if (isShortFirstCol) {
      return 'w-auto';
    }
    if (colIdx === 0) return 'w-1/2 sm:w-2/5';
    return 'w-auto';
  }
  return '';
}

interface SAQScreenProps {
  categoryTitle: string;
  frequencyBadge?: string;
  questions: SAQQuestion[];
  currentQuestionIndex: number;
  masteredIds: string[];
  bookmarkedIds: string[];
  onSelectIndex: (index: number) => void;
  onToggleMastered: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExit: () => void;
}

export default function SAQScreen({
  categoryTitle,
  frequencyBadge,
  questions,
  currentQuestionIndex,
  masteredIds,
  bookmarkedIds,
  onSelectIndex,
  onToggleMastered,
  onToggleBookmark,
  onExit
}: SAQScreenProps) {
  const currentQuestion = questions[currentQuestionIndex];
  const [isRevealed, setIsRevealed] = useState(false);

  // Reset revealed state and scroll to top when question changes
  useEffect(() => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentQuestionIndex]);

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center text-slate-500">
        <p>No question found.</p>
        <button
          onClick={onExit}
          className="mt-4 px-4 py-2 bg-[#0B1B3D] text-white rounded-xl text-sm font-semibold cursor-pointer"
        >
          Return to Categories
        </button>
      </div>
    );
  }

  const isMastered = masteredIds.includes(currentQuestion.id);
  const isBookmarked = bookmarkedIds.includes(currentQuestion.id);
  const hasPrevious = currentQuestionIndex > 0;
  const hasNext = currentQuestionIndex < questions.length - 1;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const handlePrev = () => {
    if (hasPrevious) {
      onSelectIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectIndex(currentQuestionIndex + 1);
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && hasNext) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        handlePrev();
      } else if (e.key === ' ' && !isRevealed) {
        e.preventDefault();
        setIsRevealed(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, hasNext, hasPrevious, isRevealed]);

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-saq-question">
      {/* 1. Header Bar: Minimal, Clean, Distraction-Free */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={onExit}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
            title="Return to SAQ List"
            aria-label="Return to SAQ list"
          >
            <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
          </button>

          <h2 className="text-sm sm:text-base font-bold text-slate-900 truncate">
            {categoryTitle}
          </h2>
        </div>

        {/* Counter & Bookmark */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-900">
            <span>{currentQuestionIndex + 1}</span>
            <span className="text-slate-400 font-normal mx-0.5">/</span>
            <span className="text-slate-500 font-medium">{questions.length}</span>
          </div>

          <button
            type="button"
            onClick={() => onToggleBookmark(currentQuestion.id)}
            className={`p-2 rounded-xl border transition-all cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center ${
              isBookmarked
                ? 'bg-amber-50 border-amber-200 text-amber-600'
                : 'border-slate-200 bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Bookmark question'}
            aria-label="Bookmark question"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-[#0B1B3D] h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Marks & Status Bar (Minimal, High Yield Context) */}
      <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-slate-700 bg-slate-100 border border-slate-200/90 px-2.5 py-1 rounded-lg">
            {currentQuestion.marks} Marks
          </span>

          {frequencyBadge && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-100/90 text-amber-900 border border-amber-300 flex items-center gap-1.5 shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>{frequencyBadge}</span>
            </span>
          )}
        </div>

        {isMastered && (
          <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Mastered
          </span>
        )}
      </div>

      {/* Question Prompt Card (Clean, Focused, Direct) */}
      <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug sm:leading-relaxed">
          {currentQuestion.text}
        </h1>
      </div>

      {/* 4. Direct "Reveal Solution" Action Button (No Active Recall scratchpad or icons) */}
      {!isRevealed ? (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsRevealed(true)}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#0B1B3D] hover:bg-[#162f5f] text-white font-bold text-sm sm:text-base rounded-xl shadow-xs hover:shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="reveal-solution-btn"
          >
            <Eye className="w-4.5 h-4.5" />
            <span>Reveal Solution</span>
          </button>
        </div>
      ) : (
        /* 5. Revealed Model Answer & Clinical Insights */
        <div className="space-y-4 animate-fade-in" id="revealed-solution-container">
          
          {/* Model Answer Card (Header: "Model Answer") */}
          <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs">
                  ✓
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Model Answer
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {currentQuestion.marks} Marks
              </span>
            </div>

            {/* Intro text */}
            {currentQuestion.modelAnswer.intro && (
              <p className="text-[14px] sm:text-[15px] font-semibold text-slate-800 leading-relaxed sm:leading-[1.7] bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                {currentQuestion.modelAnswer.intro}
              </p>
            )}

            {/* Subsections */}
            {currentQuestion.modelAnswer.subsections && currentQuestion.modelAnswer.subsections.length > 0 && (
              <div className="space-y-3.5 pt-1">
                {currentQuestion.modelAnswer.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1B3D] bg-indigo-50/70 px-3 py-1.5 rounded-lg border border-indigo-100/80 inline-block">
                      {sub.heading}
                    </h4>
                    <ol className="space-y-2 pl-1">
                      {sub.points.map((pt, pIdx) => {
                        const { number, text } = parsePoint(pt, pIdx);
                        return (
                          <li key={pIdx} className="text-[14px] sm:text-[15px] text-slate-800 leading-relaxed sm:leading-[1.7] flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {number}
                            </span>
                            <span className="flex-1">{text}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                ))}
              </div>
            )}

            {/* Numbered points */}
            {currentQuestion.modelAnswer.points && currentQuestion.modelAnswer.points.length > 0 && (
              <ol className="space-y-2.5 pt-1">
                {currentQuestion.modelAnswer.points.map((pt, pIdx) => {
                  const { number, text } = parsePoint(pt, pIdx);
                  return (
                    <li key={pIdx} className="text-[14px] sm:text-[15px] text-slate-800 leading-relaxed sm:leading-[1.7] flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {number}
                      </span>
                      <span className="flex-1">{text}</span>
                    </li>
                  );
                })}
              </ol>
            )}

            {/* Table in Model Answer */}
            {currentQuestion.modelAnswer.table && (
              <div className="pt-2 w-full overflow-hidden">
                <table className="w-full table-fixed text-left text-[11px] sm:text-xs md:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden [overflow-wrap:anywhere]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold">
                      {currentQuestion.modelAnswer.table.headers.map((h, hIdx) => {
                        const totalCols = currentQuestion.modelAnswer.table!.headers.length;
                        const isShortFirst = currentQuestion.modelAnswer.table!.rows.every(r => (r[0] || '').length <= 4);
                        const colWidth = getTableColWidthClass(totalCols, hIdx, isShortFirst);
                        return (
                          <th key={hIdx} className={`p-1.5 sm:p-2.5 md:p-3 border-b border-slate-200 break-words ${colWidth}`}>
                            {h}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {currentQuestion.modelAnswer.table.rows.map((row, rIdx) => {
                      const isShortFirst = (row[0] || '').length <= 4;
                      return (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-1.5 sm:p-2.5 md:p-3 leading-snug sm:leading-relaxed text-slate-800 align-top break-words ${
                                cIdx === 0 && isShortFirst ? 'text-center font-bold text-slate-900' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Content citation */}
            {currentQuestion.modelAnswer.contentSupport && (
              <div className="pt-2 mt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{currentQuestion.modelAnswer.contentSupport}</span>
              </div>
            )}
          </div>

          {/* Memory Aid & Mnemonics Card — High readability text */}
          {((currentQuestion.memoryTips && currentQuestion.memoryTips.length > 0) ||
            (currentQuestion.mnemonics && currentQuestion.mnemonics.length > 0)) && (
            <div className="p-4 sm:p-5 bg-amber-50/80 border border-amber-200/90 rounded-2xl shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-amber-900">
                <Lightbulb className="w-4.5 h-4.5 text-amber-700" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                  Memory Aid & Mnemonics
                </h3>
              </div>

              {/* Memory tips list with matching font size */}
              {currentQuestion.memoryTips && (
                <ul className="space-y-2 text-[14px] sm:text-[15px] text-amber-950 leading-relaxed sm:leading-[1.7]">
                  {currentQuestion.memoryTips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="text-amber-600 font-black shrink-0 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Mnemonic table / summaries */}
              {currentQuestion.mnemonics && currentQuestion.mnemonics.map((mn, mIdx) => (
                <div key={mIdx} className="mt-2.5 pt-2 border-t border-amber-200/60 space-y-2">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-amber-900">
                      {mn.title}
                    </span>
                  </div>

                  {mn.summary && (
                    <p className="text-[13px] sm:text-[14px] text-amber-950 font-medium leading-relaxed bg-white/70 p-2.5 rounded-lg border border-amber-200/60">
                      {mn.summary}
                    </p>
                  )}

                  {mn.table && (
                    <div className="w-full overflow-hidden bg-white/80 rounded-xl border border-amber-200/80">
                      <table className="w-full table-fixed text-left text-[11px] sm:text-xs md:text-sm border-collapse [overflow-wrap:anywhere]">
                        <thead>
                          <tr className="bg-amber-100/60 text-amber-900 font-bold">
                            {mn.table.headers.map((th, thIdx) => {
                              const totalCols = mn.table!.headers.length;
                              const isShortFirst = mn.table!.rows.every(r => (r[0] || '').length <= 4);
                              const colWidth = getTableColWidthClass(totalCols, thIdx, isShortFirst);
                              return (
                                <th
                                  key={thIdx}
                                  className={`p-1.5 sm:p-2.5 border-b border-amber-200/80 break-words ${colWidth}`}
                                >
                                  {thIdx === 0 ? '' : th}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-100">
                          {mn.table.rows.map((row, rIdx) => {
                            const isShortFirst = (row[0] || '').length <= 4;
                            return (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`p-1.5 sm:p-2.5 text-slate-800 leading-snug sm:leading-relaxed align-top break-words ${
                                      cIdx === 0 && isShortFirst
                                        ? 'font-bold text-amber-900 text-center'
                                        : cIdx === 0
                                        ? 'font-bold text-amber-900'
                                        : ''
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Clinical Warning notice */}
          {currentQuestion.warningNotice && (
            <div className="p-3.5 sm:p-4 bg-rose-50/90 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-[14px] sm:text-[15px] text-rose-950 leading-relaxed sm:leading-[1.7]">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="font-medium">
                {currentQuestion.warningNotice.replace(/^[\s⚠️!]+/, '').trim()}
              </p>
            </div>
          )}

          {/* "Ace It" Exam Tip Box — Matching typography and enhanced readability */}
          {currentQuestion.aceItTip && (
            <div className="p-4 sm:p-5 bg-cyan-50/70 border border-cyan-200/80 rounded-2xl shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-950">
                <Lightbulb className="w-4.5 h-4.5 text-cyan-800" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                  {currentQuestion.aceItTip.title}
                </h3>
              </div>
              <ul className="space-y-2 text-[14px] sm:text-[15px] text-slate-800 leading-relaxed sm:leading-[1.7]">
                {currentQuestion.aceItTip.tips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-700 font-black shrink-0 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mastered Toggle */}
          <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Mark this question as mastered when you can recall all points:
            </span>
            <button
              type="button"
              onClick={() => onToggleMastered(currentQuestion.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                isMastered
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-600 hover:text-emerald-700'
              }`}
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>{isMastered ? 'Mastered ✓' : 'Mark as Mastered'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 6. Navigation Controls: Prev, Next, or Return to Categories */}
      <div className="pt-3 border-t border-slate-200/80 mt-4">
        <div className="flex items-center justify-between gap-2.5">
          <div>
            {hasPrevious ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-3.5 py-2.5 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all min-h-[44px] cursor-pointer shadow-2xs whitespace-nowrap"
                id="saq-prev-btn"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onExit}
                className="px-3.5 py-2.5 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all min-h-[44px] cursor-pointer shadow-2xs whitespace-nowrap"
                aria-label="Back to categories"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Categories</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {hasNext ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#162f5f] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all shadow-sm min-h-[44px] cursor-pointer whitespace-nowrap"
                id="saq-next-btn"
                aria-label="Next question"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onExit}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all shadow-sm min-h-[44px] cursor-pointer whitespace-nowrap"
                id="saq-finish-btn"
              >
                <span>Complete Category</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
