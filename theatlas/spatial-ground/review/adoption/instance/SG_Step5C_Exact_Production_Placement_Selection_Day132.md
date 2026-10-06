# Spatial Ground — Step 5C Exact Production Placement Selection

**BitPangea · The Atlas · Spatial Ground**  
**Creator Period:** Day #132 · October 6, 2026  
**Step:** 5C — Select Exact `s`, `tx`, and `ty` Under FSF-SPEC-1.0  
**Status:** COMPLETE — PLACEMENT CONSTANTS SELECTED

---

## 1. Governing Transformation

The permitted production transformation is:

```text
x_FSF = tx + s·x_design
y_FSF = ty + s·y_design
s > 0
```

Step 5C selects:

```text
s  = 900,000 Pang / design unit
tx = 0 Pang
ty = 0 Pang
```

All three values are exact.

Classification:

```text
GOVERNED PRODUCTION PLACEMENT CONSTANTS
```

They are not mathematically inevitable.

---

## 2. Translation Selection

The frozen design cycle is already centered on the canonical origin by its bounding box:

```text
x ∈ [-0.500000,+0.500000]
y ∈ [-0.470049,+0.470049]
```

Therefore:

```text
tx = 0
ty = 0
```

is selected.

This is the minimum-transformation choice.

It preserves the source silhouette's existing center alignment and introduces no arbitrary displacement in Survey space.

The canonical origin remains mathematically privileged only.

This placement does not assign cultural, political, geographic, civilizational, or experiential meaning to `(0,0)`.

---

## 3. Scale Selection

The exact scale is:

```text
s = 900,000
```

The governing production placement envelope is:

```text
P = [-500,000,+500,000]²
```

The source has exact horizontal bounds:

```text
[-1/2,+1/2]
```

so the transformed horizontal bounds become:

```text
[-450,000,+450,000] Pang
```

This leaves an exact minimum horizontal reserve of:

```text
50,000 Pang
```

between the World bounding box and each vertical side of `P`.

The source's exact vertical extrema are:

```text
±470049/1000000
```

which transform to:

```text
±4230441/10 Pang
= ±423,044.1 Pang
```

leaving an exact minimum vertical reserve of:

```text
769559/10 Pang
= 76,955.9 Pang
```

inside `P`.

Therefore strict containment is already provable at the bounding-box level.

---

## 4. Why 900,000

`900,000` is selected because it simultaneously satisfies the production needs without adding unnecessary placement complexity:

- it is an exact positive integer;
- it preserves orientation and proportions;
- it leaves a substantial exact reserve inside the governed placement envelope;
- it avoids the prohibited `s = 1,000,000` edge-touching result, which would place the source's `x = ±0.5` extrema exactly on `±500,000`;
- it avoids an unnecessarily small World placement;
- it is simple to communicate, reproduce, and audit;
- when applied to the six-decimal frozen design coordinates, transformed coordinates require at most one decimal Pang before CRPC reduction;
- no translation is required.

The scale is therefore a governed production placement choice rather than a claim that 900,000 is uniquely derivable from mathematics.

---

## 5. Exact Resulting Bounding Box

The transformed production bounding box is:

```text
xmin = -450000 Pang
xmax = 450000 Pang
ymin = -4230441/10 Pang
ymax = 4230441/10 Pang
```

Decimal display:

```text
xmin = -450,000.0
xmax = 450,000.0
ymin = -423,044.1
ymax = 423,044.1
```

Minimum reserve to production placement envelope:

```text
horizontal = 50000 Pang
vertical   = 769559/10 Pang
```

Minimum reserve to outer Survey Domain:

```text
horizontal = 550000 Pang
vertical   = 5769559/10 Pang
```

---

## 6. FSF-SPEC-1.0 Conformity

The selected transformation satisfies:

```text
s > 0
```

and uses only:

```text
positive uniform scale
translation
```

with:

```text
translation = (0,0)
```

It introduces no:

- nonuniform scaling;
- shear;
- reflection;
- rotation;
- arbitrary deformation;
- warp.

The transformed bounding box satisfies:

```text
World bounding box ⊂ interior([-500,000,+500,000]²)
```

Therefore the exact transformed polygon will also lie strictly within the production placement envelope.

---

## 7. Step 5C Formal Determination

> **The exact production placement constants are selected as `s = 900,000`, `tx = 0`, and `ty = 0`.**

The production transformation is therefore:

```text
x_FSF = 900,000 · x_design
y_FSF = 900,000 · y_design
```

This transformation SHALL be applied to the frozen Step 5B design-space cycle.

---

## 8. Current Standing

```text
5A — COMPLETE
5B — COMPLETE
5C — COMPLETE

s  = 900,000 — SELECTED
tx = 0 — SELECTED
ty = 0 — SELECTED

production placement envelope — SATISFIED IN BOUNDING-BOX PROOF
production CRPC vertex cycle — NOT YET CREATED
canonical World-space instance — NOT YET ADOPTED
```

---

## 9. Recommended Repository Location

```text
/theatlas/spatial-ground/review/adoption/instance/
SG_Step5C_Exact_Production_Placement_Selection_Day132.md
```

---

## 10. Next Action

Proceed to:

> **Step 5D — transform the frozen 128-point cycle into exact CRPC production coordinates.**

---

## Governing Principle

> **Use the simplest exact placement that preserves the silhouette, respects the canonical envelope, and leaves deliberate room without moving the World unnecessarily.**
