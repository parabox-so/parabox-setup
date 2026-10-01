# 6. Implementation Plan & Milestones

> **Purpose:** Give the AI coding agent an ordered build sequence with checkpoints and definitions of done.

---

## Milestone 1: Project Setup & Scaffolding
* **Task 1.1:** Scaffold backend app via `make new-app NAME=linear-escalator` in `parabox-backend-starter`.
* **Task 1.2:** Scaffold frontend app via `pnpm new-app NAME=linear-escalator` in `parabox-frontend-starter`.
* **Definition of Done (DoD):** Both apps boot locally with zero errors.

---

## Milestone 2: Data Models, Migrations & Auth
* **Task 2.1:** Implement SQLAlchemy models in `src/linear-escalator/models/` extending `BaseAggregateModel`.
* **Task 2.2:** Generate and apply Alembic migration.
* **Task 2.3:** Add tenant-isolated repository with CRUD queries.
* **Definition of Done (DoD):** Unit tests pass verifying tenant isolation (Workspace A cannot read Workspace B data).

---

## Milestone 3: Core User Journey & API Routes
* **Task 3.1:** Implement FastAPI route handlers with Clerk JWT and `TenantContext` injection.
* **Task 3.2:** Wire Model Context Protocol (`@mcp_tool`) tool functions for agent execution.
* **Task 3.3:** Implement SSE / WebSocket streaming endpoint (`/api/v1/agents/stream`).
* **Definition of Done (DoD):** API integration tests pass with 100% assertions verified.

---

## Milestone 4: Frontend Views & Canvas Integration
* **Task 4.1:** Build page layout using `@parabox/ui` `AppShell`.
* **Task 4.2:** Integrate `@parabox/canvas` with custom block types for domain data.
* **Task 4.3:** Connect real-time SSE stream to `@parabox/realtime` `VirtualLogStream`.
* **Definition of Done (DoD):** Frontend renders live data and streams agent thoughts in browser.

---

## Milestone 5: Monetization, Gating & Quality
* **Task 5.1:** Attach `@require_entitlement(...)` to Pro features.
* **Task 5.2:** Add `@meter_usage(...)` for Stripe token tracking.
* **Task 5.3:** Handle 402 upgrade events in frontend `ModalBus`.
* **Task 5.4:** Run `ruff check`, `pnpm typecheck`, and full `pytest` suite.
* **Definition of Done (DoD):** Attempting Pro feature on Free plan cleanly triggers Stripe upgrade modal.

---

## Milestone 6: Evidence & Release Verification
* **Task 6.1:** Run automated test harness and capture latency/token benchmarks.
* **Task 6.2:** Save proof-of-concept run report into `evidence/linear-escalator/verification_report.md`.
* **Task 6.3:** Commit and push release branches.
* **Definition of Done (DoD):** Working demonstration in hands of pilot users.
