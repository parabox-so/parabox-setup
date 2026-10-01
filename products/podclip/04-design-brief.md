# 4. UI & UX Design Brief: PodClip AI (Hallmark Cobalt Theme)

---

## 1. Visual Vibe & Aesthetic
* **Vibe / Aesthetic:** High-density, keyboard-driven developer studio aesthetic (Linear/Raycast inspired) engineered for maximum audio editing throughput with deep obsidian dark mode surfaces, crisp electric blue accents (`#3B82F6`), glowing audio visualizer spectrums, and monospace telemetry badges.
* **Theme Name:** `Cobalt` (High-efficiency audio workstation)

---

## 2. Hallmark Cobalt Design Tokens

### Color Palette

| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `--surface-canvas` | `#090D16` | Deepest dark background (Obsidian canvas layer) |
| `--surface-panel` | `#0F172A` | Sidebars, inspector drawers, timeline track wells |
| `--surface-card` | `#1E293B` | Floating cards, hook cards, shortcut pills |
| `--surface-card-hover` | `#334155` | Hovered interactive elements & active list items |
| `--border-subtle` | `#1E293B` | Clean 1px structural grid dividers |
| `--border-active` | `#3B82F6` | Active selection rings, focused audio in/out bounds |
| `--accent-cobalt` | `#3B82F6` | Primary action buttons, playhead scrubber, active state |
| `--accent-cobalt-glow` | `rgba(59, 130, 246, 0.25)` | Waveform glow, playback head shadow, radar pulses |
| `--text-primary` | `#F8FAFC` | High-contrast headings, transcript active text |
| `--text-secondary` | `#94A3B8` | Metadata, audio timestamps, parameter labels |
| `--text-muted` | `#64748B` | Inactive tracks, shortcut hints, placeholder copy |
| `--status-viral` | `#10B981` | Viral Score 90+ badge (Emerald green) |
| `--status-warning` | `#F59E0B` | Quota approaching warning (Amber) |
| `--status-error` | `#EF4444` | Render failure, audio transcode error (Rose) |

---

## 3. Typography & Monospace Telemetry

* **UI Sans Font:** `Inter`, `Geist Sans`, or `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`
* **Telemetry & Timestamp Font:** `JetBrains Mono`, `Geist Mono`, or `ui-monospace, SFMono-Regular, Menlo`
* **Telemetry Style Standard:**
  * Audio timestamps formatted strictly in monospace: `00:14:22.450 / 01:12:08.000`
  * Viral Score Radar telemetry: `[VIRAL_SCORE: 96.4 | RETENTION: 98% | VALENCE: POSITIVE]`
  * Keyboard shortcut pills rendered in compact monospace: `<kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-300">Space</kbd>`

---

## 4. Key Studio Components & UI Specifications

### A. Waveform Canvas Scrubber
* **Track Well:** `#0F172A` background with subtle vertical 1-second grid ticks in `rgba(255, 255, 255, 0.04)`.
* **Waveform Bars:** Dynamic gradient from `#3B82F6` (base) to `#60A5FA` (peak) with unselected audio muted to `rgba(148, 163, 184, 0.25)`.
* **Playhead Scrubber:** 2px solid `#3B82F6` needle with a top neon teardrop indicator and glowing blue drop shadow (`0 0 12px rgba(59, 130, 246, 0.6)`).
* **In/Out Selection Bracket:** Semi-transparent cobalt overlay (`rgba(59, 130, 246, 0.12)`) with draggable diamond handle grips.

### B. Viral Hook Radar Card
* **Card Surface:** Bordered slate panel (`#1E293B`) with high-density stats header.
* **Score Pill:** Monospace pill with electric green or cobalt highlight: `⚡ 94 SCORE`.
* **Quote Highlight:** Prominently formatted punchline quote with word-level click-to-seek triggers.
* **Actions:** One-click "Open in 9:16 Studio" button with `Cmd+O` shortcut badge.

### C. Audiogram Aspect Ratio Viewport
* **Interactive 9:16 Frame:** Centered device-like viewport with 12px rounded corners, subtle drop shadow, and live kinetic typography subtitle preview.
* **Real-time Reactive Waveform:** Renders pulsating audio visualizer ring/bars directly on top of the background gradient or video loop.

---

## 5. Motion & Micro-Interactions
* **Timeline Scrubbing:** Smooth 60fps canvas redraw with zero stutter during continuous drag.
* **Hover Transitions:** 120ms ease-out on all buttons, cards, and shortcut badges.
* **AI Radar Discovery Animation:** Pulsing radar sweep animation while `core-agents` evaluates conversational hooks.
* **Render Progress Meter:** Continuous progress bar with ambient cobalt shimmer indicating background FFmpeg encoding.
