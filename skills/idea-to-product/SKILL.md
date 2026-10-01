---
name: idea-to-product
description: Multi-agent team product creation. Spawns specialized subagents (Market Researcher, Systems Architect, Backend Engineer, Frontend Engineer, and QA Verifier) to concurrently research, plan, code, and verify the full product with Playwright MCP browser testing.
---

# Multi-Agent Team: Idea-to-Product Skill

Activate this skill when a user provides an idea. The main agent acts as the **Team Lead / Orchestrator** and spawns specialized subagents to work together in parallel.

---

## 👥 The 5-Agent Product Team

```mermaid
flowchart TD
    Lead["👑 Team Lead (Orchestrator)<br/>Coordinates subagents & reports to Human"]
    
    subgraph ParallelDiscovery["Phase 1: Parallel Strategy & Architecture"]
        R["🕵️ Market Researcher<br/>• Playwright MCP browser navigation<br/>• Pricing benchmarks & G2 reviews<br/>• Saves evidence/research/"]
        A["📐 Systems Architect<br/>• Writes 01-prd to 06-plan<br/>• Maps Parabox Primitives<br/>• Defines DB & API schemas"]
    end

    subgraph ParallelBuild["Phase 2: Parallel Full-Stack Build"]
        B["🐍 Backend Engineer<br/>• Builds parabox-backend-starter<br/>• FastAPI, DB models, MCP tools<br/>• Stripe @require_entitlement"]
        F["⚛️ Frontend Engineer<br/>• Builds parabox-frontend-starter<br/>• Next.js 15, Canvas, SSE<br/>• Hallmark-styled shadcn theme"]
    end

    subgraph Verification["Phase 3: QA & Verification"]
        Q["🧪 QA & Verifier<br/>• Runs pytest & pnpm build<br/>• Playwright MCP headless UI testing<br/>• Validates Acceptance Criteria"]
    end

    Lead --> R & A
    R & A --> B & F
    B & F --> Q
    Q --> Lead
```

---

## 🤖 Subagent Roles & Team Execution Protocol

### Subagent 1: 🕵️ `market-researcher`
* **Mission:** Use **Playwright MCP** to navigate live competitor websites, inspect landing pages, extract pricing tiers, and search Reddit/G2/ProductHunt for user complaints.
* **Output:** Writes `products/<name>/evidence/research/competitor_analysis.md`.

### Subagent 2: 📐 `systems-architect`
* **Mission:** Ingests user idea & research to draft all 6 Planning Documents (`01-prd.md` through `06-implementation-plan.md`) in `parabox-setup/products/<name>/`.
* **Output:** Complete, unambiguous technical & database specifications.

### Subagent 3: 🐍 `backend-builder` (Runs concurrently with Frontend)
* **Mission:** Implements the backend service in `parabox-backend-starter/apps/<name>/`:
  - SQLAlchemy models extending `BaseAggregateModel` with `workspace_id`.
  - FastAPI endpoints, `@mcp_tool` declarations, and `@require_entitlement` tier guards.
  - Backend integration tests.

### Subagent 4: ⚛️ `frontend-builder` (Runs concurrently with Backend)
* **Mission:** Implements the Next.js 15 application in `parabox-frontend-starter/apps/<name>/`:
  - App layout using `@parabox/ui` `AppShell`.
  - Interactive Canvas blocks using `@parabox/canvas`.
  - Real-time streaming log terminal using `@parabox/realtime`.
  - Uses the **Hallmark skill** to apply crafted, anti-slop typography, spatial layout, and shadcn tokens.

### Subagent 5: 🧪 `qa-verifier`
* **Mission:** 
  1. Runs `pytest` in backend.
  2. Runs `pnpm typecheck && pnpm build` in frontend.
  3. Uses **Playwright MCP** to launch the frontend in a headless browser, clicks through main user journeys, tests Canvas blocks, and verifies zero console errors.
* **Output:** Validates all user stories and acceptance criteria from `01-prd.md`.

---

## 👑 Team Lead Summary to Human
When all subagents finish, the Team Lead reports back with:
- Summary of market research findings.
- Overview of backend routes and MCP tools created.
- Overview of frontend UI views and Canvas blocks.
- Confirmation of automated Playwright browser test pass.
- One-line local launch commands.
