---
name: idea-to-product
description: Full end-to-end conversational product creation. The user simply describes an idea in chat, and the agent autonomously handles folder creation, research, 6-document generation, backend scaffolding, and frontend implementation with zero manual terminal commands required from the human.
---

# Idea-to-Product Conversational Skill

Activate this skill whenever a user describes a product idea in plain English (e.g., *"I want to build an automated PR review bot called CodeWarden"*).

---

## ⚡ Core Principle: Zero Commands for the Human
**Never ask the user to run terminal commands (like `pnpm new-product` or `make new-app`).**  
The AI Agent is equipped with file-writing and execution tools and must perform all directory creation, research, document authoring, backend coding, and frontend coding autonomously.

---

## 🤖 Step-by-Step Autonomous Execution

### Step 1: Initialize Product Directory & Documents
1. Choose a normalized kebab-case name (e.g., `contract-guard`).
2. Create `products/<name>/` and `products/<name>/evidence/research/` and `products/<name>/evidence/interviews/`.
3. Draft `01-prd.md` based on the user's prompt (problem, target user, core features).
4. Draft `04-design-brief.md` (aesthetic, dark mode, brand color, layout).

### Step 2: Autonomous Market Research
1. Analyze competitor landscape, pricing benchmarks, and user complaints.
2. Write findings to `products/<name>/evidence/research/competitor_analysis.md`.

### Step 3: Technical Architecture & Schemas
1. Generate `02-trd.md` (map required Parabox primitives: auth, billing, DB, MCP, realtime).
2. Generate `03-app-flow.md` (screen inventory and primary user sequence diagram).
3. Generate `05-backend-schema.md` (SQLAlchemy tables extending `BaseAggregateModel` with `workspace_id`).
4. Generate `06-implementation-plan.md` (milestones 1-6).

### Step 4: Autonomous Backend Implementation (`parabox-backend-starter`)
1. Create `apps/<name>` in `parabox-backend-starter`.
2. Write FastAPI router, database models, `@mcp_tool` functions, and `@require_entitlement` guards.
3. Execute `pytest` and `ruff check` to ensure 100% passing tests and clean linting.

### Step 5: Autonomous Frontend Implementation (`parabox-frontend-starter`)
1. Create `apps/<name>` in `parabox-frontend-starter`.
2. Build Next.js 15 pages using `@parabox/ui` `AppShell`, `@parabox/canvas` blocks, and `@parabox/realtime`.
3. Configure standard shadcn theme tokens in `globals.css` and `tailwind.config.ts`.
4. Execute `pnpm typecheck` and `pnpm build` to verify 0 errors.

### Step 6: Present Completed Product
Provide the user with:
- Summary of what was created (market edge, backend endpoints, frontend views).
- Confirmation that tests passed.
- Links to inspect the created files.
