# Spatial Ground — Canonical World-Space Instance Adoption Act

**Adoption Act:** `SG-ACT-INSTANCE-2026-0001`  
**Institution:** The Atlas · Spatial Ground  
**Creator Period:** Day #132 · October 6, 2026  
**Adoption Authority:** The Creator, acting through The Atlas during the Creator Period  
**Adoption Target:** `SG-WORLD-SPACE-INSTANCE-0001`  
**Record State:** ADOPTED  
**Effective Status:** CANONICAL WORLD-SPACE INSTANCE ADOPTED

---

## 1. Authority

The Spatial Ground Governance Baseline establishes the Creator, acting through The Atlas during the Creator Period, as the authority competent to adopt the canonical World-space instance.

Evidence, implementation, publication, certification, custody, technical control, popularity, or agreement do not themselves create canonical status.

This Act does.

---

## 2. Adoption Preconditions

The required institutional sequence has been completed:

```text
Spatial Ground Requirements — ADOPTED
Gate A — COMPLETE

FSF-SPEC-1.0 — CANONICALLY ADOPTED

Spatial Ground Specification SG-SPEC-1.0 — ADOPTED
Gate B — COMPLETE

Canonical World-space production sequence:
5A — COMPLETE
5B — COMPLETE
5C — COMPLETE
5D — COMPLETE
5E — COMPLETE
5F — COMPLETE
5G — COMPLETE
5H — COMPLETE
5I — COMPLETE
```

The final production-instance Conformance and reconstruction proof is:

```text
PASS
```

with:

```text
independent implementation A — PASS
independent implementation B — PASS
cross-implementation mismatch — 0
```

No remaining production-instance blocker is identified.

---

## 3. Canonical Instance Identity

The adopted canonical World-space instance is designated:

```text
SG-WORLD-SPACE-INSTANCE-0001
```

This identifier denotes the adopted Spatial Ground instance.

It is distinct from:

- the FSF geometry artifact;
- the FSF production-reference identifier;
- the SG-CJSON serialization;
- the Adoption Act identifier;
- any repository path or storage location.

The identity of canonical World-space is semantic rather than artifact-specific.

---

## 4. Adopted Survey Geometry

The one canonical Survey geometry consumed by the adopted instance is:

```text
FSF production reference:
FSF-WORLD-SCPE-0001

canonical geometry artifact:
SG_World_Production_SCPE_01.fsf-cjson.json

governing Survey Specification:
FSF-SPEC-1.0

canonical Survey serialization:
FSF-CJSON-1.0
```

Canonical FSF-CJSON SHA-256 integrity evidence:

```text
013248a563f979c56bc34c7951cd542eb990e88c486d0bbbe8b2e9500ea54c54
```

The geometry is one valid:

```text
Simple Closed Polygonal Extent (SCPE)
```

with:

```text
connected — TRUE
closed — TRUE
simple — TRUE
hole-free — TRUE
boundary-inclusive — TRUE
normalized traversal — COUNTERCLOCKWISE
vertex count after normalization — 128
```

Its exact production bounding extrema are:

```text
x = [-450,000,+450,000] Pang
y = [-423,044.1,+423,044.1] Pang
```

and it is proven strictly contained within:

```text
[-500,000,+500,000]²
```

with an exact minimum reserve of:

```text
50,000 Pang
```

---

## 5. Adopted Ground Definition

The primary canonical Ground Definition for the adopted instance is:

```text
SG_World_Ground_Definition_01.sg-cjson.json
```

Its canonical SG-CJSON SHA-256 integrity evidence is:

```text
40fd371aa7239495f7c939f4c2b6ae9e50cdbaaa2282fe1b237bfa7bf7df2aca
```

Its production expression is exactly:

```text
one root
op = fsf
value = FSF-WORLD-SCPE-0001
```

There is no Ground-level:

- union;
- intersection;
- difference;
- second independently authoritative geometry;
- synthetic FSF test dependency.

The governing representation is:

```text
SG-CJSON 1.0
```

under:

```text
SG-SPEC-1.0
CMPM-1.0
closed-world-space
```

---

## 6. Canonical Membership Meaning

For every valid canonical Survey location `x`, the adopted Ground Definition determines one exact membership result:

```text
WORLD
or
NON_WORLD
```

Survey invalidity is resolved before World-membership evaluation.

For this adopted instance:

```text
INTERIOR of FSF-WORLD-SCPE-0001 → WORLD
BOUNDARY of FSF-WORLD-SCPE-0001 → WORLD
EXTERIOR within valid Survey space → NON_WORLD
invalid Survey reference → INVALID_INPUT before membership
```

Thus the adopted World-space is the complete closed FSF SCPE:

```text
boundary ∪ interior
```

and no additional Ground region is implied.

---

## 7. Conformance and Reconstruction Evidence

The adoption relies upon the completed production proof:

```text
SG_World_Production_Conformance_Reconstruction_Proof_01.json
```

SHA-256:

```text
aae1afc5697f83a712681c83badde414815a518220971c7d75bf50a5f876eab2
```

The proof demonstrated exact reconstruction from preserved canonical artifacts through two independent implementations.

Observed canonical cases include:

```text
origin                       → WORLD
canonical start vertex       → WORLD
first boundary-edge midpoint → WORLD
(490000,0)                   → NON_WORLD
(0,490000)                   → NON_WORLD
(750000,0)                   → NON_WORLD
(1000001,0)                  → INVALID_INPUT
```

The adopted instance therefore satisfies the reconstruction obligation without dependence on the original design-space source, renderer, operational database, network service, cache, or original implementation.

---

## 8. Layer Boundary

This Act does not transfer Survey authority into Spatial Ground.

The boundary remains:

```text
FSF supplies canonical spatial reference and mathematics.
Spatial Ground adds canonical participation in The World.
```

Accordingly:

```text
FSF-CJSON defines the canonical Survey geometry.
SG-CJSON defines the canonical Ground membership expression.
```

Spatial Ground does not independently own the polygon mathematics.

---

## 9. Canonical Effect of Adoption

Upon execution of this Act:

```text
candidate production World-space
        ↓
ADOPTED CANONICAL WORLD-SPACE
```

The following statement is now authoritative within Spatial Ground:

> **The World exists exactly at the Survey locations classified WORLD by `SG-WORLD-SPACE-INSTANCE-0001` under `SG-SPEC-1.0`, whose sole production expression references `FSF-WORLD-SCPE-0001` under `FSF-SPEC-1.0`.**

No prior candidate, normalized design silhouette, redraw artifact, visual reference, production-preparation record, test fixture, or implementation result is a competing canonical World-space definition.

They remain evidence, lineage, or derived material according to their proper institutional role.

---

## 10. Permanence Effect

Adoption exhausts Creator design authority over the canonical World-space instance.

Spatial Ground contains no dormant architectural authority or ordinary internal mechanism for changing established World-space.

Meaning-preserving representation maintenance may occur only where semantic equivalence is established under the governing Specification.

A change to the foundational World-space meaning is not ordinary maintenance, implementation evolution, correction of presentation, or file replacement.

Any valid foundational revision affecting the adopted World-space must return to the applicable upstream constitutional authority.

This Act does not create such a revision mechanism.

---

## 11. Representation Independence

The adopted spatial truth is not made canonical merely by these filenames, hashes, paths, or storage media.

Those artifacts preserve and prove the adopted meaning.

Accordingly:

```text
repository relocation ≠ World-space change
storage migration ≠ World-space change
lossless equivalent representation ≠ World-space change
implementation replacement ≠ World-space change
```

provided semantic identity remains proven under the governing Specifications.

Conversely, byte reuse or filename reuse cannot legitimize a semantic change.

---

## 12. Formal Adoption

By this Act, the Creator, acting through The Atlas during the Creator Period, hereby adopts:

```text
SG-WORLD-SPACE-INSTANCE-0001
```

as the singular canonical Spatial Ground World-space instance of BitPangea.

The adoption is effective on:

```text
October 6, 2026
Creator Period Day #132
```

Formal disposition:

> **ADOPTED — CANONICAL WORLD-SPACE INSTANCE ESTABLISHED.**

---

## 13. Canonical Standing After This Act

```text
Spatial Ground Requirements — ADOPTED
Gate A — COMPLETE

FSF-SPEC-1.0 — CANONICALLY ADOPTED

SG-SPEC-1.0 — ADOPTED
Gate B — COMPLETE

canonical FSF production geometry — ESTABLISHED
canonical SG-CJSON Ground Definition — ESTABLISHED
production Conformance — PASS
production reconstruction — PASS

SG-WORLD-SPACE-INSTANCE-0001 — ADOPTED
CANONICAL WORLD-SPACE INSTANCE — ESTABLISHED
```

---

## 14. Primary Records

Canonical Ground Definition:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Ground_Definition_01.sg-cjson.json
```

Canonical referenced Survey geometry:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Production_SCPE_01.fsf-cjson.json
```

Production FSF reference:

```text
/theatlas/spatial-ground/instance/production/
FSF_World_SCPE_Production_Reference_0001.json
```

Production Conformance / reconstruction proof:

```text
/theatlas/spatial-ground/instance/production/
SG_World_Production_Conformance_Reconstruction_Proof_01.json
```

This Adoption Act:

```text
/theatlas/spatial-ground/governance/
SG-ACT-INSTANCE-2026-0001.md
```

---

## Governing Closing Statement

> **The World is no longer awaiting spatial selection. Its canonical ground is adopted.**
