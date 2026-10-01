# 5. Backend Schema & Tenant Isolation

> **Purpose:** Explicitly define database models, relationships, tenant boundaries, and access rules so migrations and queries are deterministic.

---

## 1. Domain Entities & Tables

### Base Model Attributes (Inherited by all tables via `core-db`)
* `id`: `VARCHAR(36)` (Primary Key, prefixed CUID e.g. `doc_abc123`)
* `workspace_id`: `VARCHAR(64)` (Foreign Key / Tenant Index - **MANDATORY**)
* `created_at`: `TIMESTAMP WITH TIME ZONE` (UTC default `now()`)
* `updated_at`: `TIMESTAMP WITH TIME ZONE` (UTC onupdate `now()`)

---

## 2. Table Specifications

### Table: `[app_prefix]_[entity_name]` (e.g. `app_escalator_incidents`)

| Column Name | Type | Nullable | Default | Description / Constraints |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `VARCHAR(36)` | No | CUID | Primary Key |
| `workspace_id` | `VARCHAR(64)` | No | - | Tenant scope (Indexed) |
| `title` | `VARCHAR(255)` | No | - | Human readable title |
| `status` | `VARCHAR(32)` | No | `'open'` | `'open'`, `'analyzing'`, `'resolved'` |
| `severity` | `VARCHAR(16)` | No | `'medium'` | `'low'`, `'medium'`, `'high'`, `'critical'` |
| `metadata` | `JSONB` | Yes | `'{}'` | Flexible payload data |
| `created_at` | `TIMESTAMPTZ` | No | `now()` | Creation timestamp |
| `updated_at` | `TIMESTAMPTZ` | No | `now()` | Last update timestamp |

---

## 3. Relationships & Foreign Keys
* `[Entity A]` (1) ── (N) `[Entity B]` via `entity_a_id`
* **Cascade Delete Rule:** If `workspace` is deleted, all related rows cascade delete.

---

## 4. Tenant Ownership & Authorization Rules

| Action | Allowed Roles | Entitlement / Plan Required |
| :--- | :--- | :--- |
| `Create Item` | `owner`, `admin`, `member` | `Free` (Up to 10 items) |
| `Run Autonomous Agent` | `owner`, `admin` | `Pro` (`@require_entitlement("agent_runs")`) |
| `Delete Item` | `owner`, `admin` | Any |
| `Export Evidence` | `owner`, `admin` | `Pro` |

---

## 5. Migrations & Seed Data
* **Alembic Version Table:** `alembic_version`
* **Initial Seed:** Creates default settings row for the workspace on first tenant initialization.
