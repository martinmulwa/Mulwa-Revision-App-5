# Mulwa Clinical Exam Portal — Design System & Engineering Architecture

**Author:** MULWA  
**Contact:** martinmulwa95@gmail.com  
**Version:** 1.0.0

---

## 1. Ergonomic Vision & Philosophy

The Mulwa Clinical Exam Portal is engineered for focused, distraction-free clinical revision. High-stakes nursing and medical candidates often spend hours reviewing detailed stems, multi-choice questions, and complex physiological rationales.

Key design principles:
* **Cognitive Clarity:** Eliminate visual noise, heavy decorative shadows, and arbitrary container nesting so candidates can focus directly on the clinical question.
* **Editorial Typographic Precision:** Use **Plus Jakarta Sans** with high contrast (Slate-900 on crisp white / Slate-50) and spacious line heights (1.6–1.7) to prevent reading fatigue.
* **Streamlined 3-Tier Workflow:**
  1. **Dashboard:** Real-time session analytics (questions attempted, accuracy %, active sets, and activity logs).
  2. **Past Papers:** Comprehensive archive divided into standardized 20-question practice modules.
  3. **Mistakes Queue:** Focused review queue for every question answered incorrectly with full rationales and instant resolve actions.

---

## 2. Color Palette & Typography

| Token | Hex / Class | Purpose |
| :--- | :--- | :--- |
| **Primary Navy** | `#0B1B3D` | Primary branding, active buttons, active tabs |
| **Canvas** | `#F8FAFC` (`slate-50/50`) | Soft, eye-safe application background |
| **Surfaces** | `#FFFFFF` | Question cards, containers, input tiles |
| **Borders** | `#E2E8F0` (`slate-200`) | Crisp 1px structural separators |
| **Success Emerald**| `#059669` / `#ECFDF5` | Correct answer indicators, high performance tags |
| **Alert Crimson** | `#E11D48` / `#FFF1F2` | Incorrect choice flags, mistake review alerts |
| **Amber Warning** | `#D97706` / `#FFFBEB` | In-progress sets, active progress badges |

---

## 3. Session Lifecycle & Storage Architecture

* **Session Isolation:** Progress is managed via `window.sessionStorage`.
* **Tab-Level Persistence:** Refreshing the tab maintains active tests, scores, and mistake queues.
* **Clean Session Termination:** Closing the tab or browser automatically clears the session data, preventing stale multi-user contamination on shared clinical lab workstations.
* **Manual Reset:** Candidates can reset their progress anytime from the dashboard via the "Clear Progress" modal.

---

## 4. Study Curriculum & Guide Presentation Architecture

The Study curriculum follows strict presentation requirements detailed in [`STUDY_GUIDE_SPECIFICATION.md`](./STUDY_GUIDE_SPECIFICATION.md):

* **5-Tier Hierarchy:** Homescreen Dashboard → Block Selection (Block 1 vs Block 2) → Unit Selection (Pharmacology 1, Respiratory, Trauma) → Subject Area (Antibiotics) → Topic Selection ("1. Foundations: Classification of Antibiotics") → Study Guide Reader.
* **Zero Horizontal Scrolling Table Design:** All data tables use responsive dual-presentation: vertical stacked key-value cards on mobile (`sm:hidden`) and clean standard tables on desktop (`hidden sm:block`).
* **Visible Section Filter Pills:** Guide section filters use a multi-line wrapping layout (`flex flex-wrap gap-1.5 sm:gap-2`) so all section buttons are 100% visible at all times with zero horizontal scrollbars.
* **Mobile Typography:** Enhanced base font sizes (`text-sm sm:text-base` for body, stems, options, and rationales; `text-xs font-bold` for metadata tags) to ensure high visibility across all mobile devices.
* **Zero Truncation Policy:** Never truncate question stems, answer options, table cells, or clinical explanations.
