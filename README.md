# MULWA — Clinical Exam Portal

**Author:** MULWA (<martinmulwa95@gmail.com>)  
**Version:** 7.0.0  
**Stack:** React 19 · TypeScript 5.8 · Vite 6 · Tailwind CSS v4 · Lucide Icons · Motion

A high-yield, distraction-free examination revision and self-assessment platform built specifically for medical, clinical medicine, and nursing candidates (including Kenya Registered Nursing / KRCHN / KRN, End-of-Block, University, and Nursing Council Board Licensure examinations).

The portal combines 1,000+ past examination questions, physiological and pathophysiological rationales, instant chromatic feedback, high-yield Short Answer Questions (SAQs) with structured mnemonics, real-time analytics, and an automated mistakes remediation queue.

---

## 📊 Portal at a Glance

| Metric | Count | Details |
| :--- | :--- | :--- |
| **Access Model** | **Open & Equal** | Universal access for all candidates; no administrative barriers or sign-in gates |
| **Total Past Papers & Practice Modules** | **97 Papers** | 95 KRN official exams/practice modules + 2 HCA College Final Exam papers |
| **Total MCQ & True/False Items** | **2,728 Questions** | Validated stems with distractors and clinical rationales (2,530 KRN + 198 HCA) |
| **High-Yield SAQ Items** | **112 Questions** | Model answers scaled to marks with examiner scoring tips |
| **Clinical SAQ Units** | **2 Clinical Units** | Respiratory Disorders (29 SAQs) & Trauma and Emergency (11 SAQs) |
| **TNH Practice SAQ Modules** | **16 Modules (72 SAQs)** | Dedicated Trauma & Emergency SAQs (Sets 1–4) under TNH Practice |
| **Study Curriculum Hub** | **Block 1 Guides** | High-yield lecture transcriptions, mnemonics & exam pattern decoding |
| **Clinical Specialties & Tracks** | **10 Active Units** | Respiratory, Trauma & Emergency, Pharmacology 1, Pharmacology 2, Perioperative Nursing, Paediatrics 1, Blood & Lymph, GIT Disorders, KRN Final Exams, HCA Final Exams |
| **Active Practice Chunks** | **148 Sets** | Standardized 10–25 question chunks for cognitive pacing (138 KRN + 10 HCA) |
| **Workstation Privacy** | **Session-Isolated** | Zero lingering data on shared library or ward computers |

---

## 🏛️ Architecture & Navigation Model

- **Multi-Course Hierarchy (KRN & HCA):**
  - **Level 1 — Course Selection (`CourseSelection.tsx`):** Candidates select their academic programme via modern card tiles:
    - **KRN (Kenya Registered Nursing / KRCHN):** Active curriculum loaded with 95 examination past papers, 2,530 MCQs, 112 SAQs, and lecture study guides.
    - **HCA (Health Care Assistant):** Active curriculum with 2 comprehensive College Final Exam papers (198 MCQs across 10 modular revision sets).
  - **Level 2 — Block Selection (`BlockSelection.tsx`):** Under KRN, candidates navigate their academic stage:
    - **Block 1 (Active):** Complete coverage of MSN 101, 102, 103, 105, PHM 102, PON 101, PEN 101, and MHN 201 (Respiratory Disorders, Trauma and Emergency, Pharmacology 1, Pharmacology 2, Perioperative Nursing, Paediatrics 1, Blood and Lymph Disorders, and GIT Disorders).
    - **Block 2 (In Preparation):** MSN 201, 202, 203 & Reproductive Health modules.
    - **Finals & Licensure (Active):** March 2009–2014, September 2012–2013, September 2019 & 2021 Finals (600 MCQs across 30 revision sets).
  - **Level 3 — Unit Selection (`UnitSelection.tsx`):** Displays clinical units with specialty icons (`Wind`, `Activity`, `Pill`, `Scissors`, `Baby`, `Droplets`, `Utensils`, `Award`), paper/question stats, and course codes.
  - **Level 4 — Unit Revision Hub (`UnitHub.tsx`):** Inside each clinical unit, candidates choose from grouped revision cards:
    - **Past Papers:** MCQ Bank with dynamic multi-criterion filter and sort (by Year, Month, Exam Type, Completion Status, and Title) and instant keyword search.
    - **SAQ Bank:** High-yield condition-categorized short answer questions with model answers and mnemonics.
    - **Practice & Review:** TNH Practice modules and Review Mistakes queue with live mistake count badges.
    - **Study:** Interactive lecture study guides with dual-presentation tables.
    - **Unit-Specific Progress Reset:** Reset test scores, in-progress exams, logged mistakes, and mastered SAQs strictly for the active unit without affecting any other units or overall app records. Available via the unit header button and dedicated bottom progress summary card with an interactive confirmation modal.
- **Header & Navigation Ergonomics (`Layout.tsx`):**
  - **Strictly Centered MULWA Logo:** Always horizontally centered across all viewports. Clicking the logo returns candidates directly to the main homepage.
  - **Zero Header Clutter:** No intrusive navigation buttons or breadcrumb text strips in the header.
  - **In-Page Back Navigation:** Clean back buttons on every tier allow smooth, intuitive step-back navigation.
  - **Icon-Only Mobile Footer:** Streamlined mobile bottom bar featuring only Home and Review Mistakes icons (no text labels).
- **Dedicated Study Section (`StudySection.tsx`):**
  - 5-tier curriculum reader with full clinical lecture notes, interactive self-tests, and zero-horizontal-scrolling responsive table design.
- **Dedicated TNH Practice Hub:**
  - TNH Practice is organized in its own dedicated section (`TNH Practice`), supporting both **MCQ Practice Papers** and **SAQ Practice Modules**.
- **Workstation Privacy (`sessionStorage`):**
  - Progress persists smoothly across refreshes and tab switches during a revision session, but clears when the browser tab closes, preventing student data leakage on shared nursing laboratory, hospital, and library computers.

---

## 📚 Curriculum & Question Bank Inventory

The platform organizes content modularly under **Block 1**, divided into clinical specialty units:

### 1. Respiratory Disorders (MSN 101)
* **Status:** 11 Curated Examination Papers & Practice Modules (**553 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **January 2011 Supplementary Exam** (`nhson-block1-jan2011-respiratory`) — 54 Questions
  2. **January 2011 Practice Exam** (`krn-respiratory-jan2011-respiratory-conditions`) — 49 Questions
  3. **July 2012 Supplementary Exam** (`tnh-block1-jul2012-respiratory-diseases`) — 54 Questions
  4. **August 2013 Supplementary Exam** (`tnh-block1-aug2013-respiratory`) — 64 Questions
  5. **TNH Practice: Acute Conditions** (`tnh-practice-acute-conditions`) — 59 Questions
  6. **TNH Practice: Chronic Conditions** (`tnh-respiratory-disorders-chronic-conditions`) — 60 Questions
  7. **TNH Practice: Traumatic Conditions** (`tnh-respiratory-disorders-traumatic-conditions`) — 60 Questions
  8. **September 2023 End of Block Exam** (`krn-block1-sept2023-respiratory-disorders`) — 40 Questions
  9. **September 2024 End of Block Exam** (`krn-block1-sept2024-respiratory-disorders`) — 40 Questions
  10. **October 2025 End of Block Exam** (`krn-block1-oct2025-respiratory-disorders`) — 37 Questions
  11. **March 2026 End of Block Exam** (`krn-block1-mar2026-respiratory-disorders`) — 36 Questions
* **Key Topics Covered:**
  * Acid-Base Balance & Arterial Blood Gas (ABG) interpretation (Respiratory Acidosis/Alkalosis, compensation mechanisms)
  * Oxygen Delivery Systems (low-flow vs. high-flow Venturi masks, reservoir bags, hypoxic drive in COPD)
  * Mechanical Ventilation & Airway Management (PEEP, CPAP, BiPAP, suctioning protocols)
  * Pneumonia classifications (CAP, HAP, VAP), CURB-65 prognostic criteria, sputum culture diagnostics
  * Bronchial Asthma & Status Asthmaticus (stepwise GINA pharmacotherapy, peak expiratory flow monitoring)
  * Chronic Obstructive Pulmonary Disease (emphysema vs. chronic bronchitis, GOLD guidelines)
  * Pulmonary Tuberculosis & Multidrug-Resistant TB (GeneXpert, sputum AFB, 2RHZE/4RH regimens, DOTS protocol)
  * Pleural conditions: Closed underwater seal drainage (UWSD), thoracentesis, empyema, pleural effusion
  * Pulmonary Embolism & Deep Vein Thrombosis (Wells criteria, D-dimer, anticoagulation, V/Q mismatch)
  * Acute Respiratory Distress Syndrome (ARDS) Berlin definition, PaO₂/FiO₂ ratio, prone positioning

---

### 2. Trauma and Emergency (MSN 102)
* **Status:** 12 Curated Examination Papers & Practice Modules (**357 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **September 2022 Class End of Block Exam** (`krn-block1-sept2022-trauma-emergency-nursing`) — 16 Questions
  2. **September 2023 Class End of Block Exam** (`krn-block1-sept2023-trauma-emergency-nursing`) — 15 Questions
  3. **April 2024 Class End of Block Exam** (`krn-block1-april2024-trauma-emergency-nursing`) — 15 Questions
  4. **September 2024 Class End of Block Exam** (`krn-block1-sept2024-trauma-emergency-nursing`) — 15 Questions
  5. **April 2025 Class End of Block Exam** (`krn-block1-april2025-trauma-emergency-nursing`) — 16 Questions
  6. **TNH Practice: Trauma and Emergency Care** (`tnh-practice-trauma-and-emergency-care`) — 40 Questions
  7. **TNH Practice: Principles of Trauma and Emergency Care** (`tnh-practice-principles-of-trauma-and-emergency-care`) — 40 Questions
  8. **TNH Practice: First Aid** (`tnh-practice-first-aid`) — 40 Questions
  9. **TNH Practice: Adults Basic Life Support** (`tnh-practice-adults-basic-life-support`) — 40 Questions
  10. **TNH Practice: Paediatric BLS & FBAO** (`tnh-practice-paediatric-bls-and-fbao`) — 40 Questions
  11. **TNH Practice: Burns** (`tnh-practice-burns`) — 40 Questions
  12. **TNH Practice: Management of Burns** (`tnh-practice-management-of-burns`) — 40 Questions
* **Key Topics Covered:**
  * Trauma Resuscitation: Primary & Secondary Surveys (ATLS ABCDE sequence, cervical in-line stabilization)
  * Triage Systems: Canadian Triage and Acuity Scale (CTAS 1–5) and Simple Triage and Rapid Treatment (START mass casualty protocol)
  * Shock Syndromes: Pathophysiology and emergency hemodynamics of Hypovolemic, Cardiogenic, Anaphylactic, Septic, Neurogenic, and Obstructive Shock
  * Basic Life Support (BLS) & Resuscitation: High-quality adult and pediatric CPR ratios (30:2, 15:2), chest compression fractions, automated external defibrillator (AED) usage, foreign body airway obstruction relief (Heimlich maneuver, back blows, chest thrusts)
  * Thoracic Trauma: Tension pneumothorax needle decompression (2nd ICS MCL or 5th ICS AAL), sucking chest wound 3-sided occlusive flutter dressing, flail chest paradoxical respiration, massive hemothorax (>1500 mL)
  * Burn Management: Wallace Rule of Nines, Parkland fluid resuscitation formula (`4 mL × kg × %TBSA`), Curling's stress ulcer prophylaxis, escharotomy indications
  * Environmental & Toxicological Emergencies: Snake bite management (20-minute whole blood clotting test [20WBCT], antivenom indications, avoiding harmful tourniquets/incisions), organophosphate toxicity and atropinisation, submersion injury / near-drowning

---

### 3. Pharmacology 1 (MSN 103)
* **Status:** 5 Curated Examination Papers & CAT Modules (**152 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **September 2023 Class End of Block Exam** (`krn-block1-sept2023-pharmacology-paper1`) — 30 Questions
  2. **April 2024 Class Supplementary Exam** (`krn-block1-april2024-pharmacology-supplementary`) — 30 Questions
  3. **September 2024 Class CAT 1** (`krn-block1-sept2024-pharmacology-cat1`) — 31 Questions
  4. **April 2025 Class End of Block Exam** (`krn-block1-april2025-pharmacology-paper1`) — 31 Questions
  5. **September 2025 End of Block Exam** (`krn-block1-sept2025-pharmacology-paper1`) — 30 Questions
* **Key Topics Covered:**
  * Principles of Pharmacokinetics & Pharmacodynamics: Absorption, first-pass metabolism, bioavailability, volume of distribution, hepatic clearance, renal elimination, half-life ($t_{1/2}$), receptor agonism/antagonism
  * Autonomic Pharmacology: Sympathomimetics, beta-blockers, anticholinergics (atropine), parasympathomimetics
  * Antimicrobial Chemotherapy: Beta-lactams, macrolides, aminoglycosides, fluoroquinolones, antitubercular agents, mechanisms of resistance, ototoxicity/nephrotoxicity monitoring
  * Analgesics & Anti-Inflammatory Agents: NSAIDs, acetaminophen toxicity and N-acetylcysteine reversal, opioid analgesics and naloxone titration
  * Cardiovascular Drugs: Antihypertensives, ACE inhibitors, diuretics, cardiac glycosides (digoxin toxicity and therapeutic drug monitoring)
  * Dosage Calculations: Flow rates, pediatric weight-based dosing, reconstitution formulas

---

### 4. Pharmacology 2 (PHM 102)
* **Status:** 8 Curated Examination Papers (**170 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **April 2019 Supplementary Exam** (`krn-block1-april2019-pharmacology-supplementary`) — 12 Questions
  2. **April 2019 Special Exam** (`krn-block1-april2019-pharmacology-special`) — 12 Questions
  3. **September 2019 End of Block Exam** (`krn-block1-sept2019-pharmacology-endofblock`) — 10 Questions
  4. **September 2019 Supplementary Exam** (`krn-block1-sept2019-pharmacology-supplementary`) — 10 Questions
  5. **April 2024 CAT 2 Exam** (`krn-block1-april2024-pharmacology-cat2`) — 32 Questions
  6. **April 2025 End of Block Exam** (`krn-block1-april2025-pharmacology-paper2`) — 32 Questions
  7. **April 2025 Supplementary Exam** (`krn-block1-april2025-pharmacology-supplementary`) — 31 Questions
  8. **September 2025 End of Block Exam** (`krn-block1-sept2025-pharmacology-paper2`) — 31 Questions
* **Key Topics Covered:**
  * Gastrointestinal Pharmacology: Proton pump inhibitors (omeprazole, esomeprazole), mucosal protectants (sucralfate), antacids, stimulant laxatives (bisacodyl), stool softeners (docusate), osmotic laxatives (lactulose, PEG), opiate antidiarrheals (loperamide), 5-HT3 antagonists (ondansetron)
  * Nutrition, Vitamins & Herbal Supplements: Calcium, vitamin C (scurvy), vitamin B3 (pellagra), folic acid (B9) neural tube defect prevention, complementary/herbal product interactions (ginger, garlic)
  * Urinary Tract & Analgesic/CNS Agents: Fluoroquinolone crystalluria & hydration, methenamine–sulfonamide incompatibility, nitrofurantoin–antacid interaction, opioid overdose & naloxone reversal, paracetamol overdose & acetylcysteine, Reye's syndrome (aspirin), baclofen withdrawal precautions
  * Autonomic, Cardiovascular & Pre-Anesthetic Pharmacology: Neostigmine cholinergic crisis vs anticholinergic effects (atropine), epinephrine in anaphylaxis, diazepam premedication, tamsulosin/prazosin orthostatic hypotension, ACE inhibitors vs ARBs (losartan), statins (HMG-CoA reductase), thrombolytics (alteplase, streptokinase), anticoagulants (heparin/protamine, warfarin/vitamin K), diuretics, digoxin toxicity holding threshold (<60 bpm), antiarrhythmics (quinidine, phenytoin, amiodarone)
  * Endocrine, Antimicrobial & Antineoplastic Chemotherapy: Metformin mechanism, long-term corticosteroid infection risk & tapering, levothyroxine administration & MI contraindication, regular insulin timing/IV route, sitagliptin (DPP-4 inhibition), alpha-glucosidase inhibitors, sulfonylureas, desmopressin, alkylating agents (cyclophosphamide, dacarbazine), methotrexate folate antagonism, vincristine, bleomycin, rituximab, antimalarials (AL, quinine hypoglycemia prevention), and TB/HIV regimens (isoniazid neuropathy, protease inhibitors)

---

### 5. Perioperative Nursing (PON 101)
* **Status:** 9 Curated Examination Papers (**126 total MCQs, Matching & True/False items**)
* **Examinations & Modules Included:**
  1. **April 2019 End of Block Exam** (`krn-april2019-block1-perioperative-nursing`) — 11 Questions
  2. **April 2019 Special Exam** (`krn-april2019-block1-perioperative-nursing-special`) — 11 Questions
  3. **September 2019 End of Block Exam** (`krn-sept2019-block1-perioperative-nursing`) — 10 Questions
  4. **September 2023 End of Block Exam** (`krn-sept2023-block1-perioperative-nursing`) — 15 Questions
  5. **April 2024 End of Block Exam** (`krn-april2024-block1-perioperative-nursing`) — 16 Questions
  6. **September 2024 End of Block Exam** (`krn-sept2024-block1-perioperative-nursing`) — 16 Questions
  7. **April 2025 End of Block Exam** (`krn-april2025-block1-perioperative-nursing`) — 15 Questions
  8. **April 2025 Special Exam** (`krn-april2025-block1-perioperative-nursing-special`) — 16 Questions
  9. **September 2025 End of Block Exam** (`krn-sept2025-block1-perioperative-nursing`) — 16 Questions
* **Key Topics Covered:**
  * Surgical Classifications & Terminology: Urgency tiers (Emergent, Urgent, Required, Elective, Optional), surgical intent (Ablative, Reconstructive, Corrective, Palliative), and surgical suffixes (`-ectomy`, `-otomy`, `-ostomy`, `-oscopy`, `-pexy`, `-plasty`)
  * Operating Theatre Design, Zoning & Environmental Control: Unrestricted, semi-restricted, restricted, sterile, and disposal zones; one-way traffic flow; positive-pressure ceiling-to-floor HEPA ventilation; minimum 55% humidity for static/explosion prevention; seamless slip-resistant flooring; preliminary, interim, and terminal cleaning schedules
  * Perioperative Phases & Team Roles: Pre-operative phase ("decision to table"), informed consent witnessing, WHO Surgical Safety Checklist (Sign In, Time Out, Sign Out), sterile vs non-sterile roles of the scrub nurse, circulating nurse, and anaesthesiologist, surgical counts
  * Surgical Incisions, Positioning & Haemostasis: Midline, Pfannenstiel, Kocher subcostal, McBurney's, and lower oblique incisions; supine, lateral, lithotomy, Trendelenburg, and sniffing positions with pressure-point protection; mechanical (bone wax, ligatures) vs thermal (cryosurgery) vs chemical (thrombin, gelatin sponge) haemostasis
  * Anaesthesia & PACU Priorities: Triad and four stages of general anaesthesia (medullary depression), depolarizing (suxamethonium) vs non-depolarizing muscle relaxants, inhalational vs intravenous agents (halothane, enflurane, propofol egg-lecithin precaution), Sellick manoeuvre (cricoid pressure), malignant hyperthermia (dantrolene), spinal headache prevention, and immediate PACU ABC airway/aspiration/haemorrhage interventions

---

### 6. Paediatrics 1 (PEN 101: Communicable Diseases & Medical-Surgical Conditions)
* **Status:** 11 Curated Examination Papers (**173 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **April 2025 Class End of Block 1 Special/Supplementary Exam** (`krn-block1-april2025-paediatric-nursing-i-supplementary`) — 15 Questions
  2. **April 2024 Class End of Block Exam** (`krn-block1-april2024-paediatric-nursing-i`) — 15 Questions
  3. **April 2024 Class End of Block Supplementary Exam — Medical-Surgical** (`krn-block1-april2024-paediatric-medical-surgical-supplementary`) — 31 Questions
  4. **September 2023 Class First Block Supplementary Exam** (`krn-block1-september2023-paediatrics-i-supplementary`) — 15 Questions
  5. **April 2022 Class End of Block Exam — Medical-Surgical Conditions** (`krn-block1-april2022-paediatric-medical-surgical-conditions`) — 32 Questions
  6. **April 2022 Class End of Block Exam — Communicable Diseases** (`krn-block1-april2022-paediatrics-communicable-diseases`) — 15 Questions
  7. **September 2021 Class Paediatrics Communicable Diseases Exam** (`krn-block1-september2021-paediatrics-communicable-diseases`) — 15 Questions
  8. **September 2019 Class End of Block 1 Exam** (`krn-block1-september2019-paediatrics-i-end-of-block`) — 10 Questions
  9. **September 2019 Class End of Block 1 Special Exam** (`krn-block1-september2019-paediatrics-i-special`) — 10 Questions
  10. **September 2019 Class PTS Block Exam: Introduction to Paediatrics** (`krn-pts-september2019-introduction-to-paediatrics`) — 5 Questions
  11. **April 2019 Class End of Block 1 Supplementary Exam** (`krn-block1-april2019-paediatrics-i-supplementary`) — 10 Questions
* **Key Topics Covered:**
  * Developmental Milestones & Physical Assessment (weight doubling/quadrupling, head lag thresholds, fine pincer grasp, MUAC malnutrition screening)
  * Pediatric Nursing Principles & Restraints (family-centered care, separation anxiety phases, restraint classifications)
  * Pediatric Triage (ETAT) & Respiratory Distress (age-specific tachypnea thresholds)
  * Fluid Resuscitation & Dehydration (IMCI/WHO Plan C, $20\,\text{mL/kg}$ emergency boluses)
  * Congenital GI Anomalies (TEF 3 Cs triad, Pyloric Stenosis olive mass, Hirschsprung's aganglionic megacolon, Intussusception currant jelly stool, Gastroschisis vs Omphalocele, Cleft Lip/Palate Rule of 10s)
  * Pediatric Genitourinary Disorders (Cryptorchidism orchidopexy timing, Phimosis vs Paraphimosis, Hypospadias foreskin preservation, Wilms' tumor "DO NOT PALPATE" precaution)
  * Communicable Pediatric Infections (Measles Koplik spots and Vitamin A, Diphtheria pseudomembrane, Pertussis, Mumps, Neonatal Tetanus, Pediatric TB)

---

### 7. Blood and Lymph Disorders (MHN 201)
* **Status:** 7 Curated Examination Papers (**95 total MCQs**)
* **Examinations & Modules Included:**
  1. **September 2025 Class Block 1 Exam** (`krn-block1-september2025-blood-and-lymphatic-disorders`) — 15 Questions
  2. **April 2025 Class Block 1 Exam** (`krn-block1-april2025-blood-and-lymphatic-disorders`) — 15 Questions
  3. **September 2024 Class Block 1 Exam** (`krn-block1-september2024-blood-and-lymphatic-disorders`) — 15 Questions
  4. **April 2024 Class Block 1 Exam** (`krn-block1-april2024-blood-and-lymphatic-disorders`) — 15 Questions
  5. **September 2022 End of Block Examination** (`krn-block1-september2022-blood-and-lymphatic-disorders`) — 15 Questions
  6. **April 2019 First Block Examination** (`krn-block1-april2019-blood-and-lymphatics-first-block-exam`) — 10 Questions
  7. **April 2019 First Block Supplementary Examination** (`krn-block1-april2019-blood-and-lymphatics-supplementary`) — 10 Questions
* **Key Topics Covered:**
  * Red Blood Cell Pathology & Anemias (Iron deficiency microcytic hypochromic, megaloblastic/pernicious B12 & folate deficiency, Schilling test, hemolytic anemia, aplastic anemia bone marrow biopsy, koilonychia)
  * Hemoglobinopathies & Red Cell Membrane Defects (Sickle Cell Disease HbS, vaso-occlusive crisis, splenic sequestration crisis with hypovolemia/shock, acute chest syndrome, hydroxyurea / HbF induction, hereditary spherocytosis protein 4.2 / pallidin defect & osmotic fragility, thalassemia splenomegaly & hemosiderosis)
  * Coagulation & Bleeding Disorders (Hemophilia A Factor VIII vs Hemophilia B Factor IX, Von Willebrand disease, immune thrombocytopenic purpura [ITP] corticosteroid therapy, bleeding time vs coagulation times, INR/warfarin monitoring, heparin/PTT, DIC increased fibrinolysis & FDPs, Polycythemia Vera abnormal platelet function)
  * Hematologic Malignancies & Plasma Cell Neoplasms (Acute Lymphocytic Leukemia [ALL] in pediatrics, Acute Myeloid Leukemia [AML], Chronic Myelocytic Leukemia [CML] $t(9;22)$, Hodgkin lymphoma Reed-Sternberg cells, Epstein-Barr Virus association & B symptoms, endemic Burkitt lymphoma jaw presentation, Multiple Myeloma triad, lytic bone lesions, Bence Jones proteins & zoledronic acid)
  * Blood Transfusion Medicine (Transfusion reaction types: acute hemolytic, febrile non-hemolytic, allergic, TACO vs TRALI, immediate bed-side nursing interventions)
  * Hematopoiesis & Cell Differentiation (Erythropoietin renal origin, thrombopoietin hepatic origin, granulocytes vs agranulocytes, plasmin fibrinolysis in clot resolution)

---

### 8. GIT Disorders (MSN 105: Gastrointestinal Disorders)
* **Status:** 8 Curated Examination Papers & CAT Modules (**89 total MCQs & True/False items across 8 Revision Sets**)
* **Examinations & Modules Included:**
  1. **TNH September 2013 Class GIT CAT II** (`nairobi-hospital-sept2013-block1-git-cat-ii`) — 10 Questions
  2. **TNH September 2013 Class GIT CAT I** (`nairobi-hospital-sept2013-block1-git-cat-i`) — 11 Questions
  3. **TNH March 2013 Class GIT Examination CAT II** (`nairobi-hospital-march2013-block1-git-cat-ii`) — 11 Questions
  4. **TNH March 2013 Class GIT Examination CAT I** (`nairobi-hospital-march2013-block1-git-cat-i`) — 11 Questions
  5. **TNH September 2012 Class GIT End of Block I Supplementary Exam** (`nairobi-hospital-sept2012-block1-git-disorders-supplementary`) — 12 Questions
  6. **TNH September 2012 Class GIT CAT II End of Block I Exam** (`nairobi-hospital-sept2012-block1-git-cat-ii`) — 12 Questions
  7. **TNH September 2011 Class End of Block I Supplementary Exam** (`nairobi-hospital-sept2011-block1-git-disorders-supplementary`) — 11 Questions
  8. **TNH September 2011 Class End of Block I Exam** (`nairobi-hospital-sept2011-block1-git-disorders`) — 11 Questions
* **Key Topics Covered:**
  * Oesophageal & Gastric Pathology (Achalasia manometry & balloon dilatation, GERD dietary fat and LES relaxation, Barrett's oesophagus columnar metaplasia & adenocarcinoma risk, Gastric vs Duodenal ulcers pain-food relationship, H. pylori urease mechanism, Zollinger-Ellison syndrome gastrinoma & mucosal hypertrophy, Dumping syndrome post-gastrectomy management)
  * Intestinal & Colorectal Conditions (Appendicitis McBurney's and Rovsing's signs, Paralytic ileus absent peristalsis vs mechanical obstruction, Intussusception telescoping & red currant jelly stool, Volvulus mesenteric twisting, Diverticulosis vs Diverticulitis colovesical fistula & pneumaturia, Colorectal carcinoma risk factors, Ulcerative colitis mucosal disease vs Crohn's transmural skip lesions)
  * Hepatobiliary & Pancreatic Disorders (Acute pancreatitis autodigestion enzymes, serum amylase/lipase, grey turner / cullen signs, pain relief positioning & nil by mouth, Cholelithiasis biliary colic referred right shoulder pain, Hepatitis B vaccination prevention, Hepatocellular jaundice vs obstructive clay-coloured stool, Fulminant hepatitis hypoglycemia, Hepatic encephalopathy ammonia accumulation & lactulose acidification, Amoebic liver abscess tinidazole & drainage, Liver biopsy pre-op coagulation & right-lateral post-op positioning, Paracentesis bladder evacuation & baseline vitals)
  * Anorectal Disorders & Stoma Nursing (Haemorrhoid degrees and post-hemorrhoidectomy urinary retention/hydration, Anal fissures causes & tears, Sigmoid colostomy formed stool vs ileostomy liquid digestive enzyme skin breakdown)

---

### 9. KRN College Final Examinations (KRCHN Final Exams)
* **Status:** 15 Comprehensive College & Hospital Final Examination Papers (**600 total MCQs across 30 Revision Sets**)
* **Examinations Included:**
  1. **September 2021 Class College Final Supplementary Exam** (`krn-collegefinal-sept2021-supplementary`) — 120 Questions (6 Revision Sets)
  2. **September 2019 Class College Final Exam** (`krn-collegefinal-sept2019`) — 120 Questions (6 Revision Sets)
  3. **September 2019 Class College Final Supplementary Exam** (`krn-collegefinal-sept2019-supplementary`) — 120 Questions (6 Revision Sets)
  4. **TNH September 2013 Class Hospital Final Examination, Paper 3** (`krn-nairobihospital-sept2013-hospitalfinal-paper3`) — 20 Questions (1 Revision Set)
  5. **TNH September 2012 Class Hospital Final Supplementary Examination, Paper III** (`krn-nairobihospital-sept2012-hospitalfinal-supplementary-paper3`) — 20 Questions (1 Revision Set)
  6. **TNH September 2012 Class Hospital Final Supplementary Examination, Paper I** (`krn-nairobihospital-sept2012-hospitalfinal-supplementary-paper1`) — 20 Questions (1 Revision Set)
  7. **TNH March 2014 Class Hospital Final Examination, Paper II** (`krn-nairobihospital-march2014-hospitalfinal-paper2`) — 20 Questions (1 Revision Set)
  8. **TNH March 2011 Class Hospital Final Supplementary Examination, Paper 3** (`krn-nairobihospital-march2011-hospitalfinal-supplementary-paper3`) — 20 Questions (1 Revision Set)
  9. **TNH March 2011 Class Hospital Final Examination, Paper I** (`krn-nairobihospital-march2011-hospitalfinal-paper1`) — 20 Questions (1 Revision Set)
  10. **TNH March 2011 Class Hospital Final Examination, Paper II** (`krn-nairobihospital-march2011-hospitalfinal-paper2`) — 20 Questions (1 Revision Set)
  11. **TNH March 2010 Class Hospital Final Examination, Paper II** (`krn-nairobihospital-march2010-hospitalfinal-paper2`) — 20 Questions (1 Revision Set)
  12. **TNH March 2010 Class Hospital Final Examination, Paper III** (`krn-nairobihospital-march2010-hospitalfinal-paper3`) — 20 Questions (1 Revision Set)
  13. **TNH March 2010 Class Hospital Final Supplementary Examination, Paper I** (`krn-nairobihospital-march2010-hospitalfinal-supplementary-paper1`) — 20 Questions (1 Revision Set)
  14. **TNH March 2010 Class Hospital Final Supplementary Examination, Paper III** (`krn-nairobihospital-march2010-hospitalfinal-supplementary-paper3`) — 20 Questions (1 Revision Set)
  15. **TNH March 2009 Class Hospital Final Supplementary Examination, Paper 1** (`krn-nairobihospital-march2009-hospitalfinal-supplementary-paper1`) — 20 Questions (1 Revision Set)
* **Key Topics Covered:**
  * Foundations of Nursing, Nursing Theories (Watson, Henderson, Orem, Nightingale, Bandura Social Learning), Medical Law & Ethics (Assault, Battery, Negligence, Veracity, Vulnerable Research Populations)
  * Applied Anatomy & Physiology, Immunology (Innate Inflammation vs Cell-Mediated, Active/Passive, Humoral Secretory IgA), Parasitology (Filariasis, Schistosomiasis, Helminths)
  * Comprehensive Medical-Surgical Nursing: Sickle Cell Vaso-occlusive Crisis & Pulmonary Infarction, Pneumonia Complications, Volvulus & Intestinal Obstruction, Congestive Heart Failure Diet & Sodium Restriction, Warfarin Contraindications in Pregnancy, Renal Allograft Rejection, Continent Urinary Diversions, Acute Cholecystitis Murphy's Sign, Romberg Proprioceptive Balance Test, Fibrinolysis Mechanisms, Adrenal Medulla Catecholamines, Post-Pneumonectomy Operative-Side Positioning, Post-Spinal Anaesthesia Protocols, Chest Tube Water-Seal Disconnection Protocol, Bilateral Adrenalectomy Hormone Replacement, Parathyroid Hormone Calcium Regulation, Isoniazid Neuropathy & Pyridoxine, Tonsillectomy Post-op Hemorrhage, Wernicke's Encephalopathy Thiamine Therapy, Tuberculosis First-Line 2RHZE Regimen
  * Paediatric Medical-Surgical Nursing: Orchidopexy Post-op Care, Talipes Ponseti Serial Casting, Talipes Calcaneus, Autism Spectrum Disorder, IMCI Dehydration Plan C, Weaning & Infant Iron Stores, Measles Live Vaccine Side Effects, Infant CPR Compression Ratios, Tracheoesophageal Fistula 3 Cs, Pertussis Paroxysmal Stage, Hypospadias vs Epispadias, Severe Pneumonia Signs, Paraphimosis vs Phimosis, Gomez Malnutrition Classification, Colostrum vs Mature Breast Milk, Hospital Malnutrition
  * Midwifery, Obstetrics & Gynaecology: Inevitable Abortion Evacuation, Prevention of Mother-to-Child Transmission (PMTCT), Labour Stages, Active Management of 3rd Stage (AMTSL), Partograph monitoring, Puerperal Psychosis, Family Planning
  * Community Health Nursing: Primary Health Care NLTP Element, Equitable Resource Distribution Principle, Community Participation, Community Diagnosis Exploration Phase, MCH Growth Monitoring Chart & Home Follow-up Criteria, School Health Comprehensive Components, EPI Cold Chain, Home Visiting Barriers
  * Mental Health, Sociology & Management: Tuckman Team Development (Norming), Piaget Cognitive Egocentrism, Erikson Identity vs Role Confusion, Kübler-Ross Bargaining Stage, Alogia Psychosis Symptom, Durkheim Division of Labour & Suicide Classifications, Avoidant Personality Disorder, Folkways vs Mores, Neurobiology of Depression (Limbic Amygdala & Cingulate Gyrus), Bloom's Taxonomy, Lewin's Change Theory, Donabedian Quality Framework, Leadership Power Bases, Directional Hypotheses & Research Designs

---

### 10. SAQ Question Banks & Categorization

#### A. Core Clinical SAQ Bank (40 Total SAQs)
Accessible via the **SAQ Bank** tile:
* **Respiratory Disorders (29 SAQs across 6 condition categories):**
  * Chest Drain & Underwater Seal Drainage (UWSD)
  * Bronchial Asthma & Status Asthmaticus
  * Pneumonia (Community-Acquired, Hospital-Acquired, Aspiration)
  * Chronic Obstructive Pulmonary Disease (COPD)
  * Thoracic Surgery & Post-Operative Management
  * Pulmonary Tuberculosis, Pleural Effusion, Pulmonary Embolism & ARDS
* **Trauma and Emergency (11 SAQs across 8 condition categories):**
  * Triage in the Emergency Department (CTAS levels, mass-casualty triage)
  * Trauma Assessment & Nurse Roles (Primary survey ABCDE, secondary survey SAMPLE)
  * Snake Bite (Envenomation first aid, 20WBCT protocol, hospital care)
  * Tension Pneumothorax (Pathophysiology, needle decompression)
  * Emergent Burn Care (Inhalation injury, Parkland resuscitation formula)
  * Seizure First Aid (Stay/Safe/Side, status epilepticus timing)
  * Submersion Injury / Near Drowning (Hypoxia correction, rewarming)
  * Organophosphate Poisoning (Atropine titration protocol)

#### B. TNH Practice SAQ Bank (72 SAQs across 16 Modules)
Accessible via the **TNH Practice** tile -> Trauma and Emergency -> **SAQ Bank**:
* **Set 1 Modules:** Triage in ED, Trauma Assessment Primary/Secondary Survey, Shock
* **Set 2 Modules:** Basic Life Support & CPR, Burns Emergent Phase, First Aid, Paediatric Emergencies & FBAO, Poisoning
* **Set 3 Modules:** Triage Process Tools & CTAS, Emergency & Trauma Fundamentals, Shock Pathophysiology & Types, Primary Survey
* **Set 4 Modules:** Burns Classification & Care, BLS & Paediatric Resuscitation II, First Aid II, Snake Bite / Drowning / Stroke / Poisoning II

---

## 🛠️ Tech Stack & Directory Structure

```text
├── src/
│   ├── components/                 # Clean, modular UI components
│   │   ├── BlockSelection.tsx      # Block selection card view
│   │   ├── CourseSelection.tsx     # Academic programme card view
│   │   ├── EmptyCourseBlockView.tsx# In-preparation placeholder view
│   │   ├── Layout.tsx              # Centered logo header & icon-only mobile footer
│   │   ├── PastPapersLibrary.tsx   # Past papers archive & TNH practice hub
│   │   ├── QuestionScreen.tsx      # Interactive MCQ engine with instant rationale
│   │   ├── ResultsScreen.tsx       # Scorecard, academic grade band, clipboard export
│   │   ├── ReviewIncorrectScreen.tsx # Remediation queue with in-line retesting
│   │   ├── RevisionSetSelection.tsx  # Chunked question set selection interface
│   │   ├── SAQLibrary.tsx          # Unit & condition browser for normal SAQ Bank
│   │   ├── SAQScreen.tsx           # 1-at-a-time SAQ workspace with mnemonics & tips
│   │   ├── StudySection.tsx        # Responsive Block 1 curriculum guides
│   │   ├── UnitHub.tsx             # Unit-level revision dashboard with grouped cards
│   │   ├── UnitSelection.tsx       # Clinical unit card selection view
│   │   └── study/                  # Individual topic study guide readers
│   ├── config/                     # Constants, grading thresholds, and UI configurations
│   ├── data/
│   │   ├── block1/
│   │   │   ├── mcqs/
│   │   │   │   ├── blood-and-lymph-disorders/  # 7 Blood & Lymph modules (95 MCQs)
│   │   │   │   ├── git-disorders/              # 17 GIT modules (304 MCQs)
│   │   │   │   ├── paediatrics-1/              # 11 Paediatrics exam modules (173 MCQs)
│   │   │   │   ├── perioperative-nursing/      # 9 Perioperative Nursing modules (126 MCQs)
│   │   │   │   ├── pharmacology-1/             # 5 Pharmacology 1 exam modules (152 MCQs)
│   │   │   │   ├── pharmacology-2/             # 8 Pharmacology 2 exam modules (170 MCQs)
│   │   │   │   ├── respiratory-disorders/      # 11 Respiratory exam modules (553 MCQs)
│   │   │   │   └── trauma-and-emergency-nursing/# 12 Trauma & Emergency modules (357 MCQs)
│   │   │   └── saqs/                           # 112 High-yield SAQs across 30 condition modules
│   │   │       ├── respiratory-disorders/      # 29 Respiratory SAQs
│   │   │       ├── tnh-practice/               # 72 TNH Practice SAQs (Sets 1–4)
│   │   │       └── trauma-and-emergency-nursing/# 11 Trauma & Emergency SAQs
│   │   ├── study/                              # Block 1 curriculum notes & lecture slide guides
│   │   │   ├── antibioticsContent.ts           # Foundations & classification of antibiotics
│   │   │   ├── combinationsContent.ts          # Synergism and beta-lactamase
│   │   │   ├── penicillinsContent.ts           # Penicillins classes & protocols
│   │   │   ├── cephalosporinsContent.ts        # Cephalosporins generations & rules
│   │   │   ├── carbapenemsContent.ts           # Carbapenems reserve rules
│   │   │   ├── macrolidesContent.ts            # Macrolides 50S subunit inhibitors
│   │   │   ├── lincosamidesContent.ts          # Lincosamides & AAD
│   │   │   └── index.ts                        # Study curriculum aggregation
│   │   ├── papers/                 # Unified papers aggregator & exports
│   │   ├── questions.ts            # Central query and slicing helpers
│   │   ├── saqData.ts              # SAQ barrel provider & typed exports
│   │   └── validator.ts            # 9-point strict schema integrity validator
│   ├── utils/                      # Scoring, chunking, and ephemeral storage utilities
│   ├── types.ts                    # Domain TypeScript types
│   ├── index.css                   # Tailwind CSS v4 styling
│   └── main.tsx                    # Application entry point
├── DESIGN.md                       # Design constitution & ergonomic vision
├── STUDY_GUIDE_SPECIFICATION.md    # Study section UI/UX, responsive layout & typography spec
├── PAST_PAPER_EXTRACTION_PROMPT.md # AI OCR past paper extraction prompt for new exams
├── metadata.json                   # Application metadata & permissions
└── README.md                       # Project documentation
```

---

## 💻 Development & Build Commands

```bash
# Install dependencies
npm install

# Start Vite development server (port 3000)
npm run dev

# Run TypeScript type check and linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
