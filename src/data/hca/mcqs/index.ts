/**
 * HCA Examination Past Papers Registry
 */

import { PastPaper } from "../../../types";
import { HCA_JUNE2025_COLLEGE_FINAL_EXAM } from "./hcaJune2025CollegeFinalExam";
import { HCA_FEB2026_COLLEGE_FINAL_EXAM } from "./hcaFeb2026CollegeFinalExam";

export {
  HCA_JUNE2025_COLLEGE_FINAL_EXAM,
  HCA_FEB2026_COLLEGE_FINAL_EXAM
};

export const HCA_ALL_PAPERS: PastPaper[] = [
  HCA_FEB2026_COLLEGE_FINAL_EXAM,
  HCA_JUNE2025_COLLEGE_FINAL_EXAM
];
