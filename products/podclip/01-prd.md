# 1. Product Requirements Document (PRD): PodClip AI

---

## 1. Product Overview
* **Product Name:** PodClip AI
* **One-Sentence Idea:** Autonomous podcast highlighter, viral hook radar, and dynamic 9:16 audiogram studio built for high-throughput media teams and creators.
* **Target Users:** Podcast producers, solo creators, social media growth engineers, and agency media teams.

---

## 2. Problem & Market Opportunity
* **Pain Point:** Repurposing long-form podcast audio (45–90 minutes) into high-performing short-form video (TikTok, YouTube Shorts, Reels) takes 4–6 hours per episode using disjointed transcription, manual cutting, audio scrubbing, and rendering tools.
* **Current Workaround:** Creators manually scrub audio timelines in Audacity/Premiere, paste transcripts into ChatGPT to ask for timestamps, and re-import cuts into Canva/CapCut to manually sync subtitles and waveform visualizers.
* **Opportunity:** An autonomous, keyboard-driven studio that listens to full episodes, scores viral conversational hooks, aligns precision waveforms, and outputs styled 9:16 audiograms in under 60 seconds.

---

## 3. User Personas
1. **Solo Tech Podcaster (Alex):** Releases weekly episodes, needs 3–5 punchy clips for X and TikTok immediately after recording without touching heavy video editing software.
2. **Media Agency Producer (Elena):** Manages 10+ client podcasts, needs batch hook detection, shared studio asset pantries, and multi-tenant workspace isolation.
3. **Growth Marketer (Marcus):** Iterates rapidly on A/B thumbnail styles, hook captions, and kinetic waveform animations to maximize organic engagement.

---

## 4. Core Features (v1.0 - Must Have)

### 1. Viral Hook Radar
* **Autonomous Semantic Analysis:** Uses `core-agents` with audio transcript embeddings to detect conversational peaks, controversies, strong opinions, and punchlines.
* **Viral Scoring Index (0–100):** Evaluates hooks across 4 dimensions: Hook Clarity (0-25), Emotional Valence (0-25), Retainability (0-25), and Standalone Coherence (0-25).
* **Suggested Title & Caption Generator:** Autogenerates SEO-optimized titles, hashtags, and description copy per hook.

### 2. Real-Time Audio Waveform Canvas
* **Interactive Waveform Visualizer:** Powered by `@parabox/canvas` and `@parabox/realtime`, rendering millisecond-precision audio peaks and scrubbing.
* **Snippet Boundary Trimming:** Keyboard-driven audio trimming (`[`, `]`, `Space` for preview, `J`/`K`/`L` shuttle controls).
* **Dynamic Word-Level Subtitle Sync:** Word-level timestamps highlighted synchronously with playback.

### 3. Multi-Format 9:16 Audiogram Exporter
* **Kinetic Template Engine:** Presets for Vertical (9:16 TikTok/Shorts/Reels), Square (1:1 LinkedIn/Instagram), and Landscape (16:9 X/YouTube).
* **Visual Layer Stack:** Dynamic reactive audio waveform bars/rings, speaker avatars, animated caption text, background gradients/video loops.
* **High-Throughput Render Queue:** Async serverless video rendering with real-time SSE progress tracking and 4K export pipeline.

---

## 5. Monetization & Tier Gating

| Plan | Price | Target | Key Entitlements |
| :--- | :--- | :--- | :--- |
| **Free** | $0/mo | Hobbyists / Starters | 3 exports/month, 720p watermarked video, Standard transcript processing |
| **Pro** | $19/mo | Solo Creators | Unlimited 4K exports, AI Viral Scoring Radar, Custom fonts/brand watermarks, Priority render queue |
| **Team** | $49/mo | Agencies & Studios | Multi-seat (5 seats included), Shared studio pantry (assets/templates), Batch episode ingestion, Webhook automations |

---

## 6. Goals & Success Measures
* **Primary Objective:** Decrease long-form to short-form clip turnaround time from 4 hours to under 3 minutes.
* **Measurable Signal (KPI):** 
  * >70% of ingested episodes convert to at least 2 exported audiograms.
  * Viral Hook AI accuracy rated >4.2/5 by beta creators.
  * Render completion latency under 45s for 60-second 1080p audiograms.

---

## 7. User Stories & Acceptance Criteria

### Story 1: Automated Viral Hook Detection
* **User Story:** As a creator, I want to upload an audio file or RSS link and immediately see the top 5 viral moments ranked with timestamps and scores.
* **Acceptance Criteria:**
  * **Given** an uploaded MP3/WAV episode (up to 2 hours)
  * **When** ingestion completes via background transcription
  * **Then** the Viral Hook Radar displays ranked candidate clips with confidence scores within 90 seconds.

### Story 2: Real-Time Audio Canvas Editing
* **User Story:** As an editor, I want to fine-tune snippet start/end times using keyboard shortcuts while watching real-time synchronized subtitles.
* **Acceptance Criteria:**
  * **Given** a selected viral hook snippet
  * **When** pressing `I` (mark in) or `O` (mark out) or dragging canvas waveform handles
  * **Then** the canvas updates start/end timestamps and dynamically resyncs word captions with <16ms latency.

### Story 3: Pro Tier Gating on 4K & Unlimited Exports
* **User Story:** As a Free tier user attempting a 4th export or 4K resolution, I want clear upgrade prompts.
* **Acceptance Criteria:**
  * **Given** a workspace with 3 exports consumed this billing period
  * **When** clicking "Export 1080p Audiogram"
  * **Then** the UI intercepts with a Pro Plan modal offering one-click Stripe checkout.
