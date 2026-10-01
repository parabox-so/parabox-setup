# 5. Backend Schema & Tenant Isolation

> 🤖 **AI-GENERATED ON AUTOPILOT:** The AI Agent automatically generates the database schema extending `BaseAggregateModel` with mandatory `workspace_id` tenant isolation.

---

## 1. Domain Entities & Database Tables

### Base Aggregate Standard (Inherited by all tables via `core-db`)
* `id`: `VARCHAR(36)` (Primary Key, prefixed CUID e.g. `doc_abc123`)
* `workspace_id`: `VARCHAR(64)` (Foreign Key / Tenant Index - **MANDATORY**)
* `created_at`: `TIMESTAMPTZ` (UTC default `now()`)
* `updated_at`: `TIMESTAMPTZ` (UTC onupdate `now()`)

---

## 2. Table Specifications

### Table: `app_[product]_[entity]`

| Column Name | Type | Nullable | Default | Description / Constraints |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `VARCHAR(36)` | No | CUID | Primary Key |
| `workspace_id` | `VARCHAR(64)` | No | - | Tenant scope (Indexed) |
| `title` | `VARCHAR(255)` | No | - | Item title |
| `status` | `VARCHAR(32)` | No | `'active'` | `'active'`, `'completed'`, `'archived'` |
| `metadata` | `JSONB` | Yes | `'{}'` | Flexible payload data |
| `created_at` | `TIMESTAMPTZ` | No | `now()` | Timestamp |
| `updated_at` | `TIMESTAMPTZ` | No | `now()` | Timestamp |

---

## 3. Tenant Rules & Authorization
* **Tenant Isolation:** All queries automatically filtered by `WHERE workspace_id = :current_workspace`.
* **Feature Gating:** Pro-tier actions decorated with `@require_entitlement`.
