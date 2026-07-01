---
title: Governance Schema
description: Shared metadata model, document types, and lifecycle rules for governance documents.
---

# Governance Schema

## Overview

All governance documents follow a shared schema to ensure consistency, traceability, and automation.

---

## Layer 1 — Universal Metadata

Every governance document must include:

```yaml
title:
id:
type:
status:
version:
owner:
approver:
effective_date:
review_date:
supersedes:
superseded_by:
related_documents:
tags:
summary:
```

⸻

Layer 2 — Document Types

Supported document types include:

* Constitution
* Bylaw
* Charter
* Policy
* Procedure
* Standard
* Guideline
* Resolution
* Decision
* Meeting Minutes
* Agreement
* Template

Each document type may define additional required fields.

⸻

Layer 3 — Governance Relationships

Documents form a governance graph.

Relationships include:

* authorizes
* governed_by
* references
* supersedes
* requires
* implements
* related_to

This enables automated impact analysis and navigation.

⸻

Document Lifecycle

Documents move through the following lifecycle:

Draft
↓
Review
↓
Approved
↓
Active
↓
Superseded
↓
Archived

Transitions should be validated automatically whenever possible.

⸻

Versioning

Governance documents follow Semantic Versioning.

Examples:

* 1.0.0
* 1.1.0
* 2.0.0

Repository releases represent complete governance package releases.

⸻

Naming Convention

Every document receives a permanent identifier.

Examples:

* CONST-001
* BYLAW-001
* POLICY-001
* PROC-001
* CHARTER-001
* TEMPLATE-001

Identifiers remain stable even if document titles change.

⸻

Governance Manifest

The governance package is described by a manifest defining:

* governance version
* organization
* required governance artifacts
* review cycles
* package metadata

The manifest acts as the canonical description of the governance framework and supports automated validation of completeness and consistency.