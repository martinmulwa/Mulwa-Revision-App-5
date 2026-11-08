/**
 * Mulwa Clinical Exam Portal
 * Primary Application Shell & Navigation Layout
 *
 * Provides a responsive header with centered MULWA brand logo,
 * contextual back button to previous sections, and streamlined mobile
 * bottom navigation bar with ONLY icons (no text labels).
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 7.0.0
 */

import React from 'react';
import {
  Home,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { AppNavTab, CourseId, BlockId } from '../types';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface UnitCapabilities {
  hasMcq: boolean;
  hasSaq: boolean;
  hasPractice: boolean;
  hasStudy: boolean;
  hasMistakes: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  activeTab: AppNavTab;
  setActiveTab: (tab: AppNavTab) => void;
  hideBottomNav?: boolean;
  selectedCourse?: CourseId | null;
  selectedBlock?: BlockId | null;
  selectedUnit?: string | null;
  onSelectCourse?: (courseId: CourseId) => void;
  onGoHome?: () => void;
  canGoBack?: boolean;
  onNavBack?: () => void;
  breadcrumbs?: BreadcrumbItem[];
  unitCaps?: UnitCapabilities;
}

/**
 * Responsive layout container with persistent top navigation,
 * centered brand logo linking to Home, and icon-only mobile bottom navigation.
 */
export default function Layout({
  children,
  activeTab,
  setActiveTab,
  hideBottomNav = false,
  selectedCourse,
  onGoHome,
  canGoBack = false,
  onNavBack
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans antialiased text-slate-900 selection:bg-indigo-100 selection:text-indigo-950">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-13 sm:h-15 flex items-center justify-center">
          {/* Brand Heading / Logo - Strictly Centered */}
          <button 
            type="button"
            onClick={onGoHome || (() => setActiveTab('home'))}
            className="flex items-center justify-center select-none cursor-pointer group text-center min-h-[40px] px-3 transition-transform active:scale-95"
            id="app-logo-container"
            aria-label="Mulwa Medical Portal - Go to Main Homepage"
            title="Return to Main Homepage"
          >
            <span className="text-base sm:text-lg font-black text-[#0B1B3D] tracking-widest uppercase text-center group-hover:text-indigo-900 transition-colors">
              MULWA
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={`flex-1 max-w-4xl w-full mx-auto px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-4 overflow-x-hidden min-w-0 ${
        hideBottomNav ? 'pb-4 sm:pb-5' : 'pb-20 sm:pb-6'
      }`}>
        <div className={`bg-white border border-slate-200/90 p-3 sm:p-4.5 md:p-5 rounded-2xl shadow-xs w-full max-w-full overflow-hidden min-w-0 ${
          hideBottomNav ? 'min-h-0' : 'min-h-[400px]'
        }`}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full py-4 px-4 sm:px-6 transition-all text-center ${
        hideBottomNav ? '' : 'pb-18 md:pb-4'
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-center text-xs text-slate-400 font-medium">
          <span>MULWA · Clinical Examination Revision Portal</span>
        </div>
      </footer>

      {/* Mobile Bottom Tab Bar: Icon-only (No text labels) */}
      {!hideBottomNav && (
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/90 z-40 pb-safe shadow-lg"
          aria-label="Mobile Bottom Navigation"
        >
          <div className="grid grid-cols-2 items-center h-13 max-w-[240px] mx-auto px-4 gap-4">
            {/* 1. Home (Icon only) */}
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`flex items-center justify-center py-2 rounded-xl transition-all min-h-[40px] cursor-pointer active:scale-95 ${
                activeTab === 'home'
                  ? 'bg-indigo-50 text-indigo-950 font-bold border border-indigo-200/80 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
              title="Home"
              aria-label="Home"
              id="mobile-bottom-tab-home"
            >
              <Home className="w-5 h-5" strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            </button>

            {/* 2. Review Mistakes (Icon only) */}
            <button
              type="button"
              onClick={() => setActiveTab('review')}
              className={`flex items-center justify-center py-2 rounded-xl transition-all min-h-[40px] cursor-pointer active:scale-95 ${
                activeTab === 'review'
                  ? 'bg-rose-50 text-rose-950 font-bold border border-rose-200/80 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
              title="Review Mistakes"
              aria-label="Review Mistakes"
              id="mobile-bottom-tab-mistakes"
            >
              <AlertCircle className="w-5 h-5 text-rose-600" strokeWidth={activeTab === 'review' ? 2.5 : 2} />
            </button>
          </div>
        </nav>
      )}

    </div>
  );
}
