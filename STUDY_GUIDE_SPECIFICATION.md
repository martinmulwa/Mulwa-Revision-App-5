# Mulwa Clinical Exam Portal — Study Section Specification & Engineering Guide

**Author:** MULWA (<martinmulwa95@gmail.com>)  
**Version:** 1.0.0  
**Status:** Canonical Reference

---

## 1. Overview & Purpose

The **Study Section** is a dedicated curriculum revision engine within the Mulwa Clinical Exam Portal. It converts lecture slides, syllabus guidelines, and past council/board examination patterns into high-yield, structured study guides.

To maintain visual perfection, distraction-free ergonomics, and seamless usability across all devices (especially mobile viewports from 320px to 430px wide), all current and future Study modules must adhere strictly to the engineering rules detailed in this specification.

---

## 2. Strict 5-Tier Navigation Hierarchy

All study modules must integrate into the portal's uniform 5-tier navigation flow:

```text
Homescreen Dashboard
 └── Tier 1: "Study" Button
      └── Tier 2: Academic Block Selection (Block 1 vs Block 2)
           └── Tier 3: Clinical Unit Selection (e.g. Pharmacology 1 [MSN 103])
                └── Tier 4: Subject Category Selection (e.g. Antibiotics)
                     └── Tier 5: Topic Selection (e.g. 1. Foundations: Classification of Antibiotics)
                          └── Tier 6: Study Guide Reader Workspace
```

### Hierarchy Rules:
1. **Homescreen Dashboard Tile:**
   - Always titled **Study** with subtitle **Curriculum & Lecture Notes**.
   - Standard tile dimensions: `min-h-[64px]`, padding `p-3.5 sm:p-4`, border `border-slate-200/90`, rounded `rounded-2xl`, icon container `w-10 h-10 rounded-xl bg-teal-100/80`.
   - Never place noisy badges, multiple buttons, or sprawling descriptions on the dashboard tile.
2. **Back-Navigation Integrity:**
   - Every tier must provide a prominent, accessible back button (`ArrowLeft`, `min-h-[40px] min-w-[40px]`) that steps back exactly **one** tier up the hierarchy.
   - Reader back button returns to the Topic Selection screen, NOT directly to the dashboard.
3. **Active-Content Only & Unit Subtitle Rules:**
   - Only blocks, units, categories, and topics with active, authored study guides are displayed in the Study section. Remove placeholder coming-soon sections, units, and topics whose content has not yet been added.
   - Do NOT list topics as subtitle text in the unit button; use a concise course code/descriptor (e.g., `Clinical Pharmacology Unit`).

---

## 3. Section Filter Display (Multi-Line Wrapping vs Horizontal Scroll)

### ⛔ Forbidden Pattern:
- **Do NOT** use a single-row horizontal scrolling container (`overflow-x-auto min-w-max`) for the guide sections filter. On mobile screens, this causes later section tags (such as *Part B, Part C & D, Self-Test, Summary*) to be cut off and hidden off-screen, creating navigation friction.

### ✅ Mandatory Standard:
- Use a **multi-line wrapping flex layout** (`flex flex-wrap gap-1.5 sm:gap-2`) so **ALL section tags/buttons are 100% visible simultaneously** upon opening the guide.
- Styling tokens:
  - Container: `p-1 bg-slate-100/70 border border-slate-200/80 rounded-2xl`
  - Active button: `bg-[#0B1B3D] text-white shadow-xs font-bold`
  - Inactive button: `bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 shadow-2xs`
  - Touch target: `min-h-[38px] px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold`

---

## 4. Zero Horizontal Scrolling Table Architecture

### ⛔ Forbidden Pattern:
- **Do NOT** rely on table horizontal overflow containers (`overflow-x-auto` with internal scrollbars) on mobile devices. Clinical students on mobile devices should never have to pan or scroll horizontally to read critical pharmacology or physiological data.

### ✅ Mandatory Dual-Presentation Standard:
Every data table must implement a responsive dual-view:

```tsx
{/* Mobile View: Vertical Stacked Cards (sm:hidden) */}
<div className="sm:hidden space-y-2.5 sm:space-y-3">
  {items.map((item, idx) => (
    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
      {/* Header with Title and Badges */}
      {/* Key-Value stacked attribute blocks */}
    </div>
  ))}
</div>

{/* Desktop/Tablet View: Standard Table (hidden sm:block) */}
<div className="hidden sm:block w-full overflow-hidden rounded-xl border border-slate-200">
  <table className="w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
      {/* Table Headers */}
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      {/* Table Rows */}
    </tbody>
  </table>
</div>
```

### Table Structure Requirements:
1. **Definitions Tables:** Term as header, followed by plain-text explanation and a dedicated highlight block for clinical examples.
2. **Comparison Tables (e.g. Static vs Cidal):** Physiological feature as header, followed by color-coded cards for each compared entity (e.g. purple for bacteriostatic, teal for bactericidal).
3. **Master Synthesis Tables:** Drug class and primary target as header, static/cidal indicator badge on the top right, followed by high-yield clinical memory pearls.

---

## 5. Mobile Typography & Readability Rules

To ensure high visibility on all mobile devices and prevent reader fatigue:

| Component | Class Name | Computed Size | Style |
| :--- | :--- | :--- | :--- |
| **Page / Guide Titles** | `text-base sm:text-xl font-bold` | 16px – 20px | High contrast `#0B1B3D` |
| **Section Headings** | `text-base sm:text-lg font-bold` | 16px – 18px | Uppercase tracking-wide |
| **Sub-section Titles** | `text-sm sm:text-base font-bold` | 14px – 16px | Slate-900 |
| **Primary Body Text** | `text-sm sm:text-base leading-relaxed`| 14px – 16px | Slate-700 / Slate-800 |
| **Question Stems** | `text-sm sm:text-base font-bold` | 14px – 16px | Slate-900 leading-snug |
| **Question Choices** | `text-sm sm:text-base font-semibold` | 14px – 16px | Slate-800 leading-relaxed |
| **Explanations / Rationales** | `text-sm sm:text-base leading-relaxed`| 14px – 16px | High-contrast readable |
| **Badges & Meta Chips** | `text-xs font-bold` | 12px (never ≤10px)| Bold, readable tags |

---

## 6. Zero Truncation & Content Completeness Policy

1. **Strictly No Truncation:**
   - **NEVER** apply `truncate`, `line-clamp-*`, or fixed max-widths to clinical questions, option choices, rationales, definitions, or table cells.
   - All options and body paragraphs must be configured with `break-words whitespace-normal text-left flex-1 min-w-0`.
2. **100% Content Coverage:**
   - Every single slide point, definition, mechanism, mnemonic breakdown, exam trap warning, lecture contradiction resolution, and past-paper question from source notes must be preserved in full. No summarized dilution.

---

## 7. Interactive Exam & Self-Assessment Standards

1. **Immediate Chromatic Feedback:**
   - Option buttons must provide instant feedback upon selection:
     - Emerald (`border-teal-500 bg-teal-50 text-teal-950`) for the correct answer.
     - Rose (`border-rose-400 bg-rose-50 text-rose-950`) for an incorrect selection.
     - Neutral muted slate for unselected choices.
2. **Comprehensive Solution Drawers:**
   - Stems must reveal:
     - **Why:** The underlying pathophysiological/pharmacological justification.
     - **Wrong Options:** Explicit explanations for why every distractor is incorrect.
     - **Examiner Trap:** High-yield alerts warning candidates of common exam pitfalls.
     - **Council Notes:** Specific historical exam years and syllabus tags.
3. **Interactive Mini Self-Test:**
   - In-line multiple-choice self-test with a reset button (`RotateCcw`) and instant validation.
4. **Clipboard Sharing:**
   - One-touch "Share Notes" / "Copy Summary" button that cleanly copies formatted high-yield bullet points to the candidate's clipboard.

---

## 8. Directory & Data Organization

All study curriculum data and components are organized modularly:

```text
src/
├── components/
│   └── StudySection.tsx          # 5-tier navigation & study guide workspace
├── data/
│   ├── study/
│   │   ├── antibioticsContent.ts # Full clinical content for Section 1
│   │   └── index.ts              # Blocks, units, categories, and topic registry
│   └── index.ts                  # Central data barrel export (includes export * from './study')
```
