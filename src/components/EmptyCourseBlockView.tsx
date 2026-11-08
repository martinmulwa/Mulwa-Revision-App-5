/**
 * Mulwa Clinical Exam Portal
 * Minimalist Empty Course / Block View
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React from 'react';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
import { CourseId, BlockId } from '../types';

interface EmptyCourseBlockViewProps {
  courseId: CourseId;
  blockId: BlockId | null;
  onSelectKrnBlock1?: () => void;
  onChangeCourse?: () => void;
  onChangeBlock?: () => void;
}

export default function EmptyCourseBlockView({
  courseId,
  blockId,
  onSelectKrnBlock1,
  onChangeCourse,
  onChangeBlock
}: EmptyCourseBlockViewProps) {
  const handleBack = onChangeBlock || onChangeCourse;
  const name = blockId === 'block2' ? 'Block 2' : blockId === 'finals' ? 'Finals & Licensure' : courseId;
  const subtitle =
    courseId === 'HCA'
      ? 'HCA curriculum modules are currently in preparation.'
      : `${name} clinical modules and examination question banks are currently in preparation.`;

  return (
    <div className="max-w-md mx-auto py-8 sm:py-12 space-y-5" id="empty-course-block-view">
      {handleBack && (
        <div className="flex items-center mb-2">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-95"
            id="btn-empty-view-back"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back</span>
          </button>
        </div>
      )}

      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xs">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-lg">
          ⏳
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="pt-2 space-y-2.5">
          {onSelectKrnBlock1 && (
            <button
              type="button"
              onClick={onSelectKrnBlock1}
              className="w-full py-3.5 px-4 rounded-xl bg-[#0B1B3D] hover:bg-indigo-900 text-white font-bold text-sm text-center transition-all cursor-pointer shadow-xs active:scale-[0.99]"
              id="btn-go-to-krn-block1"
            >
              Go to KRN Block 1 (Active)
            </button>
          )}

          {handleBack && (
            <button
              type="button"
              onClick={handleBack}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm text-center transition-all cursor-pointer active:scale-[0.99]"
              id="btn-empty-return-selection"
            >
              Return to Selection
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
