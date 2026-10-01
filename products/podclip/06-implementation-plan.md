# 6. Implementation Plan & Milestones: PodClip AI

> **Purpose:** Provide an ordered, step-by-step engineering execution roadmap with strict quality checkpoints and Definitions of Done (DoD) for building PodClip AI.

---

## Milestone 1: Project Scaffolding & Shared Primitives Setup
* **Task 1.1:** Scaffold backend application in `parabox-backend-starter/src/podclip/` with FastAPI routing structure and dependency injection.
* **Task 1.2:** Scaffold frontend Next.js 15 application in `parabox-frontend-starter/apps/podclip/` with Tailwind CSS v4, Cobalt theme color tokens, and `@parabox/ui` AppShell.
* **Task 1.3:** Setup shared types and schemas (`PodcastEpisode`, `ViralHook`, `AudioSnippet`, `ExportJob`) in TypeScript and Pydantic v2.
* **Definition of Done (DoD):** Both frontend and backend boot cleanly in local dev environments; Clerk authentication and workspace context propagate on route entry.

---

## Milestone 2: Multi-Tenant Data Schema & Audio Ingestion Pipeline
* **Task 2.1:** Implement async SQLAlchemy 2.0 models (`PodcastEpisode`, `ViralHook`, `AudioSnippet`, `ExportJob`) with mandatory `workspace_id` tenant isolation.
* **Task 2.2:** Generate and verify Alembic database migrations in PostgreSQL test container.
* **Task 2.3:** Implement `POST /api/v1/episodes/upload` endpoint handling multipart audio uploads and RSS URL ingestion.
* **Task 2.4:** Build background audio worker with FFmpeg peak extraction (JSON output) and Deepgram/Whisper speech-to-text with word-level alignment.
* **Definition of Done (DoD):** Uploaded MP3 is stored in S3/R2, transcribed with word timestamps, and waveform peak array is persisted; tenant isolation test passes with zero cross-tenant leakage.

---

## Milestone 3: Viral Hook Radar & Agentic Scoring Engine
* **Task 3.1:** Implement `core-agents` agent pipeline for semantic hook detection, emotional valence scoring, and punchline extraction.
* **Task 3.2:** Build Viral Scoring algorithm (0–100 index calculating clarity, emotional valence, retention, and standalone coherence).
* **Task 3.3:** Expose `@mcp_tool` functions (`extract_viral_hooks`, `rank_candidate_clips`, `generate_social_captions`).
* **Task 3.4:** Implement SSE endpoint (`/api/v1/episodes/{id}/hooks/stream`) to stream hook detection progress in real-time.
* **Definition of Done (DoD):** An ingested 60-minute podcast automatically yields 5 ranked viral hooks with rationale and timestamps in under 90 seconds.

---

## Milestone 4: Cobalt Studio Canvas & Real-Time Waveform Editor
* **Task 4.1:** Integrate `@parabox/canvas` to render high-density 60fps audio waveform timeline with responsive millisecond zoom.
* **Task 4.2:** Implement keyboard navigation system (`Space` play/pause, `J`/`K`/`L` shuttle, `I`/`O` in/out markers, `[`/`]` boundary nudge).
* **Task 4.3:** Build dynamic 9:16 / 1:1 / 16:9 interactive viewport preview with synchronized kinetic word subtitles.
* **Task 4.4:** Integrate `@parabox/realtime` for live collaborative timeline scrubbing and state sync.
* **Definition of Done (DoD):** Studio editor allows scrubbing and trimming audio with synchronized subtitle preview with <16ms UI latency; all keyboard shortcuts operate smoothly.

---

## Milestone 5: Headless Render Engine & Monetization Gating
* **Task 5.1:** Implement headless video render worker (FFmpeg + Remotion composition) supporting 720p, 1080p, and 4K 60fps video generation.
* **Task 5.2:** Connect `core-billing` Stripe subscription entitlement guards (`@require_entitlement("unlimited_exports")`, `@require_entitlement("ai_viral_radar")`).
* **Task 5.3:** Wire usage meters to track monthly export counts (Free: 3/mo max).
* **Task 5.4:** Implement global frontend `ModalBus` 402 interceptor opening the Cobalt Pro checkout drawer upon entitlement limits.
* **Definition of Done (DoD):** Free tier user is blocked at 4th export with clean Stripe upgrade modal; Pro user successfully renders watermark-free 1080p/4K 9:16 MP4.

---

## Milestone 6: Quality Verification, Benchmarking & Release Proof
* **Task 6.1:** Run automated backend test suite (`pytest -v`) with 100% tenant isolation assertions.
* **Task 6.2:** Execute frontend typechecks (`pnpm typecheck`) and linting (`ruff check`).
* **Task 6.3:** Benchmark end-to-end latency for transcription, hook detection, and 60-second audiogram rendering.
* **Task 6.4:** Document performance metrics and verification artifacts in `evidence/podclip/verification_report.md`.
* **Definition of Done (DoD):** All unit, integration, and UI tests pass; full end-to-end demo flow runs autonomously without manual intervention.
