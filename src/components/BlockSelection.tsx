/**
 * Mulwa Clinical Exam Portal
 * Block Selection View
 *
 * Displays academic training blocks as high-clarity cards matching
 * the portal's design system with badges, descriptions, and chevrons.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 3.0.0
 */

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Layers,
  Award
} from 'lucide-react';
import { CourseId, BlockId } from '../types';
import { KRN_BLOCKS, HCA_BLOCKS } from '../data/courses';

interface BlockSelectionProps {
  courseId: CourseId;
  selectedBlock?: BlockId | null;
  onSelectBlock: (blockId: BlockId) => void;
  onChangeCourse?: () => void;
  onBack?: () => void;
}

export default function BlockSelection({
  courseId,
  onSelectBlock,
  onChangeCourse,
  onBack
}: BlockSelectionProps) {
  const handleBack = onBack || onChangeCourse;

  const block1Meta = KRN_BLOCKS.find(b => b.id === 'block1');
  const finalsMeta = KRN_BLOCKS.find(b => b.id === 'finals');

  const krnBlocksData = [
    {
      id: 'block1' as BlockId,
      title: block1Meta?.title || 'Block 1',
      code: block1Meta?.code || 'MSN 101, 102, 103, 105 · PHM 102 · PON 101 · PEN 101 · MHN 201',
      subtitle: block1Meta?.subtitle || 'Respiratory, Trauma, Pharmacology 1 & 2, Perioperative, Paediatrics 1, Blood/Lymph & GIT',
      stats: `${block1Meta?.papersCount ?? 80} Papers · ${block1Meta?.questionsCount.toLocaleString() ?? '1,930'} Questions · ${block1Meta?.saqCount ?? 112} SAQs`,
      badge: `Active · ${block1Meta?.units.length ?? 8} Units`,
      isAvailable: true,
      icon: GraduationCap,
      colorClass: 'bg-indigo-100/80 border-indigo-200/90 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      cardHover: 'hover:border-indigo-400',
      toColor: 'to-indigo-50/60'
    },
    {
      id: 'block2' as BlockId,
      title: 'Block 2',
      code: 'MSN 201, 202, 203 · RH 201',
      subtitle: 'Cardiovascular, Renal, GI & Reproductive Health',
      stats: 'Specialized Curriculum in Preparation',
      badge: 'Coming Soon',
      isAvailable: false,
      icon: Layers,
      colorClass: 'bg-slate-100 border-slate-200 text-slate-400',
      cardHover: '',
      toColor: ''
    },
    {
      id: 'finals' as BlockId,
      title: finalsMeta?.title || 'Finals & Licensure',
      code: finalsMeta?.code || 'KRCHN Final Exams',
      subtitle: finalsMeta?.subtitle || 'March 2009–2014, Sept 2012–2013, Sept 2019 & 2021 Finals',
      stats: `${finalsMeta?.papersCount ?? 15} Papers · ${finalsMeta?.questionsCount ?? 600} Questions · 30 Revision Sets`,
      badge: finalsMeta?.activeBadge || 'Active · 15 Papers',
      isAvailable: true,
      icon: Award,
      colorClass: 'bg-indigo-100/80 border-indigo-200/90 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      cardHover: 'hover:border-indigo-400',
      toColor: 'to-indigo-50/60'
    }
  ];

  const hcaBlocksData = [
    {
      id: 'finals' as BlockId,
      title: 'College Final Exams',
      code: 'HCA College Final Exams',
      subtitle: 'College Final Exam Past Papers',
      stats: '2 Papers · 198 Questions · 10 Revision Sets',
      badge: 'Active · 2 Papers',
      isAvailable: true,
      icon: Award,
      colorClass: 'bg-emerald-100/80 border-emerald-200/90 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
      cardHover: 'hover:border-emerald-400',
      toColor: 'to-emerald-50/60'
    },
    {
      id: 'block1' as BlockId,
      title: 'Stage 1: Foundations',
      code: 'HCA 101',
      subtitle: 'Fundamentals of Healthcare Support & Infection Control',
      stats: 'Curriculum in Preparation',
      badge: 'Coming Soon',
      isAvailable: false,
      icon: Layers,
      colorClass: 'bg-slate-100 border-slate-200 text-slate-400',
      cardHover: '',
      toColor: ''
    },
    {
      id: 'block2' as BlockId,
      title: 'Stage 2: Clinical Support',
      code: 'HCA 102',
      subtitle: 'Assisting in Clinical Procedures & First Aid',
      stats: 'Curriculum in Preparation',
      badge: 'Coming Soon',
      isAvailable: false,
      icon: GraduationCap,
      colorClass: 'bg-slate-100 border-slate-200 text-slate-400',
      cardHover: '',
      toColor: ''
    }
  ];

  const blocksData = courseId === 'HCA' ? hcaBlocksData : krnBlocksData;

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-block-selection">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/90">
        <div className="flex items-center gap-3 min-w-0">
          {handleBack && (
            <button
              type="button"
              onClick={handleBack}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="btn-block-back"
              title="Back to Course Selection"
              aria-label="Back to course selection"
            >
              <ChevronLeft className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug truncate">
              {courseId}
            </h1>
          </div>
        </div>
      </div>

      {/* Grouped Cards */}
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
          Blocks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {blocksData.map(block => {
            const Icon = block.icon;
            if (block.isAvailable) {
              return (
                <button
                  key={block.id}
                  type="button"
                  onClick={() => onSelectBlock(block.id)}
                  className={`bg-gradient-to-br from-white via-white ${block.toColor} rounded-2xl border border-slate-200/90 ${block.cardHover} p-3.5 sm:p-4 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer`}
                  id={`btn-select-block-${block.id}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shrink-0 ${block.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug truncate">
                          {block.title}
                        </h3>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-1.5 py-0.5 rounded-md">
                          {block.badge}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                        {block.stats}
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
                key={block.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex justify-between items-center text-left opacity-60 cursor-not-allowed min-h-[64px]"
                id={`btn-select-block-${block.id}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${block.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-sm sm:text-base text-slate-500 leading-snug truncate">
                        {block.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-200/80 px-1.5 py-0.5 rounded-md">
                        {block.badge}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                      {block.stats}
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
