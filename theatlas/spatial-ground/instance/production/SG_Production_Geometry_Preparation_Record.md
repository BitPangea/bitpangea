# Spatial Ground — Production Geometry Preparation Record

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Creator Design / Production Preparation  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — PRODUCTION MAPPING POLICY SELECTED / EXACT FSF PLACEMENT BLOCKED UPSTREAM  
**Source Geometry:** `SG-WORLD-BOUNDARY-CANDIDATE-128-01-REDRAW`  
**Canonical Status:** Non-canonical preparation record. The World-space instance is not yet adopted.

---

## 1. Purpose

This record defines how the preferred normalized BitPangea silhouette will be translated into production Survey geometry **without inventing unresolved Foundational Survey Fabric mathematics**.

The source silhouette is now sufficiently mature.

The remaining task is not to redesign The World.

It is to place the selected shape into the canonical Survey frame once that frame's exact mathematics exist.

---

## 2. Upstream Reality

The Foundational Survey Fabric already establishes that:

- Survey space is finite;
- Survey ground is two-dimensional and planar;
- one permanent canonical origin will exist;
- one global canonical frame will exist;
- one canonical orientation will exist;
- Pang and square Pang are canonical units;
- exact positions, extents, predicates, normalization, and serialization must be supportable.

However, the exact:

- coordinate representation;
- origin placement;
- numerical Domain dimensions;
- Domain boundary geometry;
- coordinate grammar;
- precision mechanism;
- handedness;
- serialization

remain unresolved in the FSF Specification.

Spatial Ground SHALL NOT fill those gaps itself.

---

## 3. Production Mapping Decision

The preferred normalized silhouette SHALL be mapped into Survey space using a single **orientation-preserving uniform affine placement** consisting only of:

1. **uniform positive scale**; and
2. **translation**.

No Ground-level:

- nonuniform scaling;
- shear;
- reflection;
- arbitrary deformation;
- warp;
- local stretching

is permitted during production placement.

Conceptually:

```text
x_FSF = tx + s · x_design
y_FSF = ty + s · y_design
```

where:

```text
s > 0
```

and `tx`, `ty`, and `s` must be exactly representable under the final FSF mathematics.

---

## 4. Why No Canonical Rotation

The redraw already carries the preferred visual-lineage orientation.

The production mapping therefore SHALL NOT introduce a separate canonical rotation unless later required by the final FSF frame.

This avoids making exact Ground identity depend upon:

- unresolved angular units;
- unresolved positive-rotation conventions;
- trigonometric evaluation;
- additional exact-number machinery.

Presentation layers remain free to rotate the World for globe or Atlas viewing.

Ground does not need that rotation.

---

## 5. Why Uniform Scale Only

Uniform scale preserves:

- silhouette;
- relative bay depths;
- neck widths;
- local articulation;
- aspect ratio;
- compositional balance.

Nonuniform scaling would create a second design decision at the moment of Survey placement.

That is unnecessary and prohibited by this record.

---

## 6. Why Translation Is Allowed

Translation is necessary to place the selected region within the eventual finite Survey Domain.

Translation changes coordinate values.

It does not change the shape.

The exact translation cannot be selected until the final Survey Domain and origin are mathematically defined.

---

## 7. No Privileged Center Requirement

The World SHALL NOT be placed at a Survey "center" merely because a center is easy to compute.

FSF explicitly avoids a privileged cultural or semantic center.

Accordingly:

> **Survey placement shall be geometrically sufficient, not symbolically centered.**

The final placement must be justified by containment, margin, exact representability, and future spatial capacity—not by claims of central importance.

---

## 8. Survey-Domain Containment

The final production region SHALL be wholly contained within valid Survey space.

The canonical World boundary SHALL NOT coincide with the Survey Domain boundary merely for convenience.

The production placement SHOULD preserve a nonzero Survey-space margin between the World and the Domain limit in every canonical direction, unless final FSF design establishes a compelling reason otherwise.

This preserves the architectural distinction:

```text
Survey capacity ≠ World membership
```

---

## 9. Margin Policy

The exact margin cannot yet be numerically fixed.

The final placement SHALL nevertheless satisfy:

1. no World boundary point lies outside the Survey Domain;
2. World-space does not require the Survey Domain to equal The World;
3. the Domain has meaningful non-World reference capacity around the World;
4. the margin is exactly representable and testable under FSF;
5. the margin is not interpreted by Ground as ocean, exterior, frontier, void, or any other higher meaning.

---

## 10. Coordinate Conversion

The current redraw coordinates are design-frame values.

They SHALL NOT be copied directly into an adopted FSF artifact merely because they are decimal strings.

Before production:

1. the final FSF exact-number representation must exist;
2. each selected boundary coordinate must be converted into that representation;
3. the conversion must preserve the intended finite polygon exactly;
4. the resulting FSF polygon must be independently reconstructable;
5. no tolerance-based fitting is permitted.

---

## 11. Rationalization Policy

The current redraw candidate contains finite decimal coordinates and is therefore finitely rational as a design artifact.

This is useful, but it does **not** establish the production numeric model.

If final FSF supports exact rational coordinates, the redraw can be mapped exactly by rational scale and translation.

If FSF selects another exact representation, that system governs.

Spatial Ground SHALL not require FSF to adopt rationals merely because the redraw is convenient to express that way.

---

## 12. Source Candidate Properties

The preferred normalized redraw currently records:

```text
Point count:       128
Bounding aspect:   1.063719358:1
Canonical:         false
Source:            established BitPangea visual-lineage silhouette
```

These properties belong to the design candidate.

They do not establish production Survey measurements.

---

## 13. Production Region Identity

A final production FSF region identity SHALL be assigned only after:

- exact FSF coordinate semantics exist;
- exact polygon/extent semantics exist;
- the transformed boundary validates;
- canonical normalization exists;
- exact serialization exists.

Working production identifier:

```text
BP-WORLD-REGION-001
```

is RESERVED as a human-readable design placeholder only.

It is **not** yet a canonical FSF identifier.

---

## 14. Required Production Transformation Record

When FSF mathematics are ready, the production transformation record SHALL state at minimum:

```text
Source silhouette identity
Source silhouette integrity hash
FSF specification identity
FSF lineage
Uniform scale s
Translation tx
Translation ty
Exact transformed vertex set
Canonical polygon normalization
Production FSF region identity
Integrity hash
```

No hidden placement values are permitted.

---

## 15. Required Validation After Mapping

The transformed production region SHALL be tested for:

- exact coordinate validity;
- one closed cycle;
- no self-intersection;
- no holes;
- closed boundary inclusion;
- connectedness;
- exact equivalence to the intended normalized silhouette under the selected transform;
- complete containment within Survey Domain;
- non-coincidence with Domain boundary unless explicitly justified;
- independent implementation agreement.

---

## 16. Production Reference Vectors

After exact FSF placement exists, Spatial Ground Reference Vectors SHALL be extended with production fixtures including:

- canonical vertices;
- edge-interior points;
- interior points;
- exterior-but-valid-Survey points;
- points near principal concavities;
- points around narrow connective regions;
- exact boundary points;
- equivalent FSF references where available.

No such production coordinates will be fabricated before FSF mathematics exist.

---

## 17. Gate Effect

This record resolves the **mapping policy** but not the exact placement.

Therefore:

```text
Production Mapping Policy — COMPLETE
Exact FSF Coordinates — BLOCKED BY FSF
Exact Survey Placement — BLOCKED BY FSF
Final Region Serialization — BLOCKED BY FSF
```

This is an explicit upstream dependency, not a Spatial Ground design failure.

---

## 18. Required Upstream FSF Work Before Instance Adoption

The canonical World-space instance cannot be adopted until FSF formally resolves enough mathematics to support:

1. exact coordinate representation;
2. exact canonical frame;
3. exact origin;
4. exact finite Domain geometry and limits;
5. exact polygonal/extent semantics or equivalent;
6. canonical normalization;
7. exact serialization;
8. deterministic validation.

The existing FSF institutional architecture already places those decisions in the Survey Specification.

They SHALL remain there.

---

## 19. What Spatial Ground Can Continue Doing

While exact FSF placement is blocked, Spatial Ground may still complete:

- instance governance records;
- production validation plan;
- production Reference Vector plan;
- adoption checklist;
- Specification reconciliation;
- Gate B blocker register;
- final silhouette preservation package.

Spatial Ground SHALL NOT invent Survey mathematics merely to make progress appear complete.

---

## 20. Standing

**PREFERRED NORMALIZED SILHOUETTE — SELECTED**

**PRODUCTION TRANSFORM CLASS — SELECTED**

**UNIFORM SCALE — REQUIRED**

**TRANSLATION — PERMITTED**

**NONUNIFORM SCALE — PROHIBITED**

**SHEAR — PROHIBITED**

**REFLECTION — PROHIBITED**

**CANONICAL ROTATION — NOT REQUIRED**

**EXACT FSF PLACEMENT — BLOCKED UPSTREAM**

**PRODUCTION REGION IDENTITY — RESERVED, NOT CANONICAL**

**CANONICAL WORLD-SPACE INSTANCE — NOT YET ADOPTED**

---

## 21. Governing Closing Statement

> **The shape is chosen. Spatial Ground will not invent a coordinate system to place it. When Survey mathematics are ready, BitPangea will enter that frame by one exact scale and one exact translation—without changing the World to fit the map.**
