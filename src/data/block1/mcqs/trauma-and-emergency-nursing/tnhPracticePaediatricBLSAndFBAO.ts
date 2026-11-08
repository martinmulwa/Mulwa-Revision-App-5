/**
 * Mulwa Clinical Exam Portal
 * TNH Practice: Paediatric BLS & Foreign Body Airway Obstruction
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from "../../../../types";

export const TNH_PRACTICE_PAEDIATRIC_BLS_AND_FBAO: PastPaper = {
  "id": "tnh-practice-paediatric-bls-and-fbao",
  "year": "Practice",
  "month": "October",
  "examType": "Practice",
  "title": "Paediatric BLS & FBAO",
  "category": "Trauma and Emergency Nursing",
  "block": "TNH Practice",
  "unit": "Trauma and Emergency Nursing",
  "totalQuestions": 40,
  "totalSets": 2,
  "sets": [
    {
      "setNumber": 1,
      "title": "Set 1: Paediatric BLS (Concepts and Assessment)",
      "description": "20 practice MCQs on the paediatric chain of survival, age definitions, paediatric airway considerations, the BLS sequence and algorithm, and assessment of pulse and breathing, based on the Paediatric BLS & Foreign Body Airway Obstruction lecture notes.",
      "questionCount": 20
    },
    {
      "setNumber": 2,
      "title": "Set 2: Infant and Child CPR and Foreign Body Airway Obstruction",
      "description": "20 practice MCQs on infant and child CPR technique, compression ratios, reassessment, causes and signs of airway obstruction, and management of foreign body airway obstruction in infants and children, based on the Paediatric BLS & Foreign Body Airway Obstruction lecture notes.",
      "questionCount": 20
    }
  ],
  "questions": [
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q1",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "The first link in the paediatric chain of survival is:",
      "options": {
        "A": "Early recognition",
        "B": "High-quality CPR",
        "C": "Rapid defibrillation and advanced care",
        "D": "Prevention"
      },
      "correctAnswer": "D",
      "explanation": "Prevention (D) is correct because the paediatric chain begins with prevention, because cardiac arrest in children is usually the end result of preventable injury or respiratory problems. Early recognition (A) is incorrect because early recognition is the second link. High-quality CPR (B) is incorrect because high-quality CPR is the fourth link. Rapid defibrillation and advanced care (C) is incorrect because this is the fifth link.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Paediatric chain of survival, slide 3"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q2",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "The last link in the paediatric chain of survival is:",
      "options": {
        "A": "Prevention",
        "B": "Integrated post-cardiac arrest care",
        "C": "Prompt calling for emergency help (EMS)",
        "D": "High-quality CPR"
      },
      "correctAnswer": "B",
      "explanation": "Integrated post-cardiac arrest care (B) is correct because the chain runs from prevention, early recognition, prompt calling for emergency help (EMS), high-quality CPR, and rapid defibrillation and advanced care, to integrated post-cardiac arrest care as the final link. Prevention (A) is incorrect because prevention is the first link. Prompt calling for emergency help (EMS) (C) is incorrect because this is the third link. High-quality CPR (D) is incorrect because this is the fourth link.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Paediatric chain of survival, slide 3"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q3",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "Cardiac arrest in children is commonly due to:",
      "options": {
        "A": "Primary ventricular fibrillation",
        "B": "Hypertension",
        "C": "Hyperglycaemia",
        "D": "Respiratory arrest"
      },
      "correctAnswer": "D",
      "explanation": "Respiratory arrest (D) is correct because in children, the heart usually stops as a result of hypoxia from respiratory failure or airway obstruction, and not from a primary heart problem as in many adults. Primary ventricular fibrillation (A) is incorrect because this is a more common cause in adults. Hypertension (B) is incorrect because high blood pressure is not a common cause of cardiac arrest in children. Hyperglycaemia (C) is incorrect because this does not commonly cause cardiac arrest in children.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS review, slide 4"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q4",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "For the purposes of paediatric BLS, infancy ends at:",
      "options": {
        "A": "1 month of age",
        "B": "1 year of age",
        "C": "6 months of age",
        "D": "5 years of age"
      },
      "correctAnswer": "B",
      "explanation": "1 year of age (B) is correct because an infant is a child under 1 year of age, and a child is from 1 year to the onset of puberty. 1 month of age (A) is incorrect because this is the end of the neonatal period, and not of infancy. 6 months of age (C) is incorrect because infancy extends beyond 6 months. 5 years of age (D) is incorrect because this is the end of the under-five age group, and not of infancy.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS review, slide 4"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q5",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "For the purposes of paediatric BLS, childhood extends from 1 year of age to:",
      "options": {
        "A": "The onset of puberty (12 to 14 years of age)",
        "B": "5 years of age",
        "C": "8 years of age",
        "D": "18 years of age"
      },
      "correctAnswer": "A",
      "explanation": "The onset of puberty (12 to 14 years of age) (A) is correct because after the onset of puberty, the adult BLS approach is used. 5 years of age (B) is incorrect because childhood extends well beyond 5 years. 8 years of age (C) is incorrect because childhood for BLS purposes continues to the onset of puberty. 18 years of age (D) is incorrect because the cut-off is the onset of puberty, and not 18 years.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS review, slide 4"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q6",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "An infant's tongue is relatively large in proportion to the oropharynx. The result of this is that:",
      "options": {
        "A": "The airway is always protected in an unconscious infant",
        "B": "The infant can safely be put in the sniffing position",
        "C": "Displacement of the tongue occurs readily, causing severe airway obstruction",
        "D": "Foreign body obstruction cannot occur"
      },
      "correctAnswer": "C",
      "explanation": "Displacement of the tongue occurs readily, causing severe airway obstruction (C) is correct because a relatively large tongue falls back easily in an unresponsive infant, so the airway must be opened and maintained. The airway is always protected in an unconscious infant (A) is incorrect because the opposite is true, as the airway is easily blocked by the tongue. The infant can safely be put in the sniffing position (B) is incorrect because the large occiput is the reason the sniffing position may block the airway, and the tongue size does not make it safe. Foreign body obstruction cannot occur (D) is incorrect because the small airway makes foreign body obstruction more likely.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Considerations in paeds BLS, slide 5"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q7",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "Which of the following is NOT a feature of the paediatric airway or physiology that affects BLS?",
      "options": {
        "A": "Limited reserve of oxygen",
        "B": "Large abdominal organs, especially in infants",
        "C": "Larger upper and lower airways than an adult",
        "D": "A smaller sub-glottic airway"
      },
      "correctAnswer": "C",
      "explanation": "Larger upper and lower airways than an adult (C) is correct because children have smaller upper and lower airways, so even a small obstruction is serious. The other features are a smaller sub-glottic airway, limited oxygen reserve, large abdominal organs (especially in infants), a large occiput and a large surface area to volume ratio. Limited reserve of oxygen (A) is incorrect because this is a recognised feature, so children become hypoxic quickly. Large abdominal organs, especially in infants (B) is incorrect because this is a recognised feature. A smaller sub-glottic airway (D) is incorrect because this is a recognised feature.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Considerations in paeds BLS, slides 5 to 7"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q8",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "Children deteriorate quickly when their breathing is compromised mainly because they have:",
      "options": {
        "A": "A limited reserve of oxygen",
        "B": "A large reserve of oxygen",
        "C": "A larger sub-glottic airway",
        "D": "Smaller abdominal organs"
      },
      "correctAnswer": "A",
      "explanation": "A limited reserve of oxygen (A) is correct because with a small oxygen store, hypoxia develops in a short time once breathing stops or the airway is obstructed, so airway and breathing support must start at once. A large reserve of oxygen (B) is incorrect because this is the opposite of what the notes state. A larger sub-glottic airway (C) is incorrect because their sub-glottic airway is smaller, not larger. Smaller abdominal organs (D) is incorrect because infants have large abdominal organs.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Considerations in paeds BLS, slide 6"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q9",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "Infants have a large occiput. The practical importance of this in BLS is that:",
      "options": {
        "A": "The infant must be placed with the head hanging back",
        "B": "Chest compressions must not be given",
        "C": "A pulse cannot be checked in the infant",
        "D": "The sniffing position may obstruct the airway"
      },
      "correctAnswer": "D",
      "explanation": "The sniffing position may obstruct the airway (D) is correct because the large occiput flexes the neck when the infant lies flat, and over-extension or flexion can block the airway, so the head is kept in a neutral position when opening the airway. The infant must be placed with the head hanging back (A) is incorrect because this would block the airway. Chest compressions must not be given (B) is incorrect because the occiput does not prevent chest compressions. A pulse cannot be checked in the infant (C) is incorrect because the brachial pulse can be checked in an infant.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Considerations in paeds BLS, slide 7"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q10",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "Infants have a large surface area to volume ratio compared with adults. This means that they:",
      "options": {
        "A": "Retain heat better than adults",
        "B": "Need less oxygen than adults",
        "C": "Lose body heat more quickly",
        "D": "Have larger airways than adults"
      },
      "correctAnswer": "C",
      "explanation": "Lose body heat more quickly (C) is correct because a large surface area relative to body volume allows rapid heat loss, so infants must be kept warm during resuscitation. Retain heat better than adults (A) is incorrect because the opposite is true. Need less oxygen than adults (B) is incorrect because a large surface area to volume ratio does not reduce oxygen needs. Have larger airways than adults (D) is incorrect because their airways are smaller than those of adults.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Considerations in paeds BLS, slide 7"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q11",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "The correct order of the paediatric BLS sequence is:",
      "options": {
        "A": "Safety, Stimulate, Shout, Check for pulse and breathing, Airway, Breathing",
        "B": "Airway, Breathing, Safety, Stimulate, Shout, Check for pulse",
        "C": "Shout, Safety, Stimulate, Breathing, Airway, Check for pulse",
        "D": "Check for pulse, Airway, Safety, Stimulate, Breathing, Shout"
      },
      "correctAnswer": "A",
      "explanation": "Safety, Stimulate, Shout, Check for pulse and breathing, Airway, Breathing (A) is correct because the sequence is the same as in adults (SSS-CAB): safety, stimulate, shout, check for pulse and breathing, airway, and breathing. Airway, Breathing, Safety, Stimulate, Shout, Check for pulse (B) is incorrect because it starts with the airway, before safety is confirmed. Shout, Safety, Stimulate, Breathing, Airway, Check for pulse (C) is incorrect because it shouts before safety, and it places breathing before the airway. Check for pulse, Airway, Safety, Stimulate, Breathing, Shout (D) is incorrect because the pulse is checked first, before safety and response.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS sequence, slide 8"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q12",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "To determine responsiveness in a child, the rescuer should:",
      "options": {
        "A": "Gently tap the shoulder and speak loudly, asking 'are you ok'",
        "B": "Shake the child hard by the head",
        "C": "Pour cold water on the child's face",
        "D": "Lift the child up and walk to find help"
      },
      "correctAnswer": "A",
      "explanation": "Gently tap the shoulder and speak loudly, asking 'are you ok' (A) is correct because a gentle tap on the shoulder with a loud voice tests the response without moving or harming the child. Shake the child hard by the head (B) is incorrect because this could injure the neck or spine. Pour cold water on the child's face (C) is incorrect because this is not a recommended way to test response. Lift the child up and walk to find help (D) is incorrect because the child is first assessed where they lie, and help is called.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Determine responsiveness, slide 10"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q13",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "A child is found to be responsive after a gentle tap and a loud voice. The rescuer should:",
      "options": {
        "A": "Start chest compressions",
        "B": "Place the child in a position of comfort",
        "C": "Give 5 rescue breaths",
        "D": "Place the child flat on the back and leave"
      },
      "correctAnswer": "B",
      "explanation": "Place the child in a position of comfort (B) is correct because a responsive child is helped into a position of comfort, and monitored. Start chest compressions (A) is incorrect because compressions are for a child who is unresponsive with no signs of circulation. Give 5 rescue breaths (C) is incorrect because rescue breaths are for a child who is not breathing normally. Place the child flat on the back and leave (D) is incorrect because the child should be made comfortable and watched.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Determine responsiveness, slide 10"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q14",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "A nurse who is off duty finds an unresponsive child. According to the notes, she should:",
      "options": {
        "A": "Leave the child immediately to call EMS and return later",
        "B": "Wait for another person to arrive before doing anything",
        "C": "Give only oral fluids and watch",
        "D": "Provide BLS for about 2 minutes, then call the EMS system"
      },
      "correctAnswer": "D",
      "explanation": "Provide BLS for about 2 minutes, then call the EMS system (D) is correct because for a lone rescuer who is not on duty, about 2 minutes of BLS is given first, because the cause is usually respiratory, and then emergency services are called. Leave the child immediately to call EMS and return later (A) is incorrect because the notes advise starting BLS first for about 2 minutes. Wait for another person to arrive before doing anything (B) is incorrect because waiting delays resuscitation. Give only oral fluids and watch (C) is incorrect because an unresponsive child must not be given anything by mouth.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Determine responsiveness, slide 10"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q15",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "In the paediatric BLS algorithm for health professionals, an unresponsive child is not breathing normally after the airway is opened. The next action is to give:",
      "options": {
        "A": "2 rescue breaths",
        "B": "5 rescue breaths",
        "C": "30 chest compressions",
        "D": "1 rescue breath"
      },
      "correctAnswer": "B",
      "explanation": "5 rescue breaths (B) is correct because in the paediatric algorithm, shouting for help and opening the airway are followed by 5 initial rescue breaths when the child is not breathing normally, because hypoxia is the usual cause of the arrest. 2 rescue breaths (A) is incorrect because 2 breaths are given after each 15 compressions, and the initial number is 5. 30 chest compressions (C) is incorrect because compressions come after the 5 rescue breaths, if there are no signs of circulation. 1 rescue breath (D) is incorrect because the initial number of rescue breaths is 5.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: PBLS algorithm, slide 9"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q16",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "After 5 rescue breaths, a child is still unresponsive with no signs of circulation. The rescuer should give:",
      "options": {
        "A": "15 chest compressions followed by 2 rescue breaths, and call the resuscitation team after 1 minute",
        "B": "30 chest compressions followed by 2 rescue breaths, then stop after 1 minute",
        "C": "5 more rescue breaths only",
        "D": "Wait for the resuscitation team before any compressions"
      },
      "correctAnswer": "A",
      "explanation": "15 chest compressions followed by 2 rescue breaths, and call the resuscitation team after 1 minute (A) is correct because when there are no signs of circulation, CPR is started in the ratio of 15 compressions to 2 rescue breaths. After 1 minute of CPR, the resuscitation team is called, and CPR continues. 30 chest compressions followed by 2 rescue breaths, then stop after 1 minute (B) is incorrect because 30:2 is the single rescuer ratio for adults, and CPR is not stopped after 1 minute. 5 more rescue breaths only (C) is incorrect because when there are no signs of circulation, compressions are needed. Wait for the resuscitation team before any compressions (D) is incorrect because CPR is started at once, and the team is called after 1 minute.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: PBLS algorithm, slide 9"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q17",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "The pulse is checked at which site in an infant?",
      "options": {
        "A": "Carotid artery",
        "B": "Radial artery",
        "C": "Brachial artery",
        "D": "Dorsalis pedis artery"
      },
      "correctAnswer": "C",
      "explanation": "Brachial artery (C) is correct because the brachial pulse is used in infants, because the short, fat neck makes the carotid pulse hard to feel. The carotid pulse is used in a child. Carotid artery (A) is incorrect because this is used in a child, and not in an infant. Radial artery (B) is incorrect because this is a peripheral pulse, that is hard to feel in an infant. Dorsalis pedis artery (D) is incorrect because this is a peripheral pulse in the foot, and is unreliable.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Assess for a pulse and breathing, slides 11 and 14"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q18",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "The pulse is checked at which site in a child (over 1 year)?",
      "options": {
        "A": "Brachial artery",
        "B": "Femoral artery in the groin",
        "C": "Carotid artery",
        "D": "Radial artery"
      },
      "correctAnswer": "C",
      "explanation": "Carotid artery (C) is correct because the carotid pulse is used in a child, while the brachial pulse is used in an infant. Brachial artery (A) is incorrect because this is the site used in an infant. Femoral artery in the groin (B) is incorrect because this is not the standard site in paediatric BLS, and exposure of the groin wastes time. Radial artery (D) is incorrect because this is a peripheral pulse, that is unreliable in a collapsed child.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Assess for a pulse and breathing, slide 14"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q19",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "When assessing a collapsed child, breathing and pulse should be assessed:",
      "options": {
        "A": "One after the other, taking 30 seconds for each",
        "B": "For at least 1 full minute",
        "C": "Only after 5 cycles of CPR",
        "D": "At the same time, taking not more than 10 seconds"
      },
      "correctAnswer": "D",
      "explanation": "At the same time, taking not more than 10 seconds (D) is correct because assessing breathing and pulse at the same time for no longer than 10 seconds minimises delay in starting CPR. One after the other, taking 30 seconds for each (A) is incorrect because this would delay CPR. For at least 1 full minute (B) is incorrect because this is much too long. Only after 5 cycles of CPR (C) is incorrect because assessment comes before CPR, and is repeated after every 5 cycles.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Assess for a pulse and breathing, slide 11"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q20",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 1,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "A child is breathing normally and has a pulse. The rescuer should:",
      "options": {
        "A": "Start chest compressions",
        "B": "Activate the emergency system and monitor the child until help arrives",
        "C": "Give 5 rescue breaths",
        "D": "Leave the child alone and go away"
      },
      "correctAnswer": "B",
      "explanation": "Activate the emergency system and monitor the child until help arrives (B) is correct because a child who is breathing normally with a pulse does not need CPR, but needs help and observation until emergency responders arrive. Start chest compressions (A) is incorrect because compressions are not given when there is a pulse. Give 5 rescue breaths (C) is incorrect because the child is breathing normally, so rescue breaths are not needed. Leave the child alone and go away (D) is incorrect because the child must be monitored until help arrives.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Assess for a pulse and breathing, slide 11"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q21",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "For chest compressions in an infant, the rescuer can use:",
      "options": {
        "A": "The heel of both hands on the upper sternum",
        "B": "Fingertips pressed on the abdomen",
        "C": "The heel of one hand in the middle of the sternum just below the nipple line, or the two thumb-encircling hands technique",
        "D": "A fist placed on the xiphoid process"
      },
      "correctAnswer": "C",
      "explanation": "The heel of one hand in the middle of the sternum just below the nipple line, or the two thumb-encircling hands technique (C) is correct because both techniques compress the lower part of the infant's sternum, and the infant is placed on a firm surface with the airway maintained. The heel of both hands on the upper sternum (A) is incorrect because this is too large for an infant and the position is incorrect. Fingertips pressed on the abdomen (B) is incorrect because compressions are on the chest and not on the abdomen. A fist placed on the xiphoid process (D) is incorrect because this is not a recognised technique and can injure the infant.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 16"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q22",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "The depth of chest compressions in an infant is:",
      "options": {
        "A": "At least 5 cm, as in adults",
        "B": "One tenth of the chest depth",
        "C": "One third of the depth of the chest (about 4 cm)",
        "D": "Half of the chest depth"
      },
      "correctAnswer": "C",
      "explanation": "One third of the depth of the chest (about 4 cm) (C) is correct because compressing to one third of the chest depth, about 4 cm in an infant, is enough to circulate blood without causing injury, and the chest must recoil fully after every compression. At least 5 cm, as in adults (A) is incorrect because 5 cm is the adult depth, and is too deep for an infant. One tenth of the chest depth (B) is incorrect because this is too shallow to circulate blood. Half of the chest depth (D) is incorrect because this is too deep for an infant.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 16"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q23",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "In infant CPR, after every 30 compressions the rescuer should:",
      "options": {
        "A": "Give 5 breaths over 5 seconds",
        "B": "Open the airway with head tilt-chin lift and give 2 breaths, each over one second",
        "C": "Give 1 breath every 6 seconds for 2 minutes",
        "D": "Check the blood pressure"
      },
      "correctAnswer": "B",
      "explanation": "Open the airway with head tilt-chin lift and give 2 breaths, each over one second (B) is correct because the airway is opened after each set of compressions, and two breaths are given, each lasting about 1 second. Give 5 breaths over 5 seconds (A) is incorrect because 2 breaths are given in each cycle, and each lasts 1 second. Give 1 breath every 6 seconds for 2 minutes (C) is incorrect because this is rescue breathing for a victim who has a pulse. Check the blood pressure (D) is incorrect because the blood pressure is not checked during CPR.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 17"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q24",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "During infant CPR, interruptions in chest compressions should be minimised to less than:",
      "options": {
        "A": "10 seconds",
        "B": "30 seconds",
        "C": "1 minute",
        "D": "2 minutes"
      },
      "correctAnswer": "A",
      "explanation": "10 seconds (A) is correct because each interruption reduces blood flow to the heart and brain, so pauses must be kept below 10 seconds. 30 seconds (B) is incorrect because this is too long and reduces survival. 1 minute (C) is incorrect because this is far too long. 2 minutes (D) is incorrect because this is the interval for reassessment, and not the time allowed for an interruption.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 17"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q25",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "The compression to ventilation ratio for a single rescuer in adults, children and infants is:",
      "options": {
        "A": "15:2",
        "B": "5:1",
        "C": "10:6",
        "D": "30:2"
      },
      "correctAnswer": "D",
      "explanation": "30:2 (D) is correct because for a single rescuer, the ratio is the same for adults, children and infants, 30 compressions to 2 breaths. 15:2 (A) is incorrect because this is the ratio for two rescuers in an infant or child. 5:1 (B) is incorrect because this is an old ratio and is no longer used. 10:6 (C) is incorrect because this is not a recognised ratio.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 18"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q26",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "When two rescuers are resuscitating an infant or a child, the compression to ventilation ratio is:",
      "options": {
        "A": "30:2",
        "B": "15:1",
        "C": "15:2",
        "D": "30:1"
      },
      "correctAnswer": "C",
      "explanation": "15:2 (C) is correct because with two rescuers, the ratio changes to 15 compressions to 2 breaths in an infant or child, because one rescuer is giving breaths while the other compresses. 30:2 (A) is incorrect because this is the ratio for a single rescuer. 15:1 (B) is incorrect because this is not a recognised ratio. 30:1 (D) is incorrect because this is not a recognised ratio.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 18"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q27",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "The universal rate of chest compressions in all cardiac arrest victims is:",
      "options": {
        "A": "60 to 80 per minute",
        "B": "100 to 120 per minute",
        "C": "80 to 100 per minute",
        "D": "140 to 160 per minute"
      },
      "correctAnswer": "B",
      "explanation": "100 to 120 per minute (B) is correct because this rate applies to adults, children and infants, and gives adequate blood flow. 60 to 80 per minute (A) is incorrect because this is too slow. 80 to 100 per minute (C) is incorrect because this is below the recommended rate. 140 to 160 per minute (D) is incorrect because this is too fast, so the heart cannot fill between compressions.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Infant CPR, slide 18"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q28",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "In child CPR, the correct hand position for chest compressions is:",
      "options": {
        "A": "The heel of one hand over the lower half of the sternum, avoiding the xiphoid process, while the other hand maintains the airway",
        "B": "Both hands over the xiphoid process",
        "C": "Fingertips over the upper abdomen",
        "D": "The heel of the hand over the upper part of the sternum"
      },
      "correctAnswer": "A",
      "explanation": "The heel of one hand over the lower half of the sternum, avoiding the xiphoid process, while the other hand maintains the airway (A) is correct because the child lies on a firm surface, one hand keeps the head tilted to hold the airway open, and the heel of the other hand compresses the lower half of the sternum, avoiding the xiphoid process. Both hands over the xiphoid process (B) is incorrect because pressing on the xiphoid process can injure the liver. Fingertips over the upper abdomen (C) is incorrect because compressions are on the chest, and not on the abdomen. The heel of the hand over the upper part of the sternum (D) is incorrect because the lower half of the sternum is the correct site.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Child CPR, slide 20"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q29",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "In child CPR, the chest should be compressed to a depth of:",
      "options": {
        "A": "One tenth of the depth of the chest",
        "B": "Two thirds of the depth of the chest",
        "C": "One third of the depth of the chest",
        "D": "The full depth of the chest"
      },
      "correctAnswer": "C",
      "explanation": "One third of the depth of the chest (C) is correct because compressing the chest to one third of its depth, at a rate of 100 to 120 per minute, gives effective circulation. One tenth of the depth of the chest (A) is incorrect because this is too shallow. Two thirds of the depth of the chest (B) is incorrect because this is too deep and risks injury. The full depth of the chest (D) is incorrect because this would cause serious injury.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Child CPR, slide 20"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q30",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "During child CPR, the rescuer should reassess for breathing and pulse after every:",
      "options": {
        "A": "Single compression",
        "B": "5 cycles of CPR",
        "C": "30 minutes",
        "D": "1 cycle of CPR"
      },
      "correctAnswer": "B",
      "explanation": "5 cycles of CPR (B) is correct because reassessment after 5 cycles (about 2 minutes) shows whether the child has regained circulation or breathing. Single compression (A) is incorrect because this would interrupt compressions all the time. 30 minutes (C) is incorrect because this is much too long. 1 cycle of CPR (D) is incorrect because this is too frequent, and would cause repeated interruptions.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Child CPR, slide 21"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q31",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "A child resumes effective breathing during CPR. The rescuer should:",
      "options": {
        "A": "Continue chest compressions",
        "B": "Give 5 more rescue breaths",
        "C": "Place the child in the recovery position",
        "D": "Lay the child flat on the back and leave"
      },
      "correctAnswer": "C",
      "explanation": "Place the child in the recovery position (C) is correct because when effective breathing returns, the child is placed in the recovery position, and observed until help arrives. Continue chest compressions (A) is incorrect because compressions are not needed when circulation and breathing have returned. Give 5 more rescue breaths (B) is incorrect because the child is breathing effectively. Lay the child flat on the back and leave (D) is incorrect because the recovery position protects the airway.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Child CPR, slide 21"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q32",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "Croup is:",
      "options": {
        "A": "An infection of the soft tissue above the vocal cords",
        "B": "A foreign body lodged in the airway",
        "C": "A bacterial infection of the lungs only",
        "D": "A viral infection of the airway below the level of the vocal cords"
      },
      "correctAnswer": "D",
      "explanation": "A viral infection of the airway below the level of the vocal cords (D) is correct because croup is a viral infection that causes narrowing of the airway below the vocal cords, and is one of the causes of airway obstruction in children, along with epiglottitis and foreign body airway obstruction. An infection of the soft tissue above the vocal cords (A) is incorrect because this describes epiglottitis. A foreign body lodged in the airway (B) is incorrect because this is foreign body airway obstruction (FBAO). A bacterial infection of the lungs only (C) is incorrect because croup affects the airway below the vocal cords, and is viral.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Airway obstruction, slide 22"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q33",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "Epiglottitis is:",
      "options": {
        "A": "An infection of the soft tissue in the area above the vocal cords",
        "B": "A viral infection of the airway below the level of the vocal cords",
        "C": "A foreign body in the bronchus",
        "D": "A collapsed lung"
      },
      "correctAnswer": "A",
      "explanation": "An infection of the soft tissue in the area above the vocal cords (A) is correct because epiglottitis involves infection and swelling of the epiglottis and the tissue above the vocal cords, and can cause a life-threatening airway obstruction. A viral infection of the airway below the level of the vocal cords (B) is incorrect because this describes croup. A foreign body in the bronchus (C) is incorrect because this is not epiglottitis. A collapsed lung (D) is incorrect because this is a pneumothorax.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Airway obstruction, slide 22"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q34",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "Which of the following is a sign of airway obstruction in a child?",
      "options": {
        "A": "Increased breath sounds",
        "B": "Bounding pulses with warm hands",
        "C": "Dilated pupils",
        "D": "Stridor with retractions"
      },
      "correctAnswer": "D",
      "explanation": "Stridor with retractions (D) is correct because signs of airway obstruction include stridor, retractions, difficulty speaking, and decreased or absent breath sounds. Increased breath sounds (A) is incorrect because breath sounds are decreased or absent in obstruction. Bounding pulses with warm hands (B) is incorrect because these are not signs of airway obstruction. Dilated pupils (C) is incorrect because this is not a sign of airway obstruction.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Signs and symptoms, slide 23"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q35",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "Which of the following is a sign of SEVERE airway obstruction in a child?",
      "options": {
        "A": "A loud, effective cough",
        "B": "Crying loudly",
        "C": "Talking in full sentences",
        "D": "Ineffective (silent) cough and inability to cry"
      },
      "correctAnswer": "D",
      "explanation": "Ineffective (silent) cough and inability to cry (D) is correct because severe obstruction is shown by an ineffective cough with no sound, inability to cry, increasing respiratory difficulty with stridor, cyanosis and loss of consciousness. A loud, effective cough (A) is incorrect because an effective cough shows that the obstruction is not severe. Crying loudly (B) is incorrect because a child who can cry loudly has an open airway. Talking in full sentences (C) is incorrect because this shows adequate airflow.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Signs of severe airway obstruction, slide 24"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q36",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "Back slaps, chest thrusts and abdominal thrusts relieve a foreign body obstruction by:",
      "options": {
        "A": "Reducing the pressure in the chest",
        "B": "Increasing intrathoracic pressure, which can expel the foreign body from the airway",
        "C": "Dissolving the foreign body",
        "D": "Opening the airway by tilting the head"
      },
      "correctAnswer": "B",
      "explanation": "Increasing intrathoracic pressure, which can expel the foreign body from the airway (B) is correct because each of the manoeuvres raises the pressure in the chest suddenly, and pushes the foreign body out of the airway. Reducing the pressure in the chest (A) is incorrect because they increase the pressure, and not decrease it. Dissolving the foreign body (C) is incorrect because they do not dissolve it; they push it out. Opening the airway by tilting the head (D) is incorrect because this is a different manoeuvre, used for opening the airway.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: FBAO, slide 25"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q37",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "A child has an effective cough after choking on a foreign body. The correct action is to:",
      "options": {
        "A": "Encourage coughing, and keep checking for deterioration to an ineffective cough",
        "B": "Give 5 back blows and 5 thrusts at once",
        "C": "Start chest compressions",
        "D": "Give 5 rescue breaths"
      },
      "correctAnswer": "A",
      "explanation": "Encourage coughing, and keep checking for deterioration to an ineffective cough (A) is correct because an effective cough is the best way to expel the object, so no manoeuvre is done. The child is watched until the obstruction is relieved or the cough becomes ineffective. Give 5 back blows and 5 thrusts at once (B) is incorrect because these are for an ineffective cough in a conscious child. Start chest compressions (C) is incorrect because compressions are for a child who has no signs of circulation. Give 5 rescue breaths (D) is incorrect because rescue breaths are for a child who is unconscious with an open airway.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: FBAO, slide 25"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q38",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "A conscious infant has an ineffective cough from a foreign body. The correct management is to:",
      "options": {
        "A": "Give 5 abdominal thrusts with the infant standing",
        "B": "Hold the infant face down, give 5 back slaps, turn the infant upright on the thigh, give 5 chest thrusts, check the airway and repeat",
        "C": "Give 30 chest compressions at once",
        "D": "Do a blind finger sweep of the mouth"
      },
      "correctAnswer": "B",
      "explanation": "Hold the infant face down, give 5 back slaps, turn the infant upright on the thigh, give 5 chest thrusts, check the airway and repeat (B) is correct because back slaps and chest thrusts are used in an infant, and the cycle is repeated as often as necessary. Abdominal thrusts are not used in infants. Give 5 abdominal thrusts with the infant standing (A) is incorrect because abdominal thrusts are used in a child over 1 year, and not in an infant. Give 30 chest compressions at once (C) is incorrect because compressions are for an unresponsive infant with no signs of circulation. Do a blind finger sweep of the mouth (D) is incorrect because a blind sweep can push the object deeper, and the airway is only checked for a visible object.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Management of airway obstruction in infants, slides 26 and 27"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q39",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "A conscious child with an ineffective cough from a foreign body is managed by kneeling behind the child and giving:",
      "options": {
        "A": "Five chest compressions with the child lying flat",
        "B": "Five rescue breaths",
        "C": "A single slap on the back, and no more",
        "D": "Five abdominal thrusts, repeated until the object comes out"
      },
      "correctAnswer": "D",
      "explanation": "Five abdominal thrusts, repeated until the object comes out (D) is correct because abdominal thrusts are used for a conscious child over 1 year, and are repeated until the object is expelled or the child becomes unconscious. Five chest compressions with the child lying flat (A) is incorrect because this is CPR, not for a conscious choking child. Five rescue breaths (B) is incorrect because breaths are given if the child is unconscious. A single slap on the back, and no more (C) is incorrect because this is not enough; a cycle of 5 back blows and 5 thrusts is used.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: FBAO and management in a child, slides 25 and 28"
    },
    {
      "id": "tnh-practice-paediatric-bls-and-fbao_q40",
      "paperId": "tnh-practice-paediatric-bls-and-fbao",
      "setNumber": 2,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "A choking child becomes unconscious. The rescuer should:",
      "options": {
        "A": "Inspect the airway, attempt rescue breathing, and begin CPR if the airway remains obstructed",
        "B": "Continue abdominal thrusts only",
        "C": "Wait for the child to wake up",
        "D": "Give oral fluids to wash the object down"
      },
      "correctAnswer": "A",
      "explanation": "Inspect the airway, attempt rescue breathing, and begin CPR if the airway remains obstructed (A) is correct because in an unconscious child, the airway is opened and checked, 5 rescue breaths are attempted, and if the airway stays obstructed, CPR is started. Continue abdominal thrusts only (B) is incorrect because once the child is unconscious, the child is laid down and the unconscious sequence is followed. Wait for the child to wake up (C) is incorrect because waiting delays treatment, and the child may stop breathing. Give oral fluids to wash the object down (D) is incorrect because an unconscious child must never be given anything by mouth.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: FBAO and management in a child, slides 25 and 29"
    }
  ]
};
