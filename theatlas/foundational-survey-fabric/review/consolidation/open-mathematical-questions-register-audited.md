# BitPangea — Foundational Survey Fabric

## Open Mathematical Questions Register

### Day #115 Working Consolidation Record

**Date:** September 19, 2026  
**Status:** Working Review Record — Open Questions Consolidated, Not Resolved  
**Institutional Role:** Internal Foundational Survey Fabric closeout record. This register does not create a new Architecture domain, Specification section, Requirement, or canonical mathematical rule.

---

## Purpose

The Foundational Survey Fabric Requirements Framework establishes the architectural envelope within which the final Survey mathematics must operate.

The Specification translates that envelope into the formal mathematical questions that must eventually be answered.

This register consolidates the mathematical choices that remain deliberately unresolved so that no open decision disappears between the Requirements, Specification, Conformance, and Reference Vector records.

The register does **not** choose the mathematics.

It records what remains to be chosen.

The governing sequence remains:

**Requirements establish governing constraints. Specification converts accepted requirements into normative formal rules. Conformance proves that an implementation follows those rules. Reference Vectors provide canonical examples and test cases proving expected results.**

The current Foundational Survey Fabric standing remains:

**FOUNDATIONAL SURVEY FABRIC — INSTITUTIONALLY ESTABLISHED / MATHEMATICS DELIBERATELY UNRESOLVED**

and:

**READY TO SUPPORT SPATIAL GROUND INQUIRY — NOT YET READY FOR MATHEMATICAL IMPLEMENTATION**

---

# Register Conventions

Each register entry records:

- **Open Question** — the unresolved mathematical or formal-design decision
- **Established Constraint** — what the existing Requirements / Specification already require
- **Must Not Be Assumed** — choices that may not be smuggled into the architecture before formal adoption
- **Downstream Dependency** — later Specification, Conformance, Reference Vector, or higher-Architecture work that depends on resolution
- **Resolution Gate** — the minimum condition required before the item can be considered resolved

All entries remain **OPEN** unless explicitly changed through later formal mathematical design and review.

---

# I. Survey Domain and Ground Model

## OMQ-01 — Exact Survey Domain Geometry

**Status:** OPEN

**Open Question:** What exact mathematical geometry defines the finite canonical Survey Domain?

**Established Constraint:** The Survey Domain must be finite, two-dimensional, planar, connected, internally coherent, semantically neutral, and capable of representing every authoritative World-space location.

**Must Not Be Assumed:** Rectangle, square, circle, polygon, lattice-bounded region, World-shaped domain, or any other specific geometry.

**Downstream Dependency:** Domain limits, coordinate representation, canonical addressing, boundary validity, Reference Vector limit cases.

**Resolution Gate:** A formally defined domain geometry must satisfy the complete Requirements Framework without redefining World membership or higher-layer World Form.

## OMQ-02 — Numerical Survey Domain Dimensions

**Status:** OPEN

**Open Question:** What exact numerical dimensions, magnitudes, or parameter values define the finite Survey Domain?

**Established Constraint:** The domain must possess exact mathematically defined limits.

**Must Not Be Assumed:** Any width, height, aspect ratio, Pang count, coordinate range, or maximum magnitude.

**Downstream Dependency:** Origin placement, domain-limit vectors, addressing range, coordinate encoding, implementation bounds.

**Resolution Gate:** Exact dimensions or equivalent formal limit parameters must be defined in the governing mathematics.

## OMQ-03 — Survey Domain Boundary Representation

**Status:** OPEN

**Open Question:** How are the exact limits of the Survey Domain represented mathematically?

**Established Constraint:** Valid canonical Survey reference must terminate deterministically at exact domain limits. Those limits are not BitPangea’s World Boundary, Extent expression, Verge, coastline, or Exterior.

**Must Not Be Assumed:** Closed versus open intervals, inclusive versus exclusive terminal coordinates, polygonal edge encoding, or any specific boundary syntax.

**Downstream Dependency:** Validity rules, endpoint semantics, boundary inclusion, out-of-domain rejection, Survey Domain Limit Vectors.

**Resolution Gate:** Every conforming implementation must be able to determine identically whether a candidate reference lies inside, on, or outside the valid Survey Domain.

## OMQ-04 — Exact Ground Coordinate Mathematics

**Status:** OPEN

**Open Question:** What formal coordinate mathematics expresses canonical position on the two-dimensional planar Survey ground?

**Established Constraint:** All authoritative BitPangea spatial location must resolve to one global canonical frame and exact Survey mathematics.

**Must Not Be Assumed:** Cartesian coordinates, integer pairs, rational pairs, hierarchical cells, barycentric coordinates, complex numbers, or another representation.

**Downstream Dependency:** Frame, addressing, precision, geometry, operations, serialization, exact equivalence.

**Resolution Gate:** The representation must support exact deterministic canonical interpretation, finite authoritative expressions, extensible precision, and independent implementation.

---

# II. Canonical Frame, Pang, and Orientation

## OMQ-05 — Exact Canonical Origin Placement

**Status:** OPEN

**Open Question:** Where exactly is the one permanent canonical origin placed within the Survey Domain?

**Established Constraint:** There must be one permanent zero-reference serving mathematical reference only. It carries no civic, geographic, economic, cultural, or symbolic privilege.

**Must Not Be Assumed:** Domain center, World center, centroid, corner, Parcel location, Genesis Parcel, or any culturally meaningful location.

**Downstream Dependency:** Coordinates, orientation, addressing, transformations, Survey Domain Limit Vectors.

**Resolution Gate:** The origin must be formally defined by the governing mathematics and remain permanent under compatible Specification evolution.

## OMQ-06 — Exact Global Coordinate Representation

**Status:** OPEN

**Open Question:** How is the one global canonical coordinate frame formally represented?

**Established Constraint:** The frame must combine the permanent origin, canonical orientation, Pang scale, and exact reference mathematics into one authoritative global spatial frame.

**Must Not Be Assumed:** Any particular axis labels, coordinate tuple structure, sign convention, encoding, or numbering system.

**Downstream Dependency:** Addressing, transformations, measurement, normalization, serialization.

**Resolution Gate:** Every authoritative reference must resolve exactly and reproducibly to the same frame across independent implementations.

## OMQ-07 — Canonical Handedness

**Status:** OPEN

**Open Question:** Which permanent handedness governs the canonical two-dimensional frame?

**Established Constraint:** There must be exactly one canonical handedness. Mirrored or reversed views may exist only as derived transformations.

**Must Not Be Assumed:** Right-handed or left-handed orientation.

**Downstream Dependency:** Rotation, angular interpretation, transformation matrices or equivalent rules, Orientation Vectors.

**Resolution Gate:** One handedness must be formally selected and integrated consistently across direction, rotation, geometry, and transformation rules.

## OMQ-08 — Positive Rotational Convention

**Status:** OPEN

**Open Question:** Which direction of rotation is mathematically positive in the canonical frame?

**Established Constraint:** The Survey Fabric must use one singular permanent mathematical rotational orientation.

**Must Not Be Assumed:** Clockwise-positive or counterclockwise-positive.

**Downstream Dependency:** Angular system, transformation composition, orientation vectors, canonical rotation.

**Resolution Gate:** The convention must be formally specified and produce identical results across conforming implementations.

## OMQ-09 — Canonical Angular Unit and Notation

**Status:** OPEN

**Open Question:** What exact canonical angular unit and notation represent orientation and rotation?

**Established Constraint:** There must be one exact canonical angular system relative to Pankor, Panvath, Panoris, and Panvel.

**Must Not Be Assumed:** Degrees, radians, turns, gradians, headings, or a BitPangea-native unit.

**Downstream Dependency:** Rotation, orientation, transformations, serialization, Orientation Vectors.

**Resolution Gate:** The chosen angular system must be exact, deterministic, implementation-independent, and exactly translatable into permitted higher-layer presentation conventions.

## OMQ-10 — Formal Relationship of Native Directions to the Mathematical Frame

**Status:** OPEN

**Open Question:** How are Pankor, Panvath, Panoris, and Panvel encoded formally within the canonical frame and angular system?

**Established Constraint:** These four native directions are already required as canonical directional terminology and must remain exactly resolvable under the one global frame.

**Must Not Be Assumed:** Specific axis labels, sign conventions, angle values, storage codes, or serialization tokens.

**Downstream Dependency:** Coordinate semantics, rotation, orientation vectors, transformation rules.

**Resolution Gate:** The formal mathematics must map all four native directions exactly and permanently to the canonical frame.

---

# III. Measurement Mathematics

## OMQ-11 — Canonical Distance Mathematics

**Status:** OPEN

**Open Question:** What exact mathematical rule defines straight canonical spatial separation in Pangs?

**Established Constraint:** Canonical distance must be exact, geometric, uniform across the Survey Domain, and distinct from routing, traversal time, network distance, accessibility, or perceived distance.

**Must Not Be Assumed:** Euclidean formula, Manhattan distance, graph distance, geodesic distance, or another metric.

**Downstream Dependency:** Geometry, comparison, proximity, measurement operations, Pang Measurement Vectors.

**Resolution Gate:** The selected rule must satisfy the formal geometry and produce exact reproducible results for all valid canonical inputs.

## OMQ-12 — Canonical Area Mathematics

**Status:** OPEN

**Open Question:** What exact mathematical rule computes canonical area in square Pangs?

**Established Constraint:** Area must express exact canonical spatial measure and remain semantically independent of ownership, value, use, zoning, identity, or governance.

**Must Not Be Assumed:** Any specific integration method, polygon-area algorithm, raster counting, cell counting, or geometry-dependent shortcut.

**Downstream Dependency:** Extent geometry, composition, union/intersection/difference, Pang Measurement Vectors.

**Resolution Gate:** The formal geometry must support exact deterministic area for every valid area-bearing canonical expression.

## OMQ-13 — Canonical Path and Boundary Length Mathematics

**Status:** OPEN

**Open Question:** What exact mathematical rule measures paths, lines, boundaries, curves, and other line-like expressions?

**Established Constraint:** Canonical length must remain distinct from straight spatial separation.

**Must Not Be Assumed:** Piecewise Euclidean length, graph-edge summation, spline length, discretized approximation, or any specific curve metric.

**Downstream Dependency:** Line/curve representation, boundaries, geometry operations, Pang Measurement Vectors.

**Resolution Gate:** The chosen geometry must permit exact finite length evaluation for the canonical line-like expressions it recognizes.

## OMQ-14 — Address-to-Measure Formal Relationship

**Status:** OPEN

**Open Question:** What formal mathematical relationship guarantees exact agreement between canonical Survey references and Pang-based position, distance, area, and extent?

**Established Constraint:** Authoritative address and authoritative measurement must resolve to one canonical spatial truth.

**Must Not Be Assumed:** Direct Pang coordinates, hierarchical addressing, symbolic subdivision, or exact coordinate extension.

**Downstream Dependency:** Address interpretation, measurement, normalization, equivalence, reference vectors.

**Resolution Gate:** A conforming implementation must be able to derive identical spatial meaning from canonical reference and canonical measurement expressions without lookup-dependent semantics.

---

# IV. Addressing and Precision

## OMQ-15 — Canonical Address Syntax

**Status:** OPEN

**Open Question:** What exact syntax constitutes a canonical Survey address?

**Established Constraint:** Addresses must be finite, deterministic, permanent in meaning, self-resolving under the Specification, and independent of higher-layer objects.

**Must Not Be Assumed:** Coordinate strings, path-like addresses, hierarchical cells, opaque IDs, decimal notation, or any particular delimiter system.

**Downstream Dependency:** Parser, serialization, canonicalization, Addressing Vectors.

**Resolution Gate:** The syntax must be formally specified and independently resolvable from the reference plus the governing Specification.

## OMQ-16 — Canonical Address Grammar

**Status:** OPEN

**Open Question:** What formal grammar defines valid canonical Survey references?

**Established Constraint:** The grammar must contain sufficient mathematical structure to resolve spatial meaning directly and may not depend on an authoritative registry assigning meaning to opaque identifiers.

**Must Not Be Assumed:** Any specific grammar formalism, token hierarchy, segment count, or field structure.

**Downstream Dependency:** Validation, parsing, canonicalization, machine-readable interchange.

**Resolution Gate:** The grammar must support deterministic parsing, exact interpretation, normalization, and rejection of malformed or ambiguous expressions.

## OMQ-17 — Address Encoding Alphabet

**Status:** OPEN

**Open Question:** What character, symbol, numeric, binary, or other encoding alphabet is used by canonical address expressions?

**Established Constraint:** Encoding must preserve deterministic exact meaning and remain separable from spatial identity itself.

**Must Not Be Assumed:** Decimal digits, hexadecimal, base32, base58, Unicode symbols, binary fields, or a custom alphabet.

**Downstream Dependency:** Human-readable form, parser design, serialization, durability.

**Resolution Gate:** The chosen alphabet or encoding must be unambiguous, durable, finite, and exactly normalizable.

## OMQ-18 — Coordinate-Based vs. Hierarchical vs. Other Address Representation

**Status:** OPEN

**Open Question:** Does canonical addressing use direct coordinates, hierarchical refinement, symbolic subdivision, exact coordinate extension, or another exact mechanism?

**Established Constraint:** Greater precision must extend established reference rather than renumber, relocate, reinterpret, or invalidate it.

**Must Not Be Assumed:** A quadtree, hex hierarchy, decimal coordinate system, cell tree, or named level structure.

**Downstream Dependency:** Precision model, refinement, normalization, maximum precision policy, addressing vectors.

**Resolution Gate:** The chosen mechanism must satisfy precision-by-extension, permanent meaning, exact sub-Pang representation, and finite addressability.

## OMQ-19 — Exact Precision Mechanism

**Status:** OPEN

**Open Question:** How does the Survey Fabric represent canonical precision finer than one Pang?

**Established Constraint:** Sub-Pang positions, distances, and extents must be exactly representable through the canonical mathematics.

**Must Not Be Assumed:** Named subunits, decimal fractions, binary fractions, rational coordinates, hierarchical subdivision, or fixed precision levels.

**Downstream Dependency:** Addresses, measurement, geometry, operations, serialization, Precision Vectors.

**Resolution Gate:** The mechanism must permit deterministic exact extension of precision without changing earlier canonical meaning.

## OMQ-20 — Coarse-to-Fine Reference Relationship

**Status:** OPEN

**Open Question:** What exact mathematical relationship exists between a coarser canonical reference and a finer canonical reference?

**Established Constraint:** Greater precision must extend rather than migrate or replace canonical place.

**Must Not Be Assumed:** Parent/child cells, nested containment, prefix semantics, subdivision trees, or fixed level ratios.

**Downstream Dependency:** Normalization, precision conversion, refinement vectors, compatibility.

**Resolution Gate:** The Specification must define deterministic rules showing how added precision preserves the underlying place and how coarse/fine expressions relate canonically.

## OMQ-21 — Refinement or Subdivision Notation

**Status:** OPEN

**Open Question:** If the precision system uses refinement or subdivision, how is that refinement formally expressed?

**Established Constraint:** Any refinement must remain semantically neutral and may not impose civilizational or object-specific meaning on precision levels.

**Must Not Be Assumed:** Named levels, fixed-depth trees, domain sectors, Parcel-like cells, or visible grids.

**Downstream Dependency:** Address grammar, normalization, precision vectors, serialization.

**Resolution Gate:** Any adopted notation must be mathematically necessary, exact, finite, and compatible with extension without migration.

## OMQ-22 — Maximum Precision Policy

**Status:** OPEN

**Open Question:** Is there a formal maximum canonical precision, an implementation-independent finite bound, or another governed precision policy?

**Established Constraint:** Canonical references must be finite and exactly computable; the Survey Fabric is not required to assign finite addresses to every theoretical point of an unrestricted real-number continuum.

**Must Not Be Assumed:** Infinite precision, arbitrary-precision without limits, fixed decimal places, hardware-word limits, or display-resolution limits.

**Downstream Dependency:** Address validity, parser limits, storage/interchange rules, Precision Vectors.

**Resolution Gate:** The governing mathematics must define what counts as representable canonical precision independently of implementation convenience.

## OMQ-23 — Canonical Normalization Algorithm for Addresses

**Status:** OPEN

**Open Question:** How do mathematically equivalent valid address expressions normalize to one authoritative canonical reference?

**Established Constraint:** Normalization must preserve place exactly and must never silently snap, move, or reinterpret a location.

**Must Not Be Assumed:** Lexicographic formatting alone, rounding, truncation, nearest-cell snapping, or implementation-specific simplification.

**Downstream Dependency:** Address equivalence, serialization, validation, Normalization Vectors.

**Resolution Gate:** Equivalent expressions must converge deterministically to one canonical result across independent implementations.

---

# V. Spatial Expressions and Geometry

## OMQ-24 — Minimal Canonical Primitive Set

**Status:** OPEN

**Open Question:** What is the smallest practical set of canonical geometric primitives necessary to express permanent Survey truth?

**Established Constraint:** The primitive set must be minimal, exact, deterministic, and sufficient for required positions, extents, paths, boundaries, geometry, and operations.

**Must Not Be Assumed:** Point/line/polygon as the final set, raster cells, curves, meshes, topology objects, or entity classes.

**Downstream Dependency:** All geometry, operations, computability, serialization, Reference Vectors.

**Resolution Gate:** Every primitive must be justified by a requirement that cannot be represented without ambiguity or loss using the smaller set.

## OMQ-25 — Formal Representation of Canonical Position

**Status:** OPEN

**Open Question:** How is an exact canonical position represented mathematically?

**Established Constraint:** Position is a spatial expression, not an independently identified foundational entity.

**Must Not Be Assumed:** Point object identity, coordinate pair, grid cell center, vertex ID, or a stored database object.

**Downstream Dependency:** Addressing, geometry, transformations, measurement, serialization.

**Resolution Gate:** The representation must support exact canonical reference while remaining semantically neutral and non-object-like.

## OMQ-26 — Formal Representation of Canonical Extent

**Status:** OPEN

**Open Question:** How are exact spatial extents represented mathematically?

**Established Constraint:** Extents must use the same foundational reference system as position and must remain geometry rather than semantic entities.

**Must Not Be Assumed:** Only polygons, only rectangles, only cells, closed sets, open sets, or any one geometry class.

**Downstream Dependency:** Area, containment, overlap, union/intersection/difference, serialization.

**Resolution Gate:** The formal model must represent every extent needed by Survey-layer requirements exactly and finitely.

## OMQ-27 — Endpoint Semantics

**Status:** OPEN

**Open Question:** What exact conventions govern endpoints of paths, lines, boundaries, and other spatial expressions?

**Established Constraint:** All conforming implementations must interpret endpoint meaning identically.

**Must Not Be Assumed:** Closed, open, half-open, ordered, unordered, or implicit endpoint conventions.

**Downstream Dependency:** Intersection, continuity, boundary contact, length, equivalence.

**Resolution Gate:** Endpoint semantics must be formally explicit and deterministic for every recognized expression type.

## OMQ-28 — Boundary Inclusion and Shared-Edge Rules

**Status:** OPEN

**Open Question:** What exact rules determine inclusion, exclusion, contact, and shared boundaries among canonical extents?

**Established Constraint:** Geometry must meet deterministically without assigning Parcel, Region, ownership, or other higher-layer meaning.

**Must Not Be Assumed:** Topological conventions from GIS libraries, half-open tiling rules, epsilon tolerances, or Parcel-specific semantics.

**Downstream Dependency:** Touch, overlap, containment, intersection, adjacency-like geometric comparisons, Geometry Vectors.

**Resolution Gate:** Every boundary case must yield an exact implementation-independent result.

## OMQ-29 — Canonical Line and Curve Representation

**Status:** OPEN

**Open Question:** Which exact mathematical forms represent paths, lines, curves, and boundaries?

**Established Constraint:** Representations must support exact geometry, exact length where applicable, finite interpretation, and deterministic operations.

**Must Not Be Assumed:** Only straight segments, splines, Bézier curves, polylines, analytic curves, or sampled approximations.

**Downstream Dependency:** Length, intersections, transformations, extents, serialization.

**Resolution Gate:** The chosen representations must be exactly computable within the adopted finite canonical model.

## OMQ-30 — Spatial Predicate Algorithms

**Status:** OPEN

**Open Question:** What exact algorithms determine touch, intersection, overlap, containment, separation, shared boundary, connectedness, continuity, and related derived predicates?

**Established Constraint:** Predicates must be derived from exact canonical geometry and not stored as competing foundational truth.

**Must Not Be Assumed:** Floating-point tolerances, GIS-library defaults, approximate tests, or higher-layer semantic interpretations.

**Downstream Dependency:** Geometry Vectors, conflict detection, canonical comparison, conformance.

**Resolution Gate:** Each predicate must possess exact deterministic semantics and algorithmic evaluation under the final geometry.

## OMQ-31 — Transformation Mathematics and Notation

**Status:** OPEN

**Open Question:** How are translation, rotation, reflection, mirroring, scaling where permitted, inverse transformation, and composition expressed exactly?

**Established Constraint:** Transformations are derived constructions and must resolve exactly back to the unchanged canonical frame.

**Must Not Be Assumed:** Matrix representation, homogeneous coordinates, floating-point transforms, affine-only transforms, or arbitrary scaling semantics.

**Downstream Dependency:** Orientation, geometry, equivalence, Transformation Vectors.

**Resolution Gate:** All permitted transformations must be formally defined, exactly invertible where required, and unable to create alternate canonical truth.

## OMQ-32 — Canonical Geometric Equivalence Algorithm

**Status:** OPEN

**Open Question:** How is exact equivalence determined when different references, extents, compositions, or constructions represent the same canonical space?

**Established Constraint:** Equivalent space must normalize to one canonical meaning without implying equivalent higher-layer identity.

**Must Not Be Assumed:** String equality, tolerance comparison, shape hashing, normalized vertex order alone, or implementation-specific heuristics.

**Downstream Dependency:** Normalization, operations, serialization equivalence, Reference Vectors.

**Resolution Gate:** Independent implementations must return the same equivalence judgment and canonical result for the same valid inputs.

## OMQ-33 — Canonical Composition Rules

**Status:** OPEN

**Open Question:** What formal rules govern composition of valid spatial expressions into larger or more complex canonical extents?

**Established Constraint:** Composition must remain exact, deterministic, semantically neutral, and compatible with union, intersection, difference, normalization, and equivalence.

**Must Not Be Assumed:** Any specific polygon model, mesh model, topology graph, or collection semantics.

**Downstream Dependency:** Canonical operations, complex extents, serialization, pathological edge cases.

**Resolution Gate:** Composition must preserve exact spatial truth and produce deterministic canonical forms.

---

# VI. Canonical Operations

## OMQ-34 — Exact Composition Algorithms

**Status:** OPEN

**Open Question:** What exact algorithms implement canonical union, intersection, and difference?

**Established Constraint:** Operations must calculate spatial truth only and must not assign higher-layer semantics.

**Must Not Be Assumed:** Existing computational-geometry library behavior, tolerance clipping, rasterization, or approximate polygon Boolean operations.

**Downstream Dependency:** Geometry, equivalence, return forms, edge-case vectors.

**Resolution Gate:** Algorithms must terminate deterministically and return exact canonical results for all valid finite inputs in scope.

## OMQ-35 — Canonical Ordering Algorithm

**Status:** OPEN

**Open Question:** What deterministic ordering rule governs canonical references and derived components where ordering is needed for normalization, serialization, verification, or conformance?

**Established Constraint:** Ordering must remain semantically neutral and imply no importance, hierarchy, ownership, or geographic significance.

**Must Not Be Assumed:** Lexicographic order, numeric coordinate order, Morton order, Hilbert order, hierarchy depth, or database sort order.

**Downstream Dependency:** Canonical serialization, normalization, reproducibility.

**Resolution Gate:** The order must be deterministic, complete where required, and mathematically tied to canonical representation rather than implementation accident.

## OMQ-36 — Precision Conversion Rules

**Status:** OPEN

**Open Question:** How are exact lossless precision transformations distinguished from lossy reduction, truncation, approximation, or generalization?

**Established Constraint:** Loss of canonical precision must always be detectable. Lossy results may not be represented as fully equivalent to canonical truth.

**Must Not Be Assumed:** Rounding modes, truncation rules, automatic snapping, or display-resolution behavior.

**Downstream Dependency:** Precision Vectors, serialization, storage/render separation, conformance.

**Resolution Gate:** The Specification must define deterministic classification and transformation rules for all supported precision conversions.

## OMQ-37 — Canonical Comparison Algorithms

**Status:** OPEN

**Open Question:** What exact algorithms govern equality, spatial comparison, boundary contact, containment, separation, and other foundational comparisons?

**Established Constraint:** Canonical comparison must not rely on implementation-specific tolerance.

**Must Not Be Assumed:** Epsilon comparison, approximate equality, fuzzy geometry, or renderer-level thresholds.

**Downstream Dependency:** Geometry predicates, equivalence, conformance, Reference Vectors.

**Resolution Gate:** Every comparison in the mandatory core must produce exact deterministic outcomes.

## OMQ-38 — Normative Operation Expression, If Required

**Status:** CONDITIONAL — FORMAL-DESIGN QUESTION

**Open Question:** How are canonical Survey operations represented formally in the Specification and/or normative interchange?

**Established Constraint:** Operation meaning must remain exact and implementation-independent.

**Must Not Be Assumed:** Function-call syntax, query language, JSON operation objects, infix notation, or API-specific conventions.

**Downstream Dependency:** Serialization, executable conformance, Reference Vectors.

**Resolution Gate:** Any normative operation expression must have deterministic parsing and semantics.

## OMQ-39 — Canonical Error Classes

**Status:** OPEN

**Open Question:** What exact formal error or failure classes distinguish malformed, ambiguous, impossible-precision, out-of-domain, unsupported, noncanonical, and other invalid conditions?

**Established Constraint:** Invalid or ambiguous input must not be silently assigned spatial meaning.

**Must Not Be Assumed:** Programming-language exception types, HTTP status codes, generic “invalid” outcomes, or implementation-specific errors.

**Downstream Dependency:** Validation Behavior, Invalid-Input Vectors, Conformance failure conditions.

**Resolution Gate:** The canonical error taxonomy must be sufficient for independent implementations to classify the same failure identically where the Specification requires such distinction.

## OMQ-40 — Edge-Case Behavior and Canonical Return Forms

**Status:** OPEN

**Open Question:** What exact outputs are returned for degenerate, empty, boundary-only, equivalent, pathological, or otherwise difficult valid operations?

**Established Constraint:** Canonical operations must be exact, finite, deterministic, and reproducible.

**Must Not Be Assumed:** Null values, empty geometry conventions, exception behavior, library defaults, or implementation-specific simplification.

**Downstream Dependency:** Operations, pathological vectors, conformance, serialization.

**Resolution Gate:** Every mandatory canonical operation must define authoritative return structure and edge-case semantics.

---

# VII. Serialization, Interchange, and Specification Identity

## OMQ-41 — One Canonical Serialization vs. Multiple Normative Encodings

**Status:** OPEN

**Open Question:** Will authoritative interchange use one canonical serialization or multiple explicitly governed lossless normative encodings?

**Established Constraint:** Every normative form must resolve deterministically to the same canonical spatial meaning.

**Must Not Be Assumed:** Single-format exclusivity or multi-format equivalence.

**Downstream Dependency:** Conformance, serialization vectors, precedence rules, version compatibility.

**Resolution Gate:** The Specification must explicitly choose the normative representation model and define semantic equivalence among all authoritative forms.

## OMQ-42 — Exact Machine-Readable Format or Formats

**Status:** OPEN

**Open Question:** Which machine-readable format or formats carry authoritative Survey interchange?

**Established Constraint:** Format must not become the place. Canonical spatial meaning must remain recoverable independently of any particular representation technology.

**Must Not Be Assumed:** JSON, XML, CBOR, protobuf, custom binary, text notation, or database schema.

**Downstream Dependency:** Parsers, round-trip conformance, reference vectors, archival durability.

**Resolution Gate:** Every selected normative format must express all required canonical truth losslessly and deterministically.

## OMQ-43 — Encoding Syntax, Field Order, and Canonical Byte Rules

**Status:** CONDITIONAL — REPRESENTATION QUESTION

**Open Question:** What exact syntax, field ordering, whitespace rules, numeric formatting, byte ordering, and byte-level canonicalization apply where relevant?

**Established Constraint:** Normative encoding must be deterministic and unambiguous.

**Must Not Be Assumed:** Object-key order irrelevance, text normalization defaults, endianness, floating-point encoding, or implementation-native serialization.

**Downstream Dependency:** Hashability where used, round-trip identity, parsing, serialization vectors.

**Resolution Gate:** Normative encodings must produce deterministic authoritative interchange independent of implementation.

## OMQ-44 — Normative Schema or Grammar Mechanism, If Required

**Status:** CONDITIONAL — REPRESENTATION GOVERNANCE

**Open Question:** What formal schema or grammar language, if any, defines machine-readable normative structures?

**Established Constraint:** Schema technology must not define spatial truth; it only constrains representation.

**Must Not Be Assumed:** JSON Schema, XML Schema, protobuf IDL, ASN.1, custom grammar, or no separate schema.

**Downstream Dependency:** Validation, tooling, independent implementation, versioning.

**Resolution Gate:** Any selected schema mechanism must completely represent the normative encoding rules without introducing implementation-exclusive semantics.

## OMQ-45 — Specification and Version Identifier Format

**Status:** OPEN

**Open Question:** How are the governing Specification, serialization rules, conformance profiles, and reference materials identified and versioned?

**Established Constraint:** Version the standard, not the place. Compatible evolution may not renumber, relocate, or reinterpret established canonical space.

**Must Not Be Assumed:** Semantic versioning, dates, hashes, edition numbers, UUIDs, or one identifier across all artifacts.

**Downstream Dependency:** Compatibility, conformance declarations, reference vectors, archival provenance.

**Resolution Gate:** Independent implementations must be able to determine exactly which governing rules apply.

## OMQ-46 — Normative Representation Precedence / Conflict Resolution

**Status:** OPEN

**Open Question:** If multiple normative representations disagree, what deterministic precedence or conflict-resolution rule governs?

**Established Constraint:** Disagreement among authoritative forms may not create competing canonical meanings.

**Must Not Be Assumed:** Newest version wins, textual specification wins, binary form wins, signed artifact wins, or majority agreement.

**Downstream Dependency:** Specification identity, conformance, version compatibility.

**Resolution Gate:** The governing Specification must define one deterministic rule capable of resolving normative-form conflicts without changing canonical place.

## OMQ-47 — Formal Compatibility Declaration, If Required

**Status:** CONDITIONAL — CONFORMANCE-DESIGN QUESTION

**Open Question:** How is compatibility between Specification versions and normative encoding versions formally declared and interpreted?

**Established Constraint:** Compatible evolution must preserve established spatial meaning.

**Must Not Be Assumed:** Backward-compatibility labels, semantic-version ranges, implementation-specific capability flags, or informal prose declarations.

**Downstream Dependency:** Version conformance, interoperability, Version / Conformance Vectors.

**Resolution Gate:** Compatibility must be deterministically assessable from governed information rather than institutional guesswork.

## OMQ-48 — Provenance / Cryptographic Mechanisms Above the Mathematics

**Status:** OUT OF SCOPE — REMOVE FROM OPEN MATHEMATICS

**Open Question:** What cryptographic, signature, provenance, publication, or verification mechanisms, if any, authenticate Specification artifacts and normative representations?

**Established Constraint:** These mechanisms may establish authenticity or authority of documents but may not define where a Survey reference points.

**Must Not Be Assumed:** Blockchain, Bitcoin, signatures, hashes, PKI, database authority, or any particular consensus system.

**Downstream Dependency:** Specification publication, provenance, conformance evidence, later Persistence / Provenance architecture.

**Resolution Gate:** Any adopted mechanism must remain explicitly separable from canonical spatial mathematics.

---

# VIII. Computability and Formal Execution

## OMQ-49 — Exact Canonical Numeric Representation

**Status:** OPEN

**Open Question:** What exact numeric representation underlies canonical Survey mathematics?

**Established Constraint:** Authoritative results must be exact, finite, deterministic, and independent of implementation-specific floating-point tolerance.

**Must Not Be Assumed:** IEEE floating point, fixed-point integers, arbitrary-precision integers, rational numbers, algebraic numbers, decimal arithmetic, or symbolic forms.

**Downstream Dependency:** Coordinates, measurement, geometry, operations, serialization, independent implementation.

**Resolution Gate:** The numeric model must exactly support every adopted canonical primitive and operation within the required representable space.

## OMQ-50 — Exact Primitive Encodings

**Status:** OPEN

**Open Question:** How are each of the final canonical primitives encoded for exact computation and interchange?

**Established Constraint:** Primitive representations must be finite, exact, parseable, and deterministic.

**Must Not Be Assumed:** Programming-language structs, tuples, object IDs, binary packing, or geometric-library types.

**Downstream Dependency:** Serialization, parser, operations, conformance.

**Resolution Gate:** Every mandatory primitive must have an implementation-independent formal representation.

## OMQ-51 — Formal Complexity Constraints

**Status:** OPEN

**Open Question:** What formal complexity bounds or admissibility constraints prevent valid canonical expressions from becoming pathologically difficult to parse, normalize, or verify?

**Established Constraint:** Canonical expressions may become as detailed as legitimately necessary but must remain finitely parseable, unambiguous, and suitable for exact verification.

**Must Not Be Assumed:** Specific Big-O limits, hardware resource ceilings, vertex-count limits, recursion limits, or fixed expression-size caps.

**Downstream Dependency:** Operations, normalization, parser, pathological edge cases, implementation feasibility.

**Resolution Gate:** The Specification must distinguish mathematical validity from practical implementation limits while still guaranteeing canonical operations can terminate.

## OMQ-52 — Parser Limits and Expression Limits

**Status:** OPEN

**Open Question:** Which limits, if any, belong to the formal canonical language versus optional implementation resource policies?

**Established Constraint:** Implementation limits may not redefine canonical mathematics.

**Must Not Be Assumed:** Maximum string length, maximum nesting depth, maximum coordinate digits, maximum component count, or storage-derived limits.

**Downstream Dependency:** Validation, conformance classes, pathological vectors.

**Resolution Gate:** Any normative limit must be justified by canonical computability rather than implementation convenience; non-normative resource limits must be explicitly distinguished.

## OMQ-53 — Termination Proofs

**Status:** OPEN

**Open Question:** How will the Specification formally demonstrate deterministic termination for every mandatory operation on valid finite canonical inputs?

**Established Constraint:** Canonical interpretation, validation, normalization, comparison, measurement, serialization, and other authoritative operations must terminate.

**Must Not Be Assumed:** Empirical performance, “works in practice,” bounded iteration by implementation fiat, or approximate convergence.

**Downstream Dependency:** Conformance, independent implementation, canonical adoption.

**Resolution Gate:** Required operations must have a formal basis sufficient to demonstrate termination under the adopted mathematics.

## OMQ-54 — Computational Error Taxonomy

**Status:** MERGED — OMQ-39

**Open Question:** What exact computational validity and failure states are recognized by the completed Specification?

**Established Constraint:** Canonical Survey truth must resolve exactly or fail validation; approximate, unresolved, estimated, pending, or disputed states are not canonical Survey truth.

**Must Not Be Assumed:** One generic failure state or application-level error semantics.

**Downstream Dependency:** Conformance Validation Behavior, Invalid-Input Vectors, authoritative result structures.

**Resolution Gate:** The taxonomy must be sufficient to produce deterministic conformance outcomes for the mandatory core.

## OMQ-55 — Authoritative Return Structures

**Status:** MERGED — OMQ-40

**Open Question:** What exact canonical forms do mandatory Survey operations return?

**Established Constraint:** Authoritative results must be valid, exact, finite, deterministic, reproducible, and expressible in the canonical form required for the operation.

**Must Not Be Assumed:** Implementation-native objects, arbitrary collections, nullable returns, exceptions, or convenience-oriented result envelopes.

**Downstream Dependency:** Operations, serialization, conformance, Reference Vectors.

**Resolution Gate:** Every mandatory operation must define an exact implementation-independent authoritative result form.

## OMQ-56 — Formal Relationship Between Computability Guarantees and Practical Resource Limits

**Status:** OPEN

**Open Question:** How does the Specification preserve mathematical computability guarantees while allowing implementations to impose practical limits on memory, runtime, storage, or expression size?

**Established Constraint:** Practical limits may exist but may not redefine underlying canonical truth.

**Must Not Be Assumed:** That an implementation’s inability to compute a valid result makes the expression mathematically invalid.

**Downstream Dependency:** Conformance classes, unsupported/indeterminate outcomes, failure conditions.

**Resolution Gate:** The conformance model must distinguish canonical validity from implementation capability while preserving deterministic claims about what a claimed conformance class must support.

---

# IX. Dependency-Blocked Proof Artifacts

These are not independent mathematical choices. They are proof artifacts whose exact content cannot be completed until the governing mathematics above are resolved.

## OMQ-57 — Exact Addressing Reference Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of canonical address syntax, grammar, precision, normalization, and canonicalization.

## OMQ-58 — Exact Survey Domain Limit Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of domain geometry, limits, boundary representation, origin, and validity semantics.

## OMQ-59 — Exact Pang Measurement Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of distance, area, path/boundary length, sub-Pang precision, and address/measure agreement.

## OMQ-60 — Exact Orientation Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of handedness, positive rotation, angular system, transformation rules, and formal directional encoding.

## OMQ-61 — Exact Geometry Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of canonical primitives, positions/extents, endpoint and boundary conventions, line/curve representation, and predicate algorithms.

## OMQ-62 — Exact Normalization Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of address normalization, geometric equivalence, canonical ordering, and canonical return forms.

## OMQ-63 — Exact Transformation Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of canonical transformation mathematics, notation, inverses, composition, and exact return to canonical Survey space.

## OMQ-64 — Exact Precision Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of sub-Pang precision, refinement/extension, maximum precision policy, and lossless/lossy conversion rules.

## OMQ-65 — Exact Invalid-Input Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of grammar, validity states, error taxonomy, impossible precision semantics, unsupported forms, and domain-limit rules.

## OMQ-66 — Exact Serialization Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of normative format(s), canonical encoding, field order, byte rules where applicable, schema, parsing, normalization, and round-trip semantics.

## OMQ-67 — Exact Version / Conformance Vector Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires resolution of Specification identity, version identifiers, compatibility declarations, conformance classes, normative representation precedence, and authoritative results.

## OMQ-68 — Exact Pathological Edge-Case Corpus

**Status:** BLOCKED BY OPEN MATHEMATICS

Requires sufficiently complete formal geometry, precision, operations, serialization, normalization, and computational limits before adversarial expected results can be authoritative.

---

# X. Explicitly Established Commitments — Not Open Mathematical Questions

The following are **not** open merely because their exact formal realization remains unfinished.

They are already requirements-level commitments and must constrain later mathematics:

- one finite canonical Survey Domain
- two-dimensional planar ground
- one connected and internally coherent reference space
- exact domain limits
- Survey Domain ≠ World
- reference capacity ≠ World membership
- higher-layer geometry need not align to Survey subdivisions
- terrain, elevation, visible Surface, volumetric and experiential structure belong above the Survey Fabric
- Pang as native canonical linear measure
- square Pang as canonical area expression
- Pankor, Panvath, Panoris, and Panvel as native canonical directional terminology
- one permanent canonical origin
- one global canonical coordinate frame
- one permanent handedness
- one canonical rotational orientation
- one exact canonical angular system
- exact canonical distance, area, and path/boundary length must exist
- address and measurement must resolve to one canonical spatial truth
- universal addressability for every location representable under the canonical Survey mathematics
- canonical address meaning is permanent and deterministic
- precision extends established reference rather than migrating it
- no authoritative lookup registry may be required to assign spatial meaning to opaque Survey identifiers
- canonical references are absolute and independent of higher-layer objects
- exact sub-Pang precision must be supported
- canonical references must be finite and deterministically computable
- canonicalization must not silently snap or move place
- exact deterministic geometry
- exact endpoint and boundary semantics
- exact spatial equivalence
- geometry is not foundational entity identity
- exact canonical operations
- tolerance-based canonical equality is prohibited
- storage precision and rendering precision do not redefine canonical precision
- deterministic normative serialization/interchange must exist
- compatible Specification evolution may not renumber, relocate, or reinterpret established canonical space
- canonical spatial meaning remains independent of cryptographic, blockchain, database, or verification technology
- canonical expressions and authoritative results must be finite and exact
- hidden mutable implementation state may not change canonical truth
- mandatory canonical operations must deterministically terminate
- independent conforming implementations must be capable of deriving identical canonical results from identical canonical inputs

These commitments belong to the **constraint side** of the design problem.

The register exists to ensure the unresolved mathematical choices are made **inside** these constraints rather than by accidentally reopening them.

---

# XI. Open-Question Dependency Sequence

The open questions are not all equally independent.

A practical formal-design dependency sequence presently appears to be:

**Survey Domain Geometry and Limits**  
↓  
**Canonical Frame / Origin / Handedness / Angular System**  
↓  
**Canonical Numeric and Precision Model**  
↓  
**Canonical Addressing**  
↓  
**Geometric Primitive and Expression Model**  
↓  
**Measurement and Spatial Predicates**  
↓  
**Canonical Operations / Normalization / Equivalence**  
↓  
**Serialization / Specification Identity / Version Compatibility**  
↓  
**Formal Computability / Error / Termination Rules**  
↓  
**Executable Conformance**  
↓  
**Exact Reference Vector Corpus**

This sequence is a **working dependency map for mathematical design**, not a new Architecture-domain stack and not a constitutional adoption.

It may be revised if formal design demonstrates a different dependency.

---

# XII. Register Closeout Condition

This register is complete as a consolidation artifact when:

1. every currently known unresolved mathematical choice in Specification Sections 01–07 appears here;
2. no Requirements-level commitment is mislabeled as an open mathematical choice;
3. no higher-layer Architecture responsibility is pulled downward into the Survey Fabric;
4. every exact Reference Vector category that remains blocked by unresolved mathematics is identified;
5. future formal mathematical design can use this record as a checklist without needing to rediscover unresolved choices scattered across multiple pages.

Closing the **register** does not close the **questions**.

The questions remain open until the governing Specification formally resolves them.

---

# XIII. Source Pages Reviewed

## Requirements

- https://bitpangea.com/theatlas/foundational-survey-fabric/requirements/

## Specification

- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/01-domain-model/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/02-frame-measurement/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/03-addressing-refinement/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/04-expressions-geometry/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/05-operations/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/06-serialization-identity/
- https://bitpangea.com/theatlas/foundational-survey-fabric/specification/07-computability-rules/

## Conformance

- https://bitpangea.com/theatlas/foundational-survey-fabric/conformance/

## Reference Vectors

- https://bitpangea.com/theatlas/foundational-survey-fabric/reference-vectors/

---

# XIV. Requirements-Basis Audit — Findings #1–#85

**Audit Date:** September 19, 2026 · Day #115  
**Audit Result:** PASS WITH DOCUMENTARY CORRECTIONS

The register was audited against the complete Findings #1–#85 Requirements Framework.

## Audit Conclusions

1. **No register item contradicts an accepted Finding.**
2. **No Requirements-level commitment needs to be reopened.**
3. **The register correctly preserves the major unresolved mathematical choices identified by the Requirements and Specification.**
4. **Two pairs of entries were duplicate formulations and are now merged:**
   - OMQ-54 → OMQ-39
   - OMQ-55 → OMQ-40
5. **OMQ-48 is not an open Survey mathematics question.** Finding #61 explicitly places cryptographic, signature, blockchain, database, provenance, and verification mechanisms above and separable from canonical Survey mathematics. OMQ-48 is retained only as an out-of-scope boundary reminder.
6. **Four items are conditional formal-design questions rather than mandatory mathematical choices:**
   - OMQ-38 — normative operation expression, if required
   - OMQ-43 — byte/field canonicalization rules, where the selected encoding makes them relevant
   - OMQ-44 — separate schema/grammar mechanism, if required
   - OMQ-47 — formal compatibility declaration format, if adopted by Conformance
7. **OMQ-29 was tightened** so the register does not presume that “curve” must become a distinct canonical expression class. Findings require paths, lines, boundaries, and other line-like expressions; the final primitive/expression model remains open.
8. **The twelve Reference Vector entries remain correctly classified as dependency-blocked proof artifacts, not independent mathematical choices.**

## Requirements-Basis Map

### Findings #1–#6 — Foundation, Purpose, and Scope
These Findings constrain the entire register by requiring minimum permanent spatial content, separation from Parcels and higher-layer semantics, extension over mutation, and preservation of future freedom.

### Findings #7–#17 — Addressability, Meaning, Refinement, Authority, Evolution
Primary basis for OMQ-15 through OMQ-23, OMQ-45 through OMQ-47, and the permanent-meaning / independent-implementation constraints applied throughout.

### Findings #18–#33 — Mathematical Ontology and Domain Structure
Primary basis for OMQ-01 through OMQ-04, OMQ-15 through OMQ-33, especially finite domain, planar ground, self-resolving addresses, exact mathematics, higher-layer boundaries, canonicalization, extents, edge semantics, and one mathematics / many spatial expressions.

### Findings #34–#43 — Native Measurement and Orientation
Primary basis for OMQ-05 through OMQ-14: Pang, square Pang, exact distance and area, Pankor / Panvath / Panoris / Panvel, permanent origin, one global frame, address/measure agreement, absolute reference, and the still-open angular system.

### Findings #44–#77 — Geometry, Measurement, Operations, Precision
Primary basis for OMQ-24 through OMQ-47: continuity, predicates, exact limits, transformations, uniform scale, sub-Pang precision, path/boundary length, spatial composition, validity, ordering, serialization/interchange, versioning, equivalence, singular orientation, closeness, precision conversion, exact comparison, no snapping, connected domain, and semantically neutral internal partitions.

### Findings #78–#85 — Knowability, Computability, and Conformance
Primary basis for OMQ-24, OMQ-39–OMQ-40, OMQ-49–OMQ-56, and the blocked Reference Vector corpus: finite exact representation, minimal primitives, hidden-state independence, deterministic termination, controlled complexity, exact-or-invalid states, Mandatory Conformance Core, and the readiness gate.

## Audited Count

The original register used **68 labels**, but the requirements-basis audit establishes the more accurate standing:

- **53 distinct tracked mathematical / formal-design questions**
  - including **4 conditional formal-design questions**
- **1 explicit out-of-scope boundary reminder** — OMQ-48
- **2 merged duplicate labels** — OMQ-54 and OMQ-55
- **12 dependency-blocked Reference Vector corpus categories**

The numeric OMQ identifiers are preserved for traceability; they are not renumbered merely because the audit merged or reclassified entries.

---

# Day #115 Audited Standing

**OPEN MATHEMATICAL QUESTIONS REGISTER — REQUIREMENTS-BASIS AUDIT COMPLETE**

**FINDINGS #1–#85 — NO CONTRADICTION FOUND**

**REQUIREMENTS-LEVEL COMMITMENTS — PRESERVED**

**OPEN MATHEMATICS — CONSOLIDATED**

**CONDITIONAL FORMAL-DESIGN QUESTIONS — IDENTIFIED**

**OUT-OF-SCOPE PROVENANCE / CRYPTOGRAPHIC MECHANISMS — REMOVED FROM MATHEMATICAL SCOPE**

**DUPLICATE QUESTIONS — MERGED WITHOUT RENUMBERING**

**REFERENCE VECTOR CORPORA — CORRECTLY BLOCKED PENDING MATHEMATICS**

No mathematical choice was adopted through this audit.

No Requirement was amended.

No Architecture domain was changed.

No higher-layer responsibility was pulled into the Foundational Survey Fabric.

The Open Mathematical Questions Register may now be treated as **audited and consolidated for Foundational Survey Fabric closeout work**.

The next closeout task is the **normative-language audit**.

---

**The Requirements define the envelope. The register preserves the unresolved choices inside it.**
