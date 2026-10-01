# 6. Implementation Plan & Milestones

> 🤖 **AI-GENERATED ON AUTOPILOT:** The AI Agent generates the ordered build sequence across 6 standard milestones with Definitions of Done (DoD).

---

## Milestone 1: Project Setup & Scaffolding
* Scaffold backend app (`make new-app NAME=[product_name]`) & frontend app (`pnpm new-app NAME=[product_name]`).
* **DoD:** Both services boot cleanly locally.

## Milestone 2: Data Models & Tenant Context
* Implement SQLAlchemy models in `models/` with `BaseAggregateModel`.
* Generate Alembic migrations & verify multi-tenant isolation.
* **DoD:** Unit tests pass verifying Workspace A cannot read Workspace B data.

## Milestone 3: Core API Endpoints & MCP Tools
* Implement FastAPI route handlers with Clerk JWT & `TenantContext`.
* Expose domain capabilities via `@mcp_tool` JSON-RPC.
* **DoD:** API integration tests pass with 100% assertions.

## Milestone 4: Frontend Views & Canvas Integration
* Build pages using `@parabox/ui` `AppShell` and `@parabox/canvas` blocks.
* Connect live SSE stream to `@parabox/realtime` `VirtualLogStream`.
* **DoD:** Live streaming and block editing interactive in browser.

## Milestone 5: Stripe Gating & Quality
* Attach `@require_entitlement` and `@meter_usage` guards.
* Handle 402 upgrade events in frontend `ModalBus`.
* Run `ruff check`, `pnpm typecheck`, and test suites.
* **DoD:** 0 lint/type errors; feature gate triggers Stripe upgrade dialog.

## Milestone 6: Release & Verification
* Run end-to-end verification and deliver live preview.
* **DoD:** Ready for real users to test.
