# BitPangea — Foundational Survey Fabric

## Normative Language Audit

### Day #115 · September 19, 2026

**Status:** COMPLETE — LANGUAGE MODEL CONFIRMED  
**Scope:** Requirements Framework → Specification → Conformance → Reference Vectors  
**Purpose:** Confirm that the transition from requirements-level “should / must / may” language to specification-level “shall / must / may” language is deliberate, consistent, and institutionally intelligible.

---

# I. Governing Institutional Rule

The following rule is adopted for interpretation of the Foundational Survey Fabric documentation:

> **Requirements establish governing constraints; Specification converts accepted requirements into normative formal rules.**

Expanded institutional interpretation:

- **Requirements** define what the Foundational Survey Fabric is required to preserve, permit, exclude, support, or prove at the architectural level.
- **Specification** converts those accepted architectural constraints into exact normative mathematical obligations.
- **Conformance** defines how software proves that it correctly follows the governing Specification.
- **Reference Vectors** provide canonical examples, negative cases, and adversarial test cases demonstrating the expected results.

This creates the institutional sequence:

**Requirements → Specification → Conformance → Reference Vectors**

and the authority progression:

**governing constraint → normative formal rule → implementation proof → canonical test evidence**

---

# II. Requirements-Layer Language

## Audit Result

**PASS**

The seven Requirements sections use **should**, **must**, and **may**, but do not use **shall**.

This is appropriate.

The Requirements Framework is not itself the final mathematical standard. It defines the architectural envelope that later formal mathematics must satisfy.

### “Should”

Within the Requirements, **should** expresses a governing architectural requirement or intended permanent condition while preserving the distinction between requirements-level architecture and later formal mathematical specification.

Examples include requirements that the Survey Fabric:

- should preserve only minimum permanent spatial content;
- should remain separate from Parcels and higher-layer semantics;
- should support universal addressability;
- should preserve permanent canonical meaning;
- should support precision by extension;
- should remain finite, planar, exact, semantically neutral, and independently implementable;
- should use Pang as native canonical scale;
- should support exact spatial operations.

In this framework, **should does not mean casual preference**.

It means:

**this is an accepted governing requirement that later formal design must satisfy unless a formal architectural review demonstrates that the requirement itself must be amended.**

### “Must”

The Requirements also appropriately use **must** where the text expresses a non-negotiable consequence, prohibition, dependency, or established constitutional constraint.

Examples include:

- Parcel identity **must not** depend on Survey subdivision depth;
- established constitutional truths **must** remain supportable;
- canonical reference meaning **must not** depend on opaque registry assignment;
- approximation **must not** determine canonical spatial meaning;
- higher-layer systems **must not** become competing sources of permanent World-space truth.

The presence of **must** does not collapse Requirements into Specification.

It indicates that some architectural constraints are absolute even before their mathematical realization is known.

### “May”

The Requirements use **may** correctly for permitted alternatives, derived structures, higher-layer options, implementation freedoms, and unresolved design possibilities.

Examples include:

- implementations may materialize or cache derived reference structures;
- higher layers may define local or derived coordinate systems;
- the eventual mathematics may use hierarchical refinement, exact coordinate extension, symbolic subdivision, or another exact mechanism.

### Requirements-Layer Rule

For the Foundational Survey Fabric Requirements Framework:

- **should** = governing architectural requirement / intended permanent constraint;
- **must / must not** = non-negotiable architectural necessity or prohibition;
- **may** = permitted possibility or implementation/design freedom;
- **shall** = intentionally not used as the primary Requirements-layer normative verb.

---

# III. Specification-Layer Language

## Audit Result

**PASS**

The Specification consistently changes register.

Its formal clauses use **shall** to convert accepted Requirements into normative mathematical rules.

Examples include:

- the Survey Fabric **shall define** one finite canonical Survey Domain;
- the canonical Survey Domain **shall** be modeled as two-dimensional planar ground;
- the Survey Domain **shall possess** exact mathematically defined limits;
- Pang **shall** be the native canonical linear unit;
- canonical area **shall** be expressed in square Pangs;
- the Survey Fabric **shall establish** one permanent canonical origin;
- authoritative BitPangea location **shall resolve** to one global canonical frame;
- canonical references **shall** remain absolute;
- the Survey Fabric **shall support** exact canonical geometry and operations;
- normative encodings **shall** be deterministic;
- compatible Specification evolution **shall preserve** established canonical meaning.

This is exactly the correct location for **shall**.

The Specification is where governing architectural requirements become formal rules that a conforming implementation can either satisfy or fail.

### “Must” Within the Specification

The Specification also contains **must** in introductory, inherited-constraint, and explanatory language.

This is acceptable.

Examples such as:

- eventual mathematics **must satisfy** accepted requirements;
- canonical meaning **must remain unchanged**;
- authoritative address and measurement **must resolve** to the same spatial truth

state inherited necessity or explanatory constraint.

The audit does **not** require replacing every Specification “must” with “shall.”

Doing so would be mechanical editing rather than institutional clarification.

The controlling rule is:

**Normative formal clauses should use “shall” when specifying required behavior of the completed Survey mathematics or conforming representation. “Must” remains permissible where expressing inherited necessity, logical consequence, or explanatory prohibition.**

### “Should” Within the Specification

The audit found no competing requirements-level use of **should** inside the substantive normative clauses of Specification Sections 01–07.

The principal visible use is editorial, such as the heading:

**Spatial Truth Should Outlive Its Formats**

and process guidance on the Specification index concerning when prototype and conformance testing should begin.

These uses are not normative mathematical requirements and do not create ambiguity.

They may remain unchanged.

---

# IV. Conformance-Layer Language

## Audit Result

**PASS**

Conformance correctly sits below the Specification.

Its institutional rule is already explicit:

> **The Requirements establish what must be satisfied. The Specification defines the mathematics that satisfies it. Conformance defines how software proves that it follows that Specification correctly.**

The Conformance framework appropriately uses normative language to describe:

- mandatory implementation behavior;
- required exactness;
- validation behavior;
- serialization compatibility;
- version compatibility;
- independent implementation;
- failure conditions;
- conformance declarations.

Conformance does not reinterpret a Requirements “should” directly.

It proves compliance with the Specification rules into which that requirement has been formally translated.

This avoids a critical authority error:

**Conformance tests the Specification; it does not independently formalize the Requirements.**

---

# V. Reference Vector Language

## Audit Result

**PASS**

Reference Vectors correctly occupy the final proof-artifact layer.

Their institutional sequence is already explicit:

> **Requirements establishes what must be satisfied. Specification defines the mathematics that satisfies it. Conformance defines how an implementation proves it follows the Specification. Reference Vectors provide canonical examples and test cases proving the expected results.**

The Reference Vector framework uses **shall** only where a future exact proof obligation is genuinely normative—for example, exact canonical vectors are to be created only after the Specification determines the mathematics needed to derive their expected results.

This is appropriate because the vector framework may define proof obligations now while refusing to fabricate exact mathematical outputs prematurely.

Reference Vectors do not translate “should” into “shall.”

That translation has already occurred in the Specification.

They instantiate the resulting formal rules as exact test cases.

---

# VI. The “Should → Shall” Transition

The transition should not be understood as a mechanical word-replacement rule.

It is an **institutional authority transition**.

A Requirements Finding may state:

**The Foundational Survey Fabric should support X.**

The later Specification may state:

**The Foundational Survey Fabric shall implement X according to formal rule Y.**

The relationship is:

1. **Requirement establishes the obligation.**
2. **Specification determines the exact normative mathematical realization.**
3. **Conformance proves an implementation follows that realization.**
4. **Reference Vectors demonstrate exact expected outcomes.**

Therefore:

> **“Should” at the Requirements layer is not weakened by “shall” at the Specification layer. “Shall” is the formalization of the accepted requirement once its mathematical expression is specified.**

---

# VII. Recommended Permanent Institutional Text

The following sentence should be preserved in an appropriate persistent FSF index or framework page:

> **Requirements establish governing constraints; Specification converts accepted requirements into normative formal rules.**

Recommended expanded sequence where additional explanation is useful:

> **Requirements establish governing constraints. Specification converts accepted requirements into normative formal rules. Conformance defines how implementations prove that they follow those rules. Reference Vectors provide canonical examples and test cases demonstrating the expected results.**

This wording should be treated as an **institutional interpretation rule**, not a new Requirement Finding.

It does not become Finding #86.

It does not amend Findings #1–#85.

It explains how the four existing FSF frameworks relate.

---

# VIII. Recommended Placement

## Primary Placement

Add the rule to the **Foundational Survey Fabric main page** or another persistent FSF institutional overview where all four framework branches are presented together.

Preferred wording:

> **Institutional Sequence**  
> Requirements establish governing constraints. Specification converts accepted requirements into normative formal rules. Conformance defines how implementations prove that they follow those rules. Reference Vectors provide canonical examples and test cases demonstrating the expected results.

## Secondary Placement

The shorter formulation may remain or be added to:

- Requirements index
- Specification index
- Conformance index
- Reference Vectors index

Each page may phrase the sequence from its own institutional perspective, provided the authority relationship remains identical.

---

# IX. Pages Reviewed

## Requirements

- `/theatlas/foundational-survey-fabric/requirements/`
- Requirements I — Findings #1–#6
- Requirements II — Findings #7–#15
- Requirements III — Findings #16–#17
- Requirements IV — Findings #18–#33
- Requirements V — Findings #34–#43
- Requirements VI — Findings #44–#77
- Requirements VII — Findings #78–#85

## Specification

- `/theatlas/foundational-survey-fabric/specification/`
- Specification 01 — Survey Domain and Ground Model
- Specification 02 — Canonical Frame and Measurement
- Specification 03 — Canonical Addressing and Precision
- Specification 04 — Spatial Expressions and Geometry
- Specification 05 — Canonical Operations
- Specification 06 — Serialization and Specification Identity
- Specification 07 — Computability Rules

## Conformance

- `/theatlas/foundational-survey-fabric/conformance/`

## Reference Vectors

- `/theatlas/foundational-survey-fabric/reference-vectors/`

---

# X. Corrections Required

## Requirements Findings

**None.**

No “shall” language was found in the seven Requirements sections.

The existing should / must / may pattern is coherent with the Requirements Framework’s institutional role.

## Specification Sections

**No substantive normative-language correction required.**

The Specification uses “shall” consistently for formal mathematical obligations.

The limited “should” language present is editorial or procedural rather than a competing normative rule.

## Conformance

**No correction required.**

## Reference Vectors

**No correction required.**

---

# XI. Audit Disposition

**NORMATIVE LANGUAGE AUDIT — PASS**

**REQUIREMENTS “SHOULD / MUST / MAY” — INTENTIONAL**

**SPECIFICATION “SHALL / MUST / MAY” — INTENTIONAL**

**REQUIREMENTS → SPECIFICATION AUTHORITY TRANSITION — FORMALIZED**

**NO FINDING #86 REQUIRED**

**NO FINDINGS #1–#85 AMENDED**

**NO SPECIFICATION MATHEMATICS SELECTED**

**NO CONFORMANCE RULE CREATED PREMATURELY**

**NO REFERENCE VECTOR DATA INVENTED**

The governing institutional interpretation is now:

> **Requirements establish governing constraints; Specification converts accepted requirements into normative formal rules.**

And the full proof sequence is:

> **Requirements establish governing constraints. Specification converts accepted requirements into normative formal rules. Conformance defines how implementations prove that they follow those rules. Reference Vectors provide canonical examples and test cases demonstrating the expected results.**

---

## Day #115 Standing

**TASK #2 — NORMATIVE LANGUAGE AUDIT — COMPLETE**

The language transition is intentional rather than accidental.

No broad rewrite is required.

The next Foundational Survey Fabric closeout task is the **downward/upward boundary audit**:

**Survey Fabric owns / Survey Fabric may derive / Survey Fabric explicitly does not own.**
