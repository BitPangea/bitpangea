# General Spatial Interpretation — Requirements

**BitPangea · The Atlas**
**Date:** November 26, 2026
**Revision:** R2
**Status:** DRAFT — not adopted

## Governing head

**GSI-CORE-01 — Interpretation without redefinition.** GSI shall provide shared, reproducible spatial interpretation above established Survey reference and World membership, without creating competing spatial authority.

## Core requirements

- **GSI-CORE-02 — Dependency fidelity.** Consume FSF-SPEC-1.0 and SG-SPEC-1.0 and the adopted World-space instance by reference; do not redefine their semantics.
- **GSI-CORE-03 — Exactness.** Governed exact interpretations shall preserve exact input meaning without silent approximation or snapping.
- **GSI-CORE-04 — Determinism.** Identical valid input meanings, operations and governing context shall yield identical successful semantic results independently of implementation.
- **GSI-CORE-05 — Representation independence.** Equivalent valid representations shall not change geometric interpretation.
- **GSI-CORE-06 — Finite evaluation.** Every admitted operation on valid supported inputs shall have a finite exact evaluation procedure.

## Authority and constitutional requirements

- **GSI-AUTH-01 — Constitutional subordination.** Preserve One World, 21 million Parcels, No Expansion and No Duplication; GSI shall not establish or revise constitutional truths.
- **GSI-AUTH-02 — Membership preservation.** Point membership remains exactly WORLD or NON_WORLD; higher extent classifications are derived, not additional Ground values.
- **GSI-AUTH-03 — Entity separation.** Geometric equivalence shall not establish entity identity; entity geometry associations and cadastral assignments remain with their responsible authorities.
- **GSI-AUTH-04 — Relationship separation.** Geometric predicates shall not independently establish or redefine any adopted constitutional concept, including Parcel Boundary, Coordinate, Adjacency, Contiguity, Distance and Direction. Generic geometric contact or connectedness shall not alone establish constitutional Adjacency or Contiguity.
- **GSI-AUTH-05 — Capability restraint.** Unsupported upstream capabilities shall not be silently assumed or independently redefined.

- **GSI-AUTH-06 — Dependency qualification.** Each admitted operation and input combination shall have a demonstrated exact dependency path; unresolved upstream gaps shall be explicitly excluded or referred to the responsible authority.

- **GSI-AUTH-07 — World closure.** Valid Survey expressions outside canonical World-space may be evaluated as Survey geometry but shall not thereby acquire constitutional World structure, Parcel standing or independent World identity.
- **GSI-AUTH-08 — Recognized World Properties.** Preserve The Extent, The Region and The Cluster as adopted constitutional concepts. Technical scope exclusions shall not deny their recognition; implementation choices shall not impose new constitutional thresholds, geometries or Parcel counts.

## Interpretation and evaluation requirements

- **GSI-EVAL-01 — Explicit scope.** Govern admitted geometry types, operations, input combinations and result semantics.
- **GSI-EVAL-02 — Validity.** Validate inputs and applicable governing context before issuing successful interpretations.
- **GSI-EVAL-03 — Outcome distinction.** Distinguish successful negative results from invalid input, unresolved references, unsupported operations, incompatible context and evaluation failures.
- **GSI-EVAL-04 — Boundary fidelity.** Preserve inherited boundary semantics, including the inclusion of the canonical World limit.
- **GSI-EVAL-05 — Context identification.** Successful interpretations shall identify applicable governing rules and input meanings sufficiently for independent reproduction.

- **GSI-EVAL-06 — Context isolation.** Synthetic or candidate Ground contexts shall be explicitly distinguished from the adopted canonical World-space; their results shall not claim canonical World standing.

## Preservation and verification requirements

- **GSI-PRES-01 — Derived result discipline.** Computed results, caches and indexes shall not override authoritative inputs or rules.
- **GSI-PRES-02 — Justified persistence.** Do not mandate permanent result storage without a demonstrated requirement; preserved evidence must identify its governing context.
- **GSI-PRES-03 — Semantic succession.** Changes to interpretation rules shall identify their governing version and preserve the recoverability of historical meaning where preservation is required; no silent retroactive reinterpretation of authoritative inputs is permitted.
- **GSI-CONF-01 — Independent agreement.** Conformance shall test exactness, validity, equivalence, boundary behavior, outcome distinctions and independent agreement.
- **GSI-CONF-02 — Specification precedence.** Conformance and Reference Vectors shall test governed semantics, not create missing rules.

## Internal review disposition

R1 strengthens dependency qualification, context isolation and semantic succession. R2 strengthens AUTH-04 and adds AUTH-07/08 following the targeted constitutional definition assessment. The 25 draft requirements remain subject to constitutional and independent architectural review. No mathematical proof, external review or adoption is claimed.

## Qualification gates

The initial candidate scope is Point, Segment and SCPE; equivalence, containment, intersection, disjointness, boundary contact and World participation. Exact admitted type combinations, mathematical closure, algorithms, result formats and error precedence remain open for qualification. No general Boolean output algebra or exact general distance scalar is assumed. No adoption or upstream extension is authorized by this draft.

## Development structure

Requirements → Specification → Conformance → Reference Vectors. Review and adoption are separate from drafting and technical verification.

## Review basis

- [Responsibility model](../review/GSI_Architectural_Responsibility_Model.md)
- [Minimum ontology](../review/GSI_Minimum_Spatial_Ontology.md)
- [Relationship vocabulary](../review/GSI_Spatial_Relationship_Vocabulary.md)
- [Authority, computation and persistence](../review/GSI_Authority_Computation_Persistence.md)
- [Evaluation contract](../review/GSI_Evaluation_Contract.md)
- [Mathematical dependency assessment](../review/GSI_Mathematical_Dependency_Assessment.md)

Additional review basis: [Constitutional compatibility](../review/GSI_Constitutional_Compatibility_Review.md), [Constitutional clause assessment](../review/GSI_Constitutional_Clause_Assessment.md), and [R1 traceability](../review/GSI_Requirements_R1_Traceability.md). R1 traceability requires reconciliation against R2 before adoption.

Reference first. Interpret above.
