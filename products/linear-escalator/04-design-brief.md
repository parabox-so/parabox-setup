# 4. UI & UX Design Brief

> **Purpose:** Give the application a consistent visual direction using standard shadcn UI conventions and Tailwind semantic tokens.

---

## 1. Audience & Tone
* **Primary Audience:** [Developers / Idea Scientists / Operations / Legal / Founders]
* **Design Adjectives:** [Fast, Precise, Uncluttered, High-Density, Modern]
* **Reference Products:** [e.g. Linear (density & keyboard shortcuts), Raycast (command palette), Vercel (monochrome precision)]

---

## 2. Color System & Semantic Tokens (shadcn UI Defaults)
Uses CSS variables defined in `app/globals.css`:

| Token | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 100%` (White) | `0 0% 3.9%` (Zinc 950) | Main background |
| `--foreground` | `0 0% 3.9%` (Near Black) | `0 0% 98%` (Near White) | Primary text |
| `--card` | `0 0% 100%` | `0 0% 3.9%` | Card / Panel surfaces |
| `--primary` | `0 0% 9%` | `0 0% 98%` | Primary CTAs & active badges |
| `--secondary` | `0 0% 96.1%` | `0 0% 14.9%` | Secondary buttons & pills |
| `--muted-foreground` | `0 0% 45.1%` | `0 0% 63.9%` | Subtitles, labels, placeholders |
| `--border` | `0 0% 89.8%` | `0 0% 14.9%` | Subtle container borders |
| `--radius` | `0.5rem` | `0.5rem` | Standard border radius |

---

## 3. Typography Scale
* **Font Family:** Standard system UI / Geist Sans / Inter
* **Scale:**
  * Page Title: `text-2xl font-bold tracking-tight text-foreground`
  * Section Heading: `text-lg font-semibold text-foreground`
  * Body Text: `text-sm text-foreground`
  * Secondary / Meta: `text-xs text-muted-foreground`
  * Monospace / Code / Logs: `font-mono text-xs text-zinc-300`

---

## 4. Reusable Primitives & Components
* **Layout:** `AppShell` with collapsible sidebar and breadcrumbs.
* **Canvas Blocks:** `ClauseBlock`, `EvidenceBlock`, `DiffBlock`, `FindingBlock`, `GateBlock`.
* **Data Display:** `VirtualLogStream` for high-throughput terminal streams.
* **Interaction:** `SlashMenu` (`/`) for inline block insertion.
* **Modals:** `ModalBus` + `PageModalHost` for upgrade dialogs and confirmations.

---

## 5. Interaction States
* **Hover:** `hover:bg-accent hover:text-accent-foreground`
* **Focus:** `focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none`
* **Disabled:** `disabled:opacity-50 disabled:pointer-events-none`
* **Loading:** Animated spinner / `<Skeleton className="h-8 w-full" />`
