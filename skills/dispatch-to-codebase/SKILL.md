---
name: dispatch-to-codebase
description: Instructs an AI coding agent on how to take the completed 6 Documents from products/<name>/ and build the backend and frontend apps in parabox-backend-starter and parabox-frontend-starter.
---

# Dispatch to Codebase Skill

Once all 6 documents in `products/<name>/` are verified, use this skill to dispatch the build to the codebases.

---

## 🚀 Execution Sequence

### Phase 1: Backend Implementation (`parabox-backend-starter`)
1. Run `make new-app NAME=<product_name>` in `parabox-backend-starter`.
2. Implement SQLAlchemy models from `05-backend-schema.md` extending `BaseAggregateModel`.
3. Implement route handlers and MCP tools from `02-trd.md`.
4. Apply `@require_entitlement` and `@meter_usage` based on the PRD/Schema rules.
5. Run `make test` and `make lint` to verify.

### Phase 2: Frontend Implementation (`parabox-frontend-starter`)
1. Run `pnpm new-app NAME=<product_name>` in `parabox-frontend-starter`.
2. Build page views following `03-app-flow.md` and `04-design-brief.md` using `@parabox/ui` and `@parabox/canvas`.
3. Connect `@parabox/api-client` and `@parabox/realtime` to the backend endpoints.
4. Run `pnpm typecheck` and `pnpm build` to verify.

### Phase 3: Evidence Capture
1. Run test runs and record benchmark results into `products/<name>/evidence/verifications/release_report.md`.
