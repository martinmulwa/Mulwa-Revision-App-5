/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 4: CEPHALOSPORINS
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

export interface CephalosporinGenerationRow {
  generation: string;
  drugs: string;
  spectrum: string;
  keyExamFacts: string;
}

export interface CephalosporinsExamFocusRow {
  topic: string;
  sourcePapers: string;
  trap: string;
}

export const ANTIBIOTICS_SECTION_4 = {
  id: 'block1-pharmacology1-antibiotics-cephalosporins',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 4: CEPHALOSPORINS',
  shortTitle: '4. Cephalosporins',
  subtitle: '1st to 5th Generations, BBB Penetration, Ceftriaxone Pearls, LAME Rule & Cross-Allergies',
  estimatedReadTime: '13 min read',
  lectureSlidesCovered:
    'Mechanism (same as penicillins) → Clinical Uses → 1st, 2nd, 3rd, 4th, 5th generations → Side effects (cross-reactivity, pregnancy category B)',
  whyThisMatters:
    'Cephalosporins are tested every single year in Block 1 exams (Apr 2024 Supp, Sept 2023, Sept 2024 CAT 1, Sept 2012 CAT 2, Apr 2019 Special, Apr 2025). Examiners focus on the generation progression ladder (1st vs 3rd), blood-brain barrier penetration in bacterial meningitis (ceftriaxone & cefepime), oral vs parenteral route selection, the LAME non-coverage rule, and the 5% to 10% cross-reactivity risk in penicillin-allergic patients.',

  // =========================================================
  // PART A: THEORY
  // =========================================================
  theory: {
    // A1: What are cephalosporins?
    foundations: {
      nature: 'Beta-lactam antibiotics closely related chemically to penicillins, derived from the fungus Acremonium (formerly Cephalosporium).',
      mechanism: 'Identical mechanism to penicillins: they bind to penicillin-binding proteins (PBPs) and block transpeptidase cross-linking of peptidoglycan in the bacterial cell wall → cell wall weakness → lysis and cell death → bactericidal.',
      uses: 'Pneumonia, strep throat, staphylococcal infections, tonsillitis, bronchitis, otitis media, skin and soft tissue infections, gonorrhoea, urinary tract infections (UTI), and surgical prophylaxis; cephalexin is also notably used for bone infections (osteomyelitis).',
      whyGenerations: 'Synthetic modification of the 7-aminocephalosporanic acid nucleus produced successive "generations" with broader Gram-negative coverage, enhanced resistance to bacterial beta-lactamases, and superior tissue/CSF penetration.'
    },

    // A2: The generations
    goldenRule:
      'As generation goes UP (1 → 3), Gram-negative cover goes UP and Gram-positive cover goes slightly down. The 4th generation has excellent coverage of BOTH (plus Pseudomonas). The 5th generation adds anti-MRSA activity.',

    generationsTable: [
      {
        generation: '1st Generation',
        drugs: 'Cephradine (Velosef), Cephalexin (Ceporex), Cefadroxil (Biodroxil, Duricef); Cefazolin (IV)',
        spectrum: 'Excellent Gram-positive (staphylococci, streptococci); poor/variable Gram-negative activity.',
        keyExamFacts:
          'Oral agents (cephalexin, cefadroxil) used for skin/soft tissue and uncomplicated cystitis (UTI). Cefazolin is IV drug of choice for surgical prophylaxis.'
      },
      {
        generation: '2nd Generation',
        drugs: 'Cefaclor (Bacticlor), Cefuroxime (Zinnat); Cefoxitin and Cefotetan',
        spectrum:
          'Gram-positive plus expanded Gram-negative (Haemophilus influenzae, Moraxella, Proteus, Klebsiella). Cefoxitin & Cefotetan also cover Bacteroides fragilis (anaerobes).',
        keyExamFacts:
          'Used for respiratory infections, sinusitis, otitis media, and UTI. Cefoxitin used in intra-abdominal and pelvic surgical prophylaxis.'
      },
      {
        generation: '3rd Generation',
        drugs:
          'Ceftriaxone (Rocephin), Cefotaxime, Ceftazidime (Fortum; anti-Pseudomonas), Cefixime (Suprax, oral), Cefoperazone (Cefobid), Cefdinir (Omnicef)',
        spectrum:
          'Much expanded Gram-negative coverage; some have reduced Gram-positive potency compared to 1st gen.',
        keyExamFacts:
          'Convenient dosing, expensive hospital agents. Ceftriaxone & Cefotaxime cross the inflamed blood-brain barrier (BBB) → first-line for bacterial meningitis.'
      },
      {
        generation: '4th Generation',
        drugs: 'Cefepime, Cefpirome, Cefluprenam, Cefozopran (slide spelling "Cefasopran")',
        spectrum:
          'Broad-spectrum covering BOTH Gram-positive and Gram-negative organisms including Pseudomonas aeruginosa.',
        keyExamFacts:
          'Highly resistant to beta-lactamases; crosses the BBB effectively. Indicated for severe hospital-acquired infections, febrile neutropenia, and refractory meningitis.'
      },
      {
        generation: '5th Generation',
        drugs: 'Ceftaroline (Teflaro), Ceftobiprole (Zeftera)',
        spectrum:
          'Unique affinity for altered PBP2a, conferring activity against Methicillin-Resistant Staphylococcus aureus (MRSA), penicillin-resistant pneumococci, and Enterococcus faecalis.',
        keyExamFacts:
          'Reserved strictly for complicated skin/soft tissue infections and community-acquired pneumonia involving confirmed or suspected MRSA.'
      }
    ] as CephalosporinGenerationRow[],

    noteCheckSlideDetail:
      'The lecture slide notes that "4th generation cephalosporins can cross the BBB and are effective in bacterial meningitis". This is biologically true; however, Ceftriaxone and Cefotaxime (3rd generation) remain the standard everyday empirical first-line meningitis drugs, with Cefepime reserved when Pseudomonas or multidrug-resistant nosocomial pathogens are suspected.',

    // A3: Routes of Administration & Ceftriaxone Cautions
    routes: {
      oral: 'Cephalexin, Cefadroxil, Cefaclor, Cefuroxime axetil, Cefixime.',
      parenteral:
        'Ceftriaxone (administered IV or deep IM reconstituted with 1% lidocaine to reduce pain), Cefotaxime, Ceftazidime, Cefepime, Cefazolin.',
      ceftriaxoneCautions: [
        'Biliary Sludging: Excreted predominantly via bile (40%) and urine (60%); can precipitate in gallbladder causing pseudo-cholelithiasis (biliary colic).',
        'Neonatal Calcium Incompatibility: NEVER mix or co-administer Ceftriaxone with calcium-containing IV solutions (e.g. Ringer Lactate) in neonates ≤28 days → causes fatal calcium-ceftriaxone precipitates in lungs and kidneys.',
        'Neonatal Kernicterus: Displaces bilirubin from albumin binding sites, contraindicating use in jaundiced neonates.'
      ]
    },

    // A4: What Cephalosporins do NOT cover (LAME Mnemonic)
    lameRule: {
      mnemonic: 'L·A·M·E',
      explanation:
        'Cephalosporins (generations 1 through 4) possess an intrinsic microbiological "blind spot" and fail to cover four major pathogen groups:',
      breakdown: [
        { letter: 'L', pathogen: 'Listeria monocytogenes', clinicalPearl: 'Requires Ampicillin for neonatal/elderly meningitis' },
        { letter: 'A', pathogen: 'Atypicals (Mycoplasma, Chlamydia, Legionella)', clinicalPearl: 'Lack cell walls; requires Macrolides or Doxycycline' },
        { letter: 'M', pathogen: 'MRSA (Methicillin-Resistant S. aureus)', clinicalPearl: 'Resistant to Gens 1–4; only 5th gen (Ceftaroline) or Vancomycin active' },
        { letter: 'E', pathogen: 'Enterococci (Enterococcus faecalis/faecium)', clinicalPearl: 'Inherently resistant; requires Ampicillin, Vancomycin, or Linezolid' }
      ]
    },

    // A5: Side Effects & Cross-Allergy
    sideEffects: {
      common: 'Diarrhoea, nausea, mild epigastric discomfort, vomiting.',
      hypersensitivity:
        'Cross-reactivity with penicillin allergy occurs in approximately 5% to 10% of patients due to shared beta-lactam core structure. If patient experienced mild rash to penicillin, cephalosporins can be used with caution; if patient had severe IgE-mediated anaphylaxis, angioedema, or urticaria, cephalosporins are strictly avoided.',
      pregnancyCategory:
        'FDA Pregnancy Category B: Safe and widely utilized in pregnancy and breastfeeding mothers.',
      extras: [
        'Clostridioides difficile Colitis: Broad-spectrum agents (especially 3rd gen) disrupt colonic flora, predisposing to pseudomembranous colitis.',
        'Hypoprothrombinemia & Bleeding: Cephalosporins containing an N-methylthiotetrazole (NMTT) side chain (e.g. Cefoperazone, Cefotetan) inhibit vitamin K epoxide reductase, prolonging bleeding time (reversed by Vitamin K).',
        'Disulfiram-like Alcohol Reaction: NMTT side-chain drugs block aldehyde dehydrogenase; alcohol consumption causes severe flushing, tachycardia, and vomiting.'
      ]
    }
  },

  // =========================================================
  // PART B: EXAM FOCUS & FREQUENCY ANALYSIS
  // =========================================================
  examFocus: {
    summary:
      'Examiners heavily interrogate the generation progression ladder: recognizing 1st generation as narrow Gram-positive for uncomplicated infections (cystitis, skin); identifying Ceftriaxone as a 3rd-generation parenteral agent with BBB penetration; knowing that 4th-generation Cefepime penetrates the BBB for meningitis; matching Cefuroxime to the cephalosporin family; and avoiding second-line cephalosporins for simple cystitis.',
    frequencyTable: [
      {
        topic: '1st Generation = Strong Gram-positive activity (staph/strep), weak Gram-negative',
        sourcePapers: 'Apr 2024 Supp (Q9), Sept 2023 (Q2)',
        trap: 'Selecting options claiming strong Gram-negative cover, beta-lactamase immunity, or meningitis indication'
      },
      {
        topic: 'Ceftriaxone = 3rd Generation, parenteral only (IV/IM), crosses BBB, once-daily',
        sourcePapers: 'Sept 2024 CAT 1 (Q12), Sept 2012 CAT 2 (Q10)',
        trap: 'Believing it can be administered orally or is first-line drug of choice for simple cystitis'
      },
      {
        topic: '4th Generation (Cefepime) in bacterial meningitis → Crosses Blood-Brain Barrier',
        sourcePapers: 'Sept 2024 CAT 1 (Q19)',
        trap: 'Choosing generic answers like "resists beta-lactamase" or "broad spectrum" instead of the site-specific BBB mechanism'
      },
      {
        topic: 'Cefuroxime = Cephalosporin class matching ("cef-" prefix)',
        sourcePapers: 'Apr 2019 Special (Q9)',
        trap: 'Matching to penicillin, tetracycline, or glycopeptide'
      },
      {
        topic: 'Uncomplicated Cystitis → Oral first-generation cephalosporin (Cefadroxil)',
        sourcePapers: 'Apr 2025 (Q10)',
        trap: 'Choosing reserve parenteral drugs (Ceftriaxone, Gentamicin) or toxic fluoroquinolones (Levofloxacin)'
      }
    ] as CephalosporinsExamFocusRow[]
  },

  // =========================================================
  // PART C & D: PAST-PAPER QUESTIONS & EXPLANATIONS
  // =========================================================
  pastPaperQuestions: [
    {
      id: 'sec4-q1-apr2024-supp',
      number: 1,
      examRef: 'Apr 2024 Supp, Q9',
      stem: 'First generation Cephalosporins:',
      options: [
        { key: 'A', text: 'Have strong activity against gram-negative bacteria' },
        { key: 'B', text: 'Are resistant to beta lactamases' },
        { key: 'C', text: 'Are strongly active against gram positive bacteria' },
        { key: 'D', text: 'Have extended spectrum against klebsiella' }
      ],
      correctAnswer: 'C',
      explanation:
        'First-generation cephalosporins (e.g. cephalexin, cefazolin, cefadroxil) have excellent, potent antimicrobial activity against Gram-positive cocci (Staphylococcus aureus, Streptococcus pneumoniae, and Streptococcus pyogenes), with modest and variable activity against Gram-negative bacilli.',
      wrongOptionsExplanation:
        'Option A is false because strong Gram-negative activity is the hallmark of 3rd generation cephalosporins. Option B is false because 1st-generation drugs are readily inactivated by Gram-negative beta-lactamases (they only resist staphylococcal penicillinase). Option D is false because extended spectrum against Klebsiella requires 3rd or 4th generation agents.',
      trapAlert:
        'Remember the Golden Rule: 1st gen = predominantly Gram-positive. As you move from 1st to 3rd generation, Gram-negative coverage dramatically increases.'
    },
    {
      id: 'sec4-q2-sept2023',
      number: 2,
      examRef: 'Sept 2023, Q2',
      stem: 'First generation Cephalosporins:',
      options: [
        { key: 'A', text: 'Has strong activity against gram-negative bacteria' },
        { key: 'B', text: 'Are indicated for meningitis and encephalitis' },
        { key: 'C', text: 'Are effective where body defense is adequate' },
        { key: 'D', text: 'Only given through the parenteral route' }
      ],
      correctAnswer: 'C',
      explanation:
        'First-generation cephalosporins are narrow-to-moderate spectrum agents utilized for mild-to-moderate community-acquired infections in immunocompetent patients with adequate host defenses.',
      wrongOptionsExplanation:
        'Option A is definitely false (Gram-negative coverage is weak). Option B is definitely false because 1st generation agents do NOT cross the blood-brain barrier and are strictly contraindicated in meningitis (3rd gen Ceftriaxone/Cefotaxime cross the BBB). Option D is false because cephalexin and cefadroxil are widely prescribed as oral capsules and suspensions. In exam technique, when an option wording is modest, eliminate the three unequivocally false statements.',
      trapAlert:
        'Exam Technique: Always eliminate the definite falsehoods (A, B, and D are factually impossible for 1st gen cephalosporins).'
    },
    {
      id: 'sec4-q3-sept2024-cat1',
      number: 3,
      examRef: 'Sept 2024 CAT 1, Q12',
      stem: 'A true statement on ceftriaxone is:',
      options: [
        { key: 'A', text: 'It can be given orally' },
        { key: 'B', text: 'It is a third generation cephalosporin' },
        { key: 'C', text: 'Has extended spectrum on gram positive bacteria' },
        { key: 'D', text: 'It is the drug of choice for urinary tract infections' }
      ],
      correctAnswer: 'B',
      explanation:
        'Ceftriaxone (Rocephin) is a prototypical third-generation cephalosporin featuring broad Gram-negative coverage, high beta-lactamase stability, excellent CSF penetration, and a long plasma half-life (~8 hours) permitting once-daily parenteral dosing.',
      wrongOptionsExplanation:
        'Option A is false because ceftriaxone is not absorbed through the gastrointestinal tract and is strictly parenteral (IV/IM). Option C is false because 3rd generation agents trade off Gram-positive potency in exchange for extended Gram-negative spectrum. Option D is false because uncomplicated cystitis/UTI is managed with oral first-line agents (nitrofurantoin, cefadroxil, cephalexin); ceftriaxone is reserved for complicated pyelonephritis or urosepsis under antimicrobial stewardship.',
      trapAlert:
        'Never prescribe IV ceftriaxone as first line for a simple, uncomplicated outpatient UTI!'
    },
    {
      id: 'sec4-q4-sept2024-cat1',
      number: 4,
      examRef: 'Sept 2024 CAT 1, Q19',
      stem: 'Fourth generation cephalosporins are used in treatment of bacterial meningitis because, they:',
      options: [
        { key: 'A', text: 'Cause less toxicity' },
        { key: 'B', text: 'Can pass through blood brain barrier' },
        { key: 'C', text: 'Resist beta lactamase enzymes' },
        { key: 'D', text: 'Are broad spectrum antibiotics' }
      ],
      correctAnswer: 'B',
      explanation:
        'To effectively eradicate pathogens causing bacterial meningitis within the subarachnoid space, an antimicrobial agent must cross the blood-brain barrier (BBB) and achieve therapeutic concentrations in the cerebrospinal fluid (CSF). Fourth-generation cephalosporins (such as Cefepime) possess zwitterionic properties allowing rapid BBB penetration.',
      wrongOptionsExplanation:
        'While Options C (beta-lactamase resistance) and D (broad spectrum) are true biochemical characteristics of 4th generation cephalosporins, they do NOT explain the anatomical rationale for their use in meningitis. Clinical Rule: When an exam stem asks "because...", choose the property that specifically matches the site of infection (meningitis → BBB crossing).',
      trapAlert:
        'Notice the causal word "because". The specific requirement for any central nervous system infection is BBB penetration!'
    },
    {
      id: 'sec4-q5-sept2012-cat2',
      number: 5,
      examRef: 'Sept 2012 CAT 2, Q10',
      stem: 'Match the drug with its corresponding class: Ceftriaxone',
      options: [
        { key: 'A', text: 'Glycopeptide' },
        { key: 'B', text: 'Cephalosporin' },
        { key: 'C', text: 'Carbapenems' },
        { key: 'D', text: 'Macrolide' }
      ],
      correctAnswer: 'B',
      explanation:
        'Ceftriaxone is a third-generation cephalosporin. Fast classification rule: Drugs with the prefix "cef-" or "ceph-" belong to the cephalosporin family.',
      wrongOptionsExplanation:
        'Glycopeptides include vancomycin and teicoplanin. Carbapenems include meropenem and imipenem. Macrolides include erythromycin, clarithromycin, and azithromycin.'
    },
    {
      id: 'sec4-q6-apr2019-special',
      number: 6,
      examRef: 'Apr 2019 Special, Q9',
      stem: 'Match the drug with the corresponding class: Cefuroxime',
      options: [
        { key: 'A', text: 'Penicillin' },
        { key: 'B', text: 'Tetracycline' },
        { key: 'C', text: 'Cephalosporin' },
        { key: 'D', text: 'Glycopeptide' }
      ],
      correctAnswer: 'C',
      explanation:
        'Cefuroxime (Zinnat) is a second-generation cephalosporin (identifiable by the "cef-" prefix).',
      wrongOptionsExplanation:
        'Penicillins end in "-cillin" (e.g. ampicillin). Tetracyclines end in "-cycline" (e.g. doxycycline). Glycopeptides include vancomycin.'
    },
    {
      id: 'sec4-q7-apr2025',
      number: 7,
      examRef: 'Apr 2025, Q10',
      stem: 'Treatment of choice for cystitis is:',
      options: [
        { key: 'A', text: 'Levofloxacin' },
        { key: 'B', text: 'Gentamycin' },
        { key: 'C', text: 'Ceftriaxone' },
        { key: 'D', text: 'Cefadroxil' }
      ],
      correctAnswer: 'D',
      explanation:
        'Acute uncomplicated cystitis is a superficial lower urinary tract infection appropriately managed with oral antimicrobial therapy. First-generation oral cephalosporins like Cefadroxil (or cephalexin / nitrofurantoin) achieve high urinary concentrations and are safe, effective outpatient treatments.',
      wrongOptionsExplanation:
        'Option A (levofloxacin) is a broad-spectrum fluoroquinolone that should NOT be used for uncomplicated cystitis due to serious safety warnings (tendon rupture, QT prolongation, aortic aneurysm) and rising resistance. Options B (gentamicin) and C (ceftriaxone) are potent parenteral agents reserved for severe pyelonephritis, complicated urosepsis, or inpatient multidrug-resistant infections.',
      trapAlert:
        'Do not overtreat simple outpatient bladder infections with heavy hospital injectables (ceftriaxone, gentamicin) or reserve fluoroquinolones. Oral 1st-generation cephalosporins (Cefadroxil) are ideal!'
    }
  ] as StudyExamQuestion[],

  // =========================================================
  // PART E: STRATEGY & HOW TO ALWAYS GET THESE RIGHT
  // =========================================================
  rulesToGetTheseRight: [
    'Prefix Rule: "cef-" or "ceph-" prefix = Cephalosporin = beta-lactam = cell wall inhibitor = bactericidal.',
    'Generation Ladder: 1st gen = Gram-positive; 2nd gen = Gram-positive + expanded Gram-negative (+ anaerobes with cefoxitin/cefotetan); 3rd gen = expanded Gram-negative + BBB crossing (meningitis); 4th gen = broad Gram-positive & Gram-negative incl. Pseudomonas; 5th gen = MRSA activity.',
    'Ceftriaxone Core Pearls: Third generation, parenteral ONLY (IV/IM once daily), penetrates blood-brain barrier (meningitis), biliary sludge side effect, NEVER co-administer with IV calcium in neonates.',
    'Route Triage: Oral cephalosporins (cephalexin, cefadroxil) for mild outpatient infections (cystitis, skin). Parenteral ceftriaxone/cefotaxime for severe inpatient infections (sepsis, meningitis, gonorrhoea).',
    'Cross-Allergy Awareness: Cephalosporins have a 5% to 10% cross-reactivity with penicillins. If patient had severe IgE anaphylaxis to penicillin, all cephalosporins are contraindicated.',
    'Antimicrobial Stewardship: Ceftriaxone and Cefuroxime are second-line reserve agents for routine pneumonia and UTIs; do not use them when narrower oral drugs suffice.',
    'The "LAME" Blind Spot: Cephalosporins lack coverage against Listeria, Atypicals, MRSA (gens 1–4), and Enterococci. Always remember why pneumonia regimens pair cephalosporins with macrolides!'
  ],

  memoryAids: [
    {
      title: 'Generation Ladder Summary',
      mnemonic: '1st = 1-Gram-Positive (staph/strep), 3rd = 3-Gram-Negative.',
      breakdown: '1st generation excels against Gram-positives; 3rd generation expands dramatically against Gram-negatives.'
    },
    {
      title: 'LAME Non-Coverage Mnemonic',
      mnemonic: 'L·A·M·E = What Cephalosporins Miss',
      breakdown: 'Listeria, Atypicals (Mycoplasma/Chlamydia), MRSA (except 5th gen), Enterococci.'
    },
    {
      title: '5th Generation MRSA Rule',
      mnemonic: 'Fifth fights MRSA',
      breakdown: 'Ceftaroline and Ceftobiprole are the only cephalosporins active against MRSA.'
    },
    {
      title: '4th Generation Broad + Brain',
      mnemonic: 'Fourth is Four-ever (broad) and goes to the Brain',
      breakdown: 'Cefepime covers Gram-positives, Gram-negatives, Pseudomonas, and penetrates the BBB.'
    }
  ],

  // =========================================================
  // PART F: MINI SELF-TEST
  // =========================================================
  miniSelfTest: [
    {
      id: 'sec4-st-1',
      question: 'A paediatric patient presenting with acute bacterial meningitis requires an antibiotic that reliably penetrates the blood-brain barrier into the CSF. Which cephalosporin is the primary choice?',
      options: [
        'Cefalexin',
        'Ceftriaxone',
        'Cefadroxil',
        'Nystatin'
      ],
      correctIndex: 1,
      explanation:
        'Ceftriaxone (a 3rd-generation cephalosporin) crosses the inflamed blood-brain barrier to achieve high therapeutic bactericidal levels in the cerebrospinal fluid, making it standard first-line therapy for bacterial meningitis. First-generation agents (cefalexin, cefadroxil) cannot cross the BBB.'
    },
    {
      id: 'sec4-st-2',
      question: 'Which generation of cephalosporins possesses specific microbiological activity against Methicillin-Resistant Staphylococcus aureus (MRSA)?',
      options: [
        '1st Generation',
        '2nd Generation',
        '3rd Generation',
        '5th Generation'
      ],
      correctIndex: 3,
      explanation:
        '5th-generation cephalosporins (ceftaroline, ceftobiprole) were engineered with high binding affinity for modified PBP2a, conferring unique activity against MRSA. Generations 1 through 4 are ineffective against MRSA.'
    },
    {
      id: 'sec4-st-3',
      question: 'A patient with a documented history of severe anaphylaxis (laryngeal edema and hypotension) to amoxicillin presents with an infection. What is the correct clinical nursing action regarding cephalosporin administration?',
      options: [
        'Administer ceftriaxone freely because it has a different chemical nucleus',
        'Avoid all cephalosporins due to 5% to 10% cross-allergenicity unless specialist guidance is given',
        'Administer a double dose of cefuroxime together with an oral antihistamine',
        'Administer oral cephalexin with orange juice to reduce histamine release'
      ],
      correctIndex: 1,
      explanation:
        'Cephalosporins share a beta-lactam ring with penicillins and carry a 5% to 10% risk of immunological cross-reactivity. In patients with severe IgE-mediated anaphylaxis to penicillins, all cephalosporins should be strictly avoided.'
    },
    {
      id: 'sec4-st-4',
      question: 'According to the "LAME" mnemonic, which of the following pathogens is intrinsically NOT covered by standard cephalosporins?',
      options: [
        'Streptococcus pyogenes',
        'Escherichia coli',
        'Enterococci',
        'Klebsiella pneumoniae'
      ],
      correctIndex: 2,
      explanation:
        'The LAME rule identifies organisms resistant to cephalosporins: Listeria, Atypicals, MRSA (gens 1-4), and Enterococci. Streptococcus, E. coli, and Klebsiella are susceptible to appropriate cephalosporin generations.'
    }
  ] as SelfTestQuestion[],

  // =========================================================
  // PART G: SECTION SUMMARY
  // =========================================================
  summaryBullets: [
    'Cephalosporins are bactericidal beta-lactam antibiotics that inhibit cell wall synthesis identically to penicillins by blocking transpeptidase penicillin-binding proteins (PBPs).',
    'Generation Progression Ladder: 1st gen = predominantly Gram-positive cocci; 2nd gen = expanded Gram-negative coverage (+ anaerobes with cefoxitin); 3rd gen = high Gram-negative potency + BBB penetration; 4th gen = broadest Gram-positive/negative + Pseudomonas; 5th gen = unique anti-MRSA activity.',
    'Ceftriaxone (3rd generation): Parenteral only (IV or IM with lidocaine), once daily, penetrates the blood-brain barrier for meningitis, causes biliary sludging, and must NEVER be mixed with calcium IV fluids in neonates.',
    'First-generation oral agents (cephalexin, cefadroxil) are ideal first-line options for uncomplicated outpatient cystitis (UTIs) and skin/soft tissue infections.',
    'Cross-Allergy: Cephalosporins have a 5% to 10% cross-reactivity risk with penicillins. Strictly avoid in patients with severe, IgE-mediated penicillin anaphylaxis.',
    'The LAME Rule: Standard cephalosporins have an intrinsic gap and do NOT cover Listeria monocytogenes, Atypical respiratory pathogens, MRSA (except 5th gen), or Enterococci.',
    'Antimicrobial Stewardship: Ceftriaxone and cefuroxime are second-line reserve agents; preserve them for severe, complicated, or culture-confirmed resistant infections.'
  ]
};
