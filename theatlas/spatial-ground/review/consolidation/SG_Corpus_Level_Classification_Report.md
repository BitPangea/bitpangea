# Spatial Ground Creator Findings: Corpus-Level Classification Report

**Corpus:** 2,100 Creator Findings, #1–#2100, classified in 21 batches of 100.
**Status:** classification complete. No Requirements are drafted here. Every reserved question, contradiction and authority gap is preserved unresolved.
**Companion files:** `SG_Classification_Master_F0001-2100.csv` (all 2,100 rows) and the 21 per-batch CSVs. Every count in this report is computed from those rows.

**A note on structure.** The report structure you specified at the start of the audit was in the original instruction attachment, which is not in the record I can still read. I have therefore organized the report around the content you listed for it: totals, primitive candidates, consolidation survivors, framework migrations, unresolved questions, contradictions and authority gaps, with the primitive/survivor distinction kept explicit throughout. If your original structure ordered these differently, the material can be re-ordered without loss.

---

## 1. Headline findings

1. **The corpus reduces to a small core.** Of 2,100 Findings, 1,379 are duplicates and 320 are derived consequences, together 1,699 (80.9%). In all, 1,744 are recommended for merger into stronger Findings. Only 33 are recommended for retention as independent candidates, and only 19 are Primitive Requirement Candidates.
2. **Every primitive candidate lies in #1–#100.** No primitive was found in Batches 2–21. The 33 retained Findings all lie in #1–#265. The remaining 1,835 Findings elaborate, test, preserve, govern or restate that core.
3. **The layer's native content is membership and nothing else.** Across 2,100 Findings, the only thing Ground adds to what the Foundational Survey Fabric supplies is the truth that a Survey reference participates in The World (#574, #1101, #1278, #1931, #1933, #2046, #2050). One Finding (#1932) hints at more and does not explain it.
4. **305 Findings migrate to downstream frameworks,** and 12 more are preserved as historical reasoning only: Conformance 85, Governance 81, Specification 59, Preservation 35, Terminology 31, Implementation 14 (by disposition; see §7).
5. **Two decisions have no named owner:** who adopts Ground (and, per #1966, who enlarges its scope), and who may change established World-space. The corpus specifies the procedure for both in detail and names no one.
6. **Nine architectural questions remain open** (§11), together with five flagged Findings (§12) and seventeen recorded tensions (§13).
7. **The cluster set stabilized at 35 by Batch 4 and never grew.** That stability, with the concentration of derivations on about a dozen parents, is the strongest evidence that the inquiry had found its architecture early.

---

## 2. Method and integrity of the record

**Coverage.** 2,100 rows, 2,100 unique Finding numbers, no gaps. Findings were never renumbered. The classification REVIEW REQUIRED was never needed.

**Taxonomy.** Fifteen primary classifications, ten dispositions, 35 clusters, held fixed from Batch 4.

**Disciplines added during the audit, at your instruction.**
- From Batch 2: upstream authority is noted in the rationale (AUTHORITY:), and a Finding is not called primitive merely because Ground must faithfully express an upstream truth. Architectural requirements are separated from principles about how to consolidate the Findings (METHODOLOGICAL).
- Progressively through Batches 3–6: duplicate sub-types (RESTATEMENT, INSTANCE), FRAMEWORK MIRROR (first used at #404), AUTHORITY GAP and its two named forms, CONSOLIDATION SURVIVOR (first used at #503).
- From Batch 9: the four-part check. Before any Finding was classed as a duplicate it was tested for a new failure mode, a new scope condition, a new authority distinction, or a new cross-layer implication. Where one was found the rationale says "New" and names it.

**Consequence for marker counts.** Because markers were introduced as the audit went on, their totals undercount the early batches. 73 early duplicates carry no RESTATEMENT/INSTANCE marker, and "New" appears only from Batch 9. Marker totals below are therefore floors, not censuses. Classification, disposition, cluster and confidence counts are complete for all 2,100 rows.

**Limits.** This is a single-reader classification. Related Findings are limited to about three per row, so they indicate parentage and are not exhaustive cross-references. Of the 204 rows below HIGH confidence, 138 lie in Batches 1–5, where parents were still being identified; later batches are overwhelmingly HIGH because every Finding had an established parent.

**Corrections to my own running record.**
- *Primitive list.* A carried-forward summary listed the primitives loosely. The CSVs are authoritative: #1, #2, #3, #4, #8, #9, #10, #13, #15, #19, #20, #21, #22, #26, #27, #28, #29, #58, #81. Findings I often cited as root parents (#12, #23, #30, #89) are retained but are not primitives; they are a downward contract, an upward contract, a layer boundary and an upward contract respectively.
- *Two reserved items fell off the running list.* #97 and #165 were marked REQUIRES ARCHITECTURAL REVIEW in Batches 1–2 and were not repeated in later "reserved" lists. They are restored in §11.
- *The Atlas.* In Batch 11 I read The Atlas as an institution describing what occupies World-space. #1450 and #1459 show it is the home of the architectural record itself, of which Spatial Ground is one domain. Rows are unaffected.

---

## 3. Corpus totals

**Primary classification (2,100).**

| Classification | Count | Share |
|---|---|---|
| Duplicate / Near-Duplicate | 1,379 | 65.7% |
| Derived Consequence | 320 | 15.2% |
| Conformance / Validation Candidate | 85 | 4.0% |
| Institutional / Governance Candidate | 83 | 4.0% |
| Specification Candidate | 59 | 2.8% |
| Preservation / Reconstruction Candidate | 35 | 1.7% |
| Terminology / Documentation Candidate | 31 | 1.5% |
| Layer Boundary / Exclusion | 28 | 1.3% |
| Primitive Requirement Candidate | 19 | 0.9% |
| FSF Dependency / Downward Contract | 17 | 0.8% |
| Upward Handoff / Higher-Layer Contract | 15 | 0.7% |
| Implementation / Operational Candidate | 14 | 0.7% |
| Historical Reasoning Only | 12 | 0.6% |
| Unresolved Architectural Question | 3 | 0.1% |
| Review Required | 0 | 0% |

**Disposition (2,100).** Merge 1,744; Move to Conformance 85; Move to Governance 81; Move to Specification 59; Move to Preservation 35; **Retain 33**; Move to Terminology 31; Move to Implementation 14; Preserve as Historical 12; Requires Architectural Review 6.

**Confidence.** HIGH 1,896; MEDIUM 203; LOW 1 (#55).

**Duplicate sub-types (1,379).** RESTATEMENT 865; INSTANCE 441; unmarked 73 (early batches).

**Shape over time.**

| Batch | Findings | Duplicate | Duplicate + Derived | Primitive | MEDIUM or LOW |
|---|---|---|---|---|---|
| 1 | #1–#100 | 8 | 42 | 19 | 49 |
| 2 | #101–#200 | 24 | 54 | 0 | 29 |
| 3 | #201–#300 | 37 | 64 | 0 | 24 |
| 4 | #301–#400 | 38 | 72 | 0 | 19 |
| 5 | #401–#500 | 46 | 68 | 0 | 17 |
| 6 | #501–#600 | 49 | 75 | 0 | 11 |
| 7 | #601–#700 | 52 | 70 | 0 | 7 |
| 8 | #701–#800 | 76 | 90 | 0 | 6 |
| 9 | #801–#900 | 73 | 84 | 0 | 7 |
| 10 | #901–#1000 | 69 | 78 | 0 | 2 |
| 11 | #1001–#1100 | 79 | 87 | 0 | 4 |
| 12 | #1101–#1200 | 68 | 88 | 0 | 9 |
| 13 | #1201–#1300 | 93 | 97 | 0 | 7 |
| 14 | #1301–#1400 | 72 | 82 | 0 | 3 |
| 15 | #1401–#1500 | 72 | 82 | 0 | 4 |
| 16 | #1501–#1600 | 80 | 84 | 0 | 2 |
| 17 | #1601–#1700 | 74 | 88 | 0 | 3 |
| 18 | #1701–#1800 | 92 | 97 | 0 | 0 |
| 19 | #1801–#1900 | 92 | 99 | 0 | 0 |
| 20 | #1901–#2000 | 94 | 100 | 0 | 1 |
| 21 | #2001–#2100 | 91 | 98 | 0 | 0 |

The inquiry found its obligations in the first hundred Findings, spent Batches 2–7 on consequences, boundaries and downstream frameworks, and from Batch 8 onward mostly re-applied established principles to new subjects. Three later batches carried unusual amounts of new material: Batch 12 (extents, aliases, refinement), Batch 15 (definition-level constraints, model replacement) and Batch 17 (the correction lifecycle, dependency classes).

---

## 4. Primitive Requirement Candidates (19)

These are the Findings that state an obligation of the layer not derivable from any other Finding. **They are candidates, not Requirements.** Eighteen are retained; #9 is primitive in content but merges into #15 and #16, which say the same thing more precisely.

| # | Obligation, in brief | Confidence | Caveat recorded |
|---|---|---|---|
| 1 | Survey space participates in The World: the layer's core responsibility | HIGH | Verb tension with #93 (§13.1) |
| 2 | Ground recognizes space as World-space; it does not create it | MEDIUM | Overlaps #1; non-creation is the independent content |
| 3 | A permanent World / non-World distinction within the Survey Domain | HIGH | |
| 4 | Membership is permanent and independent of everything created later | HIGH | Bundles two ideas, permanence and independence; carries about 228 descendants |
| 8 | One canonical membership truth | HIGH | |
| 9 | An exact canonical distinction at the limit | MEDIUM | Merges into #15 and #16 |
| 10 | World-space held in a form reconstructable from canonical rules | MEDIUM | Requirement, or anchor of the Preservation framework? |
| 13 | World-space is a finite subset of Survey space | HIGH | "Subset", not "proper subset" (see #260) |
| 15 | Membership is exact, total, deterministic and two-valued | HIGH | |
| 19 | Materialized representations are derived, never canonical authority | MEDIUM | Arguably derivable from #8 |
| 20 | Ground introduces no new spatial semantics | HIGH | Parent of nearly every "must not encode X" |
| 21 | One World means one World-space | MEDIUM | Source is The Declaration (#92); Ground's share may be non-permission only |
| 22 | World-space remains connected | MEDIUM | Source may be constitutional (#829); open question #97 depends on it |
| 26 | Independently reproducible across conforming implementations | MEDIUM | Largely follows from #15 and #27; kept as the testable form |
| 27 | No hidden state | HIGH | |
| 28 | Finitely expressible, terminating definition | MEDIUM | "Finitely parseable" leans toward Specification; #1339 supplies the term "decidable" |
| 29 | Version the representation and the standard, never the place | HIGH | |
| 58 | Minimize stored truth | MEDIUM | May be a rule about the Requirements, not a Requirement |
| 81 | Technology-agnostic | HIGH | |

**Five of the nineteen may not survive as Ground Requirements on review**, for reasons the rows already record: #21 and #22 (authority is upstream), #10 and #58 (may be rules about the record or the Requirements), #26 (derivable). That would leave roughly fourteen.

**Fifteen other Findings are retained as independent candidates** without being primitives:

- *Downward contract (FSF):* #12 (reference FSF, never redefine or duplicate it), #46 (exact coordinate correspondence), #159 (membership applies only to valid Survey reference), #244 (membership stays put under refinement).
- *Upward contract:* #23 (higher architecture cannot alter World extent), #54 (complete enough that interpretation never invents membership), #89 (membership handed upward as settled truth), #173 (direct Survey use above Ground is computational, not ontological), #174 (the handoff contract).
- *Layer boundaries:* #6 (World-space, not Parcel space), #25 (geometry belongs in Ground only insofar as it expresses membership), #30 (Ground terminates before interpretation), #264 and #265 (no responsibility duplicated, none orphaned; both cross-layer in authority).
- *Constitutional:* #91 (Ground is subordinate to constitutional truth).

---

## 5. Primitive candidates versus compact survivor language

The distinction you asked me to preserve is this.

- A **Primitive Requirement Candidate** is a Finding whose *obligation* is original. All 19 lie in #1–#100.
- A **CONSOLIDATION SURVIVOR** is a Finding whose *wording* is the best compact expression of several parents. It adds no obligation. 49 are marked, all at #503 or later, and 13 of them are themselves classed as duplicates.

The two sets do not overlap. Survivors are sources of language for the eventual Requirements and framework documents; primitives are sources of obligation. A consolidated Requirement will often take its obligation from a primitive and its sentence from a survivor. For example, the obligation of #12 is best worded by #1278 or #1588, and the obligation of #15 by #526, #1336 and #2063.

**The 49 survivors, grouped by what they express.**

*What the layer is.*
- #574: Ground exists where exact Survey reference and authoritative membership are joined.
- #1247: Ground does exactly what Survey cannot do without becoming World-aware, and exactly what interpretation should not have to do because World-space must already exist.
- #1278: Ground adds the World-membership dimension of meaning and leaves the mathematical identity of Survey reference unchanged.
- #2050: Ground holds no simulated or representational universe of its own; it is the exact bridge.
- #1799: the purpose of Ground is that independent systems referring to the same place are in fact referring to the same place.
- #1999: exact about what must never be ambiguous, deliberately silent about what future architecture should stay free to answer.

*Membership itself.*
- #526 (no guessing), #647 (falsifiable), #1336 (a system's not knowing is never the World's indeterminacy), #1071 (non-World-space defined relationally), #1083 (canonical outcome versus operational response), #1169 (a mixed area is never a third membership state), #2063 (a closed membership vocabulary), #1850 (membership is uniform across World-space), #1190 (membership under precision expansion follows the established definition).

*Single truth and authority within the definition.*
- #541 (a derived value that disagrees is the one that is wrong), #800 (one exact/derived divide), #1431 (it is unmistakable which artifact or rule ultimately determines World-space), #557 (semantic identity is not artifact identity), #1911 (replication is safe, duplicated normative logic is not).

*Contracts and layers.*
- #734 (clean dependency contract), #737 (the minimum upward guarantee: exact, stable, deterministically resolvable, tied to Survey reference), #1413 (higher architecture adapts to Ground), #828 and #1894 (truth and responsibility at the lowest layer that correctly owns them), #1870 (coincidence is not identity), #1319 (mathematical closure), #1588 (dependency is not incompleteness), #1627 (four dependency classes), #1995 (operational dependency is not canonical dependency).

*Permanence, recovery and change.*
- #600 (no recurring act keeps World-space in existence), #999 (stronger than memory), #542 (reconstruction closure), #656 (recovery restores meaning, not files), #1585 (reconstruction-complete), #1711 (recovery order), #1551 (correction is not foundational change), #1619 (correction scope explicit), #2097 (reconstruction is not re-founding), #1611 (one canon during dispute).

*Adoption and governance.*
- #503 (correctness is not adoption), #1740 (institutional authority is for adoption, not computation).

*Method and proof.*
- #874 (minimal sufficient complexity), #928 (end-to-end audit chain), #949 (finite testing supplemented by formal invariants).

*Self-consolidating lists.* Six survivors head lists in which the corpus consolidated itself:
- #875 with #876–#883: eight canonical invariants.
- #1008 with #1007, #1009–#1011: five admission tests (removal, upward placement, downward placement, derivation, permanence).
- #1379 with #1380–#1385: the archive manifest.
- #1486 with #1487–#1490: the migration-proof checklist, which mirrors the invariant list.
- The loss-testing programme, #1563–#1581 (not a single survivor, but a complete list).
- The model-selection checklist, #1216–#1277 (duplicative by design; useful as a traceability target).

---

## 6. Derivation structure

**The 35 clusters.**

| Cluster | Findings |
|---|---|
| Operational Non-Authority | 162 |
| Inquiry Method and Framework Sequencing | 141 |
| Minimality and Semantic Restraint | 135 |
| Change Control and Permanence | 119 |
| Preservation and Archival Survival | 98 |
| Higher-Layer Independence | 92 |
| Representation Independence | 90 |
| Interpretation Independence | 87 |
| Canonical Equivalence | 75 |
| Exact Membership and Boundary Resolution | 71 |
| Institutional Authority and Adoption | 69 |
| Upward Handoff | 68 |
| Technology and Infrastructure Independence | 62 |
| Testing and Adversarial Review | 62 |
| No Hidden State / Self-Containment | 61 |
| Single Canonical Truth | 60 |
| Layer Boundaries | 58 |
| Reconstruction and Recoverability | 57 |
| Independent Implementation | 53 |
| Terminology Discipline | 53 |
| Conformance and Validation | 52 |
| Failure Semantics | 49 |
| Survey Dependency / Downward Contract | 48 |
| Historical Traceability | 38 |
| Finite Expressibility and Determinism | 34 |
| Rights / Governance Independence | 33 |
| Runtime Independence | 26 |
| Parcel Independence | 25 |
| Precision and Refinement | 25 |
| Core World-Space Membership | 20 |
| Survey-to-World Relationship | 20 |
| Connectedness and Topology | 17 |
| Canonical Placement | 15 |
| Constitutional Subordination | 15 |
| One World / Singular World-Space | 10 |

The clusters closest to the layer's actual content (Core Membership, Survey-to-World, One World, Placement, Topology) are the smallest. The largest concern what Ground is *not* and how it is *kept*.

**Root parents.** Counting the first-named parent in each rationale (available from about Batch 5, so indicative): #4 about 228; #19 about 157; #20 about 111; #8 and #29 about 79 each; #695 about 69; #27 about 65; #15 about 55; #26 about 49; #81 about 47; #58 about 43; #12 about 31; #147 about 26. Eleven Findings account for roughly a thousand derivations. #4 alone carries more than a tenth of the corpus, which is a reason to consider separating its two ideas (permanence; independence from later creations) before consolidation.

**Three tiers of property.** The corpus distinguishes, without ever saying so in one place:
- *Pointwise properties* of membership: exact, total, two-valued, deterministic, decidable in finite computation (#15, #28, #1339–#1342), uniform (#1850).
- *World-level invariants*, which cannot be verified point by point (#821): one-World coherence (#21) and connectedness (#22). Both have upstream authority.
- *Definition-level constraints*, which are facts about whatever defines World-space and not about The World: a uniform limit convention (#1181), non-forkability (#1270), explicit component precedence (#1308), mathematical closure (#1319), unique primary authority (#1431), one direction of derivation (#1432), finite derivation chains (#1435), and a closed membership vocabulary (#2063). This family emerged only in Batches 12–21 and would form a compact section of its own.

---

## 7. Framework migrations

305 Findings are recommended to leave the Requirements pool for a downstream framework, and 12 more are kept as historical reasoning only. IDs below are by primary classification; ranges are inclusive.

**Conformance / Validation (85).** #60–#62, #64–#66, #85, #86, #118–#120, #191–#199, #251–#254, #257, #306, #448, #515–#521, #524, #598, #619, #626, #633, #637, #638, #640–#645, #819, #821, #837, #901, #902, #906, #922, #924, #933, #934, #947–#949, #951, #952, #960, #963, #968, #1083, #1297, #1396, #1442, #1446, #1486, #1558, #1563, #1564, #1570, #1571, #1573, #1575, #1577, #1579, #1581, #1617, #1625, #1632, #2073.
Anchors: validatability (#64), equivalence (#65), failure conditions (#66), adversarial testing (#85), the mandatory core (#86), global tests (#821), the three-tier outcome model (#1083), difference and continuity analysis (#1297, #1396), migration proofs (#1486), loss testing (#1563–#1581).

**Institutional / Governance (83 classified; 81 by disposition, since #91 is retained and #94 merges).** #91, #94, #130, #132–#134, #140, #142, #154, #155, #219, #266, #267, #291–#294, #296–#299, #351, #354, #391, #392, #395, #398, #401–#403, #405, #407, #408, #414, #421, #426, #429–#431, #451, #503, #504, #550, #554, #671, #672, #675, #677, #682, #686, #689, #695, #698, #706, #726, #729, #863, #929, #935, #945, #965, #1008, #1009, #1254, #1255, #1305, #1450, #1483, #1484, #1551, #1552, #1555, #1605, #1606, #1608, #1611, #1615, #1618, #1619, #1621, #1737, #1740, #1891.
Anchors: candidate and adopted states (#154, #155), correctness is not adoption (#503), change control (#395, #682, #683), the governed route for scope change (#267), model selection (#695), the correction lifecycle (#1551–#1621), adoption not computation (#1740).

**Specification (59).** #18, #48, #116, #117, #157, #215–#217, #232, #233, #258, #368, #378, #382, #384–#389, #478, #581, #582, #586, #610, #612–#615, #620, #705, #717, #731, #839, #841, #842, #844, #845, #875, #1081, #1082, #1105, #1110, #1111, #1113, #1115, #1144–#1146, #1177, #1183, #1308, #1313, #1315, #1430, #1443, #1530, #1627, #2046.

**Preservation / Reconstruction (35).** #44, #69, #83, #84, #126, #128, #147, #206, #210, #390, #458, #466, #538, #577, #578, #657, #661, #663, #730, #961, #1346, #1351, #1352, #1355, #1369, #1378–#1384, #1475, #1495, #1711.

**Terminology / Documentation (31).** #149, #151, #225, #399, #469–#476, #479, #480, #551, #561, #703, #832, #1053, #1060, #1063, #1066–#1069, #1459, #1465, #1476, #1477, #1521, #1523.

**Implementation / Operations (14).** #63, #122, #123, #346, #366, #532, #534, #593, #654, #796, #810, #862, #970, #1123.

**Historical Reasoning Only (12).** #200, #277, #278, #295, #411, #419, #513, #894, #973, #1013, #1372, #1401.

**FRAMEWORK MIRROR (69 marked).** A mirror carries an architectural obligation into a downstream framework while remaining traceable to its parent. By destination: Conformance and testing 32; Preservation 12; Specification 9; Governance 5; Terminology 4; others 7. The marker began at #404, so earlier mirrors are unmarked.

**The hook problem, open since Batch 1.** Your own rule is that Conformance may not originate obligations. Several conformance anchors (#64, #65, #66, #86) have no primitive parent that states the obligation at Requirements level. Either a thin Requirements-level hook is written for each (validatable; equivalence decidable; failure defined), or they are shown to follow from #15, #26, #27 and #28. #1339–#1342 ("decidable") may be the hook language.

**Methodological principles (220 rows marked).** These govern how the corpus is consolidated or how a model is selected, not how the layer behaves. The largest block is the model-selection checklist of Batch 13. Those rows were classed as instances of #695 and not as mirrors, because a criterion list regenerates itself from the Requirements once the Requirements exist.

---

## 8. Change: four classes and a lifecycle

The corpus never enumerates these in one place. Its own change lists (#395, #683) predate most of the distinctions and cover only part of them.

| Class | What changes | Key Findings | Owner named? |
|---|---|---|---|
| **Record** | How Ground is written, encoded, validated or implemented | #29, #133–#135, #1551, #1552, #1619 (sub-classes: documentation, encoding, validation, implementation) | No (the adopter, by implication) |
| **Scope** | What Ground is responsible for ("downward promotion") | #266, #267, #1003, #1150, #1450, #1593, #1891, #1893, #1966 | No; #1966 routes it through ordinary adoption |
| **Model** | The formal model that expresses World-space | #1482–#1484, #2039 | No |
| **World-space truth** | Which Survey space belongs to The World | #424–#438, #856, #863, #1397–#1400, #1543, #1598, #1599, #2097 | No: the FOUNDATIONAL AUTHORITY GAP |

Distinctions drawn between neighbors: correction is not foundational change (#1551, the line I recorded as undrawn in Batch 5); revision is not replacement (#1482); growth in meaning is not growth in extent (#1595); reconstruction is not re-founding (#2097); reset is not re-adoption (#2089); reconsideration is not reopening (#1608); adoption is not activation (#1977).

**The correction lifecycle, assembled from Batches 16, 17 and 20.** Candidate and adopted states (#1612); standard of proof, that the prior artifact failed to express already-established truth (#1552); burden of proof on the proposer (#1606); isolation of the defect (#1615, #1616); impact analysis where a shared rule is involved (#1617, #1622); correction bounded to what is proven wrong (#1618); declared class (#1619); neither over- nor under-correction (#1620, #1621); one canon throughout (#1611, #1613, #1614); error history preserved and corrected readings findable (#1554–#1556); compatibility never perpetuates an old error (#1968). Every step presumes a decider.

**Terminology hazard.** "Expansion" is used in three senses: enlargement of Ground's responsibility (#1003, #1593), derived materialization (#1292), and geographic extension of World-space (#1597, #1598). The first and third are foundational and opposite in kind.

---

## 9. Authority

**Upstream authority.** 138 rows carry the AUTHORITY: marker (a floor, since it began in Batch 2). By source, with overlap: the Foundational Survey Fabric about 79; constitutional sources generally about 19; The Declaration about 10; The Codex about 7; cross-layer architecture about 14; The Atlas 2; The Chronicle 1. Named bodies outside Ground: the Foundational Survey Fabric, The Declaration, The Codex, World Properties, The Atlas, The Chronicle, the Journal, Origins, the Parcel Cadastre and General Spatial Interpretation.

**What each party supplies**, as the corpus comes to describe it (#1627, #1740, #1931): constitutional and institutional sources supply authority and adoption; FSF supplies reference, mathematics, precision and the Domain; Ground supplies membership; implementations supply nothing normative.

**The ADOPTION AUTHORITY GAP.** 41 rows carry an AUTHORITY GAP marker other than the foundational one; many more presume an adopter without being marked. The corpus insists that adoption be explicit and traceable (#503–#507), defines precisely what the adopter may do (#1740: decide which definition, never what it means), and gives the adopter candidate/adopted states, a standard of proof and a burden of proof. It names no adopter. The nearest it comes is "the authority of the original Creator-period institution" (#1688) and "institutions" (#1740). By #1966, scope changes run through the same adopter. Other unnamed actors that may be the same body: whoever certifies maturity (#645), resolves conflicting copies (#661), weighs evidence for a correction (#1552, #1612), and confers "stewardship legitimacy" (#1920).

**The FOUNDATIONAL AUTHORITY GAP.** 32 rows: #424, #430, #431, #438, #673, #683, #684, #853, #856, #863, #1026, #1038, #1397–#1400, #1484, #1543, #1546, #1551, #1553, #1598, #1599, #1606, #1607, #1619, #1621, #1744, #1753, #1779, #1924, #2097. These Findings allow that a true change to established World-space is conceivable. They say it must be distinguished from correction, detectable in both directions, located exactly, explained by its spatial consequence, never disguised, atomic (#863), extraordinary, and almost never necessary. They never say who may perform it. This sits in unresolved tension with #4, which makes membership permanent.

---

## 10. The Ground-native question, and #1276

#1627 classifies normative dependencies as constitutional, Survey-derived, Ground-native or implementation-only. After 2,100 Findings:
- *Implementation-only* is well populated by exclusion (#1719–#1728, #1995).
- *Survey-derived* holds coordinates, geometry, measures, scale, precision, refinement, adjacency and reference equality (#12, #24, #1810, #1938, #2044, #2048).
- *Constitutional* holds One World, connectedness or continuity, World Extent, and scarcity.
- *Ground-native* holds membership, described in #2046 as the one "dimensionless classification." Nothing else is ever named. #1321 allows Ground-specific mathematics "narrowly"; #2042 speaks of "Ground mathematics" and names none; #1932 mentions "relational semantics established by Ground" and does not say what they are.

On that evidence #1321's allowance may be empty in practice, and the exception clause in **#1276** ("unless strictly necessary") unnecessary. Six Findings stand against that clause (#576, #1320, #1588, #1911, #2048, and #12 itself); none defends it. This is an inference from absence, and **#1276 remains flagged for your decision.**

---

## 11. Unresolved architectural questions (preserved, not resolved)

For each item: the question, the evidence on each side, and what remains undecided.

**#97. May World-space contain holes or enclosed non-World-space?** The only Finding classed as unresolved in Batch 1. #22 requires connectedness; #96 says connectedness implies nothing further; #1054 says metaphor ("continent") must not become a geometric constraint; #1209 says a topological requirement selects no geometric form. Nothing answers the question. #98 quietly depends on it.

**#165. Survey capacity must meet World need.** Its first clause places an obligation on FSF from above. #1193–#1195 state the converse properly (Ground cannot exceed Survey precision). Whether #165 survives as a recorded dependency assumption is undecided.

**#245. Does refinement "reveal" a limit that was not fully exact before?** Against that reading: #866, #1186, #1190 (newly representable locations take membership from the established definition), #1223, #1265. For it: only the wording of #245 and its echo in #1168. The evidence leans clearly toward refinement as evaluation of already-established truth. Not decided.

**#259. Is an empty World-space expression representable?** No later Finding bears on it. The existence of The World is constitutional.

**#260. May World-space equal the entire Survey Domain?** #13 says subset, not proper subset. #1151 keeps the two limits conceptually distinct, #1153 says whether World-space reaches the Domain limit is never presumed, #1154 requires no margin, #1236 preserves non-identity "even if their mathematical extents happen to align." Two objections are removed; permission is not granted.

**#645. Is one independent implementation a standing Requirement or establishment evidence?** Every later Finding that touches it (#1242, #1567, #1568) treats it as a pre-establishment criterion, and #1242 in a weaker form ("independent implementation reasoning"). None treats it as a Requirement on the layer. Not decided; also an ADOPTION gap, since someone must certify.

**#661. What decides between conflicting copies?** The structure the corpus reaches: adopted authority selects the record (#1740, #1434, #1603); formal semantics give its meaning (#1740); the established canon prevails over any pending proposal (#1611); provenance and integrity are evidence about a record, below authority (#1982); semantic agreement outranks byte agreement (#1540, #1694); explicit rules prevail over inferred convention (#2013) and the Specification over legacy behavior (#1967); control, possession, hosting, majority, consensus and convenience decide nothing (#662, #1754, #1755, #1762, #1918–#1920, #1963, #1964). #1762 restates #661's four criteria in a different order, so list order was never precedence. **Still unsaid:** provenance against integrity, and what decides between two records of equal authority.

**#707 / #708. Which prevails, human-readable or machine-readable canon?** Disagreement must be detected (#707, #1373) and neither form may silently override the other (#708). #705 says machine-readable canon is needed where prose cannot remove ambiguity; #1582 treats structured artifacts as regenerable from the Specification; #1909 says one truth should not live in several independently authoritative forms; #1431 requires one declared primary. Together these point toward one normative form with the other derived, and toward labeling each artifact as one or the other. The corpus never says which form is primary.

**#785. How does the exact limit relate to BitPangea's recognizable outline?** The corpus is now consistent: higher layers may render, name and characterize the limit, subordinate to it (#1423); spatial form and visual form are different responsibilities (#1654); even a canonical rendering would express Ground and not source it (#1658); coincidence is not identity (#1869–#1875); and, most directly, the visually perceived edge "may differ from" the exact membership transition (#2021), while an experience may omit, simplify, exaggerate or symbolize (#2025). #2023 leaves coincidence possible where an irregularity is "explicitly part of the adopted defining geometry." So non-coincidence is permitted and coincidence is available by adoption. **Still unsaid:** whether BitPangea intends them to coincide, and whether "continent" carries any geometric weight (#1054 says metaphor must not; #97 is the same question from the other side).

**A question raised in the audit and never addressed by the corpus:** whether point-versus-extent semantics (#1111–#1115, #1169, #1176, #1177, #1814, #1815) belong in Ground's own contract or are derived above it. Every Finding before #1111 treats membership as a question about a location, and the model-selection checklist never mentions extents.

---

## 12. Flagged Findings

**#55 (LOW; the only LOW in the corpus).** It has Ground defining eligibility for higher spatial meaning. Eight later Findings put eligibility above Ground: #1158, #1159, #1160, #1856, #1858, #1943, #1944, and #1279. The corpus appears to have corrected it. Reconsideration is yours.

**#1276.** See §10.

**#1652 (MEDIUM).** A description of World Extent never supersedes the membership definition. As a rule about Ground's own derived descriptions this is #541 applied to extent, and #1792 and #2034 support that narrow reading. If "description" meant the constitutional statement of Extent (#93, #475), it would run against constitutional subordination (#91). The Finding does not say which.

**#1321 and #1932 (both MEDIUM).** The two places where Ground is allowed something of its own beyond membership, neither with content. See §10.

---

## 13. Contradictions and tensions preserved

None of these is resolved here. Several are differences of emphasis that consolidation must nonetheless choose between.

1. **"Establishes" versus "expresses."** #1 has Ground establish which space participates; #2 says "recognized"; #93 and #2034 say extent precedes its architectural expression and that recognizing a constitutional truth is not creating it.
2. **Permanence versus conceivable change.** #4 makes membership permanent; 32 Findings contemplate a foundational change (§9).
3. **No duplication versus "unless strictly necessary."** #12, #576, #1320, #1588, #1911, #2048 against #1276; and #24 (Ground owns no geometry mathematics) against #1321 (Ground may define some mathematics narrowly).
4. **Boundary as consequence versus boundary as basis.** #17 treats the limit as a consequence of the definition; #1430 allows stored boundary geometry to be the normative basis. #1431 requires only that one be declared primary.
5. **The limit is not an entity, yet must be referenceable.** #1427 against #1876.
6. **Human comprehensibility versus machine exactness.** #69 against #70; #705 against #1582; and open question #707/#708.
7. **Generality versus one instance.** #551–#552 (a general rule set) against #553, #1312, #1313 and #2075 (one production World, BitPangea-specific constraints permitted).
8. **Eligibility.** #55 against the eight Findings in §12.
9. **Extent description versus constitutional Extent.** #1652 against #91, #93, #475.
10. **Independent implementation: Requirement or evidence, and at which strength.** #645 against #1242.
11. **Primitive or upstream.** #21 and #22 are classed primitive, while #92 and #829 place their authority in The Declaration and the constitutional layer.
12. **Requirement or rule about Requirements.** #10 and #58.
13. **Conformance cannot originate obligations,** yet #64–#66 and #86 have no Requirements-level parent (§7).
14. **Points or extents.** §11, last item.
15. **"Reveal" versus "evaluate."** #245 and #1168 against #1190 and #1265.
16. **"Continuous truth" without a chosen model.** #1126 and #1198 presume continuity; whether canonical space is continuous is FSF's to say, and no model is chosen.
17. **Legibility.** #2055 allows canonical relationships no person can visualize; #69 requires long-term human comprehensibility. These reconcile if #69 concerns rules and #2055 shapes, which neither says.

**Terminology hazards** that produce apparent contradictions: "expansion" (three senses, §8); "continuity" (temporal persistence in #7, spatial connectedness in #22); "canonical place" (whose identity may be FSF's, #72, #73); "boundary", "limit" and "edge"; "Extent"; "adopted"; "state" (of a record, or of Ground, #1346).

---

## 14. Failure modes and capture routes recorded

**Structural capture**, by which Ground could be altered without anyone changing it, and which would leave no trace in the records: institutional capture (#1048); semantic capture (#1049); metaphor becoming geometric constraint (#1054); hidden proto-parcels (#1135); assumption creep and dependency capture (#1411, #1412); external ontology capture (#1520); deferred questions returning as hidden assumptions (#2004); environment drift (#2077).

**Operational and record failures:** partition seams (#817); software rollback reverting canon (#858); intermediate migration states as conflicting canon (#862); domain transfer enabling false canon (#983); network partition producing a legitimate rival (#986); accidental alias creation (#1107); pre-filter falsehoods (#1123); a local boundary exception altering membership elsewhere (#1183); refinement artifacts taken for the limit (#1186); recursive institutional dependency (#1345); false reconstruction (#1388); mutual validation loops (#1433); review states leaking into membership (#1614); dependency drift (#1629); under-correction (#1621).

**Failure classification:** by layer (#306), by cause (#1558: specification ambiguity, implementation defect, corrupted artifact, migration failure, institutional error), and the three-tier outcome model (#1081–#1083: valid Survey reference? → World or non-World → operational response).

---

## 15. Layer-discipline concerns

- **Designing the layer above from below:** #55; and Findings titled as rules for higher architecture (#1413, #1422, #1423), whose content is sound but is better stated from Ground's side.
- **Obligations placed on FSF from above:** #165; and reliance on FSF promises Ground cannot make: reference evolution and translation (#1495), "compatible lineage" (#1382, #1628), reference equality and normalization (#1105–#1110, #1810).
- **Cross-layer principles** that belong to a shared architectural charter and not to Ground: #264, #265, #828, #1639, #1894, and the question of whether Ground remains a separate layer at all (#1450).
- **Model talk inside Requirements-level Findings:** set algebra (#1144–#1146), model families (#1211), "continuous" (#1126, #1198). All are properly conditional; none chooses a model.
- **Specification-flavored clauses inside primitives:** #16, #28.

---

## 16. What this report does not do

It drafts no Requirements, chooses no formal model, resolves none of the questions in §11, closes no authority gap, and renumbers nothing. Where the evidence leans, it says which way and stops.

**A suggested order for what follows**, offered as sequence only:
1. Decide the reserved questions that block wording: #785 with #97; #245; #260 with #259; #1652; the verb in #1 against #93.
2. Decide the two unowned authorities (adoption, including scope; foundational change) or record that they are deliberately left to a later institution.
3. Decide #1276 with #1321 and #1932, which is one decision: what, if anything, is Ground-native beyond membership.
4. Decide #55, #645, #661 and #707/#708.
5. Only then consolidate: obligations from the 19 primitives and 15 other retained Findings; wording from the 49 survivors; the definition-level family as its own section; the 305 migrations into framework registers with their mirrors traced; the hook problem of §7 settled first.
6. Build the glossary early. Several tensions in §13 are partly terminological.
