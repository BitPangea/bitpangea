# General Spatial Interpretation — Architectural Responsibility Model

**BitPangea · The Atlas · General Spatial Interpretation**
**Date:** November 26, 2026
**Status:** Working architectural proposal — not adopted; domain remains provisional

## Purpose

What does a spatial entity mean in relation to established World-space?

GSI supplies shared interpretation above canonical Survey reference and Ground membership, without establishing entity identity or competing spatial truth.

## Responsibility model

| Category | Responsibility |
|---|---|
| Inherit | FSF-SPEC-1.0 exact reference, geometry and supported operations; SG-SPEC-1.0 membership; SG-WORLD-SPACE-INSTANCE-0001 |
| Own | Shared interpretation vocabulary, admissible input contracts, interpretation semantics and result distinctions, subject to subsequent requirements and specification |
| Derive | Supported geometric relations and entity-level membership classifications from authoritative inputs |
| Exclude | Parcel identity and territorial assignment, ownership, rights, governance, runtime state, entity lifecycle and domain-specific meaning |

## Working constraints

1. Interpretation cannot create, remove, relocate or redefine canonical World-space.
2. Valid non-World input is distinct from invalid or unsupported input.
3. Geometric equivalence does not imply entity identity.
4. Entity-level mixed membership is a derived classification, not a third Ground membership value.
5. Approximation, cached results and display representations cannot silently acquire canonical authority.
6. Unsupported operations remain explicitly unsupported; no unrestricted Boolean geometry, composite-result closure or general exact scalar closure is assumed.
7. Shared interpretation may be reused by the Cadastre, but cadastral identity and Parcel-specific constitutional relationships remain under their appropriate authority.
8. Deterministic interpretation requires declared governing versions and authoritative inputs. Persistence and canonical serialization policy remain open.

## Next inquiry

Resolve the minimum spatial ontology, input and output contracts, exact relationship semantics, authority and persistence distinctions, and conformance obligations. Test the model against concave World geometry, boundary contact, mixed membership, equivalent representations, invalid input and unsupported operations. Do not adopt requirements or mathematical rules through this review record.

## Governing sources

- [FSF canonical adoption act](../../foundational-survey-fabric/review/consolidation/FSF_STEP11_INSTITUTIONAL_ADOPTION_2026-10-05/FSF_SPEC_1_0_Canonical_Adoption_Act_2026-10-05.md)
- [Spatial Ground Specification](../../spatial-ground/specification/spatial-ground-specification.md)
- [GSI domain record](../README.md)
- [Parcel Cadastre domain record](../../parcel-cadastre/README.md)
- [Origins Chapter XVI](../../../origins/chapters/16-what-remains-open/README.md)

Reference first. Interpret above.
