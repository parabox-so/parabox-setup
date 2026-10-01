# 2. Technical Requirements Document (TRD)

> **Purpose:** Make technical choices explicit so the build does not rely on guesses or hallucinations.

---

## 1. Platform & Hosting
* **Target Platforms:** [Web (Responsive Desktop/Mobile), iOS, Android, CLI]
* **Frontend Runtime:** Next.js 15 (App Router) + React 19 + TypeScript
* **Backend Runtime:** Python 3.12+ (FastAPI + Async SQLAlchemy 2.0)
* **Deployment Target:** [Vercel (Frontend) / Railway, Render, Fly.io, AWS (Backend)]

---

## 2. Foundation & Parabox Primitives
* **Authentication & Tenancy:** `@parabox/auth` / `core-auth` (Clerk JWT, workspace ContextVar isolation, RBAC)
* **Billing & Gating:** `core-billing` (Stripe webhooks, `@require_entitlement`, `@meter_usage`)
* **Agent & LLM Engine:** `core-agents` (LiteLLM with Claude-3.5-Sonnet / GPT-4o, multi-turn loop, token cost tracking)
* **Tooling Protocol:** `core-mcp` (`@mcp_tool` JSON-RPC 2.0 server & client)
* **Integrations:** `core-integrations` ([GitHub, Linear, Slack, Vercel])
* **Real-Time & Streaming:** `@parabox/realtime` (SSE stream + `VirtualLogStream`)
* **Storage & Artifacts:** `core-storage` (S3 / Cloudflare R2 / Local Disk)
* **Audit Trail:** `core-audit` (Immutable audit logging)

---

## 3. External Services & APIs
| Service / API | Purpose | Credentials / Env Vars | Rate Limits / Quotas |
| :--- | :--- | :--- | :--- |
| **Clerk** | User auth & workspace session | `CLERK_SECRET_KEY` | Free tier / Standard |
| **Stripe** | Subscription checkout & usage billing | `STRIPE_SECRET_KEY` | Standard API |
| **OpenAI / Anthropic** | LLM completions | `ANTHROPIC_API_KEY` | Tier 2 / 50k TPM |
| **[Provider X]** | [e.g. GitHub Webhooks / Linear API] | `GITHUB_TOKEN` | [Limits] |

---

## 4. Architecture & Data Flow
```
[Client Web Browser] 
      │ (HTTPS / SSE / WebSockets)
      ▼
[FastAPI Backend Gateway] ──(Tenant ContextVar)──► [Domain Service / Agent Runner]
      │                                                     │
      ├──► [Async PostgreSQL Database]                      ├──► [Model Context Protocol (MCP)]
      ├──► [Redis Pub/Sub & Cache]                          └──► [LiteLLM Provider (Claude/GPT)]
      └──► [Stripe / Clerk Webhooks]
```

---

## 5. Security, Privacy & Compliance
* **Tenant Isolation:** Every DB query strictly filtered by `workspace_id`.
* **Secret Storage:** All 3rd-party OAuth tokens encrypted with AES-256-GCM in `CredentialVault`.
* **Audit Logging:** Every user & agent action logged via `core-audit`.
* **Data Retention:** [What is kept, purged after 30 days, or exported?]

---

## 6. Performance & Reliability Targets
* **P95 API Latency:** < 200ms (non-LLM endpoints)
* **Agent Stream TTFT (Time to first token):** < 1.2s
* **Availability Target:** 99.9% uptime
* **Backup & Recovery:** Automated daily PostgreSQL snapshots
