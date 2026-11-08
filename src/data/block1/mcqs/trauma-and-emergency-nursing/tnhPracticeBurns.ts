/**
 * Mulwa Clinical Exam Portal
 * TNH Practice: Burns
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from "../../../../types";

export const TNH_PRACTICE_BURNS: PastPaper = {
  "id": "tnh-practice-burns",
  "year": "Practice",
  "month": "October",
  "examType": "Practice",
  "title": "Burns & Inhalation Injury",
  "category": "Trauma and Emergency Nursing",
  "block": "TNH Practice",
  "unit": "Trauma and Emergency Nursing",
  "totalQuestions": 40,
  "totalSets": 2,
  "sets": [
    {
      "setNumber": 1,
      "title": "Set 1: Practice Questions",
      "description": "20 practice MCQs on burns: pathophysiology (local and systemic responses), complications, depth classification and TBSA estimation, drawn from the Burns lecture notes (20/03/2026).",
      "questionCount": 20
    },
    {
      "setNumber": 2,
      "title": "Set 2: Practice Questions",
      "description": "20 further practice MCQs on burns covering the same notes with different questions, so that every major concept is tested across the two sets.",
      "questionCount": 20
    }
  ],
  "questions": [
    {
      "id": "tnh-practice-burns_q1",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Until they have been thoroughly assessed, all burn injuries should be considered:",
      "options": {
        "A": "Potentially life threatening",
        "B": "Superficial in depth",
        "C": "Limited to the skin, with no systemic effects",
        "D": "Minor and self-limiting"
      },
      "correctAnswer": "A",
      "explanation": "Potentially life threatening (A) is correct because even a burn that looks small can cause fluid loss, shock, inhalation injury or infection, and its true depth and extent only become clear after a full assessment (the first estimate of TBSA is revised within 72 hours). Minor and self-limiting (D) is incorrect because severity cannot be assumed before assessment. Limited to the skin, with no systemic effects (C) is incorrect because burns above 20% TBSA produce systemic responses in the cardiovascular, renal, gastrointestinal, thermoregulatory and pulmonary systems. Superficial in depth (B) is incorrect because depth is judged only after assessment, and demarcation of the wound is clearer after about 72 hours.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Introduction"
    },
    {
      "id": "tnh-practice-burns_q2",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "Burns that do not exceed what percentage of total body surface area (TBSA) produce a primarily local response?",
      "options": {
        "A": "30%",
        "B": "20%",
        "C": "15%",
        "D": "10%"
      },
      "correctAnswer": "B",
      "explanation": "20% (B) is correct because burns not exceeding 20% TBSA produce mainly a local response (oedema and fluid loss at the burn site). Burns that exceed 20% TBSA produce both a local and a systemic response and are considered major burn injuries. 10% (D) and 15% (C) are below the cut-off and are not the threshold used in the notes. 30% (A) is above the cut-off; a burn of 25%, for example, would already be a major burn with systemic effects.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response"
    },
    {
      "id": "tnh-practice-burns_q3",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "The main mechanism of oedema formation in a burn injury is:",
      "options": {
        "A": "Increased production of albumin by the liver, which draws water into the tissues",
        "B": "Blockage of the lymphatic vessels by clotted blood",
        "C": "A fall in capillary hydrostatic pressure, which slows reabsorption of tissue fluid",
        "D": "Thermal damage to endothelial cells, which increases capillary permeability so that plasma, protein and electrolytes leak into the interstitial space"
      },
      "correctAnswer": "D",
      "explanation": "Thermal damage to endothelial cells with increased capillary permeability (D) is correct because heat injury to the vessels damages the endothelial cells, so water, protein and electrolytes escape from the circulating volume into the interstitial space, causing oedema. Inflammatory mediators released by damaged tissue (histamine, prostaglandins, bradykinin) increase this permeability further. Increased albumin production (A) is incorrect because burns cause a loss of protein from the vessels, not a gain. A fall in hydrostatic pressure (C) is incorrect because the problem is leaky vessels, not low pressure. Lymphatic blockage by clots (B) is not the mechanism described; the primary event is increased capillary permeability.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response: oedema formation"
    },
    {
      "id": "tnh-practice-burns_q4",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "Compared with intact skin, the evaporation of water from denuded (burned) areas is about:",
      "options": {
        "A": "Eight times as much",
        "B": "Twice as much",
        "C": "Three times as much",
        "D": "Four times as much"
      },
      "correctAnswer": "D",
      "explanation": "Four times as much (D) is correct because the burned skin has lost its barrier function, so evaporation from denuded areas is four times that from intact skin. This adds to the plasma lost into the interstitial space and contributes to hypovolaemia, low blood pressure and possibly hypovolaemic shock. Twice (B), three times (C) and eight times (A) are not the figures given in the notes.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response: fluid loss"
    },
    {
      "id": "tnh-practice-burns_q5",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "Mr. K has a deep circumferential burn of the forearm. As oedema increases, pressure on the small blood vessels and nerves of the distal extremity obstructs blood flow and causes ischaemia. This complication is similar to:",
      "options": {
        "A": "Compartment syndrome",
        "B": "Paralytic ileus",
        "C": "Pulmonary embolism",
        "D": "Cardiac tamponade"
      },
      "correctAnswer": "A",
      "explanation": "Compartment syndrome (A) is correct because swelling inside a limited space compresses blood vessels and nerves, so blood flow to the distal extremity is obstructed, in the same way as in a compartment syndrome. Cardiac tamponade (D) is compression of the heart by fluid in the pericardial sac. Pulmonary embolism (C) is blockage of a pulmonary artery by an embolus. Paralytic ileus (B) is absence of intestinal peristalsis, a gastrointestinal complication of burns, and has nothing to do with limb perfusion.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response: oedema and ischaemia"
    },
    {
      "id": "tnh-practice-burns_q6",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "In the early phase of a burn, plasma loss makes the blood more concentrated and viscous. The direct consequence of this increased viscosity is:",
      "options": {
        "A": "Slowing of blood flow in the small vessels, causing tissue hypoxia",
        "B": "A reduction in capillary permeability",
        "C": "Faster blood flow in the small vessels and tissue hyperperfusion",
        "D": "A fall in haematocrit with anaemia"
      },
      "correctAnswer": "A",
      "explanation": "Slowing of blood flow in the small vessels, causing tissue hypoxia (A) is correct because loss of plasma raises the haematocrit and the viscosity of the blood, so it flows slowly through the small vessels and the tissues receive less oxygen. Faster flow with hyperperfusion (C) is the opposite of what happens. A fall in haematocrit (D) is incorrect because the haematocrit is increased by haemoconcentration in the early phase. Reduced capillary permeability (B) is incorrect because permeability is increased after a burn, and it only returns to normal as the capillaries regain their integrity.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response: haemoconcentration"
    },
    {
      "id": "tnh-practice-burns_q7",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "Which sequence correctly explains the onset of burn shock in a major burn?",
      "options": {
        "A": "Increased red cell production, polycythaemia, then raised cardiac output",
        "B": "Fluid retention, rise in circulating volume, rise in cardiac output, then hypertension",
        "C": "Plasma loss into the interstitial space, fall in circulating volume, fall in cardiac output and blood pressure, then reduced perfusion and oxygen delivery",
        "D": "Widespread vasodilation, rise in peripheral resistance, then bradycardia"
      },
      "correctAnswer": "C",
      "explanation": "Plasma loss into the interstitial space, fall in circulating volume, fall in cardiac output and blood pressure, then reduced perfusion and oxygen delivery (C) is correct because damaged capillaries leak plasma, the circulating volume falls rapidly, cardiac output and blood pressure drop, and perfusion and oxygen delivery decrease; this is the onset of burn shock. Prompt fluid resuscitation maintains the blood pressure in the low to normal range and improves cardiac output. Fluid retention with hypertension (B) is the opposite of what occurs. Vasodilation with bradycardia (D) is incorrect because the sympathetic response causes vasoconstriction and tachycardia. Increased red cell production (A) is incorrect because red cells are destroyed or damaged at the time of the burn, not overproduced.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: cardiovascular"
    },
    {
      "id": "tnh-practice-burns_q8",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "The electrolyte and acid-base alterations expected in a patient with a major burn are:",
      "options": {
        "A": "Hypernatraemia, hyperkalaemia and respiratory acidosis",
        "B": "Hyponatraemia, hyperkalaemia and metabolic acidosis",
        "C": "Hyponatraemia, hypokalaemia and metabolic alkalosis",
        "D": "Hypernatraemia, hypokalaemia and alkalosis"
      },
      "correctAnswer": "B",
      "explanation": "Hyponatraemia, hyperkalaemia and metabolic acidosis (B) is correct because sodium leaks from the blood vessels into the interstitial space with the oedema (hyponatraemia), potassium is released rapidly and massively from damaged cells into the bloodstream (hyperkalaemia), and the build-up of toxins and renal impairment cause metabolic acidosis. Options A and D are incorrect because they list hypernatraemia, which is not expected; sodium is lost from the circulation. Options C and D are incorrect because they list hypokalaemia, whereas potassium is raised by cell destruction. Options A and C are incorrect because alkalosis and respiratory acidosis are not the expected acid-base disturbance.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: electrolytes"
    },
    {
      "id": "tnh-practice-burns_q9",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "The greatest volume of fluid leak from the capillaries after a major burn occurs in the first 24 to 36 hours and peaks at about:",
      "options": {
        "A": "6 to 8 hours",
        "B": "48 to 72 hours",
        "C": "12 to 16 hours",
        "D": "1 to 2 hours"
      },
      "correctAnswer": "A",
      "explanation": "6 to 8 hours (A) is correct because the leak of fluid, protein and electrolytes into the interstitial space is greatest in the first 24 to 36 hours after the burn and peaks by 6 to 8 hours. After this the capillaries begin to regain their integrity, burn shock resolves and fluid returns to the vascular compartment. 1 to 2 hours (D) is too early to be the peak. 12 to 16 hours (C) is past the peak. 48 to 72 hours (B) is beyond the period of greatest leak; by 24 to 48 hours fluid remobilisation has begun.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: timing of fluid shift"
    },
    {
      "id": "tnh-practice-burns_q10",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "Which set of findings indicates burn-induced paralytic ileus?",
      "options": {
        "A": "Hyperactive bowel sounds, diarrhoea and abdominal cramping",
        "B": "Occult blood in the stool and 'coffee ground' vomitus",
        "C": "Decreased peristalsis and bowel sounds, gastric distension, nausea and vomiting",
        "D": "Constipation with visible peristalsis and fresh blood in the stool"
      },
      "correctAnswer": "C",
      "explanation": "Decreased peristalsis and bowel sounds, gastric distension, nausea and vomiting (C) is correct because paralytic ileus is absence of intestinal peristalsis, caused by hypoperfusion, inflammatory responses and stress-related mucosal injury, and gastric decompression is started. Occult blood and coffee-ground vomitus (B) are the signs of Curling's ulcer, the other gastrointestinal complication. Hyperactive bowel sounds with diarrhoea (A) is the opposite of the absent peristalsis seen in ileus. Visible peristalsis with fresh blood (D) is not a feature of burn-induced ileus.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: GIT: paralytic ileus"
    },
    {
      "id": "tnh-practice-burns_q11",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "A patient admitted 20 hours after a major burn vomits 'coffee ground' material and the stool tests positive for occult blood. The nurse suspects:",
      "options": {
        "A": "Acute tubular necrosis",
        "B": "Paralytic ileus",
        "C": "Compartment syndrome",
        "D": "Curling's ulcer"
      },
      "correctAnswer": "D",
      "explanation": "Curling's ulcer (D) is correct because it is a duodenal erosion that occurs within 24 hours of a burn, and its signs are gastric bleeding: occult blood in the stool, regurgitation of 'coffee ground' material or bloody vomitus. Paralytic ileus (B) presents with decreased bowel sounds, gastric distension, nausea and vomiting. Acute tubular necrosis (A) is a renal complication seen with haemoglobin and myoglobin in the tubules. Compartment syndrome (C) is a vascular and nerve compression problem of an extremity.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: GIT: Curling's ulcer"
    },
    {
      "id": "tnh-practice-burns_q12",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "Which measures are used as prophylaxis for Curling's ulcer in a burn patient?",
      "options": {
        "A": "NSAIDs, corticosteroids and delayed feeding",
        "B": "Antiemetics, laxatives and nil by mouth for 72 hours",
        "C": "H2 blockers (ranitidine), proton pump inhibitors (esomeprazole), mucoprotectants and early enteral nutrition",
        "D": "Anticoagulants and diuretics"
      },
      "correctAnswer": "C",
      "explanation": "H2 blockers, proton pump inhibitors, mucoprotectants and early enteral nutrition (C) is correct because these decrease gastric acid secretion, protect the mucosa, and restore mucosal blood flow while stimulating prostaglandins. NSAIDs and corticosteroids (A) damage the gastric mucosa and delayed feeding does not restore its blood flow. Antiemetics, laxatives and nil by mouth (B) do not protect the mucosa. Anticoagulants (D) increase the risk of bleeding and diuretics reduce the circulating volume, so neither prevents the ulcer.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: GIT: Curling's ulcer prophylaxis"
    },
    {
      "id": "tnh-practice-burns_q13",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "A patient with an electrical burn has muscle damage. Myoglobin from the damaged muscle and free haemoglobin from destroyed red cells, together with poor renal blood flow from hypovolaemia, are most likely to cause:",
      "options": {
        "A": "Hepatic necrosis",
        "B": "Cerebral oedema",
        "C": "Occlusion of the renal tubules, leading to acute tubular necrosis and renal failure",
        "D": "Pulmonary oedema"
      },
      "correctAnswer": "C",
      "explanation": "Occlusion of the renal tubules, leading to acute tubular necrosis and renal failure (C) is correct because when blood flow through the kidneys is inadequate, the haemoglobin and myoglobin block the renal tubules. Adequate fluid replacement restores renal blood flow, which increases the glomerular filtration rate and urine volume. Hepatic necrosis (A), pulmonary oedema (D) and cerebral oedema (B) are not the consequence of pigment in the renal tubules.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Renal alterations"
    },
    {
      "id": "tnh-practice-burns_q14",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "A burn patient has a low body temperature in the first hours after injury. The reason for this is that:",
      "options": {
        "A": "Heat production by the muscles is increased",
        "B": "Excessive sweating occurs from the remaining sweat glands",
        "C": "The hypothalamus is destroyed by the burn",
        "D": "Loss of skin leads to an inability to regulate body temperature, with heat lost through evaporation"
      },
      "correctAnswer": "D",
      "explanation": "Loss of skin leads to an inability to regulate body temperature, with heat lost through evaporation (D) is correct because the skin is the organ that conserves heat, so patients with burn injuries may have low body temperatures early on. For this reason burn centres use heat panels at the bedside and additional heating sources. Increased heat production (A) would raise the temperature, not lower it. Destruction of the hypothalamus (C) is not the cause. Excessive sweating (B) is incorrect because burned skin has lost its sweat glands and the heat loss is by evaporation from the denuded surface.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Thermoregulatory alterations"
    },
    {
      "id": "tnh-practice-burns_q15",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "A man is rescued from a fire in a closed room. Which finding most strongly suggests an upper airway inhalation injury?",
      "options": {
        "A": "Blisters on the forearm",
        "B": "Singed nasal hair with hoarseness and sooty sputum",
        "C": "Pain at a burn on the palm",
        "D": "Isolated tachycardia"
      },
      "correctAnswer": "B",
      "explanation": "Singed nasal hair with hoarseness and sooty sputum (B) is correct because these are indicators of possible upper airway injury, together with injury in an enclosed space, burns of the face or neck, a high-pitched voice change, dry cough, stridor, labored breathing, tachypnea, hypoxemia, and erythema or blistering of the oral or pharyngeal mucosa. Because of the risk of airway oedema, early nasotracheal or endotracheal intubation is done. Blisters on the forearm (A) and pain at a palm burn (C) describe skin injury and do not point to the airway. Isolated tachycardia (D) is non-specific and occurs in burn shock and pain.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Pulmonary alterations: inhalation injury"
    },
    {
      "id": "tnh-practice-burns_q16",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "In a deep circumferential burn, the eschar compresses the blood vessels, nerves and muscles because it does not stretch with swelling, and acts like a tourniquet. The surgical procedure that relieves this is:",
      "options": {
        "A": "Skin autografting",
        "B": "Debridement",
        "C": "Escharotomy",
        "D": "Amputation"
      },
      "correctAnswer": "C",
      "explanation": "Escharotomy (C) is correct because it is a surgical incision into the eschar (the devitalised tissue formed by coagulative necrosis), which releases the pressure and restores blood flow in a compartment syndrome-type situation. Debridement (B) is removal of dead tissue and does not release the pressure at once. Skin autografting (A) is used for wound closure in full-thickness burns and does not relieve compression. Amputation (D) is a last resort for a non-viable limb, not the first measure.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Eschar and escharotomy"
    },
    {
      "id": "tnh-practice-burns_q17",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "A client presents with sunburn: the skin is red, dry and painful, with no blisters, and it blanches on pressure. The expected course is:",
      "options": {
        "A": "Pain relieved by cooling, peeling within 3 to 7 days and healing without scarring",
        "B": "Painless leathery skin that needs grafting",
        "C": "Weeping blisters with healing in 2 to 4 weeks and some scarring",
        "D": "Pale, waxy skin that does not blanch and may convert to full thickness with infection"
      },
      "correctAnswer": "A",
      "explanation": "Pain relieved by cooling, peeling within 3 to 7 days and healing without scarring (A) is correct because a superficial (first-degree) burn affects only the epidermis, so it is red, dry and painful without blisters, the skin blanches on pressure, the pain is soothed by cooling and lasts 48 to 72 hours, desquamation (peeling) occurs in 3 to 7 days and there is no scarring. Treatment may not be needed. Weeping blisters with scarring (C) describes a deeper partial-thickness burn. Painless leathery skin needing grafting (B) describes a full-thickness burn. Pale, non-blanching skin that may convert with infection (D) describes a deep partial-thickness burn.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Classification: superficial burn"
    },
    {
      "id": "tnh-practice-burns_q18",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "The severity of a full-thickness burn is often deceiving because the wound is painless. This is because:",
      "options": {
        "A": "The thick eschar numbs the surrounding skin",
        "B": "The nerve fibres in the skin are destroyed",
        "C": "Blood flow to the wound is increased",
        "D": "The patient has received strong analgesics"
      },
      "correctAnswer": "B",
      "explanation": "The nerve fibres in the skin are destroyed (B) is correct because a full-thickness burn totally destroys the epidermis and dermis (and may involve tissue, muscle and bone), so the wound is painless and insensate. It appears pale white, red, brown or charred, leathery and does not blanch; hair follicles and sweat glands are destroyed, and thrombosed vessels may be visible. Analgesics (D) are not the reason; the wound is painless even without drugs. Numbing by eschar (A) is incorrect because the loss of sensation is from nerve destruction. Increased blood flow (C) is incorrect because the vessels are thrombosed and the wound does not blanch.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Classification: full-thickness burn"
    },
    {
      "id": "tnh-practice-burns_q19",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "An adult has burns to the whole anterior trunk and the entire right arm. Using the Wallace rule of nines, the estimated TBSA burned is:",
      "options": {
        "A": "18%",
        "B": "27%",
        "C": "45%",
        "D": "36%"
      },
      "correctAnswer": "B",
      "explanation": "27% (B) is correct because in the rule of nines the anterior trunk is 18% and each upper extremity (arm) is 9%, so 18 + 9 = 27%. 36% (D) would result from counting the arm as 18% (the value for a leg). 18% (A) counts the anterior trunk only. 45% (C) is too high and would need, for example, a whole leg and both arms added.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: TBSA: rule of nines"
    },
    {
      "id": "tnh-practice-burns_q20",
      "paperId": "tnh-practice-burns",
      "setNumber": 1,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "The Lund and Browder method is the preferred way of estimating TBSA in children because:",
      "options": {
        "A": "It can be done at the scene without a chart",
        "B": "The patient's palm equals 1% of the TBSA",
        "C": "It adjusts for the relatively larger head and smaller legs of a child by using age-specific percentages",
        "D": "It divides the body into multiples of nine"
      },
      "correctAnswer": "C",
      "explanation": "It adjusts for the relatively larger head and smaller legs of a child by using age-specific percentages (C) is correct because the Lund and Browder chart assigns percentages to each body region that vary with age (under 1 year, 1 to 4, 5 to 9, 10 to 14, 15 years and adults), and it is considered the gold standard for estimating TBSA. For example, the head is 19% in the 0 to 1 year group but 7% in an adult. The palm equals 1% (B) is the palmer method. Multiples of nine (D) is the rule of nines, which is designed for adults. Doing it at the scene without a chart (A) is incorrect because the method depends on the chart.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: TBSA: Lund and Browder method"
    },
    {
      "id": "tnh-practice-burns_q21",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 1,
      "questionType": "mcq",
      "text": "Burns are injuries to the skin caused by exposure to:",
      "options": {
        "A": "Pathogenic skin microorganisms",
        "B": "Prolonged pressure over bony prominences",
        "C": "Extreme heat, for example hot liquids, electricity, chemicals, friction or radiation",
        "D": "Extreme cold only"
      },
      "correctAnswer": "C",
      "explanation": "Extreme heat, for example hot liquids, electricity, chemicals, friction or radiation (C) is correct because a burn is an injury to the skin from exposure to an extreme thermal, electrical, chemical, frictional or radiation source. Extreme cold only (D) is incorrect because the cause listed in the notes is heat and the other sources named. Pathogenic skin microorganisms (A) cause infections, not burns, although infection can complicate a burn wound. Prolonged pressure over bony prominences (B) causes pressure injury, not burns.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Introduction"
    },
    {
      "id": "tnh-practice-burns_q22",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 2,
      "questionType": "mcq",
      "text": "Which substances are released by damaged tissue in a burn and further increase permeability, vasodilation and inflammation?",
      "options": {
        "A": "Histamine, prostaglandins and bradykinin",
        "B": "Heparin, thrombin and fibrin",
        "C": "Renin, angiotensin and aldosterone",
        "D": "Insulin, glucagon and cortisol"
      },
      "correctAnswer": "A",
      "explanation": "Histamine, prostaglandins and bradykinin (A) is correct because these inflammatory mediators are released by the damaged tissues and add to the increased capillary permeability caused by the thermal injury, producing vasodilation and inflammation, and so more oedema. Insulin, glucagon and cortisol (D) are hormones of glucose regulation and stress and are not the local mediators of burn oedema. Renin, angiotensin and aldosterone (C) regulate blood pressure and sodium balance. Heparin, thrombin and fibrin (B) are involved in clotting.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Local response: inflammatory mediators"
    },
    {
      "id": "tnh-practice-burns_q23",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 3,
      "questionType": "mcq",
      "text": "How does adequate fluid volume replacement help the kidneys of a burn patient?",
      "options": {
        "A": "It reduces the glomerular filtration rate to protect the tubules",
        "B": "It stops the release of potassium from cells",
        "C": "It converts haemoglobin and myoglobin into harmless pigments",
        "D": "It restores renal blood flow, increasing the glomerular filtration rate and urine volume"
      },
      "correctAnswer": "D",
      "explanation": "It restores renal blood flow, increasing the glomerular filtration rate and urine volume (D) is correct because renal function is altered by the decreased blood volume, and the free haemoglobin and myoglobin occlude the tubules when blood flow is inadequate; replacing the volume restores flow and flushes them through, which prevents acute tubular necrosis. Reducing the filtration rate (A) would worsen the problem. Converting the pigments (C) does not occur. Stopping potassium release (B) is incorrect because hyperkalaemia results from cell damage, which fluids do not reverse.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: renal perfusion"
    },
    {
      "id": "tnh-practice-burns_q24",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 4,
      "questionType": "mcq",
      "text": "In burn shock, the catecholamines released by the sympathetic nervous system cause:",
      "options": {
        "A": "A decrease in peripheral resistance with hypotension",
        "B": "Vasodilation and tachycardia",
        "C": "Vasodilation and bradycardia",
        "D": "An increase in peripheral resistance (vasoconstriction) and an increase in pulse rate (tachycardia)"
      },
      "correctAnswer": "D",
      "explanation": "An increase in peripheral resistance (vasoconstriction) and tachycardia (D) is correct because when the circulating volume and cardiac output fall, the sympathetic nervous system releases catecholamines to compensate, producing vasoconstriction and a faster pulse. Vasodilation with bradycardia (C), vasodilation with tachycardia (B) and a fall in peripheral resistance with hypotension (A) are incorrect because the compensatory response raises, not lowers, the peripheral resistance.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: sympathetic response"
    },
    {
      "id": "tnh-practice-burns_q25",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 5,
      "questionType": "mcq",
      "text": "Loss of plasma in a major burn causes haemoconcentration, which increases blood viscosity and the risk of:",
      "options": {
        "A": "Hypoglycaemia",
        "B": "Haemorrhage",
        "C": "Thrombosis",
        "D": "Hypernatraemia"
      },
      "correctAnswer": "C",
      "explanation": "Thrombosis (C) is correct because haemoconcentration from plasma loss increases the viscosity of the blood, slowing flow in the small vessels and raising the risk of clot formation. Haemorrhage (B) is not the consequence of thickened blood. Hypernatraemia (D) is incorrect because sodium is lost into the interstitial space, producing hyponatraemia. Hypoglycaemia (A) is unrelated to haemoconcentration.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: haemoconcentration"
    },
    {
      "id": "tnh-practice-burns_q26",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 6,
      "questionType": "mcq",
      "text": "Hyperkalaemia in a burn patient occurs primarily because of:",
      "options": {
        "A": "Leakage of potassium into the interstitial space",
        "B": "Excess potassium given in intravenous fluids",
        "C": "Increased renal tubular secretion of potassium",
        "D": "Massive, rapid release of potassium from damaged cells into the bloodstream"
      },
      "correctAnswer": "D",
      "explanation": "Massive, rapid release of potassium from damaged cells into the bloodstream (D) is correct because potassium is the main intracellular cation, so cell destruction by the burn floods the blood with it. Excess potassium in IV fluids (B) is not the primary cause. Increased renal secretion (C) would lower the potassium level; in burns the kidneys are hypoperfused. Leakage into the interstitial space (A) describes what happens to sodium, which causes hyponatraemia, not hyperkalaemia.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: hyperkalaemia"
    },
    {
      "id": "tnh-practice-burns_q27",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 7,
      "questionType": "mcq",
      "text": "Hyponatraemia develops in the early phase of a major burn because:",
      "options": {
        "A": "Sodium is lost mainly through vomiting",
        "B": "Sodium leaks from the blood vessels into the tissues (interstitial space) with the oedema",
        "C": "Excess sodium is excreted by a diuresis in the first hours",
        "D": "Sodium is destroyed by the heat of the burn"
      },
      "correctAnswer": "B",
      "explanation": "Sodium leaks from the blood vessels into the tissues (interstitial space) with the oedema (B) is correct because the increased capillary permeability lets sodium move with the plasma into the interstitial space, so the serum sodium falls. Vomiting (A) is not the main cause. Sodium cannot be destroyed by heat (D). A diuresis (C) occurs later, in the diuretic stage, when fluid returns to the vascular space; in the early phase there is a fall in circulating volume.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: hyponatraemia"
    },
    {
      "id": "tnh-practice-burns_q28",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 8,
      "questionType": "mcq",
      "text": "A burn patient may need a blood transfusion because, at the time of injury:",
      "options": {
        "A": "Some red blood cells are destroyed and others damaged, resulting in anaemia",
        "B": "Iron absorption from the gut is blocked",
        "C": "The bone marrow is destroyed by the heat",
        "D": "Haemodilution lowers the haematocrit"
      },
      "correctAnswer": "A",
      "explanation": "Some red blood cells are destroyed and others damaged, resulting in anaemia (A) is correct because the heat injury destroys and damages red cells, so a blood transfusion may be needed. Haemodilution (D) is incorrect because plasma loss concentrates the blood and the haematocrit rises early on. Blocked iron absorption (B) and destruction of the bone marrow (C) are not the cause of the anaemia at the time of injury.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Systemic response: anaemia"
    },
    {
      "id": "tnh-practice-burns_q29",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 9,
      "questionType": "mcq",
      "text": "Fluid remobilisation (capillary healing) after a burn occurs:",
      "options": {
        "A": "About 1 week after the burn",
        "B": "Within the first 6 hours",
        "C": "24 to 48 hours after the burn",
        "D": "Between 8 and 12 hours"
      },
      "correctAnswer": "C",
      "explanation": "24 to 48 hours after the burn (C) is correct because it is at this time that capillary integrity is restored, the capillary leak stops, and fluids and proteins gradually return from the interstitial space into the vascular compartment. Within the first 6 hours (B) and between 8 and 12 hours (D) are the period of maximal leak, which peaks at 6 to 8 hours. About 1 week (A) is too late; by then the diuretic stage is over and weight and electrolytes have normalised.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Fluid remobilisation"
    },
    {
      "id": "tnh-practice-burns_q30",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 10,
      "questionType": "mcq",
      "text": "Which findings are expected during the diuretic stage after a burn?",
      "options": {
        "A": "Body weight rises and the patient becomes oliguric",
        "B": "The capillary leak worsens with haemoconcentration",
        "C": "Oedema increases, urine output falls and potassium rises",
        "D": "Oedema fluid shifts from the interstitial spaces into the vascular space, blood volume rises, renal blood flow and diuresis increase, and electrolytes normalise"
      },
      "correctAnswer": "D",
      "explanation": "Oedema fluid shifts from the interstitial spaces into the vascular space, blood volume rises, renal blood flow and diuresis increase, and electrolytes normalise (D) is correct because in the diuretic stage the oedema resolves, blood volume increases, the kidneys receive more blood and produce more urine, and body weight returns to normal. Increasing oedema, low urine output and rising potassium (C) describe the early phase of burn shock. A worsening capillary leak with haemoconcentration (B) is also the early phase. A rising weight with oliguria (A) describes fluid retention in the leak phase, not the diuretic stage.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Diuretic stage"
    },
    {
      "id": "tnh-practice-burns_q31",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 11,
      "questionType": "mcq",
      "text": "Curling's ulcer develops after a burn injury because:",
      "options": {
        "A": "Helicobacter pylori spreads from the burn wound",
        "B": "Blood flow to the GI system increases and causes gastric hyperaemia",
        "C": "Blood flow to the GI system decreases, causing gastric mucosal ischaemia and loss of the protective mucus barrier, so erosions form",
        "D": "Gastric acid secretion stops completely"
      },
      "correctAnswer": "C",
      "explanation": "Decreased GI blood flow causing gastric mucosal ischaemia and loss of the protective mucus barrier (C) is correct because after a burn the blood is diverted away from the gut, so the mucosa becomes ischaemic, the mucus barrier is lost, and erosions (a duodenal erosion within 24 hours) form. Stopped acid secretion (D) is incorrect because the mucosa is injured by acid when unprotected. Increased blood flow (B) is the opposite of what occurs. Helicobacter pylori from the wound (A) is not the mechanism.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: GIT: Curling's ulcer"
    },
    {
      "id": "tnh-practice-burns_q32",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 12,
      "questionType": "mcq",
      "text": "Which intervention is initiated for a burn patient with paralytic ileus?",
      "options": {
        "A": "Antidiarrhoeal drugs",
        "B": "Laxatives",
        "C": "Gastric decompression",
        "D": "Large oral meals"
      },
      "correctAnswer": "C",
      "explanation": "Gastric decompression (C) is correct because in burn-induced ileus the intestine has no peristalsis, so gas and fluid accumulate causing gastric distension, nausea and vomiting, and decompression of the stomach is started. Large oral meals (D) would worsen the distension and vomiting. Laxatives (B) do not work in an intestine with absent peristalsis. Antidiarrhoeal drugs (A) are inappropriate because the patient has no peristalsis, not diarrhoea.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: GIT: management of paralytic ileus"
    },
    {
      "id": "tnh-practice-burns_q33",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 13,
      "questionType": "mcq",
      "text": "About what proportion of patients admitted to burn centres have an inhalation injury, and how is an upper airway injury treated?",
      "options": {
        "A": "50%; delayed intubation until respiratory failure develops",
        "B": "Less than 5%; humidified oxygen only",
        "C": "30 to 40%; bronchodilators only",
        "D": "10% to 20%; early nasotracheal or endotracheal intubation because of oedema"
      },
      "correctAnswer": "D",
      "explanation": "10% to 20%; early nasotracheal or endotracheal intubation because of oedema (D) is correct because approximately 10% to 20% of patients admitted to burn centres have an inhalation injury, caused by superheated air and noxious gas. Airway oedema develops and can obstruct the airway, so early intubation is done. Less than 5% with oxygen only (B) understates the incidence and the risk of obstruction. 30 to 40% with bronchodilators only (C) is not correct. 50% with delayed intubation (A) is incorrect because waiting until failure develops risks losing the airway as the swelling increases.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Pulmonary alterations: inhalation injury"
    },
    {
      "id": "tnh-practice-burns_q34",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 14,
      "questionType": "mcq",
      "text": "Inhalation of noxious gases is often the source of death at the scene of a fire. The gas most commonly responsible is:",
      "options": {
        "A": "Carbon dioxide",
        "B": "Carbon monoxide",
        "C": "Methane",
        "D": "Nitrous oxide"
      },
      "correctAnswer": "B",
      "explanation": "Carbon monoxide (B) is correct because it is produced by incomplete combustion in fires and is the noxious gas cited in the notes as the common source of death at the scene of a fire. Carbon dioxide (A), nitrous oxide (D) and methane (C) are not the gas named as the usual cause of death at a fire scene.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Pulmonary alterations: carbon monoxide"
    },
    {
      "id": "tnh-practice-burns_q35",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 15,
      "questionType": "mcq",
      "text": "A burn is wet, shiny and weeping, with blisters. It blanches on pressure, is very painful and sensitive to cold air and touch, and the hair follicles and sweat and oil glands are not destroyed. This is a:",
      "options": {
        "A": "Superficial partial-thickness burn",
        "B": "Full-thickness burn",
        "C": "Superficial burn (first degree)",
        "D": "Deep partial-thickness burn"
      },
      "correctAnswer": "A",
      "explanation": "Superficial partial-thickness burn (A) is correct because it involves the epidermis and part of the dermis, the epidermal appendages (hair follicles, sweat and oil glands) are not destroyed, there is little or no oedema, and the wound is wet, shiny and weeping with blisters, blanches, and is painful with hyperaesthesia. A superficial burn (C) affects only the epidermis and is dry without blisters. A deep partial-thickness burn (D) does not blanch and has easily opened blisters and oedema. A full-thickness burn (B) is painless and leathery.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Classification: superficial partial-thickness burn"
    },
    {
      "id": "tnh-practice-burns_q36",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 16,
      "questionType": "mcq",
      "text": "Which finding differentiates a deep partial-thickness burn from a superficial partial-thickness burn?",
      "options": {
        "A": "The hair follicles are destroyed",
        "B": "The wound does not blanch, the blisters are easily opened and oedema is present",
        "C": "The wound blanches with pressure",
        "D": "There is no oedema and healing is complete within a week"
      },
      "correctAnswer": "B",
      "explanation": "The wound does not blanch, the blisters are easily opened and oedema is present (B) is correct because a deep partial-thickness burn destroys the epidermis and upper dermis and injures the deeper dermis; the wound may be wet, waxy or dry, hair follicles remain intact, and it is still sensitive to cold air. Healing takes 2 to 4 weeks with some scarring, and infection may convert it to full thickness. Blanching (C) and absence of oedema (D) are features of the superficial partial-thickness burn. Destroyed hair follicles (A) are a feature of a full-thickness burn.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Classification: deep partial-thickness burn"
    },
    {
      "id": "tnh-practice-burns_q37",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 17,
      "questionType": "mcq",
      "text": "Which statement about a full-thickness burn is correct?",
      "options": {
        "A": "It heals within 2 weeks without scarring",
        "B": "The wound needs skin autografting, and amputation may be required",
        "C": "The hair follicles and sweat glands survive and regenerate the skin",
        "D": "The wound blanches on pressure and is very painful"
      },
      "correctAnswer": "B",
      "explanation": "The wound needs skin autografting, and amputation may be required (B) is correct because a full-thickness burn destroys the entire epidermis and dermis (and sometimes subcutaneous tissue, muscle and bone), so the skin cannot regenerate; the eschar sloughs, and grafting is necessary, with scarring, loss of contour and function, and possible loss of digits or an extremity. Haematuria, haemolysis and shock may occur. Surviving hair follicles and sweat glands (C) is incorrect because these are destroyed. Healing within 2 weeks without scarring (A) is incorrect. Blanching and severe pain (D) are features of more superficial burns.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: Classification: full-thickness burn"
    },
    {
      "id": "tnh-practice-burns_q38",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 18,
      "questionType": "mcq",
      "text": "The initial estimate of the TBSA burned is made on arrival of the patient at the hospital and is revised within the first:",
      "options": {
        "A": "12 hours",
        "B": "6 hours",
        "C": "72 hours",
        "D": "7 days"
      },
      "correctAnswer": "C",
      "explanation": "72 hours (C) is correct because by this time demarcation of the wound and its depth present themselves more clearly, so the estimate is revised. The TBSA estimate helps the burn team decide on treatment and on transfer of the patient to a burn centre. 6 hours (B) and 12 hours (A) are too early for the wound to have demarcated. 7 days (D) is later than the period stated for revising the initial evaluation.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: TBSA: reassessment"
    },
    {
      "id": "tnh-practice-burns_q39",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 19,
      "questionType": "mcq",
      "text": "Which of the following correctly states the Wallace rule of nines for an adult?",
      "options": {
        "A": "Head and neck 18%, each leg 9%",
        "B": "Head and neck 9%, each lower extremity 18%, genitalia (perineum) 1%",
        "C": "Each arm 18%, anterior trunk 9%",
        "D": "Genitalia 9%, each leg 18%"
      },
      "correctAnswer": "B",
      "explanation": "Head and neck 9%, each lower extremity 18%, genitalia (perineum) 1% (B) is correct because the rule of nines divides the adult body into head and neck 9%, each upper extremity 9%, each lower extremity 18%, anterior trunk 18%, posterior trunk 18% and genitalia 1%, which totals 100%. Head and neck 18% with legs 9% (A) swaps the values. Each arm 18% and anterior trunk 9% (C) also swaps the values. Genitalia 9% (D) is incorrect because the perineum is 1%.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: TBSA: rule of nines values"
    },
    {
      "id": "tnh-practice-burns_q40",
      "paperId": "tnh-practice-burns",
      "setNumber": 2,
      "questionNumberInSet": 20,
      "questionType": "mcq",
      "text": "In the palmer method of estimating burn size, the size of the patient's palm including the digits is approximately what percentage of the TBSA?",
      "options": {
        "A": "1%",
        "B": "0.5%",
        "C": "5%",
        "D": "9%"
      },
      "correctAnswer": "A",
      "explanation": "1% (A) is correct because the palm, including the surface area of the digits, is approximately 1% of the TBSA, and the palm without the fingers is about 0.5%. The method is used for scattered or small burns and for quick pre-hospital assessment, but it can be inaccurate: it may overestimate in adults and underestimate burn size in obese patients. 0.5% (B) is the palm without the fingers. 5% (C) and 9% (D) are far larger than the palm; 9% is the value for the head and neck or one arm in the rule of nines.",
      "sourceType": "practice_mcq",
      "sourceRef": "Burns lecture notes: TBSA: palmer method"
    }
  ]
};
