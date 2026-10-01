# 2. Technical Requirements Document (TRD): PodClip AI

---

## 1. Platform & Runtime Architecture
* **Frontend Runtime:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.
* **Canvas Engine:** `@parabox/canvas` (HTML5 Canvas / WebGL audio peak renderer, waveform scrub timeline, subtitle overlay layers).
* **Backend Runtime:** Python 3.12+ (FastAPI, Async SQLAlchemy 2.0, Alembic, Pydantic v2).
* **Worker & Media Pipeline:** Celery / AsyncIO Worker with FFmpeg, Whisper/Deepgram transcription client, and Remotion / Cairo video composition worker.
* **Deployment Target:** Vercel (Frontend edge & dashboard), Fly.io / Railway (FastAPI backend + worker nodes), Cloudflare R2 / AWS S3 (Audio/Video media store).

---

## 2. Parabox Foundation Primitives

| Primitive | Module / Package | Implementation Detail in PodClip AI |
| :--- | :--- | :--- |
| **Tenancy & Auth** | `core-auth` / `@parabox/auth` | Multi-tenant Clerk JWT validation, strict `workspace_id` ContextVar propagation across all queries and file storage paths. |
| **Database & ORM** | `core-db` | Async PostgreSQL engine, base aggregate models with CUID PKs, tenant filtering mixins, and connection pooling. |
| **Billing & Limits** | `core-billing` | Stripe customer synchronization, subscription tier guards (`@require_entitlement("unlimited_exports")`, `@require_entitlement("ai_viral_radar")`), export usage meters. |
| **Autonomous AI Engine** | `core-agents` | Structured LLM extraction for hook scoring, topic segmentation, headline generation, and sentiment telemetry via LiteLLM. |
| **Tooling Protocol** | `core-mcp` | JSON-RPC 2.0 `@mcp_tool` endpoints exposing `transcribe_audio`, `score_viral_hooks`, `trim_snippet`, `dispatch_render`. |
| **Interactive Canvas** | `@parabox/canvas` | Real-time waveform scrubbing, kinetic typography layers, audio track slicing, 9:16 / 1:1 viewport aspect ratio switching. |
| **Real-Time Streaming** | `@parabox/realtime` | Server-Sent Events (SSE) and WebSocket channels for live transcription streaming, AI hook detection telemetry, and video render progress updates. |
| **Audit & Observability** | `core-audit` | Workspace-level event logging for uploads, AI scoring runs, export completions, and billing tier transitions. |

---

## 3. External Services & APIs

| Service / API | Purpose | Credentials / Env Vars | Rate Limits / Quotas |
| :--- | :--- | :--- | :--- |
| **Transcription API** | Fast speech-to-text with word-level timestamps (Deepgram Nova-2 / Whisper) | `DEEPGRAM_API_KEY` | 100 concurrent streams |
| **LLM Provider** | Viral hook scoring, punchline detection, title generation (Claude 3.5 Sonnet / GPT-4o) | `ANTHROPIC_API_KEY`, `OPENAI_API_KEY` | Tier 3 (10k RPM) |
| **Object Storage** | Storing raw audio, waveform JSON peaks, and rendered MP4 audiograms | `S3_BUCKET_NAME`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_ENDPOINT_URL` | S3 standard throughput |
| **Media Renderer** | Headless video rendering engine (FFmpeg + Remotion) | `RENDER_WORKER_CONCURRENCY` | 4 workers per node |
| **Stripe** | Subscription checkouts, customer portal, and invoice webhooks | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Standard |
| **Clerk** | Multi-tenant authentication and user organization mapping | `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Standard |

---

## 4. End-to-End Data Flow

```mermaid
flowchart TD
    A[Creator uploads Audio / RSS] --> B[FastAPI /api/v1/episodes/upload]
    B --> C[Store raw audio in S3 / R2]
    B --> D[Queue Transcription Job]
    D --> E[Speech-to-Text with Word Timestamps]
    E --> F[Generate Waveform Peaks JSON]
    E --> G[core-agents: Viral Hook Radar Extraction]
    G --> H[SQLAlchemy: Persist ViralHooks & Snippets]
    H --> I[@parabox/realtime SSE: Push Hooks to UI]
    I --> J[Creator edits in @parabox/canvas]
    J --> K[POST /api/v1/exports/render]
    K --> L{core-billing Check: Free vs Pro}
    L -- Free & quota exceeded --> M[402 Upgrade Required Modal]
    L -- Authorized --> N[FFmpeg/Remotion Video Render Pipeline]
    N --> O[SSE: Live Render Progress Bar]
    O --> P[Audiogram MP4 Ready for Download / Social Push]
```
