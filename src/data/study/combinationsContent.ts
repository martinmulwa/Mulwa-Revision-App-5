/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 2: Antimicrobial Combinations, Synergism and Beta-lactamase Resistance
 *
 * Full structured curriculum study material transcribed from lecture slides
 * and clinical exam blueprints.
 */

import {
  StudyExamQuestion,
  SelfTestQuestion
} from './antibioticsContent';

export interface CombinationResultRow {
  result: string;
  slideDefinition: string;
  simpleMaths: string;
  easyExample: string;
}

export interface SynergismPairRow {
  infection: string;
  combination: string;
}

export interface ExamFocusRow {
  concept: string;
  papers: string;
  trap: string;
}

export const ANTIBIOTICS_SECTION_2 = {
  id: 'block1-pharmacology1-antibiotics-synergism',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 2: Antimicrobial Combinations, Synergism and Beta-lactamase Resistance',
  shortTitle: '2. Combinations: Synergism & Beta-lactamase',
  subtitle: 'Results of Combination Therapy, Indications, Synergism Mechanisms, Beta-lactamase & Stewardship',
  estimatedReadTime: '12 min read',
  lectureSlidesCovered:
    'Antimicrobial Combination (results of combination therapy) → Indications for clinical use of combinations → Synergism (aminoglycosides + beta-lactams)',
  whyThisMatters:
    'Combinations, synergism mechanisms, and beta-lactamase resistance rules are recurrent in Block 1 exams (Sept 2024, Apr 2025, Sept 2012, Apr 2019, Mar 2011). Understand why clavulanic acid synergistic protection works, when to combine antibiotics, and how beta-lactams enhance aminoglycoside uptake.',

  // Part A: Theory
  theory: {
    combinationResults: [
      {
        result: 'Additive ("indifferent")',
        slideDefinition: 'Combined activity equals the sum of the separate activities',
        simpleMaths: '1 + 1 = 2',
        easyExample: 'Two painkillers with similar action'
      },
      {
        result: 'Synergistic',
        slideDefinition: 'Combined activity is greater than the sum of the separate activities',
        simpleMaths: '1 + 1 = 3',
        easyExample: 'Trimethoprim + sulfamethoxazole; amoxicillin + clavulanic acid; ampicillin + gentamicin'
      },
      {
        result: 'Antagonistic',
        slideDefinition: 'Combined activity is less than the sum of the separate activities',
        simpleMaths: '1 + 1 = 1 or less',
        easyExample: 'Penicillin (needs growing bacteria) + tetracycline (stops growth); naloxone + morphine'
      }
    ] as CombinationResultRow[],

    noteCheckA1:
      'Strictly, "indifferent" (the combination is no better than the best single drug) is slightly different from "additive". The slide merges them. For exams use additive = equals the sum.',

    rationaleA1:
      'Think of two people pushing a car. Additive = both push, the car moves twice as far. Synergy = they push together in rhythm and it moves far more. Antagonism = one pushes while the other pulls back.',

    indications: [
      {
        number: 1,
        title: 'Prevention of resistant organisms',
        explanation: 'Example: TB is always treated with 3 to 4 drugs. Bacteria that resist one drug are killed by the others.'
      },
      {
        number: 2,
        title: 'Polymicrobial infection',
        explanation: 'Many germs at once (e.g., intra-abdominal sepsis, diabetic foot). One drug cannot cover them all.'
      },
      {
        number: 3,
        title: 'Initial (empirical) therapy',
        explanation: 'In a very sick patient, cover the likely germs before the lab microbiology result returns.'
      },
      {
        number: 4,
        title: 'Decreased toxicity',
        explanation: 'A smaller dose of each drug lowers the adverse effects and organ toxicity.'
      },
      {
        number: 5,
        title: 'Synergism',
        explanation: 'The drugs together kill bacteria significantly better than either drug administered alone.'
      }
    ],

    nursingRuleOfThumb:
      'Combinations also have downsides: more side effects, more cost, more interactions, and potential antagonism. They are used for a distinct clinical reason, not by habit.',

    synergismMechanism: {
      mechanism:
        'Beta-lactams damage the cell wall. This lets aminoglycosides (which normally cross the wall poorly) enter the bacterium in higher amounts and reach the ribosome. Result: enhanced uptake of aminoglycosides.',
      pairs: [
        {
          infection: 'Enterococcal endocarditis',
          combination: 'Ampicillin + gentamicin'
        },
        {
          infection: 'Viridans streptococcal endocarditis',
          combination: 'Penicillin + gentamicin'
        },
        {
          infection: 'Staphylococcal bacteraemia',
          combination: 'Vancomycin + gentamicin'
        },
        {
          infection: 'Pseudomonas infections',
          combination: 'Beta-lactam + aminoglycoside'
        }
      ] as SynergismPairRow[],
      kenyaLink:
        'The standard treatment for severe pneumonia in children (MoH Basic Paediatric Protocols) is benzylpenicillin (or ampicillin) + gentamicin, a classic beta-lactam + aminoglycoside pair. Do not give them in the same syringe or IV line (they inactivate each other physically). Give separately.'
    },

    betaLactamaseSection: {
      corePoints: [
        'Beta-lactam antibiotics (penicillins, cephalosporins, carbapenems) all contain a beta-lactam ring. That ring does the killing.',
        'Beta-lactamase (penicillinase) is an enzyme produced by bacteria (Staph. aureus, E. coli, H. influenzae) that breaks the ring, rendering the drug inactive.'
      ],
      twoWaysToBeatIt: [
        {
          title: '1. Add a beta-lactamase inhibitor',
          body: 'Inhibitors include clavulanic acid, sulbactam, and tazobactam. Example: co-amoxiclav (Augmentin) = amoxicillin + clavulanic acid. Clavulanic acid has almost no antibacterial effect itself; it only protects the amoxicillin. That is why the effect is called synergistic (clavulanic acid alone would do nothing, but together the result is far greater).'
        },
        {
          title: '2. Use a beta-lactamase-resistant drug',
          body: 'Use flucloxacillin/cloxacillin (penicillinase-resistant penicillins), later-generation cephalosporins, or carbapenems.'
        }
      ],
      notDestroyedNote:
        'Beta-lactamase does NOT destroy sulfonamides, macrolides, or tetracyclines. They use other resistance tricks (efflux pumps, ribosomal protection, altered targets).'
    },

    resistanceAndStewardship: {
      resistanceDefinition: 'Resistance appears when bacteria survive an antimicrobial drug and multiply.',
      causes: 'Not completing prescribed courses, using antibiotics for viral illnesses, subtherapeutic doses, and overuse of broad-spectrum drugs.',
      stewardshipRules: [
        'Give doses on time to maintain therapeutic blood levels.',
        'Ensure patients complete the full prescribed course.',
        'Take blood/wound cultures BEFORE administering the first dose.',
        'Keep reserve drugs (carbapenems, vancomycin) strictly for confirmed resistant hospital infections.'
      ]
    }
  },

  // Part B: Exam Focus
  examFocus: {
    summary:
      'Examiners frequently test definitions of synergism vs additivity, the synergistic classification of co-amoxiclav (amoxicillin + clavulanic acid), and the specific vulnerability of penicillins to beta-lactamase.',
    frequencyTable: [
      {
        concept: 'Definition of synergism (greater than sum)',
        papers: 'Sept 2024 CAT 1, Sept 2012 Supp',
        trap: 'Options "double the effect" or "add the effect"'
      },
      {
        concept: 'Definition of additive (equal to the sum)',
        papers: 'Apr 2019 CAT 1',
        trap: '"Agonism" is a receptor term, not a combination term'
      },
      {
        concept: 'Clavulanic acid + amoxicillin = synergistic',
        papers: 'Apr 2025 End of Block',
        trap: 'Students mistakenly choose "additive"'
      },
      {
        concept: 'Beta-lactamase destroys penicillins',
        papers: 'Mar 2011 Supp',
        trap: 'Macrolides/tetracyclines placed as distractors'
      }
    ] as ExamFocusRow[]
  },

  // Part C: Past-Paper Questions
  pastPaperQuestions: [
    {
      id: 'q1-sept2024-cat1-q17',
      number: 1,
      examRef: 'Sept 2024 CAT 1, Q17',
      stem: 'A synergistic effect for combination of drugs is:',
      options: [
        { key: 'A', text: 'Double the effect of treatment' },
        { key: 'B', text: 'Greater effect than combined effect of individual drugs' },
        { key: 'C', text: 'Add the effect of individual drugs' },
        { key: 'D', text: 'Reduce the effect of individual drugs' }
      ],
      correctAnswer: 'B',
      explanation:
        'Synergism = combined activity is greater than the sum of separate activities (1 + 1 = 3). Option A ("double") is too specific and mathematically inaccurate because synergy means more than the sum, not necessarily twice. Option C describes an additive effect. Option D describes antagonism.',
      wrongOptionsExplanation:
        'A is too narrow/rigid; C defines additive effect (sum of individual effects); D defines antagonism (less than sum).',
      trapAlert: 'If one option says "greater than the sum" and another says "double", ALWAYS choose "greater than the sum".',
      notes: 'Examiners repeat this exact question stem across CATs and supplementary exams.'
    },
    {
      id: 'q2-apr2019-cat1-q2',
      number: 2,
      examRef: 'Apr 2019 CAT 1, Q2',
      stem: 'When the combined effects of two drugs is equal to the sum of their individual effects; the drugs produce:',
      options: [
        { key: 'A', text: 'Synergism' },
        { key: 'B', text: 'Additivity' },
        { key: 'C', text: 'Agonism' },
        { key: 'D', text: 'Antagonism' }
      ],
      correctAnswer: 'B',
      explanation:
        'When the combined effect equals the mathematical sum (1 + 1 = 2), it is termed additivity. Synergism is greater than the sum, and antagonism is less than the sum.',
      wrongOptionsExplanation:
        'A is greater than sum; D is less than sum; C ("agonism") is a receptor-binding concept (drug activates receptor), not a drug-interaction classification.',
      trapAlert: 'Do not confuse "additivity" with "agonism". Agonism is never a drug combination term.',
      notes: 'Appeared in multiple KRN Block 1 CATs.'
    },
    {
      id: 'q3-sept2012-supp-q2',
      number: 3,
      examRef: 'Sept 2012 Supplementary, Q2',
      stem: 'Drug interaction where two drugs with different mechanism of action produce greater effects is:',
      options: [
        { key: 'A', text: 'Synergism' },
        { key: 'B', text: 'Addictive effect' },
        { key: 'C', text: 'Interference' },
        { key: 'D', text: 'Displacement' }
      ],
      correctAnswer: 'A',
      explanation:
        'The stem has two key clues: "different mechanisms of action" and "greater effects". This is the textbook definition of synergism. A classic example is trimethoprim + sulfamethoxazole blocking sequential enzymatic steps in folate synthesis.',
      wrongOptionsExplanation:
        'B ("Addictive") is a typo for additive (which equals the sum, not greater); C ("Interference") is where one drug alters another’s absorption/metabolism; D ("Displacement") is where one drug knocks another off plasma albumin (e.g., aspirin displacing warfarin).',
      trapAlert: 'Watch out for typographical distractors like "addictive effect" intended to confuse candidates with "additive".',
      notes: 'Re-tested in council licensure revision banks.'
    },
    {
      id: 'q4-apr2025-endblock-q7',
      number: 4,
      examRef: 'Apr 2025 End of Block, Q7',
      stem: 'The treatment effect produced when clavulanic acid is combined with amoxicillin in treatment of pneumonia is:',
      options: [
        { key: 'A', text: 'Antagonistic' },
        { key: 'B', text: 'Synergistic' },
        { key: 'C', text: 'Additive' },
        { key: 'D', text: 'Agonistic' }
      ],
      correctAnswer: 'B',
      explanation:
        'Clavulanic acid inhibits bacterial beta-lactamase, shielding amoxicillin from destruction so amoxicillin can destroy the cell wall. Because clavulanic acid alone has negligible antimicrobial activity, the combined therapeutic effect is dramatically greater than the sum of their individual effects—the definition of synergism.',
      wrongOptionsExplanation:
        'A would mean they counteract each other; C ("additive") only applies if both drugs killed bacteria independently and added together; D is a receptor term.',
      trapAlert: 'Candidates often pick "additive" thinking two drugs are simply added. It is synergistic because clavulanic acid alone has no direct antimicrobial killing power.',
      notes: 'High-yield clinical correlation: Co-amoxiclav (Augmentin).'
    },
    {
      id: 'q5-mar2011-midblock-q9',
      number: 5,
      examRef: 'Mar 2011 Mid-Block Supplementary, Q9',
      stem: 'Beta lactamase leads to bacterial resistance to the following:',
      options: [
        { key: 'A', text: 'Sulfonamides' },
        { key: 'B', text: 'Macrolides' },
        { key: 'C', text: 'Tetracyclines' },
        { key: 'D', text: 'Penicillins' }
      ],
      correctAnswer: 'D',
      explanation:
        'Beta-lactamase hydrolyzes and breaks the four-membered beta-lactam ring that constitutes the active core of penicillins and cephalosporins. Sulfonamides, macrolides, and tetracyclines do not contain a beta-lactam ring and therefore cannot be inactivated by beta-lactamase.',
      wrongOptionsExplanation:
        'A, B, and C lack a beta-lactam ring; their resistance mechanisms involve altered enzymes, efflux pumps, or ribosomal target modification.',
      trapAlert: 'Remember: beta-lactamase ONLY destroys drugs with a beta-lactam ring (penicillins, cephalosporins, carbapenems).',
      notes: 'Foundational pharmacology licensure question.'
    }
  ] as StudyExamQuestion[],

  // Part E: Strategy Rules
  rulesToGetTheseRight: [
    'Draw a mental number line: Antagonism (< sum) | Additive (= sum) | Synergism (> sum).',
    'The words "greater than" or "more than sum" ALWAYS point to Synergism. "Equal to sum" points to Additive. "Less than sum" points to Antagonism.',
    '"Beta-lactamase" ALWAYS targets drugs with a beta-lactam ring (penicillins and cephalosporins). It cannot touch macrolides, tetracyclines, or sulfonamides.',
    '"Clavulanic acid", "sulbactam", and "tazobactam" are beta-lactamase inhibitors with no direct killing power; their combination with beta-lactams is always Synergistic.',
    '"Agonism" is never an antibiotic combination effect; it is strictly a receptor-activation term.',
    'When two drugs inhibit sequential steps of a single metabolic pathway (e.g., trimethoprim + sulfamethoxazole in folate synthesis), the result is always Synergism.'
  ],

  // Memory Aids
  memoryAids: [
    {
      title: 'Combination Outcomes',
      mnemonic: 'S for Super (more), A for Add (equal), A for Against (less)',
      breakdown: 'Synergism = Super (> sum) | Additive = Add (= sum) | Antagonism = Against (< sum)'
    },
    {
      title: 'Beta-Lactamase Target',
      mnemonic: 'Beta-lactamase breaks "-cillins and cef-s"',
      breakdown: 'Destroys penicillins (amoxicillin, ampicillin) and cephalosporins (ceftriaxone, cefuroxime).'
    },
    {
      title: 'Augmentin Shield',
      mnemonic: 'Calvin protects the Amoxi-boy',
      breakdown: 'Clavulanic acid ("Calvin") blocks beta-lactamase to protect amoxicillin ("Amoxi-boy") from enzymatic breakdown.'
    }
  ],

  // Part F: Mini Self-Test
  miniSelfTest: [
    {
      id: 'st-comb-1',
      question: 'Penicillin plus tetracycline is clinically categorized as:',
      options: ['Synergistic', 'Antagonistic', 'Additive', 'Irrelevant'],
      correctIndex: 1,
      explanation:
        'Antagonistic. Penicillin requires actively dividing bacteria building new cell walls to exert its bactericidal effect. Tetracycline is bacteriostatic and arrests bacterial growth, thereby depriving penicillin of its target.'
    },
    {
      id: 'st-comb-2',
      question: 'Which of the following is a beta-lactamase inhibitor?',
      options: ['Cloxacillin', 'Clavulanic acid', 'Gentamicin', 'Vancomycin'],
      correctIndex: 1,
      explanation:
        'Clavulanic acid (along with sulbactam and tazobactam) is a beta-lactamase inhibitor. Cloxacillin is a penicillinase-resistant penicillin, not an inhibitor.'
    },
    {
      id: 'st-comb-3',
      question: 'Why is gentamicin combined with ampicillin in enterococcal endocarditis?',
      options: [
        'Both drugs are bacteriostatic alone',
        'The beta-lactam damages the cell wall, allowing gentamicin to enter the bacterium',
        'To reduce the systemic toxicity of ampicillin',
        'To provide coverage against viral co-infections'
      ],
      correctIndex: 1,
      explanation:
        'Ampicillin (a beta-lactam) inhibits cell wall synthesis, creating breaches that allow gentamicin (an aminoglycoside) to penetrate into the bacterial cytoplasm in high concentrations and bind the 30S ribosome.'
    },
    {
      id: 'st-comb-4',
      question: 'Combination chemotherapy in tuberculosis (TB) primarily aims to:',
      options: [
        'Prevent the emergence of drug-resistant organisms',
        'Lower the financial cost of medications',
        'Make oral tablets physically larger for swallowing',
        'Treat secondary opportunistic viral infections'
      ],
      correctIndex: 0,
      explanation:
        'Mycobacterium tuberculosis mutates readily. Combining 3 to 4 antimycobacterial agents (e.g., Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) ensures that bacilli resistant to one agent are eradicated by the others, preventing the emergence of multidrug resistance.'
    }
  ] as SelfTestQuestion[],

  // Part G: Rapid Section Summary
  summaryBullets: [
    'Additive = combined effect equals the sum (1 + 1 = 2); Synergistic = combined effect is greater than the sum (1 + 1 = 3); Antagonistic = combined effect is less than the sum (1 + 1 ≤ 1).',
    'Clinical indications to combine: prevention of resistant organisms (TB), polymicrobial infections (sepsis/diabetic foot), initial empirical therapy, decreased toxicity, and synergism.',
    'Beta-lactam + aminoglycoside (e.g., ampicillin + gentamicin) is the classic synergistic pair: cell wall damage markedly enhances aminoglycoside intracellular uptake.',
    'In Kenya pediatric protocols: severe childhood pneumonia is treated with benzylpenicillin/ampicillin + gentamicin; administer separately as they physically inactivate each other if mixed in a syringe.',
    'Beta-lactamase (penicillinase) inactivates penicillins and cephalosporins by hydrolyzing the core four-membered beta-lactam ring.',
    'Clavulanic acid, sulbactam, and tazobactam are "suicide" beta-lactamase inhibitors with negligible intrinsic killing power that restore beta-lactam susceptibility synergistically.',
    'Beta-lactamase does NOT destroy sulfonamides, macrolides, or tetracyclines, which lack a beta-lactam ring.',
    'Never combine bactericidal beta-lactams with bacteriostatic agents (e.g., penicillin + tetracycline), as static inhibition of growth antagonizes bactericidal cell-wall lysis.',
    'Antimicrobial stewardship: complete all courses, administer on time, obtain cultures prior to first dose, and protect reserve drugs (carbapenems, vancomycin).'
  ]
};
