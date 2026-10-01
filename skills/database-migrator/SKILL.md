---
name: database-migrator
description: Safe, multi-tenant database migration and schema synchronization using Alembic and SQLAlchemy with strict tenant isolation checks.
---

# Database Migrator Skill

Use this skill when modifying or creating database models in `parabox-backend-starter/apps/<name>/` based on `05-backend-schema.md`.

---

## 🎯 Objective
Generate clean, reversible Alembic database migrations and ensure all aggregate root tables enforce strict `workspace_id` tenant isolation and index performance.

---

## 🛡️ Multi-Tenant Safety Rules

1. **Mandatory Tenant Column:** Every new table representing a customer resource must inherit from `BaseAggregateModel` or define:
   ```python
   workspace_id: Mapped[str] = mapped_column(
       String(64),
       nullable=False,
       index=True,
       comment="Tenant partition identifier"
   )
   ```
2. **Compound Indexing:** All primary queries filtering by foreign key or status must include `workspace_id` as the leading column in composite indexes.
3. **Reversibility:** Every generated migration must include a valid `downgrade()` function that completely reverses `upgrade()`.

---

## 🛠️ Step-by-Step Migration Protocol

1. **Review Schema Doc:**
   - Read `products/<name>/05-backend-schema.md` to identify table definitions, columns, and foreign keys.

2. **Update SQLAlchemy Models:**
   - Define or update models in `apps/<name>/src/models/` inheriting from `core_db.BaseAggregateModel`.

3. **Generate Alembic Migration:**
   ```bash
   uv run alembic revision --autogenerate -m "add_<entity>_table"
   ```

4. **Verify Generated Revision:**
   - Inspect the generated migration file in `alembic/versions/`.
   - Confirm `workspace_id` column is present with `nullable=False` and indexed.
   - Verify `downgrade()` drops the table or column cleanly.

5. **Run & Test Migration:**
   ```bash
   uv run alembic upgrade head
   uv run pytest tests/test_db.py
   ```
