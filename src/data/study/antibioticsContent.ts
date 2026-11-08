/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 1: Antimicrobials, Antibiotics and How They Are Classified
 *
 * Full structured curriculum study material transcribed from lecture slides
 * and clinical exam blueprints.
 */

export interface StudyQuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface StudyExamQuestion {
  id: string;
  number: number;
  examRef: string;
  stem: string;
  options: StudyQuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  wrongOptionsExplanation: string;
  trapAlert?: string;
  notes?: string;
}

export interface SelfTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ComparisonTableRow {
  drugClass: string;
  target: string;
  staticOrCidal: 'Static' | 'Cidal' | 'Static alone, Cidal together';
  rememberPearls: string;
  badgeColor?: string;
}

export interface BacterialTargetItem {
  number: string;
  target: string;
  whyGoodTarget: string;
  antibioticGroups: string;
  colorClass: string;
}

export const ANTIBIOTICS_SECTION_1 = {
  id: 'block1-pharmacology1-antibiotics-foundations',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 1: Antimicrobials, Antibiotics and How They Are Classified',
  shortTitle: 'Foundations & Classification of Antibiotics',
  subtitle: 'Mechanisms of Action, 30S vs 50S Subunits, Spectrum, and Recycled Exam Pairs',
  estimatedReadTime: '15 min read',
  lectureSlidesCovered:
    'Antimicrobials (definitions) → Classification of antibiotics → Mechanism of action → Diagram "On the basis of mechanism of action" → Antimicrobial spectrum → Mode of action (bacteriostatic vs bactericidal)',
  whyThisMatters:
    'Almost every antibiotic question in your past papers (mechanism, "which subunit", "which inhibits the cell wall", "which is bactericidal") is answered from this one section. Learn this well and 4 to 6 marks in every Block 1 paper become easy.',

  // Part A: Theory
  theory: {
    definitions: [
      {
        term: 'Anti-infective / antimicrobial',
        meaning:
          'Any chemical (organic or inorganic) that kills or stops growth of a microbe (bacteria, viruses, fungi, parasites)',
        examples: 'Antibiotics, antivirals, antifungals, antimalarials'
      },
      {
        term: 'Antibiotic',
        meaning:
          'A chemical compound that kills or stops the growth of bacteria. Originally made by one microbe (bacteria or fungi) to kill others',
        examples:
          'Penicillin (from the fungus Penicillium), gentamicin, erythromycin'
      }
    ],

    noteCheckA1: [
      '“Anti-infective/antimicrobial” is the big umbrella and also includes antivirals, antifungals and antiparasitics.',
      'Many modern antibiotics are semi-synthetic (amoxicillin, azithromycin) or fully synthetic (ciprofloxacin, sulfonamides), not directly taken from a microbe. The slide on fluoroquinolones later correctly says they are synthetic.'
    ],

    rationaleA1:
      'Bacteria are living cells, so they can be attacked. Viruses are not killed by antibiotics, which is why antibiotics are not given for colds or flu.',

    threeWaysToClassify: [
      {
        number: '1',
        title: 'By mechanism of action',
        detail: 'What part of the bacterium is attacked (cell wall, membrane, ribosomes, DNA/RNA, folate).'
      },
      {
        number: '2',
        title: 'By spectrum of activity',
        detail: 'How many types of bacteria are covered (narrow-spectrum vs broad-spectrum).'
      },
      {
        number: '3',
        title: 'By mode of action',
        detail: 'Do they kill directly (bactericidal) or only stop growth (bacteriostatic).'
      }
    ],

    selectiveToxicity:
      'A good antibiotic hurts the bacterium but not you. It does this by attacking things bacteria have and human cells do not have (or have in a different form).',

    bacterialTargets: [
      {
        number: '1',
        target: 'Cell wall synthesis (peptidoglycan wall)',
        whyGoodTarget:
          'Human cells have no cell wall, so these drugs are very safe. Without a wall the bacterium swells with water and bursts (osmotic lysis).',
        antibioticGroups:
          'Penicillins, cephalosporins, carbapenems, monobactams (together called beta-lactams), vancomycin, bacitracin',
        colorClass: 'indigo'
      },
      {
        number: '2',
        target: 'Cell membrane function',
        whyGoodTarget:
          'The drug damages the bacterial membrane so vital cytoplasmic contents leak out.',
        antibioticGroups: 'Polymyxins (e.g., colistin)',
        colorClass: 'cyan'
      },
      {
        number: '3',
        target: 'Protein synthesis (ribosomes)',
        whyGoodTarget:
          'Bacterial ribosomes are 70S (made of 30S + 50S). Human ribosomes are 80S (40S + 60S). So drugs can block bacterial ribosomes selectively.',
        antibioticGroups:
          '30S: Tetracyclines, Aminoglycosides. 50S: Macrolides (erythromycin, azithromycin), Clindamycin (lincosamides), Linezolid, Chloramphenicol, Streptogramins',
        colorClass: 'purple'
      },
      {
        number: '4',
        target: 'Nucleic acid synthesis (DNA/RNA)',
        whyGoodTarget:
          'Bacterial replication enzymes differ significantly from human topoisomerases and polymerases.',
        antibioticGroups:
          'Quinolones (ciprofloxacin, levofloxacin) block DNA gyrase. Rifampicin blocks RNA polymerase.',
        colorClass: 'rose'
      },
      {
        number: '5',
        target: 'Folic acid (folate) synthesis',
        whyGoodTarget:
          'Bacteria must synthesize their own folate de novo. Humans ingest folate from food, so human cells are unharmed.',
        antibioticGroups:
          'Sulfonamides (block dihydropteroate synthase) and Trimethoprim (blocks dihydrofolate reductase) — together = co-trimoxazole.',
        colorClass: 'amber'
      }
    ] as BacterialTargetItem[],

    diagramReading: [
      {
        title: 'Folate pathway synergy',
        body: 'PABA → (enzyme blocked by sulfonamides) → DHFA → (enzyme blocked by trimethoprim) → THFA → DNA building blocks. Two sequential blocks in the same metabolic pathway produce potent bactericidal synergy.'
      },
      {
        title: 'Ribosome architecture',
        body: '50S is the larger subunit (top); 30S is the smaller subunit (bottom). Aminoglycosides and tetracyclines bind 30S; macrolides, clindamycin, linezolid, and chloramphenicol bind 50S.'
      },
      {
        title: 'Nucleic acid box',
        body: 'DNA gyrase (topoisomerase II) is blocked by fluoroquinolones. RNA polymerase (transcription of mRNA) is blocked by rifampicin.'
      }
    ],

    diagramNoteCheck:
      'The 50S list on the lecture diagram includes linezolid and streptogramins. Linezolid is an oxazolidinone. You will rarely be tested on it, but it is clinically correct to locate it at 50S.',

    ribosomeMnemonic: {
      mnemonic: 'AT 30, CCEL at 50',
      breakdown: [
        { label: 'AT 30', desc: 'Aminoglycosides and Tetracyclines act at the 30S subunit' },
        { label: 'CCEL at 50', desc: 'Chloramphenicol, Clindamycin, Erythromycin (macrolides), Linezolid act at the 50S subunit' }
      ]
    },

    fiveTargetsMnemonic: {
      mnemonic: 'W-M-P-N-F',
      breakdown: 'Wall · Membrane · Protein · Nucleic acid · Folate'
    },

    spectrumSection: {
      definition: 'Spectrum = the range of microbes a drug can kill or stop.',
      narrow: {
        title: 'Narrow-spectrum',
        desc: 'Works on one type or a few types of bacteria.',
        examples: 'Isoniazid (only mycobacteria / TB). Others: benzyl penicillin (mainly Gram-positive), vancomycin (Gram-positive only).'
      },
      broad: {
        title: 'Broad-spectrum',
        desc: 'Works on many bacterial types (Gram-positive, Gram-negative, and sometimes atypicals/anaerobes).',
        examples: 'Tetracycline, chloramphenicol, amoxicillin, ciprofloxacin, ceftriaxone, carbapenems.'
      },
      refresher: {
        title: 'First-year refresher: Gram-positive vs Gram-negative',
        gramPos: 'Thick peptidoglycan wall, no outer membrane (e.g., Staphylococcus, Streptococcus).',
        gramNeg: 'Thin peptidoglycan wall plus a lipopolysaccharide outer membrane that blocks many large or hydrophobic drugs (e.g., E. coli, Klebsiella, Pseudomonas).',
        whyItMatters: 'That protective outer membrane is why narrow drugs like benzyl penicillin and vancomycin do not penetrate Gram-negatives.'
      },
      nurseRationale:
        'Broad-spectrum drugs kill normal beneficial microbiota in the gut and vagina, causing antibiotic-associated diarrhoea, oral/vaginal thrush (Candida), and Clostridioides difficile pseudomembranous colitis. Narrow-spectrum drugs are always preferred once culture and sensitivity results identify the pathogen.'
    },

    modeOfAction: {
      comparison: [
        {
          feature: 'Meaning',
          static: 'Stops bacteria from multiplying (bacteriostatic). The patient’s host immune system (phagocytes, antibodies) must eliminate the arrested organisms.',
          cidal: 'Directly kills bacteria (bactericidal). Reduces bacterial burden independently of immune cell competence.'
        },
        {
          feature: 'Lecture Slide Examples',
          static: 'Tetracycline, chloramphenicol, erythromycin (macrolides), lincomycin, clindamycin, sulfonamides, trimethoprim',
          cidal: 'Cephalosporins, penicillins, aminoglycosides, co-trimoxazole, fluoroquinolones, vancomycin, metronidazole'
        },
        {
          feature: 'Best Clinical Indications',
          static: 'Uncomplicated mild-to-moderate infections in immunocompetent patients.',
          cidal: 'Immunocompromised patients (HIV/AIDS, neutropenia, post-chemotherapy) or serious life-threatening deep infections (infective endocarditis, bacterial meningitis, sepsis, osteomyelitis).'
        }
      ],
      slideContradictionsNote: [
        'Erythromycin appears in both lecture slides: Macrolides are bacteriostatic at standard therapeutic doses (they can be bactericidal only at high concentrations against select strains). In exams, always categorize macrolides as bacteriostatic.',
        'Co-trimoxazole slide discrepancy: Sulfamethoxazole alone is bacteriostatic; Trimethoprim alone is bacteriostatic. Together, sequential enzymatic blockade makes them bactericidal via synergy. In an exam asking “co-trimoxazole is...”, look for “synergistic bactericidal combination”.'
      ],
      mnemonics: {
        staticMnemonic: 'ECSTaTiC',
        staticBreakdown: 'Erythromycin (macrolides), Clindamycin, Sulfonamides, Trimethoprim, Tetracyclines, Chloramphenicol (plus lincomycin, linezolid)',
        cidalMnemonic: 'VCR PAM-Q',
        cidalBreakdown: 'Vancomycin, Cephalosporins, Rifampicin, Penicillins, Aminoglycosides, Metronidazole, Quinolones (plus carbapenems)'
      },
      clinicalPearl:
        'Never combine a bactericidal beta-lactam with a bacteriostatic agent (e.g., penicillin + tetracycline). Penicillin kills bacteria by disrupting peptidoglycan cross-linking in actively dividing, growing cells. If a bacteriostatic drug halts cell replication, penicillin has no target and efficacy drops drastically (pharmacological antagonism).'
    }
  },

  // Part B: Exam Focus
  examFocus: {
    summary:
      'Options in Block 1 pharmacology papers are almost always PAIRS of drugs. Both drugs in the pair must satisfy the question stem. A single wrong drug invalidates the entire option.',
    frequencyTable: [
      {
        topic: 'Which drugs act on 30S or 50S subunit',
        frequency: 'Very High (Appeared in 5 papers)',
        typicalWording: '“Antibiotics that inhibit protein synthesis by acting on 50S / 30S subunit include...”',
        typicalDistractors: 'A pair combining a beta-lactam (cell wall) with a quinolone (DNA) or an inverted subunit'
      },
      {
        topic: 'Which drugs inhibit cell wall synthesis',
        frequency: 'High (Appeared in 4 papers)',
        typicalWording: '“Antibiotics that inhibit cell wall formation in bacteria include...”',
        typicalDistractors: 'Pairs of protein synthesis inhibitors (e.g., doxycycline + erythromycin)'
      },
      {
        topic: 'Bactericidal vs bacteriostatic classification',
        frequency: 'Medium (Appeared in 3 papers)',
        typicalWording: '“A bactericidal drug is...” or “Which of the following is bacteriostatic?”',
        typicalDistractors: 'Tetracycline, chloramphenicol, or macrolides mixed with beta-lactams'
      },
      {
        topic: 'Broad vs narrow spectrum identification',
        frequency: 'Medium (Appeared in 2 papers)',
        typicalWording: '“A narrow spectrum antibiotic is...”',
        typicalDistractors: 'Amoxicillin, tetracycline, ciprofloxacin (broad-spectrum decoys)'
      }
    ]
  },

  // Part C: Past-Paper Questions
  pastPaperQuestions: [
    {
      id: 'pharm-exam-q1',
      number: 1,
      examRef: 'Apr 2024 Supplementary, Q7',
      stem: 'The antibiotic that inhibit protein synthesis by acting on 50S subunit is:',
      options: [
        { key: 'A', text: 'Amoxicillin' },
        { key: 'B', text: 'Tetracycline' },
        { key: 'C', text: 'Ceftriaxone' },
        { key: 'D', text: 'Erythromycin' }
      ],
      correctAnswer: 'D',
      explanation:
        'Erythromycin is a macrolide that binds reversibly to the 50S ribosomal subunit, blocking translocation (preventing transfer of the nascent peptide chain and ribosome movement along mRNA).',
      wrongOptionsExplanation:
        'Amoxicillin (A) and ceftriaxone (C) are beta-lactam antibiotics that inhibit peptidoglycan cell wall synthesis. Tetracycline (B) also inhibits protein synthesis, but binds to the 30S subunit (blocking aminoacyl-tRNA attachment).',
      trapAlert:
        'The examiner places tetracycline (B) as a decoy to catch candidates who only memorize “protein synthesis” without distinguishing the 30S vs 50S subunit.'
    },
    {
      id: 'pharm-exam-q2',
      number: 2,
      examRef: 'Sept 2025 End of Block, Q6',
      stem: 'The antibiotics that inhibit protein synthesis by acting on 30S subunit include:',
      options: [
        { key: 'A', text: 'Amoxicillin, ceftriaxone' },
        { key: 'B', text: 'Doxycycline, gentamycin' },
        { key: 'C', text: 'Clindamycin, ciprofloxacin' },
        { key: 'D', text: 'Erythromycin, chloramphenicol' }
      ],
      correctAnswer: 'B',
      explanation:
        'Doxycycline (a tetracycline) blocks aminoacyl-tRNA binding at the 30S A-site. Gentamicin (an aminoglycoside) binds 30S ribosomal RNA, causing mRNA misreading and premature termination of protein chains. Both act on 30S (mnemonic: “AT 30”).',
      wrongOptionsExplanation:
        'Option A: Both amoxicillin and ceftriaxone inhibit cell wall synthesis. Option C: Clindamycin is 50S while ciprofloxacin inhibits DNA gyrase (mixed pair). Option D: Both erythromycin and chloramphenicol act on the 50S subunit.'
    },
    {
      id: 'pharm-exam-q3',
      number: 3,
      examRef: 'Sept 2024 CAT 1, Q10',
      stem: 'Antibiotics that inhibit protein synthesis by interfering with 30S subunit RNA include:',
      options: [
        { key: 'A', text: 'Amoxicillin, ceftriaxone' },
        { key: 'B', text: 'Doxycycline, gentamycin' },
        { key: 'C', text: 'Clindamycin, ciprofloxacin' },
        { key: 'D', text: 'Rifampicin, lincomycin' }
      ],
      correctAnswer: 'B',
      explanation:
        'Identical clinical logic to Q2. Doxycycline (tetracycline) and gentamicin (aminoglycoside) both target the 30S subunit. Remember the rule: “AT 30”.',
      wrongOptionsExplanation:
        'Option A: Cell wall synthesis inhibitors. Option C: Clindamycin (50S) + ciprofloxacin (DNA gyrase). Option D: Rifampicin inhibits DNA-dependent RNA polymerase (transcription, not translation) while lincomycin acts on 50S.',
      notes: '“30S subunit RNA” is slightly informal examiner wording referring to the 16S rRNA within the 30S ribosomal subunit.'
    },
    {
      id: 'pharm-exam-q4',
      number: 4,
      examRef: 'Apr 2025 End of Block, Q6',
      stem: 'Antibiotics that inhibit cell wall formation in bacteria include:',
      options: [
        { key: 'A', text: 'Amoxicillin, ceftriaxone' },
        { key: 'B', text: 'Linezolid, chloramphenicol' },
        { key: 'C', text: 'Doxycycline, erythromycin' },
        { key: 'D', text: 'Gentamycin, lincomycin' }
      ],
      correctAnswer: 'A',
      explanation:
        'Amoxicillin (aminopenicillin) and ceftriaxone (3rd generation cephalosporin) are beta-lactam antibiotics. They bind penicillin-binding proteins (PBPs) and prevent transpeptidation (cross-linking) of bacterial peptidoglycan.',
      wrongOptionsExplanation:
        'Options B, C, and D are all protein synthesis inhibitors: Linezolid & chloramphenicol = 50S; Doxycycline (30S) + erythromycin (50S); Gentamicin (30S) + lincomycin (50S). None affect the cell wall.'
    },
    {
      id: 'pharm-exam-q5',
      number: 5,
      examRef: 'Sept 2023 End of Block, Q1',
      stem: 'The antibiotics that inhibit protein synthesis by acting on 50S subunit are:',
      options: [
        { key: 'A', text: 'Amoxicillin, ceftriaxone' },
        { key: 'B', text: 'Doxycycline, Gentamycin' },
        { key: 'C', text: 'Clindamycin, Ciprofloxacin' },
        { key: 'D', text: 'Erythromycin, Chloramphenicol' }
      ],
      correctAnswer: 'D',
      explanation:
        'Both erythromycin and chloramphenicol bind reversibly to the 50S ribosomal subunit. Erythromycin blocks translocation; chloramphenicol inhibits peptidyl transferase (mnemonic: “CCEL at 50”).',
      wrongOptionsExplanation:
        'Option A: Cell wall beta-lactams. Option B: 30S ribosomal inhibitors. Option C: Clindamycin is 50S, but ciprofloxacin is a fluoroquinolone that inhibits DNA gyrase, invalidating the pair.'
    }
  ] as StudyExamQuestion[],

  // Part D: Recycled Pairs Analysis
  recycledOptionPairs: [
    {
      pair: 'Amoxicillin + ceftriaxone',
      action: 'Cell wall peptidoglycan synthesis (Beta-lactams)',
      badge: 'Cell Wall',
      color: 'indigo'
    },
    {
      pair: 'Doxycycline + gentamicin',
      action: '30S ribosomal subunit protein synthesis (“AT 30”) ',
      badge: '30S Ribosome',
      color: 'purple'
    },
    {
      pair: 'Clindamycin + ciprofloxacin',
      action: 'Mixed decoy: 50S (clindamycin) + DNA gyrase (ciprofloxacin) — NEVER correct for a single target question!',
      badge: 'Mixed Decoy (Always Wrong)',
      color: 'rose'
    },
    {
      pair: 'Erythromycin + chloramphenicol',
      action: '50S ribosomal subunit protein synthesis (“CCEL at 50”) ',
      badge: '50S Ribosome',
      color: 'amber'
    }
  ],

  // Part E: Strategy & Master Table
  rulesToGetTheseRight: [
    'Read the stem for the biochemical target first (cell wall? 30S? 50S? DNA?).',
    'Eliminate any pair containing “-cillin” or “ceph-/cef-” unless the stem explicitly asks for cell wall.',
    'Mentally group the drugs on scrap paper: 30S = A, T | 50S = C, C, E, L | Wall = Beta-lactams, Vancomycin | DNA = Quinolones | RNA = Rifampicin.',
    'Both drugs in the pair must match the question target. If one drug is wrong, eliminate the entire choice immediately.',
    '“Mixed pairs” (such as Clindamycin + Ciprofloxacin) are standard examiner distractors and are never the correct answer.',
    'Watch out for spelling variations (gentamycin vs gentamicin, cetrizine vs cetirizine) — they denote the exact same therapeutic entity.'
  ],

  masterComparisonTable: [
    {
      drugClass: 'Penicillins, Cephalosporins, Carbapenems',
      target: 'Cell wall (PBPs cross-linking)',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Contain beta-lactam ring; allergic cross-reactions (5–10%); bactericidal to dividing cells.',
      badgeColor: 'indigo'
    },
    {
      drugClass: 'Vancomycin (Glycopeptides)',
      target: 'Cell wall (D-Ala-D-Ala terminus)',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Gram-positive only (cannot cross Gram-negative outer membrane); MRSA; Red Man syndrome with rapid IV infusion.',
      badgeColor: 'sky'
    },
    {
      drugClass: 'Aminoglycosides (Gentamicin, Amikacin)',
      target: '30S ribosomal subunit',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Ototoxicity & nephrotoxicity; concentration-dependent killing; IV/IM only (poor oral bioavailability).',
      badgeColor: 'purple'
    },
    {
      drugClass: 'Tetracyclines (Doxycycline, Tetracycline)',
      target: '30S ribosomal subunit',
      staticOrCidal: 'Static',
      rememberPearls: 'Binds calcium/iron (chelation); tooth discoloration & bone growth arrest in children <8 yrs; photosensitivity.',
      badgeColor: 'purple'
    },
    {
      drugClass: 'Macrolides (Erythromycin, Azithromycin)',
      target: '50S ribosomal subunit',
      staticOrCidal: 'Static',
      rememberPearls: 'Motilin receptor stimulation (GI cramps); CYP3A4 enzyme inhibition; QT interval prolongation.',
      badgeColor: 'amber'
    },
    {
      drugClass: 'Clindamycin (Lincosamides)',
      target: '50S ribosomal subunit',
      staticOrCidal: 'Static',
      rememberPearls: 'Excellent anaerobic & Gram-positive coverage; highest risk of Clostridioides difficile colitis.',
      badgeColor: 'amber'
    },
    {
      drugClass: 'Chloramphenicol',
      target: '50S ribosomal subunit',
      staticOrCidal: 'Static',
      rememberPearls: 'Dose-dependent bone marrow suppression & aplastic anemia; Grey Baby Syndrome in neonates (immature glucuronidation).',
      badgeColor: 'amber'
    },
    {
      drugClass: 'Fluoroquinolones (Ciprofloxacin, Levofloxacin)',
      target: 'DNA gyrase (topoisomerase II) & topoisomerase IV',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Achilles tendonitis & tendon rupture; contraindicated in pregnancy and growing children (cartilage erosion).',
      badgeColor: 'rose'
    },
    {
      drugClass: 'Rifampicin (Rifamycins)',
      target: 'DNA-dependent RNA polymerase (Transcription)',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Orange/red discoloration of bodily fluids (urine, tears, sweat); potent hepatic CYP450 enzyme inducer.',
      badgeColor: 'rose'
    },
    {
      drugClass: 'Sulfonamides + Trimethoprim (Co-trimoxazole)',
      target: 'Folic acid pathway (PABA → DHFA → THFA)',
      staticOrCidal: 'Static alone, Cidal together',
      rememberPearls: 'Sequential enzymatic blockade = synergy; Stevens-Johnson syndrome risk; crystalluria (encourage fluid intake).',
      badgeColor: 'emerald'
    },
    {
      drugClass: 'Metronidazole',
      target: 'DNA strand breakage (free radical metabolites)',
      staticOrCidal: 'Cidal',
      rememberPearls: 'Obligate anaerobes & protozoa (amoeba, giardia, trichomonas); disulfiram-like reaction with alcohol; metallic taste.',
      badgeColor: 'teal'
    }
  ] as ComparisonTableRow[],

  // Part F: Mini Self-Test
  miniSelfTest: [
    {
      id: 'st-1',
      question: 'Which ribosomal subunit does gentamicin bind?',
      options: ['(a) 30S', '(b) 50S', '(c) 40S', '(d) 60S'],
      correctIndex: 0,
      explanation: 'Gentamicin is an aminoglycoside. Remember the mnemonic “AT 30”: Aminoglycosides and Tetracyclines bind the 30S subunit.'
    },
    {
      id: 'st-2',
      question: 'Humans do not synthesize folic acid but obtain it from food, while bacteria must synthesize it. Which antibiotic class exploits this difference?',
      options: ['(a) Macrolides', '(b) Sulfonamides & Trimethoprim', '(c) Aminoglycosides', '(d) Rifamycins'],
      correctIndex: 1,
      explanation: 'Sulfonamides block dihydropteroate synthase and trimethoprim blocks dihydrofolate reductase. Human cells take up preformed folate.'
    },
    {
      id: 'st-3',
      question: 'Which of the following is clinically categorized as bacteriostatic at usual doses?',
      options: ['(a) Gentamicin', '(b) Ceftriaxone', '(c) Tetracycline', '(d) Ciprofloxacin'],
      correctIndex: 2,
      explanation: 'Tetracycline is bacteriostatic (mnemonic “ECSTaTiC”: Erythromycin, Clindamycin, Sulfonamides, Trimethoprim, Tetracyclines, Chloramphenicol). Gentamicin, ceftriaxone, and ciprofloxacin are all bactericidal.'
    },
    {
      id: 'st-4',
      question: 'A narrow-spectrum antibiotic is defined as one that:',
      options: [
        '(a) Acts on a wide variety of Gram-positive and Gram-negative bacteria',
        '(b) Acts on one specific type or a restricted group of microorganisms',
        '(c) Kills both viruses and bacteria',
        '(d) Acts only on fungal cell walls'
      ],
      correctIndex: 1,
      explanation: 'Narrow-spectrum drugs target specific restricted organisms (e.g., isoniazid for mycobacteria, vancomycin for Gram-positives). Broad-spectrum agents act across diverse bacterial classes.'
    }
  ] as SelfTestQuestion[],

  // Part G: Summary
  summaryBullets: [
    'Antimicrobial is the broad umbrella covering antibacterials, antivirals, antifungals, and antiparasitics; Antibiotic specifically kills or stops bacteria.',
    'Three classification axes: Mechanism of action (target), Spectrum of activity (narrow vs broad), and Mode of action (bacteriostatic vs bactericidal).',
    'Five bacterial targets (W-M-P-N-F): Cell Wall, Cell Membrane, Protein synthesis (Ribosomes), Nucleic acids (DNA/RNA), Folic acid synthesis.',
    'Ribosome subunits mnemonic: “AT 30, CCEL at 50” (30S = Aminoglycosides + Tetracyclines; 50S = Chloramphenicol, Clindamycin, Erythromycin/macrolides, Linezolid).',
    'Cell wall inhibitors: Beta-lactams (penicillins, cephalosporins, carbapenems, monobactams) and Vancomycin.',
    'Nucleic acid inhibitors: Fluoroquinolones block DNA gyrase; Rifampicin blocks RNA polymerase.',
    'Mode of action mnemonics: Bacteriostatic = “ECSTaTiC”; Bactericidal = “VCR PAM-Q”. Never combine a bactericidal beta-lactam with a bacteriostatic agent due to antagonism.',
    'Master the recycled Block 1 past paper pairs: Amoxicillin + Ceftriaxone (Cell Wall), Doxycycline + Gentamicin (30S), Erythromycin + Chloramphenicol (50S), Clindamycin + Ciprofloxacin (Mixed Decoy).'
  ]
};
