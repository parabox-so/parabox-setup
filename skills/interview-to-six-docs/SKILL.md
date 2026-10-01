---
name: interview-to-six-docs
description: Conducts an interactive interview with a product creator/founder and populates the Six Documents Before Vibe Coding (PRD, TRD, App Flow, Design Brief, Backend Schema, Implementation Plan).
---

# Interview to Six Documents Skill

When a user wants to plan a new product, activate this skill to guide them through structured discovery and generate the complete 6-document suite in `products/<product-name>/`.

---

## 📋 The 6 Documents Process

### Stage 1: Problem & Product Requirements (`01-prd.md`)
Ask the user:
1. What is the product name and one-sentence value proposition?
2. Who are the primary target users?
3. What is their current painful workaround?
4. What are the 3 non-negotiable core features for v1?
5. What is explicitly out of scope?

### Stage 2: Technical Mapping to Parabox Primitives (`02-trd.md`)
Map the requirements to the existing Parabox backend & frontend primitives:
- Auth & Multi-Tenancy: `core-auth` / `@parabox/auth`
- Billing Tier: `core-billing` (`@require_entitlement`)
- Agent Loop: `core-agents` / `core-mcp`
- Integrations: `core-integrations` (GitHub, Linear, Slack, Vercel)
- UI Shell & Realtime: `@parabox/ui` / `@parabox/realtime`

### Stage 3: Screens & Flow (`03-app-flow.md`)
Draft the screen inventory and primary user journey, including empty, loading, error, and upgrade-locked states.

### Stage 4: Visual & Theme Direction (`04-design-brief.md`)
Confirm target aesthetic, typography scale, and standard shadcn UI CSS variable customizations.

### Stage 5: Schema & Authorization (`05-backend-schema.md`)
Draft SQLAlchemy tables extending `BaseAggregateModel` with mandatory `workspace_id` tenant isolation.

### Stage 6: Milestone Implementation Plan (`06-implementation-plan.md`)
Generate ordered milestones 1 through 6 with clear Definitions of Done.

---

## Output
Write all 6 markdown files into `products/<product-name>/` and run `pnpm check-product NAME=<product-name>`.
