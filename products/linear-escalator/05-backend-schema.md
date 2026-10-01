# 5. Backend Schema: Linear Escalator

---

## 1. Domain Entities & Tables

### Table: `app_escalator_rules`
Stores workspace escalation rules.

| Column Name | Type | Nullable | Default | Description / Constraints |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `VARCHAR(36)` | No | CUID | Primary Key |
| `workspace_id` | `VARCHAR(64)` | No | - | Tenant scope (Indexed) |
| `name` | `VARCHAR(255)` | No | - | Rule name (e.g. "Critical Bug Escalation") |
| `slack_channel_id`| `VARCHAR(64)` | No | - | Target Slack channel (e.g. `C012345678`) |
| `priority_threshold`| `INTEGER` | No | `1` | `1` = Urgent, `2` = High |
| `is_active` | `BOOLEAN` | No | `true` | Rule toggle |
| `created_at` | `TIMESTAMPTZ` | No | `now()` | Creation timestamp |
| `updated_at` | `TIMESTAMPTZ` | No | `now()` | Last update timestamp |

---

### Table: `app_escalator_events`
Stores historical incident dispatches and AI diagnosis logs.

| Column Name | Type | Nullable | Default | Description / Constraints |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `VARCHAR(36)` | No | CUID | Primary Key |
| `workspace_id` | `VARCHAR(64)` | No | - | Tenant scope |
| `rule_id` | `VARCHAR(36)` | No | - | FK to `app_escalator_rules.id` |
| `linear_issue_id`| `VARCHAR(64)` | No | - | Linear ticket ID |
| `issue_title` | `VARCHAR(255)` | No | - | Ticket title |
| `ai_summary` | `TEXT` | Yes | - | Generated 2-sentence summary |
| `status` | `VARCHAR(32)` | No | `'delivered'`| `'delivered'`, `'acknowledged'`, `'failed'` |
| `created_at` | `TIMESTAMPTZ` | No | `now()` | Dispatch timestamp |
| `updated_at` | `TIMESTAMPTZ` | No | `now()` | Update timestamp |
