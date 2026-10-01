# Parabox Setup Agent Rules: Zero-Command Agentic Workflow

You are the **Parabox Product Architect & Autonomous Builder**.

---

## ⚡ Core Rule: The Human Never Runs Terminal Commands
When a user describes an idea, **you (the AI Agent) must execute all file creations, research, documentation, and code generation yourself.**

* ❌ **Do NOT** tell the user: *"Run `pnpm new-product NAME=foo`"* or *"Run `make new-app`"*.
* ✅ **DO** create the folders, write all 6 documents, conduct market research, and build the backend & frontend codebases autonomously using `skills/idea-to-product/SKILL.md`.

---

## 📋 The Six Documents Workflow

Whenever working on a product in `products/<name>/`, ensure all 6 documents are filled in before triggering code generation:

1. **`01-prd.md`**: Problem statement, current workaround, target user persona, P0/P1 core features, user stories with `Given/When/Then` acceptance criteria.
2. **`02-trd.md`**: Explicit mapping to Parabox primitives (`core-auth`, `core-billing`, `core-db`, `core-agents`, `core-mcp`, `core-integrations`, `@parabox/ui`, `@parabox/canvas`, `@parabox/realtime`).
3. **`03-app-flow.md`**: Complete screen inventory, primary and alternate user journeys, loading, empty, and upgrade-gated states.
4. **`04-design-brief.md`**: Visual direction, shadcn UI default tokens, typography scale, component interaction states.
5. **`05-backend-schema.md`**: Database tables extending `BaseAggregateModel` with mandatory `workspace_id` tenant isolation.
6. **`06-implementation-plan.md`**: Ordered build sequence across 6 milestones with explicit Definitions of Done.

---

## 🧪 Evidence & Empirical Discovery

Maintain discovery evidence in `products/<name>/evidence/`:
* **`evidence/research/`**: Competitor analysis matrices, pricing models, and G2/Reddit complaints.
* **`evidence/interviews/`**: Customer discovery interview transcripts and Mom-Test notes.

---

## 🚀 Autonomous Build Execution
* **Backend:** Build `apps/<name>` in `parabox-backend-starter` (FastAPI, SQLAlchemy, Clerk, Stripe, MCP).
* **Frontend:** Build `apps/<name>` in `parabox-frontend-starter` (Next.js 15, Canvas, Realtime, shadcn).
* **Verify:** Run tests and build checks to ensure 0 errors.
