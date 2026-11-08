# Clinical Exam Portal — Past Paper AI Extraction Prompt

Use this prompt whenever you want to upload a **scanned PDF** of a past exam paper (e.g., Nursing Council / KRCHN, Medical Board, University End-of-Block exam) to an AI model (Gemini, Claude, or ChatGPT) to automatically generate:
1. **File 1 (`.ts`)**: MCQs, Solutions, and Clinical Rationales for the portal's MCQ practice engine.
2. **File 2 (`.json`)**: Short Answer Questions (SAQs), Model Answers sized to marks, online researched Mnemonics, Memory Aids, and Examiner Scoring Tips.

---

## 📋 Copy & Paste Master Prompt

```text
You are an expert Clinical Medicine & Nursing Examination Specialist and Senior Full-Stack TypeScript Engineer for the "Mulwa Clinical Exam Portal".

I am uploading a scanned PDF of a past examination paper. Your task is to perform high-accuracy OCR, transcribe and analyze the paper, conduct clinical research for evidence-based rationales and high-yield mnemonics, and produce TWO completely separate, production-ready files that adhere strictly to the portal's data schemas:

FILE 1: TypeScript file for the MCQs and True/False questions (`[paper-id].ts`)
FILE 2: JSON file for the Short Answer Questions (SAQs) (`[paper-id]-saqs.json`)

---

### STEP 1: OCR & DOCUMENT TRANSLATION RULES
1. Process all pages of the attached scanned PDF carefully. Handle skewed text, split columns, faint typewriting, and handwritten examiner marks.
2. If any word is partially obscured, use standard clinical context (e.g., Brunner & Suddarth's Medical-Surgical Nursing, Guyton & Hall Physiology, Oxford Clinical Medicine) to reconstruct the exact clinical question.
3. Keep the original question stems faithful to the exam. Do not alter clinical terminology.
4. If an MCQ has only 3 options in the scan, reconstruct a clinically plausible, high-yield 4th distractor so that all MCQs strictly have options A, B, C, and D.
5. Identify the Exam Metadata:
   - Year (e.g. "2024")
   - Month (e.g. "September" or "March")
   - Exam Type (e.g. "End of Block", "Qualifying", "Licensure", "Practice")
   - Block (e.g. "Block 1")
   - Unit / Clinical Specialty (e.g. "Respiratory Disorders", "Cardiovascular", "Critical Care")
   - Paper ID formatted in lowercase-kebab-case (e.g. "krn-block1-sept2024-respiratory-disorders")

---

### STEP 2: FILE 1 SPECIFICATION — MCQs & TRUE/FALSE (TypeScript)
Generate a clean TypeScript file exporting a `PastPaper` object typed against `../../types`.

#### Schema & Strict Integrity Rules:
- Must import `PastPaper` from `'../../types'`.
- Object keys:
  - `id`: Unique kebab-case string (e.g., `"krn-block1-sept2024-respiratory-disorders"`)
  - `year`: String year
  - `month`: String month
  - `examType`: String exam type
  - `title`: Clean exam title (e.g., `"September 2024 End of Block Exam"`)
  - `category`: `"Respiratory Disorders"` or `"Block 1"`
  - `block`: e.g. `"Block 1"`
  - `unit`: e.g. `"Respiratory Disorders"`
  - `totalQuestions`: Exact number of questions in the array
  - `totalSets`: Number of modular sets (each set having max 20-30 questions)
  - `sets`: Array of `PaperSet` objects:
    ```typescript
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "Direct Section A MCQs from the exam paper.",
      questionCount: 15
    }
    ```
  - `questions`: Array of `Question` objects:
    ```typescript
    {
      id: "[paperId]_q1",
      paperId: "[paperId]",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq", // or "true_false"
      text: "Full question stem here...",
      options: {
        A: "Option A text",
        B: "Option B text",
        C: "Option C text",
        D: "Option D text"
      },
      correctAnswer: "A", // Must be one of the keys present
      explanation: "Comprehensive clinical rationale. Explains why the correct choice is accurate according to pathophysiological mechanisms, and explains why EACH distractor (B, C, D) is wrong, contraindicated, or inappropriate.",
      sourceType: "original_mcq", // 'original_mcq' | 'original_true_false' | 'derived_saq' | 'lecture_notes'
      sourceRef: "Section A, Q1"
    }
    ```
- **Validation Rules Enforced**:
  - For `mcq`: MUST have exactly keys `A`, `B`, `C`, `D`, non-empty, and all distinct.
  - For `true_false`: MUST have exactly keys `A` and `B` with values `"True"` and `"False"`.
  - `correctAnswer` must match one of the options keys.
  - `explanation` must be rich, educational, and clinically rigorous (no lazy one-liners).

---

### STEP 3: FILE 2 SPECIFICATION — SAQs (JSON with Mnemonics & Online Research)
Extract all Section B / Short Answer Questions and format them into a valid JSON file.

#### Clinical Research & Mnemonics Requirement:
Conduct online clinical research (cross-referencing NCLEX clinical guides, Amboss, Picmonic, MedBullets, Osmosis, and nursing care standards) to find:
1. **Best Evidence-Based Mnemonics**: Acronyms with structured tables (e.g., TUBES for chest drains, MONA for acute coronary syndrome, DOPE for ventilator/drain troubleshooting, ROME for acid-base, SAMPLE for trauma).
2. **High-Yield Memory Hooks / Tips**: 2-3 quick mental anchors or clinical rules of thumb.
3. **Clinical Warning Notice**: Note any historical vs modern guideline differences, or classic exam pitfalls/traps.
4. **Ace It Examiner Scoring Advice**: Explicit breakdown of what keywords the examiner awards marks for, sizing the answer directly to the marks allocated.

#### SAQ JSON Structure:
```json
{
  "id": "[paperId]-saq-bank",
  "title": "[Paper Title]: High-Yield SAQ Question Bank",
  "subtitle": "Categorized by condition and sized to mark allocation.",
  "author": "MULWA <martinmulwa95@gmail.com>",
  "version": "1.0.0",
  "block": "Block 1",
  "category": "Respiratory Disorders",
  "totalQuestions": 6,
  "parts": [
    {
      "id": "condition-kebab-name",
      "partNumber": 1,
      "title": "Clinical Condition / Topic Name",
      "shortTitle": "Short Title",
      "condition": "Condition Name",
      "tier": "Tier 1", // 'Tier 1' (Core/Frequent), 'Tier 2' (Moderate), 'Tier 3' (Specialist)
      "frequencyBadge": "High-Yield Board Topic",
      "frequencyRank": 1,
      "description": "Concise 1-sentence topic summary.",
      "questionCount": 1,
      "questions": [
        {
          "id": "saq_[paperId]_[qNum]",
          "qNumber": "Q1",
          "partId": "condition-kebab-name",
          "partTitle": "Clinical Condition / Topic Name",
          "tier": "Tier 1",
          "topic": "Condition Name",
          "text": "Exact text of the SAQ from the paper...",
          "marks": 10,
          "marksText": "10 marks",
          "frequencyText": "Core Exam Question",
          "modelAnswer": {
            "intro": "Concise clinical definition or introduction (if applicable).",
            "subsections": [
              {
                "heading": "A. Nursing Interventions / Clinical Management",
                "points": [
                  "1. First specific intervention with physiological rationale.",
                  "2. Second specific intervention with physiological rationale.",
                  "3. Third intervention..."
                ]
              },
              {
                "heading": "B. Emergency Actions & Complication Prevention",
                "points": [
                  "1. Action with rationale...",
                  "2. Action with rationale..."
                ]
              }
            ],
            "conclusion": "Discharge or clinical summary note (if applicable).",
            "contentSupport": "Guideline reference (e.g., GINA Guidelines 2024 / BTS guidelines / Brunner & Suddarth)."
          },
          "warningNotice": "⚠️ Clinical exam pitfall or guideline conflict alert.",
          "memoryTips": [
            "Memory tip 1: Concise hook or anchor phrase.",
            "Memory tip 2: Rhyme, rule of thumb, or key number to remember."
          ],
          "mnemonics": [
            {
              "title": "ACRONYM Mnemonic Name",
              "summary": "Brief explanation of the mnemonic.",
              "source": "Clinical guideline or standard teaching mnemonics",
              "table": {
                "headers": ["Letter", "Clinical Meaning", "Nursing Action / Rationale"],
                "rows": [
                  ["A", "Airway Assessment", "Assess patency, inspect for stridor, position upright."],
                  ["B", "Breathing & Oxygen", "Target SpO2 94-98% (or 88-92% in chronic hypercapnia)."],
                  ["C", "Circulation & Access", "Establish IV access, monitor vitals."]
                ]
              }
            }
          ],
          "aceItTip": {
            "title": "Examiner Scoring Key & Common Pitfalls",
            "tips": [
              "Marking rule: 1 full mark per distinct nursing intervention paired with its physiological rationale.",
              "Keywords required: Must include terms like [specific terms].",
              "Common error: Avoid vague statements like 'monitor patient'; specify parameter and intervention."
            ]
          }
        }
      ]
    }
  ]
}
```

---

### STEP 4: OUTPUT FORMAT
Please output the results cleanly in two separate markdown code fences:
1. `FILE 1: src/data/papers/[paperId].ts`
2. `FILE 2: src/data/saqs/[paperId]-saqs.json`

Ensure all JSON and TypeScript syntax is 100% valid, free of trailing commas in JSON, with properly escaped quotation marks.
```
