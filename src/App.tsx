/**
 * Mulwa Clinical Exam Portal
 * Root Application Controller & Practice Engine
 *
 * Coordinates navigation, revision module pacing, answer grading,
 * mistake logging with threshold-based resolution, and session persistence.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import Layout, { BreadcrumbItem } from './components/Layout';
import PastPapersLibrary from './components/PastPapersLibrary';
import RevisionSetSelection from './components/RevisionSetSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import ReviewIncorrectScreen from './components/ReviewIncorrectScreen';
import SAQLibrary from './components/SAQLibrary';
import SAQScreen from './components/SAQScreen';
import StudySection from './components/StudySection';
import CourseSelection from './components/CourseSelection';
import BlockSelection from './components/BlockSelection';
import UnitSelection from './components/UnitSelection';
import UnitHub, { getUnitCapabilities } from './components/UnitHub';
import EmptyCourseBlockView from './components/EmptyCourseBlockView';
import { SAQ_CATEGORIES, getCategoryById } from './data/saqData';

import {
  SessionProgress,
  InProgressSetState,
  AnswerState,
  QResult,
  IncorrectQuestionRecord,
  AppNavTab,
  CourseId,
  BlockId
} from './types';
import {
  loadProgress,
  saveProgress,
  debouncedSaveProgress,
  resetProgress,
  resetUnitProgress,
  clearUnitMistakes,
  makeSetKey,
  INITIAL_SESSION
} from './utils/storage';
import {
  getQuestionsForSet,
  PAST_PAPERS,
  findPaper,
  getRevisionSetsForPaper,
  isTnhPracticePaper
} from './data/questions';
import { getQuestionMarks, chunkQuestions } from './utils/chunking';
import { MISTAKE_THRESHOLD, RESOLVE_THRESHOLD } from './config/constants';
import {
  getScopedPaper,
  getScopedQuestionsForSet,
  getScopedSAQQuestions
} from './utils/scopedData';

export default function App() {
  // Course & Academic Stage Tracking (starts at null so homepage displays the list of courses by default)
  const [selectedCourse, setSelectedCourse] = useState<CourseId | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<BlockId | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  // Navigation Routing States
  const [activeTab, setActiveTab] = useState<AppNavTab>('home');
  const [view, setView] = useState<'tabs' | 'sets_selection' | 'active_exam' | 'results'>('tabs');

  // Active Context Identifiers
  const [selectedPaperId, setSelectedPaperId] = useState<string>(
    PAST_PAPERS[0]?.id || ''
  );
  const [selectedSetId, setSelectedSetId] = useState<string>('set1');

  // SAQ Practice Session States
  const [selectedSaqCategoryId, setSelectedSaqCategoryId] = useState<string>(
    SAQ_CATEGORIES[0]?.id || 'chest-drain'
  );
  const [selectedSaqUnit, setSelectedSaqUnit] = useState<string | null>(null);
  const [selectedPaperUnit, setSelectedPaperUnit] = useState<string | null>(null);
  const [tnhSelectedBank, setTnhSelectedBank] = useState<'mcq' | 'saq' | null>(null);
  const [saqQuestionIndexInCat, setSaqQuestionIndexInCat] = useState<number>(0);
  const [saqView, setSaqView] = useState<'library' | 'screen'>('library');

  // Navigation History Stack for Back & Forth Navigation
  interface NavSnapshot {
    selectedCourse: CourseId | null;
    selectedBlock: BlockId | null;
    selectedUnit: string | null;
    activeTab: AppNavTab;
    view: 'tabs' | 'sets_selection' | 'active_exam' | 'results';
    selectedPaperId: string;
    selectedSetId: string;
    selectedPaperUnit: string | null;
    selectedSaqUnit: string | null;
    selectedSaqCategoryId: string;
    tnhSelectedBank: 'mcq' | 'saq' | null;
    saqView: 'library' | 'screen';
    saqQuestionIndexInCat: number;
  }

  const [historyStack, setHistoryStack] = useState<NavSnapshot[]>([]);
  const [forwardStack, setForwardStack] = useState<NavSnapshot[]>([]);

  const captureSnapshot = (): NavSnapshot => ({
    selectedCourse,
    selectedBlock,
    selectedUnit,
    activeTab,
    view,
    selectedPaperId,
    selectedSetId,
    selectedPaperUnit,
    selectedSaqUnit,
    selectedSaqCategoryId,
    tnhSelectedBank,
    saqView,
    saqQuestionIndexInCat
  });

  const pushSnapshot = () => {
    const snap = captureSnapshot();
    setHistoryStack(prev => [...prev.slice(-25), snap]);
    setForwardStack([]);
  };

  const applySnapshot = (snap: NavSnapshot) => {
    setSelectedCourse(snap.selectedCourse);
    setSelectedBlock(snap.selectedBlock);
    setSelectedUnit(snap.selectedUnit);
    setActiveTab(snap.activeTab);
    setView(snap.view);
    setSelectedPaperId(snap.selectedPaperId);
    setSelectedSetId(snap.selectedSetId);
    setSelectedPaperUnit(snap.selectedPaperUnit);
    setSelectedSaqUnit(snap.selectedSaqUnit);
    setSelectedSaqCategoryId(snap.selectedSaqCategoryId);
    setTnhSelectedBank(snap.tnhSelectedBank);
    setSaqView(snap.saqView);
    setSaqQuestionIndexInCat(snap.saqQuestionIndexInCat);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleGoHome = () => {
    pushSnapshot();
    setSelectedCourse(null);
    setSelectedBlock(null);
    setSelectedUnit(null);
    setActiveTab('home');
    setView('tabs');
    setSaqView('library');
    setTnhSelectedBank(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavBack = () => {
    if (historyStack.length > 0) {
      const prev = historyStack[historyStack.length - 1];
      setHistoryStack(old => old.slice(0, old.length - 1));
      setForwardStack(old => [...old, captureSnapshot()]);
      applySnapshot(prev);
      return;
    }

    // Fallback structural step-back if history is empty
    if (view === 'active_exam' || view === 'results') {
      setView('sets_selection');
    } else if (view === 'sets_selection') {
      setView('tabs');
    } else if (saqView === 'screen') {
      setSaqView('library');
    } else if (activeTab === 'tnh_practice' && tnhSelectedBank !== null) {
      setTnhSelectedBank(null);
    } else if (activeTab !== 'home') {
      setActiveTab('home');
      setView('tabs');
    } else if (selectedUnit !== null) {
      if (selectedCourse === 'HCA') {
        setSelectedUnit(null);
        setSelectedBlock(null);
      } else {
        setSelectedUnit(null);
      }
    } else if (selectedBlock !== null) {
      setSelectedBlock(null);
    } else if (selectedCourse !== null) {
      setSelectedCourse(null);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavForward = () => {
    if (forwardStack.length === 0) return;
    const next = forwardStack[forwardStack.length - 1];
    setForwardStack(old => old.slice(0, old.length - 1));
    setHistoryStack(old => [...old, captureSnapshot()]);
    applySnapshot(next);
  };

  const canGoBack =
    historyStack.length > 0 ||
    selectedCourse !== null ||
    selectedBlock !== null ||
    selectedUnit !== null ||
    activeTab !== 'home' ||
    view !== 'tabs' ||
    saqView === 'screen';

  const canGoForward = forwardStack.length > 0;

  const handleSelectCourse = (courseId: CourseId) => {
    pushSnapshot();
    setSelectedCourse(courseId);
    setSelectedBlock(null);
    setSelectedUnit(null);
    setActiveTab('home');
    setView('tabs');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectBlock = (blockId: BlockId) => {
    if (selectedCourse === 'KRN' && blockId !== 'block1' && blockId !== 'finals') return;
    if (selectedCourse === 'HCA' && blockId !== 'finals') return;
    pushSnapshot();
    setSelectedBlock(blockId);
    if (selectedCourse === 'HCA' && blockId === 'finals') {
      setSelectedUnit('HCA');
    } else if (selectedCourse === 'KRN' && blockId === 'finals') {
      setSelectedUnit('College Final Exams');
    } else {
      setSelectedUnit(null);
    }
    setActiveTab('home');
    setView('tabs');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectUnit = (unit: string) => {
    pushSnapshot();
    setSelectedUnit(unit);
    setActiveTab('home');
    setView('tabs');
    setSaqView('library');
    setTnhSelectedBank(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleNavigateUnitSection = (tab: AppNavTab) => {
    pushSnapshot();
    setActiveTab(tab);
    setView('tabs');
    setSaqView('library');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleChangeCourse = () => {
    pushSnapshot();
    setSelectedCourse(null);
    setSelectedBlock(null);
    setSelectedUnit(null);
    setActiveTab('home');
    setView('tabs');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleChangeBlock = () => {
    pushSnapshot();
    setSelectedBlock(null);
    setSelectedUnit(null);
    setActiveTab('home');
    setView('tabs');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Determine contextual back button label
  const getBackLabel = (): string | null => {
    if (view === 'active_exam' || view === 'results') return 'Sets';
    if (view === 'sets_selection') return selectedUnit ? `${selectedUnit} Papers` : 'Papers';
    if (saqView === 'screen') return 'SAQs';
    if (activeTab !== 'home') {
      return selectedUnit ? selectedUnit : 'Hub';
    }
    if (selectedUnit !== null) {
      if (selectedBlock === 'finals') return selectedCourse === 'HCA' ? 'College Final Exams' : 'Finals & Licensure';
      return selectedCourse === 'HCA' ? 'College Final Exams' : 'Block 1';
    }
    if (selectedBlock !== null) {
      return selectedCourse || 'Courses';
    }
    if (selectedCourse !== null) return 'Courses';
    return null;
  };

  // Determine contextual forward button label
  const getNextLabel = (): string | null => {
    if (forwardStack.length === 0) return null;
    const nextSnap = forwardStack[forwardStack.length - 1];
    if (nextSnap.view === 'active_exam') return 'Exam';
    if (nextSnap.view === 'results') return 'Results';
    if (nextSnap.view === 'sets_selection') return 'Sets';
    if (nextSnap.saqView === 'screen') return 'SAQ Questions';
    if (nextSnap.activeTab !== activeTab && nextSnap.activeTab !== 'home') {
      if (nextSnap.activeTab === 'papers') return 'MCQs';
      if (nextSnap.activeTab === 'saqs') return 'SAQs';
      if (nextSnap.activeTab === 'tnh_practice') return 'Practice';
      if (nextSnap.activeTab === 'study') return 'Study';
      if (nextSnap.activeTab === 'review') return 'Mistakes';
    }
    if (nextSnap.selectedUnit && !selectedUnit) return nextSnap.selectedUnit;
    if (nextSnap.selectedBlock && !selectedBlock) return nextSnap.selectedBlock === 'block1' ? 'Block 1' : 'College Final Exams';
    if (nextSnap.selectedCourse && !selectedCourse) return nextSnap.selectedCourse;
    return 'Forward';
  };

  // Determine desktop breadcrumb navigation path
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const crumbs: BreadcrumbItem[] = [];

    // Course level
    if (selectedCourse) {
      crumbs.push({
        label: selectedCourse,
        onClick: () => {
          pushSnapshot();
          setSelectedBlock(null);
          setSelectedUnit(null);
          setActiveTab('home');
          setView('tabs');
        },
        active: !selectedBlock
      });
    } else {
      crumbs.push({ label: 'Courses', active: true });
      return crumbs;
    }

    // Block level
    if (selectedBlock) {
      const isDirectFinals = selectedBlock === 'finals';
      const blockTitle = selectedBlock === 'block1' ? 'Block 1' : selectedBlock === 'block2' ? 'Block 2' : 'College Final Exams';
      crumbs.push({
        label: blockTitle,
        onClick: () => {
          pushSnapshot();
          if (isDirectFinals) {
            setSelectedUnit(null);
            setSelectedBlock(null);
          } else {
            setSelectedUnit(null);
          }
          setActiveTab('home');
          setView('tabs');
        },
        active: isDirectFinals ? activeTab === 'home' && view === 'tabs' : !selectedUnit
      });
    } else {
      crumbs.push({ label: selectedCourse === 'HCA' ? 'Exams' : 'Blocks', active: true });
      return crumbs;
    }

    // Unit level (only for non-HCA because HCA jumps straight to UnitHub)
    if (selectedUnit && selectedCourse !== 'HCA') {
      crumbs.push({
        label: selectedUnit,
        onClick: () => {
          pushSnapshot();
          setActiveTab('home');
          setView('tabs');
          setSaqView('library');
        },
        active: activeTab === 'home' && view === 'tabs'
      });
    }

    // Section level (MCQs, SAQs, Practice, Study, Mistakes, Exam)
    if (view === 'active_exam') {
      crumbs.push({ label: 'Exam', active: true });
    } else if (view === 'results') {
      crumbs.push({ label: 'Results', active: true });
    } else if (view === 'sets_selection') {
      crumbs.push({ label: 'Sets', active: true });
    } else if (activeTab === 'papers') {
      crumbs.push({ label: 'MCQs', active: true });
    } else if (activeTab === 'saqs') {
      crumbs.push({ label: saqView === 'screen' ? 'SAQ Practice' : 'SAQs', active: true });
    } else if (activeTab === 'tnh_practice') {
      crumbs.push({ label: 'Practice', active: true });
    } else if (activeTab === 'study') {
      crumbs.push({ label: 'Study', active: true });
    } else if (activeTab === 'review') {
      crumbs.push({ label: 'Mistakes', active: true });
    }

    return crumbs;
  };

  // Active Examination Session States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [activeAnswers, setActiveAnswers] = useState<Record<string, AnswerState>>({});
  const [examStartTime, setExamStartTime] = useState<number>(0);
  const [examDurationSeconds, setExamDurationSeconds] = useState<number>(0);
  const [latestEarnedMarks, setLatestEarnedMarks] = useState<number>(0);
  const [latestMaxMarks, setLatestMaxMarks] = useState<number>(0);

  // Session Progress (Browser sessionStorage)
  const [progress, setProgress] = useState<SessionProgress>(INITIAL_SESSION);

  // Mount hook: load saved session progress
  useEffect(() => {
    const loaded = loadProgress();
    setProgress(loaded);
  }, []);

  const handleTabNavigation = (tab: AppNavTab) => {
    if (tab !== activeTab || view !== 'tabs') {
      pushSnapshot();
    }
    // When switching tabs or re-tapping active tab, reset scoped unit to root view
    if (tab === 'papers' || tab === 'tnh_practice') {
      setSelectedPaperUnit(null);
      setTnhSelectedBank('mcq');
    }
    if (tab === 'saqs') {
      setSaqView('library');
      if (tab !== activeTab || view !== 'tabs') {
        setSelectedSaqUnit(null);
      }
    }
    setSaqView('library');
    setActiveTab(tab);
    setView('tabs');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectSAQCategory = (categoryId: string) => {
    pushSnapshot();
    setSelectedSaqCategoryId(categoryId);
    setSaqQuestionIndexInCat(0);
    setSaqView('screen');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleExitSAQCategory = () => {
    pushSnapshot();
    setSaqView('library');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleToggleMasteredSAQ = (id: string) => {
    setProgress(prev => {
      const current = prev.masteredSAQs || [];
      const updatedMastered = current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id];
      const updated = {
        ...prev,
        masteredSAQs: updatedMastered
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleToggleBookmarkSAQ = (id: string) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarkedQuestions.includes(id);
      const updatedBookmarks = isBookmarked
        ? prev.bookmarkedQuestions.filter(qid => qid !== id)
        : [...prev.bookmarkedQuestions, id];
      const updated = {
        ...prev,
        bookmarkedQuestions: updatedBookmarks
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleSelectPaper = (paperId: string) => {
    pushSnapshot();
    const resolvedPaper = findPaper(paperId);
    if (resolvedPaper) {
      const sets = getRevisionSetsForPaper(resolvedPaper.id);
      if (sets.length === 1) {
        handleSelectSet(resolvedPaper.id, sets[0].id);
        return;
      }
    }
    setSelectedPaperId(paperId);
    setView('sets_selection');
  };

  const handleSelectSet = (paperId: string, setId: string) => {
    pushSnapshot();
    const resolvedPaper = findPaper(paperId);
    const resolvedPaperId = resolvedPaper ? resolvedPaper.id : paperId;

    setSelectedPaperId(resolvedPaperId);
    setSelectedSetId(setId);

    const combinedSetId = makeSetKey(resolvedPaperId, setId);
    const savedState = progress.inProgressSets[combinedSetId];

    if (savedState) {
      setCurrentQuestionIndex(savedState.currentQuestionIndex || 0);
      setActiveAnswers(savedState.answers || {});
    } else {
      setCurrentQuestionIndex(0);
      setActiveAnswers({});

      const initialProgress: InProgressSetState = {
        currentQuestionIndex: 0,
        answers: {},
        timestamp: new Date().toISOString()
      };

      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: initialProgress
          }
        };
        saveProgress(updated);
        return updated;
      });
    }

    setExamStartTime(Date.now());
    setView('active_exam');
  };

  /**
   * Updates answer state (typing, selections, pre-ticks) with debounced persistence.
   */
  const handleUpdateAnswerState = (qId: string, newState: AnswerState) => {
    const newAnswers = { ...activeAnswers, [qId]: newState };
    setActiveAnswers(newAnswers);

    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
    setProgress(prev => {
      const updated = {
        ...prev,
        inProgressSets: {
          ...prev.inProgressSets,
          [combinedSetId]: {
            currentQuestionIndex,
            answers: newAnswers,
            timestamp: new Date().toISOString()
          }
        }
      };
      debouncedSaveProgress(updated);
      return updated;
    });
  };

  /**
   * Evaluates scored result and synchronizes mistake queue.
   */
  const handleSubmitResult = (qId: string, result: QResult) => {
    const ratio = result.max > 0 ? result.earned / result.max : 0;
    const questions = getScopedQuestionsForSet(selectedPaperId, selectedSetId);
    const q = questions.find(item => item.id === qId);
    const qType = q?.type || 'mcq';

    setProgress(prev => {
      let updatedIncorrect = [...prev.incorrectQuestions];

      if (ratio < MISTAKE_THRESHOLD) {
        // Below mistake threshold -> Log to mistake queue
        const existingIdx = updatedIncorrect.findIndex(r => r.questionId === qId);
        const record: IncorrectQuestionRecord = {
          id: existingIdx >= 0 ? updatedIncorrect[existingIdx].id : `mistake_${Date.now()}_${qId}`,
          questionId: qId,
          paperId: selectedPaperId,
          setId: selectedSetId,
          type: qType,
          earned: result.earned,
          max: result.max,
          summary: `${Math.round(ratio * 100)}% on attempt`,
          timestamp: new Date().toISOString()
        };

        if (existingIdx >= 0) {
          updatedIncorrect[existingIdx] = record;
        } else {
          updatedIncorrect.push(record);
        }
      } else if (ratio >= RESOLVE_THRESHOLD) {
        // Above resolution threshold -> Remove from mistake queue
        updatedIncorrect = updatedIncorrect.filter(r => r.questionId !== qId);
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      const updated = {
        ...prev,
        inProgressSets: {
          ...prev.inProgressSets,
          [combinedSetId]: {
            currentQuestionIndex,
            answers: { ...activeAnswers, [qId]: { ...activeAnswers[qId], result, revealed: true, confirmed: true } },
            timestamp: new Date().toISOString()
          }
        },
        incorrectQuestions: updatedIncorrect
      };

      saveProgress(updated);
      return updated;
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIdx);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const currentSaved = prev.inProgressSets[combinedSetId];
        if (!currentSaved) return prev;
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              ...currentSaved,
              currentQuestionIndex: prevIdx,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    }
  };

  const handleNextQuestion = () => {
    const questions = getScopedQuestionsForSet(selectedPaperId, selectedSetId);

    if (currentQuestionIndex + 1 < questions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              currentQuestionIndex: nextIndex,
              answers: activeAnswers,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    } else {
      // Finalize set score
      let totalEarned = 0;
      let totalMax = 0;

      questions.forEach(q => {
        const ans = activeAnswers[q.id];
        const qMax = getQuestionMarks(q);
        totalMax += qMax;

        if (ans && ans.result) {
          totalEarned += ans.result.earned;
        } else if (ans && ans.selectedOption === q.correctAnswer) {
          totalEarned += qMax;
        }
      });

      const elapsedSeconds = Math.max(1, Math.round((Date.now() - examStartTime) / 1000));
      setLatestEarnedMarks(totalEarned);
      setLatestMaxMarks(totalMax);
      setExamDurationSeconds(elapsedSeconds);

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

      setProgress(prev => {
        const updatedInProgress = { ...prev.inProgressSets };
        delete updatedInProgress[combinedSetId];

        const updated = {
          ...prev,
          completedSets: {
            ...prev.completedSets,
            [combinedSetId]: {
              score: Math.round(totalEarned * 100) / 100,
              maxScore: Math.round(totalMax * 100) / 100,
              date: new Date().toISOString()
            }
          },
          inProgressSets: updatedInProgress
        };

        saveProgress(updated);
        return updated;
      });

      setView('results');
    }
  };

  const handleToggleBookmark = (questionId: string) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarkedQuestions.includes(questionId);
      const updatedBookmarks = isBookmarked
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId];

      const updated = {
        ...prev,
        bookmarkedQuestions: updatedBookmarks
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleRemoveMistakeRecord = (recordId: string) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        incorrectQuestions: prev.incorrectQuestions.filter(r => r.id !== recordId)
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleClearProgress = () => {
    const cleanSession = resetProgress();
    setProgress(cleanSession);
  };

  const handleResetUnitProgress = (unitName: string) => {
    const updated = resetUnitProgress(progress, unitName);
    setProgress(updated);
  };

  const handleClearUnitMistakes = (unitName: string) => {
    const updated = clearUnitMistakes(progress, unitName);
    setProgress(updated);
  };

  const handleRetrySet = () => {
    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

    setProgress(prev => {
      const updatedCompleted = { ...prev.completedSets };
      delete updatedCompleted[combinedSetId];

      const updatedInProgress = { ...prev.inProgressSets };
      delete updatedInProgress[combinedSetId];

      const updated = {
        ...prev,
        completedSets: updatedCompleted,
        inProgressSets: updatedInProgress
      };
      saveProgress(updated);
      return updated;
    });

    handleSelectSet(selectedPaperId, selectedSetId);
  };

  const handleNextSet = () => {
    const currentPaper = findPaper(selectedPaperId);
    if (!currentPaper) {
      setActiveTab('papers');
      setView('tabs');
      return;
    }

    const allSets = chunkQuestions(currentPaper);
    const currentIdx = allSets.findIndex(s => s.id === selectedSetId);

    if (currentIdx >= 0 && currentIdx + 1 < allSets.length) {
      const nextSet = allSets[currentIdx + 1];
      handleSelectSet(selectedPaperId, nextSet.id);
    } else {
      if (isTnhPracticePaper(currentPaper)) {
        setActiveTab('tnh_practice');
      } else {
        setActiveTab('papers');
      }
      setView('tabs');
    }
  };

  const currentQuestions = getScopedQuestionsForSet(selectedPaperId, selectedSetId);
  const activeQuestion = currentQuestions[currentQuestionIndex];
  const isCurrentBookmarked = activeQuestion
    ? progress.bookmarkedQuestions.includes(activeQuestion.id)
    : false;
  const rawCurrentPaper = findPaper(selectedPaperId);
  const currentPaper = getScopedPaper(rawCurrentPaper);
  const currentSets = currentPaper ? chunkQuestions(currentPaper) : [];
  const currentSet = currentSets.find(s => s.id === selectedSetId) || {
    id: selectedSetId,
    setNumber: 1,
    name: 'Set 1',
    section: 'A',
    questionsRange: `Questions 1 – ${currentQuestions.length}`,
    startNum: 1,
    endNum: currentQuestions.length,
    questions: currentQuestions,
    totalMarks: latestMaxMarks
  };
  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={handleTabNavigation}
      selectedCourse={selectedCourse}
      selectedBlock={selectedBlock}
      selectedUnit={selectedUnit}
      onSelectCourse={handleSelectCourse}
      onGoHome={handleGoHome}
      canGoBack={canGoBack}
      onNavBack={handleNavBack}
      breadcrumbs={getBreadcrumbs()}
      unitCaps={selectedUnit ? getUnitCapabilities(selectedUnit) : undefined}
      hideBottomNav={
        !selectedCourse ||
        !selectedBlock ||
        !(
          (selectedCourse === 'KRN' && (selectedBlock === 'block1' || selectedBlock === 'finals')) ||
          (selectedCourse === 'HCA' && selectedBlock === 'finals')
        ) ||
        !selectedUnit ||
        view === 'active_exam' ||
        (activeTab === 'saqs' && saqView === 'screen')
      }
    >
      {/* 1. Root Homepage Level: No Course Selected -> Display Course Selection list */}
      {!selectedCourse && (
        <CourseSelection
          selectedCourse={null}
          onSelectCourse={handleSelectCourse}
        />
      )}

      {/* 2. Course Selected but No Block Selected -> Display Block Selection */}
      {selectedCourse && !selectedBlock && (
        <BlockSelection
          courseId={selectedCourse}
          selectedBlock={null}
          onSelectBlock={handleSelectBlock}
          onChangeCourse={handleChangeCourse}
          onBack={handleChangeCourse}
        />
      )}

      {/* 3. In-Preparation Blocks (KRN Block 2 or HCA Stage 1/2) */}
      {selectedCourse && selectedBlock && (
        (selectedCourse === 'KRN' && selectedBlock !== 'block1' && selectedBlock !== 'finals') ||
        (selectedCourse === 'HCA' && selectedBlock !== 'finals')
      ) && (
        <EmptyCourseBlockView
          courseId={selectedCourse}
          blockId={selectedBlock}
          onSelectKrnBlock1={() => {
            if (selectedCourse === 'HCA') {
              setSelectedBlock('finals');
            } else {
              setSelectedBlock('block1');
            }
          }}
          onChangeCourse={handleChangeCourse}
          onChangeBlock={handleChangeBlock}
        />
      )}

      {/* 4. Active Course/Block Views (KRN Block 1/Finals or HCA Finals) */}
      {selectedCourse && selectedBlock && (
        (selectedCourse === 'KRN' && (selectedBlock === 'block1' || selectedBlock === 'finals')) ||
        (selectedCourse === 'HCA' && selectedBlock === 'finals')
      ) && (
        <>
          {/* Level 3: Unit Selection (if no unit selected) */}
          {!selectedUnit ? (
            <UnitSelection
              courseId={selectedCourse}
              blockId={selectedBlock}
              onSelectUnit={handleSelectUnit}
              onBack={handleChangeBlock}
            />
          ) : (
            /* Level 4: Selected Unit content */
            <>
              {/* Tabbed Views */}
              {view === 'tabs' && (
                <>
                  {activeTab === 'home' && (
                    <UnitHub
                      unitName={selectedUnit}
                      onNavigateSection={handleNavigateUnitSection}
                      progress={progress}
                      onResetUnitProgress={handleResetUnitProgress}
                      onBack={() => {
                        pushSnapshot();
                        if (selectedCourse === 'HCA' || (selectedCourse === 'KRN' && selectedBlock === 'finals')) {
                          setSelectedUnit(null);
                          setSelectedBlock(null);
                        } else {
                          setSelectedUnit(null);
                        }
                      }}
                    />
                  )}

                  {activeTab === 'study' && (
                    <StudySection
                      onBackToHome={() => handleTabNavigation('home')}
                      initialBlockId="block-1"
                      initialUnitId={selectedUnit === 'Pharmacology 1' ? 'pharmacology-1' : null}
                      onNavigateToMcq={(paperId) => {
                        handleSelectPaper(paperId);
                      }}
                    />
                  )}

                  {activeTab === 'papers' && (
                    <PastPapersLibrary
                      progress={progress}
                      onSelectPaper={handleSelectPaper}
                      onBack={() => handleTabNavigation('home')}
                      activeSection="past_papers"
                      onSectionChange={(section) => {
                        setActiveTab(section === 'tnh_practice' ? 'tnh_practice' : 'papers');
                      }}
                      selectedUnit={selectedUnit}
                      onSelectUnit={(unit) => {
                        if (!unit) {
                          handleTabNavigation('home');
                        } else {
                          handleSelectUnit(unit);
                        }
                      }}
                    />
                  )}

                  {activeTab === 'tnh_practice' && (
                    saqView === 'screen' ? (
                      (() => {
                        const currentCategory = getCategoryById(selectedSaqCategoryId) || SAQ_CATEGORIES[0];
                        const rawCategoryQuestions = currentCategory ? currentCategory.questions : [];
                        const categoryQuestions = getScopedSAQQuestions(rawCategoryQuestions);
                        return (
                          <SAQScreen
                            categoryTitle={currentCategory ? currentCategory.title : 'TNH Practice SAQs'}
                            frequencyBadge={currentCategory ? currentCategory.frequencyBadge : undefined}
                            questions={categoryQuestions}
                            currentQuestionIndex={saqQuestionIndexInCat}
                            masteredIds={progress.masteredSAQs || []}
                            bookmarkedIds={progress.bookmarkedQuestions}
                            onSelectIndex={setSaqQuestionIndexInCat}
                            onToggleMastered={handleToggleMasteredSAQ}
                            onToggleBookmark={handleToggleBookmarkSAQ}
                            onExit={handleExitSAQCategory}
                          />
                        );
                      })()
                    ) : (
                      <PastPapersLibrary
                        progress={progress}
                        onSelectPaper={handleSelectPaper}
                        onBack={() => handleTabNavigation('home')}
                        activeSection="tnh_practice"
                        onSectionChange={(section) => {
                          setActiveTab(section === 'tnh_practice' ? 'tnh_practice' : 'papers');
                        }}
                        selectedUnit={selectedUnit}
                        onSelectUnit={(unit) => {
                          if (!unit) {
                            handleTabNavigation('home');
                          } else {
                            handleSelectUnit(unit);
                          }
                        }}
                        onSelectSAQCategory={handleSelectSAQCategory}
                        selectedBank={tnhSelectedBank}
                        onSelectBank={setTnhSelectedBank}
                      />
                    )
                  )}

                  {activeTab === 'saqs' && (
                    <>
                      {saqView === 'library' ? (
                        <SAQLibrary
                          masteredIds={progress.masteredSAQs || []}
                          selectedUnit={selectedUnit}
                          onSelectUnit={(unit) => {
                            if (!unit) {
                              handleTabNavigation('home');
                            } else {
                              handleSelectUnit(unit);
                            }
                          }}
                          onSelectCategory={handleSelectSAQCategory}
                          onBackToHome={() => handleTabNavigation('home')}
                        />
                      ) : (
                        (() => {
                          const currentCategory = getCategoryById(selectedSaqCategoryId) || SAQ_CATEGORIES[0];
                          const rawCategoryQuestions = currentCategory ? currentCategory.questions : [];
                          const categoryQuestions = getScopedSAQQuestions(rawCategoryQuestions);
                          return (
                            <SAQScreen
                              categoryTitle={currentCategory ? currentCategory.title : 'SAQ Practice'}
                              frequencyBadge={currentCategory ? currentCategory.frequencyBadge : undefined}
                              questions={categoryQuestions}
                              currentQuestionIndex={saqQuestionIndexInCat}
                              masteredIds={progress.masteredSAQs || []}
                              bookmarkedIds={progress.bookmarkedQuestions}
                              onSelectIndex={setSaqQuestionIndexInCat}
                              onToggleMastered={handleToggleMasteredSAQ}
                              onToggleBookmark={handleToggleBookmarkSAQ}
                              onExit={handleExitSAQCategory}
                            />
                          );
                        })()
                      )}
                    </>
                  )}

                  {activeTab === 'review' && (
                    <ReviewIncorrectScreen
                      progress={progress}
                      selectedUnit={selectedUnit}
                      onBack={() => handleTabNavigation('home')}
                      onRemoveRecord={handleRemoveMistakeRecord}
                      onClearUnitMistakes={handleClearUnitMistakes}
                    />
                  )}
                </>
              )}

              {/* Revision Set Selection View */}
              {view === 'sets_selection' && (
                <RevisionSetSelection
                  paperId={selectedPaperId}
                  progress={progress}
                  onSelectSet={handleSelectSet}
                  onBack={() => {
                    const paper = findPaper(selectedPaperId);
                    if (paper && isTnhPracticePaper(paper)) {
                      setActiveTab('tnh_practice');
                    } else {
                      setActiveTab('papers');
                    }
                    setView('tabs');
                  }}
                />
              )}

              {/* Active Examination View */}
              {view === 'active_exam' && (
                <QuestionScreen
                  paperId={selectedPaperId}
                  setId={selectedSetId}
                  questions={currentQuestions}
                  currentQuestionIndex={currentQuestionIndex}
                  answers={activeAnswers}
                  isBookmarked={isCurrentBookmarked}
                  onUpdateAnswerState={handleUpdateAnswerState}
                  onSubmitResult={handleSubmitResult}
                  onPrevQuestion={handlePrevQuestion}
                  onNextQuestion={handleNextQuestion}
                  onToggleBookmark={() => activeQuestion && handleToggleBookmark(activeQuestion.id)}
                  onExit={() => {
                    const paper = findPaper(selectedPaperId);
                    const sets = paper ? getRevisionSetsForPaper(paper.id) : [];
                    if (sets.length <= 1) {
                      if (paper && isTnhPracticePaper(paper)) {
                        setActiveTab('tnh_practice');
                      } else {
                        setActiveTab('papers');
                      }
                      setView('tabs');
                    } else {
                      setView('sets_selection');
                    }
                  }}
                />
              )}

              {/* Results View */}
              {view === 'results' && currentPaper && (
                <ResultsScreen
                  score={latestEarnedMarks}
                  maxScore={latestMaxMarks}
                  timeTakenSeconds={examDurationSeconds}
                  paper={currentPaper}
                  set={currentSet}
                  answers={activeAnswers}
                  onReviewIncorrect={() => {
                    setActiveTab('review');
                    setView('tabs');
                  }}
                  onRetry={handleRetrySet}
                  onNextSet={handleNextSet}
                  onGoToHome={() => {
                    setActiveTab('home');
                    setView('tabs');
                  }}
                />
              )}
            </>
          )}
        </>
      )}
    </Layout>
  );
}
