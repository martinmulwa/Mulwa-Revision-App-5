/**
 * Mulwa Clinical Exam Portal
 * Course Selection View
 *
 * Displays academic training tracks as high-clarity cards matching
 * the portal's design system with badges, descriptions, and chevrons.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 3.0.0
 */

import React from 'react';
import {
  ChevronRight,
  GraduationCap,
  Shield
} from 'lucide-react';
import { CourseId } from '../types';
import { COURSES } from '../data/courses';

interface CourseSelectionProps {
  selectedCourse?: CourseId | null;
  onSelectCourse: (courseId: CourseId) => void;
  onCancel?: () => void;
}

export default function CourseSelection({
  onSelectCourse
}: CourseSelectionProps) {
  const krnCourse = COURSES.find(c => c.id === 'KRN');
  const hcaCourse = COURSES.find(c => c.id === 'HCA');

  const coursesData = [
    {
      id: 'KRN' as CourseId,
      name: krnCourse?.name || 'KRN',
      shortCode: 'KRN',
      subtitle: `Official examination papers, ${krnCourse?.questionsCount.toLocaleString() ?? '2,244'} MCQs, ${krnCourse?.saqCount ?? 112} SAQs & lecture guides`,
      stats: `${krnCourse?.papersCount ?? 79} Papers · ${krnCourse?.questionsCount.toLocaleString() ?? '2,244'} Questions · ${krnCourse?.saqCount ?? 112} SAQs`,
      badge: krnCourse?.activeBadge || 'Active · 79 Papers',
      isAvailable: true,
      icon: GraduationCap,
      colorClass: 'bg-indigo-100/80 border-indigo-200/90 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      cardHover: 'hover:border-indigo-400',
      toColor: 'to-indigo-50/60'
    },
    {
      id: 'HCA' as CourseId,
      name: hcaCourse?.name || 'HCA',
      shortCode: 'HCA',
      subtitle: 'Patient safety, vital signs, hygiene protocols & college final exams',
      stats: `${hcaCourse?.papersCount ?? 2} Papers · ${hcaCourse?.questionsCount ?? 198} Questions · 10 Revision Sets`,
      badge: hcaCourse?.activeBadge || 'Active · 2 Papers',
      isAvailable: true,
      icon: Shield,
      colorClass: 'bg-emerald-100/80 border-emerald-200/90 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
      cardHover: 'hover:border-emerald-400',
      toColor: 'to-emerald-50/60'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-course-selection">
      {/* Grouped Cards */}
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
          Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {coursesData.map(course => {
            const Icon = course.icon;
            if (course.isAvailable) {
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => onSelectCourse(course.id)}
                  className={`bg-gradient-to-br from-white via-white ${course.toColor} rounded-2xl border border-slate-200/90 ${course.cardHover} p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer`}
                  id={`btn-select-course-${course.id.toLowerCase()}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${course.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug truncate">
                          {course.name}
                        </h3>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-1.5 py-0.5 rounded-md">
                          {course.badge}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        {course.stats}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5"
                    strokeWidth={2}
                  />
                </button>
              );
            }

            return (
              <div
                key={course.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                id={`btn-select-course-${course.id.toLowerCase()}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${course.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        {course.name}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-200/80 px-1.5 py-0.5 rounded-md">
                        {course.badge}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                      {course.stats}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
