# General Spatial Interpretation — Requirements

**BitPangea · The Atlas**
**Date:** November 26, 2026
**Revision:** R0
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
- **GSI-AUTH-04 — Relationship separation.** Geometric predicates shall not independently establish constitutional Parcel Adjacency or other higher-domain meaning.
- **GSI-AUTH-05 — Capability restraint.** Unsupported upstream capabilities shall not be silently assumed or independently redefined.

## Interpretation and evaluation requirements

- **GSI-EVAL-01 — Explicit scope.** Govern admitted geometry types, operations, input combinations and result semantics.
- **GSI-EVAL-02 — Validity.** Validate inputs and applicable governing context before issuing successful interpretations.
- **GSI-EVAL-03 — Outcome distinction.** Distinguish successful negative results from invalid input, unresolved references, unsupported operations, incompatible context and evaluation failures.
- **GSI-EVAL-04 — Boundary fidelity.** Preserve inherited boundary semantics, including the inclusion of the canonical World limit.
- **GSI-EVAL-05 — Context identification.** Successful interpretations shall identify applicable governing rules and input meanings sufficiently for independent reproduction.

## Preservation and verification requirements

- **GSI-PRES-01 — Derived result discipline.** Computed results, caches and indexes shall not override authoritative inputs or rules.
- **GSI-PRES-02 — Justified persistence.** Do not mandate permanent result storage without a demonstrated requirement; preserved evidence must identify its governing context.
- **GSI-CONF-01 — Independent agreement.** Conformance shall test exactness, validity, equivalence, boundary behavior, outcome distinctions and independent agreement.
- **GSI-CONF-02 — Specification precedence.** Conformance and Reference Vectors shall test governed semantics, not create missing rules.

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

Reference first. Interpret above.
