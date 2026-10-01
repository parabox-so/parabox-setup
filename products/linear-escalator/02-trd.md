# 2. Technical Requirements Document (TRD): Linear Escalator

---

## 1. Platform & Hosting
* **Target Platforms:** Web Dashboard + Slack App
* **Frontend Runtime:** Next.js 15 (App Router) + TypeScript + Tailwind CSS
* **Backend Runtime:** Python 3.12+ (FastAPI + Async SQLAlchemy 2.0)
* **Deployment Target:** Vercel (Frontend) & Fly.io / Railway (Backend)

---

## 2. Foundation & Parabox Primitives
* **Authentication & Tenancy:** `core-auth` / `@parabox/auth` (Clerk JWT, workspace ContextVar isolation)
* **Billing & Gating:** `core-billing` (Stripe webhooks, `@require_entitlement("unlimited_rules")`)
* **Agent & LLM Engine:** `core-agents` (LiteLLM with Claude-3.5-Sonnet / GPT-4o-mini for fast summaries)
* **Tooling Protocol:** `core-mcp` (`@mcp_tool` JSON-RPC 2.0 server)
* **Integrations:** `core-integrations` (Linear webhook signature verification + Slack WebClient)
* **Real-Time & Streaming:** `@parabox/realtime` (Live incident log streaming)
* **Audit Trail:** `core-audit` (Logs every webhook received and Slack alert dispatched)

---

## 3. External Services & APIs
| Service / API | Purpose | Credentials / Env Vars | Rate Limits / Quotas |
| :--- | :--- | :--- | :--- |
| **Linear API** | Webhook events & issue fetching | `LINEAR_WEBHOOK_SECRET` | 1,500 req/min |
| **Slack WebClient** | Channel alert posting & Block Kit | `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET` | Tier 3 (50+ req/min) |
| **Clerk** | Multi-tenant auth | `CLERK_SECRET_KEY` | Standard |
| **Stripe** | Pro plan checkout | `STRIPE_SECRET_KEY` | Standard |
| **Anthropic / OpenAI**| Incident diagnosis & summary | `ANTHROPIC_API_KEY` | Tier 2 |
