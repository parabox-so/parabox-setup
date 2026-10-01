# 1. Product Requirements Document (PRD): Linear Escalator

---

## 1. Product Overview
* **Product Name:** Linear Escalator
* **One-Sentence Idea:** Automatically monitors urgent Linear issues and escalates them to Slack with an AI diagnostic summary and fix suggestion.
* **Target Users:** Engineering managers, on-call developers, and tech leads.

---

## 2. Problem & Workaround
* **Pain Point:** Urgent/P0 issues filed in Linear during off-hours or busy sprints are often missed, resulting in breached SLAs and delayed incident responses.
* **Current Workaround:** Manual Slack tagging by on-call engineers, monitoring unread email digests, or setting up complex Zapier webhooks with zero AI context.

---

## 3. Goals & Success Measures
* **Primary Objective:** Reduce time-to-first-response for urgent Linear tickets to under 3 minutes.
* **Measurable Signal (KPI):** 80% reduction in off-hours response time across 5 pilot engineering teams.

---

## 4. Feature Scope

### Core Features (v1.0 - Must Have)
1. **Webhook Ingestion:** Ingest Linear `issue.created` and `issue.updated` webhooks with signature validation (*P0*).
2. **Urgent Issue Filter:** Detect `priority === 1` (Urgent) or `severity === "critical"` (*P0*).
3. **AI Summary Generation:** Generate a 2-sentence summary and initial troubleshooting checklist using `core-agents` (*P0*).
4. **Slack Block Alert:** Post interactive Slack notification with "Acknowledge" and "Assign to Me" buttons (*P0*).

### Out of Scope (What Will Wait for Later)
* Auto-generating PRs for code fixes (deferred to v2).
* PagerDuty / Opsgenie phone escalation (deferred to v2).

---

## 5. User Stories & Acceptance Criteria

### Story 1: Urgent Issue Alerting
* **User Story:** As an on-call engineer, I want urgent Linear issues posted to our Slack incident channel with an AI summary, so I can immediately assess the severity without opening Linear.
* **Acceptance Criteria:**
  * **Given** an urgent Linear issue is created in workspace `ws_123`
  * **When** the Linear webhook arrives at `/api/v1/webhooks/linear`
  * **Then** an interactive Slack message is posted to `#incident-room` within 5 seconds with AI context.

### Story 2: Pro Tier Gating
* **User Story:** As an organization admin, I want to upgrade to the Pro tier to enable automated escalation rules.
* **Acceptance Criteria:**
  * **Given** a workspace on the Free tier
  * **When** an admin tries to activate more than 1 escalation rule
  * **Then** the UI displays an upgrade prompt for the Pro plan ($49/month).
