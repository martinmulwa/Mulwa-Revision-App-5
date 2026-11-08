/**
 * Mulwa Clinical Exam Portal
 * TNH Practice: First Aid
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from "../../../../types";

export const TNH_PRACTICE_FIRST_AID: PastPaper = {
  "id": "tnh-practice-first-aid",
  "year": "Practice",
  "month": "October",
  "examType": "Practice",
  "title": "First Aid & Triage",
  "category": "Trauma and Emergency Nursing",
  "block": "TNH Practice",
  "unit": "Trauma and Emergency Nursing",
  "totalQuestions": 40,
  "totalSets": 2,
  "sets": [
    {
      "setNumber": 1,
      "title": "Set 1: Practice Questions",
      "description": "Practice MCQs (Q1 to Q20) on First Aid (bleeding, nose bleeding, insect bites, fractures).",
      "questionCount": 20
    },
    {
      "setNumber": 2,
      "title": "Set 2: Practice Questions",
      "description": "Practice MCQs (Q1 to Q20) on First Aid (stroke, seizures, diabetic emergencies, spinal and head injuries).",
      "questionCount": 20
    }
  ],
  "questions": [
    {
      "id": "tnh-practice-first-aid_q1",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Bleeding is classified as internal when:",
      "options": {
        "A": "Blood is visible on the skin's surface from a cut or scrape",
        "B": "Only a little blood is lost from a minor wound",
        "C": "A lot of blood is lost and the patient is likely to go into shock",
        "D": "Deeper tissues and blood vessels are damaged, so blood is not seen on the skin's surface"
      },
      "correctAnswer": "D",
      "explanation": "Deeper tissues and blood vessels are damaged, so blood is not seen on the skin's surface (D) is correct because internal bleeding results from damage to deeper tissues and vessels, while external bleeding is the one where blood is visible on the skin's surface. Blood visible on the skin (A) describes external bleeding. A small loss of blood from a minor wound (B) describes mild bleeding. A large loss with likely shock (C) describes severe bleeding, which can be either external or internal.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Classification"
    },
    {
      "id": "tnh-practice-first-aid_q2",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "A patient has lost a lot of blood from a wound and is likely to go into shock. This bleeding is classified as:",
      "options": {
        "A": "Severe bleeding",
        "B": "Mild bleeding",
        "C": "Moderate bleeding",
        "D": "Internal bleeding only"
      },
      "correctAnswer": "A",
      "explanation": "Severe bleeding (A) is correct because, when a lot of blood is lost, the patient is likely to go into shock. Mild bleeding (B) is where little blood is lost. Moderate bleeding (C) is where more blood is lost, but less than in severe bleeding. Internal bleeding only (D) is incorrect because severity is graded separately from whether the blood is visible (external) or hidden (internal).",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Classification"
    },
    {
      "id": "tnh-practice-first-aid_q3",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "The first step in the first aid of a person with severe bleeding or a large wound is to:",
      "options": {
        "A": "Apply a tourniquet",
        "B": "Remove the soaked dressing",
        "C": "Call emergency services immediately",
        "D": "Give the person fluids to drink"
      },
      "correctAnswer": "C",
      "explanation": "Call emergency services immediately (C) is correct because if the bleeding is severe or the wound is large, emergency help is called at once; direct pressure is then applied while waiting. Applying a tourniquet (A) is done later and only if the rescuer is trained and direct pressure fails on a limb. Removing the soaked dressing (B) is incorrect because dressings are not removed. Giving fluids to drink (D) is not part of the bleeding first aid steps.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q4",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "The most appropriate way to control bleeding from a wound is to:",
      "options": {
        "A": "Wash the wound repeatedly under running water",
        "B": "Leave the wound uncovered so that it can dry",
        "C": "Apply a cold pack to the surrounding skin only",
        "D": "Apply firm, direct pressure on the wound with a clean cloth or dressing"
      },
      "correctAnswer": "D",
      "explanation": "Apply firm, direct pressure on the wound with a clean cloth or dressing (D) is correct because direct pressure is the main step that helps to stop the bleeding. Repeated washing (A) would wash away forming clots and does not control bleeding. Leaving the wound uncovered (B) allows continued blood loss and contamination. A cold pack on the surrounding skin only (C) does not provide the pressure needed on the bleeding point.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q5",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "In the first aid of a bleeding limb, the injured limb should be raised:",
      "options": {
        "A": "Above the level of the heart, to help reduce blood flow to the area",
        "B": "Below the level of the heart, to slow the venous return",
        "C": "To the level of the heart only, to keep the limb comfortable",
        "D": "Only after the tourniquet has been loosened"
      },
      "correctAnswer": "A",
      "explanation": "Above the level of the heart, to help reduce blood flow to the area (A) is correct because elevation is used together with direct pressure, if possible. Below the level of the heart (B) would increase the blood flow to the wound. Raising the limb only to the level of the heart (C) does not reduce the flow enough. Raising it only after the tourniquet has been loosened (D) has no basis in the notes, since the tourniquet is a later step.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q6",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "If direct pressure and elevation do not stop bleeding from a limb, the next step for a trained rescuer is to:",
      "options": {
        "A": "Remove the dressing and inspect the wound",
        "B": "Give the patient something to eat",
        "C": "Apply pressure to a pressure point on a nearby artery",
        "D": "Place the patient in the recovery position"
      },
      "correctAnswer": "C",
      "explanation": "Apply pressure to a pressure point on a nearby artery (C) is correct because, if direct pressure and elevation fail, pressure is applied to a nearby artery (the pressure point), if the rescuer is trained. Removing the dressing (A) is incorrect because it can disrupt clotting. Giving food (B) is not appropriate for a bleeding patient who may need surgery. The recovery position (D) is used for an unconscious patient who is breathing, not as a way to control bleeding.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q7",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "A tourniquet is applied in the first aid of bleeding only when:",
      "options": {
        "A": "The bleeding is from the nose",
        "B": "The bleeding is mild and from the trunk; it is applied over the wound",
        "C": "The rescuer has no training; it is applied below the wound",
        "D": "The bleeding is severe, from a limb, and the rescuer is trained; it is applied above the wound"
      },
      "correctAnswer": "D",
      "explanation": "The bleeding is severe, from a limb, and the rescuer is trained; it is applied above the wound (D) is correct because these are the conditions given for using a tourniquet. A nosebleed (A) is managed by leaning forward and pinching the nose. A mild bleed from the trunk (B) cannot be controlled by a tourniquet, and it is not placed over the wound. Use by an untrained rescuer below the wound (C) is incorrect, since it is used only if trained and it is placed above the wound.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q8",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "The reason for reassuring a bleeding person and keeping them warm is to:",
      "options": {
        "A": "Stop the bleeding directly",
        "B": "Prevent shock",
        "C": "Relieve pain completely",
        "D": "Prevent infection of the wound"
      },
      "correctAnswer": "B",
      "explanation": "Prevent shock (B) is correct because the injured person is reassured and kept warm and calm to prevent shock, and their breathing and level of consciousness are monitored continuously. Stopping the bleeding directly (A) is done by pressure, elevation and, if needed, a tourniquet. Relieving pain completely (C) is not achieved by warmth and reassurance. Preventing infection (D) is done by wound care, not by keeping the person warm.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q9",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "A dressing applied to a bleeding wound is soaked through with blood. The rescuer should:",
      "options": {
        "A": "Leave it in place and keep applying pressure, because removing it can disrupt clotting",
        "B": "Remove it at once and replace it with a clean dressing",
        "C": "Remove it and wash the wound with soap",
        "D": "Loosen it to let the blood drain"
      },
      "correctAnswer": "A",
      "explanation": "Leave it in place and keep applying pressure, because removing it can disrupt clotting (A) is correct because a dressing already in place is not removed, even if it soaks through. Removing it and replacing it (B), removing it and washing the wound (C), and loosening it (D) would all disturb the clot that is forming and increase bleeding.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q10",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "While waiting for help to arrive, the first aider caring for a bleeding person should continuously monitor the person's:",
      "options": {
        "A": "Blood glucose and temperature",
        "B": "Breathing and level of consciousness",
        "C": "Urine output and appetite",
        "D": "Pulse pressure with a sphygmomanometer only"
      },
      "correctAnswer": "B",
      "explanation": "Breathing and level of consciousness (B) is correct because the first aider continuously monitors these and is prepared to give further first aid if needed. Blood glucose and temperature (A), urine output and appetite (C), and a pulse pressure measured only with a sphygmomanometer (D) are not the monitoring priorities in bleeding first aid and are not part of the steps given.",
      "sourceType": "generated_mcq",
      "sourceRef": "Bleeding: Steps for first aid"
    },
    {
      "id": "tnh-practice-first-aid_q11",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "Which of the following is a systemic cause of epistaxis (nose bleeding)?",
      "options": {
        "A": "Nose picking and blows to the nose",
        "B": "Dry air and chemical irritants",
        "C": "Colds and sinusitis",
        "D": "High blood pressure, bleeding disorders and certain medications"
      },
      "correctAnswer": "D",
      "explanation": "High blood pressure, bleeding disorders and certain medications (D) is correct because these are the systemic causes. Nose picking and blows (A) are trauma, dry air and chemical irritants (B) cause irritation, and colds and sinusitis (C) cause inflammation from infection; these are local causes.",
      "sourceType": "generated_mcq",
      "sourceRef": "Nose bleeding: Causes"
    },
    {
      "id": "tnh-practice-first-aid_q12",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "The correct first aid position for a person with a nosebleed is to:",
      "options": {
        "A": "Lean the head back and pinch the bridge of the nose",
        "B": "Lie flat on the back with the nose uncovered",
        "C": "Lean the head forward and pinch the soft part of the nose",
        "D": "Lie down with the head turned to one side"
      },
      "correctAnswer": "C",
      "explanation": "Lean the head forward and pinch the soft part of the nose (C) is correct because leaning forward lets the blood drain out of the nose instead of down the throat. Leaning the head back (A) and lying flat (B) let blood run into the throat, which can be swallowed or cause choking. Lying down with the head to one side (D) is not the recommended position, since the instruction is to lean forward and not to lie down.",
      "sourceType": "generated_mcq",
      "sourceRef": "Nose bleeding: First aid"
    },
    {
      "id": "tnh-practice-first-aid_q13",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "Which of the following should a first aider NOT do for a person with a nosebleed?",
      "options": {
        "A": "Encourage the person to spit out remaining blood",
        "B": "Tilt the head back or lie down",
        "C": "Pinch the soft part of the nose",
        "D": "Seek medical treatment if the bleeding persists"
      },
      "correctAnswer": "B",
      "explanation": "Tilt the head back or lie down (B) is correct because this is one of the don'ts, together with picking or blowing the nose and swallowing the remaining blood. Encouraging the person to spit out blood (A), pinching the soft part of the nose (C) and seeking medical treatment if the bleeding persists (D) are all recommended.",
      "sourceType": "generated_mcq",
      "sourceRef": "Nose bleeding: First aid"
    },
    {
      "id": "tnh-practice-first-aid_q14",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "In the immediate management of an insect bite, the first step is to:",
      "options": {
        "A": "Apply a cold compress to the bite",
        "B": "Give an antihistamine for itching",
        "C": "Assess the scene to make sure the area is safe and check the person's airway, breathing and circulation",
        "D": "Wash the bite with soap and water"
      },
      "correctAnswer": "C",
      "explanation": "Assess the scene to make sure the area is safe and check the person's airway, breathing and circulation (C) is correct because the first step is to assess the scene and the ABCs. The cold compress (A), the antihistamine (B) and washing the bite (D) come later, once the person is safe and is not in a life-threatening state.",
      "sourceType": "generated_mcq",
      "sourceRef": "Insect bite: Immediate management"
    },
    {
      "id": "tnh-practice-first-aid_q15",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "A bee sting with the stinger still visible should be managed by:",
      "options": {
        "A": "Squeezing the stinger to drain out the venom",
        "B": "Removing the stinger without squeezing it, because squeezing can release more venom",
        "C": "Leaving the stinger in place until the swelling is gone",
        "D": "Cutting the skin around the stinger"
      },
      "correctAnswer": "B",
      "explanation": "Removing the stinger without squeezing it, because squeezing can release more venom (B) is correct. Squeezing the stinger (A) can release more venom. Leaving it in place (C) allows more venom to be delivered. Cutting the skin (D) is not a recommended first aid measure and causes further injury.",
      "sourceType": "generated_mcq",
      "sourceRef": "Insect bite: Immediate management"
    },
    {
      "id": "tnh-practice-first-aid_q16",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "To reduce swelling and pain after an insect bite, the first aider should apply a cold compress for:",
      "options": {
        "A": "1 to 2 minutes at a time",
        "B": "45 to 60 minutes continuously",
        "C": "2 to 3 hours continuously",
        "D": "15 to 20 minutes at a time"
      },
      "correctAnswer": "D",
      "explanation": "15 to 20 minutes at a time (D) is correct because a cold compress (an ice pack wrapped in a cloth, or a cold, wet cloth) is applied for 15 to 20 minutes at a time. 1 to 2 minutes (A) is too short to be effective. 45 to 60 minutes (B) and 2 to 3 hours (C) of continuous cold can damage the skin. The affected limb is also elevated, and antihistamines are used for itching.",
      "sourceType": "generated_mcq",
      "sourceRef": "Insect bite: Minimising swelling and pain"
    },
    {
      "id": "tnh-practice-first-aid_q17",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "Which of the following findings after an insect bite means that the person needs medical attention?",
      "options": {
        "A": "Mild itching at the site of the bite",
        "B": "Slight swelling that is improving",
        "C": "Mild pain relieved by paracetamol",
        "D": "Difficulty breathing, throat swelling and dizziness"
      },
      "correctAnswer": "D",
      "explanation": "Difficulty breathing, throat swelling and dizziness (D) is correct because these are signs of a severe allergic reaction (anaphylaxis); a widespread rash, signs of infection such as pus or necrotic tissue, increased pain, redness, swelling and worsening symptoms also need medical attention. Mild itching (A), slight improving swelling (B) and mild pain relieved by paracetamol (C) are localised reactions that can be treated at home.",
      "sourceType": "generated_mcq",
      "sourceRef": "Insect bite: When to seek medical attention"
    },
    {
      "id": "tnh-practice-first-aid_q18",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "A bone fracture is defined as:",
      "options": {
        "A": "A tear in the ligament that joins two bones",
        "B": "A break or crack in a bone, from a hairline crack to a complete break",
        "C": "A stretch injury of a muscle",
        "D": "A displacement of a joint without a break in the bone"
      },
      "correctAnswer": "B",
      "explanation": "A break or crack in a bone, from a hairline crack to a complete break (B) is correct because a fracture is a break in the structural continuity of a bone, which can result from trauma, overuse or underlying conditions that weaken the bone. A torn ligament (A) is a sprain, a stretched muscle (C) is a strain, and a joint displacement without a bone break (D) is a dislocation.",
      "sourceType": "generated_mcq",
      "sourceRef": "Fractures: Definition"
    },
    {
      "id": "tnh-practice-first-aid_q19",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "In the PRICE treatment for soft tissue injuries and closed fractures, the letter 'C' stands for:",
      "options": {
        "A": "Cold water",
        "B": "Comfortable support, by applying a supportive bandage",
        "C": "Cast application",
        "D": "Cleaning the wound"
      },
      "correctAnswer": "B",
      "explanation": "Comfortable support, by applying a supportive bandage (B) is correct. PRICE stands for Protect the injury, Rest the injury, Ice (apply a wrapped ice pack), Comfortable support and Elevate to reduce swelling. Cold water (A), cast application (C) and cleaning the wound (D) are not what the letter C represents.",
      "sourceType": "generated_mcq",
      "sourceRef": "Fractures: PRICE treatment"
    },
    {
      "id": "tnh-practice-first-aid_q20",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 1,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "In the PRICE treatment, the ice used to reduce swelling should be applied as:",
      "options": {
        "A": "Ice placed directly on the skin",
        "B": "Ice sealed under a tight bandage overnight",
        "C": "A wrapped ice pack",
        "D": "A hot compress alternating with ice"
      },
      "correctAnswer": "C",
      "explanation": "A wrapped ice pack (C) is correct because 'I' stands for Ice, applied as a wrapped ice pack, which protects the skin. Ice placed directly on the skin (A) can cause a cold injury. Ice sealed under a tight bandage overnight (B) is unsafe. A hot compress alternating with ice (D) is not part of PRICE and heat would increase swelling.",
      "sourceType": "generated_mcq",
      "sourceRef": "Fractures: PRICE treatment"
    },
    {
      "id": "tnh-practice-first-aid_q21",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Ischemic stroke, which accounts for about 85% of strokes, is caused by:",
      "options": {
        "A": "Arteries blocked by blood clots, leading to significant hypoperfusion of the brain",
        "B": "Blood vessels in or around the brain bursting and bleeding",
        "C": "An electrical disturbance in the nerve cells of the brain",
        "D": "A fall in blood sugar to a very low level"
      },
      "correctAnswer": "A",
      "explanation": "Arteries blocked by blood clots, leading to significant hypoperfusion of the brain (A) is correct because a stroke is damage to the brain from interruption of its blood supply, and in ischemic stroke the arteries are blocked by clots. Burst vessels (B) describe hemorrhagic stroke, which makes up about 15%. An electrical disturbance in the nerve cells (C) describes a seizure. A fall in blood sugar (D) describes hypoglycemia.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: Types"
    },
    {
      "id": "tnh-practice-first-aid_q22",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "In hemorrhagic stroke:",
      "options": {
        "A": "Arteries are blocked by clots, leading to hypoperfusion",
        "B": "Blood vessels in or around the brain burst and bleed, putting pressure on brain cells",
        "C": "There is a sudden excessive discharge from cerebral neurons",
        "D": "There is excessively high blood glucose with fruity breath"
      },
      "correctAnswer": "B",
      "explanation": "Blood vessels in or around the brain burst and bleed, putting pressure on brain cells (B) is correct, and it accounts for about 15% of strokes. Blocked arteries (A) describe ischemic stroke. Excessive neuronal discharge (C) describes a seizure. High blood glucose with fruity breath (D) describes hyperglycemia.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: Types"
    },
    {
      "id": "tnh-practice-first-aid_q23",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "The leading cause of stroke is:",
      "options": {
        "A": "Smoking",
        "B": "Hypertension",
        "C": "Excessive alcohol intake",
        "D": "Psychological stress"
      },
      "correctAnswer": "B",
      "explanation": "Hypertension (B) is correct because it is the leading cause of stroke. Smoking (A) damages blood vessels, excessive alcohol intake (C), diabetes, high cholesterol and psychological factors such as stress and depression (D) are also causes, but hypertension is the leading one.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: Causes"
    },
    {
      "id": "tnh-practice-first-aid_q24",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "In the FAST acronym used to recognise a stroke, 'A' stands for:",
      "options": {
        "A": "Alertness",
        "B": "Airway obstruction",
        "C": "Anxiety",
        "D": "Arm weakness"
      },
      "correctAnswer": "D",
      "explanation": "Arm weakness (D) is correct because FAST stands for Face dropping, Arm weakness, Speech difficulty and Time to call if these symptoms are present. Alertness (A), airway obstruction (B) and anxiety (C) are not part of the FAST acronym.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: First aid and management"
    },
    {
      "id": "tnh-practice-first-aid_q25",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "A patient with a stroke becomes unconscious while waiting for the ambulance but is breathing. The first aider should:",
      "options": {
        "A": "Place the patient in the recovery position",
        "B": "Give the patient water to drink",
        "C": "Start chest compressions",
        "D": "Sit the patient upright and leave"
      },
      "correctAnswer": "A",
      "explanation": "Place the patient in the recovery position (A) is correct because, if the patient becomes unconscious, the patient is placed in the recovery position, while emergency services are already activated; CPR is started only if the patient becomes unresponsive and is not breathing. Giving water (B) risks choking. Chest compressions (C) are not needed for a patient who is breathing. Sitting the patient upright and leaving (D) is unsafe since the airway may be compromised and the patient must be watched.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: First aid and management"
    },
    {
      "id": "tnh-practice-first-aid_q26",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "The drug of choice for ischemic stroke, according to the notes, is:",
      "options": {
        "A": "IV alteplase given within 3 hours",
        "B": "IV diazepam 10 mg",
        "C": "Oral glucose",
        "D": "Epinephrine intramuscularly"
      },
      "correctAnswer": "A",
      "explanation": "IV alteplase given within 3 hours (A) is correct because it dissolves the clot that blocks the artery; thrombectomy can also be done to remove the clot, while surgery is done in hemorrhagic stroke. (Current guidelines allow alteplase up to 4.5 hours in selected patients.) Diazepam (B) is an anticonvulsant for seizures. Oral glucose (C) is for hypoglycemia. Epinephrine (D) is for anaphylaxis.",
      "sourceType": "generated_mcq",
      "sourceRef": "Stroke: Medical management"
    },
    {
      "id": "tnh-practice-first-aid_q27",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "A seizure is best described as:",
      "options": {
        "A": "Damage to the brain from interruption of its blood supply",
        "B": "A break in the structural continuity of the skull",
        "C": "An episode of abnormal motor, sensory, autonomic or psychic activity from sudden excessive discharge of cerebral neurons",
        "D": "An excessively low blood glucose level"
      },
      "correctAnswer": "C",
      "explanation": "An episode of abnormal motor, sensory, autonomic or psychic activity from sudden excessive discharge of cerebral neurons (C) is correct because the underlying cause is an electrical disturbance in the nerve cells in one section of the brain. Damage from interruption of blood supply (A) describes a stroke. A skull fracture (B) is a head injury. A low blood glucose (D) describes hypoglycemia.",
      "sourceType": "generated_mcq",
      "sourceRef": "Seizures: Definition"
    },
    {
      "id": "tnh-practice-first-aid_q28",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "Which of the following is a recognised cause of seizures?",
      "options": {
        "A": "Eating a large meal, exercise and cold weather",
        "B": "Sprains, strains and closed fractures",
        "C": "Insect bites and bleeding from cuts",
        "D": "Fever in childhood, head injury, hypoxemia and drug and alcohol withdrawal"
      },
      "correctAnswer": "D",
      "explanation": "Fever in childhood, head injury, hypoxemia and drug and alcohol withdrawal (D) is correct; the causes also include idiopathic (genetic or developmental defects), cerebrovascular disease, hypertension, brain tumour and allergies. Eating a large meal, exercise and cold weather (A), sprains, strains and closed fractures (B), and insect bites and bleeding from cuts (C) are not listed as causes of seizures.",
      "sourceType": "generated_mcq",
      "sourceRef": "Seizures: Causes"
    },
    {
      "id": "tnh-practice-first-aid_q29",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "A person is having a convulsive seizure. The first aider should:",
      "options": {
        "A": "Remove nearby objects, cushion the head and loosen tight neckwear",
        "B": "Restrain the limbs to stop the movements",
        "C": "Put an object in the mouth to prevent tongue biting",
        "D": "Move the person to another room at once"
      },
      "correctAnswer": "A",
      "explanation": "Remove nearby objects, cushion the head and loosen tight neckwear (A) is correct because the aim is to keep the person safe while staying with them. The person should not be restrained (B), nothing should be put in the mouth (C), and the person should not be moved unless in immediate danger (D).",
      "sourceType": "generated_mcq",
      "sourceRef": "Seizures: First aid"
    },
    {
      "id": "tnh-practice-first-aid_q30",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "After a seizure has ended, the person who is breathing should be:",
      "options": {
        "A": "Gently rolled onto the side into the recovery position, to facilitate drainage of oral secretions",
        "B": "Left lying flat on the back until fully alert",
        "C": "Made to sit up immediately and given something to drink",
        "D": "Left alone to rest in a quiet room"
      },
      "correctAnswer": "A",
      "explanation": "Gently rolled onto the side into the recovery position, to facilitate drainage of oral secretions (A) is correct. The first aider also stays with the person until fully recovered and aware of the surroundings, and suction is done if needed. Lying flat on the back (B) risks aspiration. Sitting up and giving a drink (C) risks choking in a drowsy person. Leaving the person alone (D) is incorrect because the person must be accompanied until fully recovered.",
      "sourceType": "generated_mcq",
      "sourceRef": "Seizures: First aid"
    },
    {
      "id": "tnh-practice-first-aid_q31",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "In the hospital management of seizures, IV diazepam 10 mg is given:",
      "options": {
        "A": "To every patient at the start of a single short seizure",
        "B": "Before the airway has been secured and oxygen given",
        "C": "Only if the convulsions are continuous or after more than one episode has been observed",
        "D": "Only after the patient has recovered fully"
      },
      "correctAnswer": "C",
      "explanation": "Only if the convulsions are continuous or after more than one episode has been observed (C) is correct. Other measures are placing the bed in a low position with two to three padded side rails up, and giving oxygen to offset hypoxia. Giving diazepam to every patient (A) is incorrect since it is not routine. Giving it before securing the airway and oxygen (B) is unsafe. Giving it after full recovery (D) would serve no purpose.",
      "sourceType": "generated_mcq",
      "sourceRef": "Seizures: Management"
    },
    {
      "id": "tnh-practice-first-aid_q32",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "Hypoglycemia in a diabetic person results from:",
      "options": {
        "A": "Eating too much food, taking too little medication or having an infection",
        "B": "Missing a meal, eating too little, exercising more than usual, vomiting or taking too much medication",
        "C": "Exercising less than usual",
        "D": "Taking too little insulin"
      },
      "correctAnswer": "B",
      "explanation": "Missing a meal, eating too little, exercising more than usual, vomiting or taking too much medication (B) is correct because these lower the blood glucose. Eating too much, taking too little medication or an infection (A), less exercise (C) and too little insulin (D) lead to hyperglycemia, not hypoglycemia.",
      "sourceType": "generated_mcq",
      "sourceRef": "Diabetic emergencies: Hypoglycemia"
    },
    {
      "id": "tnh-practice-first-aid_q33",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "Which set of signs is typical of hypoglycemia?",
      "options": {
        "A": "Warm, dry skin, fruity sweet breath and excessive thirst",
        "B": "Black eyes and bruising behind the ears",
        "C": "Sweating with cold, clammy skin, rapid pulse, trembling and confusion",
        "D": "Sudden facial droop and slurred speech"
      },
      "correctAnswer": "C",
      "explanation": "Sweating with cold, clammy skin, rapid pulse, trembling and confusion (C) is correct; weakness, faintness, hunger, palpitations and a deteriorating level of response also occur. Warm, dry skin, fruity sweet breath and excessive thirst (A) are signs of hyperglycemia. Black eyes and bruising behind the ears (B) point to a skull fracture. Facial droop and slurred speech (D) point to a stroke.",
      "sourceType": "generated_mcq",
      "sourceRef": "Diabetic emergencies: Hypoglycemia"
    },
    {
      "id": "tnh-practice-first-aid_q34",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "A conscious, fully alert diabetic person has signs of hypoglycemia. The first aider should:",
      "options": {
        "A": "Give insulin to bring the glucose down",
        "B": "Give the person nothing by mouth",
        "C": "Give a drink to a person who is no longer alert",
        "D": "Help the person to rest and give something sugary to eat"
      },
      "correctAnswer": "D",
      "explanation": "Help the person to rest and give something sugary to eat (D) is correct. If the person does not improve, the emergency response team is called, and breathing and the level of response are monitored. Insulin (A) would lower the glucose further. Giving nothing by mouth (B) is wrong for an alert person with low glucose. Feeding a person who is not fully alert (C) must be avoided because the person may choke.",
      "sourceType": "generated_mcq",
      "sourceRef": "Diabetic emergencies: Hypoglycemia management"
    },
    {
      "id": "tnh-practice-first-aid_q35",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "Which of the following signs suggests hyperglycemia in a diabetic person?",
      "options": {
        "A": "Warm, dry skin, rapid pulse and breathing, and fruity, sweet breath",
        "B": "Cold, clammy skin and trembling",
        "C": "Hunger and sweating",
        "D": "Palpitations and irrational behaviour"
      },
      "correctAnswer": "A",
      "explanation": "Warm, dry skin, rapid pulse and breathing, and fruity, sweet breath (A) is correct; excessive thirst and drowsiness leading to unresponsiveness (diabetic coma) also occur. Cold, clammy skin and trembling (B), hunger and sweating (C), and palpitations and irrational behaviour (D) are signs of hypoglycemia.",
      "sourceType": "generated_mcq",
      "sourceRef": "Diabetic emergencies: Hyperglycemia"
    },
    {
      "id": "tnh-practice-first-aid_q36",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "Which of the following may indicate a spinal injury?",
      "options": {
        "A": "Unusual tingling or absence of sensation in the limbs, incontinence and inability to move the limbs",
        "B": "Fruity, sweet breath and excessive thirst",
        "C": "A sudden, severe headache with warm, dry skin",
        "D": "Itching and a localised red swelling"
      },
      "correctAnswer": "A",
      "explanation": "Unusual tingling or absence of sensation in the limbs, incontinence and inability to move the limbs (A) is correct; the body may also lie in an awkward, unnatural position and the skin may be clammy and cool. Fruity breath and thirst (B) suggest hyperglycemia. A severe headache with warm, dry skin (C) does not point to spinal injury. Itching and localised redness (D) suggest an insect bite.",
      "sourceType": "generated_mcq",
      "sourceRef": "Spinal injuries: Signs and symptoms"
    },
    {
      "id": "tnh-practice-first-aid_q37",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "The correct first aid for a person with a suspected spinal injury is to:",
      "options": {
        "A": "Sit the person up to ease breathing",
        "B": "Twist the head to the side so that the airway drains",
        "C": "Keep the head in line with the neck and avoid moving the person unless there is an urgent need",
        "D": "Move the person to a comfortable position at once"
      },
      "correctAnswer": "C",
      "explanation": "Keep the head in line with the neck and avoid moving the person unless there is an urgent need (C) is correct. A rolled cloth or towel can be placed around the neck as a reminder to keep the head straight, and twisting or rolling the head to the side is avoided. Sitting the person up (A), twisting the head to the side (B) and moving the person at once (D) can worsen the cord injury.",
      "sourceType": "generated_mcq",
      "sourceRef": "Spinal injuries: Management"
    },
    {
      "id": "tnh-practice-first-aid_q38",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "A closed head injury is one in which there is:",
      "options": {
        "A": "Bleeding from a wound on the face or head",
        "B": "A visible deformity of the skull with an open wound",
        "C": "No visible sign of injury to the face or head",
        "D": "Clear fluid draining from the ears"
      },
      "correctAnswer": "C",
      "explanation": "No visible sign of injury to the face or head (C) is correct because head injuries are of two types: open, with bleeding wounds to the face or head, and closed, with no visible signs of injury. A closed injury can still be serious, so the person must be watched for altered consciousness that may improve for a while and deteriorate again later. Bleeding from a wound (A) and a skull deformity with an open wound (B) describe an open injury. Clear fluid from the ears (D) is a sign of a skull base fracture, not a definition of a closed injury.",
      "sourceType": "generated_mcq",
      "sourceRef": "Head injury: Types"
    },
    {
      "id": "tnh-practice-first-aid_q39",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "Clear fluid draining from the ears or nose after a head injury suggests:",
      "options": {
        "A": "A minor scalp laceration",
        "B": "A closed head injury with no brain involvement",
        "C": "A bleeding disorder",
        "D": "A skull fracture at the base of the skull, with leakage of cerebrospinal fluid"
      },
      "correctAnswer": "D",
      "explanation": "A skull fracture at the base of the skull, with leakage of cerebrospinal fluid (D) is correct. Other signs are altered consciousness, skull deformities, black eyes and bruised skin behind the ears, vision changes and nausea and vomiting. A minor scalp laceration (A) would not cause clear fluid. A closed head injury with no brain involvement (B) is not suggested by CSF leakage. A bleeding disorder (C) would produce blood, not clear fluid.",
      "sourceType": "generated_mcq",
      "sourceRef": "Head injury: Signs and symptoms"
    },
    {
      "id": "tnh-practice-first-aid_q40",
      "paperId": "tnh-practice-first-aid",
      "setNumber": 2,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "A first aider attends a person with a head injury and bleeding from the scalp. The best management is to:",
      "options": {
        "A": "Move the person into a sitting position to see the wound",
        "B": "Control the bleeding with direct pressure and a dressing, avoid moving the person, and monitor airway and breathing",
        "C": "Remove all blood clots from the scalp wound",
        "D": "Leave the wound uncovered and wait for the ambulance"
      },
      "correctAnswer": "B",
      "explanation": "Control the bleeding with direct pressure and a dressing, avoid moving the person, and monitor airway and breathing (B) is correct because scalp injuries can bleed profusely, and the person should not be moved unless in immediate danger, as movement may cause complications to the head, spine or neck; CPR is started if the person stops breathing or has no pulse. Moving the person to a sitting position (A) risks spinal injury. Removing clots (C) would restart bleeding. Leaving the wound uncovered (D) allows continued blood loss.",
      "sourceType": "generated_mcq",
      "sourceRef": "Head injury: Management"
    }
  ]
};
