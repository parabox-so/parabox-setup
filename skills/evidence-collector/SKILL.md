---
name: evidence-collector
description: Formats, scores, and saves real-world customer interview transcripts, competitor teardowns, performance benchmarks, and POC verification reports into the product's evidence/ folder.
---

# Evidence Collector Skill

Use this skill to log and maintain empirical proof for the Parabox Method (Observation ➔ Hypothesis ➔ Evidence ➔ Spec).

---

## 📂 Evidence Storage Protocol

### 1. Customer Discovery (`products/<name>/evidence/interviews/`)
- Ingests raw call notes or voice memos.
- Synthesizes user pain score (1-10) and checks for concrete **Commitment Signals** (Time, Data Access, Budget, Pilots).

### 2. Competitor Research (`products/<name>/evidence/research/`)
- Documents competitor pricing models, feature teardowns, and user reviews from G2/Reddit/ProductHunt.

### 3. Execution Benchmarks (`products/<name>/evidence/benchmarks/`)
- Logs P95 latency, LLM token usage, and unit COGS economics.

### 4. Verification Reports (`products/<name>/evidence/verifications/`)
- Formats proof-of-concept run reports proving acceptance criteria before release.
