/**
 * Mulwa Clinical Exam Portal
 * SAQ Condition Categories Library
 *
 * Minimal, distraction-free Block 1 navigation:
 * - Level 1: Block 1 unit list (clean buttons, zero text bloat)
 * - Level 2: Unit's conditions list (concise, instant launch)
 * - Full, unrestricted access to all 112 SAQs across all units.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 7.0.0
 */

import React from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Wind,
  Activity
} from 'lucide-react';
import {
  ALL_SAQ_QUESTIONS,
  getCategoriesByUnit
} from '../data/saqData';

interface SAQLibraryProps {
  masteredIds: string[];
  selectedUnit: string | null;
  onSelectUnit: (unit: string | null) => void;
  onSelectCategory: (categoryId: string) => void;
  onBackToHome: () => void;
}

export default function SAQLibrary({
  masteredIds,
  selectedUnit,
  onSelectUnit,
  onSelectCategory,
  onBackToHome
}: SAQLibraryProps) {
  const respiratoryCategories = getCategoriesByUnit('Respiratory Disorders');
  const traumaCategories = getCategoriesByUnit('Trauma and Emergency');

  const respiratoryQuestions = respiratoryCategories.flatMap(c => c.questions || []);
  const traumaQuestions = traumaCategories.flatMap(c => c.questions || []);

  const respiratoryCount = respiratoryQuestions.length;
  const traumaCount = traumaQuestions.length;

  const respiratoryMastered = respiratoryQuestions.filter(q => masteredIds.includes(q.id)).length;
  const traumaMastered = traumaQuestions.filter(q => masteredIds.includes(q.id)).length;

  const unitsDefinition = [
    {
      id: 'Respiratory Disorders',
      title: 'Respiratory Disorders',
      questionsCount: respiratoryCount,
      masteredCount: respiratoryMastered,
      iconType: 'respiratory' as const,
      subunitsCount: respiratoryCategories.length
    },
    {
      id: 'Trauma and Emergency',
      title: 'Trauma and Emergency',
      questionsCount: traumaCount,
      masteredCount: traumaMastered,
      iconType: 'trauma' as const,
      subunitsCount: traumaCategories.length
    }
  ];

  // ==========================================
  // LEVEL 1: Block 1 Units List (Clean & Minimal)
  // ==========================================
  if (selectedUnit === null) {
    return (
      <div className="space-y-4" id="screen-saq-units">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
              id="back-btn-saqs-home"
              title="Back"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
            </button>

            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              SAQ Bank
            </h1>
          </div>
        </div>

        {/* Block 1 Section */}
        <div className="space-y-2.5">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Block 1
          </h2>

          {/* List of Unit Buttons */}
          <div className="space-y-2">
            {unitsDefinition.map(unit => {
              const iconBoxClass =
                unit.iconType === 'respiratory'
                  ? 'bg-sky-50 text-sky-600 border-sky-200/80 group-hover:bg-sky-100 group-hover:text-sky-700'
                  : 'bg-rose-50 text-rose-600 border-rose-200/80 group-hover:bg-rose-100 group-hover:text-rose-700';

              const unitIcon =
                unit.iconType === 'respiratory' ? (
                  <Wind className="w-4.5 h-4.5" />
                ) : (
                  <Activity className="w-4.5 h-4.5" />
                );

              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => onSelectUnit(unit.id)}
                  id={`saq-unit-card-${unit.id}`}
                  className="w-full text-left bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${iconBoxClass}`}>
                      {unitIcon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {`${unit.questionsCount} Questions across ${unit.subunitsCount} Sub-Units`}
                        {unit.masteredCount > 0 && ` · ${unit.masteredCount} Mastered`}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: Unit's Conditions / Sub-Units List
  // ==========================================
  const displayedCategories = getCategoriesByUnit(selectedUnit);

  return (
    <div className="space-y-4" id="screen-saq-conditions-list">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectUnit(null)}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
            id="back-btn-saq-units"
            title="Back to Units"
            aria-label="Back to units"
          >
            <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-slate-400 truncate">
              <span className="text-indigo-900 font-bold">Block 1</span>
              <span>·</span>
              <span>SAQ Bank</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug truncate">
              {selectedUnit}
            </h1>
          </div>
        </div>
      </div>

      {/* Vertical list of Conditions (Sub-Units) */}
      {displayedCategories.length === 0 ? (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 text-center text-slate-500 shadow-2xs">
          <p className="font-semibold text-slate-700 text-sm sm:text-base">No SAQ questions available for this unit.</p>
          <p className="text-xs text-slate-400 mt-1">Past paper SAQs for this unit will appear here once added.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {displayedCategories.map((category) => {
            const catQuestions = category.questions || [];
            const displayCount = catQuestions.length;
            const masteredInCat = catQuestions.filter((q) => masteredIds.includes(q.id)).length;
            const isAllMastered = catQuestions.length > 0 && masteredInCat === catQuestions.length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className="w-full text-left bg-white border border-slate-200/90 hover:border-indigo-300 p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
                id={`saq-category-${category.id}`}
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug">
                      {category.title}
                    </h3>

                    {isAllMastered && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Mastered
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    {`${displayCount} ${displayCount === 1 ? 'Question' : 'Questions'}`}
                    {masteredInCat > 0 && !isAllMastered && ` · ${masteredInCat} Mastered`}
                  </p>
                </div>

                <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] transition-colors shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
