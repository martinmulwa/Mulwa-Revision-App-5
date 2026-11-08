/**
 * Mulwa Clinical Exam Portal
 * Block 1 · Pharmacology 1 (MSN 103) · Antibiotics
 * Section 7: LINCOSAMIDES (Clindamycin, Lincomycin) and Antibiotic-Associated Diarrhoea
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

export interface LincosamideIndicationRow {
  indication: string;
  clinicalContext: string;
  rationale: string;
  examBadge: string;
}

export interface LincosamidesExamFocusRow {
  topic: string;
  sourcePapers: string;
  trap: string;
}

export interface CdiffManagementStep {
  stepNumber: number;
  title: string;
  action: string;
  keyWarning: string;
}

export const ANTIBIOTICS_SECTION_7 = {
  id: 'block1-pharmacology1-antibiotics-lincosamides',
  blockId: 'block1',
  blockName: 'Block 1',
  unitId: 'pharmacology-1',
  unitName: 'Pharmacology 1',
  unitCode: 'MSN 103',
  category: 'Antibiotics',
  title: 'SECTION 7: LINCOSAMIDES & ANTIBIOTIC-ASSOCIATED DIARRHOEA',
  shortTitle: '7. Lincosamides & AAD',
  subtitle: 'Clindamycin, 50S Ribosomal Inhibition, Toxic Shock Syndrome, C. difficile Colitis, Probiotics & Loperamide Rules',
  estimatedReadTime: '13 min read',
  lectureSlidesCovered:
    'Lincosamides (mechanism, uses) → Toxic shock syndrome → Pseudomembranous colitis (C. difficile); Linked past-paper cluster: antibiotic-induced diarrhoea, loperamide, probiotics (Enterogermina)',
  whyThisMatters:
    'Lincosamides and their gastrointestinal complications represent one of the highest-yield clinical pharmacology clusters in Block 1 (Sept 2019 Supp, Sept 2024 CAT 1, Sept 2023, Apr 2024 Supp, Mar 2011 CAT 1). Examiners test the 50S ribosomal mechanism, anaerobic activity, bone penetration for osteomyelitis, and clindamycin\'s unique ability to switch off exotoxin synthesis in Toxic Shock Syndrome. Crucially, questions test the pathogenesis and nursing management of Clostridioides difficile pseudomembranous colitis—especially the absolute contraindication of antimotility agents (loperamide), the mandatory use of soap and water for spore hand hygiene, and the role of probiotics (Enterogermina / Lactobacillus) in restoring destroyed normal gut flora.',

  // =========================================================
  // PART A: THEORY
  // =========================================================
  theory: {
    // A1: What are lincosamides?
    foundations: {
      examples: 'Lincomycin and Clindamycin (Clindamycin is a chlorine-substituted derivative that is substantially more potent, better absorbed orally, and much more widely used in clinical medicine).',
      mechanism: 'Reversibly bind to the 50S ribosomal subunit of bacteria, inhibiting transpeptidation and protein synthesis → bacteriostatic (slide). (Note: can exhibit bactericidal activity against certain streptococci and staphylococci at high tissue concentrations).',
      antimicrobialSpectrum: [
        'Gram-positive cocci: Staphylococcus aureus (MSSA and some community-acquired MRSA), Streptococcus pyogenes, and Streptococcus pneumoniae.',
        'Anaerobic bacteria: Bacteroides fragilis, Fusobacterium, Peptostreptococcus, and Clostridium perfringens.',
        'Protozoa: Toxoplasma gondii and Plasmodium falciparum (used in combination for malaria).'
      ],
      notCoveredBlindSpots: [
        'Gram-negative aerobic bacilli: Escherichia coli, Klebsiella, Pseudomonas aeruginosa, and Proteus (intrinsically resistant due to poor outer membrane permeability).',
        'Enterococci: Enterococcus faecalis and Enterococcus faecium (intrinsically resistant).',
        'Hospital-acquired MRSA (frequently carries inducible resistance via the erm gene / MLSb phenotype).'
      ]
    },

    // A1 Uses breakdown
    indications: [
      {
        indication: 'Skin, Bone & Joint Infections',
        clinicalContext: 'Cellulitis, erysipelas, diabetic foot ulcers, chronic osteomyelitis, and septic arthritis.',
        rationale: 'Exceptional tissue penetration into cortical bone, synovial fluid, and soft tissues even with poor vascular supply.',
        examBadge: 'Bone Penetration Pearl'
      },
      {
        indication: 'Anaerobic Abdominal & Pelvic Sepsis',
        clinicalContext: 'Intra-abdominal abscesses, peritonitis, pelvic inflammatory disease (PID), and endometritis.',
        rationale: 'Potent bactericidal/static activity against Bacteroides fragilis and pelvic anaerobes (often combined with an aminoglycoside for Gram-negative coverage).',
        examBadge: 'Surgical Care'
      },
      {
        indication: 'Aspiration Pneumonia & Lung Abscesses',
        clinicalContext: 'Aspiration of oral anaerobic flora in patients with impaired consciousness, stroke, or severe periodontal disease.',
        rationale: 'Superior oral and respiratory secretion penetration against oral peptostreptococci and anaerobes.',
        examBadge: 'Respiratory Care'
      },
      {
        indication: 'Toxic Shock Syndrome (TSS)',
        clinicalContext: 'Staphylococcal (TSS-1) or Streptococcal toxic shock syndrome and necrotizing fasciitis.',
        rationale: 'SLIDE CORE: Clindamycin directly "switches off" bacterial ribosomal synthesis of superantigen exotoxins and enzymes, neutralizing toxin-mediated shock. Combined with high-dose penicillin or flucloxacillin.',
        examBadge: 'Slide Core Feature'
      },
      {
        indication: 'First-Trimester Malaria in Pregnancy',
        clinicalContext: 'Confirmed uncomplicated or severe falciparum malaria occurring during the first trimester.',
        rationale: 'Artemisinin combination therapies (ACTs) are restricted in early pregnancy; Quinine + Clindamycin is the recommended guideline combination.',
        examBadge: 'Guideline Extra'
      },
      {
        indication: 'Dental & Orofacial Infections',
        clinicalContext: 'Severe odontogenic abscesses, pulpitis, and surgical prophylaxis in penicillin-allergic patients.',
        rationale: 'Covers oral anaerobes and staphylococci with high salivary and mandibular bone levels.',
        examBadge: 'Dental Pearl'
      }
    ] as LincosamideIndicationRow[],

    // A2: The Big Warning: Pseudomembranous Colitis
    pseudomembranousColitis: {
      culpritStatus:
        'Lincosamides (especially Clindamycin) are historically and clinically among the antibiotics MOST ASSOCIATED with pseudomembranous colitis caused by Clostridioides difficile (C. diff). (Other major triggers include cephalosporins, fluoroquinolones, and ampicillin/amoxicillin — the "4 Cs").',
      pathophysiology:
        'Broad-spectrum antibiotics decimate the protective, competitive commensal microflora of the colon. Spores of resistant Clostridioides difficile survive, germinate, and proliferate uncontrollably, releasing two potent exotoxins:\n• Toxin A (Enterotoxin): Disrupts mucosal intercellular tight junctions, causing fluid secretion and intense mucosal inflammation.\n• Toxin B (Cytotoxin): Destroys colonic epithelial cytoskeleton, causing cell necrosis and shedding.\nThis produces yellow-white fibrinous plaques ("pseudomembranes") on the inflamed colon wall, manifesting as severe watery or bloody diarrhoea, fever, leukocytosis, abdominal cramping, and potentially fatal toxic megacolon or bowel perforation.',
      onsetTiming:
        'Can emerge during active antibiotic administration or up to 2 to 8 WEEKS AFTER completing the antibiotic course.',
      nursingManagementSteps: [
        {
          stepNumber: 1,
          title: 'Immediate Clinical Suspicion & Diagnostics',
          action: 'Suspect C. difficile in any patient developing new, unexplained watery diarrhoea (≥3 unformed stools in 24h) during or after antibiotic therapy. Promptly notify prescriber and send fresh liquid stool for C. diff toxin assay and glutamate dehydrogenase (GDH).',
          keyWarning: 'Do not delay isolation while waiting for lab results.'
        },
        {
          stepNumber: 2,
          title: 'Discontinue Causative Antibiotic',
          action: 'Immediately STOP the offending antibiotic (clindamycin, cephalosporin, or fluoroquinolone) if clinically feasible. In mild cases, stopping the causative drug allows normal flora recovery.',
          keyWarning: 'Stopping the trigger is the single most vital first step.'
        },
        {
          stepNumber: 3,
          title: 'NEVER Administer Loperamide or Antimotility Agents',
          action: 'CRITICAL SAFETY CONTRAINDICATION: Strictly withhold loperamide (Imodium), diphenoxylate-atropine (Lomotil), and opiates.',
          keyWarning: 'Antimotility drugs paralyze bowel peristalsis, TRAPPING the lethal bacterial toxins inside the colon lumen, which precipitates toxic megacolon, bowel necrosis, and fatal septic shock!'
        },
        {
          stepNumber: 4,
          title: 'Targeted Antimicrobial Pharmacotherapy',
          action: 'Initiate specific pathogen-directed therapy per hospital protocol: Oral Vancomycin (125 mg QID for 10 days), Oral Fidaxomicin (200 mg BD for 10 days), or Oral Metronidazole (400–500 mg TID for 10 days in mild/resource-limited settings). Note: Vancomycin must be given ORALLY because IV vancomycin does not cross into the gut lumen.',
          keyWarning: 'IV vancomycin is useless for C. diff colitis.'
        },
        {
          stepNumber: 5,
          title: 'Strict Contact Precautions & Spore Hand Hygiene',
          action: 'Place patient in a single room with dedicated toilet and equipment. Don gloves and gown upon room entry. CRITICAL EXAM POINT: Wash hands with SOAP AND WATER after patient contact. Alcohol-based hand rubs do NOT kill C. difficile endospores; physical friction and running water are required to mechanically wash spores away.',
          keyWarning: 'Alcohol hand rub fails to kill C. diff spores.'
        },
        {
          stepNumber: 6,
          title: 'Fluid, Electrolyte & Hemodynamic Support',
          action: 'Aggressively rehydrate with oral rehydration solution (ORS) or isotonic IV crystalloids (Ringer\'s lactate/normal saline). Correct potassium and magnesium losses; monitor vital signs and abdominal girth daily.',
          keyWarning: 'Watch for sudden cessation of diarrhoea accompanied by abdominal distension (toxic megacolon).'
        }
      ] as CdiffManagementStep[]
    },

    // A3: Antibiotic-Associated Diarrhoea in General & Loperamide Rules
    aadGeneral: {
      mildFormDescription:
        'Not all antibiotic-associated diarrhoea is caused by C. difficile. Mild antibiotic-associated diarrhoea (AAD) occurs in up to 30% of patients simply from loss of normal colonic flora, which impairs carbohydrate fermentation and short-chain fatty acid metabolism, leading to osmotic watery diarrhoea.',
      managementRules: [
        'Fluid replacement: Oral Rehydration Salts (ORS) to replace water and sodium/potassium losses.',
        'Probiotics (Lactobacillus acidophilus, Bacillus clausii = Enterogermina): Given to REPLENISH and restore normal protective microflora. Probiotics compete with pathogens for adhesion sites and nutrients, and produce lactic acid to lower gut pH.',
        'Review the antibiotic: Assess if the antimicrobial can be switched to a narrower spectrum or stopped earlier.',
        'Zinc supplementation (in paediatric diarrhoea): Accelerates intestinal mucosal repair and regeneration.'
      ],
      loperamideCoreFacts: {
        mechanism: 'Synthetic opioid-receptor agonist (mu-opioid receptor) on the circular and longitudinal muscles of the intestinal wall. Inhibits release of acetylcholine and prostaglandins, thereby diminishing propulsive peristalsis, increasing intestinal transit time, and enhancing water and electrolyte reabsorption.',
        stoppingRule: 'CRITICAL EXAM QUESTION: Discontinue loperamide if diarrhoea persists for more than 48 HOURS. If symptoms do not improve within 48 hours, the patient must be medically reassessed for underlying invasive infection, inflammatory bowel disease, or C. difficile.',
        contraindications: [
          'Antibiotic-associated colitis / C. difficile infection (causes toxin retention and toxic megacolon).',
          'Acute dysentery (bloody stools accompanied by high fever — signals invasive Shigella, Salmonella, or Campylobacter).',
          'Children under 2 years of age (danger of severe central nervous system depression, respiratory depression, and paralytic ileus).',
          'Acute ulcerative colitis exacerbation.'
        ],
        cnsEffects: 'At therapeutic doses, loperamide has low systemic bioavailability and is actively pumped out of the brain by blood-brain barrier P-glycoprotein. However, at high doses, overdose, or in infants, it can penetrate the CNS and cause drowsiness, dizziness, and respiratory depression.'
      }
    }
  },

  // =========================================================
  // PART B: EXAM FOCUS
  // =========================================================
  examFocus: [
    {
      topic: 'Antibiotic-Induced Diarrhoea → Probiotics (Lactobacillus)',
      sourcePapers: 'Sept 2019 Supp (Q8)',
      trap: 'Question asks how antibiotic-induced diarrhoea is managed. Distractors include activated charcoal, bismuth subsalicylate, and loperamide. The correct physiological treatment is Lactobacillus acidophilus to restore depleted normal flora.'
    },
    {
      topic: 'Enterogermina Mechanism = Replenish Normal Flora',
      sourcePapers: 'Sept 2024 CAT 1 (Q30), Sept 2023 (Q21)',
      trap: 'Tested twice in consecutive years! Distractors claim Enterogermina "promotes elimination of bacteria", "reduces motility", or "repairs mucosal lining". Enterogermina consists of spores of Bacillus clausii whose sole function is to REPLENISH normal flora.'
    },
    {
      topic: 'Loperamide 48-Hour Discontinuation Rule',
      sourcePapers: 'Sept 2024 CAT 1 (Q26)',
      trap: 'Question asks for a true statement regarding loperamide. The correct statement is: "Discontinue the drug if diarrhea persists for 48 hours". Distractors falsely claim it is indicated for antibiotic diarrhoea (deadly error) or contraindicated in hypertension.'
    },
    {
      topic: 'Loperamide CNS Depression Potential',
      sourcePapers: 'Apr 2024 Supp (Q29)',
      trap: 'Same question stem as above, but option B changed to "Continue the drug if diarrhea persists for more than 24 hours" (false!). With the 48h option removed, the only remaining true statement is that loperamide "Causes CNS effects such as depression" (especially in overdose/children).'
    },
    {
      topic: 'Opiates, Probiotics, Loperamide & Alcohol True/False Cluster',
      sourcePapers: 'Mar 2011 CAT 1 (Q9–Q12)',
      trap: 'Opiates decrease motility (True); Lactobacillus suppresses pathogenic bacteria (True); Loperamide is drug of choice for chronic non-infective diarrhoea (True); Alcohol increases sedative effects of antidiarrhoeals (True).'
    }
  ] as LincosamidesExamFocusRow[],

  // =========================================================
  // PART C & D: PAST PAPERS, ANSWERS & RATIONALES
  // =========================================================
  pastPaperQuestions: [
    {
      id: 'lincosamides-q1-sept2019-supp-q8',
      number: 1,
      examRef: 'Sept 2019 Supp, Q8',
      stem: 'Antibiotic-induced diarrhea is managed with:',
      options: [
        { key: 'A', text: 'Activated charcoal' },
        { key: 'B', text: 'Bismuth subsalicylate' },
        { key: 'C', text: 'Lactobacillus acidophilus' },
        { key: 'D', text: 'Loperamide' }
      ],
      correctAnswer: 'C',
      explanation:
        'Antibiotic-induced diarrhoea results from the collateral destruction of normal commensal gut microflora. Probiotics such as Lactobacillus acidophilus restore and replenish this physiological bacterial barrier, preventing secondary colonisation by opportunistic pathogens.\n\nOption A (activated charcoal) is an adsorbent indicated for acute chemical toxic ingestions/poisonings. Option B (bismuth subsalicylate) is used for traveller\'s diarrhoea and contains salicylate. Option D (loperamide) is strictly contraindicated in antibiotic-induced diarrhoea because slowing peristalsis traps bacterial toxins (such as C. difficile exotoxins A and B), precipitating life-threatening toxic megacolon.',
      wrongOptionsExplanation:
        'A = Poisoning adsorbent; B = Traveller\'s diarrhoea; D = Loperamide is dangerous in antibiotic-induced colitis because it traps toxins.',
      trapAlert:
        'Pattern Shortcut: When you see "antibiotic-associated / induced diarrhoea" + "management" → the correct answer is a PROBIOTIC (Lactobacillus acidophilus or Enterogermina). NEVER choose antimotility agents (loperamide).',
      notes: 'Topic: Antibiotic Complications & Probiotics'
    },
    {
      id: 'lincosamides-q2-sept2024-cat1-q30',
      number: 2,
      examRef: 'Sept 2024 CAT 1, Q30',
      stem: 'Enterogermina is used in diarrhea to:',
      options: [
        { key: 'A', text: 'Promote elimination of bacteria' },
        { key: 'B', text: 'Reduce intestinal motility' },
        { key: 'C', text: 'Coat the intestinal wall' },
        { key: 'D', text: 'Replenish normal flora' }
      ],
      correctAnswer: 'D',
      explanation:
        'Enterogermina is a suspension of live spores of polyantibiotic-resistant Bacillus clausii. It is administered to replenish and re-establish the normal intestinal microflora depleted by antibiotic therapy or gastrointestinal infections. Once ingested, the spores survive the acidic gastric barrier, reach the intestine, and transform into metabolically active vegetative cells that synthesize vitamins and inhibit pathogen overgrowth.\n\nOption A describes bactericidal antibiotics or laxatives. Option B describes antimotility agents such as loperamide or diphenoxylate. Option C describes mucosal protectants/adsorbents like kaolin-pectin or bismuth.',
      wrongOptionsExplanation:
        'A = Antimicrobials; B = Antimotility opioids (loperamide); C = Mucosal protectants/adsorbents.',
      trapAlert:
        'Exam Repetition: Note how this identical question was asked in both Sept 2024 CAT 1 and Sept 2023! Memorize: Enterogermina = Replenish normal flora.',
      notes: 'Topic: Probiotic Therapy'
    },
    {
      id: 'lincosamides-q3-sept2023-q21',
      number: 3,
      examRef: 'Sept 2023, Q21',
      stem: 'Enterogermina is used in diarrhea management to:',
      options: [
        { key: 'A', text: 'Promote elimination of bacteria' },
        { key: 'B', text: 'Reduce intestinal motility' },
        { key: 'C', text: 'Replenish normal flora' },
        { key: 'D', text: 'Repair of the intestinal mucosa' }
      ],
      correctAnswer: 'C',
      explanation:
        'Enterogermina acts as a probiotic to replenish the normal intestinal flora. Option D ("Repair of the intestinal mucosa") is an examiner distractor: Zinc supplementation (not Enterogermina) is the nutrient proven to accelerate mucosal regeneration, cellular repair, and brush-border enzyme recovery in paediatric diarrhoea.',
      wrongOptionsExplanation:
        'A = Antibiotics; B = Loperamide; D = Zinc accelerates mucosal repair, not Enterogermina.',
      trapAlert:
        'Zinc vs Probiotic Trap: Probiotics replenish microflora; Zinc repairs and regenerates mucosal epithelium; ORS rehydrates.',
      notes: 'Topic: Diarrhoea Pharmacology'
    },
    {
      id: 'lincosamides-q4-sept2024-cat1-q26',
      number: 4,
      examRef: 'Sept 2024 CAT 1, Q26',
      stem: 'A true statement regarding loperamide is:',
      options: [
        { key: 'A', text: 'Causes CNS depression' },
        { key: 'B', text: 'Discontinue the drug if diarrhea persists for 48 hours' },
        { key: 'C', text: 'It is indicated for diarrhea caused by antibiotic therapy' },
        { key: 'D', text: 'It is contra indicated among patients with hypertension' }
      ],
      correctAnswer: 'B',
      explanation:
        'The primary clinical administration safety rule for loperamide is to discontinue the medication if clinical diarrhoea persists beyond 48 hours. Ongoing diarrhoea past 48 hours mandates medical re-evaluation for invasive bacterial infection, dehydration, or structural pathology.\n\nOption C is dangerously false: loperamide is strictly CONTRAINDICATED in antibiotic-associated diarrhoea because it can trigger toxic megacolon. Option D is false: hypertension is not a contraindication. While Option A can occur in overdose, Option B is the definitive primary therapeutic guideline statement tested in nursing pharmacology.',
      wrongOptionsExplanation:
        'A = Secondary effect in overdose/infants; C = Absolute contraindication (never give in antibiotic diarrhoea!); D = Hypertension is unrelated.',
      trapAlert:
        'The 48-Hour Loperamide Rule: Always remember that OTC loperamide has a strict 48-hour cut-off. If symptoms do not improve within 48 hours, stop the drug!',
      notes: 'Topic: Loperamide Safety Rules'
    },
    {
      id: 'lincosamides-q5-apr2024-supp-q29',
      number: 5,
      examRef: 'Apr 2024 Supp, Q29',
      stem: 'A true statement regarding Loperamide is:',
      options: [
        { key: 'A', text: 'Causes CNS effects such as depression' },
        { key: 'B', text: 'Continue the drug if diarrhea persists for more than 24 hours' },
        { key: 'C', text: 'It is indicated for diarrhea caused by antibiotic therapy' },
        { key: 'D', text: 'It is contra indicated among patients with hypertension' }
      ],
      correctAnswer: 'A',
      explanation:
        'This question demonstrates how an examiner alters the options: In this paper, Option B was modified to "Continue the drug if diarrhea persists for more than 24 hours" (which is completely false; the rule is to STOP at 48 hours, not blindly continue). Options C and D remain unambiguously false. Therefore, the only scientifically true statement remaining is Option A: Loperamide is an opioid-receptor agonist that can cause CNS depression (drowsiness, dizziness, respiratory depression), especially in young children (which is why it is contraindicated under 2 years of age) and in overdose situations where blood-brain barrier P-glycoprotein efflux is saturated.',
      wrongOptionsExplanation:
        'B = False (do not continue beyond 48 hours); C = False (contraindicated in antibiotic diarrhoea); D = False (unrelated to hypertension).',
      trapAlert:
        'Exam Strategy Lesson: Compare each option against absolute pharmacologic facts. When the "stop at 48h" option was altered to a false statement ("continue past 24h"), the correct key shifted to CNS depression!',
      notes: 'Topic: Loperamide Pharmacology'
    },
    {
      id: 'lincosamides-q6-mar2011-cat1-q9',
      number: 6,
      examRef: 'Mar 2011 CAT 1, Q9 (True/False)',
      stem: 'True or False: Opiates decrease gastrointestinal motility.',
      options: [
        { key: 'A', text: 'True' },
        { key: 'B', text: 'False' },
        { key: 'C', text: 'True only in children' },
        { key: 'D', text: 'False in chronic use' }
      ],
      correctAnswer: 'A',
      explanation:
        'TRUE. Opioid agonists (morphine, codeine, diphenoxylate, loperamide) bind to mu-opioid receptors in the enteric nervous system (myenteric plexus). This decreases circular and longitudinal smooth muscle propulsive peristalsis and increases anal and ileocecal sphincter tone, leading to delayed colonic transit and constipation.',
      wrongOptionsExplanation: 'Opiates universally reduce motility across all age groups.',
      trapAlert: 'Opioids = decreased motility / delayed gastric emptying / constipation.',
      notes: 'Topic: Opioid Gastrointestinal Effects'
    },
    {
      id: 'lincosamides-q7-mar2011-cat1-q10',
      number: 7,
      examRef: 'Mar 2011 CAT 1, Q10 (True/False)',
      stem: 'True or False: Lactobacillus in Bio yogurt suppresses growth of diarrhoea-causing bacteria.',
      options: [
        { key: 'A', text: 'True' },
        { key: 'B', text: 'False' },
        { key: 'C', text: 'True only if refrigerated' },
        { key: 'D', text: 'False because stomach acid destroys all bacteria' }
      ],
      correctAnswer: 'A',
      explanation:
        'TRUE. Lactobacillus acidophilus and other probiotic cultures present in Bio yoghurt compete with pathogenic enterobacteria for nutrients and mucosal binding sites. Furthermore, they ferment lactose to produce lactic acid, which lowers luminal pH and inhibits the proliferation of acid-sensitive enteropathogens.',
      wrongOptionsExplanation: 'Probiotics actively suppress enteropathogens in vivo.',
      trapAlert: 'Lactobacillus / Probiotics in yoghurt = Competitive suppression of pathogens.',
      notes: 'Topic: Probiotics in Clinical Practice'
    },
    {
      id: 'lincosamides-q8-mar2011-cat1-q11',
      number: 8,
      examRef: 'Mar 2011 CAT 1, Q11 (True/False)',
      stem: 'True or False: Loperamide (Imodium) is a drug of choice in the management of chronic diarrhoea.',
      options: [
        { key: 'A', text: 'True' },
        { key: 'B', text: 'False' },
        { key: 'C', text: 'True only in acute dysentery' },
        { key: 'D', text: 'False because loperamide is strictly a short-term drug' }
      ],
      correctAnswer: 'A',
      explanation:
        'TRUE. Loperamide is widely recognized as the first-line symptomatic antidiarrhoeal agent for chronic, non-infective diarrhoea (such as diarrhoea-predominant irritable bowel syndrome [IBS-D] and post-gastrectomy or short-bowel malabsorption) once underlying infection has been ruled out. It is NOT indicated for acute bloody dysentery or antibiotic-induced colitis.',
      wrongOptionsExplanation: 'Loperamide is established first-line therapy for chronic non-infective diarrhoea.',
      trapAlert: 'Chronic non-infective diarrhoea = Loperamide is indicated; Acute bloody diarrhoea / C. diff = Loperamide is strictly contraindicated.',
      notes: 'Topic: Clinical Indications of Loperamide'
    },
    {
      id: 'lincosamides-q9-mar2011-cat1-q12',
      number: 9,
      examRef: 'Mar 2011 CAT 1, Q12 (True/False)',
      stem: 'True or False: Alcohol may increase the sedative effects of some antidiarrhoeals.',
      options: [
        { key: 'A', text: 'True' },
        { key: 'B', text: 'False' },
        { key: 'C', text: 'True only with bismuth' },
        { key: 'D', text: 'False because antidiarrhoeals have no CNS interactions' }
      ],
      correctAnswer: 'A',
      explanation:
        'TRUE. Antidiarrhoeals containing opioid agonists (such as diphenoxylate in Lomotil, codeine phosphate, or high-dose loperamide) exhibit additive central nervous system depressant effects when co-ingested with alcohol, leading to pronounced sedation, psychomotor impairment, and potential respiratory depression.',
      wrongOptionsExplanation: 'Alcohol produces synergistic CNS depression with opioid-containing antidiarrhoeals.',
      trapAlert: 'Golden Exam Rule: Any question asserting that alcohol increases the sedative effects of an opioid or CNS-active drug is virtually ALWAYS True.',
      notes: 'Topic: Drug Interactions & Patient Safety'
    }
  ] as StudyExamQuestion[],

  // =========================================================
  // PART E: HOW TO ALWAYS GET THESE RIGHT (STRATEGY & MNEMONICS)
  // =========================================================
  strategyRules: [
    {
      ruleNumber: 1,
      ruleTitle: '"Antibiotic-Associated / Induced Diarrhoea" → Probiotic & ORS; NEVER Loperamide',
      explanation:
        'When an exam asks for the management of antibiotic-induced diarrhoea, choose a Probiotic (Lactobacillus acidophilus or Enterogermina) and oral rehydration. Never pick antimotility agents (loperamide).'
    },
    {
      ruleNumber: 2,
      ruleTitle: '"Replenish Normal Flora" → Enterogermina / Lactobacillus',
      explanation:
        'Whenever an exam stem mentions replenishing, re-establishing, or restoring gut flora, the answer is Enterogermina (Bacillus clausii) or Lactobacillus. (If it asks about repairing intestinal mucosa, the answer is Zinc).'
    },
    {
      ruleNumber: 3,
      ruleTitle: 'Clindamycin → 50S Subunit, Anaerobes, Bone & C. diff Colitis',
      explanation:
        'Clindamycin binds the 50S ribosome (bacteriostatic), penetrates cortical bone (osteomyelitis), kills anaerobes (Bacteroides), shuts off exotoxins in Toxic Shock Syndrome, and carries the highest association with C. difficile pseudomembranous colitis.'
    },
    {
      ruleNumber: 4,
      ruleTitle: 'Loperamide: The 48-Hour Discontinuation Rule',
      explanation:
        'Loperamide is an opioid-receptor agonist. Discontinue if diarrhoea lasts >48 hours. Strictly contraindicated in antibiotic colitis (toxic megacolon risk), bloody dysentery, and children under 2 years.'
    },
    {
      ruleNumber: 5,
      ruleTitle: 'C. diff Infection Control: Soap and Water (Not Alcohol Rub)',
      explanation:
        'Alcohol-based hand sanitizer does NOT kill Clostridioides difficile endospores. Hand hygiene MUST be performed with soap and warm water to mechanically wash the spores off the skin.'
    }
  ],

  memoryAids: [
    {
      title: 'The 4 C\'s of C. difficile Colitis Triggers',
      phrase: 'Clinda is the C-diff Culprit: 4 C\'s = Clindamycin, Cephalosporins, Ciprofloxacin (quinolones), Co-amoxiclav',
      explanation:
        'These four antibiotic groups are the classic precipitators of Clostridioides difficile pseudomembranous colitis.'
    },
    {
      title: 'The Antimotility Danger Rule',
      phrase: 'Anti-motility traps the toxin!',
      explanation:
        'Giving loperamide in C. diff or bacterial dysentery stops peristalsis, preventing the body from flushing out exotoxins. The trapped toxins cause colonic necrosis and toxic megacolon.'
    },
    {
      title: 'Diarrhoea Triple Care Acronym',
      phrase: 'Probiotics Restore, Zinc Repairs, ORS Rehydrates',
      explanation:
        'Probiotics restore microflora, Zinc repairs the mucosal lining, and ORS rehydrates water and electrolytes.'
    }
  ],

  // =========================================================
  // PART F: MINI SELF-TEST
  // =========================================================
  miniSelfTest: [
    {
      id: 'lincosamides-test-q1',
      question: 'Which of the following antimicrobial agents carries the classic clinical association with inducing Clostridioides difficile pseudomembranous colitis?',
      options: [
        'Gentamicin',
        'Clindamycin',
        'Nitrofurantoin',
        'Isoniazid'
      ],
      correctIndex: 1,
      explanation:
        'Clindamycin is the prototypical antibiotic most famously associated with causing C. difficile pseudomembranous colitis by eradicating normal gut anaerobic flora, allowing spore germination and release of enterotoxins A and B.'
    },
    {
      id: 'lincosamides-test-q2',
      question: 'A patient develops severe watery diarrhoea 5 days into oral antibiotic therapy. Which of the following should the nurse NOT administer?',
      options: [
        'Oral Rehydration Solution (ORS)',
        'Loperamide (Imodium)',
        'Probiotic capsule (Lactobacillus acidophilus)',
        'Prompt clinical report to the attending physician'
      ],
      correctIndex: 1,
      explanation:
        'Loperamide is an antimotility agent that should NEVER be given in suspected antibiotic-associated diarrhoea. Inhibiting gut motility traps C. difficile and bacterial exotoxins in the colon, drastically increasing the risk of toxic megacolon, perforation, and death.'
    },
    {
      id: 'lincosamides-test-q3',
      question: 'What is the required hand hygiene method for healthcare workers caring for a patient isolated with confirmed Clostridioides difficile infection?',
      options: [
        'Alcohol-based hand rub only',
        'Handwashing with soap and running water',
        'No hand hygiene needed if sterile gloves are worn',
        'Chlorhexidine hand rub followed by air drying'
      ],
      correctIndex: 1,
      explanation:
        'C. difficile produces resistant bacterial endospores that are impervious to alcohol-based hand rubs. Proper hand hygiene requires vigorous washing with soap and running water for at least 20 seconds to mechanically rinse the spores off the skin.'
    },
    {
      id: 'lincosamides-test-q4',
      question: 'Lincosamide antibiotics (e.g., Clindamycin) inhibit bacterial replication by binding to which site?',
      options: [
        '30S ribosomal subunit',
        '50S ribosomal subunit',
        'Peptidoglycan cell wall transpeptidase',
        'Folic acid synthetic enzymes'
      ],
      correctIndex: 1,
      explanation:
        'Clindamycin and lincomycin reversibly bind to the 50S ribosomal subunit (identical to the binding site of macrolides and chloramphenicol), blocking transpeptidation and protein elongation to exert a bacteriostatic effect.'
    }
  ] as SelfTestQuestion[],

  // =========================================================
  // PART G: SECTION SUMMARY
  // =========================================================
  summaryBullets: [
    'Lincosamides (Clindamycin, Lincomycin): Inhibit protein synthesis at the 50S ribosomal subunit (bacteriostatic). Highly active against staphylococci, streptococci, bone infections (osteomyelitis), and anaerobes (Bacteroides).',
    'Toxic Shock Syndrome (TSS): Clindamycin uniquely shuts off bacterial ribosomal exotoxin production, making it a mandatory adjunct to beta-lactams in staphylococcal and streptococcal toxic shock.',
    'Pseudomembranous Colitis (C. difficile): Clindamycin is the classic trigger. Clinical rule: STOP the culprit antibiotic, NEVER administer antimotility drugs (loperamide), treat with oral vancomycin/fidaxomicin/metronidazole, and perform hand hygiene with soap and water (alcohol fails to kill spores).',
    'Mild Antibiotic Diarrhoea: Managed by replenishing flora with probiotics (Enterogermina / Lactobacillus) and rehydration with ORS. Loperamide is strictly discontinued after 48 hours and is contraindicated in antibiotic diarrhoea, dysentery, and children under 2 years.'
  ]
};
