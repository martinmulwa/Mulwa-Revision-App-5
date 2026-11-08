/**
 * Mulwa Clinical Exam Portal
 * Study Curriculum & Clinical Lecture Notes
 *
 * Dedicated Study Section with Strict 5-Tier Navigation Hierarchy:
 * 1. Homescreen Dashboard -> "Study"
 * 2. Select Block (Block 1)
 * 3. Select Unit (under Block 1: Pharmacology 1)
 * 4. Select Category/Area (under Pharmacology 1: Antibiotics)
 * 5. Select Topic:
 *    - "1. Foundations: Classification of Antibiotics"
 *    - "2. Combinations: Synergism and Beta-lactamase"
 * 6. Topic Study Guide Reader:
 *    - All section filter tags fully visible (multi-line wrapping view, zero horizontal scrolling)
 *    - Enhanced font sizes for high visibility on all screen sizes, especially mobile devices
 *    - 100% complete content preservation across all parts A to G
 *    - Interactive past papers, explanations, trap alerts & mini self-test
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 6.0.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Share2,
  Check,
  Pill,
  Layers,
  GraduationCap
} from 'lucide-react';
import {
  ANTIBIOTICS_SECTION_1,
  ANTIBIOTICS_SECTION_2,
  ANTIBIOTICS_SECTION_3,
  ANTIBIOTICS_SECTION_4,
  ANTIBIOTICS_SECTION_5,
  ANTIBIOTICS_SECTION_6,
  ANTIBIOTICS_SECTION_7,
  STUDY_CURRICULUM,
  StudyBlock,
  StudyBlockUnit,
  StudyUnitCategory
} from '../data/study';
import Topic1FoundationsView from './study/Topic1FoundationsView';
import Topic2CombinationsView, { StudyActiveTab } from './study/Topic2CombinationsView';
import Topic3PenicillinsView from './study/Topic3PenicillinsView';
import Topic4CephalosporinsView from './study/Topic4CephalosporinsView';
import Topic5CarbapenemsView from './study/Topic5CarbapenemsView';
import Topic6MacrolidesView from './study/Topic6MacrolidesView';
import Topic7LincosamidesView from './study/Topic7LincosamidesView';

interface StudySectionProps {
  onBackToHome: () => void;
  onNavigateToMcq?: (paperId: string) => void;
  initialBlockId?: string | null;
  initialUnitId?: string | null;
  initialCategoryId?: string | null;
  initialTopicId?: string | null;
}

export default function StudySection({
  onBackToHome,
  onNavigateToMcq,
  initialBlockId = null,
  initialUnitId = null,
  initialCategoryId = null,
  initialTopicId = null
}: StudySectionProps) {
  // Navigation states through the 5 tiers
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(initialBlockId);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(initialUnitId);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(initialCategoryId);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(initialTopicId);

  // Reader states
  const [activeSubTab, setActiveSubTab] = useState<StudyActiveTab>('all');
  const [examAnswers, setExamAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [revealedRationales, setRevealedRationales] = useState<Record<string, boolean>>({});
  const [selfTestAnswers, setSelfTestAnswers] = useState<Record<string, number>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top when changing navigation tiers
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [selectedBlockId, selectedUnitId, selectedCategoryId, selectedTopicId]);

  const isSection7 = selectedTopicId === ANTIBIOTICS_SECTION_7.id;
  const isSection6 = selectedTopicId === ANTIBIOTICS_SECTION_6.id;
  const isSection5 = selectedTopicId === ANTIBIOTICS_SECTION_5.id;
  const isSection4 = selectedTopicId === ANTIBIOTICS_SECTION_4.id;
  const isSection3 = selectedTopicId === ANTIBIOTICS_SECTION_3.id;
  const isSection2 = selectedTopicId === ANTIBIOTICS_SECTION_2.id;
  const currentTopic = isSection7
    ? ANTIBIOTICS_SECTION_7
    : isSection6
    ? ANTIBIOTICS_SECTION_6
    : isSection5
    ? ANTIBIOTICS_SECTION_5
    : isSection4
    ? ANTIBIOTICS_SECTION_4
    : isSection3
    ? ANTIBIOTICS_SECTION_3
    : isSection2
    ? ANTIBIOTICS_SECTION_2
    : ANTIBIOTICS_SECTION_1;

  const currentBlock: StudyBlock | undefined = STUDY_CURRICULUM.find(b => b.id === selectedBlockId);
  const currentUnit: StudyBlockUnit | undefined = currentBlock?.units.find(u => u.id === selectedUnitId);
  const currentCategory: StudyUnitCategory | undefined = currentUnit?.categories.find(c => c.id === selectedCategoryId);

  const handleSelectExamOption = (questionId: string, optionKey: 'A' | 'B' | 'C' | 'D') => {
    setExamAnswers(prev => ({
      ...prev,
      [questionId]: optionKey
    }));
    setRevealedRationales(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleToggleRationale = (questionId: string) => {
    setRevealedRationales(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleSelectSelfTestOption = (qId: string, optionIdx: number) => {
    setSelfTestAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const handleResetSelfTest = () => {
    setSelfTestAnswers({});
  };

  const handleCopySummary = () => {
    const text = currentTopic.summaryBullets.map((b, i) => `${i + 1}. ${b}`).join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  // =============================================================
  // SCREEN 1: SELECT BLOCK (Block 1)
  // =============================================================
  if (!selectedBlockId) {
    return (
      <div className="space-y-4 sm:space-y-5" id="screen-study-blocks">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
              id="back-btn-study-home"
              title="Back to Dashboard"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Study Curriculum
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Select an academic block to begin revision
              </p>
            </div>
          </div>
        </div>

        {/* Blocks List */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Academic Blocks
          </h2>

          <div className="space-y-2.5">
            {STUDY_CURRICULUM.map(block => (
              <button
                key={block.id}
                onClick={() => setSelectedBlockId(block.id)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500 hover:shadow-xs active:scale-[0.99] cursor-pointer shadow-2xs flex items-center justify-between gap-3.5 group min-h-[76px]"
                id={`study-block-btn-${block.id}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all bg-teal-50 text-teal-700 border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-950 transition-colors leading-snug">
                        {block.name}
                      </h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {block.code}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {block.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                  <ChevronRight
                    className="w-5 h-5 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =============================================================
  // SCREEN 2: SELECT UNIT (under Block 1)
  // Subtitle does NOT list topics
  // =============================================================
  if (!selectedUnitId) {
    return (
      <div className="space-y-4 sm:space-y-5 max-w-full overflow-hidden" id="screen-study-units">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSelectedBlockId(null)}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="back-btn-study-blocks"
              title="Back to Blocks"
              aria-label="Back to block selection"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                {currentBlock?.name || 'Block 1'} Units
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">
                Select a clinical unit from {currentBlock?.name}
              </p>
            </div>
          </div>
        </div>

        {/* Units List */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Available Clinical Units
          </h2>

          <div className="space-y-2.5">
            {currentBlock?.units.map(unit => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500 hover:shadow-xs active:scale-[0.99] cursor-pointer shadow-2xs flex items-center justify-between gap-3.5 group min-h-[76px]"
                id={`study-unit-btn-${unit.id}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all bg-teal-50 text-teal-700 border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white">
                    <Pill className="w-6 h-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-950 transition-colors leading-snug">
                        {unit.name}
                      </h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {unit.code}
                      </span>
                    </div>
                    {/* Clean subtitle: does NOT list topics */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {unit.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                  <ChevronRight
                    className="w-5 h-5 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =============================================================
  // SCREEN 3: SELECT CATEGORY UNDER UNIT (Pharmacology 1 -> Antibiotics)
  // =============================================================
  if (!selectedCategoryId) {
    return (
      <div className="space-y-4 sm:space-y-5 max-w-full overflow-hidden" id="screen-study-categories">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSelectedUnitId(null)}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="back-btn-study-unit"
              title="Back to Units"
              aria-label="Back to unit selection"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                {currentUnit?.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">
                {currentBlock?.name} · {currentUnit?.code} · Select a subject category
              </p>
            </div>
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Subject Areas & Topics
          </h2>

          <div className="space-y-2.5">
            {currentUnit?.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500 hover:shadow-xs active:scale-[0.99] cursor-pointer shadow-2xs flex items-center justify-between gap-3.5 group min-h-[72px]"
                id={`study-category-btn-${cat.id}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all bg-teal-50 text-teal-700 border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-950 transition-colors leading-snug">
                        {cat.name}
                      </h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                        {cat.topics.length} Guide{cat.topics.length === 1 ? '' : 's'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                  <ChevronRight
                    className="w-5 h-5 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =============================================================
  // SCREEN 4: SELECT TOPIC UNDER CATEGORY (Antibiotics)
  // Shows 1. Foundations and 2. Combinations: Synergism & Beta-lactamase
  // =============================================================
  if (!selectedTopicId) {
    return (
      <div className="space-y-4 sm:space-y-5 max-w-full overflow-hidden" id="screen-study-topics">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSelectedCategoryId(null)}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
              id="back-btn-study-category"
              title="Back to Categories"
              aria-label="Back to category selection"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                {currentCategory?.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">
                {currentUnit?.name} ({currentUnit?.code}) · Select a study guide
              </p>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Available Guides & Topics
          </h2>

          <div className="space-y-2.5">
            {currentCategory?.topics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-500 hover:shadow-xs active:scale-[0.99] cursor-pointer shadow-2xs flex items-center justify-between gap-3.5 group min-h-[76px]"
                id={`study-topic-btn-${topic.id}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all bg-teal-50 text-teal-700 border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white">
                    <Layers className="w-6 h-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-950 transition-colors leading-snug">
                        {topic.title}
                      </h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                        {topic.readTime}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {topic.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                  <ChevronRight
                    className="w-5 h-5 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =============================================================
  // SCREEN 5: TOPIC STUDY GUIDE READER
  // - Multi-line wrapping filter section (all section tags visible, zero horizontal scrolling)
  // - Enhanced font sizes for effortless legibility on mobile & desktop
  // - 100% complete content preservation across all parts A to G
  // =============================================================
  return (
    <div className="space-y-4 sm:space-y-5 max-w-full overflow-hidden" id="study-topic-reader">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setSelectedTopicId(null)}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
            id="back-btn-topic-reader"
            title="Back to Topics"
            aria-label="Back to topic selection"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-slate-900 truncate">
              {currentTopic.shortTitle}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">
              Block 1 · Pharmacology 1 · Antibiotics
            </p>
          </div>
        </div>

        <button
          onClick={handleCopySummary}
          className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl min-h-[38px] flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors"
          title="Copy Key Summary Points"
        >
          {copiedLink ? <Check className="w-4 h-4 text-teal-600" /> : <Share2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share Notes'}</span>
        </button>
      </div>

      {/* Guide Overview Banner */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3">
        <div>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
            {currentTopic.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-1">
            {currentTopic.subtitle}
          </p>
        </div>

        {/* Why this matters callout */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold block mb-1">Why this section matters for Block 1:</strong>
          <span className="text-slate-700">{currentTopic.whyThisMatters}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 pt-0.5">
          <span className="font-bold text-slate-700">Lecture slides covered:</span> {currentTopic.lectureSlidesCovered}
        </p>
      </div>

      {/* Filter Section: Multi-line wrapping view ensuring ALL section tags/buttons are visible */}
      <div className="space-y-1.5" id="study-section-filters">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
            Guide Sections
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Tap to jump to section
          </span>
        </div>

        {/* Wrapping pills layout: all tags are completely visible at once with ZERO horizontal scroll */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 bg-slate-100/70 border border-slate-200/80 rounded-2xl">
          {[
            { id: 'all', label: 'All Content' },
            { id: 'theory', label: 'Part A: Theory' },
            { id: 'focus', label: 'Part B: Exam Focus' },
            { id: 'exam_pairs', label: 'Part C & D: Past Papers' },
            { id: 'master_table', label: (isSection2 || isSection3 || isSection4 || isSection5 || isSection6 || isSection7) ? 'Part E: Strategy & Rules' : 'Part E: Strategy & Table' },
            { id: 'self_test', label: 'Part F: Self-Test' },
            { id: 'summary', label: 'Part G: Summary' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as StudyActiveTab)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[38px] ${
                activeSubTab === tab.id
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 shadow-2xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Study Guide Content */}
      {isSection7 ? (
        <Topic7LincosamidesView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : isSection6 ? (
        <Topic6MacrolidesView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : isSection5 ? (
        <Topic5CarbapenemsView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : isSection4 ? (
        <Topic4CephalosporinsView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : isSection3 ? (
        <Topic3PenicillinsView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : isSection2 ? (
        <Topic2CombinationsView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      ) : (
        <Topic1FoundationsView
          activeSubTab={activeSubTab}
          examAnswers={examAnswers}
          revealedRationales={revealedRationales}
          selfTestAnswers={selfTestAnswers}
          onSelectExamOption={handleSelectExamOption}
          onToggleRationale={handleToggleRationale}
          onSelectSelfTestOption={handleSelectSelfTestOption}
          onResetSelfTest={handleResetSelfTest}
          onCopySummary={handleCopySummary}
          copiedLink={copiedLink}
        />
      )}

      {/* Bottom Practice Actions Footer */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-center sm:text-left">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Practice Pharmacology MCQs
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Past-paper questions and CATs available in the MCQ Bank.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setSelectedTopicId(null)}
            className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-2xs min-h-[42px]"
          >
            All Topics
          </button>
          {onNavigateToMcq && (
            <button
              onClick={() => onNavigateToMcq('krn-block1-sept2023-pharmacology-paper1')}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#132A5E] text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-2 min-h-[42px]"
            >
              <span>MCQ Bank</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
