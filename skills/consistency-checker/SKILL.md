---
name: consistency-checker
description: Analyzes all 6 planning documents for a product to detect contradictions, missing schema tables, unmapped routes, or vague acceptance criteria.
---

# Consistency Checker Skill

Run this skill before starting code implementation to ensure 100% alignment across all 6 documents.

---

## 🔍 Validation Checklist

1. **PRD vs TRD Alignment:**
   - Are all P0 features in the PRD accounted for in the TRD's external services and architecture?
2. **PRD vs Backend Schema:**
   - Does every entity referenced in user stories have a corresponding table in `05-backend-schema.md`?
   - Is `workspace_id` present on every table?
3. **App Flow vs UI Brief:**
   - Do all screens in `03-app-flow.md` follow the layout rules in `04-design-brief.md`?
4. **Implementation Plan Dependencies:**
   - Are milestones in `06-implementation-plan.md` strictly sequenced (Setup ➔ DB/Auth ➔ Core Journey ➔ Features ➔ Quality ➔ Release)?
5. **No Vague Placeholders:**
   - Ensure all `[bracketed]` placeholder fields are replaced with actual product decisions.

---

## Execution
Run `node scripts/check_consistency.js NAME=<product-name>` and report any discrepancies.
