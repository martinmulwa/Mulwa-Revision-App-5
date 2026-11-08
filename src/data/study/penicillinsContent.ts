/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 3: The Main Antibiotic Classes (Overview) and PENICILLINS
 *
 * Full structured curriculum study material transcribed from lecture slides,
 * clinical exam blueprints, and Kenya Ministry of Health Paediatric Protocols.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import {
  StudyExamQuestion,
  SelfTestQuestion
} from './antibioticsContent';

export interface PenicillinGroupRow {
  groupNumber: number;
  groupName: string;
  drugs: string;
  spectrum: string;
  keyFacts: string;
}

export interface PenicillinsExamFocusRow {
  topic: string;
  sourcePapers: string;
  trap: string;
}

export const ANTIBIOTICS_SECTION_3 = {
  id: 'block1-pharmacology1-antibiotics-penicillins',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 3: The Main Antibiotic Classes (Overview) and PENICILLINS',
  shortTitle: '3. Penicillins',
  subtitle: 'Overview of Main Classes, Penicillin Groups, Depot Preparations, Paediatric Dosing, Anaphylaxis & Kenya Protocols',
  estimatedReadTime: '14 min read',
  lectureSlidesCovered:
    'Classes of antibiotics (overview list) → Penicillins (history, uses) → Narrow spectrum / penicillinase-resistant / broad spectrum / augmented penicillins → Side effects & Nursing Care',
  whyThisMatters:
    'Penicillins are the most frequently examined antibiotic class in Block 1 exams (Apr 2024 Supp, Sept 2025, Apr 2019 CAT 1, Sept 2024 CAT 1). Examiners routinely test spectrum differences (benzyl vs ampicillin), depot formulations (benzathine), anaphylaxis emergency management, paediatric dose arithmetic, and Kenya national pneumonia guidelines.',

  // =========================================================
  // PART A: THEORY
  // =========================================================
  theory: {
    // A1: Overview of main classes
    mainClassesOverview: [
      {
        name: 'Beta-lactams',
        members: 'Penicillins, cephalosporins, carbapenems, monobactams',
        mechanismHighlight: 'Cell wall synthesis inhibition via penicillin-binding proteins (PBPs)'
      },
      {
        name: 'Macrolides and ketolides',
        members: 'Erythromycin, clarithromycin, azithromycin, telithromycin',
        mechanismHighlight: '50S ribosomal protein synthesis inhibition'
      },
      {
        name: 'Aminoglycosides',
        members: 'Gentamicin, amikacin, tobramycin, streptomycin',
        mechanismHighlight: '30S ribosomal protein synthesis inhibition (bactericidal)'
      },
      {
        name: 'Fluoroquinolones',
        members: 'Ciprofloxacin, levofloxacin, norfloxacin',
        mechanismHighlight: 'DNA gyrase and topoisomerase IV inhibition'
      },
      {
        name: 'Tetracyclines & Amphenicols',
        members: 'Doxycycline, tetracycline, chloramphenicol',
        mechanismHighlight: '30S (tetracyclines) & 50S (chloramphenicol) protein synthesis inhibition'
      }
    ],

    // A2: What are penicillins?
    penicillinFoundations: {
      origin: 'Oldest class of antibiotics discovered by Alexander Fleming (from the mould Penicillium).',
      betaLactamRing: 'All beta-lactams (penicillins and cephalosporins) share a beta-lactam four-membered ring, which constitutes the active antibacterial core.',
      mechanism: 'They block the transpeptidase enzymes (penicillin-binding proteins / PBPs) that cross-link peptidoglycan in the cell wall. Weakened cell wall → osmotic pressure causes bacterium to swell and burst → bactericidal (kills). They only work on bacteria that are actively multiplying.',
      slideUses: 'Skin, dental, ear, respiratory, urinary infections, gonorrhoea. Also indicated for syphilis, rheumatic fever secondary prophylaxis, and bacterial meningitis.',
      safetyRationale: 'Human eukaryotic cells have no peptidoglycan cell wall; therefore, penicillins have very high selective toxicity and are among the safest antibiotics known, including in pregnancy and breastfeeding mothers. Their principal clinical danger is hypersensitivity / allergy.'
    },

    // A3: The four groups
    fourGroups: [
      {
        groupNumber: 1,
        groupName: 'Narrow spectrum (mainly Gram-positive)',
        drugs: 'Benzyl penicillin (Pen G, "X-pen"), Phenoxymethyl penicillin (Pen V)',
        spectrum: 'Streptococci, pneumococci, some Neisseria, Treponema pallidum (syphilis)',
        keyFacts: 'Benzyl penicillin (Pen G) is rapidly destroyed by gastric acid → administered IV/IM only. Phenoxymethyl penicillin (Pen V) is acid-stable → administered orally.'
      },
      {
        groupNumber: 2,
        groupName: 'Penicillinase-resistant (anti-staphylococcal)',
        drugs: 'Methicillin, oxacillin, flucloxacillin (and cloxacillin)',
        spectrum: 'Staphylococci that produce penicillinase (beta-lactamase)',
        keyFacts: 'A bulky acyl side chain sterically shields the beta-lactam ring from beta-lactamase hydrolysis. Not active against MRSA (which alters PBP2a). Take flucloxacillin 1 hour before food. Rare side effect: cholestatic jaundice.'
      },
      {
        groupNumber: 3,
        groupName: 'Broad spectrum (aminopenicillins)',
        drugs: 'Amoxicillin, ampicillin',
        spectrum: 'Gram-positive plus many Gram-negatives (E. coli, Proteus, H. influenzae)',
        keyFacts: 'Used for urinary tract infections (UTI), chest infections, otitis media. Readily destroyed by beta-lactamase. Amoxicillin has superior oral bioavailability compared to ampicillin.'
      },
      {
        groupNumber: 4,
        groupName: 'Augmented / potentiated penicillins',
        drugs: 'Augmentin (co-amoxiclav) = amoxicillin + clavulanic acid',
        spectrum: 'Broad spectrum plus beta-lactamase-producing bacteria',
        keyFacts: 'Clavulanic acid acts as a suicide inhibitor of beta-lactamase, protecting amoxicillin from destruction. Diarrhoea is common; rarely causes cholestatic jaundice.'
      }
    ],

    // Depot forms
    depotForms: {
      benzathine: {
        name: 'Benzathine penicillin',
        nature: 'Slow-release (depot) salt of benzyl penicillin with very low water solubility.',
        route: 'Given deep intramuscularly (IM) ONLY — NEVER IV (causes fatal pulmonary embolism / cardiac arrest).',
        indications: 'Syphilis (single dose curative for primary/secondary) and long-term secondary prophylaxis of Rheumatic Fever (given monthly).'
      },
      procaine: {
        name: 'Procaine penicillin',
        nature: 'Shorter-acting IM depot preparation of benzyl penicillin providing sustained blood levels for 24 hours.'
      }
    },

    // A4: Side effects
    sideEffects: [
      {
        category: 'Common & Mild',
        items: 'Nausea, vomiting, diarrhoea, abdominal discomfort, indigestion.'
      },
      {
        category: 'Hypersensitivity (Major Danger)',
        items: 'Urticaria, pruritus, angioedema, bronchospasm, and life-threatening anaphylactic shock.'
      },
      {
        category: 'High-Yield Clinical Extras',
        items: 'Superinfection (oral/vaginal candidiasis, Clostridioides difficile colitis), neurotoxicity / seizures with massive IV doses in renal failure, non-allergic maculopapular rash when ampicillin is given in infectious mononucleosis (glandular fever).'
      }
    ],

    // A5: Nursing care & anaphylaxis emergency protocol
    nursingCare: {
      checks: [
        'Always ask about and verify allergy history before administering the very first dose; document findings clearly.',
        'Screen for cross-allergenicity with cephalosporins (occurs in approximately 5% to 10% of penicillin-allergic patients).',
        'Never administer oral penicillins with acidic juices (e.g. orange juice), as acid accelerates decomposition; administer with plain water.',
        'Observe the patient for at least 15 to 30 minutes following parenteral injection; keep emergency resuscitation equipment and adrenaline (epinephrine) readily accessible.',
        'Probenecid competitively blocks renal tubular secretion of penicillins, thereby prolonging their therapeutic blood concentrations.'
      ],
      anaphylaxisProtocol: {
        firstLineDrug: 'Epinephrine (Adrenaline) IM immediately',
        injectionSite: 'Anterolateral aspect of middle third of thigh (vastus lateralis muscle)',
        adultDose: '0.3 to 0.5 mg IM (1:1,000 solution)',
        childDose: '0.01 mg/kg IM (0.01 mL/kg of 1:1,000 solution)',
        repeatInterval: 'Repeat every 5 to 15 minutes if response is suboptimal',
        supportiveSteps: 'High-flow oxygen, rapid IV crystalloid boluses, lay patient flat with lower extremities elevated.',
        secondLineNote: 'Antihistamines (diphenhydramine) and corticosteroids (hydrocortisone) are SECOND LINE; they do not treat upper airway obstruction or circulatory collapse and MUST NEVER delay epinephrine.'
      }
    },

    // A6: Paediatric dose arithmetic
    paediatricDosing: {
      formula: 'Daily Total Dose = (mg or IU per kg per day) × patient weight (kg). Then divide by number of doses per day.',
      kenyaStandardChildDose: 'Benzyl penicillin (Kenya MoH Basic Paediatric Protocols): 50,000 IU/kg per dose, administered every 6 hours (QDS).',
      arithmeticExample: 'Child weighing 12 kg: Dose per injection = 12 kg × 50,000 IU/kg = 600,000 IU every 6 hours.',
      protocolRule: 'Always verify prescribed dose against pediatric formulary. Write dosing frequency explicitly as "6-hourly" or "12-hourly" rather than ambiguous abbreviations (qid/bd).'
    },

    // A7: Kenya treatment link (pneumonia)
    kenyaPneumoniaGuidelines: {
      nonSevere: 'Oral Amoxicillin (high dose: 40-45 mg/kg per dose 12-hourly for 5 days). First-line outpatient treatment.',
      severeChild: 'Injectable Benzyl penicillin (50,000 IU/kg 6-hourly) PLUS Gentamicin (7.5 mg/kg once daily) per Kenya Basic Paediatric Protocols. If severe and unresponsive, IV Ampicillin + Gentamicin or Ceftriaxone.',
      adultCommunityAcquired: 'Oral Amoxicillin first (targeting Streptococcus pneumoniae), plus a Macrolide (erythromycin / azithromycin) for atypical organisms (Mycoplasma, Chlamydia, Legionella).'
    }
  },

  // =========================================================
  // PART B: EXAM FOCUS & FREQUENCY ANALYSIS
  // =========================================================
  examFocus: {
    summary:
      'Examiners test penicillins from multiple angles: distinguishing acid-labile Pen G (IV/IM) from acid-stable Pen V (oral); identifying benzathine as an IM depot; recognising ampicillin as broad spectrum for UTIs; identifying flucloxacillin as a penicillin; knowing first-line pneumonia regimens in Kenya; spotting 10x arithmetic errors in pediatric doses; and identifying IM epinephrine as the sole drug of choice for anaphylaxis.',
    frequencyTable: [
      {
        topic: 'Benzyl penicillin = narrow spectrum, acid-labile, destroyed by beta-lactamase',
        sourcePapers: 'Apr 2024 Supp (Q8)',
        trap: 'Confusing it with broad-spectrum penicillins or believing it resists beta-lactamase'
      },
      {
        topic: 'Benzathine penicillin = depot formulation of benzyl penicillin (deep IM only)',
        sourcePapers: 'Sept 2025 (Q7)',
        trap: 'Believing penicillins are contraindicated in pregnancy, safe with orange juice, or cross-react with gentamicin'
      },
      {
        topic: 'Ampicillin / Amoxicillin = broad-spectrum penicillin used in UTI',
        sourcePapers: 'Sept 2025 (Q9)',
        trap: 'Selecting narrow-spectrum agents (Pen V, Benzathine, Benzyl penicillin)'
      },
      {
        topic: 'Flucloxacillin = Penicillin class matching',
        sourcePapers: 'Apr 2019 CAT 1 (Q12)',
        trap: 'Selecting aminoglycoside, tetracycline, or macrolide instead of penicillin'
      },
      {
        topic: 'First-line pneumonia treatment (Amoxicillin + Erythromycin)',
        sourcePapers: 'Sept 2024 CAT 1 (Q11)',
        trap: 'Selecting reserve second-line cephalosporins (ceftriaxone, cefuroxime)'
      },
      {
        topic: 'Per-kg paediatric dose calculation check',
        sourcePapers: 'Apr 2019 CAT 1 (Q3)',
        trap: 'Ten-fold overdose errors (500,000 IU/kg instead of 50,000 IU/kg) and daily vs per-dose confusion'
      },
      {
        topic: 'Anaphylaxis drug of choice = Epinephrine IM',
        sourcePapers: 'Sept 2025 (Q27)',
        trap: 'Choosing IV norepinephrine, IV antihistamines, or IM steroids as first-line'
      }
    ]
  },

  // =========================================================
  // PART C & D: PAST-PAPER QUESTIONS & EXPLANATIONS
  // =========================================================
  pastPaperQuestions: [
    {
      id: 'sec3-q1-apr2024-supp',
      number: 1,
      examRef: 'Apr 2024 Supp, Q8',
      stem: 'A true statement regarding the Benzyl penicillin is:',
      options: [
        { key: 'A', text: 'It is a narrow spectrum antibiotic' },
        { key: 'B', text: 'It is a broad spectrum antibiotic' },
        { key: 'C', text: 'Given alone in treatment of pneumonia' },
        { key: 'D', text: 'Cannot be hydrolyzed by beta lactamases' }
      ],
      correctAnswer: 'A',
      explanation:
        'Benzyl penicillin (Penicillin G) is predominantly active against Gram-positive organisms (Streptococci, pneumococci) and spirochetes (Treponema), making it a classic narrow-spectrum antibiotic.',
      wrongOptionsExplanation:
        'Option B is false because broad-spectrum penicillins are aminopenicillins (amoxicillin and ampicillin). Option C is false because benzyl penicillin alone misses atypical respiratory pathogens and in Kenya is paired with gentamicin for severe childhood pneumonia. Option D is false because benzyl penicillin is easily hydrolyzed by bacterial beta-lactamase enzymes (which is why penicillinase-resistant drugs like flucloxacillin were developed). Furthermore, it is acid-labile and destroyed by stomach acid, necessitating parenteral administration.',
      trapAlert:
        'Examiners love to test whether you know Benzyl penicillin is narrow spectrum and destroyed by both stomach acid (gut-hated) and beta-lactamase.'
    },
    {
      id: 'sec3-q2-sept2025',
      number: 2,
      examRef: 'Sept 2025, Q7',
      stem: 'A true statement regarding the penicillin include:',
      options: [
        { key: 'A', text: 'One of the contraindications is pregnancy and breastfeeding mothers' },
        { key: 'B', text: 'Benzathine penicillin is a depot preparation of benzyl penicillin' },
        { key: 'C', text: 'Oral penicillin is safely administered using orange juice to prevent nausea' },
        { key: 'D', text: 'Allergies to amoxicillin can lead to cross-allergenicity to gentamycin' }
      ],
      correctAnswer: 'B',
      explanation:
        'Benzathine penicillin is an insoluble repository (depot) preparation of benzyl penicillin formulated for deep intramuscular injection, releasing active penicillin slowly over 2 to 4 weeks.',
      wrongOptionsExplanation:
        'Option A is false because penicillins lack human cell wall targets and are among the safest antibiotics during pregnancy and lactation (Category B); true allergy is their only absolute contraindication. Option C is false because acidic beverages (orange juice) accelerate the acid hydrolysis of penicillins, significantly impairing oral absorption. Option D is false because cross-allergenicity occurs among beta-lactams (penicillins and cephalosporins); gentamicin belongs to the aminoglycoside family, an entirely distinct chemical structure with zero cross-reactivity.',
      trapAlert:
        'Do not fall for the myth that pregnancy contraindicates penicillins or that acidic juice helps absorption!'
    },
    {
      id: 'sec3-q3-sept2025',
      number: 3,
      examRef: 'Sept 2025, Q9',
      stem: 'A penicillin drug used in treatment of UTI is:',
      options: [
        { key: 'A', text: 'Benzathine penicillin' },
        { key: 'B', text: 'Ampicillin' },
        { key: 'C', text: 'Benzyl penicillin' },
        { key: 'D', text: 'Pen V' }
      ],
      correctAnswer: 'B',
      explanation:
        'Ampicillin is an aminopenicillin with an extended broad spectrum covering common Gram-negative uropathogens (E. coli, Proteus mirabilis) and is excreted in high active concentrations in the urine.',
      wrongOptionsExplanation:
        'Options A, C, and D (Benzathine penicillin, Benzyl penicillin, and Pen V) are narrow-spectrum penicillins with poor activity against Gram-negative enteric bacilli causing UTIs and are ineffective.',
      trapAlert:
        'UTIs are predominantly caused by Gram-negative organisms like E. coli. Only broad-spectrum penicillins (ampicillin/amoxicillin) can cover them.',
      notes:
        'Clinical Practice Pearl: Because widespread E. coli resistance now exists, definitive clinical treatment is always guided by antimicrobial susceptibility testing.'
    },
    {
      id: 'sec3-q4-apr2019-cat1',
      number: 4,
      examRef: 'Apr 2019 CAT 1, Q12',
      stem: 'Match the drug with the corresponding class of drug: Flucloxacillin',
      options: [
        { key: 'A', text: 'Aminoglycoside' },
        { key: 'B', text: 'Penicillin' },
        { key: 'C', text: 'Tetracycline' },
        { key: 'D', text: 'Macrolide' }
      ],
      correctAnswer: 'B',
      explanation:
        'Flucloxacillin is an isoxazolyl penicillin (penicillinase-resistant penicillin) engineered specifically to resist staphylococcal beta-lactamase.',
      wrongOptionsExplanation:
        'Options A, C, and D are incorrect chemical families. Fast mnemonic: any drug ending in the suffix "-cillin" is a member of the penicillin family (e.g. flucloxacillin, amoxicillin, methicillin). Aminoglycosides end in "-micin/-mycin", tetracyclines end in "-cycline", and macrolides end in "-thromycin".'
    },
    {
      id: 'sec3-q5-sept2024-cat1',
      number: 5,
      examRef: 'Sept 2024 CAT 1, Q11',
      stem: 'The first line antibiotics used in treatment of pneumonia include:',
      options: [
        { key: 'A', text: 'Amoxicillin, erythromycin' },
        { key: 'B', text: 'Benzyl penicillin, gentamycin' },
        { key: 'C', text: 'Erythromycin, doxycycline' },
        { key: 'D', text: 'Ceftriaxone, cefuroxime' }
      ],
      correctAnswer: 'A',
      explanation:
        'Standard empirical outpatient management of community-acquired pneumonia targets typical Streptococcus pneumoniae with oral amoxicillin and covers atypical bacteria (Mycoplasma pneumoniae, Chlamydophila) with a macrolide such as erythromycin.',
      wrongOptionsExplanation:
        'Option B represents the standard parenteral regimen for severe childhood pneumonia requiring hospital admission in Kenya Basic Paediatric Protocols, but for general first-line pneumonia questions, option A is the examiner answer. Option C contains second-line/alternative oral agents. Option D (ceftriaxone, cefuroxime) represents reserve/second-line cephalosporins reserved for complicated or non-responsive cases under antimicrobial stewardship.',
      trapAlert:
        'If both A and B appear: general/adult outpatient community pneumonia → Amoxicillin + Erythromycin; inpatient severe paediatric pneumonia → Benzyl penicillin + Gentamicin.'
    },
    {
      id: 'sec3-q6-apr2019-cat1',
      number: 6,
      examRef: 'Apr 2019 CAT 1, Q3',
      stem: 'A correct paediatric dose estimation is:',
      options: [
        { key: 'A', text: 'Phenytoin loading dose 15mg/kg, maintenance 5mg/kg daily' },
        { key: 'B', text: 'Phenobarbitone loading 10mg/kg maintenance 5 mg/kg daily' },
        { key: 'C', text: 'Ceftriaxone 100 mg/kg BD' },
        { key: 'D', text: 'Penicillin 500,000 IU/kg qid' }
      ],
      correctAnswer: 'A',
      explanation:
        'Phenytoin in status epilepticus is dosed at a loading dose of 15 to 20 mg/kg IV (infused slowly over 20-30 min with cardiac monitoring) followed by a daily maintenance dose of 5 mg/kg/day.',
      wrongOptionsExplanation:
        'Option B is incorrect because phenobarbitone loading is 15 to 20 mg/kg (not 10 mg/kg). Option C is incorrect because ceftriaxone is dosed at 50 to 100 mg/kg per DAY (once daily or divided 12-hourly); 100 mg/kg BD equals 200 mg/kg/day, an alarming 2x overdose. Option D is incorrect because the standard pediatric dose of Benzyl penicillin is 50,000 IU/kg per dose; 500,000 IU/kg is a catastrophic ten-fold (10x) overdose.',
      trapAlert:
        'Examiners plant 10-fold numerical errors (500,000 IU/kg vs 50,000 IU/kg) and daily versus per-dose frequency traps. Always double check standard multipliers!'
    },
    {
      id: 'sec3-q7-sept2025',
      number: 7,
      examRef: 'Sept 2025, Q27',
      stem: 'The drug of choice for immediate management of anaphylactic shock is:',
      options: [
        { key: 'A', text: 'Norepinephrine IV' },
        { key: 'B', text: 'Epinephrine IM' },
        { key: 'C', text: 'Diphenhydramine IV' },
        { key: 'D', text: 'Hydrocortisone IM' }
      ],
      correctAnswer: 'B',
      explanation:
        'Intramuscular Epinephrine (Adrenaline) administered immediately into the anterolateral mid-thigh is the first-line, life-saving drug of choice for anaphylactic shock.',
      wrongOptionsExplanation:
        'Option A (IV norepinephrine) is reserved for refractory septic or neurogenic shock in intensive care, not initial anaphylaxis. Options C and D (antihistamines and corticosteroids) are secondary, adjunctive treatments that take hours to exert clinical benefit; they do not reverse laryngeal edema or restore vascular tone, and administering them must never delay IM epinephrine.',
      trapAlert:
        'Never choose antihistamines or steroids as the initial drug of choice for anaphylaxis. Epinephrine IM is the sole first-line intervention.'
    }
  ] as StudyExamQuestion[],

  // =========================================================
  // PART E: STRATEGY & HOW TO ALWAYS GET THESE RIGHT
  // =========================================================
  rulesToGetTheseRight: [
    'Suffix Rule: Anything ending in "-cillin" is a penicillin = cell wall inhibitor = bactericidal = beta-lactam.',
    'Narrow vs Broad: Benzyl penicillin (Pen G) and Phenoxymethyl penicillin (Pen V) = narrow spectrum. Amoxicillin and Ampicillin = broad spectrum. Co-amoxiclav (Augmentin) = broad spectrum PLUS beta-lactamase resistant.',
    'Staphylococcal Penicillinase: Staph producing beta-lactamase → treat with Flucloxacillin or Cloxacillin. Note: MRSA alters PBP2a, so it resists flucloxacillin and requires Vancomycin.',
    'Depot Formulation: "Depot" = Benzathine penicillin. Must be given deep IM ONLY (NEVER IV, which is fatal). Indicated for syphilis and secondary rheumatic fever prophylaxis.',
    'True/False Elimination Filter: In penicillin evaluation items, test options against: (1) Safe in pregnancy? YES; (2) Acid-stable? Pen G is destroyed by acid, Pen V is stable; (3) Cross-allergy? Only with beta-lactams (cephalosporins), NEVER with aminoglycosides.',
    'Dose Arithmetic Rule: Total daily dose = mg/kg/day × weight (kg). Standard child Benzyl penicillin is 50,000 IU/kg/dose (not 500,000 IU/kg). Spot ten-fold decimal traps!',
    'Anaphylaxis Protocol: Severe penicillin reaction = Epinephrine IM (outer mid-thigh) FIRST, immediately. Antihistamines and hydrocortisone are second line.'
  ],

  memoryAids: [
    {
      title: 'Pen G vs Pen V Route',
      mnemonic: 'Pen G is Gut-hated (destroyed by acid, Given by injection); Pen V is Very good orally.',
      breakdown: 'Pen G = Parenteral (IV/IM); Pen V = per os (oral).'
    },
    {
      title: 'Cloxacillin / Flucloxacillin Rules',
      mnemonic: 'Clox the Clever: Clever against Staph, Clear of food.',
      breakdown: 'Clever against penicillinase-producing Staph; must be taken on an empty stomach (1 hour before food).'
    },
    {
      title: 'Benzathine Route Warning',
      mnemonic: 'Benzathine = "Bad IV": NEVER give intravenous.',
      breakdown: 'Depot microcrystals cause fatal vascular occlusion if given IV. Deep intramuscular only.'
    }
  ],

  // =========================================================
  // PART F: MINI SELF-TEST
  // =========================================================
  miniSelfTest: [
    {
      id: 'sec3-st-1',
      question: 'Which penicillin preparation is formulated for oral administration due to stability in gastric acid?',
      options: [
        'Benzyl penicillin',
        'Phenoxymethyl penicillin (Pen V)',
        'Benzathine penicillin',
        'Procaine penicillin'
      ],
      correctIndex: 1,
      explanation:
        'Phenoxymethyl penicillin (Pen V) is acid-stable and absorbed orally. Benzyl penicillin (Pen G) is acid-labile and destroyed by stomach acid, while benzathine and procaine are parenteral repository depot forms.'
    },
    {
      id: 'sec3-st-2',
      question: 'A paediatric patient weighing 12 kg requires Benzyl penicillin at 50,000 IU/kg/dose 6-hourly. What is the correct single dose per injection?',
      options: [
        '50,000 IU',
        '200,000 IU',
        '600,000 IU',
        '1,200,000 IU'
      ],
      correctIndex: 2,
      explanation:
        'Dose per injection = 12 kg × 50,000 IU/kg = 600,000 IU per injection administered 6-hourly (total daily dose = 2,400,000 IU/day divided into 4 doses).'
    },
    {
      id: 'sec3-st-3',
      question: 'What is the correct administration instruction regarding food intake for oral flucloxacillin?',
      options: [
        'Take immediately with milk to reduce nausea',
        'Take 1 hour before food or 2 hours after food on an empty stomach',
        'Take with concentrated orange juice to enhance gastric acidity',
        'Take only at bedtime with a high-protein snack'
      ],
      correctIndex: 1,
      explanation:
        'Gastric food contents significantly decrease the absorption and bioavailability of flucloxacillin. It should be taken on an empty stomach at least 1 hour before meals or 2 hours afterwards.'
    },
    {
      id: 'sec3-st-4',
      question: 'What is the mandatory nursing safety action required prior to administering the first dose of any penicillin?',
      options: [
        'Check patient allergy history and document any past drug reactions',
        'Measure serum total cholesterol and triglyceride levels',
        'Compute body mass index (BMI) for pharmacokinetic clearance',
        'Perform a visual acuity examination with a Snellen chart'
      ],
      correctIndex: 0,
      explanation:
        'Hypersensitivity reactions up to fatal anaphylaxis are the most severe danger associated with penicillins. Nurses must always verify allergy history and cross-sensitivity to cephalosporins before giving the first dose.'
    }
  ] as SelfTestQuestion[],

  // =========================================================
  // PART G: SECTION SUMMARY
  // =========================================================
  summaryBullets: [
    'Penicillins are bactericidal beta-lactam antibiotics that inhibit cell wall synthesis by blocking penicillin-binding proteins (PBPs) in actively multiplying bacteria.',
    'Due to the absence of peptidoglycan in human cells, penicillins have outstanding selective toxicity and are safe in pregnancy and breastfeeding, with hypersensitivity (allergy) being their principal hazard.',
    'Four major groups: Narrow spectrum (Benzyl penicillin IV/IM, Pen V oral); Penicillinase-resistant (flucloxacillin, cloxacillin for staphylococci); Broad spectrum (ampicillin, amoxicillin for Gram-positive and Gram-negative rods); Augmented (Augmentin / co-amoxiclav).',
    'Benzathine penicillin is an insoluble slow-release depot for deep IM injection ONLY (NEVER IV); primary indications are syphilis and secondary prevention of rheumatic fever.',
    'Flucloxacillin has a bulky side chain that sterically prevents beta-lactamase degradation, but it must be taken on an empty stomach 1 hour before food.',
    'Paediatric dosing is strictly weight-based (mg/kg or IU/kg). Kenya MoH standard dose for Benzyl penicillin is 50,000 IU/kg/dose 6-hourly (watch out for 10x numerical distractor traps).',
    'Kenya pneumonia protocols: Outpatient non-severe = high-dose oral Amoxicillin; Inpatient severe child = injectable Benzyl penicillin (or ampicillin) + Gentamicin.',
    'Anaphylaxis emergency protocol: Administer Epinephrine (Adrenaline) 1:1,000 IM immediately into the anterolateral mid-thigh. Antihistamines and hydrocortisone are second-line adjunctive therapies.'
  ]
};
