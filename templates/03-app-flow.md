# 3. App Flow & User Journeys

> 🤖 **AI-GENERATED ON AUTOPILOT:** The AI Agent automatically generates the screen inventory, primary journey, and edge states based on `01-prd.md` and `04-design-brief.md`.

---

## 1. Screen Inventory

| Screen Name | Route Path | Purpose | Key Components & Primitives |
| :--- | :--- | :--- | :--- |
| **Overview Dashboard** | `/` | Metrics, active runs, quick launch | `@parabox/ui` AppShell, `Card`, `Button` |
| **Main Product Studio** | `/studio` | Core user workflow & canvas blocks | `@parabox/canvas`, `@parabox/realtime` |
| **Billing & Plans** | `/billing` | Stripe plan upgrade modal & usage | `@parabox/auth` `<RequireEntitlement>` |

---

## 2. Primary User Journey
```mermaid
sequenceDiagram
    autonumber
    actor User
    participant UI as Next.js Web App
    participant API as FastAPI Backend
    participant Agent as Agent Runner (LLM)

    User->>UI: 1. Opens App & selects Workspace
    UI->>API: 2. GET initial state (with Clerk JWT)
    API-->>UI: 3. Return workspace state
    User->>UI: 4. Triggers core action
    UI->>API: 5. POST /api/v1/agents/stream (SSE)
    API->>Agent: 6. Run bounded MCP tools
    Agent-->>API: 7. Stream token events
    API-->>UI: 8. SSE stream to VirtualLogStream
    UI-->>User: 9. Displays success state & canvas output
```

---

## 3. Edge States & Handling
* **Empty State:** Clean empty illustration with primary CTA button.
* **Locked Feature:** Catches HTTP 402, triggers `ModalBus` Stripe upgrade dialog.
* **Loading State:** Skeletons and live terminal progress.
