/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 6: MACROLIDES
 *
 * Full structured curriculum study material transcribed from lecture slides,
 * clinical exam blueprints, and Kenyan clinical treatment guidelines.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import {
  StudyExamQuestion,
  SelfTestQuestion
} from './antibioticsContent';

export interface MacrolideAgentRow {
  drug: string;
  brandName: string;
  dosingSchedule: string;
  halfLifeFeatures: string;
  cyp450Status: string;
  pregnancyCategory: string;
  specialPoints: string;
}

export interface MacrolidesExamFocusRow {
  topic: string;
  sourcePapers: string;
  trap: string;
}

export interface MacrolideSideEffectRow {
  effect: string;
  mechanismOrContext: string;
  nursingAction: string;
}

export const ANTIBIOTICS_SECTION_6 = {
  id: 'block1-pharmacology1-antibiotics-macrolides',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 6: MACROLIDES',
  shortTitle: '6. Macrolides',
  subtitle: '50S Ribosomal Inhibition, Atypical Pneumonia, H. pylori Triple Therapy, CYP450 Interactions & Nursing Care',
  estimatedReadTime: '11 min read',
  lectureSlidesCovered:
    'Macrolides (action, uses, agents) → Macrolides side effects (GI, hearing, phlebitis, liver, pregnancy category)',
  whyThisMatters:
    'Macrolides are tested repeatedly in Block 1 examinations (Sept 2012 CAT 2, Apr 2019 CAT 1, Apr 2019 Special, Mar 2011 CAT 1, Apr 2024, Sept 2023, Sept 2024). Examiners focus on mechanism of action (50S ribosomal subunit → bacteriostatic), distinguishing the "-thromycin" suffix from aminoglycosides ("-mycin"), atypical pneumonia coverage (Mycoplasma, Chlamydophila, Legionella), the exact 3-drug formulation of the H. pylori eradication kit, CYP3A4 enzyme inhibition drug interactions (warfarin bleeding, theophylline, digoxin), and route-specific nursing cautions (severe phlebitis with IV erythromycin).',

  // =========================================================
  // PART A: THEORY
  // =========================================================
  theory: {
    // A1: What are macrolides?
    foundations: {
      mechanism:
        'Reversibly bind to the 50S ribosomal subunit of susceptible bacteria, inhibiting transpeptidation and translocation of peptide chains during protein synthesis → bacteriostatic (slide). (Note: At exceptionally high tissue concentrations against specific organisms they can be bactericidal, but in nursing exams always designate them as bacteriostatic).',
      nameClue:
        'All drug names in this class terminate with the distinctive suffix "-thromycin" (erythromycin, clarithromycin, azithromycin, roxithromycin).',
      slideUses:
        'Respiratory tract infections (pharyngitis, tonsillitis, sinusitis, bronchitis), genital tract infections, gastrointestinal infections, and skin/soft tissue infections.',
      extraUses: [
        {
          target: 'Atypical Pneumonia',
          details:
            'Covers intracellular organisms lacking normal peptidoglycan cell walls: Mycoplasma pneumoniae, Chlamydophila pneumoniae, and Legionella pneumophila. Routinely added to Amoxicillin in community-acquired pneumonia (CAP).'
        },
        {
          target: 'Penicillin-Allergic Alternative',
          details:
            'Drug of choice for Gram-positive respiratory and skin infections in patients with documented immediate (IgE-mediated) penicillin hypersensitivity.'
        },
        {
          target: 'Chlamydia, Trachoma, Typhoid & Cholera',
          details:
            'Azithromycin is the frontline agent: single-dose oral cure for Chlamydia trachomatis urethritis; mass treatment for trachoma; oral alternative for Salmonella typhi; safe cholera option in pregnant/breastfeeding mothers and young children (where doxycycline/ciprofloxacin are contraindicated).'
        },
        {
          target: 'Helicobacter pylori Eradication',
          details:
            'Clarithromycin is the cornerstone antimicrobial component in first-line triple therapy for peptic ulcer disease.'
        },
        {
          target: 'Bordetella pertussis & Diphtheria',
          details:
            'Erythromycin or Azithromycin is the drug of choice for treating whooping cough (pertussis) and eliminating carrier status in Corynebacterium diphtheriae.'
        }
      ],
      ribosomalRationale:
        'Because macrolides bind to the bacterial ribosome (50S subunit) rather than attacking the cell wall, they effectively penetrate host human cells to eliminate atypical intracellular pathogens that completely lack a standard peptidoglycan cell wall (which beta-lactams cannot affect). That is why macrolides are the mandatory combination partner in moderate-to-severe pneumonia regimens.'
    },

    // A2: Agents & Special Features
    agentsList: [
      {
        drug: 'Erythromycin',
        brandName: 'Erythrocin',
        dosingSchedule: 'Four times daily (QID / every 6 hours)',
        halfLifeFeatures: 'Short half-life (1.5 to 2 hours), requires frequent administration.',
        cyp450Status: 'Potent CYP3A4 enzyme inhibitor',
        pregnancyCategory: 'Category B (safe/acceptable in pregnancy)',
        specialPoints:
          'The historical prototype natural macrolide. Most pronounced GI irritation because it acts as a motilin receptor agonist, stimulating vigorous gastrointestinal smooth muscle peristalsis (causing severe abdominal cramping and diarrhoea). Severe IV phlebitis.'
      },
      {
        drug: 'Clarithromycin',
        brandName: 'Klacid',
        dosingSchedule: 'Twice daily (BD / every 12 hours)',
        halfLifeFeatures: 'Intermediate half-life (3 to 7 hours); active 14-hydroxy metabolite.',
        cyp450Status: 'Potent CYP3A4 enzyme inhibitor',
        pregnancyCategory: 'Category C (teratogenic in animal studies; avoid in pregnancy unless no alternative)',
        specialPoints:
          'Key antibacterial component in standard H. pylori eradication triple therapy (Clarithromycin + Amoxicillin + PPI). Enhanced acid stability and improved oral bioavailability compared to erythromycin.'
      },
      {
        drug: 'Azithromycin',
        brandName: 'Zithromax',
        dosingSchedule: 'Once daily (OD) for 3 to 5 days, or single stat dose',
        halfLifeFeatures: 'Extremely long terminal elimination half-life (~68 hours); massive intracellular tissue penetration.',
        cyp450Status: 'Minimal / clinically insignificant CYP3A4 inhibition (safest with co-medications)',
        pregnancyCategory: 'Category B (safe/acceptable in pregnancy)',
        specialPoints:
          '15-membered azalide derivative. Concentrates inside lysosomes of phagocytes and fibroblasts (tissue levels up to 50 times higher than serum). Allows short once-daily courses: 1 g stat for Chlamydia trachomatis, or 500 mg daily for 3 days for community-acquired pneumonia.'
      },
      {
        drug: 'Roxithromycin',
        brandName: 'Roxicin',
        dosingSchedule: 'Twice daily (BD / every 12 hours)',
        halfLifeFeatures: 'Semi-synthetic derivative with high oral bioavailability and long serum half-life (12 hours).',
        cyp450Status: 'Mild / moderate CYP3A4 inhibitor',
        pregnancyCategory: 'Category B',
        specialPoints:
          'Similar antimicrobial spectrum to erythromycin but produces substantially fewer gastrointestinal side effects and maintains stable plasma levels.'
      }
    ] as MacrolideAgentRow[],

    // A3: Side Effects & High-Yield Safety Warnings
    sideEffectsTable: [
      {
        effect: 'Gastrointestinal upset (nausea, vomiting, diarrhoea, abdominal cramps)',
        mechanismOrContext:
          'Most common adverse effect (up to 30% with erythromycin). Direct stimulation of motilin receptors on GI smooth muscle, triggering hyperperistalsis and painful cramps.',
        nursingAction:
          'Administer erythromycin with or immediately after food (use enteric-coated or estolate/ethylsuccinate formulations). Azithromycin capsules require an empty stomach (1 hour before or 2 hours after food), though tablets can be taken with meals if nausea occurs.'
      },
      {
        effect: 'Severe IV Phlebitis & Local Venous Irritation',
        mechanismOrContext:
          'Intravenous erythromycin lactobionate/gluceptate is an intense chemical vascular irritant that rapidly induces chemical thrombophlebitis and severe local burning pain.',
        nursingAction:
          'CRITICAL EXAM PEARL: Must be heavily diluted in large volumes (e.g. 250–500 mL normal saline), infused slowly over at least 60 minutes via a free-flowing large vein, and infusion sites frequently rotated.'
      },
      {
        effect: 'Temporary / Reversible Hearing Impairment (Ototoxicity)',
        mechanismOrContext:
          'Bilateral sensorineural hearing loss, tinnitus, and vertigo; specifically triggered by high-dose intravenous erythromycin (e.g. ≥ 4 g/day) or in patients with concurrent renal/hepatic impairment.',
        nursingAction:
          'Monitor hearing and balance. Reassure the patient that hearing impairment is almost always transient and resolves fully after drug discontinuation.'
      },
      {
        effect: 'Hepatotoxicity & Cholestatic Jaundice',
        mechanismOrContext:
          'Erythromycin estolate formulation can cause a hypersensitivity hepatitis presenting as cholestatic jaundice (fever, dark urine, pale stools, pruritus, elevated alkaline phosphatase).',
        nursingAction:
          'Use with extreme caution in patients with pre-existing hepatic impairment. Avoid erythromycin estolate in adults and pregnancy; report yellowing of sclera/skin immediately.'
      },
      {
        effect: 'QT Interval Prolongation & Ventricular Arrhythmias',
        mechanismOrContext:
          'Blockade of myocardial delayed rectifier potassium channels (IKr), leading to prolongation of cardiac action potential, prolonged QTc, and risk of fatal Torsades de Pointes.',
        nursingAction:
          'Avoid combining with other QT-prolonging drugs (antiarrhythmics, fluoroquinolones, antipsychotics). Exercise caution in hypokalaemia, hypomagnesaemia, or pre-existing bradycardia.'
      },
      {
        effect: 'CYP3A4 Enzyme Inhibition & Toxic Drug Interactions',
        mechanismOrContext:
          'Erythromycin and Clarithromycin bind and irreversibly inactivate cytochrome P450 3A4 in the liver and intestinal mucosa, preventing metabolic clearance of co-prescribed drugs.',
        nursingAction:
          'DANGEROUS INTERACTIONS: Raises serum levels of Warfarin (severe bleeding risk / elevated INR), Carbamazepine (ataxia/toxicity), Theophylline/Aminophylline (seizures/arrhythmias), Digoxin (toxicity), and Statins (rhabdomyolysis). Check full medication chart! (Note: Azithromycin does not inhibit CYP3A4).'
      },
      {
        effect: 'Pregnancy Safety Discrepancy (Category B vs Category C)',
        mechanismOrContext:
          'Azithromycin and Erythromycin base/ethylsuccinate are US FDA Pregnancy Category B (safe and acceptable). Clarithromycin is Category C (causes embryonic loss and cleft palate in animals).',
        nursingAction:
          'In pregnant women requiring a macrolide (e.g. for atypical pneumonia or chlamydia), prescribe Azithromycin or Erythromycin. NEVER give Clarithromycin to pregnant mothers unless no safe alternative exists.'
      }
    ] as MacrolideSideEffectRow[],

    // A4: Nursing Care
    nursingCarePoints: [
      {
        title: 'Food Timing & Administration Protocol',
        text: 'Give oral erythromycin with or after meals to reduce gastric irritation. Give azithromycin capsules on an empty stomach (1 hour before or 2 hours after meals) to optimize absorption; tablets can be taken with meals if nausea occurs.'
      },
      {
        title: 'IV Infusion Safety Protocol',
        text: 'Never administer IV erythromycin as an undiluted bolus or rapid injection. Dilute in at least 250 to 500 mL of 0.9% Normal Saline or 5% Dextrose, infuse over 60 minutes minimum, and rotate venous cannulation sites to prevent chemical thrombophlebitis.'
      },
      {
        title: 'Patient Teaching & Symptom Reporting',
        text: 'Instruct the patient to complete the entire prescribed course even if symptoms resolve earlier. Advise immediate reporting of palpitations/syncope (QT prolongation), yellowing of the eyes/skin (cholestatic jaundice), or severe persistent watery diarrhoea (C. diff).'
      },
      {
        title: 'Mandatory Medication Reconciliation',
        text: 'Screen the patient\'s prescription chart for CYP3A4 substrates prior to initiating erythromycin or clarithromycin. Notify prescriber if the patient takes Warfarin, Theophylline, Carbamazepine, Digoxin, or Simvastatin/Atorvastatin.'
      }
    ]
  },

  // =========================================================
  // PART B: EXAM FOCUS
  // =========================================================
  examFocus: [
    {
      topic: 'Azithromycin = Macrolide (Class Matching)',
      sourcePapers: 'Sept 2012 CAT 2 (Q9), Apr 2019 Special (Q10)',
      trap: 'Examiners present Azithromycin and ask for its drug class. Distractors include Aminoglycosides, Cephalosporins, and Fluoroquinolones. Look for the "-thromycin" suffix → Macrolide.'
    },
    {
      topic: 'Clarithromycin = Macrolide (Class Matching)',
      sourcePapers: 'Apr 2019 CAT 1 (Q10)',
      trap: 'Examiners try to confuse "-thromycin" with aminoglycosides ending in "-mycin" (e.g. gentamicin, streptomycin). Remember: "-thromycin" with the "thro" syllable = Macrolide.'
    },
    {
      topic: 'H. pylori Eradication Kit Formulation',
      sourcePapers: 'Mar 2011 CAT 1 (Q8)',
      trap: 'Examiners test the exact components of the peptic ulcer eradication kit. The rule is 1 PPI + 2 Antibiotics: Clarithromycin + Amoxicillin + a PPI (Lansoprazole or Omeprazole). Watch out for trap options containing 2 PPIs (Omeprazole + Lansoprazole) or H2 blockers (Cimetidine/Ranitidine).'
    },
    {
      topic: 'Ribosomal Subunit Target (50S)',
      sourcePapers: 'Apr 2024 (Q7), Sept 2023 (Q1)',
      trap: 'Questions asking for the site of action of erythromycin: 50S subunit. Tetracyclines and aminoglycosides act on 30S; macrolides, chloramphenicol, and clindamycin act on 50S.'
    },
    {
      topic: 'First-Line Pneumonia Partner Therapy',
      sourcePapers: 'Sept 2024 (Q11), Clinical Guidelines',
      trap: 'Kenyan and international pneumonia guidelines pair Amoxicillin (for Streptococcus pneumoniae) with Erythromycin or Azithromycin (for atypical pathogens like Mycoplasma). This combination provides dual cell wall + 50S ribosomal coverage.'
    }
  ] as MacrolidesExamFocusRow[],

  // =========================================================
  // PART C & D: PAST PAPERS, ANSWERS & RATIONALES
  // =========================================================
  pastPaperQuestions: [
    {
      id: 'macrolides-q1-sept2012-cat2-q9',
      number: 1,
      examRef: 'Sept 2012 CAT 2, Q9',
      stem: 'Match the drug with its corresponding class: Azithromycin',
      options: [
        { key: 'A', text: 'Cephalosporin' },
        { key: 'B', text: 'Aminoglycosides' },
        { key: 'C', text: 'Fluoroquinolone' },
        { key: 'D', text: 'Macrolide' }
      ],
      correctAnswer: 'D',
      explanation:
        'Azithromycin is a prototype macrolide antibiotic (specifically a 15-membered azalide), identified by the diagnostic "-thromycin" suffix. It possesses a long elimination half-life (~68 hours), permitting once-daily dosing for 3 to 5 days. It is used for respiratory tract infections, atypical pneumonia, Chlamydia trachomatis, typhoid, and trachoma.',
      wrongOptionsExplanation:
        'Option A (cephalosporins) begin with "cef-" or "ceph-" (e.g. ceftriaxone, cefuroxime). Option B (aminoglycosides) end in "-mycin" or "-micin" without the "thro" syllable (e.g. gentamicin, amikacin). Option C (fluoroquinolones) end in "-floxacin" (e.g. ciprofloxacin, levofloxacin).',
      trapAlert:
        'Suffix Rule: "-thromycin" ALWAYS indicates a Macrolide. Do not confuse it with aminoglycosides ("-mycin").',
      notes: 'Topic: Antimicrobial Drug Classification'
    },
    {
      id: 'macrolides-q2-apr2019-cat1-q10',
      number: 2,
      examRef: 'Apr 2019 CAT 1, Q10',
      stem: 'Match the drug with the corresponding class of drug: Clarithromycin',
      options: [
        { key: 'A', text: 'Sulfonamide' },
        { key: 'B', text: 'Aminoglycoside' },
        { key: 'C', text: 'Tetracycline' },
        { key: 'D', text: 'Macrolide' }
      ],
      correctAnswer: 'D',
      explanation:
        'Clarithromycin is a macrolide antibiotic with the characteristic "-thromycin" ending. It is administered twice daily, indicated for lower respiratory tract infections and as the essential antimicrobial anchor in H. pylori eradication triple therapy. It is also a potent inhibitor of cytochrome P450 3A4.',
      wrongOptionsExplanation:
        'Option A (sulfonamides) start with "sulfa-" (e.g. sulfamethoxazole). Option B (aminoglycosides) include gentamicin and streptomycin. Option C (tetracyclines) end in "-cycline" (e.g. doxycycline).',
      trapAlert:
        'Spelling Trap: Aminoglycosides are spelled with "-mycin" (gentamicin, streptomycin, neomycin, kanamycin) or "-micin". Macrolides ALWAYS contain the letters "thro" in "-thromycin" (erythromycin, clarithromycin, azithromycin).',
      notes: 'Topic: Drug Classification & Suffix Clues'
    },
    {
      id: 'macrolides-q3-apr2019-special-q10',
      number: 3,
      examRef: 'Apr 2019 Special, Q10',
      stem: 'Match the drug with the corresponding class of drug: Azithromycin',
      options: [
        { key: 'A', text: 'Tetracycline' },
        { key: 'B', text: 'Cephalosporin' },
        { key: 'C', text: 'Glycopeptide' },
        { key: 'D', text: 'Macrolide' }
      ],
      correctAnswer: 'D',
      explanation:
        'Azithromycin is a macrolide antibiotic. It acts by binding to the 50S ribosomal subunit to inhibit protein synthesis. Its unique pharmacokinetic profile allows 3-day treatment courses for respiratory infections and single-dose therapy (1 g) for genital Chlamydia.',
      wrongOptionsExplanation:
        'Option A (tetracyclines) act on the 30S subunit (doxycycline). Option B (cephalosporins) act on bacterial cell wall synthesis. Option C (glycopeptides) comprise vancomycin and teicoplanin.',
      trapAlert:
        'Exam Repetition: Note how Azithromycin was tested in both Sept 2012 CAT 2 and Apr 2019 Special. Class-matching questions on macrolides are easy points if you memorize the "-thromycin" suffix.',
      notes: 'Topic: Class Matching'
    },
    {
      id: 'macrolides-q4-mar2011-cat1-q8',
      number: 4,
      examRef: 'Mar 2011 CAT 1, Q8',
      stem: 'The Helicobacter pylori eradication kit is a combination of:',
      options: [
        { key: 'A', text: 'Omeprazole, Lansoprazole, Clarithromycin' },
        { key: 'B', text: 'Amoxicillin, Clarithromycin, Lansoprazole' },
        { key: 'C', text: 'Omeprazole, Cimetidine, Amoxicillin' },
        { key: 'D', text: 'Pantoprazole, Ranitidine, Tinidazole' }
      ],
      correctAnswer: 'B',
      explanation:
        'Standard first-line Helicobacter pylori eradication triple therapy consists of 1 Proton Pump Inhibitor (PPI) + 2 Antibiotics (Amoxicillin + Clarithromycin, or Metronidazole if penicillin-allergic), taken twice daily for 7 to 14 days. The PPI (Lansoprazole or Omeprazole) raises intragastric pH so the antibiotics remain stable and active while promoting mucosal healing; the two antibiotics synergistically eradicate H. pylori and prevent the emergence of resistance.',
      wrongOptionsExplanation:
        'Option A is incorrect because it contains TWO PPIs (Omeprazole + Lansoprazole) and only one antibiotic. Option C pairs a PPI with an H2 blocker (Cimetidine) and only one antibiotic. Option D pairs a PPI with an H2 blocker (Ranitidine) and only one antimicrobial (Tinidazole).',
      trapAlert:
        'Golden Rule for H. pylori MCQs: ALWAYS count the components! A valid eradication regimen MUST have EXACTLY 1 Acid Suppressor (PPI) + 2 Antibiotics. Any option with two acid suppressors or only one antibiotic is automatically false.',
      notes: 'Topic: Peptic Ulcer Disease & Triple Therapy'
    }
  ] as StudyExamQuestion[],

  // =========================================================
  // PART E: HOW TO ALWAYS GET THESE RIGHT (STRATEGY & MNEMONICS)
  // =========================================================
  strategyRules: [
    {
      ruleNumber: 1,
      ruleTitle: '"-thromycin" Suffix = Macrolide',
      explanation:
        'Every drug ending in "-thromycin" (Azithromycin, Clarithromycin, Erythromycin, Roxithromycin) is unequivocally a Macrolide. Look for the "thro" syllable to differentiate from aminoglycosides.'
    },
    {
      ruleNumber: 2,
      ruleTitle: 'H. pylori Kit = Exactly 1 PPI + 2 Antibiotics',
      explanation:
        'When an exam asks for the H. pylori kit, check the component formula: 1 PPI (Omeprazole, Lansoprazole, or Esomeprazole) + 2 Antibiotics (Clarithromycin + Amoxicillin, or Metronidazole). Never pick an option with 2 PPIs or an H2 blocker.'
    },
    {
      ruleNumber: 3,
      ruleTitle: 'Atypical Pneumonia or Penicillin Allergy → Select Macrolide',
      explanation:
        'If a clinical vignette describes community-acquired pneumonia with atypical features (dry cough, bilateral infiltrates caused by Mycoplasma, Legionella, or Chlamydia) or a patient with severe penicillin anaphylaxis needing respiratory coverage, the correct answer is a Macrolide.'
    },
    {
      ruleNumber: 4,
      ruleTitle: 'CYP3A4 Enzyme Inhibition = Elevated Warfarin & Theophylline',
      explanation:
        'Erythromycin and Clarithromycin are notorious CYP3A4 inhibitors. Combining them with Warfarin spikes the INR and causes bleeding; combining with Theophylline/Aminophylline causes seizures and arrhythmias. Azithromycin does NOT inhibit CYP3A4.'
    },
    {
      ruleNumber: 5,
      ruleTitle: 'Never Confuse Macrolides with Aminoglycosides',
      explanation:
        'Macrolides are oral/IV, bacteriostatic, act on 50S, safe in pregnancy (erythro/azi), and cause GI upset/CYP interactions. Aminoglycosides (gentamicin, amikacin) are strictly parenteral, bactericidal, act on 30S, cause permanent ototoxicity/nephrotoxicity, and are teratogenic.'
    }
  ],

  memoryAids: [
    {
      title: 'The Macrolide Trio Personalities',
      phrase: 'ERY = ERRand (GI upset) boy; AZI = Always Zips (once daily); CLARI = Clearly inhibits liver enzymes & clears H. pylori',
      explanation:
        'Erythromycin causes the most GI cramping; Azithromycin zips through once daily for 3 days; Clarithromycin inhibits CYP450 and clears H. pylori in triple therapy.'
    },
    {
      title: 'Ribosome Target Mnemonic',
      phrase: 'Macros hit the 50 (S)',
      explanation:
        'Macrolides bind to the large 50S ribosomal subunit to block protein synthesis. Contrast with "AT 30" (Aminoglycosides and Tetracyclines act on 30S).'
    },
    {
      title: 'H. pylori Triple Therapy Acronym',
      phrase: 'Triple for the bug: PPI + Amox + Clari',
      explanation:
        'Memorize PAC (PPI + Amoxicillin + Clarithromycin) taken twice daily for 7 to 14 days to eradicate H. pylori and cure peptic ulcers.'
    }
  ],

  // =========================================================
  // PART F: MINI SELF-TEST
  // =========================================================
  miniSelfTest: [
    {
      id: 'macrolides-test-q1',
      question: 'Which of the following macrolide antibiotics is administered once daily for a 3- to 5-day course due to its exceptionally long elimination half-life?',
      options: [
        'Erythromycin',
        'Azithromycin',
        'Clarithromycin',
        'Roxithromycin'
      ],
      correctIndex: 1,
      explanation:
        'Azithromycin has a unique 15-membered azalide structure with an elimination half-life of approximately 68 hours and extensive tissue distribution. This allows convenient once-daily dosing for just 3 to 5 days, or a single 1 g dose for Chlamydia trachomatis urethritis.'
    },
    {
      id: 'macrolides-test-q2',
      question: 'Why must intravenous erythromycin be heavily diluted in large-volume infusion fluid and administered slowly over at least 60 minutes?',
      options: [
        'To prevent severe chemical thrombophlebitis and burning pain',
        'To prevent acute hypoglycaemia',
        'To prevent acute tubular necrosis and nephrotoxicity',
        'To avoid severe cutaneous photosensitivity'
      ],
      correctIndex: 0,
      explanation:
        'Intravenous erythromycin is a potent chemical irritant to vascular endothelium. Rapid administration or inadequate dilution causes excruciating local burning pain and severe chemical thrombophlebitis. Diluting in 250–500 mL normal saline and infusing over 60 minutes is mandatory nursing care.'
    },
    {
      id: 'macrolides-test-q3',
      question: 'A patient receiving maintenance oral warfarin therapy is prescribed oral clarithromycin for bronchitis. The nurse anticipates which clinical consequence?',
      options: [
        'Decreased International Normalized Ratio (INR) and thrombosis risk',
        'Elevated INR and significantly increased bleeding risk',
        'No change in anticoagulant effect because clarithromycin is renal-cleared',
        'Sudden onset of acute oliguric renal failure'
      ],
      correctIndex: 1,
      explanation:
        'Clarithromycin is a potent inhibitor of hepatic CYP3A4 and other CYP enzymes responsible for metabolizing the active isomer of warfarin. Co-administration drastically reduces warfarin clearance, leading to toxic drug accumulation, elevated INR, and life-threatening bleeding complications.'
    },
    {
      id: 'macrolides-test-q4',
      question: 'Macrolide antibiotics exert their bacteriostatic antimicrobial effect by binding to which bacterial target?',
      options: [
        '30S ribosomal subunit',
        '50S ribosomal subunit',
        'Peptidoglycan transpeptidase enzyme in the cell wall',
        'DNA gyrase (Topoisomerase II)'
      ],
      correctIndex: 1,
      explanation:
        'Macrolides reversibly bind to the 23S rRNA in the 50S ribosomal subunit, inhibiting translocation and transpeptidation during bacterial protein translation. (30S is targeted by aminoglycosides and tetracyclines; cell wall transpeptidase by beta-lactams; DNA gyrase by fluoroquinolones).'
    }
  ] as SelfTestQuestion[],

  // =========================================================
  // PART G: SECTION SUMMARY
  // =========================================================
  summaryBullets: [
    'Mechanism & Taxonomy: Macrolides reversibly bind the 50S ribosomal subunit to block protein synthesis (bacteriostatic). Identified by the diagnostic "-thromycin" suffix.',
    'Clinical Uses: Respiratory infections, atypical pneumonia (Mycoplasma, Chlamydophila, Legionella), frontline alternative in penicillin allergy, Chlamydia (single-dose azithromycin), cholera in pregnancy/children, and H. pylori triple therapy.',
    'Core Agents: Erythromycin (short half-life, 4x daily, motilin agonist causing GI cramping, severe IV phlebitis); Clarithromycin (twice daily, H. pylori anchor, Category C); Azithromycin (long half-life, once daily for 3–5 days, Category B, minimal CYP interactions).',
    'Adverse Effects & Safety: GI upset/cramps, severe IV phlebitis (dilute well & infuse slowly), transient hearing impairment with high-dose IV, cholestatic jaundice (erythromycin estolate), and QT interval prolongation.',
    'Drug Interactions & Stewardship: Erythromycin and Clarithromycin are potent CYP3A4 inhibitors that raise serum levels of Warfarin (spikes INR/bleeding), Theophylline, Carbamazepine, Digoxin, and Statins. H. pylori Kit = 1 PPI + Amoxicillin + Clarithromycin.'
  ]
};
