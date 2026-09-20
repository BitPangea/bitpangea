# Origins — Chapter X

## Identity, Rights, and Control

**BitPangea: Origins · Version 0.1 · September 2026**

This directory contains the web presentation of **Chapter X — Identity, Rights, and Control** from **BitPangea: Origins — Version 0.1**, *The Foundational Manuscript of a Finite Digital World*.

The chapter preserves the recognized Architecture domain concerned with persistent actors, governed relationships, scoped authority, authorization, delegation, provenance, privacy, and legitimate participation within BitPangea.

Its central distinctions are:

> **Identity answers who.**

> **Rights answer what governed relationship exists.**

> **Control answers what authority may actually be exercised.**

---

## Public Page

Public chapter URL:

**https://bitpangea.com/origins/chapters/10-identity-rights-control/**

Repository path:

```text
/origins/chapters/10-identity-rights-control/index.html
```

---

## Chapter Role

Chapter X explains why a persistent World requires more than persistent place.

It also requires:

- actors;
- governed relationships;
- authority;
- authorization;
- traceability;
- and rules distinguishing association from exercisable control.

The chapter preserves **Identity / Rights / Control** as one recognized Architecture domain while also making clear that the three concerns are not identical and may ultimately require deeper internal separation.

---

## Identity

Identity asks:

> Who or what is this?

BitPangea may eventually need persistent identities for more than human individuals.

Possible actor classes may include:

- individuals;
- organizations;
- institutions;
- services;
- Builders;
- automated agents;
- World systems;
- future actor classes not yet defined.

The exact actor model remains open.

The enduring requirement is that actors be distinguishable enough for rights, authority, provenance, and history to refer to them coherently over time.

---

## Identity Is Not a Username

The chapter explicitly separates persistent BitPangea identity from implementation identifiers such as:

- usernames;
- email addresses;
- wallet addresses;
- account numbers;
- public keys;
- credentials;
- device identifiers;
- external platform accounts.

These may authenticate or reference an actor.

They should not automatically become the canonical actor merely because they are convenient.

Conceptually:

```text
Actor
↓
persistent BitPangea identity
↓
may be associated with changing credentials, accounts, wallets, or profiles
```

The actor should remain intelligible even when those associations change.

---

## Authentication Is Not Identity

The chapter preserves a strict distinction:

### Authentication

Asks:

> Can this entity demonstrate control of credentials associated with an identity?

### Identity

Asks:

> Which actor is this?

Credentials may be:

- rotated;
- revoked;
- recovered;
- replaced;
- superseded;
- rendered obsolete.

A credential change should not necessarily create a new historical actor.

---

## Identity Is Not Ownership

Chapter X preserves the principle:

> Identity does not imply ownership.

And the broader distinctions:

```text
identity ≠ ownership
identity ≠ rights
identity ≠ permission
identity ≠ authority
```

An actor may exist without possessing special Parcel relationships.

A service may exercise narrow authority without owning anything.

An organization may possess governed relationships distinct from those of its members.

Identity enables governed relationships.

It is not itself the relationship.

---

## Rights

Rights ask:

> What governed relationship exists between this actor and a World object, place, system, or capability?

The chapter intentionally avoids prematurely defining a final rights taxonomy.

The term “rights” may eventually carry:

- legal;
- contractual;
- technical;
- institutional;
- social;
- other meanings.

At the Architecture level, the enduring question is more general:

> What recognized relationship gives an actor governed standing with respect to something in the World?

---

## Rights Require Provenance

Consequential governed relationships should be explainable.

The chapter identifies questions such as:

- What relationship is this?
- Which actor possesses it?
- What object or capability does it concern?
- What does it permit?
- Where did it originate?
- Which authority established it?
- When did it become effective?
- Can it expire?
- Can it be delegated?
- Can it be revoked?
- Can it be superseded?
- What evidence supports its current standing?

The governing principle is:

> **Rights require provenance.**

This is one reason **Persistence / Provenance** remains a distinct Architecture domain.

Identity / Rights / Control may establish and use governed relationships.

Persistence / Provenance helps preserve their lineage.

---

## Rights Are Not the Parcel

A right may refer to a Parcel.

The right is not the Parcel.

Conceptually:

```text
Parcel
→ canonical spatial object

Right
→ governed relationship involving that object
```

The Parcel Cadastre remains authoritative for Parcel truth.

If rights change:

- the Parcel does not disappear;
- the Parcel does not move;
- its canonical territorial definition does not change.

The chapter preserves:

> The Parcel Cadastre owns Parcel truth. Identity / Rights / Control may reference Parcel truth without redefining it.

And:

> Reference does not transfer authority.

---

## Ownership Is Only One Possible Relationship

The chapter explicitly avoids collapsing the entire domain into “ownership.”

Potential future relationship concepts might include:

- ownership;
- use;
- access;
- construction authority;
- administrative authority;
- delegated authority;
- temporary permission;
- occupancy;
- custodianship;
- shared control;
- service authority.

These are illustrative only.

They are not adopted BitPangea rights classes.

The governing design principle is:

> Discover the relationships the World actually requires before deciding which inherited legal or technical words should describe them.

---

## Control

Control asks:

> What may this actor actually cause to happen?

Control is distinct from merely having a governed relationship.

An actor may have standing in relation to an object while lacking authority to perform every operation affecting it.

Conceptually:

```text
Actor Identity
↓
Rights Relationship
↓
Control / Authorization
↓
permitted operation
↓
World Runtime
↓
execution
↓
resulting World state
```

Rights describe standing.

Authorization evaluates a specific action.

Control concerns exercisable authority.

Execution belongs to World Runtime.

---

## Authorization Is Not Rights

Rights and authorization remain separate.

A right may contribute to an authorization decision.

It does not guarantee every action.

Authorization may depend upon:

- rights;
- current World state;
- object state;
- time;
- policy;
- protocol;
- delegation;
- other governing conditions.

Conceptually:

```text
Rights
+
current conditions
+
applicable rules
↓
Authorization decision
```

The exact mechanism remains open.

The architectural distinction should remain.

---

## Control Must Be Scoped

The chapter preserves the principle:

> Authority should be explicit enough that permission to do one thing does not silently become permission to do everything.

Future systems may distinguish authority to:

- view;
- enter;
- build;
- modify;
- operate;
- delegate;
- transfer;
- administer;
- remove;
- configure.

These are examples only, not adopted authority classes.

The deeper requirement is scoped, explicit authority.

---

## One Owner Field Is Not an Architecture

A prototype might store:

```text
Parcel 1042
Owner: Alice
```

Chapter X explains why that is insufficient as a complete architecture.

A mature system must eventually be able to answer questions such as:

- What identifies Alice?
- What proves the relationship?
- Which authority created it?
- What does “Owner” permit?
- Can authority be delegated?
- Can multiple actors hold different relationships?
- Can different rights apply to different capabilities?
- Can authority exist temporarily without ownership?
- What happens when credentials change?
- How are disputes represented?
- What provenance is preserved?
- What history remains after the relationship changes?

The chapter preserves:

> Simplicity should be the result of understanding the architecture—not a substitute for understanding it.

---

## Rights Beyond Parcels

The Identity / Rights / Control domain should not be designed only around Parcels.

Actors may eventually have governed relationships with:

- constructed objects;
- infrastructure;
- services;
- institutions;
- organizations;
- shared systems;
- creative works;
- World capabilities;
- administrative functions;
- Builder tools;
- future object classes.

The architecture must be broad enough to support governed relationships beyond ordinary Parcel control without becoming one universal monolithic rights model.

---

## Persistent Actor, Persistent Place, Changing Relationship

One of the chapter’s strongest architectural patterns is:

```text
Actor Identity
→ persistent actor

Parcel Identity
→ persistent place

Rights Relationship
→ may change over time

Control
→ may change according to rights and current conditions
```

This allows BitPangea to preserve meaningful history.

The same Parcel can remain the same place while different actors hold different relationships across time.

The same actor can remain the same historical actor while credentials change.

---

## Delegation

The chapter identifies delegation as a likely future requirement.

Conceptually:

```text
Actor A
↓
possesses authority
↓
delegates limited authority
↓
Actor B
↓
may exercise specified capability
```

If delegation is adopted, later Architecture must answer:

- Who may delegate?
- What may be delegated?
- For how long?
- Under what conditions?
- Can delegated authority itself be delegated?
- Can it be revoked?
- What happens when the original authority ends?
- How is provenance preserved?

These questions remain open.

---

## Shared and Multiple Relationships

The chapter warns against assuming that every World object always has one relevant actor.

Future relationships may involve:

- multiple individuals;
- organizations;
- institutions;
- groups;
- shared administration;
- joint projects;
- delegated operators.

A one-account implementation should not silently become a permanent World rule.

---

## Time

Governed relationships may have temporal dimensions.

Possible future relationships may be:

- permanent;
- temporary;
- scheduled;
- conditional;
- revocable;
- expiring;
- future-effective.

These are not adopted categories.

The architectural distinction is that a persistent World must be able to distinguish:

- what is true now;
- what was true before;
- what may become true later.

Current standing belongs to operational truth.

Its lineage belongs to provenance and history.

---

## Relationship to World Runtime

Identity / Rights / Control should not execute every change it authorizes.

World Runtime owns operational execution.

A future consequential action may conceptually proceed:

```text
Actor requests operation
↓
Identity resolved
↓
relevant rights determined
↓
control / authorization evaluated
↓
operation validated
↓
World Runtime executes
↓
persistent World state changes
↓
Persistence / Provenance preserves lineage and evidence
```

The responsibilities remain distinct:

- Identity / Rights / Control → standing and authority
- World Runtime → legitimate operational execution
- Persistence / Provenance → lineage and evidence

None should silently absorb the others.

---

## Relationship to Builders

Builders consume the Architecture.

They do not invent authority.

A Builder may eventually ask:

- May this actor build here?
- What may be modified?
- What may be removed?
- What constraints apply?
- What authority supports the request?

The Builder should obtain those answers from the relevant Architecture domains.

Conceptually:

```text
Builder
↓
references Parcel Cadastre
↓
references Identity / Rights / Control
↓
requests legitimate World change
↓
World Runtime validates and executes
↓
Persistence / Provenance preserves evidence
```

The Builder creates.

It does not become cadastral authority, rights authority, or Runtime merely because it initiates a request.

---

## Infrastructure May Require Different Relationships

World-scale infrastructure may require authority models different from ordinary Parcel control.

Possible examples include:

- roads;
- transport systems;
- communications networks;
- shared utilities;
- public services;
- digital-native infrastructure.

The chapter preserves:

> Different classes of World responsibility may require different classes of authority.

The final authority models remain open.

---

## Formal Rights and Social Relationships

BitPangea should distinguish formal World-recognized relationships from social relationships created by civilization.

Communities may create:

- custom;
- membership;
- tradition;
- reputation;
- voluntary obligation;
- local expectation.

Those need not automatically become canonical rights or Runtime-enforced rules.

The chapter preserves:

> Architecture governs what must be governed. Civilization may create additional relationships that remain social rather than canonical.

---

## Identity and Privacy

Persistent identity does not imply universal public disclosure.

The Architecture may eventually distinguish among:

- existence of identity;
- proof of identity;
- identity attributes;
- credential data;
- public presentation;
- private attributes;
- authorization-relevant information.

The governing principle is:

> Persistent identity and maximal disclosure are not the same requirement.

---

## Identity and Pseudonymity

Meaningful persistent identity does not necessarily require a real-world legal name.

A persistent pseudonymous actor may still accumulate:

- history;
- reputation;
- relationships;
- rights;
- responsibility;
- creative work;
- institutional roles.

BitPangea may eventually determine identity assurance according to the action being performed rather than imposing one universal identity standard.

That question remains open.

---

## Authority Must Be Traceable

For consequential World change, BitPangea should ultimately be able to explain:

- who acted;
- under which persistent identity;
- against which object or capability;
- using what authority;
- what rights supported the decision;
- what authorization was evaluated;
- what changed;
- when it occurred;
- what provenance was preserved.

The governing principle is:

> **Authority should be traceable.**

A persistent World should be able to distinguish legitimate change from unexplained mutation.

---

## The Creator’s Authority

The chapter applies the domain to the Creator as well.

During the Creator Period, extraordinary Creator authority is unavoidable.

But that authority should not automatically become the permanent operating model of mature BitPangea.

The chapter preserves:

> The Creator should become progressively less authoritative as BitPangea moves from World creation toward civilization.

The role should evolve from creation toward stewardship.

A mature World should eventually be able to answer:

> Why was this action permitted?

with something stronger than:

> Because the Creator could do it.

---

## No Premature Tokenization

The chapter explicitly states that Parcel rights do not presently require:

- NFTs;
- Parcel tokens;
- a particular blockchain;
- wallet-based ownership;
- on-chain governance;
- a specific transfer protocol.

The proper order remains:

```text
requirement
↓
architecture
↓
technical evaluation
↓
implementation
```

not:

```text
preferred technology
↓
architecture invented to justify it
```

---

## No Premature Legal Analogy

The same restraint applies to inherited legal terminology.

Terms such as:

- deed;
- title;
- lease;
- easement;
- tenant;
- landlord;
- estate

may later be useful analogies.

They should not automatically import their full legal meaning into BitPangea.

The chapter preserves:

> Use analogy to aid understanding. Do not allow analogy to replace architectural reasoning.

---

## History of Authority

Identity, governed relationships, control, Runtime execution, and provenance together may eventually allow BitPangea to reconstruct the history of authority.

A mature system may be able to answer:

- Which actor held which relationship?
- During what period?
- Who established it?
- Was authority delegated?
- Which actions occurred under it?
- How was authority changed or superseded?
- How did the current condition arise?

Current state answers:

> What is true now?

Provenance and history answer:

> How did it become true?

Both may be necessary.

---

## Internal Decomposition Remains Open

Identity / Rights / Control is recognized as an Architecture domain.

Its internal architecture remains unresolved.

Later design may distinguish separate authorities for:

- Identity;
- Rights;
- Authorization;
- Control;
- Policy;
- Delegation;
- Credentialing;
- Recovery;
- other responsibilities.

The domain should not be treated as one monolithic service merely because its name groups three concepts.

---

## What Is Established

Chapter X preserves the following as established strongly enough for Version 0.1:

- Identity / Rights / Control is a recognized Architecture domain.
- BitPangea requires persistent actor identity.
- Identity is distinct from authentication.
- Identity does not establish ownership, rights, permission, or authority by itself.
- Rights describe governed relationships involving actors, World objects, or capabilities.
- Rights require traceable authority and provenance.
- Parcel Cadastre remains authoritative for Parcel truth.
- Rights may reference Parcels without redefining them.
- Control concerns exercisable authority.
- Authorization is distinct from the existence of a right.
- Authority should be explicitly scoped.
- World Runtime executes legitimate operational change.
- Identity / Rights / Control should inform Runtime authorization without becoming Runtime.
- Persistence / Provenance should preserve lineage and evidence.
- Builders should consume rights and control information rather than invent it.
- The domain should not be reduced prematurely to ownership.
- Parcel rights do not presently require tokens, NFTs, or any particular blockchain.
- Persistent identity does not require universal public disclosure.
- Pseudonymous persistent identity remains architecturally possible.
- The domain may require substantial internal decomposition.

---

## What Remains Open

The chapter preserves unresolved questions including:

- canonical actor identity model;
- recognized actor classes;
- relationship between BitPangea identity and external identities;
- authentication mechanisms;
- credential recovery;
- identity continuity;
- privacy architecture;
- pseudonymity;
- identity assurance levels;
- formal categories of governed relationships;
- whether ownership becomes a canonical BitPangea term;
- how rights originate;
- how rights are transferred;
- how rights expire;
- how rights are revoked;
- delegation;
- shared authority;
- institutional authority;
- infrastructure authority;
- authorization mechanisms;
- control boundaries;
- policy architecture;
- exception handling;
- dispute handling;
- recovery mechanisms;
- history of authority;
- exact Persistence / Provenance interface;
- exact World Runtime interface;
- eventual internal decomposition of the domain.

These questions should remain open until the Architecture can justify their answers.

---

## Governing Principle

Chapter X closes with:

> **Identity establishes the actor. Rights establish the relationship. Control establishes exercisable authority. None should silently inherit the authority of the others.**

And beneath all of them remains the question:

> **By whose authority?**

---

## Relationship to the Canonical Manuscript

This HTML chapter is a web presentation of the preserved Version 0.1 publication.

Parent publication:

**https://bitpangea.com/origins/**

Canonical publication file:

```text
/origins/BitPangea_Origins_v0_1.pdf
```

Markdown source:

```text
/origins/bitpangea-origins-v0.1.md
```

The chapter should remain aligned with the preserved Version 0.1 manuscript rather than being silently rewritten to follow every later Atlas clarification.

---

## Navigation

Previous chapter:

```text
/origins/chapters/09-the-architecture/
```

Contents:

```text
/origins/#contents
```

Next chapter:

```text
/origins/chapters/11-world-runtime/
```

---

## Repository Guidance

When maintaining this directory:

1. preserve the chapter title as **Identity, Rights, and Control**;
2. preserve its position as **Chapter X**;
3. preserve the public path `/origins/chapters/10-identity-rights-control/`;
4. preserve the distinctions among Identity, Rights, Control, Authorization, and Runtime execution;
5. preserve the distinction between identity and authentication;
6. preserve the distinction between Parcel truth and rights involving Parcels;
7. preserve the principle that reference does not transfer authority;
8. preserve the requirement that rights and consequential authority remain traceable;
9. preserve scoped authority;
10. preserve delegation, privacy, pseudonymity, and internal decomposition as open architectural questions unless later formally resolved;
11. preserve the no-premature-tokenization rule;
12. preserve the no-premature-legal-analogy rule;
13. preserve the Creator-authority transition principle as part of the Version 0.1 historical record;
14. do not silently rewrite historical reasoning solely because later Atlas architecture changes;
15. maintain navigation to Chapter IX, Contents, and Chapter XI;
16. keep metadata, Open Graph, structured data, and publication versioning aligned;
17. distinguish historical reasoning in Origins from current structural truth in The Atlas.

---

## Documentary Principle

**Origins preserves how and why the understanding emerged.**

**The Atlas records what now structurally stands.**

Chapter X belongs to the preserved historical manuscript and should be maintained accordingly.

---

## Status

**Origins · Version 0.1 · Chapter X · Identity, Rights, and Control**

**Historical foundational publication — preserved**

---

© 2026 BitPangea. All rights reserved unless otherwise stated.
