# Spatial Ground Architectural Resolution — Pass #2: Layer Ownership

**Basis:** the 2,100 classified Spatial Ground Creator Findings (#1–#2100), the Corpus-Level Classification Report, and Architectural Resolution Pass #1 (Spatial Meaning), which is treated here as an adopted input. The primary text of every Finding cited below was re-read before writing.

**Status:** recommended architectural resolutions for nine ownership questions. No Requirements are drafted, no formal model is chosen, no higher layer is designed, and nothing is renumbered. Pass #1 is not reopened; no contradiction with it was found. Institutional authority questions are left to Pass #3.

**Evidence tags:** **[direct]** the Finding says it; **[derived]** it follows from cited Findings; **[upstream]** authority lies outside Ground; **[inference]** architectural reasoning from the corpus where no Finding decides. Repetition is not counted as proof.

---

## Executive Recommendation

Spatial Ground owns one thing: **World-membership meaning.** Everything else it touches is inherited, expressed on behalf of an upstream authority, derived, or handed upward unchanged.

- **Owns.** The adopted determination of which canonical Survey space is World-space; its relational complement (non-World-space); the inclusion rule at the limit; the limit itself as a consequence of membership; a closed two-valued membership vocabulary; and the formal rules needed to express, validate and compare Ground definitions. None of this is spatial mathematics.
- **Inherits from the Foundational Survey Fabric.** The Survey Domain, reference and its validity and equality, coordinates, geometry, topology, measure, scale, precision, refinement, adjacency, and translation across Survey versions. Ground references these and never restates them. The exception clause in #1276 is unnecessary and should be struck.
- **Expresses for constitutional sources.** One World, the existence of The World (non-emptiness), continuity (connectedness) and Extent. These are binding on Ground and are not Ground's own truths. #21 and #22 therefore cease to be Primitive Requirement Candidates and become *expressed constitutional constraints*, with their obligations intact.
- **Hands upward.** A complete, exact, stable, singular, deterministic membership answer for every valid Survey location, permanently tied to Survey reference, with a determinate limit and the expressed constraints. It guarantees nothing about parcels, ownership, suitability, regions, terrain, form or meaning. #55 is rejected.
- **Never owns.** Extent classification (derived from membership plus FSF operations), visual form, any higher boundary, any eligibility rule, and any cross-layer placement principle. The last group belongs in a shared architectural charter.

The boundary between FSF and Ground has a one-line test, taken from #1009: **FSF owns every question whose answer would be the same if there were no World. Ground owns the one question that needs a World: does this space participate?**

Two thin Requirements-level hooks are needed for Conformance, both constraints on the definition and not on World-space: that the validity of a purported Ground definition is decidable, and that, where more than one expression is permitted, their equivalence is decidable.

Spatial Ground remains justified as a distinct layer. Membership cannot move down without making the Survey Fabric World-aware, and cannot move up without forcing interpretation to invent the thing it interprets (#1247).

---

## Decision 1 — Ground-Native Content (#1276 / #1321 / #1932)

### Recommendation

**A. Is Ground-native content exactly World-membership and nothing else?** Yes. Ground-native content is the meaning "this Survey space participates in The World," together with what follows from it directly: the relational complement (#1071), the inclusion rule at the limit (#16), the limit as consequence (#17), the closed vocabulary (#2063), and the adopted definition instance that fixes all of these.

**B. Does Ground require mathematics of its own?** No. It requires *formal rules*: the form a membership condition may take, the conditions under which a purported definition is valid, and the conditions under which two definitions are equivalent. These are rules about Ground expressions. They are not spatial mathematics.

**C. Is "Ground-native mathematics" a real category?** No. It names membership logic built over FSF mathematics. The Ground-native class of #1627 should be understood as *Ground-native semantics and formal rules*. #1321's own list (membership, canonical limits, equivalence, validation) confirms this: every item on it is membership logic, and none is a spatial operation.

**D. #1932's "relational semantics."** The phrase identifies nothing legitimate and distinct. The only relation Ground establishes is the relation between Survey space and The World, which is membership itself (#2, #574). Relations *between locations* (adjacency, contiguity, connectivity as mathematics) are FSF's (#12, #1938), and Adjacency and Contiguity as named concepts are The Codex's (#289). The phrase should be rejected as unexplained scope expansion and #1932 reworded to say membership.

**E. Is #1276's "unless strictly necessary" needed?** No. It should be struck. If the Survey Fabric cannot express something Ground needs, the remedy lies in the Survey Fabric or in shared architecture, never in Ground. #165 says so directly: Ground "must not compensate for deficiencies by inventing parallel spatial machinery."

**F. How should #1321 survive?** Revised, as a bound on Ground's formal rules: any rule Ground states for itself is limited to expressing membership, the inclusion rule at the limit, equivalence of Ground expressions and validity, and is stated in FSF terms. Merge into #1319.

**The five kinds, distinguished.**

| Kind | Owner | Examples | Normative in Ground? |
|---|---|---|---|
| Survey mathematics | FSF | coordinate frame, origin, direction, handedness, measure, scale, geometry, topology, spatial operations, precision, refinement, reference validity and equality | Inherited by reference, never restated |
| Membership semantics | Ground | what "participates in The World" means; two-valued; the inclusion rule at the limit; the adopted definition | Yes, Ground-native |
| Formal rules for expressing membership | Ground | permitted form of a membership condition; validity of a Ground expression; equivalence between Ground expressions; refinement-closure; closed vocabulary | Yes, Ground-native, and not spatial mathematics. General logic is adopted explicitly (#355), not owned |
| Geometry that expresses a membership result | Mathematics: FSF. Selection of *which* geometry is World: Ground | any exact geometric expression of World-space (#25) | The selection is Ground-native; the geometric type is Survey-derived |
| Implementation mathematics | Implementations | indexes, tolerances, floating point, acceleration structures, library behavior | Never (#357, #1995, #1727) |

**The boundary rule.** A concept that is "purely mathematical reference independent of World membership" belongs to FSF (#1009). A concept belongs to Ground only if it cannot be stated without asking whether space participates in The World.

### Strongest Evidence
- **#12 [direct, retained]:** Ground "must reference the canonical coordinate frame, measurement system, geometry, topology, precision model, and spatial operations established by the Foundational Survey Fabric. It must not redefine or duplicate them." No exception is given. Topology and spatial operations are named.
- **#24 [direct]:** FSF "remains authoritative for spatial mathematics; Spatial Ground remains authoritative for World participation."
- **#25 [direct, retained]:** geometry belongs in Ground "only insofar as it expresses canonical membership."
- **#47 [direct]:** no second coordinate system, origin, orientation, scale or measurement framework.
- **#165 [direct]:** Ground "must not compensate for deficiencies by inventing parallel spatial machinery." This answers #1276's exception on its own terms.
- **#576, #1320 [direct]:** inherited mathematics is referenced, never copied in "as a second canonical source."
- **#1588 [direct]:** "Depending on the Survey Fabric for canonical mathematics is correct architecture."
- **#2048, #2044 [direct]:** scale and measure are inherited exactly.
- **#1931, #1933 [direct]:** what Ground adds to a coordinate or to geometry is "the additional Ground truth that those positions participate in The World."
- **#2046 [direct]:** among coordinates, lengths, areas and "dimensionless classifications," only the last is Ground's.
- **#1009 [direct]:** the downward placement test.
- **#1278, #2050 [derived survivors]:** Ground adds the membership dimension and holds no universe of its own.
- **Pass #1, Decision 5 [adopted]:** Ground canonically expresses membership.

### Contrary Evidence / Tension
- **#1319** allows mathematics "explicitly specified within Ground." **#1321** allows "mathematics introduced specifically by Ground." **#2042** speaks of "Ground mathematics." None names any such mathematics, and in 2,100 Findings none is ever identified. The wording is best read as loose use of "mathematics" for formal rules.
- **#1276** carries the exception. It is a model-selection criterion (methodological), is weaker than its own parent #12, and is contradicted by #165.
- **A genuine edge case [inference]:** the inclusion rule at the limit looks mathematical, since whether a set contains its limit points is a topological notion. The notion is FSF's. The *choice* of which convention applies to World-space is a statement about membership, and is Ground's. The same split applies to connectedness (Decision 2).

### Architectural Consequences
- The Ground-native class of #1627 is populated: membership semantics, the adopted definition, the inclusion rule, the closed vocabulary, and the formal rules for validity and equivalence. Nothing else.
- Mathematical closure (#1319) holds with one source of mathematics, FSF, plus Ground's formal rules.
- If FSF lacks something Ground needs (for example a topology adequate to state connectedness), that is a gap for FSF or shared architecture (#265). Ground records it as a failed dependency assumption (Decision 4) and does not patch it.
- The glossary should retire "Ground mathematics."

### Findings Affected
- **Retain:** #12, #24, #25, #47, #1009, #1278, #1588, #1627, #1931, #1933, #2046, #2050.
- **Revise:** #1276 (strike the exception), #1319 and #1321 ("mathematics" becomes "formal rules"), #1932 (replace "relational semantics" with membership), #2042 ("Ground mathematics" becomes "Ground's formal rules").
- **Merge:** #576, #1320, #1911, #2044, #2048 and the revised #1276 into #12; #1321 into #1319; #1932 into #574 with #1931.
- **Reject / Supersede:** "Ground-native mathematics" as a category; #1276's exception clause; #1932's phrase.

### Resolution Status
**RESOLVE.**

---

## Decision 2 — One World and Connectedness (#21 / #22)

### Recommendation

Both truths are upstream. Both obligations remain binding. Neither Finding should remain a Primitive Requirement Candidate. Their role in the eventual Requirements is taken by a distinct class: **constitutional constraints that Ground expresses.** Non-emptiness (Pass #1, Decision 3A) and Extent (#93) belong to the same class.

**#21 — One World.**
1. *Ground-originated?* No.
2. *Upstream?* Yes. The singularity of The World belongs to The Declaration.
3. *What Ground must do with it.* Express it as exactly one canonical World-space; permit no parallel, alternate or competing canonical World-space; make the one canonical instance identifiable. The part of #21 that is Ground's own is already carried by #8 (one canonical membership truth), which concerns the definition and remains primitive.
4. *Remain primitive?* No.
5. *Replacement.* An expressed constitutional constraint, traced to its source (#291), with #8 as the Ground-originated obligation beside it.

**#22 — Connectedness.**
1. *Ground-originated?* No, on the corpus's testimony.
2. *Upstream?* Yes, with lower confidence than for #21. The corpus calls continuity "constitutionally required" and never cites the source document.
3. *What Ground must do with it.* Express it as a validity condition of the canonical instance; hold it as a refinement-stable property of the definition (Pass #1); evaluate it from the Ground definition and from nothing above (#825).
4. *Remain primitive?* No.
5. *Replacement.* An expressed constitutional constraint. **Proviso:** if review of the constitutional sources finds no requirement of continuity, #22 does not lapse silently. It must then either be justified as a Ground-originated primitive or be removed under #415, by an explicit decision.

**Three roles, kept apart.**

| | Source of truth | Mathematical predicate | Architectural expression | Conformance responsibility |
|---|---|---|---|---|
| One World | The Declaration (#92, #288) | none needed | Ground: one canonical instance, no rivals (#21, #8, #554, #2075, #1270) | Ground's framework: invariant #878; one production instance |
| Connectedness | Constitutional continuity (#829, #1235); source document unverified | FSF topology (#12) | Ground: validity condition of the canonical instance; refinement-stable | Ground's framework: a global test (#821), evaluated from the Ground definition (#825) |

### Strongest Evidence
- **#92 [direct, upstream]:** "Spatial Ground does not create the singularity of The World. It operates within the already-established truth that BitPangea possesses one World."
- **#288 [direct, upstream]:** "Architectural formalization of One World must not supersede the foundational truth recognized by The Declaration."
- **#91, #94 [direct]:** Ground gives architectural expression to constitutional truth and does not originate it.
- **#829 [direct, upstream]:** Ground preserves "constitutionally required World continuity."
- **#1235 [direct]:** "the canonical continuity required of World-space," shown "without borrowing cadastral or visual continuity from higher layers."
- **#12 [direct]:** topology is FSF's.
- **#825, #821 [direct]:** connectedness is evaluated from the Ground definition, as a global check.
- **#8 [direct, primitive]:** the Ground-originated half of #21.
- **#290 [direct]:** Ground "should embody relevant constitutional truths as architectural constraints while leaving their constitutional authority in the institutions that established them."
- **The second discipline of the audit [adopted instruction]:** a Finding is not primitive merely because Ground must faithfully express an upstream truth.

### Contrary Evidence / Tension
- **#21 and #22 are written as Ground obligations** ("Spatial Ground must preserve…") and were classed primitive in Batch 1, both at MEDIUM, with the upstream caveat already recorded.
- **#825 is conditional:** "*Where* World-space connectedness is a canonical requirement."
- **The corpus's own invariant list (#875–#883) includes one-World coherence (#878) and omits connectedness.** That omission is unexplained and weakens #22 relative to #21.
- **No Finding identifies which constitutional document requires continuity.** The constitutional documents were not available to this review.

### Architectural Consequences
- The primitive count falls from 19 to 17. No obligation is lost.
- The eventual Requirements need a section for expressed constitutional constraints: One World, existence (non-emptiness), continuity (connectedness), and Extent. Each is stated as "Ground expresses X and permits no canonical instance that violates X," with its source cited (#291, #1381).
- A canonical instance that violates an expressed constraint is invalid as canon. Ground enforces this on derivative authority, as in Pass #1, Decision 3A.
- The invariant list should be revised to include connectedness and non-emptiness, or the omission justified.
- This does not make Ground the owner of the truths, and creates no duplicated responsibility (#264): source, predicate and expression are three different responsibilities with three different owners.

### Findings Affected
- **Retain:** #8, #91, #92, #94, #288, #290, #291, #825, #829.
- **Revise:** #21 and #22 (restate as expression of upstream truth), #875–#883 (add connectedness and non-emptiness).
- **Merge:** #824, #878, #1234 and #2096 under #21; #1235 under #22.
- **Reclassify:** #21 and #22 from Primitive Requirement Candidate to expressed constitutional constraint.

### Resolution Status
**RESOLVE**, with the source of continuity to be verified against the constitutional documents.

---

## Decision 3 — Point vs Extent Semantics

### Recommendation

**B, with a stated irreducible minimum.** Ground is authoritative for the membership of *locations*. Outcomes for *extents* are derived, above or beside Ground, from Ground membership together with FSF geometry and operations. Extent classification is not part of Ground's authoritative contract.

**A. Is extent classification part of Ground's contract?** No. By the corpus's own removal test (#1007), removing extent classification "leaves exact canonical World-space fully intact," and by #1895 a responsibility belongs in Ground "only if higher placement would leave World-space incomplete." It would not.

**C. The irreducible minimum in Ground.** Three guarantees, all consequences of what Ground already owns:
1. *One source.* Every extent outcome is exactly derivable from the one canonical definition; no second spatial truth is introduced (#1114, #1172).
2. *Determinacy at the limit.* Because the inclusion rule at the limit is Ground's (#16), the outcome for an extent that touches the limit is determinate and not implementation-dependent (#1176).
3. *Closed vocabulary.* "Mixed" or "partly World-space" is a derived fact about an extent and never a membership state (#1169, #2063).

**D. Ownership.**

| Concept | Owner |
|---|---|
| Overlap, containment, intersection between extents | FSF, as spatial operations (#12) |
| Touching versus crossing | FSF, if its model draws the distinction (#1177) |
| Which locations in an extent are World-space | Ground |
| "Fully World," "partly World," "fully non-World," coverage fraction | No primitive owner. Derived by whoever needs it, from the two rows above. Never stored as canon (#1170, #1171) |
| Whether a given Survey reference denotes a location or an extent | FSF |

**E. How #1169 survives.** Retained as survivor wording and merged with #2063: a mixed area is a derived fact about an extent and never a third membership state for an exact location.

**F. Coarse references during refinement.** The membership domain is the set of valid Survey references that FSF designates as locations (#1081). Two cases follow, and the corpus cannot say which holds because it depends on the Survey Fabric's own model.
- If a coarse reference is an *extent*, its outcome is a derived extent outcome and may be mixed. Finer evaluation is then a first evaluation of locations the coarse reference grouped together. No membership changes (Pass #1, Decision 2).
- If FSF treats references at every precision as *locations*, then #15 requires a two-valued answer for each, and #246 requires finer answers to agree with coarser ones. Both can hold only if no location-reference straddles the limit. **[inference]** That is a constraint the adopted definition would have to satisfy. It is recorded here as a consequence, not as a model choice.

### Strongest Evidence
- **#15 [direct, primitive]:** membership is resolvable "for every valid representable Survey location."
- **#1081 [direct]:** the Specification identifies "exactly which canonical Survey references are meaningful inputs to the World-membership relation."
- **#1114 [direct]:** "Any higher-level area classification must derive from the same canonical World-space definition rather than introduce a second spatial truth."
- **#1113 [direct]:** the four-way area outcome is framed for "where higher systems query areas," and "as appropriate."
- **#1170, #1171 [direct]:** mixed coverage is derived and never a canonical category.
- **#57 [direct]:** relationships that follow from "canonical World-space membership and Survey mathematics should be derived whenever practical."
- **#1111 [direct]:** point and extent semantics are each defined "where both are supported."
- **#1169, #2063 [derived survivors].**
- **#1007, #1895 [direct]:** the removal test and "lowest does not mean deepest possible."
- **#12 [direct]:** spatial operations are FSF's.

### Contrary Evidence / Tension
- **#1115 and #1176** are phrased as Ground obligations ("Spatial Ground must preserve exact intersection semantics"). Their content is met by guarantee 2 above; the intersection mathematics itself is FSF's.
- **#1175** speaks of "arbitrarily small supported extents" as "classifiable," which could be read as Ground classifying extents. It is satisfied by derivation.
- **#265 (no orphaned responsibility)** presses the question of where the derived vocabulary is written down. See below.

### Architectural Consequences
- Ground's upward contract is stated for locations. Consumers derive extent outcomes and, because derivation is deterministic from one definition and FSF operations, all consumers obtain the same answers (#8).
- To avoid an orphan (#265), the derived vocabulary of #1113 should be written once. It may appear in the Ground Specification as *derived, non-primitive definitions*, or in shared architecture. Either way it carries no authority of its own. Which document holds it is left open.
- The three-tier outcome model (#1081–#1083) is unchanged: invalid reference; World or non-World; operational response.
- Nothing here assumes Survey space is continuous. #1126 and #1198 use the word; whether it applies is FSF's to say.

### Findings Affected
- **Retain:** #15, #1081, #1114, #1169, #2063.
- **Revise:** #1111, #1113, #1115, #1175, #1176 (restate as derivability and determinacy guarantees, not as Ground classification of extents), #246 (coarse statements about extents are not contradicted by finer results).
- **Merge:** #1112, #1170–#1174, #1177, #1814, #1815 under #1114 and #1169.
- **Reclassify:** #1113 from Specification Candidate to derived definitions.

### Resolution Status
**RESOLVE**, with one FSF fact outstanding (location or extent semantics of coarse references).

---

## Decision 4 — Downward Contract to FSF

### Recommendation

The contract is stated from Ground's side in four parts: what Ground consumes, what Ground assumes, what Ground undertakes, and what Ground never does. Where Ground relies on a guarantee only FSF can give, it is recorded as a **dependency assumption** held in a shared architectural contract. Ground writes no requirements for FSF.

**Part I — What Ground consumes (inherited by reference, never restated).**
- The finite Survey Domain and its limit (#163, #1152).
- Canonical Survey reference, and FSF's determination of reference validity (#159, #583).
- Reference identity: equality, aliasing and normalization of references (#1105–#1110, #1810).
- Coordinate frame, origin, direction, handedness (#47, #166–#169).
- Measure, units and scale (#166, #2044, #2048).
- Geometry, topology and spatial operations (#12, #24).
- The precision model and refinement (#11, #1193–#1195).
- Adjacency between Survey references, where needed (#832, #1938).
- Whether a reference denotes a location or an extent (Decision 3).
- Translation of references across Survey versions (#1495).

**Part II — What Ground assumes (dependency assumptions, not requirements on FSF).**
- *DA1 Sufficiency.* FSF can express all the Survey space the adopted definition needs (#165, first clause).
- *DA2 Reference stability.* Across a compatible lineage, a valid reference continues to denote the same place (#73, #244).
- *DA3 Determinate equality.* Whether two valid references denote the same place is exactly determinable (#1810).
- *DA4 Refinement compatibility.* Deeper refinement proceeds "under compatible rules," consistent with coarser reference (#1189, #244).
- *DA5 Location and extent semantics are defined* (Decision 3).
- *DA6 Topology adequate to state connectedness* (Decision 2).
- *DA7 Finitude of the Domain* (#163).

If an assumption fails, the failure is raised as a shared-architecture matter. Ground does not compensate (#165, second clause; #265).

**Part III — What Ground undertakes.**
- To add membership meaning and leave every Survey fact unchanged (#1103, #1278).
- To give the same membership answer for references FSF holds equal (#1105, #1109).
- To assign membership to no reference that is invalid under FSF (#159).
- To make no distinction finer than FSF can represent, and to depend on no particular contemporary precision (#1192–#1195).
- To keep its definition refinement-closed (Pass #1).
- To enumerate the precise lower-layer truths it consumes, and no more (#1634, #1626), depending on canonical Survey outputs and semantics and never on one implementation's internals (#1636).
- To state which Survey specification or compatible lineage it is bound to (#1382, #1628), pinning meaning and not a software release (#1630).
- To require verification before a successor Survey implementation is relied on (#1632, #1633).

**Part IV — What Ground never does.** Redefine, duplicate, rescale, re-originate or reinterpret anything in Part I (#12, #47, #576, #1320); define Survey validity (#583); define reference equality; define compatibility between Survey versions; patch an FSF deficiency with machinery of its own (#165).

**Answers to the ten questions.**
1. *Truths and services inherited:* Part I.
2. *A valid Survey reference, from Ground's perspective,* is whatever FSF holds valid. Ground may require evidence of validity and does not redefine it (#583). The membership domain is the subset of valid references that denote locations (#1081). For an invalid reference there is no membership answer at all (#159, #1081–#1083).
3. *Reference equality, aliasing, normalization:* FSF. Ground owns only the equivalence of *Ground expressions* (#65) and the duty to answer consistently across FSF-equal references.
4. *Precision and refinement:* FSF. Ground's share is refinement-closure and the bounds of #1192–#1195.
5. *Adjacency:* mathematical adjacency of references is FSF's (#12, #832). Adjacency and Contiguity as named constitutional concepts are The Codex's (#289). Ground owns neither (#1938).
6. *Coordinate translation across version history:* FSF (#1495). Ground's share is that membership is invariant under FSF-certified translation (#73, #1490).
7. *"Compatible lineage":* architecturally, a succession of Survey specifications under which every truth Ground consumes keeps its meaning, so that Ground's definition evaluates identically. **Ground may not define compatibility between Survey versions.** Ground may, and must, declare its dependency surface and the lineage it is bound to, and treat any lineage that preserves that surface as acceptable. FSF asserts compatibility; Ground declares what it relies on; verification is a Conformance matter (#1632).
8. *#165:* an architectural dependency assumption (DA1), not a Ground requirement on FSF. See Decision 7A.
9. *Duplication for self-containment:* never as authority (#576, #1320). Preservation may *carry* the Survey specification as a preserved dependency (#1353, #1585, #2100). A carried copy is FSF's text under FSF's authority. A restatement in Ground's voice is forbidden.
10. *What must be preserved if FSF evolves:* the identity of the Survey specification and lineage bound (#1382, #390); the enumerated dependency surface (#1634); the inherited Survey specification itself, or a durable reference to it (#1585); FSF's translation records for references (#1495); the recovery order, Survey first (#1711); and evidence that successor implementations were verified (#1632).

### Strongest Evidence
- **#12 [direct, retained]**, **#24, #47, #166–#169, #2044, #2048 [direct].**
- **#159, #583 [direct]:** validity is FSF's; Ground "should not independently redefine Survey validity rules."
- **#1101, #1103 [direct]:** addressability is Survey's and is unaltered by inclusion.
- **#1193–#1195 [direct]:** Ground's precision is bounded by FSF's.
- **#1634, #1636, #1630 [direct]:** a narrow, semantic, meaning-pinned dependency.
- **#1628, #1382 [direct]:** the lineage is explicit.
- **#1585, #1588, #1711 [direct / survivors].**
- **#165 [direct]:** second clause.
- **#734 [derived survivor]:** depend downward on exact Survey reference, nothing bidirectional.

### Contrary Evidence / Tension
- **#1105–#1110 and #1810** are phrased as Ground obligations about aliasing, normalization and place equality. Their subject is FSF's. Ground's share is consistency of answers, and they should be restated accordingly.
- **#165, first clause,** is phrased as a requirement on FSF (Decision 7A).
- **#1126, #1198** presume continuity, which is FSF's to affirm or deny.
- **#1382's "compatible lineage"** is used without definition anywhere in the corpus. The definition offered above is an architectural inference.
- **The Survey Fabric's own specification was not available to this review.** Every statement above about what FSF provides rests on the corpus's description of it.

### Architectural Consequences
- The Ground and Survey version histories are coupled through a declared lineage. #392 (compatibility must be explicit) therefore applies across the layer boundary as well as within Ground.
- Dependency assumptions DA1–DA7 need a home outside Ground's Requirements (Decision 8).
- Ground's reconstruction-completeness (#1585) depends on preserving something Ground does not own. Preservation must carry or durably reference it.

### Findings Affected
- **Retain:** #12, #46, #159, #244, #734, #1585, #1588, #1634, #1711.
- **Revise:** #1105–#1110, #1810 (restate as Ground's consistency duty over FSF-owned reference identity); #1382, #1628 (adopt the architectural meaning of "compatible lineage"); #1126, #1198 (remove the presumption of continuity).
- **Merge:** #166–#169, #2044, #2048 into #12 and #47; #1629–#1633, #1636, #1637 under #1634.
- **Move to Shared Architecture:** DA1–DA7 as a shared FSF–Ground contract; #165, first clause.

### Resolution Status
**RESOLVE**, subject to confirmation of DA2–DA6 against the Survey Fabric's own specification.

---

## Decision 5 — Upward Contract

### Recommendation

The contract states what Ground supplies and what cannot alter Ground. It prescribes nothing about how any higher layer is built.

**A and B. What every higher layer may safely assume.**
- *G1 Exact, two-valued, deterministic.* For every valid Survey location, exactly one canonical answer, World-space or non-World-space, decidable in finite computation (#15, #1339, #152).
- *G2 Complete before interpretation.* The answer exists for every location in the Domain before any higher layer begins, so no consumer needs to infer or invent membership (#54).
- *G3 Stable.* The answer does not change because of anything above Ground, because of refinement, or because of any change of representation (#4, #737, #29, Pass #1).
- *G4 Singular.* One membership truth for all consumers, however many interpretations coexist (#8, #183).
- *G5 Tied to Survey reference.* World-space is Survey space, addressed by unaltered Survey references (#46, #1103, #737).
- *G6 A determinate limit.* Inclusion at the limit is determinate for every location; the limit arises from the definition and can be referred to distinctly (Decision 6).
- *G7 The expressed constraints hold.* One World-space, non-empty, connected (Decision 2).
- *G8 A semantic interface.* Consumers depend on World-space meaning, never on Ground's internal representation (#1406).

**C. What Ground does not guarantee.** Parcelization, parcel coverage, ownability, suitability for settlement or construction, legal status, Regions, Clusters, visual form, terrain, traversability, accessibility, social, cultural or economic meaning, any ranking among locations, any meaning for non-World-space, or any particular shape or topology beyond connectedness (#738, #35, #98, #1155–#1160, #1850, #1856, #1858, #1943, #1944).

**What cannot alter Ground.** Nothing above Ground can add, remove, relocate or redefine membership (#23, #56). Higher layers may use Survey mathematics directly for computation; doing so confers no authority over membership (#173). A deficiency in Ground discovered from above returns to Ground by the governed route and is not patched locally (#427, #428, #267, #1891).

**D. #55 should be rejected.** It prescribes what higher layers may interpret, which is designing the layer above from below, and its own exception clause shows it is not a firm rule. Its legitimate residue (interpretation cannot confer World status) is already carried by #56 and #23. Merge the residue there.

**E. Is #174's phrase fully defined by #737?** Nearly. #737 supplies four conditions: exact, stable, deterministically resolvable, tied to Survey reference. Two are missing from it: completeness (#54) and the expressed constraints, of which connectedness is plainly a "spatial condition." With those added, "the minimum spatial conditions required for further interpretation" is fully defined as G1–G7.

**F. Rules phrased as commands to higher layers, restated from Ground's side.**

| Finding | Restated |
|---|---|
| #1413 "Higher Architecture Must Adapt to Ground, Not Rewrite It" | Established Ground does not yield to a conflicting higher design. A conflict is evidence about the higher design, or, if it exposes a real deficiency, a matter for the governed scope route. |
| #1422 "GSI Must Not Be Required to Infer World Extent" | Ground supplies the World / non-World distinction completely, so no consumer needs to infer it. |
| #1423 "GSI May Describe the Limit Without Owning It" | Descriptions of the limit made above Ground carry no authority over it. |
| #172, #176 (same pattern) | Membership has one source; a claim about World-space that does not derive from Ground has no standing as membership. |

### Strongest Evidence
- **#54, #89, #23 [direct, retained]:** completeness, settled handoff, no alteration from above.
- **#737 [direct, survivor]:** the four-part minimum guarantee.
- **#738 [direct]:** what is not guaranteed.
- **#174 [direct, retained]:** the handoff is "canonical World-space membership, exact Survey correspondence, and the minimum spatial conditions."
- **#175 [direct]:** "The Handoff Must Not Include Interpretation."
- **#173 [direct, retained]:** direct Survey use above Ground is computational, not ontological.
- **#1406 [direct]:** the interface is semantic.
- **#182–#184 [direct]:** many interpretations, one Ground.
- **Against #55 [direct]:** #1157 (experience eligibility), #1158 (construction eligibility), #1159 ("Whether World-space may be assigned to a Parcel is a cadastral rule"), #1160 (Region eligibility), #1856, #1858 ("neutral to whether any location is ownable"), #1943, #1944, #1279, and #1156 (non-World-space "must not be presumed inaccessible or prohibited").
- **Pass #1, Decisions 4 and 5 [adopted]:** form and eligibility sit above Ground; authority runs one way.

### Contrary Evidence / Tension
- **#55 itself**, the only LOW-confidence row in the corpus.
- **#1159's closing clause** ("unless later architecture explicitly requires it") leaves a door open to Ground encoding parcel eligibility. It should be closed: if such a need were ever shown, it would be a scope change under #267, not a standing exception.
- **#1413, #1422, #1423, #172, #176** are correct in content and mis-addressed in form.
- **#1420** carries "unless foundational necessity is demonstrated"; the same remark applies.

### Architectural Consequences
- The upward contract is fixed as G1–G8 and the non-guarantees. It is the same for every consumer: General Spatial Interpretation, the Parcel Cadastre, runtime, experience and external systems.
- Eligibility of any kind is decided above Ground, by the layer or constitutional source that owns the thing for which a location is eligible.
- Exception clauses of the form "unless later architecture requires it" are replaced by one route: a proven scope change (#267, #1893).

### Findings Affected
- **Retain:** #23, #54, #56, #89, #173, #174, #175, #737, #738, #1406.
- **Revise:** #174 (define its phrase as G1–G7), #1413, #1422, #1423, #172, #176 (restate from Ground's side), #1159, #1420 (remove the standing exception clauses).
- **Merge:** #1403–#1410, #1414–#1419, #1421 under #737 and #738; #1155–#1160, #1856, #1858, #1943, #1944 under #738; #427 and #428 with #1891.
- **Reject / Supersede:** #55 (residue to #56).

### Resolution Status
**RESOLVE.**

---

## Decision 6 — Canonical Limit Ownership

### Recommendation

**The ownership rule:** *the canonical limit belongs to Ground because membership belongs to Ground. Whatever determines World-space also determines its limit. The limit needs no existence of its own to be owned, exact or referenceable.*

**A. Does Ground own the limit as a consequence of membership?** Yes.

**B. Must the limit be a first-class entity?** No. Objecthood is permitted only if a model needs it (#1427) and is never required by the architecture.

**C. Can something be referenceable without being an entity?** Yes. The limit is referenceable *by description*: "the limit of World-space under the canonical Ground definition" denotes one determinate thing, because membership is exact. Reference by description needs no stored object, no identity, no lifecycle and no name (#1426). That is all #1876 requires: that a system can denote the Ground limit distinctly from a higher boundary at the same location. Attribution to the layer, not objecthood, is what makes the reference distinct. The tension between #1427 and #1876 dissolves.

**D. If stored boundary geometry is primary in a future Specification, does ownership change?** No. What changes is the direction of derivation *inside* Ground (#1432), which #1431 requires to be declared. In either direction the limit of World-space is Ground's and no one else's. **The apparent conflict between #17 and #1430 also dissolves on the text.** #17 requires the distinction to "follow from the authoritative World-space definition." It does not say "from a membership rule." If boundary geometry is the authoritative definition, the distinction still follows from the authoritative definition, and #17's actual concern (no "separately mutable competing source of truth") is met by #1431.

**E. What is handed upward about the limit.**
- That it exists, as a consequence of exact membership.
- Determinate inclusion for every location at it (#16).
- That it lies in Survey space and is expressible in FSF terms (#1195).
- That a geometric expression of it may be derived exactly from the definition by anyone, as a derived artifact (#57, #1430).
- That it may be referred to distinctly from any higher boundary (#1876).
- That it is permanent, whatever happens to boundaries above it (#1872).

**Not handed upward:** a name (#1426); a visual form (#50, #51); thickness, a buffer or a frontier zone (#99, #100); interior or exterior meaning (#98); a count of components or an assurance that it is a single closed curve (Pass #1, Decision 1); an entity with a lifecycle.

### Strongest Evidence
- **#17 [direct]:** the distinction "must follow from the authoritative World-space definition rather than exist as a separately mutable competing source of truth."
- **#1428 [direct]:** "the World-space limit should arise from the membership definition rather than exist as a separately mutable foundational entity."
- **#1427 [direct]:** the limit "should not automatically become an independent canonical object unless such objecthood is necessary for the Ground model."
- **#1430, #1431 [direct]:** stored geometry is either derived or normatively primary, and it must be unmistakable which.
- **#1429 [direct]:** a stored boundary object and a membership rule must not both claim authority.
- **#1876 [direct]:** the limit is referenceable distinctly.
- **#1424–#1426 [direct]:** the limit holds unvisualized, unseen and unnamed.
- **#16 [direct]:** an exact inclusion rule at the limit.
- **#1870–#1875 [direct]** and **Pass #1, Decision 4 [adopted].**

### Contrary Evidence / Tension
- **#1427 against #1876:** resolved under C.
- **#17 against #1430:** resolved under D.
- **#1937:** "A canonical limit helps define membership." That phrasing leans toward boundary-as-basis; it is compatible with either direction and decides neither.

### Architectural Consequences
- The direction of derivation remains a Specification and model decision, as instructed. The ownership answer does not depend on it.
- The limit is not added to Ground's primitive content. It is a consequence of primitive content.
- Any geometric expression of the limit held outside the canonical definition is a derived artifact under #19 and #541.

### Findings Affected
- **Retain:** #16, #17, #1427, #1431.
- **Revise:** #1876 (referenceable by description), #1937 (neutral wording on direction).
- **Merge:** #1424–#1426, #1428, #1429 under #17; #1430 and #1432 under #1431; #1876 with #1427.

### Resolution Status
**RESOLVE.**

---

## Decision 7A — Survey Capacity (#165)

### Recommendation

#165 contains two different things and should be split.

- **First clause** ("The Foundational Survey Fabric must be sufficient to express all canonical World-space required by Spatial Ground"). As written, it is an obligation placed on FSF from above, which Ground has no authority to impose. Its content is real: Ground cannot work unless it is true. Its proper form is an **architectural dependency assumption** (DA1 in Decision 4), held in the shared FSF–Ground contract and recorded from Ground's side as "Ground assumes…".
- **Second clause** ("Spatial Ground must not compensate for deficiencies by inventing parallel spatial machinery"). A valid Ground obligation, and a restatement of #12 and #47. Merge.

**Corrected rule:** *Ground assumes the Survey Fabric can express all the Survey space the adopted definition needs. If that assumption fails, the remedy lies in the Survey Fabric or in shared architecture, never in Ground.*

The proper Ground-side statement of the same relationship already exists as its converse: Ground claims no distinction the Survey Fabric cannot represent (#1193–#1195).

### Strongest Evidence
- **#165 [direct]:** its own second clause.
- **#12, #47 [direct]:** no redefinition or duplication.
- **#1193–#1195 [direct]:** the converse, correctly addressed.
- **#264, #265 [direct]:** one owner per responsibility, and no orphans. The assumption must live somewhere both layers can see.
- **#1588 [direct]:** dependency is not incompleteness.
- **The standing discipline [adopted instruction]:** do not write requirements for another layer.

### Contrary Evidence / Tension
- **#165 was classed FSF Dependency and marked REQUIRES ARCHITECTURAL REVIEW** in Batch 2, for this reason.
- There is a symmetry risk: the discipline forbids designing the layer *above* from below, and says less about obligations addressed *downward*. #264 and #265 cover the downward case.

### Architectural Consequences
- Ground's Requirements will contain dependency assumptions as a distinct kind of statement, alongside obligations. They bind no one. They state the conditions under which Ground's obligations can be met.
- A failed assumption is an architectural event to be raised, by the same logic as #428 applied downward.

### Findings Affected
- **Revise:** #165 (split).
- **Merge:** #165, second clause, into #12.
- **Reclassify:** #165, first clause, from FSF Dependency / Requires Architectural Review to a shared-architecture dependency assumption.
- **Move to Shared Architecture:** #165, first clause.

### Resolution Status
**RESOLVE.**

---

## Decision 7B — Extent Description vs Constitutional Extent (#1652)

### Recommendation

**The narrow reading adopted in Pass #1 is confirmed, with one refinement.** "A description of World Extent" covers three different things, and #1652 is right about two of them and needs care with the third.

| Kind of description | Relation to Ground's membership definition |
|---|---|
| Ground-derived descriptions: area figures, summaries, textual accounts of the adopted definition | Subordinate. Where one disagrees with the definition, the description is wrong (#541, #1651, #1202). |
| Descriptions made above Ground: renderings, atlas-style accounts, interpretive characterizations | Subordinate (#1423, #1792). |
| Constitutional Extent (#93, #475) | **Upstream.** It controls Ground under #91. |

**The refinement.** "Controls" needs a precise meaning, because constitutional Extent speaks of scope and does not fix exact membership (#1653). It cannot *answer* a membership question in place of the definition; after adoption, meaning "should resolve through formal canonical rules" (#1740). What it can do is show that an adopted definition is *non-conforming*. So:

**Corrected rule, in two parts.**
1. *No description of any kind answers membership questions in place of the canonical definition.*
2. *A canonical definition inconsistent with constitutional Extent is defective. The defect is in Ground, and it is cured by governed correction, not by treating the description as the definition.* Until corrected, one established canon continues to answer (#1611).

Read this way, #1652 and #91 do not conflict. #1652 governs which artifact *answers*; #91 governs which authority *prevails when they are inconsistent*.

**Architectural home:** part 1 merges into #541 and #1651 (Single Canonical Truth). Part 2 is an application of #91 (Constitutional Subordination) and is cross-referenced from it. The flag on #1652 is removed.

### Strongest Evidence
- **#1651 [direct]:** "The exact set of Survey space participating in The World is primary; descriptive statements about its total scope must remain derived unless the Specification explicitly defines them as normative."
- **#541 [derived survivor]:** a derived value that disagrees is the one that is wrong.
- **#1792 [direct]:** "Describing World-space does not constitute it."
- **#91 [direct, retained]:** Ground "must not redefine, supersede, or independently originate" constitutional truth.
- **#93, #475 [direct, upstream]:** World Extent precedes its architectural representation, and Ground "must not redefine the constitutional meaning of Extent."
- **#1653 [direct]:** scope does not determine form.
- **#1740, #1611 [direct]:** formal rules give the meaning after adoption, and one canon answers until formally changed.
- **#2034 [direct]** and **Pass #1, Decision 5 [adopted].**

### Contrary Evidence / Tension
- **#1652's own text** does not say which kind of description it means. Read broadly, it would place Ground's definition above a constitutional statement.
- **#1651's closing clause** ("unless the Specification explicitly defines them as normative") allows a descriptive statement to be made normative. If that were done, #1431 would require it to be declared primary or derived. The door should be noted, not used.
- Who decides that a definition is non-conforming, and who corrects it, is a Pass #3 matter.

### Architectural Consequences
- The one-way chain of Pass #1 is preserved: constitutional truth, then the adopted definition, then descriptions and interpretations.
- Consistency with constitutional Extent becomes a condition checked at adoption and a ground for correction afterward. It is never a second source of membership answers.

### Findings Affected
- **Retain:** #91, #93, #475, #541, #1651.
- **Revise:** #1652 (the two-part rule).
- **Merge:** #1652, part 1, into #541 with #1651.
- **Reclassify:** remove the flag on #1652.

### Resolution Status
**RESOLVE.**

---

## Decision 8 — Cross-Layer Ownership Principles

### Recommendation

**A. What belongs in Spatial Ground's Requirements.** None of the cross-layer principles as such. What belongs there are their Ground-side instances, which already exist as Ground Findings:
- no duplication of FSF (#12);
- a closed, enumerated responsibility set (#266);
- a necessity proof for any new responsibility (#267);
- connectedness evaluated from the Ground definition and from no other layer (#825);
- the dependency surface and upward contract of Decisions 4 and 5.

**B. What belongs in an Atlas-wide shared architectural charter.**
- #264 (no responsibility duplicated) and #265 (none orphaned);
- #828 (topological truth at the lowest owning layer);
- #1639 (minimal cross-layer coupling);
- #1894 and #1895 (the lowest correct layer, and "lowest does not mean deepest");
- the dependency assumptions DA1–DA7 and #165's first clause, as the FSF–Ground section of that charter;
- the rule that a deficiency found in one layer returns to the owning layer and is not patched elsewhere (#427, #428, and its downward twin from Decision 7A);
- the recovery order across layers (#1711).

Ground's Requirements cite the charter. They do not restate it.

**C. What is methodology only.** #1450 (a test applied during consolidation, answered below), #1449 (the bidirectional layer test), and the five admission tests #1007–#1011. They govern how the Requirements are assembled and how future proposals are judged. #267 is the governance rule that gives the tests force.

**D. Does Spatial Ground remain justified as its own layer under #1450?** Yes.

**E. #1894 applied to Spatial Ground itself.** The responsibility in question is membership. #1894 asks for "the lowest architectural layer that can own it correctly without importing unnecessary semantics."

*Why membership cannot be absorbed downward into FSF.*
- FSF would become World-aware. #1009 places in FSF only what is "purely mathematical reference independent of World membership." Membership is the one spatial fact that is not independent of The World (#1247).
- Validity and membership are different facts. Non-World-space "remains valid Survey space" (#14), and a location "may be canonically addressable without being World-space" (#1101). A layer that owned both would have to keep them apart internally, which is the present boundary under another name.
- The two do not merge even if their extents coincide (#261–#263; Pass #1, Decision 3B).
- Their authorities differ. FSF is mathematics. Membership expresses constitutional truth and is fixed by adoption (#91–#94, #1740). Placing it in FSF would load the mathematical layer with constitutional content.
- Their lifecycles differ. FSF evolves along a compatible lineage, and its Domain may change. World-space is permanent and must not move when FSF changes (#4, #1629).

*Why membership cannot be absorbed upward into General Spatial Interpretation.*
- Interpretation would have to invent what it interprets. #54 requires "a complete authoritative answer to where The World exists before interpretation begins."
- Interpretations are plural and may disagree (#182–#184). Membership must be singular (#8). Housing it in one interpretation makes that interpretation privileged; housing it in each makes membership plural.
- Interpretation is meant to be revisable (#143). Membership is permanent (#4). The upward placement test (#1008) sends upward whatever "can vary over time without changing where The World exists," and membership is precisely what cannot.
- The Parcel Cadastre cannot hold it either: World-space is not Parcel space (#6), and parcels need not cover it (#35).

*And #1895 is satisfied.* Ground holds nothing except membership and its direct consequences (Decision 1), so nothing has been forced downward for safety.

**Statement.** Spatial Ground is the lowest layer that can own membership correctly, and the only one. #1247 says it exactly: it does "what Survey cannot do without becoming World-aware and exactly what higher interpretation should not be forced to do because World-space must already exist." A responsibility with its own source of authority, its own lifecycle and every higher layer as its consumer warrants its own layer.

### Strongest Evidence
- **#1247 [direct, survivor]**, **#276 [direct]:** the narrow middle.
- **#1008, #1009 [direct]:** the two placement tests.
- **#1894, #1895 [direct].**
- **#14, #1101, #261–#263 [direct]:** validity is not membership; coincidence does not merge roles.
- **#54, #8, #182–#184, #143, #4 [direct]:** against upward absorption.
- **#264, #265 [direct, currently retained]:** classed Layer Boundary with AUTHORITY: cross-layer since Batch 3.
- **#266, #267 [direct]:** Ground's own closed set and necessity proof.
- **#1450 [direct]:** the test itself.

### Contrary Evidence / Tension
- **#264, #265, #828, #1639, #1894 and #1895 are all titled "Spatial Ground Must…"** and two of them are currently *retained* as Ground candidates. Moving them to a charter removes them from Ground's retained set.
- **No shared architectural charter is known to exist.** The corpus never names one. I proposed one in Batch 3; it remains a proposal. Without it, these principles and the dependency assumptions would be orphaned, which #265 itself forbids.
- **#1450** makes the layer's existence conditional. The condition is met on the evidence; the conditionality is a methodological stance, not a standing Requirement.

### Architectural Consequences
- The retained set changes: #264 and #265 move to shared architecture. Ground's Requirements gain a citation in their place.
- A shared charter, or an equivalent Atlas-level document, is needed. Who owns it is a Pass #3 question.
- The layer's justification can be stated once, from #1247, and need not be re-argued.

### Findings Affected
- **Retain in Ground:** #12, #266, #267, #276, #825, #1247.
- **Move to Shared Architecture:** #264, #265, #828, #1639, #1894, #1895, #1711, #427 and #428 (as a routing rule).
- **Reclassify:** #1450, #1449 and #1007–#1011 as methodology.
- **Merge:** #1449 into #1247.

### Resolution Status
**RESOLVE**, with the existence and ownership of a shared charter left to Pass #3.

---

## Decision 9 — Conformance Hook Problem

The rule is that Conformance may not originate obligations. The test applied to each Finding is strict: does the obligation *follow* from retained candidates, or does it add something they do not contain?

One point governs two of the four answers. That a definition *has* a property does not entail that the property is *checkable*. For a sufficiently expressive language of definitions, whether an arbitrary expression yields a total, terminating membership answer is not decidable in general, and neither is whether two expressions agree everywhere. Decidability of validity and of equivalence is therefore a real constraint on what may count as a Ground definition. It belongs with the definition-level constraints (#1181, #1270, #1308, #1319, #1431, #1432, #1435, #2063, and refinement-closure from Pass #1).

### #64 — Deterministic validatability
- **Existing Parent Chain:** #28 (finitely expressible, finitely parseable, deterministically computable) with #27 (nothing hidden, so validity depends only on the definition and the governing rules), #15 and #250 (a definition that leaves any membership question unresolved is incomplete), and #26 (independent implementations must agree, which presumes they can agree on whether they hold a valid definition). Supporting: #61, #526, #647.
- **Does the chain suffice?** Not quite. It establishes what a valid definition *is*. It does not establish that validity can be *determined*.
- **Hook Needed: YES** (thin).
- **Minimal Obligation:** *whether a purported Ground definition is a valid canonical definition is determinately decidable from the definition and the governing rules alone.* Wording source: #1340.

### #65 — Canonical equivalence
- **Existing Parent Chain:** #29 (representation may change, place must not, so distinct expressions of one World-space exist), #8 (one truth, so two expressions either agree or one is wrong), #4 (permanence across re-expression cannot be known without comparison), #60 (contradiction between purported representations must be detectable). Supporting: #116, #216.
- **Does the chain suffice?** Not quite, for the same reason. With refinement-closure, agreement must hold at every location that can ever become representable, which is not checkable by enumeration.
- **Hook Needed: YES** (thin, and conditional).
- **Minimal Obligation:** *where more than one expression of canonical Ground is permitted, whether two expressions denote the same World-space is determinately decidable.* Wording source: #1341, which is itself conditional.

### #66 — Defined failure conditions
- **Existing Parent Chain:** each failure named in #66 is the negation of a retained candidate.

| Failure in #66 | Negated parent |
|---|---|
| invalid, ambiguous, incomplete | #15, #250 |
| contradictory | #8 |
| non-terminating | #28 |
| hidden-state dependent | #27 |
| non-conforming, divergent | #26 |

  That failures never become membership states follows from #15 through #152, #1083 and #2063. That an implementation never substitutes a default follows from #15 through #62, #254 and #255.
- **Hook Needed: NO.** If the Requirements say a canonical definition must have a property, lacking it is a defined failure. With the #64 hook in place, each failure is also determinable.

### #86 — Mandatory conformance core (and adversarial testability, #85)
- **Existing Parent Chain:** #26 (identical results from independent implementations require a common set of behaviors that all support) with #8 and #87 (a richer implementation holds no superior truth, so the common set is what counts). The four behaviors named in #86 each have a parent: *resolve* from #15; *validate* from the #64 hook; *compare* from the #65 hook; *reproduce* from #10 and #26.
- **Hook Needed: NO.** The idea of a "core" with optional capability above it is structure internal to the Conformance framework, not an obligation on the layer.
- **On #85:** its architectural root is falsifiability (#647, from #15 and #26), which needs no hook. Its distinctive content ("Before Spatial Ground architecture becomes institutionally established, it must be tested…") is an **establishment criterion**, of the same kind as #645. It belongs to Pass #3, not to Requirements.

**Summary.** Two hooks, both definition-level: decidable validity, and decidable equivalence where several expressions are permitted. #66 and #86 derive in full once those exist.

---

## Canonical Ownership Map

"Pass-through" means Ground hands the thing upward unchanged and adds nothing to it. "Expresses" means Ground gives exact form to a truth whose authority lies elsewhere.

| Concept / Truth | Primary Owner | Consumed By Ground? | Produced By Ground? | Handed Upward? | May Ground Redefine It? | Notes |
|---|---|---|---|---|---|---|
| Survey Domain | FSF | Yes | No | Pass-through | No | Finite; its limit is FSF's (#163, #1152). World-space may coincide with it, never be defined as it |
| Survey reference | FSF | Yes | No | Pass-through | No | Unaltered by inclusion (#1103) |
| Reference validity | FSF | Yes | No | Pass-through, as a precondition | No | No membership answer for an invalid reference (#159, #583) |
| Reference equality, aliasing, normalization | FSF | Yes | No | Pass-through | No | Ground answers consistently across FSF-equal references (#1105, #1810) |
| Coordinates, origin, direction, handedness | FSF | Yes | No | Pass-through | No | #47, #166–#169 |
| Geometry | FSF | Yes, to express membership | No | Only as derived expressions | No | Ground selects which geometry is World; the mathematics is FSF's (#24, #25) |
| Topology and spatial operations | FSF | Yes | No | Pass-through | No | Named in #12; supplies overlap, containment, intersection, and the connectedness predicate |
| Measure and units | FSF | Yes | No | Pass-through | No | #166, #2044 |
| Scale | FSF | Yes | No | Pass-through | No | No independent rescaling (#2048) |
| Precision | FSF | Yes | No | Pass-through | No | Ground claims nothing finer (#1193–#1195) |
| Refinement | FSF | Yes | No | Ground guarantees refinement-closure | No | Refinement evaluates, never decides (Pass #1) |
| Location versus extent semantics of a reference | FSF | Yes | No | Pass-through | No | Outstanding FSF fact (Decision 3) |
| Adjacency | FSF (mathematical); The Codex (named concept) | Only if the connectedness predicate needs it | No | No | No | #289, #832, #1938 |
| Compatible lineage; translation across Survey versions | FSF | Yes | No | No | No | Ground declares its dependency surface and the lineage it is bound to (#1382, #1628, #1495) |
| Constitutional One World | The Declaration | Yes, as a constraint | No; expresses | Yes, as a guarantee | No | #92, #288 |
| Existence of The World (non-emptiness) | Constitutional | Yes, as a constraint | No; expresses | Yes, as a guarantee | No | Pass #1, Decision 3A |
| Constitutional Extent | The Codex / World Properties | Yes, as a constraint | No; expresses exactly | No | No | #93, #475. Conformity is an adoption condition and a ground for correction (Decision 7B) |
| Connectedness | Truth: constitutional continuity (source unverified). Predicate: FSF. Assertion about World-space: Ground expresses | Yes | No; expresses | Yes, as a guarantee | No | Refinement-stable; evaluated from the Ground definition (#825, #829) |
| World membership | **Ground** | — | Yes | Yes | Ground is the owner. Change to established membership is a Pass #3 question | The layer's only native meaning |
| Non-World membership | **Ground** | — | Yes, as the relational complement | Yes | As above | No further meaning attached (#98, #1071) |
| Point (location) membership | **Ground** | — | Yes | Yes | As above | The form in which membership is authoritative |
| Membership vocabulary | **Ground** | — | Yes | Yes | Closed; not to be enlarged | World / non-World only (#152, #2063) |
| Inclusion rule at the limit | **Ground** | — | Yes | Yes, as determinate inclusion | As above | The convention is membership semantics; the topology behind it is FSF's |
| Canonical limit | **Ground**, as a consequence | — | Yes, as a consequence | Yes: determinate, derivable, referenceable by description | As above | Not an entity unless a model needs it (Decision 6) |
| Adopted definition (the canonical instance) | Held in **Ground**; made canonical by adoption | — | Expressed and preserved | Yes, through its answers | Not by Ground itself | Who adopts is Pass #3 |
| Validity and equivalence of Ground expressions | **Ground** (formal rules) | — | Yes | Indirectly | — | The two hooks of Decision 9 |
| Extent classification (full, partial, none; coverage) | No primitive owner; derived | No | No | No. Ground guarantees only derivability and determinacy | n/a | Derived from Ground membership and FSF operations; never stored as canon (#1114, #1170) |
| Visual form, recognizable outline | General Spatial Interpretation / experience | No | No | No | No | May coincide with the limit or diverge (Pass #1, Decision 4) |
| Experience edge | Experience | No | No | No | No | #1869, #2021 |
| Terrain, morphology | General Spatial Interpretation | No | No | No | No | #38, #101 |
| Regions / Clusters | The Codex; General Spatial Interpretation | No | No | No | No | #37, #289, #1160 |
| Parcel identity | The Codex; Parcel Cadastre | No | No | No | No | #36, #1133 |
| Parcelization, parcel coverage, parcel eligibility | Parcel Cadastre | No | No | No | No | #35, #1159 |
| Legal, ownership, rights, governance meaning | Rights and governance architecture above | No | No | No | No | #40, #76, #1858 |
| Eligibility of a location for anything | The layer that owns the thing | No | No | No | No | #55 rejected |
| Operational responses (errors, timeouts, unavailable) | Implementations; Conformance | No | No | No | n/a | Never canonical (#1083) |
| Implementation mathematics, indexes, caches, partitions | Implementations | No | No | No | n/a | Never normative (#19, #357, #1995) |
| Cross-layer placement principles; dependency assumptions | Shared architectural charter | Cited | No | No | No | Decision 8 |

**Reading the map for leakage.** Every row marked "No" in the last column with FSF or a constitutional source as owner is a place where a Ground restatement would be duplication (#264). Every row owned above Ground is a place where a Ground statement would be overreach (#1245). The only rows in which Ground produces anything are the rows Ground owns, and each of them is membership or a direct consequence of it.

---

## Cross-Decision Consistency Review

**All nine decisions coexist with one another and with Pass #1. No Pass #1 decision is reopened. One dependency is exposed and carried forward.**

| Test | Result |
|---|---|
| **Pass #1** | Consistent. Decision 1 rests on Pass #1's verb (Ground expresses). Decision 2 generalizes Pass #1's treatment of non-emptiness to One World and connectedness. Decision 3 applies Pass #1's refinement rule to coarse references. Decision 6 applies "coincidence is not identity" to the limit and higher boundaries. Decision 7B confirms the narrow reading of #1652 that Pass #1 implied. |
| **Constitutional subordination** | Strengthened. Four truths are now explicitly upstream and expressed, not owned (Decision 2). Constitutional Extent prevails by showing a definition defective, never by answering in its place (Decision 7B). |
| **FSF authority** | Strengthened. #1276's exception is struck; reference identity, precision, refinement, adjacency, translation and lineage are FSF's; Ground addresses no requirement to FSF (Decisions 1, 4, 7A). |
| **Membership-only Ground-native meaning** | Held. The inclusion rule, the limit, the vocabulary and the two hooks are all membership or formal rules about membership definitions (Decisions 1, 6, 9). Extent classification is excluded (Decision 3). |
| **Higher-layer independence** | Held. The upward contract states supply and immunity only; #55 is rejected; mis-addressed rules are restated from Ground's side (Decision 5). |
| **Lowest-correct-layer discipline** | Held, and applied to Ground itself (Decision 8). Extent classification fails the removal test and stays out (Decision 3). |
| **No duplicated responsibility (#264)** | Held. Connectedness involves three parties with three distinct responsibilities: source, predicate, expression. That is division, not duplication. Reference equality (FSF) and expression equivalence (Ground) are different subjects. |
| **No orphaned responsibility (#265)** | Four potential orphans were found and assigned. The derived extent vocabulary: written once as derived definitions (Decision 3). Location-versus-extent semantics: FSF (Decision 4). Dependency assumptions and cross-layer principles: a shared charter (Decision 8). Remedy for an FSF deficiency: shared architecture (Decision 7A). |

**Pairwise checks that mattered.**
- **Decisions 1 and 9.** The hooks add formal rules, not mathematics, so they do not reopen Decision 1.
- **Decisions 2 and 8.** Expressing an upstream truth does not make Ground its owner, so moving #21 and #22 out of the primitive set weakens nothing in the case for the layer. The case rests on membership alone.
- **Decisions 3 and 5.** The upward contract is stated for locations, consistently with extent outcomes being derived.
- **Decisions 4 and 7A.** DA1 is #165's first clause in its proper form.
- **Decisions 6 and 1.** The inclusion convention is membership semantics; the topological notion beneath it is FSF's. The same split as for connectedness.

**The one dependency exposed.** If the Survey Fabric treats references at every precision as locations, then two-valued membership (#15) and refinement consistency (#246) can both hold only if no location-reference straddles the limit (Decision 3, F). This is not a contradiction among the decisions. It is a consequence that would constrain the adopted definition, and it turns on an FSF fact this review could not check.

**Two unverified foundations.** The constitutional source of continuity (Decision 2) and the contents of the Survey Fabric's own specification (Decision 4) were not available. Every decision that depends on them says so.

---

## Findings Affected

Nothing is renumbered. Where a Finding appears under more than one decision above, it is listed once here under its final disposition.

### Retain
- **Ground-originated obligations (primitives after this Pass, 17):** #1, #2, #3, #4, #8, #9 (merges into #15 and #16 as before), #10, #13, #15, #19, #20, #26, #27, #28, #29, #58, #81.
- **Downward contract:** #12, #46, #159, #244, #734, #1585, #1588, #1634, #1711 (as a Ground-side citation).
- **Upward contract:** #23, #54, #56, #89, #173, #174, #175, #737, #738, #1406.
- **Layer boundaries:** #6, #25, #30, #266, #267, #276, #1009, #1247.
- **Constitutional:** #91, #92, #93, #94, #288, #290, #291, #475.
- **The limit and single truth:** #16, #17, #541, #1427, #1431, #1651.
- **Survivor wording:** #574, #1169, #1278, #1627, #1931, #1933, #2046, #2050, #2063.

### Revise
- **#21, #22:** restate as expression of upstream truth.
- **#1276:** strike "unless strictly necessary."
- **#1319, #1321, #2042:** "mathematics" becomes "formal rules."
- **#1932:** replace "relational semantics" with membership.
- **#165:** split into a dependency assumption and an obligation.
- **#1652:** the two-part rule.
- **#174:** define "minimum spatial conditions" as G1–G7.
- **#1413, #1422, #1423, #172, #176:** restate from Ground's side.
- **#1159, #1420:** remove standing exception clauses; route through #267.
- **#1105–#1110, #1810:** restate as Ground's consistency duty over FSF-owned reference identity.
- **#1111, #1113, #1115, #1175, #1176:** restate as derivability and determinacy guarantees.
- **#246:** coarse statements about extents are not contradicted by finer results.
- **#1382, #1628:** adopt the architectural meaning of "compatible lineage."
- **#1126, #1198:** remove the presumption of continuity.
- **#875–#883:** add connectedness and non-emptiness, or justify the omission.
- **#1876, #1937:** referenceable by description; neutral on direction of derivation.

### Merge
- **Into #12 (with #47):** #576, #1320, #1911, #166–#169, #2044, #2048, revised #1276, #165 second clause.
- **Into #1319:** #1321.
- **Into #574 (with #1931):** #1932.
- **Under #21:** #824, #878, #1234, #2096. **Under #22:** #1235.
- **Under #1114 and #1169:** #1112, #1170–#1174, #1177, #1814, #1815.
- **Under #1634:** #1629–#1633, #1636, #1637.
- **Under #737 and #738:** #1403–#1410, #1414–#1419, #1421, #1155–#1160, #1856, #1858, #1943, #1944.
- **Under #17:** #1424–#1426, #1428, #1429. **Under #1431:** #1430, #1432. **With #1427:** #1876.
- **Into #541 (with #1651):** #1652, part 1.
- **Into #1247:** #1449.
- **Into #56:** the residue of #55.

### Reclassify
- **#21, #22:** from Primitive Requirement Candidate to expressed constitutional constraint.
- **#165, first clause:** to shared-architecture dependency assumption; out of Requires Architectural Review.
- **#1652:** flag removed.
- **#1113:** from Specification Candidate to derived definitions.
- **#64, #65:** remain Conformance candidates, each now with a Requirements-level hook.
- **#85 (its establishment clause):** to an establishment criterion for Pass #3, alongside #645.
- **#1450, #1449, #1007–#1011:** methodology.

### Move to Shared Architecture
- #264, #265, #828, #1639, #1894, #1895.
- #1711 (recovery order across layers).
- #427, #428 and their downward twin (a deficiency returns to the owning layer).
- #165, first clause, and dependency assumptions DA1–DA7.

### Reject / Supersede
- **#55**, as written.
- **#1276's exception clause.**
- **#1932's phrase** "relational semantics established by Ground."
- **"Ground-native mathematics"** as a category.
- **Extent classification as Ground canon** (any reading of #1113, #1115 or #1176 to that effect).
- **#1450 as a standing Requirement** (answered as methodology).

---

## Questions Remaining After Pass #2

1. **Which constitutional source, if any, requires continuity.** If none does, #22 needs an explicit decision (Decision 2).
2. **Facts about the Survey Fabric that the corpus assumes and this review could not check:** whether a coarse reference is a location or an extent; whether its topology is adequate to state connectedness; how reference equality is determined; what it means by a compatible lineage; whether Survey space is continuous or discrete.
3. **The coarse-location consequence** (Decision 3, F), which depends on the first of those facts.
4. **Where the derived extent vocabulary is written down:** the Ground Specification as derived definitions, or shared architecture.
5. **Whether a shared architectural charter exists, and who owns it.**
6. **Specification and model matters deliberately left open:** the inclusion convention at the limit; the direction of derivation between boundary geometry and membership; whether the limit needs objecthood.
7. **Everything reserved for Pass #3** (next section).

---

## Recommendation for Pass #3

Pass #2 fixes what Ground owns, so the institutional review can now decide who acts on it. In order of dependency:

1. **Who adopts the canonical definition.** Pass #2 shows this one actor also carries: consistency with the expressed constitutional constraints at adoption (Decisions 2 and 7B); scope changes, since #1966 routes "downward promotion" through ordinary adoption; and acceptance of corrections (#1552, #1612).
2. **Who may change established World-space, if anyone.** The FOUNDATIONAL AUTHORITY GAP (32 Findings), and its standing tension with #4.
3. **Who verifies the constitutional constraints Ground expresses,** and how a finding of non-conformity with constitutional Extent becomes a governed correction (Decision 7B; #291).
4. **Establishment criteria.** #645 and #1242 (independent implementation, and at which strength), #85 (adversarial testing before establishment), #1567–#1568 (recovery drills). Pass #2 classes all of these as establishment evidence, not as Requirements on the layer.
5. **Precedence among records (#661).** The structure reached in classification stands: adopted authority selects, formal semantics give meaning, provenance and integrity are evidence. Provenance against integrity, and two records of equal authority, remain to be decided.
6. **The primary normative form (#707/#708).** Decision 9's hooks and #1431 both favor one declared primary form with the other derived. Which form is primary is a decision, not a finding.
7. **Who owns the shared architectural charter** and the FSF–Ground dependency assumptions, and who certifies compatibility between Survey versions to Ground.
8. **Who confers stewardship legitimacy** (#1920), and how authority passes from "the original Creator-period institution" (#1688).
