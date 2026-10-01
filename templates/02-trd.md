# 2. Technical Requirements Document (TRD)

> 🤖 **AI-GENERATED ON AUTOPILOT:** The AI Agent automatically generates this technical blueprint by mapping your `01-prd.md` to Parabox Backend & Frontend Primitives.

---

## 1. Platform & Deployment
* **Frontend Runtime:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS
* **Backend Runtime:** Python 3.12+ (FastAPI + Async SQLAlchemy 2.0)
* **Target Deployment:** Vercel (Frontend) & Railway / Render / Fly.io (Backend)

---

## 2. Selected Parabox Primitives
* **Authentication & Tenancy:** `core-auth` / `@parabox/auth` (Clerk JWT, workspace ContextVar isolation, RBAC)
* **Billing & Monetization:** `core-billing` (Stripe webhooks, `@require_entitlement`, `@meter_usage`)
* **Agent & LLM Engine:** `core-agents` (LiteLLM with Claude-3.5 / GPT-4o, multi-turn reasoning loop)
* **Tooling Protocol:** `core-mcp` (`@mcp_tool` JSON-RPC server & client)
* **Integrations:** `core-integrations` ([GitHub, Linear, Slack, Vercel])
* **Real-Time Streaming:** `@parabox/realtime` (SSE stream + `VirtualLogStream`)
* **Storage & Audit:** `core-storage` (S3/R2/Local) & `core-audit` (Immutable audit trails)

---

## 3. Architecture & Data Flow
```
[Next.js 15 Web App] 
      │ (HTTPS / SSE / WebSockets)
      ▼
[FastAPI Backend Gateway] ──(Tenant ContextVar)──► [Domain Service / Agent Runner]
      │                                                     │
      ├──► [Async PostgreSQL Database]                      ├──► [Model Context Protocol (MCP)]
      └──► [Stripe / Clerk Webhooks]                         └──► [LiteLLM Provider]
```
