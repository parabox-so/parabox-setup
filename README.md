# Parabox Setup & Spec Hub

> **The Product Specification, Architecture & Evidence Mission Control for Parabox.**  
> Powered by the **"Six Documents Before Vibe Coding"** framework and the **Parabox Method**.

---

## 🏗 Architecture & Overview

This repository is where founders, idea scientists, and product teams define, research, and plan product ideas before building them with AI coding agents.

```
parabox-setup/
├── products/                              # 📂 Product Specifications & Portfolios
│   ├── linear-escalator/                  # Reference example product
│   │   ├── 01-prd.md                      # 1. Product Requirements Document
│   │   ├── 02-trd.md                      # 2. Technical Requirements Document
│   │   ├── 03-app-flow.md                 # 3. App Flow & User Journeys
│   │   ├── 04-design-brief.md             # 4. UI/UX Brief & shadcn Tokens
│   │   ├── 05-backend-schema.md           # 5. Database Schema & Tenant Rules
│   │   ├── 06-implementation-plan.md     # 6. Ordered Milestone Build Plan
│   │   │
│   │   └── evidence/                      # 🧪 Real-World Evidence & Proof
│   │       ├── interviews/                # Customer discovery call transcripts & Mom-Test notes
│   │       └── research/                  # Competitor teardown matrices & pricing benchmarks
│   │
│   └── _template/                         # Copyable starter template
│
├── templates/                             # 📄 Master 6-Doc & Evidence Templates
├── skills/                                # 🧠 AI Product Architect Skills
│   ├── interview-to-six-docs/             # Interactive interview to generate all 6 docs
│   ├── consistency-checker/               # Flags contradictions across PRD, TRD, and Schema
│   ├── evidence-collector/                # Logs interview notes and competitor research
│   └── dispatch-to-codebase/              # Dispatches the build to backend & frontend repos
│
└── scripts/
    ├── new_product.js                     # `pnpm new-product NAME=<name>`
    └── check_consistency.js               # `pnpm check-product NAME=<name>`
```

---

## 🚀 Quick Start: Creating a New Product

### 1. Scaffold a New Product Folder (1 Command)
```bash
# Scaffolds products/my-app with all 6 documents + evidence structure
pnpm new-product NAME=my-app
```

### 2. Fill in the 6 Documents (or Let AI Interview You)
Ask any AI assistant (Antigravity, Cursor, Claude Code):
> *"Activate the `interview-to-six-docs` skill and interview me to populate the 6 documents for `products/my-app`."*

### 3. Verify Alignment & Consistency
```bash
# Checks that all 6 documents are complete and coherent
pnpm check-product NAME=my-app
```

### 4. Build Automatically with Coding Agents
Once verified, dispatch the build:
- **Backend:** AI coding agent runs `make new-app NAME=my-app` in `parabox-backend-starter`.
- **Frontend:** AI coding agent runs `pnpm new-app NAME=my-app` in `parabox-frontend-starter`.

---

## 🏛️ Connected Repositories in the Parabox Org
* 🎯 **Product Specs & Evidence:** [`parabox-setup`](https://github.com/parabox-so/parabox-setup) *(You are here)*
* 🐍 **Backend Primitives:** [`parabox-backend-starter`](https://github.com/parabox-so/parabox-backend-starter)
* ⚛️ **Frontend Primitives:** [`parabox-frontend-starter`](https://github.com/parabox-so/parabox-frontend-starter)
