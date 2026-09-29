# Independent Implementation Requirement

## Foundational Survey Fabric · Conformance Section 08

**The Atlas · The Architecture · Foundational Survey Fabric · Conformance**  
**Section:** 08 — Independent Implementation Requirement  
**Scope:** Reproducibility Without Dependency  
**Status:** Candidate Independent-Proof Surface Defined  
**Canonical Adoption:** Not yet performed

This directory contains **Conformance Section 08 — Independent Implementation Requirement** for the BitPangea **Foundational Survey Fabric**.

The governing statement remains:

> **The conformance requirement that canonical Survey truth be independently implementable, reproducible, and verifiable without proprietary dependency or exclusive institutional knowledge.**

Its governing principle remains:

> **Spatial truth should be open to verification, not dependent on permission to understand it.**

---

## Public / Canonical Path

Canonical URL:

**https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/08-independent-implementation/**

Repository path:

```text
/theatlas/foundational-survey-fabric/conformance/08-independent-implementation/index.html
```

README path:

```text
/theatlas/foundational-survey-fabric/conformance/08-independent-implementation/README.md
```

---

## Integration Standing

The original section correctly established independent implementation as a canonical-adoption evidence requirement.

The integrated Specification now provides enough exact candidate behavior to make that requirement practically executable for the solved core.

Independent implementations can now attempt to reproduce:

```text
CRPC
canonical frame
Point
Segment
SCPE
exact predicates
validation
normalization
ECEM
FSF-CJSON-1.0
```

without consulting a privileged codebase.

---

## Independent Implementability

The standard must stand on its own.

An implementer should be able to build the solved profile from:

```text
published Specification
+
published Conformance rules
+
applicable Reference Vectors
```

Access to an existing implementation must not be necessary to determine canonical truth.

---

## Minimum Reproduction Surface

The current independent proof surface includes:

```text
CRPC parsing
CRPC normalization
canonical frame interpretation
Point validation
Segment validation
SCPE validation
exact predicates
canonical geometry normalization
validity classification
ECEM semantics
FSF-CJSON-1.0 parsing
FSF-CJSON-1.0 serialization
canonical byte reproduction
```

Independent implementations need not share architecture.

They must share results.

---

## No Proprietary Dependency

A valid independent implementation claim shall not require:

- proprietary software;
- closed algorithms;
- private libraries;
- inaccessible hosted services;
- exclusive vendor infrastructure;
- inaccessible proprietary data.

Proprietary implementations may exist.

Canonical truth must remain reproducible without them.

---

## No Hidden Institutional Knowledge

Canonical truth may not depend on:

- oral tradition;
- undocumented exceptions;
- tacit institutional convention;
- private interpretation;
- unpublished implementation behavior.

Any rule necessary to reproduce canonical output belongs in the governing materials.

---

## Independent Result Reproduction

For identical valid canonical inputs:

```text
Independent Implementation A
Independent Implementation B
Independent Implementation C
        ↓
same authoritative canonical meaning
```

Where unique normalization or serialization is governed:

```text
same normalized result
same canonical bytes
```

Independent agreement is evidence of determinism.

---

## Independent Validation Reproduction

For the same input and profile:

```text
same validity classification
```

The current model includes:

```text
CANONICAL VALID
VALID NONCANONICAL
INVALID
```

and unsupported behavior where the profile explicitly distinguishes it.

Valid noncanonical normalization must also converge.

---

## Independent Predicate Reproduction

Independent implementations should agree exactly on:

```text
Point equality
Point ordering
orientation
Point-on-Segment
Segment intersection
Point-on-boundary
Point-in-SCPE
polygon validity
connectedness
containment
geometric equivalence
```

Tolerance cannot be used to hide disagreement.

---

## Independent Serialization Reproduction

For:

```text
FSF-CJSON-1.0
```

independent implementations must be able to:

```text
parse same canonical bytes
    -> same canonical object

serialize same normalized object
    -> same canonical bytes
```

Shared serializer code is not the proof.

Independent reproduction is.

---

## Technology Neutrality

Conformance does not require one:

- language;
- operating system;
- database;
- hardware architecture;
- execution environment;
- blockchain;
- cryptographic platform;
- vendor stack.

Different technologies are acceptable if canonical results remain identical.

---

## Open Specification Basis

The governing materials must be inspectable enough to determine:

- exact mathematics;
- primitive geometry;
- validation;
- normalization;
- canonical serialization;
- precision semantics;
- conformance profiles;
- proof obligations.

If an essential rule exists only inside one implementation, the standard is incomplete.

---

## Reference Vector Availability

Applicable Reference Vectors should be openly available.

The solved core is now mature enough for vectors covering:

```text
CRPC normalization
validity
exact predicates
SCPE normalization
ECEM semantics
FSF-CJSON-1.0 canonical bytes
```

Hidden QA tests may exist.

Canonical compatibility cannot depend exclusively on hidden tests.

---

## Implementation Diversity

Independent implementations may differ in:

- architecture;
- algorithm;
- memory model;
- caching;
- indexing;
- storage;
- internal data structures;
- optimization.

Diversity is desirable evidence when those implementations still converge on the same canonical output.

---

## Independence of Development

A second implementation is not automatically independent merely because it is in another repository.

Formal evidence should eventually consider whether implementations share:

- copied algorithms;
- unpublished libraries;
- hidden test logic;
- common proprietary components;
- a single underlying service;
- one implementation wrapped through another interface.

The exact independence criteria remain open.

---

## No Reference-Implementation Authority

A reference implementation may help:

- education;
- interoperability;
- fixture generation;
- debugging;
- test development.

But:

> **The standard governs the code. The code does not silently govern the standard.**

If reference code and Specification disagree, the disagreement must be resolved at the proper governing layer.

---

## Independent Conformance Evaluation

Different evaluators applying the same materials should reach the same Conformance judgment.

Evaluation should depend on:

```text
published rules
published fixtures
objective outcomes
```

not discretionary private interpretation.

---

## Independence From Operational State

Canonical truth must survive outside a running service.

It shall not depend on continued availability of:

- one database;
- one server;
- one API;
- one account system;
- one cloud platform;
- one vendor.

Operational infrastructure may provide access or convenience.

It must not own the meaning.

---

## Open-Gate Independence Boundary

Independent agreement does not canonize undefined mathematics.

Examples of current open capability include:

```text
general Boolean / composite output closure
arbitrary exact rotation
general exact distance scalar
general path / boundary-length scalar
future geometry not yet selected
```

Two implementations agreeing experimentally is interesting evidence.

It is not canonical Conformance until the Specification defines the semantics.

---

## Adoption-Evidence Boundary

Independent implementation is necessary evidence on the road toward canonical adoption.

It helps prove:

```text
determinism
implementability
reproducibility
absence of hidden implementation dependence
```

It does not itself:

```text
adopt the Specification
create canonical authority
replace institutional governance
```

---

## Independence Failure

The requirement fails where canonical truth can be reproduced only through:

- inaccessible code;
- private data;
- proprietary service;
- undocumented convention;
- privileged institutional access;
- one hidden implementation dependency.

That means either:

```text
the standard is insufficiently specified
```

or:

```text
the claimed reproducibility evidence is insufficient
```

---

## Requirements Basis

This section remains derived especially from:

```text
#10
#14
#24
#61
#63–#64
#78–#81
#84–#85
```

These Findings remain authoritative within the Requirements Framework.

Conformance applies them.

It does not replace them.

---

## What Changed From the Previous Page

The previous page already correctly established:

- independent implementability;
- no proprietary dependency;
- no hidden institutional knowledge;
- independent result reproduction;
- technology neutrality;
- open governing materials;
- Reference Vector availability;
- implementation diversity;
- no reference-implementation authority;
- independent evaluation;
- independence from operational state;
- exclusive dependency as failure.

Those principles remain.

The substantive change is that the solved candidate core now makes independent implementation actionable rather than merely future-facing.

Previously:

```text
independent implementation
    -> required future evidence
```

Now:

```text
solved candidate profile
    -> sufficient for independent implementation attempts
    -> suitable for direct cross-implementation comparison
```

---

## Still Open

The remaining Conformance design work includes:

```text
minimum number of independent implementations
formal evaluator-independence rules
implementation-separation criteria
publication requirements for implementation evidence
certification procedure
reproducibility-report format
acceptable reference-implementation role
final Reference Vector coverage
formal independence test suite
```

---

## Architectural Boundary

> **Canonical truth must be reproducible from the standard, not inherited from a privileged implementation. Reproducibility proves implementation correctness; it does not establish canonical authority over the standard itself.**

This remains the defining boundary of Conformance Section 08.

---

## Status

```text
FOUNDATIONAL SURVEY FABRIC — CONFORMANCE

SECTION 08 — INDEPENDENT IMPLEMENTATION REQUIREMENT

SOLVED CANDIDATE PROFILE — INDEPENDENTLY IMPLEMENTABLE
CRPC — REPRODUCIBLE
POINT / SEGMENT / SCPE — REPRODUCIBLE
CORE PREDICATES — REPRODUCIBLE
NORMALIZATION — REPRODUCIBLE
ECEM — REPRODUCIBLE
FSF-CJSON-1.0 — REPRODUCIBLE
REFERENCE VECTOR EXECUTION — REQUIRED
PROPRIETARY DEPENDENCY — PROHIBITED
HIDDEN INSTITUTIONAL KNOWLEDGE — PROHIBITED
REFERENCE IMPLEMENTATION AUTHORITY — PROHIBITED

MINIMUM IMPLEMENTATION COUNT — OPEN
EVALUATOR-INDEPENDENCE RULES — OPEN
FORMAL CERTIFICATION PROCEDURE — OPEN
INDEPENDENCE TEST SUITE — OPEN
CANONICAL ADOPTION — NOT YET PERFORMED
```

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
