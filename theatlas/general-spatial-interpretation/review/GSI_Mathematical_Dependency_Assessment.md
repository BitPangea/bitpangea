# General Spatial Interpretation — Mathematical Dependency Assessment

**Date:** November 26, 2026
**Status:** Preliminary dependency review — not mathematical qualification or adoption

## Findings

The FSF canonical adoption act adopts the exact core predicates and primitive geometry. Specification 05 describes the integrated operations but retains historical candidate wording; the adoption act governs canonical standing. SG-SPEC-1.0 sections 10–16 establish closed production World-space, inclusion of its limit, exact point membership and implementation-independent evaluation.

| Candidate capability | Dependency standing |
|---|---|
| Point World membership | Directly inherited from SG |
| Equivalence and containment | FSF core families; verify exact supported type pairs |
| Intersection and disjointness predicates | FSF exact predicate family; verify cross-type coverage |
| Boundary contact | Candidate derivation using governed boundary and incidence predicates; prove supported combinations |
| Extent World participation | Candidate derivation from containment and intersection with authoritative single-SCPE World geometry; prove coverage and semantics |

For a nonempty valid supported expression A and authoritative World-space W, the proposed classification is wholly World if A is contained in W; wholly non-World if A and W are disjoint; mixed otherwise. This is a set-theoretic proposal, not an adopted algorithm. Its implementation must establish exact containment and intersection for the admitted type pairs, including concavity and boundary-only contact. Vertex-only sampling is insufficient. A contact with the included World limit counts as World participation. No explicit difference geometry is required.

## Reserved capabilities

Do not assume arbitrary Boolean result closure, composite geometry, general exact distance or boundary length scalar closure, arbitrary rotation, or new primitive types. Do not confuse predicate availability with canonical geometry output availability.

## Disposition

No upstream extension is presently demonstrated necessary for the proposed minimum profile. This is conditional, not a proof of complete dependency closure. Verify adopted FMD predicate definitions and supported type matrix before Specification qualification. Any genuine gap must be narrowed, deferred or routed to the responsible upstream domain rather than silently filled by GSI. No constitutional or canonical change is authorized here.

## Sources

- [FSF adoption act](../../foundational-survey-fabric/review/consolidation/FSF_STEP11_INSTITUTIONAL_ADOPTION_2026-10-05/FSF_SPEC_1_0_Canonical_Adoption_Act_2026-10-05.md)
- [FSF Specification 05](../../foundational-survey-fabric/specification/05-operations/README.md)
- [SG Specification](../../spatial-ground/specification/spatial-ground-specification.md)
- [GSI relationship vocabulary](GSI_Spatial_Relationship_Vocabulary.md)
- [GSI evaluation contract](GSI_Evaluation_Contract.md)

Reference first. Interpret above.
