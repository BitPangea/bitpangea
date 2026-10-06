# Spatial Ground — Step 5B Exact Design-Space Vertex-Cycle Freeze

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #132 · October 6, 2026  
**Step:** 5B — Freeze the Exact Design-Space Vertex Cycle  
**Status:** COMPLETE — FROZEN DESIGN SOURCE  
**Frozen Artifact:** `SG_World_Space_Design_Cycle_128_FROZEN_01.json`

---

## 1. Authoritative Source

The authoritative source supplied for Step 5B is:

```text
SG_World_Space_Boundary_Candidate_128_01_REDRAW.json
```

Source record identity:

```text
SG-WORLD-BOUNDARY-CANDIDATE-128-01-REDRAW
```

Source SHA-256:

```text
43c187fdaa9bb2484e622babf66053b8d8e881ad6f6c7b01043eabcb23e06b7d
```

This hash identifies the exact uploaded source bytes used for the freeze.

---

## 2. Frozen Cycle

The exact source cycle contains:

```text
point count — 128
first point — V001 (-0.161452, 0.470049)
last point — V128 (-0.104707, 0.465644)
closure — implicit edge V128 -> V001
```

All 128 coordinate strings are preserved verbatim in the frozen JSON artifact.

No point has been:

- redrawn;
- resampled;
- rounded;
- snapped;
- reordered;
- inferred;
- regenerated.

---

## 3. Exact Integrity Checks

The source passes the following freeze checks:

```text
declared point_count = 128 — PASS
actual point count = 128 — PASS
IDs V001 through V128 sequential — PASS
duplicate coordinates — NONE
nonadjacent self-intersections — 0
exact signed orientation — COUNTERCLOCKWISE
```

Exact bounding box derived from the supplied coordinate strings:

```text
xmin = -0.500000
xmax = 0.500000
ymin = -0.470049
ymax = 0.470049
```

Exact shoelace area derived from the supplied decimal coordinate strings:

```text
227126114227/500000000000
≈ 0.454252228454 square design units
```

---

## 4. Diagnostic-Metadata Reconciliation

The source file carries historical diagnostic metadata:

```text
bounding_aspect = 1.063719358
diagnostic_area = 0.454252386
```

Recomputation from the exact coordinate strings gives:

```text
bounding aspect ≈ 1.063718888882
shoelace area   ≈ 0.454252228454
```

The small differences show that the source's `bounding_aspect` and `diagnostic_area` fields are approximate historical diagnostics rather than exact invariants of the supplied six-decimal vertex strings.

Accordingly:

> **The 128 coordinate strings and their exact order govern the frozen design cycle. Diagnostic metadata is preserved for provenance but does not override exact recomputation from the vertices.**

This is not a defect in the frozen cycle.

It is a metadata-precision distinction.

---

## 5. Canonical Standing

The frozen artifact is **not yet canonical World-space**.

Its standing is:

```text
design-space source — FROZEN
visual lineage — PRESERVED
vertex order — FROZEN
coordinate lexemes — FROZEN
FSF production placement — NOT YET APPLIED
CRPC production coordinates — NOT YET CREATED
canonical World-space instance — NOT YET ADOPTED
```

The purpose of this freeze is to ensure that every later transformation starts from exactly the same source cycle.

---

## 6. Step 5B Formal Determination

> **The exact 128-point design-space vertex cycle is frozen from the authoritative redraw JSON source.**

The permanent production transformation SHALL use:

```text
SG_World_Space_Design_Cycle_128_FROZEN_01.json
```

as its design-space source.

No later production step may silently alter, replace, reorder, simplify, or redraw this cycle before the governed FSF transformation.

---

## 7. Recommended Repository Locations

Frozen design source:

```text
/theatlas/spatial-ground/instance/design/frozen/
SG_World_Space_Design_Cycle_128_FROZEN_01.json
```

Step 5B adoption-review record:

```text
/theatlas/spatial-ground/review/adoption/instance/
SG_Step5B_Exact_Design_Space_Vertex_Cycle_Freeze_Day132.md
```

The original redraw candidate remains preserved in:

```text
/theatlas/spatial-ground/instance/design/
SG_World_Space_Boundary_Candidate_128_01_REDRAW.json
```

---

## 8. Next Action

Proceed to:

> **Step 5C — select exact `s`, `tx`, and `ty` under FSF-SPEC-1.0.**

---

## Governing Principle

> **Freeze the source exactly once. Transform from the frozen cycle; never redesign through the production pipeline.**
