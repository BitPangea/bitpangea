# Spatial Ground — Step 5F Strict Production-Envelope Containment Proof

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #132 · October 6, 2026  
**Step:** 5F — Prove Strict Containment of the Complete Production SCPE  
**Status:** COMPLETE — PASS

---

## 1. Governing Requirement

Under `FSF-SPEC-1.0` and `SG-SPEC-1.0`, the complete production World-space SCPE must satisfy:

```text
W_D ⊂ interior(P)
```

where:

```text
P = [-500,000,+500,000]²
```

The requirement applies to the complete closed World-space region:

```text
boundary ∪ interior
```

not merely to its vertices.

---

## 2. Proof Source

Normalized production SCPE:

```text
SG_World_Production_SCPE_Normalized_01.json
```

SHA-256:

```text
d0c34bc66d880dad8c6aab05c3461799897524d461055d21c2b1284542e16423
```

The Step 5E validation already established that this object is one valid simple closed hole-free SCPE.

---

## 3. Exact SCPE Extrema

The normalized SCPE has exact extrema:

```text
xmin = -450000 Pang
xmax = 450000 Pang
ymin = -4230441/10 Pang
ymax = 4230441/10 Pang
```

Attaining source vertices:

```text
xmin — V026
xmax — V110
ymin — V080
ymax — V001
```

Therefore:

```text
-500,000 < -450000
450000 < +500,000

-500,000 < -4230441/10
4230441/10 < +500,000
```

Every vertex is strictly inside `P`.

---

## 4. Exact Margin Proof

Exact minimum distances from the SCPE bounding extrema to the four placement-envelope sides are:

```text
left margin   = 50000 Pang
right margin  = 50000 Pang
bottom margin = 769559/10 Pang
top margin    = 769559/10 Pang
```

The minimum exact envelope reserve is therefore:

```text
50000 Pang
```

Every margin is strictly positive.

The limiting sides are the east and west sides at an exact reserve of:

```text
50,000 Pang
```

---

## 5. Boundary-Edge Proof

The interior of an axis-aligned square is convex.

Each SCPE edge is an exact closed Segment joining two vertices that are strictly inside:

```text
interior(P)
```

For any two Points `A` and `B` in a convex set, the complete Segment:

```text
[A,B]
```

also lies inside that set.

Therefore every point on every SCPE boundary Segment lies strictly inside `P`.

This proves:

```text
boundary(W_D) ⊂ interior(P)
```

No edge can cross or touch `x = ±500,000` or `y = ±500,000`.

---

## 6. Interior Proof

The SCPE interior is contained within the convex hull of its boundary vertices.

All boundary vertices lie inside the convex set:

```text
interior(P)
```

Therefore their convex hull also lies inside:

```text
interior(P)
```

Hence every interior Point of the SCPE lies strictly inside the production placement envelope.

This proves:

```text
interior(W_D) ⊂ interior(P)
```

---

## 7. Complete-Region Result

Combining the boundary and interior results:

```text
boundary(W_D) ⊂ interior(P)
interior(W_D) ⊂ interior(P)
```

therefore:

```text
W_D = boundary(W_D) ∪ interior(W_D)
```

satisfies:

```text
W_D ⊂ interior([-500,000,+500,000]²)
```

with an exact minimum reserve of:

```text
50,000 Pang
```

---

## 8. Survey-Domain Relationship

Because:

```text
P = [-500,000,+500,000]²
```

and:

```text
D = [-1,000,000,+1,000,000]²
```

we also have:

```text
interior(P) ⊂ interior(D)
```

Therefore:

```text
W_D ⊂ interior(P) ⊂ interior(D)
```

as required by the adopted FSF / Spatial Ground dependency architecture.

---

## 9. Step 5F Formal Determination

> **The complete normalized production SCPE is proven to lie strictly inside the governed production placement envelope `[-500,000,+500,000]²`.**

Result:

```text
VERTEX CONTAINMENT — PASS
BOUNDARY-SEGMENT CONTAINMENT — PASS
INTERIOR CONTAINMENT — PASS
STRICT PLACEMENT-ENVELOPE CONTAINMENT — PASS
MINIMUM EXACT RESERVE — 50,000 PANG
```

No tolerance, approximation, rendering assumption, or sampled-boundary argument is used.

The proof is exact.

---

## 10. Current Standing

```text
5A — COMPLETE
5B — COMPLETE
5C — COMPLETE
5D — COMPLETE
5E — COMPLETE
5F — COMPLETE

normalized production SCPE — VALID
strict production-envelope containment — PROVEN
minimum exact reserve — 50,000 Pang
canonical FSF-CJSON production artifact — NEXT
canonical World-space instance — NOT YET ADOPTED
```

---

## 11. Recommended Repository Locations

Machine-readable proof:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Production_Placement_Containment_Proof_01.json
```

Step 5F review record:

```text
/theatlas/spatial-ground/review/adoption/instance/
SG_Step5F_Strict_Production_Envelope_Containment_Proof_Day132.md
```

---

## 12. Next Action

Proceed to:

> **Step 5G — serialize the normalized production SCPE as canonical `FSF-CJSON-1.0` geometry.**

---

## Governing Principle

> **Strict containment is a property of the complete World-space region, not merely of a finite list of boundary vertices.**
