# Parabox Project Handoff & Status Report

**Date:** October 1, 2026  
**GitHub Organization:** [`parabox-so`](https://github.com/parabox-so)  
**Methodology:** Parabox Method (Founder Idea $\rightarrow$ 6-Doc Architecture $\rightarrow$ Autonomous Subagent Monorepo Implementation $\rightarrow$ Playwright E2E Verification)

---

## 1. Executive Summary & Repositories

All three primary repositories are initialized, synchronized, and tracked under `github.com/parabox-so`:

| Repository | Local Path | Key Contents & Purpose | Status |
| :--- | :--- | :--- | :--- |
| **`parabox-setup`** | `/Users/admin/Documents/Github/parabox-setup` | Master 6-Doc templates, competitor evidence research, active product briefs (`cleanbite`, `podclip`), Hallmark & 21st.dev skill configurations, MCP configs. | **Synced & Live** |
| **`parabox-backend-starter`** | `/Users/admin/Documents/Github/parabox-backend-starter` | Python 3.12 FastAPI monorepo, 9 core packages (`core-auth`, `core-billing`, `core-db`, `core-agents`, `core-mcp`, etc.), reference apps (`operator`, `podclip`), 65/65 passing unit/integration tests. | **Synced & 100% Passing** |
| **`parabox-frontend-starter`** | `/Users/admin/Documents/Github/parabox-frontend-starter` | Next.js 15 (Turbopack, Tailwind v4, `@parabox/*` packages) monorepo. Active apps: `apps/cleanbite` (E2E verified), `apps/podclip`. | **Synced** |

---

## 2. Active Products Status

### Product 1: CleanBite (`apps/cleanbite`)
- **Concept:** Playful modern barcode food scanner and ingredient analyzer.
- **Design System:** Hallmark `Hum` theme, Macrostructure 15: Split Studio, physical serrated receipt slip inspection.
- **Verification:** 100% passing Playwright browser automation tests (`scripts/test_e2e_cleanbite.js`). Captured hero, interactive receipt slip, and 375px mobile screenshots.
- **Backend:** Complete `api/v1/scan` integration with mock and live OCR pipelines.

### Product 2: PodClip AI (`apps/podclip`)
- **Concept:** High-density automated podcast clipping, transcript highlight extraction, and 9:16 kinetic audiogram engine.
- **Backend:** Full FastAPI app with `Episode` and `Clip` SQLAlchemy models, tenant isolation (`workspace_id`), `@mcp_tool` hooks (`find_viral_hooks`, `render_audiogram`), Stripe billing tier routes, and 12 passing unit tests.
- **Frontend:** Refactored to Hallmark **Macrostructure 05: Workbench** and **Cobalt Theme**. Sub-frame playhead timeline scrubber inspired by 21st.dev (`@rmahammad/filmstrip-scrub`), real decibel VU meters, and live 9:16 / 1:1 / 16:9 viewport switches.
- **Verification:** 100% passing Playwright browser automation tests (`scripts/snapshot_podclip.js`). Zero hydration errors. Visual craft verified at 1280px desktop and 375px mobile viewports.

---

## 3. UI Design Standards & Lessons Learned

### The "AI Slop" Diagnosis
During initial rapid generation of PodClip's frontend, the model improvised generic Tailwind markup from memory rather than strictly importing vetted components from the **21st.dev** registry or adhering to **Hallmark** constraints:
- **Trope 1: Blueprint Grid Wallpaper:** Using decorative `.bg-grid` patterns instead of clean solid backgrounds with subtle 1px border dividers (`border-zinc-800`).
- **Trope 2: Fake macOS Window Chrome:** Hand-drawing fake colored circles (`🔴 🟡 🟢`) in headers.
- **Trope 3: Fabricated Marketing Metrics:** Placeholder badges like `98.4% Accuracy` or `4.2x Viral Reach` instead of real audio engineering specs (`48kHz 24-bit PCM`, `LUFS loudness`, `00:14:22.180` timecodes).

### Mandatory Rules for Next Agent / Session
1. **Always fetch from 21st.dev:** Query and import real community-crafted components (heroes, scrubbers, toolbars, pricing cards) via 21st.dev MCP (`https://21st.dev/api/mcp`) or CLI.
2. **Strict Hallmark 53-Gate Compliance:**
   - Solid, purposeful backgrounds (Dark Cobalt / Zinc).
   - Real functional controls instead of fake decorative chrome.
   - Clean typographic hierarchy with monospace data readouts and serif/clean grotesque headings.
   - Real audio timeline scrubber with sub-frame playheads and keyboard shortcuts (`[Space]`, `[J-K-L]`, `[I/O]`).

---

## 4. Environment & Tooling Reference

- **Node.js / Package Manager:** `pnpm` (v9+)
- **Python:** Python 3.12 (managed via `venv` in `parabox-backend-starter`)
- **Test Commands:**
  - Backend Tests: `pytest` inside `parabox-backend-starter`
  - Frontend Build: `pnpm --filter @parabox/podclip build` inside `parabox-frontend-starter`
  - Playwright Snapshots: `node scripts/snapshot_podclip.js`
- **MCP Servers Configured:**
  - `playwright` (headless browser testing and visual screenshot verification)
  - `postgres` (local DB inspection)
  - `github` (repo and issue management)
  - `21st` (`https://21st.dev/api/mcp` for component discovery)

---

## 5. System Readiness & Next Steps

1. **Both Active Products E2E Verified:**
   - **CleanBite (`apps/cleanbite`)**: Split Studio + Hum Theme (100% verified).
   - **PodClip AI (`apps/podclip`)**: Workbench + Cobalt Theme + 21st.dev scrubber (100% verified, 0 errors).
2. **Hallmark & 21st.dev System Enforcement:**
   - Hallmark 3-step reading protocol hard-coded into `AGENT_RULES.md` across repositories.
   - 21st.dev API credentials configured in `~/.config/21st/auth.json`, `.env`, and `mcp.json`.
3. **Next Roadmap Items:**
   - Deploy backend and frontend containers to production cloud infrastructure.
   - Scaffold next product pipeline from product brief backlog.
