/**
 * Mulwa Clinical Exam Portal
 * TNH Practice: Adults Basic Life Support
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from "../../../../types";

export const TNH_PRACTICE_ADULTS_BASIC_LIFE_SUPPORT: PastPaper = {
  "id": "tnh-practice-adults-basic-life-support",
  "year": "Practice",
  "month": "October",
  "examType": "Practice",
  "title": "Adult Basic Life Support",
  "category": "Trauma and Emergency Nursing",
  "block": "TNH Practice",
  "unit": "Trauma and Emergency Nursing",
  "totalQuestions": 40,
  "totalSets": 2,
  "sets": [
    {
      "setNumber": 1,
      "title": "Set 1",
      "description": "20 practice MCQs on definitions, goals of BLS, the chain of survival, scene safety, stimulation, shouting for help and checking for pulse and breathing, based on the Adults Basic Life Support lecture notes.",
      "questionCount": 20
    },
    {
      "setNumber": 2,
      "title": "Set 2",
      "description": "20 practice MCQs on chest compressions, high quality CPR, reassessment, airway manoeuvres, rescue breaths, bag-mask ventilation, recovery position and the AED, based on the Adults Basic Life Support lecture notes.",
      "questionCount": 20
    }
  ],
  "questions": [
    {
      "id": "tnh-practice-adults-basic-life-support_q1",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Cardiac arrest is best defined as:",
      "options": {
        "A": "The cessation of heart beats",
        "B": "The cessation of breathing",
        "C": "A slow heart rate with weak pulses",
        "D": "Chest pain caused by narrowing of the coronary arteries"
      },
      "correctAnswer": "A",
      "explanation": "The cessation of heart beats (A) is correct because cardiac arrest means that the heart has stopped beating, so there is no effective circulation to the brain and other organs. The cessation of breathing (B) is incorrect because this describes respiratory arrest, which leads to cardiac arrest within minutes if it is not corrected. A slow heart rate with weak pulses (C) is incorrect because this is bradycardia, and the heart is still beating. Chest pain caused by narrowing of the coronary arteries (D) is incorrect because this describes angina or a heart attack, and the heart has not necessarily stopped.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms, slide 3"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q2",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "Respiratory arrest is the cessation of breathing that:",
      "options": {
        "A": "Always resolves without treatment",
        "B": "Only occurs after the heart has stopped",
        "C": "Eventually leads to cardiac arrest within minutes",
        "D": "Does not affect the brain"
      },
      "correctAnswer": "C",
      "explanation": "Eventually leads to cardiac arrest within minutes (C) is correct because without breathing, oxygen supply to the heart falls and the heart stops within minutes, so respiratory arrest must be corrected quickly. Always resolves without treatment (A) is incorrect because respiratory arrest does not resolve on its own, and the victim needs rescue breaths. Only occurs after the heart has stopped (B) is incorrect because respiratory arrest can come first, and then lead to cardiac arrest. Does not affect the brain (D) is incorrect because the brain is quickly damaged by lack of oxygen when breathing stops.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms, slide 3"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q3",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "A nurse finds an unresponsive victim who is only making occasional gasps. According to the notes, gasping is considered:",
      "options": {
        "A": "Not effective breathing",
        "B": "Normal breathing",
        "C": "A sign that the pulse is strong",
        "D": "A sign that the victim should be placed in the recovery position"
      },
      "correctAnswer": "A",
      "explanation": "Not effective breathing (A) is correct because agonal gasps are not normal breathing and do not give enough ventilation, so the victim is managed as a person who is not breathing, and help is shouted for. Normal breathing (B) is incorrect because gasping is not normal breathing, and treating it as normal would delay CPR. A sign that the pulse is strong (C) is incorrect because gasping says nothing about a strong pulse, and the pulse must still be checked. A sign that the victim should be placed in the recovery position (D) is incorrect because the recovery position is for a victim who is breathing normally and has a pulse.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms, slide 3"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q4",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "Cardiopulmonary resuscitation (CPR) is the attempt to restore heart and lung function by:",
      "options": {
        "A": "Giving oral fluids and rest",
        "B": "External maintenance of circulation and respiration through chest compressions and artificial ventilation",
        "C": "Placing the victim in the recovery position only",
        "D": "Giving a pulse check every 30 seconds"
      },
      "correctAnswer": "B",
      "explanation": "External maintenance of circulation and respiration through chest compressions and artificial ventilation (B) is correct because CPR keeps blood and oxygen moving artificially: chest compressions maintain circulation, and artificial ventilation (rescue breaths) maintains respiration. Giving oral fluids and rest (A) is incorrect because oral fluids are not given to an unresponsive victim, and they do not restore heart or lung function. Placing the victim in the recovery position only (C) is incorrect because the recovery position only keeps the airway open in a breathing victim. Giving a pulse check every 30 seconds (D) is incorrect because a pulse check is an assessment and does not circulate blood.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms, slide 4"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q5",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "Basic life support (BLS) is a set of rapid interventions that can be performed by:",
      "options": {
        "A": "Doctors only",
        "B": "Nurses and paramedics only",
        "C": "Anaesthetists in the operating theatre only",
        "D": "Either health care workers or lay people"
      },
      "correctAnswer": "D",
      "explanation": "Either health care workers or lay people (D) is correct because BLS skills are meant to be used by anybody who is trained, including health workers and lay people such as police, fire fighters, security officers, flight attendants and lifeguards. Doctors only (A) is incorrect because BLS is not limited to doctors, and delay in waiting for a doctor reduces the chance of survival. Nurses and paramedics only (B) is incorrect because lay people are also trained to give BLS. Anaesthetists in the operating theatre only (C) is incorrect because BLS is meant for any place where a collapse occurs.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms and lay persons, slides 5 and 7"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q6",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "An Automated External Defibrillator (AED) is:",
      "options": {
        "A": "A bag and mask used to give rescue breaths",
        "B": "A device for measuring the blood pressure during CPR",
        "C": "A drug given to restart the heart",
        "D": "A portable device that delivers an electrical shock to a person in sudden cardiac arrest to help restore a normal heart rhythm"
      },
      "correctAnswer": "D",
      "explanation": "A portable device that delivers an electrical shock to a person in sudden cardiac arrest to help restore a normal heart rhythm (D) is correct because an AED is a portable computerised device that analyses the heart rhythm and, when needed, delivers a shock that can stop an abnormal rhythm and allow the normal rhythm to return. A bag and mask used to give rescue breaths (A) is incorrect because this is a bag valve mask (BVM), which delivers breaths and not an electrical shock. A device for measuring the blood pressure during CPR (B) is incorrect because an AED does not measure blood pressure. A drug given to restart the heart (C) is incorrect because an AED is a device and not a drug.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Definition of terms, slide 6"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q7",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "Which of the following is NOT one of the conditions that BLS targets the recognition of?",
      "options": {
        "A": "Sudden cardiac arrest",
        "B": "Fracture of the femur",
        "C": "Collapse following foreign body airway obstruction (FBAO)",
        "D": "Collapse following a heart attack or stroke"
      },
      "correctAnswer": "B",
      "explanation": "Fracture of the femur (B) is correct because BLS targets recognition of sudden cardiac arrest and of collapse following foreign body airway obstruction (FBAO), heart attack and stroke. A fractured femur is treated by first aid and splinting, and it is not a BLS target. Sudden cardiac arrest (A) is incorrect because this is the main target of BLS. Collapse following foreign body airway obstruction (FBAO) (C) is incorrect because this is a target of BLS. Collapse following a heart attack or stroke (D) is incorrect because these are targets of BLS.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS targets, slide 8"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q8",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "Which of the following is a goal of BLS?",
      "options": {
        "A": "Give definitive drug treatment for the cause of the arrest",
        "B": "Maintain brain viability",
        "C": "Delay resuscitation until the ambulance arrives",
        "D": "Replace the need for early defibrillation"
      },
      "correctAnswer": "B",
      "explanation": "Maintain brain viability (B) is correct because BLS aims to restore cardiorespiratory function, maintain brain viability, optimise the survival of the patient and prevent cardiac arrest. Give definitive drug treatment for the cause of the arrest (A) is incorrect because this is an advanced care measure and is not a goal of BLS. Delay resuscitation until the ambulance arrives (C) is incorrect because time is of the essence, and delay reduces survival. Replace the need for early defibrillation (D) is incorrect because BLS bridges to defibrillation, and does not replace it.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Goals of BLS, slide 9"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q9",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "According to the notes, for every minute of delayed resuscitation, the chances of survival decrease by about:",
      "options": {
        "A": "1 percent",
        "B": "50 percent",
        "C": "25 percent",
        "D": "10 percent"
      },
      "correctAnswer": "D",
      "explanation": "10 percent (D) is correct because survival falls by about 10 percent for every minute without resuscitation, which is why time is of the essence and CPR must be started at once. 1 percent (A) is incorrect because this is far below the figure given in the notes. 50 percent (B) is incorrect because this is too high, and it would mean that nobody would survive after 2 minutes. 25 percent (C) is incorrect because the notes give 10 percent per minute.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Goals of BLS, slide 9"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q10",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "In the adult chain of survival, the second link is:",
      "options": {
        "A": "Early CPR",
        "B": "Early defibrillation within 3 to 5 minutes",
        "C": "Activation of EMS or the local emergency response system (early access)",
        "D": "Early advanced care"
      },
      "correctAnswer": "C",
      "explanation": "Activation of EMS or the local emergency response system (early access) (C) is correct because the five links are: early recognition of the emergency, activation of EMS (early access), early CPR, early defibrillation within 3 to 5 minutes of collapse, and early advanced care. Early CPR (A) is incorrect because early CPR is the third link. Early defibrillation within 3 to 5 minutes (B) is incorrect because this is the fourth link. Early advanced care (D) is incorrect because this is the fifth and last link.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Adult chain of survival, slide 10"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q11",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "In the adult chain of survival, early defibrillation should be done within:",
      "options": {
        "A": "30 to 60 minutes of collapse",
        "B": "10 to 15 minutes of collapse",
        "C": "Only after the patient reaches hospital",
        "D": "3 to 5 minutes of collapse"
      },
      "correctAnswer": "D",
      "explanation": "3 to 5 minutes of collapse (D) is correct because early defibrillation within 3 to 5 minutes of collapse gives the best chance of survival, because the chance of success falls with each minute. 30 to 60 minutes of collapse (A) is incorrect because this is far too late, and survival would be very low. 10 to 15 minutes of collapse (B) is incorrect because this is later than the recommended time. Only after the patient reaches hospital (C) is incorrect because defibrillation should be done as early as possible using an AED, and should not wait for hospital arrival.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Adult chain of survival, slide 10"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q12",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "The correct order of the BLS sequence in the notes is:",
      "options": {
        "A": "Stimulate, Safety, Shout, Airway, Breathing, Check for pulse",
        "B": "Safety, Stimulate, Shout, Check for pulse and breathing, Airway, Breathing",
        "C": "Safety, Shout, Stimulate, Breathing, Airway, Check for pulse",
        "D": "Check for pulse, Safety, Airway, Stimulate, Shout, Breathing"
      },
      "correctAnswer": "B",
      "explanation": "Safety, Stimulate, Shout, Check for pulse and breathing, Airway, Breathing (B) is correct because the sequence is SSS-CAB: ensure safety, stimulate the victim to check for response, shout for help, check for pulse and breathing, open the airway, and give breaths. Stimulate, Safety, Shout, Airway, Breathing, Check for pulse (A) is incorrect because it starts with the victim before safety is confirmed, and it places the airway before the pulse check. Safety, Shout, Stimulate, Breathing, Airway, Check for pulse (C) is incorrect because the victim is stimulated before shouting for help, and breathing is placed before the airway. Check for pulse, Safety, Airway, Stimulate, Shout, Breathing (D) is incorrect because the pulse is checked before safety and before the response is tested.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: BLS sequence, slide 12"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q13",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "Which of the following is an appropriate scene safety measure before approaching a collapsed victim?",
      "options": {
        "A": "Use barrier devices such as a face shield or mask to reduce contact with the victim",
        "B": "Enter a burning building to reach the victim quickly",
        "C": "Work on the road way where the victim fell",
        "D": "Skip the PPE to save time"
      },
      "correctAnswer": "A",
      "explanation": "Use barrier devices such as a face shield or mask to reduce contact with the victim (A) is correct because the rescuer's safety comes first: PPE and barrier devices protect the rescuer from contact with body fluids, and the rule is not to risk your life. Enter a burning building to reach the victim quickly (B) is incorrect because the notes warn to check for falling or burning buildings, and not to risk your life. Work on the road way where the victim fell (C) is incorrect because the notes say that the victim should not be on a road way. Skip the PPE to save time (D) is incorrect because PPE is donned as part of ensuring safety.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Safety, slide 13"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q14",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "The correct way to establish unresponsiveness in a collapsed adult is to:",
      "options": {
        "A": "Shake the head and neck vigorously",
        "B": "Pour cold water on the face",
        "C": "Tap or gently shake the shoulders and call by name or ask 'are you ok' on both ears",
        "D": "Lift the victim to a sitting position and ask questions"
      },
      "correctAnswer": "C",
      "explanation": "Tap or gently shake the shoulders and call by name or ask 'are you ok' on both ears (C) is correct because the response is tested by tapping the victim, calling and asking if they are alright on both ears, and gently shaking the shoulders; the earlobes may be pinched slightly or a sternal rub may be used. Shake the head and neck vigorously (A) is incorrect because this can cause spinal injury, and the shoulders are tapped instead. Pour cold water on the face (B) is incorrect because this is not a recommended way to test response. Lift the victim to a sitting position and ask questions (D) is incorrect because the victim is not moved, and the response is tested while the victim lies flat.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Stimulate victim for response, slide 14"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q15",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "A nurse finds an unresponsive victim who only has agonal gasps. The next action is to:",
      "options": {
        "A": "Place the victim in the recovery position and wait",
        "B": "Give oral fluids",
        "C": "Shout for help",
        "D": "Leave to look for a doctor"
      },
      "correctAnswer": "C",
      "explanation": "Shout for help (C) is correct because if the victim is unresponsive and only gasping, he is not breathing effectively, so the nurse shouts for help, activates emergency services and then checks the pulse. Place the victim in the recovery position and wait (A) is incorrect because the recovery position is only for a victim who is breathing normally. Give oral fluids (B) is incorrect because an unresponsive victim must never be given anything by mouth. Leave to look for a doctor (D) is incorrect because the rescuer should not leave the victim; help is called by shouting or by mobile phone.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Stimulate victim for response, slide 14"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q16",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "When shouting for help for a collapsed victim, the rescuer should:",
      "options": {
        "A": "State that someone has collapsed, give the location, and ask for an AED and a BVM",
        "B": "Shout 'help' without giving any details",
        "C": "Ask bystanders to carry the victim to the hospital",
        "D": "Wait quietly for someone to notice"
      },
      "correctAnswer": "A",
      "explanation": "State that someone has collapsed, give the location, and ask for an AED and a BVM (A) is correct because the call for help must state what has happened and where, and ask for the resuscitation equipment, which is an AED and a BVM. Alternatively, emergency services are activated by mobile device. Shout 'help' without giving any details (B) is incorrect because the people who hear need to know what has happened and where, and what to bring. Ask bystanders to carry the victim to the hospital (C) is incorrect because the victim must not be moved, and CPR must be started on the spot. Wait quietly for someone to notice (D) is incorrect because waiting delays CPR, and survival falls by about 10 percent each minute.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Shout for help, slide 15"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q17",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "The pulse site used to assess an unresponsive adult in BLS is the:",
      "options": {
        "A": "Radial artery",
        "B": "Dorsalis pedis artery",
        "C": "Carotid artery",
        "D": "Temporal artery"
      },
      "correctAnswer": "C",
      "explanation": "Carotid artery (C) is correct because the carotid is a large central artery in the neck that is still palpable when the blood pressure is low, so it is used to check the pulse in an unresponsive adult. If there is no pulse, high quality CPR is started. Radial artery (A) is incorrect because the radial pulse is peripheral, and is lost early in shock and cardiac arrest. Dorsalis pedis artery (B) is incorrect because this is a peripheral pulse on the foot and is unreliable in arrest. Temporal artery (D) is incorrect because this is a small superficial artery, not used in BLS.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing, slide 16"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q18",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "The time taken to check for pulse and breathing in BLS should be:",
      "options": {
        "A": "Less than 2 seconds",
        "B": "At least 5 seconds and not more than 10 seconds",
        "C": "30 seconds",
        "D": "1 to 2 minutes"
      },
      "correctAnswer": "B",
      "explanation": "At least 5 seconds and not more than 10 seconds (B) is correct because the check must be long enough to feel a slow or weak pulse, but short enough so that CPR is not delayed when there is no pulse. Less than 2 seconds (A) is incorrect because this is too short to feel a weak or slow pulse reliably. 30 seconds (C) is incorrect because this is too long and would delay chest compressions. 1 to 2 minutes (D) is incorrect because this is far too long, as survival falls with every minute of delay.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing, slide 19"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q19",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "Breathing is assessed in an unresponsive victim by:",
      "options": {
        "A": "Asking the victim to take a deep breath",
        "B": "Checking the oxygen saturation with a pulse oximeter only",
        "C": "Giving two breaths and watching the stomach",
        "D": "Scanning the victim's chest for rise and fall"
      },
      "correctAnswer": "D",
      "explanation": "Scanning the victim's chest for rise and fall (D) is correct because the rescuer looks at the chest for rise and fall while checking the carotid pulse, in the same 5 to 10 seconds. Asking the victim to take a deep breath (A) is incorrect because the victim is unresponsive and cannot follow instructions. Checking the oxygen saturation with a pulse oximeter only (B) is incorrect because a pulse oximeter would delay the check, and breathing is assessed by looking at the chest. Giving two breaths and watching the stomach (C) is incorrect because breaths are given only after finding that the victim is not breathing normally.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing, slide 17"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q20",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 1,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "A collapsed adult has a pulse but is not breathing. The correct action is to give rescue breaths at a rate of:",
      "options": {
        "A": "1 breath every 6 seconds (10 breaths per minute)",
        "B": "1 breath every 2 seconds",
        "C": "30 breaths followed by 2 compressions",
        "D": "2 breaths every minute"
      },
      "correctAnswer": "A",
      "explanation": "1 breath every 6 seconds (10 breaths per minute) (A) is correct because when a pulse is felt but there is no normal breathing, only rescue breathing is needed, at 1 breath every 6 seconds, which is 10 breaths per minute. Chest compressions are not needed as the heart is beating. 1 breath every 2 seconds (B) is incorrect because this is too fast for adult rescue breathing and risks over-inflation of the stomach. 30 breaths followed by 2 compressions (C) is incorrect because this ratio is not used; compressions are not needed when there is a pulse. 2 breaths every minute (D) is incorrect because this is too slow to give enough ventilation.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing, slides 17 and 24"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q21",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Before starting chest compressions, the rescuer should make sure the victim:",
      "options": {
        "A": "Is lying on a soft bed to avoid injury",
        "B": "Is lying face up on a firm, flat surface with the chest exposed",
        "C": "Is lying face down",
        "D": "Is sitting upright in a chair"
      },
      "correctAnswer": "B",
      "explanation": "Is lying face up on a firm, flat surface with the chest exposed (B) is correct because a firm, flat surface allows the chest to be compressed effectively, and exposing the chest allows the correct hand position to be found. Is lying on a soft bed to avoid injury (A) is incorrect because a soft surface absorbs the force and makes compressions ineffective. Is lying face down (C) is incorrect because compressions are given on the front of the chest, with the victim face up. Is sitting upright in a chair (D) is incorrect because the victim must be flat so that compressions are effective.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions, slide 21"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q22",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "The correct hand position for adult chest compressions is the:",
      "options": {
        "A": "Fingertips on the upper abdomen",
        "B": "Heel of the hand on the left side of the chest over the nipple",
        "C": "Heel of one hand on the centre of the chest, on the lower half of the sternum, with the other hand on top",
        "D": "Palm on the upper half of the sternum near the neck"
      },
      "correctAnswer": "C",
      "explanation": "Heel of one hand on the centre of the chest, on the lower half of the sternum, with the other hand on top (C) is correct because the compressions are given on the lower half of the sternum, using the heel of one hand with the heel of the other hand placed on top of it. Fingertips on the upper abdomen (A) is incorrect because compressions on the abdomen do not circulate blood, and can injure the organs. Heel of the hand on the left side of the chest over the nipple (B) is incorrect because the hands are placed in the centre of the chest, and not to the side. Palm on the upper half of the sternum near the neck (D) is incorrect because the lower half of the sternum is the correct site.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions, slide 22"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q23",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "The correct body position for the rescuer giving chest compressions is:",
      "options": {
        "A": "Bent elbows with the rescuer's head far from the victim",
        "B": "Straight arms, shoulders directly over the hands, elbows locked and fingers off the chest",
        "C": "Fingers interlaced pressing on the ribs",
        "D": "Shoulders to the side of the hands"
      },
      "correctAnswer": "B",
      "explanation": "Straight arms, shoulders directly over the hands, elbows locked and fingers off the chest (B) is correct because straight arms with locked elbows and shoulders directly above the hands allow the rescuer to use body weight to press down hard, and keeping the fingers off the chest focuses the force on the heel of the hand. Bent elbows with the rescuer's head far from the victim (A) is incorrect because bent elbows tire the rescuer and give a poor depth. Fingers interlaced pressing on the ribs (C) is incorrect because fingers must be kept off the chest to avoid rib injury, and the force must be on the heel of the hand. Shoulders to the side of the hands (D) is incorrect because shoulders must be directly over the hands so that the force is vertical.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions, slide 22"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q24",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "The ratio of chest compressions to breaths in adult CPR is:",
      "options": {
        "A": "30:2",
        "B": "15:2",
        "C": "5:1",
        "D": "10:6"
      },
      "correctAnswer": "A",
      "explanation": "30:2 (A) is correct because CPR cycles start with 30 chest compressions followed by 2 breaths, and the cycle is repeated. 15:2 (B) is incorrect because this ratio is used for two rescuers giving CPR to infants and children. 5:1 (C) is incorrect because this is an old ratio and is no longer used for adults. 10:6 (D) is incorrect because this is not a recognised CPR ratio.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions, slide 24"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q25",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "To reduce compressor fatigue in a two-rescuer CPR, rescuers should switch roles:",
      "options": {
        "A": "After every single cycle, taking 30 seconds to switch",
        "B": "Only when the compressor collapses",
        "C": "About every 2 minutes (5 cycles), taking less than 5 seconds to switch",
        "D": "Every 15 minutes"
      },
      "correctAnswer": "C",
      "explanation": "About every 2 minutes (5 cycles), taking less than 5 seconds to switch (C) is correct because compressions become weaker as the rescuer tires, so roles are exchanged every 2 minutes or 5 cycles. The switch must take less than 5 seconds to keep interruptions to a minimum. After every single cycle, taking 30 seconds to switch (A) is incorrect because this wastes time, and a 30-second switch is a harmful interruption of compressions. Only when the compressor collapses (B) is incorrect because waiting until exhaustion lets the quality of compressions fall. Every 15 minutes (D) is incorrect because this is too long, as fatigue sets in much earlier.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions and check for pulse, slides 24 and 25"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q26",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "When two rescuers are giving CPR and are about to switch, the second rescuer should:",
      "options": {
        "A": "Stand away until the compressor stops",
        "B": "Check the pulse for 30 seconds before taking over",
        "C": "Stop CPR until the first rescuer has rested",
        "D": "Queue behind the compressor and hover ready to resume chest compressions"
      },
      "correctAnswer": "D",
      "explanation": "Queue behind the compressor and hover ready to resume chest compressions (D) is correct because the second rescuer waits behind the compressor, and takes over at once, so that there is minimal delay in restarting CPR. Stand away until the compressor stops (A) is incorrect because this delays the switch and leaves the chest without compressions for longer. Check the pulse for 30 seconds before taking over (B) is incorrect because the pulse check takes at most 10 seconds, and is done at the reassessment. Stop CPR until the first rescuer has rested (C) is incorrect because CPR must not be stopped for rest, and the compressor is replaced instead.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing, slide 25"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q27",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "The recommended rate of chest compressions for high quality CPR is:",
      "options": {
        "A": "100 to 120 per minute",
        "B": "40 to 60 per minute",
        "C": "60 to 80 per minute",
        "D": "150 to 200 per minute"
      },
      "correctAnswer": "A",
      "explanation": "100 to 120 per minute (A) is correct because a rate of 100 to 120 compressions per minute maintains adequate blood flow to the heart and brain. 40 to 60 per minute (B) is incorrect because this is too slow, and would not circulate enough blood. 60 to 80 per minute (C) is incorrect because this is below the recommended rate. 150 to 200 per minute (D) is incorrect because this is too fast, and the heart does not have time to fill between compressions.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Qualities of high quality CPR, slide 26"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q28",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "In high quality CPR, the depth of each compression for an adult should be at least:",
      "options": {
        "A": "0.5 inch (1 cm)",
        "B": "1 inch (2.5 cm)",
        "C": "4 inches (10 cm)",
        "D": "2 inches (5 cm)"
      },
      "correctAnswer": "D",
      "explanation": "2 inches (5 cm) (D) is correct because pressing down hard and fast, at least 5 cm, is needed to squeeze blood out of the heart and circulate it. 0.5 inch (1 cm) (A) is incorrect because this is too shallow to circulate blood. 1 inch (2.5 cm) (B) is incorrect because this is too shallow, and below the recommended depth. 4 inches (10 cm) (C) is incorrect because this is too deep and risks injury; the aim is at least 5 cm.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Qualities of high quality CPR, slide 26"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q29",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "At the end of each chest compression, the rescuer should:",
      "options": {
        "A": "Keep pressing down on the chest",
        "B": "Allow the chest to recoil completely",
        "C": "Lift the hands off the chest completely and move them away",
        "D": "Press harder to speed up the next compression"
      },
      "correctAnswer": "B",
      "explanation": "Allow the chest to recoil completely (B) is correct because complete recoil lets the heart refill with blood between compressions, and so improves the blood flow produced by the next compression. Keep pressing down on the chest (A) is incorrect because this prevents the heart from filling and reduces blood flow. Lift the hands off the chest completely and move them away (C) is incorrect because the hands stay in position, but the weight is released to allow recoil. Press harder to speed up the next compression (D) is incorrect because the chest must first return to its normal position, and extra pressure prevents recoil.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Qualities of high quality CPR, slide 26"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q30",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "CPR is given to a victim with no pulse mainly because chest compressions:",
      "options": {
        "A": "Cure the cause of the arrest immediately",
        "B": "Replace the need for rescue breaths",
        "C": "Increase myocardial and cerebral perfusion",
        "D": "Reduce the need for an AED"
      },
      "correctAnswer": "C",
      "explanation": "Increase myocardial and cerebral perfusion (C) is correct because compressions pump blood artificially, so that the heart muscle and the brain continue to receive oxygenated blood until normal circulation returns or advanced care arrives. Cure the cause of the arrest immediately (A) is incorrect because CPR buys time, and does not cure the cause of the arrest. Replace the need for rescue breaths (B) is incorrect because in the 30:2 cycle, breaths are still given to supply oxygen. Reduce the need for an AED (D) is incorrect because CPR is combined with early defibrillation and does not replace it.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Chest compressions, slide 21"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q31",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "After 5 cycles (2 minutes) of CPR, the rescuer should:",
      "options": {
        "A": "Stop CPR and wait for the ambulance",
        "B": "Give 10 more breaths without checking",
        "C": "Start abdominal thrusts",
        "D": "Reassess by checking for pulse and breathing"
      },
      "correctAnswer": "D",
      "explanation": "Reassess by checking for pulse and breathing (D) is correct because after 5 cycles of 30:2 (about 2 minutes), the victim is reassessed, to see whether the pulse and breathing have returned, and the compressors are exchanged. Stop CPR and wait for the ambulance (A) is incorrect because CPR continues if there is no pulse. Give 10 more breaths without checking (B) is incorrect because the pulse and breathing must first be checked. Start abdominal thrusts (C) is incorrect because abdominal thrusts are used for a conscious choking victim, not after cycles of CPR.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: High quality CPR, slides 27 and 28"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q32",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "After reassessing at 2 minutes, the victim still has no pulse. The rescuer should:",
      "options": {
        "A": "Give 1 breath every 6 seconds only",
        "B": "Place the victim in the recovery position",
        "C": "Continue the 30:2 cycles of chest compressions and breaths",
        "D": "Stop CPR since 2 minutes have passed"
      },
      "correctAnswer": "C",
      "explanation": "Continue the 30:2 cycles of chest compressions and breaths (C) is correct because if there is still no pulse, the victim is still in cardiac arrest, so CPR continues. If a pulse is present but there is no breathing, the rescuer gives 1 breath every 6 seconds instead. Give 1 breath every 6 seconds only (A) is incorrect because this is for a victim who has a pulse but is not breathing. Place the victim in the recovery position (B) is incorrect because the recovery position is for a victim who is breathing and has a pulse. Stop CPR since 2 minutes have passed (D) is incorrect because CPR is not stopped by time alone, and it continues until a pulse returns or help takes over.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: High quality CPR, slide 28"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q33",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "A victim of cardiac arrest resumes effective breathing during CPR. The rescuer should:",
      "options": {
        "A": "Place the victim in the recovery position",
        "B": "Continue chest compressions",
        "C": "Give 2 more rescue breaths",
        "D": "Sit the victim up and give oral fluids"
      },
      "correctAnswer": "A",
      "explanation": "Place the victim in the recovery position (A) is correct because the recovery position is used for an unconscious but breathing victim, to keep the airway open, while the victim is monitored until emergency responders arrive. Continue chest compressions (B) is incorrect because compressions are only for a victim with no pulse. Give 2 more rescue breaths (C) is incorrect because the victim is breathing effectively and does not need further rescue breaths. Sit the victim up and give oral fluids (D) is incorrect because an unconscious victim must not be given anything by mouth.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Check for pulse and breathing and recovery position, slides 18, 25 and 33"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q34",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "In a victim with a suspected head or neck injury, the airway is opened using the:",
      "options": {
        "A": "Head tilt-chin lift manoeuvre",
        "B": "Abdominal thrust",
        "C": "Recovery position",
        "D": "Jaw thrust manoeuvre"
      },
      "correctAnswer": "D",
      "explanation": "Jaw thrust manoeuvre (D) is correct because the jaw thrust lifts the jaw forward to relieve obstruction by the tongue, without moving the head or neck, which reduces neck or spine movement. Head tilt-chin lift manoeuvre (A) is incorrect because this tilts the head back and could move an injured spine, so it is used when the jaw thrust fails. Abdominal thrust (B) is incorrect because this is used for a choking victim, and is not an airway-opening manoeuvre. Recovery position (C) is incorrect because this is a body position for a breathing victim, and not a manoeuvre for opening the airway during rescue breaths.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Airway, slides 29 and 31"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q35",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "If the jaw thrust fails to open the airway in a victim with a suspected neck injury, the rescuer should:",
      "options": {
        "A": "Use the head tilt-chin lift manoeuvre",
        "B": "Leave the airway closed to protect the spine",
        "C": "Place the victim in the recovery position",
        "D": "Wait for the ambulance without doing anything"
      },
      "correctAnswer": "A",
      "explanation": "Use the head tilt-chin lift manoeuvre (A) is correct because an open airway is the priority, so if the jaw thrust fails, the head tilt-chin lift, which tilts the head back and lifts the chin, is used. Leave the airway closed to protect the spine (B) is incorrect because a closed airway means that the victim cannot be ventilated and will die. Place the victim in the recovery position (C) is incorrect because the victim has no effective breathing, and the recovery position is not for rescue breaths. Wait for the ambulance without doing anything (D) is incorrect because waiting delays ventilation, and survival falls by about 10 percent per minute.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Airway, slide 31"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q36",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "When giving rescue breaths, each breath should be given over:",
      "options": {
        "A": "5 seconds",
        "B": "1 second, with a visible chest rise",
        "C": "Less than half a second, with a forceful squeeze",
        "D": "10 seconds, with no need to watch the chest"
      },
      "correctAnswer": "B",
      "explanation": "1 second, with a visible chest rise (B) is correct because a breath delivered over 1 second that produces a visible chest rise shows that air is reaching the lungs, and it avoids forcing air into the stomach. 5 seconds (A) is incorrect because this is too slow and interrupts compressions for too long. Less than half a second, with a forceful squeeze (C) is incorrect because a forceful breath can cause stomach inflation and regurgitation. 10 seconds, with no need to watch the chest (D) is incorrect because a breath is given in 1 second, and the chest rise must be watched to confirm that it is effective.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Breathing, slide 32"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q37",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "The notes recommend that a bag valve mask (BVM) should have:",
      "options": {
        "A": "An opaque mask with no seal",
        "B": "A mask that covers only the nose",
        "C": "A transparent mask, a tight seal covering the mouth and nose, and an oxygen reservoir",
        "D": "No reservoir, to make the bag lighter"
      },
      "correctAnswer": "C",
      "explanation": "A transparent mask, a tight seal covering the mouth and nose, and an oxygen reservoir (C) is correct because a transparent mask lets the rescuer detect regurgitation (vomitus), a tight seal over mouth and nose allows effective ventilation, and an oxygen reservoir allows delivery of a good oxygen concentration. The C-E clamp technique is used to hold the mask in place. An opaque mask with no seal (A) is incorrect because an opaque mask hides vomit and a poor seal leaks air. A mask that covers only the nose (B) is incorrect because the mask must cover both the mouth and the nose. No reservoir, to make the bag lighter (D) is incorrect because without a reservoir the oxygen concentration delivered is poor.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Masks and bag-mask ventilation, slides 34 to 36"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q38",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "During bag-mask ventilation, the chest does not rise after a breath. The first actions are to:",
      "options": {
        "A": "Give more forceful breaths without changing anything",
        "B": "Reposition the head, reposition the fingers and check the mask seal, check for obstruction, and consider an adjunct",
        "C": "Stop the breaths and continue compressions only",
        "D": "Place the victim in the recovery position"
      },
      "correctAnswer": "B",
      "explanation": "Reposition the head, reposition the fingers and check the mask seal, check for obstruction, and consider an adjunct (B) is correct because failure of the chest to rise means that air is not entering the lungs, usually because of a poor head position, a poor seal or an obstruction, so these are corrected in turn, and an airway adjunct is considered. Give more forceful breaths without changing anything (A) is incorrect because forceful breaths do not correct a poor seal or an obstruction, and can inflate the stomach. Stop the breaths and continue compressions only (C) is incorrect because ventilation is needed, and the cause should be corrected first. Place the victim in the recovery position (D) is incorrect because the victim is not breathing effectively, so the recovery position is not appropriate.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Cont., slide 37"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q39",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "The recovery position is a position in which:",
      "options": {
        "A": "An unconscious but breathing patient is placed to ensure an open airway",
        "B": "A victim with no pulse is placed during chest compressions",
        "C": "A conscious choking victim is placed for abdominal thrusts",
        "D": "A victim is placed face down to give rescue breaths"
      },
      "correctAnswer": "A",
      "explanation": "An unconscious but breathing patient is placed to ensure an open airway (A) is correct because the recovery position keeps the airway open and lets fluid drain from the mouth in a victim who is unconscious but breathing normally, while the victim is monitored until emergency responders arrive. A victim with no pulse is placed during chest compressions (B) is incorrect because a victim with no pulse needs CPR on a firm, flat surface lying face up. A conscious choking victim is placed for abdominal thrusts (C) is incorrect because this is not the purpose of the recovery position. A victim is placed face down to give rescue breaths (D) is incorrect because rescue breaths are given with the victim lying face up.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: Recovery position, slide 39"
    },
    {
      "id": "tnh-practice-adults-basic-life-support_q40",
      "paperId": "tnh-practice-adults-basic-life-support",
      "setNumber": 2,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "An AED is able to:",
      "options": {
        "A": "Measure blood glucose and blood pressure",
        "B": "Deliver oxygen to the lungs",
        "C": "Shock every rhythm including a normal one",
        "D": "Identify shockable and non-shockable rhythms and deliver a shock when needed"
      },
      "correctAnswer": "D",
      "explanation": "Identify shockable and non-shockable rhythms and deliver a shock when needed (D) is correct because an AED is a computerised device that analyses the heart rhythm, identifies an abnormal rhythm that needs a shock, and delivers a shock which can stop the abnormal rhythm and allow normal rhythm to return. Measure blood glucose and blood pressure (A) is incorrect because an AED does not measure these. Deliver oxygen to the lungs (B) is incorrect because oxygen is delivered through a BVM or a mask, not the AED. Shock every rhythm including a normal one (C) is incorrect because the AED shocks only shockable rhythms, and a non-shockable rhythm is not shocked.",
      "sourceType": "practice_mcq",
      "sourceRef": "Lecture notes: AED, slide 41"
    }
  ]
};
