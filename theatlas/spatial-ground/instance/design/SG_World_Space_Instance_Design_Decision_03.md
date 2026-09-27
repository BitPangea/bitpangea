# Spatial Ground — World-Space Instance Design Decision 03

**BitPangea · The Atlas · Spatial Ground**  
**Record Type:** Creator Design Decision — Canonical World-Space Instance  
**Creator Period:** Day #122 · September 26, 2026  
**Status:** COMPLETE — CREATOR DESIGN DECISION  
**Subject:** Exact geometry construction method  
**Canonical Status:** Candidate design decision only. The World-space instance is not yet adopted.

---

## 1. Decision

The canonical BitPangea World-space candidate SHALL be constructed as:

> **one finite, simple, closed polygonal FSF region whose ordered boundary vertices are expressed in exact canonical FSF coordinates.**

The selected construction method is named:

> **Finite Exact Boundary Cycle Method — FEBCM**

The canonical region shall be represented by one ordered closed boundary cycle:

```text
V0 → V1 → V2 → … → Vn-1 → V0
```

with:

- finitely many vertices;
- no self-intersection;
- no holes;
- one bounded interior;
- exact FSF coordinates;
- one closed region induced by that cycle.

Spatial Ground will consume that region as one FSF leaf.

---

## 2. Why This Method

FEBCM is selected because it provides the strongest combination of:

- exactness;
- finite expression;
- deterministic reconstruction;
- simple independent implementation;
- straightforward conformance;
- representation stability;
- no dependence on hidden design history;
- no dependence on floating-point approximation;
- compatibility with a single-region Spatial Ground instance.

It also minimizes permanent mathematical machinery.

The World can be visually organic without requiring Ground itself to adopt a complex spline language.

---

## 3. Canonical Geometry Family

The intended production geometry family is:

> **simple closed polygonal region**

and not:

- arbitrary raster masks;
- procedural noise;
- implicit scalar fields;
- fractals;
- image-derived contours;
- hand-drawn paths without exact coordinates;
- runtime-generated geometry;
- database-only shape state;
- proprietary GIS geometry with hidden semantics.

The final Ground region must be exactly reconstructable from the canonical artifact alone, together with the adopted FSF rules.

---

## 4. Exact Vertices

Every boundary vertex SHALL be represented by exact FSF coordinates.

The preferred numeric policy is:

> **canonical rational coordinates under the FSF exact-number model**

if that is supported by the final FSF Specification.

Ground SHALL NOT introduce its own numeric model.

No canonical vertex may depend on:

- binary floating-point tolerance;
- rendering resolution;
- pixel location;
- screen DPI;
- approximate snapping;
- implementation-specific epsilon.

If FSF ultimately uses another exact canonical coordinate representation, that FSF representation governs.

---

## 5. One Ordered Boundary Cycle

The final World boundary SHALL be encoded as one ordered cycle.

The cycle SHALL have:

- a declared canonical traversal direction;
- a unique canonical start vertex under FSF normalization;
- no duplicate consecutive vertices;
- no zero-length edges;
- no self-crossing edges;
- no branching;
- no disconnected cycles.

The recommended canonical traversal direction is:

```text
clockwise
```

unless final FSF normalization requires the opposite orientation.

FSF normalization prevails.

---

## 6. Canonical Start Vertex

The design method SHOULD select a unique normalization rule for the first listed vertex.

Preferred rule:

> **the lexicographically least canonical FSF coordinate in the boundary cycle, after FSF normalization**

with the cycle then traversed in the canonical orientation.

This rule is a candidate normalization strategy only.

If FSF already defines polygon canonicalization, the FSF rule SHALL replace this local recommendation.

Spatial Ground SHALL NOT maintain a competing canonicalization rule.

---

## 7. Closed World-Space

The polygonal region SHALL be interpreted as closed under the governing FSF topology.

Therefore:

```text
boundary point → WORLD
interior point → WORLD
valid Survey point outside region → NON_WORLD
```

This directly satisfies the selected Closed World-Space convention for the actual instance.

---

## 8. Hole-Free Construction

The final canonical region SHALL consist of:

```text
one exterior boundary cycle
zero interior exclusion cycles
```

No Ground-level holes are permitted in the actual instance.

This is a Creator design choice.

The general Spatial Ground architecture may still support other representable set forms.

---

## 9. No Ground-Level Boolean Construction

The final canonical World region SHOULD NOT be expressed as a permanent Ground-level history such as:

```text
union(A, B, C, D)
difference(...)
intersection(...)
```

even if such operations are useful during design.

Instead, the final result of all design work SHALL be reduced to:

```text
one canonical FSF polygonal region
```

and Spatial Ground SHALL reference that one region.

Design history is not World truth.

---

## 10. Candidate Vertex Count

The exact final vertex count is not yet fixed.

The design target SHALL be:

```text
96–160 boundary vertices
```

with the preferred working target:

```text
128 vertices
```

The number 128 is selected for engineering convenience and sufficient silhouette resolution, not for symbolic meaning.

The final count MAY change if silhouette testing demonstrates that fewer or more vertices are preferable.

The adopted instance SHALL record the actual final count.

---

## 11. Vertex Distribution

Vertices SHALL NOT be distributed uniformly merely to satisfy a count.

Higher vertex density SHOULD occur at:

- principal bay entrances;
- principal bay bottoms;
- the narrow connective waist;
- lobe tips;
- strong changes in curvature;
- distinctive concavities;
- silhouette-defining shoulders.

Lower vertex density SHOULD occur along:

- broad gentle arcs;
- visually quiet shoulders;
- long low-curvature edges.

The canonical polygon should spend complexity only where identity requires it.

---

## 12. Macroform Preservation

The polygon SHALL preserve World-Space Instance Design Decision 02:

- one central body;
- four major attached lobes;
- two principal bays;
- one narrow connective waist;
- strong asymmetry;
- compositional balance;
- NW→SE dominant diagonal;
- approximate 1.30:1 overall bounding aspect.

The polygon method does not reopen those choices.

It supplies the exact construction family for realizing them.

---

## 13. Faceting and Visual Organic Form

The canonical Ground boundary may be polygonal while the experienced World appears organic.

This distinction is intentional.

At Ground level:

```text
exact finite edges
```

At higher presentation levels:

```text
visually smoothed / textured / illuminated interpretation
```

Higher-layer smoothing SHALL NOT move the canonical Ground limit.

A rendered coastline may visually soften an edge.

It may not redefine membership.

---

## 14. Why Not Canonical Bézier Curves

Cubic Bézier, spline, and other curve systems were considered and rejected as the primary canonical instance method at this stage.

They can produce elegant organic shapes, but they introduce additional permanent questions concerning:

- exact control-point semantics;
- curve evaluation;
- curve intersection;
- canonical equivalence;
- root solving;
- normalization;
- implementation consistency;
- dependency on final FSF curve primitives.

None of that complexity is necessary to define BitPangea exactly.

Curves may remain design tools and rendering tools.

They do not need to become Ground canon.

---

## 15. Why Not Raster Geometry

Raster or bitmap membership is rejected because canonical truth would depend on:

- resolution;
- sampling;
- grid choice;
- pixel interpretation;
- scale.

A raster may visualize Ground.

It SHALL NOT define Ground.

---

## 16. Why Not Procedural Generation

Procedural generation is rejected as the adopted instance form.

A procedure may help create candidates.

The final World shall not depend on rerunning a generator.

The final polygon itself must be preserved.

This ensures:

> **the result survives even if the design software disappears.**

---

## 17. Design Workspace

The Creator MAY develop the silhouette in a temporary normalized design plane before final Survey placement.

Recommended non-canonical design workspace:

```text
x ∈ [-1, +1]
y ∈ [-1, +1]
```

This coordinate frame is only a construction aid.

It is NOT:

- an FSF coordinate system;
- a second Survey frame;
- canonical Ground;
- an adopted spatial reference.

The final candidate must be translated into exact FSF coordinates before instance validation.

---

## 18. Candidate Construction Sequence

The recommended construction sequence is:

1. establish a normalized bounding box;
2. establish the central-body envelope;
3. place four lobe tip anchors;
4. place the two principal bay mouths;
5. place the two principal bay deepest points;
6. place the narrow-waist opposing anchors;
7. establish major shoulder anchors;
8. connect anchors into one simple closed polygon;
9. add intermediate vertices only where silhouette quality requires them;
10. test for self-intersection;
11. test for connectedness and hole-freedom;
12. test aspect and mass balance;
13. test silhouette at multiple scales;
14. convert final design coordinates into exact canonical FSF coordinates;
15. normalize under FSF;
16. validate independently;
17. package as one FSF region;
18. reference it from SG-CJSON as one `fsf` leaf.

---

## 19. Mandatory Geometry Validation

Before any candidate may proceed toward adoption, the final FSF region SHALL pass:

### Structural

- finite vertex count;
- exact coordinate validity;
- one closed cycle;
- no duplicate consecutive vertices;
- no degenerate edges;
- no self-intersection.

### Topological

- connected;
- closed;
- one bounded interior;
- zero holes.

### Spatial Ground

- total deterministic membership;
- exact boundary inclusion;
- independent reproducibility;
- no hidden state;
- no higher-layer semantics.

### Creator Design

- recognizable silhouette;
- strong asymmetry;
- compositional balance;
- four-lobe readability;
- two-principal-bay readability;
- narrow-waist readability;
- unmistakable one-supercontinent identity.

---

## 20. Independent Reconstruction Requirement

At least two independent implementations SHALL be able to ingest the final FSF region and reproduce identical membership results for:

- interior points;
- exterior points;
- every vertex;
- representative edge-interior points;
- points immediately on each side of selected boundary edges;
- lobe tips;
- bay bottoms;
- waist points.

The production Reference Vector corpus SHALL be expanded accordingly before canonical instance adoption.

---

## 21. Production Reference Vector Expansion

Once the exact polygon exists, the production Reference Vector corpus SHOULD add:

- every canonical vertex;
- one midpoint or exact representative point per boundary edge where FSF permits exact construction;
- samples from each major lobe;
- samples from each principal bay vicinity;
- samples at the narrow waist;
- multiple deep interior points;
- multiple clear exterior points;
- equivalent FSF representations where applicable.

The corpus must test the final instance rather than only the synthetic profile.

---

## 22. Relationship to SG-RV-024

FEBCM further removes the actual instance from the `SG-RV-024` critical path.

The final World-space instance will use:

```text
one closed simple FSF region
```

rather than a Ground-level subtraction construction.

Therefore the actual instance does not require arbitrary set-difference closure semantics.

`SG-RV-024` remains an open language-level interoperability issue and should stay documented until the relevant FSF semantics are formally settled.

---

## 23. FSF Dependency Condition

This design decision assumes that final FSF can provide an exact canonical simple-polygon region or an equivalent exact finite boundary-cycle construct.

If FSF does not yet formally define such a primitive:

> **that is an upstream FSF Specification dependency and must be resolved there before Gate B / instance adoption.**

Spatial Ground SHALL NOT invent polygon geometry semantics to compensate.

This decision selects the instance construction family.

FSF must own its exact spatial meaning.

---

## 24. Primary Instance Shape Artifact

The preferred final shape artifact SHALL consist conceptually of:

```text
FSF Region ID
FSF Specification Identity
FSF Lineage
Ordered Exact Boundary Cycle
Canonical Normalization
Integrity Evidence
```

Spatial Ground then references:

```json
{
  "op": "fsf",
  "value": "<canonical FSF World-region identity>"
}
```

No second geometry authority is created in Ground.

---

## 25. Preservation

The preservation package for the adopted instance SHALL include:

- the canonical FSF region artifact;
- exact canonical serialization;
- cryptographic integrity evidence;
- human-readable rendering of the vertex cycle;
- derived silhouette visualizations;
- validation report;
- production Reference Vectors;
- independent implementation results.

Only the designated primary artifact governs.

Visualizations are derived.

---

## 26. What Is Now Fixed

The following are now fixed as Creator design direction for the candidate instance:

- one finite exact polygonal region;
- one simple closed boundary cycle;
- zero holes;
- exact FSF coordinates;
- no raster canon;
- no procedural canon;
- no canonical spline dependency;
- target of roughly 96–160 vertices;
- working target of 128 vertices;
- complexity concentrated at silhouette-defining features;
- final Ground expression reduced to one FSF region.

---

## 27. What Remains Open

Still open:

- exact final vertex count;
- exact vertex coordinates;
- exact Survey placement;
- exact World area;
- exact bounding dimensions;
- exact waist width;
- exact bay depths;
- exact lobe contours;
- final FSF polygon primitive / syntax;
- final FSF region identifier.

---

## 28. Recommended Next Creator Decision

The next decision SHALL establish:

> **the normalized design-frame anchor scaffold for the actual silhouette.**

That means choosing the first finite set of macro anchors for:

- lobe tips;
- bay mouths;
- bay bottoms;
- waist boundaries;
- central shoulders;
- extreme north / south / east / west points.

That scaffold will be the first step from architectural prose into actual World geometry.

---

## 29. Standing

**EXACT GEOMETRY FAMILY — SELECTED**

**METHOD — FEBCM**

**CANONICAL REGION FAMILY — SIMPLE CLOSED POLYGON**

**COORDINATES — EXACT FSF COORDINATES**

**HOLES — NONE**

**SELF-INTERSECTION — PROHIBITED**

**RASTER CANON — REJECTED**

**PROCEDURAL CANON — REJECTED**

**CANONICAL SPLINE DEPENDENCY — REJECTED**

**WORKING VERTEX TARGET — 128**

**EXACT VERTICES — NEXT PHASE**

**CANONICAL INSTANCE — NOT YET ADOPTED**

---

## 30. Governing Closing Rule

> **The shape may be discovered through iteration, but the adopted World must reduce to something exact: one finite boundary, one closed region, and no dependence on the tool that drew it.**
