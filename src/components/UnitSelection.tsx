/**
 * Mulwa Clinical Exam Portal
 * Unit Selection View
 *
 * Displays clinical units under Block 1 as high-clarity cards matching
 * the portal's design system with icons, question counts, and chevrons.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Wind,
  Activity,
  Pill,
  Baby,
  Award,
  Droplets,
  Utensils
} from 'lucide-react';
import { CourseId, BlockId } from '../types';

export const BLOCK1_UNITS = [
  'Respiratory Disorders',
  'Trauma and Emergency',
  'Pharmacology 1',
  'Paediatrics 1',
  'Blood and Lymph Disorders',
  'GIT Disorders'
] as const;

export type Block1Unit = typeof BLOCK1_UNITS[number];

interface UnitSelectionProps {
  courseId?: CourseId | null;
  blockId?: BlockId | null;
  onSelectUnit: (unit: string) => void;
  onBack?: () => void;
}

export default function UnitSelection({ courseId, blockId, onSelectUnit, onBack }: UnitSelectionProps) {
  const krnUnits = [
    {
      id: 'Respiratory Disorders',
      title: 'Respiratory Disorders',
      code: 'MSN 101',
      subtitle: '11 Papers · 553 MCQs · 29 SAQs',
      icon: Wind,
      colorClass: 'bg-sky-100/80 border-sky-200/90 text-sky-700 group-hover:bg-sky-600 group-hover:text-white',
      cardHover: 'hover:border-sky-400',
      toColor: 'to-sky-50/60'
    },
    {
      id: 'Trauma and Emergency',
      title: 'Trauma and Emergency',
      code: 'MSN 102',
      subtitle: '12 Papers · 357 MCQs · 83 SAQs',
      icon: Activity,
      colorClass: 'bg-rose-100/80 border-rose-200/90 text-rose-700 group-hover:bg-rose-600 group-hover:text-white',
      cardHover: 'hover:border-rose-400',
      toColor: 'to-rose-50/60'
    },
    {
      id: 'Pharmacology 1',
      title: 'Pharmacology 1',
      code: 'MSN 103',
      subtitle: '6 Papers · 162 MCQs · 7 Study Guides',
      icon: Pill,
      colorClass: 'bg-amber-100/80 border-amber-200/90 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
      cardHover: 'hover:border-amber-400',
      toColor: 'to-amber-50/60'
    },
    {
      id: 'Paediatrics 1',
      title: 'Paediatrics 1',
      code: 'PEN 101',
      subtitle: '11 Papers · 173 MCQs',
      icon: Baby,
      colorClass: 'bg-teal-100/80 border-teal-200/90 text-teal-700 group-hover:bg-teal-600 group-hover:text-white',
      cardHover: 'hover:border-teal-400',
      toColor: 'to-teal-50/60'
    },
    {
      id: 'Blood and Lymph Disorders',
      title: 'Blood and Lymph Disorders',
      code: 'MHN 201',
      subtitle: '7 Papers · 95 MCQs',
      icon: Droplets,
      colorClass: 'bg-red-100/80 border-red-200/90 text-red-700 group-hover:bg-red-600 group-hover:text-white',
      cardHover: 'hover:border-red-400',
      toColor: 'to-red-50/60'
    },
    {
      id: 'GIT Disorders',
      title: 'GIT Disorders',
      code: 'MSN 105',
      subtitle: '17 Papers · 304 MCQs · 23 Sets',
      icon: Utensils,
      colorClass: 'bg-orange-100/80 border-orange-200/90 text-orange-700 group-hover:bg-orange-600 group-hover:text-white',
      cardHover: 'hover:border-orange-400',
      toColor: 'to-orange-50/60'
    }
  ];

  const hcaUnits = [
    {
      id: 'HCA',
      title: 'HCA',
      code: 'HCA',
      subtitle: '2 Papers · 198 MCQs · 10 Revision Sets',
      icon: Award,
      colorClass: 'bg-emerald-100/80 border-emerald-200/90 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
      cardHover: 'hover:border-emerald-400',
      toColor: 'to-emerald-50/60'
    }
  ];

  const krnFinalsUnits = [
    {
      id: 'College Final Exams',
      title: 'College Final Exams',
      code: 'KRCHN Final',
      subtitle: '15 Papers · 600 MCQs · 30 Revision Sets',
      icon: Award,
      colorClass: 'bg-indigo-100/80 border-indigo-200/90 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      cardHover: 'hover:border-indigo-400',
      toColor: 'to-indigo-50/60'
    }
  ];

  const unitsData = courseId === 'HCA'
    ? hcaUnits
    : (blockId === 'finals' ? krnFinalsUnits : krnUnits);
  const blockTitle = blockId === 'block1'
    ? 'Block 1'
    : blockId === 'block2'
      ? 'Block 2'
      : blockId === 'finals'
        ? (courseId === 'HCA' ? 'HCA College Final Exams' : 'KRN College Final Exams')
        : 'Units';

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-unit-selection">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/90">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="btn-unit-selection-back"
              title="Back to Block Selection"
              aria-label="Back to block selection"
            >
              <ChevronLeft className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug truncate">
              {blockTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Grouped Cards */}
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
          Units
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {unitsData.map(unit => {
            const Icon = unit.icon;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => onSelectUnit(unit.id)}
                className={`bg-gradient-to-br from-white via-white ${unit.toColor} rounded-2xl border border-slate-200/90 ${unit.cardHover} p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer`}
                id={`btn-select-unit-${unit.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${unit.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug truncate">
                        {unit.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md">
                        {unit.code}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                      {unit.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                  strokeWidth={2}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
