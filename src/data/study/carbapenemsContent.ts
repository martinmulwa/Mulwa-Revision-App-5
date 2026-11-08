/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 5: CARBAPENEMS
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

export interface CarbapenemsExamFocusRow {
  topic: string;
  sourcePapers: string;
  trap: string;
}

export interface CarbapenemAgentRow {
  drug: string;
  tradeName: string;
  features: string;
  pseudomonasCover: string;
  clinicalPearls: string;
}

export interface CarbapenemSideEffectRow {
  effect: string;
  mechanismOrContext: string;
  nursingAction: string;
}

export const ANTIBIOTICS_SECTION_5 = {
  id: 'block1-pharmacology1-antibiotics-carbapenems',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 5: CARBAPENEMS',
  shortTitle: '5. Carbapenems',
  subtitle: 'Broadest Beta-Lactam Spectrum, Imipenem/Cilastatin, Meropenem, ESBLs, Seizure Risk & Antimicrobial Stewardship',
  estimatedReadTime: '10 min read',
  lectureSlidesCovered:
    'Carbapenems (two slides): description, beta-lactamase resistance, spectrum, agents, indications, IV route, side effects',
  whyThisMatters:
    'Carbapenems are the ultimate "reserve / big gun" antibiotics in the hospital setting. In Block 1 examinations (Apr 2019 Special, Sept 2024 CAT 1, Sept 2012 CAT 2), examiners frequently test drug class identification (-penem suffix), why meropenem is strictly reserved for hospital-acquired infections (HAIs) and multi-drug resistant Gram-negatives (ESBLs), why cilastatin is combined with imipenem, their inability to cover MRSA, and critical safety rules regarding seizures and valproate interactions.',

  // =========================================================
  // PART A: THEORY
  // =========================================================
  theory: {
    // A1: What are carbapenems?
    foundations: {
      definition: 'A class of beta-lactam antibiotics possessing the broadest antimicrobial spectrum of all antibiotic classes in clinical medicine.',
      mechanism: 'Same mechanism as penicillins and cephalosporins: they bind to penicillin-binding proteins (PBPs) and block bacterial cell wall peptidoglycan cross-linking (bactericidal).',
      betaLactamaseResistance: 'Highly resistant to breakdown by most bacterial beta-lactamases, including extended-spectrum beta-lactamases (ESBLs) that destroy penicillins and 3rd/4th generation cephalosporins.',
      coveredSpectrum: [
        'Gram-positive organisms (e.g., Streptococcus pneumoniae, Enterococcus faecalis [variable], Listeria)',
        'Gram-negative bacilli (including multi-resistant Enterobacteriaceae and Pseudomonas aeruginosa)',
        'Anaerobic bacteria (Bacteroides fragilis, Clostridium species [non-difficile], peptostreptococci)'
      ],
      notCoveredBlindSpots: [
        'MRSA (Methicillin-Resistant Staphylococcus aureus) — requires Vancomycin or Ceftaroline',
        'Atypical / intracellular pathogens (Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella) — lack cell walls or live intracellularly, requiring macrolides, fluoroquinolones, or tetracyclines',
        'Enterococcus faecium and partially other enterococci (frequently intrinsically resistant)',
        'Stenotrophomonas maltophilia and Burkholderia cepacia'
      ]
    },

    // A2: Agents
    agentsList: [
      {
        drug: 'Imipenem / Cilastatin',
        tradeName: 'Tienem',
        features: 'First carbapenem introduced. Rapidly hydrolysed by renal brush border enzyme dehydropeptidase-I (DHP-1) into toxic metabolites if given alone.',
        pseudomonasCover: 'Yes (potent against Pseudomonas aeruginosa)',
        clinicalPearls: 'Combined with Cilastatin (a reversible DHP-1 inhibitor without antibacterial activity) to prevent renal breakdown and nephrotoxicity. Highest seizure risk among carbapenems.'
      },
      {
        drug: 'Meropenem',
        tradeName: 'Meronem',
        features: 'Synthetic 1-beta-methyl carbapenem stable to renal dehydropeptidase-I; does NOT require cilastatin co-administration.',
        pseudomonasCover: 'Yes (superb Gram-negative and Pseudomonas coverage)',
        clinicalPearls: 'Significantly lower neurotoxicity/seizure propensity than imipenem. Drug of choice for CNS infections (bacterial meningitis) caused by resistant pathogens.'
      },
      {
        drug: 'Ertapenem',
        tradeName: 'Invanz',
        features: 'Longer serum half-life allowing convenient once-daily dosing. Can be administered IV or deep IM reconstituted in 1% lidocaine.',
        pseudomonasCover: 'NO (Lacks coverage against Pseudomonas aeruginosa and Acinetobacter)',
        clinicalPearls: 'Excellent for community-acquired mixed intra-abdominal and pelvic infections or severe diabetic foot infections, but useless for hospital-acquired Pseudomonas.'
      },
      {
        drug: 'Doripenem',
        tradeName: 'Doribax',
        features: 'Similar spectrum to meropenem with potent in vitro antipseudomonal activity.',
        pseudomonasCover: 'Yes (Pseudomonas aeruginosa)',
        clinicalPearls: 'Stable against renal DHP-1. Reserved for complicated intra-abdominal and complicated urinary tract infections.'
      }
    ] as CarbapenemAgentRow[],

    slideCorrectionNote: {
      alert: 'Note-check on Lecture Slides:',
      text: 'The lecture slide\'s initial list writes "Meronem (Tienem)" as if they were a single drug. They are TWO DISTINCT DRUGS: Tienem = Imipenem + Cilastatin; Meronem = Meropenem. The subsequent slide lists them correctly.'
    },

    // A3: Indications
    indications: [
      {
        title: 'Hospital-Acquired Infections (HAIs)',
        description: 'Severe nosocomial infections such as hospital-acquired pneumonia (HAP), ventilator-associated pneumonia (VAP), and catheter-related blood-stream infections.',
        badge: 'Top Exam Target'
      },
      {
        title: 'Infected Pressure Sores (Bedsores)',
        description: 'Deep decubitus ulcers with extensive necrotic tissue and polymicrobial bacterial contamination (aerobes + anaerobes).',
        badge: 'Slide Core'
      },
      {
        title: 'Severe Sepsis & Febrile Neutropenia',
        description: 'Life-threatening systemic sepsis, septic shock, and empiric monotherapy in high-risk febrile neutropenic cancer patients.',
        badge: 'Critical Care'
      },
      {
        title: 'Anaerobic & Mixed Polymicrobial Infections',
        description: 'Complicated intra-abdominal sepsis (perforated viscus, secondary peritonitis, pelvic abscesses) requiring broad coverage against Bacteroides and enteric coliforms.',
        badge: 'Surgical Care'
      },
      {
        title: 'Multi-Drug Resistant (MDR) Gram-Negatives & ESBLs',
        description: 'Infections confirmed to produce Extended-Spectrum Beta-Lactamases (ESBL-producing E. coli and Klebsiella pneumoniae) that hydrolyse 3rd-generation cephalosporins.',
        badge: 'Guideline Standard'
      },
      {
        title: 'Bacterial Meningitis (Meropenem only)',
        description: 'Meropenem achieves effective CSF penetration with minimal neurotoxicity, making it the preferred carbapenem for multi-resistant bacterial meningitis.',
        badge: 'Meropenem Pearl'
      }
    ],

    // A4: Route
    routeDetails: {
      primary: 'Intravenous (IV) infusion ONLY for Imipenem/cilastatin and Meropenem.',
      outpatientRule: 'NOT indicated for routine outpatient treatment or uncomplicated oral infections.',
      imException: 'Ertapenem is the only agent formulated for intramuscular (IM) injection (reconstituted with 1% lidocaine) when IV access is compromised, given once daily.',
      infusionTime: 'Administer over 30 to 60 minutes. Rapid IV bolus of imipenem triggers acute nausea, vomiting, dizziness, and hypotension.'
    },

    // A5: Side Effects & Safety
    sideEffectsTable: [
      {
        effect: 'Skin rash, urticaria, pruritus',
        mechanismOrContext: 'Hypersensitivity reactions; allergic cross-reactivity with penicillins is low (historically reported at 10%, but proven in modern studies to be < 1%).',
        nursingAction: 'Check history of immediate IgE anaphylaxis to penicillins. If severe penicillin anaphylaxis occurred, exercise extreme caution or choose non-beta-lactam.'
      },
      {
        effect: 'Gastrointestinal upset & diarrhoea',
        mechanismOrContext: 'Nausea, vomiting, diarrhoea, risk of Clostridioides difficile-associated pseudomembranous colitis due to profound disruption of normal bowel flora.',
        nursingAction: 'Slow infusion rate if nausea occurs. Monitor bowel movements; send stool for C. difficile toxin if severe watery diarrhoea develops.'
      },
      {
        effect: 'Hypotension & diaphoresis',
        mechanismOrContext: 'Direct vascular vasomotor effect provoked by rapid intravenous infusion of imipenem.',
        nursingAction: 'Infuse imipenem slowly over at least 40 to 60 minutes; never give as a rapid IV push or rapid bolus.'
      },
      {
        effect: 'Nephrotoxicity / Renal dose adjustment',
        mechanismOrContext: 'Excreted almost exclusively by the kidneys (glomerular filtration + tubular secretion). Accumulation causes toxicity.',
        nursingAction: 'Calculate baseline creatinine clearance. MANDATORY dose reduction and extended dosing interval in renal impairment to avoid severe neurotoxicity.'
      },
      {
        effect: 'Seizures & central nervous system toxicity',
        mechanismOrContext: 'Antagonism of central GABA-A receptors. Highest risk with IMIPENEM, especially in patients with pre-existing CNS pathology, high doses, or renal failure.',
        nursingAction: 'Prefer meropenem in neurological patients or renal impairment. Monitor EEG/seizure activity. Avoid high doses.'
      },
      {
        effect: 'Plummeting Valproate levels (Drug interaction)',
        mechanismOrContext: 'Carbapenems rapidly and irreversibly decrease serum valproic acid levels by 60%–90% within 24 hours by inhibiting glucuronide hydrolysis.',
        nursingAction: 'DO NOT COMBINE! Valproate + carbapenem leads to breakthrough refractory seizures. Use alternative anti-epileptic or alternative antibiotic.'
      }
    ] as CarbapenemSideEffectRow[],

    // A6: Antimicrobial Stewardship & Reserve Drugs
    stewardship: {
      whyReserve: 'Carbapenems are "last-line" reserve agents. Indiscriminate use in mild or community-acquired infections creates selection pressure for Carbapenem-Resistant Enterobacteriaceae (CRE) and metallo-beta-lactamase (NDM-1) producers, against which few or no effective antibiotics remain.',
      nursingRole: [
        'Collect blood, urine, sputum, or wound cultures BEFORE initiating the first carbapenem dose.',
        'Ensure exact timing of infusions to maintain pharmacodynamic time-dependent bactericidal kill (Time > MIC).',
        'Mandate formal antimicrobial stewardship "Time-Out" at 48 to 72 hours: de-escalate to narrower-spectrum antibiotics as soon as microbiological culture & sensitivity results are available.',
        'Review renal function daily to adjust dosing promptly.'
      ]
    }
  },

  // =========================================================
  // PART B: EXAM FOCUS
  // =========================================================
  examFocus: [
    {
      topic: 'Meropenem = Carbapenem (Class Matching)',
      sourcePapers: 'Apr 2019 Special (Q11)',
      trap: 'Examiners present Meropenem and ask for its drug class. Students confuse the "-penem" ending with penicillins or cephalosporins. Remember: -cillin = penicillin, cef- = cephalosporin, -penem = carbapenem.'
    },
    {
      topic: 'Meropenem = Reserve for Hospital-Acquired Infections (HAIs)',
      sourcePapers: 'Sept 2024 CAT 1 (Q18)',
      trap: 'Question asks which antibiotic is "reserved for management of hospital acquired infections". Distractors include Ceftriaxone, Amikacin, and Cefuroxime. The correct reserve agent is Meropenem.'
    },
    {
      topic: 'Carbapenem used as an Exam Distractor',
      sourcePapers: 'Sept 2012 CAT 2',
      trap: 'Carbapenems frequently appear as incorrect options in questions asking about standard community outpatient therapy or MRSA treatment. Never pick a carbapenem for MRSA or simple outpatient bronchitis.'
    }
  ] as CarbapenemsExamFocusRow[],

  // =========================================================
  // PART C & D: PAST PAPERS, ANSWERS & RATIONALES
  // =========================================================
  pastPaperQuestions: [
    {
      id: 'carbapenems-q1',
      number: 1,
      examRef: 'Apr 2019 Special, Q11',
      stem: 'Match the drug with the corresponding class of drug: Meropenem',
      options: [
        { key: 'A', text: 'Penicillin' },
        { key: 'B', text: 'Carbapenem' },
        { key: 'C', text: 'Cephalosporin' },
        { key: 'D', text: 'Glycopeptide' }
      ],
      correctAnswer: 'B',
      explanation:
        'Meropenem, imipenem, and ertapenem are carbapenems, distinguished by their trademark "-penem" ending. They are broad-spectrum beta-lactams resistant to beta-lactamases.',
      wrongOptionsExplanation:
        'Option A (penicillins) end in "-cillin" (e.g. ampicillin, piperacillin). Option C (cephalosporins) start with "cef-" or "ceph-" (e.g. ceftriaxone). Option D (glycopeptides) comprise vancomycin and teicoplanin.',
      trapAlert:
        'Memory Shortcut: "-penem" ALWAYS indicates a Carbapenem. Do NOT confuse the "pen" syllable with penicillin!',
      notes: 'Topic: Drug Classification & Suffix Recognition'
    },
    {
      id: 'carbapenems-q2',
      number: 2,
      examRef: 'Sept 2024 CAT 1, Q18',
      stem: 'The antibiotic reserved for management of hospital acquired infections is:',
      options: [
        { key: 'A', text: 'Ceftriaxone' },
        { key: 'B', text: 'Amikacin' },
        { key: 'C', text: 'Meropenem' },
        { key: 'D', text: 'Cefuroxime' }
      ],
      correctAnswer: 'C',
      explanation:
        'Meropenem has the broadest spectrum among beta-lactams and exceptional beta-lactamase/ESBL stability. Under antimicrobial stewardship, it is strictly kept in reserve for serious hospital-acquired infections (HAIs) and multidrug-resistant pathogens.',
      wrongOptionsExplanation:
        'Options A (ceftriaxone) and D (cefuroxime) are standard frontline cephalosporins. Option B (amikacin) is an aminoglycoside for resistant Gram-negatives, but its nephrotoxicity and ototoxicity make it a toxic adjuvant rather than the designated "reserve beta-lactam" answer.',
      trapAlert:
        'Exam Keyword Shortcut: "reserved", "hospital-acquired", "multi-drug resistant", or "broadest spectrum" → Meropenem / Carbapenem.',
      notes: 'Topic: Antimicrobial Stewardship & Hospital Infection Control'
    }
  ] as StudyExamQuestion[],

  // =========================================================
  // PART E: HOW TO ALWAYS GET THESE RIGHT (STRATEGY & MNEMONICS)
  // =========================================================
  strategyRules: [
    {
      ruleNumber: 1,
      ruleTitle: '"-penem" Suffix = Carbapenem',
      explanation: 'Whenever you see a drug name terminating in "-penem" (Meropenem, Imipenem, Ertapenem, Doripenem), it is unequivocally a Carbapenem. Never match it to penicillins or cephalosporins.'
    },
    {
      ruleNumber: 2,
      ruleTitle: '"Reserve / Last-Line / Hospital-Acquired / ESBL" = Carbapenem',
      explanation: 'If a vignette mentions severe nosocomial hospital-acquired sepsis, infected decubitus ulcers, or ESBL-producing bacteria requiring a reserve drug, select Meropenem.'
    },
    {
      ruleNumber: 3,
      ruleTitle: 'Carbapenems Do NOT Cover MRSA or Atypicals',
      explanation: 'Despite having the broadest spectrum of all beta-lactams, carbapenems have ZERO activity against MRSA (requires Vancomycin) and atypical organisms like Mycoplasma/Chlamydia (require macrolides/doxycycline).'
    },
    {
      ruleNumber: 4,
      ruleTitle: 'IV Only, Renal Dose Reduction & Seizure Watch (Imipenem)',
      explanation: 'Administer via IV infusion. Reduce dose in renal failure. Be vigilant for neurotoxicity and seizures, especially with high-dose imipenem. Never combine with valproic acid.'
    }
  ],

  memoryAids: [
    {
      title: 'The Hospital Bunker Mnemonic',
      phrase: 'Carbapenems: The Big Gun in the Hospital Bunker',
      explanation: 'Think of carbapenems locked away inside the hospital bunker as heavy artillery—only brought out when ordinary frontline antibiotics have failed against severe hospital-acquired enemies.'
    },
    {
      title: 'Meropenem Acronym',
      phrase: 'Meropenem = Most Everything, Reserve Only',
      explanation: 'Covers Most Everything (Gram-positive, Gram-negative, Pseudomonas, Anaerobes), but kept in Reserve Only (stewardship).'
    },
    {
      title: 'Cilastatin Bodyguard Analogy',
      phrase: 'Imipenem needs a Bodyguard (Cilastatin) in the Kidney',
      explanation: 'Cilastatin blocks renal dehydropeptidase-I from destroying imipenem, allowing the active drug to survive and preventing nephrotoxic metabolites.'
    }
  ],

  // =========================================================
  // PART F: MINI SELF-TEST
  // =========================================================
  miniSelfTest: [
    {
      id: 'carbapenems-test-q1',
      question: 'Cilastatin is added to imipenem primarily to:',
      options: [
        'Kill resistant bacteria synergistically',
        'Block kidney breakdown of imipenem by dehydropeptidase-I',
        'Prevent allergic hypersensitivity reactions',
        'Raise urinary pH to enhance excretion'
      ],
      correctIndex: 1,
      explanation:
        'Cilastatin is a reversible competitive inhibitor of renal brush-border dehydropeptidase-I (DHP-1). It prevents the metabolic breakdown of imipenem in the proximal renal tubules, maintaining high therapeutic urinary concentrations and preventing nephrotoxicity. Cilastatin possesses no antibacterial action of its own.'
    },
    {
      id: 'carbapenems-test-q2',
      question: 'A carbapenem (e.g., Meropenem) is NOT active against which of the following pathogens?',
      options: [
        'Pseudomonas aeruginosa',
        'Anaerobic Bacteroides fragilis',
        'Methicillin-Resistant Staphylococcus aureus (MRSA)',
        'Extended-spectrum beta-lactamase (ESBL) producing E. coli'
      ],
      correctIndex: 2,
      explanation:
        'Carbapenems have excellent bactericidal activity against Pseudomonas, anaerobes, and ESBL-producing Enterobacteriaceae, but they are INACTIVE against MRSA due to altered penicillin-binding protein PBP2a. MRSA requires Vancomycin or Ceftaroline (5th-gen cephalosporin).'
    },
    {
      id: 'carbapenems-test-q3',
      question: 'Which serious adverse effect is classically associated with high-dose imipenem therapy, particularly in patients with unadjusted renal impairment?',
      options: [
        'Tendon rupture',
        'Seizures and central nervous system toxicity',
        'Irreversible ototoxicity',
        'Red man syndrome'
      ],
      correctIndex: 1,
      explanation:
        'Imipenem can antagonize GABA-A receptors in the brain, lowering the seizure threshold. The risk of seizures is highest in patients with pre-existing CNS disease, high doses, or renal failure where dose reduction was not implemented. Meropenem carries a substantially lower seizure risk.'
    }
  ] as SelfTestQuestion[],

  // =========================================================
  // PART G: SECTION SUMMARY
  // =========================================================
  summaryBullets: [
    'Carbapenems = Broadest beta-lactams, IV route, highly resistant to beta-lactamases/ESBLs, bactericidal cell-wall synthesis inhibitors covering Gram-positives, Gram-negatives (Pseudomonas), and anaerobes.',
    'Core Agents: Meropenem (Meronem) and Imipenem / Cilastatin (Tienem). Cilastatin prevents renal DHP-1 breakdown of imipenem. Note: Ertapenem lacks Pseudomonas coverage.',
    'Indications: Reserved for severe hospital-acquired infections (HAIs), infected pressure sores (bedsores), sepsis, febrile neutropenia, and mixed anaerobic intra-abdominal infections.',
    'Side Effects & Safety: Rash, GI upset, hypotension with rapid IV imipenem, seizures (especially imipenem in renal impairment), and severe drop in serum valproate levels (contraindicated combination).',
    'Antimicrobial Stewardship: Reserve drugs; obtain cultures first, adjust for renal clearance, and review clinical response at 48 to 72 hours to prevent carbapenem-resistant organisms (CRE).'
  ]
};
