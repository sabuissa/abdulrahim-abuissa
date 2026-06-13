# PRD — Abdulrahim Abuissa Personal Website

**Client:** Abdulrahim Abuissa
**Builder:** [Your name]
**Course:** OIM 3690 — Mini Project 1
**Live URL:** https://sabuissa.github.io/abdulrahim-abuissa/
**Status:** Deployed; finalizing content credibility + contact form

---

## 1. Overview

A personal website that establishes Abdulrahim's professional identity and credibility online and gives the right people a clear way to reach him. It is both the real first version of his personal site and the MP1 deliverable.

## 2. Problem & Goal

**Problem:** Abdulrahim has a strong but scattered story — pioneering athlete, founder, strategy background, community leader. Someone who comes across his name has no single, credible place that explains who he is and how to contact him.

**Goal:** A focused site that makes a business-minded visitor understand within ~10 seconds who he is and why he's worth engaging, and makes reaching him effortless.

## 3. Primary User & Job-to-be-Done

**Primary user: business collaborators** — potential partners, and people positioned to connect him to opportunities in Qatar and the Gulf. This is the visitor the site must succeed with. Every prioritization decision serves this person first.

**Their job:** quickly judge *"Is this a credible operator worth engaging, and how do I reach him?"*

**Secondary users** (served, not optimized for): media (need fast facts + a usable photo), sponsors (need platform/reach), general network.

## 4. Success Metrics

A new personal site has little organic traffic, so success is **not** measured by inbound form volume. Instead:

- **Credibility:** every claim on the site survives a collaborator's 5-minute diligence (LinkedIn / Google). Nothing unverifiable.
- **Clarity:** a first-time visitor can state who he is and why he matters after ~10 seconds on the home page.
- **Confidence:** Abdulrahim is willing to send the link directly to a real business contact as his definitive introduction.
- **Function:** the contact path works end-to-end (a test submission lands in his inbox).
- **Course:** meets all MP1 base requirements and targets the stated extensions.

## 5. Positioning / Value Proposition

- **Identity (one line):** a Qatari founder and connector building at the intersection of business, sport, and community — anchored by a pioneering athletic career and real strategy experience.
- **Hero lead message:** a present-tense "building at the intersection…" value line, using the pioneer credential (*first Qatari to play NCAA Division I basketball*) as the hook, then pivoting immediately to what he does **now**. The hook buys attention; the pivot converts it to present-day capability.
- **Credibility ballast:** the EY strategy experience and the Abuissa Holding strategy / tendering / negotiation exposure are what stop "connector/founder" from reading as "well-connected surname." They must be present, and framed with honest verbs.
- **Pillars** (Sports / Business / Social Impact) are *supporting evidence* beneath the lead identity — not three co-equal headlines.

## 6. Content Principles (non-negotiable)

- Every claim is backed by his real, verifiable record. No aspirational claim stated as present fact. Anything not yet true is cut or reframed honestly (e.g. "exploring investments in…" rather than "I invest in…").
- The NCAA claim uses **one consistent, verified wording everywhere**: *"first Qatari to play NCAA Division I basketball."* (Confirmed true by client.)
- Supporting roles (EY ~6 months; Abuissa Holding support) use honest verbs — *supported, contributed, assisted* — never inflated to *led*.
- No placeholder text. All content sourced from CV / LinkedIn and confirmed with the client.

## 7. Information Architecture

Consistent top navigation on every page.

- **Home** — hero (hook → value line → CTA); three supporting pillars; footer with LinkedIn (primary), Instagram, email.
- **About** — narrative spine: origin (international education, athletics) → present operator (founder + strategy background, incl. EY and Holding) → leadership and community.
- **Business** — Abuissa Sports (founder); EY strategy experience; Abuissa Holding experience. Any investor/advisory or "AI SPORTS Academy" content only if real and current; otherwise removed or reframed.
- **Sports** — NCAA D1, national team, U16/U19 captaincy, 2018 Asian Games.
- **Social Impact** — FIBA Foundation Youth Leader; Basketball for Good; 135+ participants incl. refugee/displaced communities; UN SDG alignment.
- **Contact** — short framing line, working form, visible email, LinkedIn.

## 8. Functional Requirements

**P0 — must ship**

- Consistent nav across all pages, with current-page indication.
- Working contact form via Web3Forms (or equivalent) delivering to his inbox. Every field has a `name` attribute; email field validated. **Tested live.**
- Visible `mailto:` email on the Contact page as the primary/fallback channel.
- LinkedIn link prominent (primary channel for this audience); Instagram secondary; no duplicate links.
- Hero CTA ("Get in Touch") routes to Contact.
- Responsive: legible and usable on mobile (sections and nav collapse to single column).

**P1 — extensions / polish**

- HTML5 validation attributes (`required`, `type="email"`, `type="tel"`).
- Google Fonts, including a script-style treatment of his name.
- Lighthouse accessibility ≥ 90: labelled inputs, alt text on every image, sufficient contrast on the dark theme.
- Open Graph meta tags (title, description, image) so a shared link previews well — important because he will send the link directly.
- Subtle CSS transitions.

## 9. Technical Constraints (assignment)

- Static site, hand-written HTML/CSS — every tag and property understood (AI-assisted, reviewed).
- Semantic HTML (`header`, `nav`, `main`, `footer`, `section`).
- External CSS stylesheet; layout via CSS Grid or Flexbox.
- Favicon.
- Deployed on GitHub Pages; live URL set in the repo's About box.
- Repo contains: `PROPOSAL.md`, `PRD.md`, layout sketch, `README.md`; linked from the oim3690 repo README.

## 10. Style & Brand

- Dark theme with an orange accent (his confirmed brand/favorite color).
- Clean, modern, uncluttered; strong imagery carries the pages.
- Script-style treatment of his name for a personal, signature feel.
- Loosely echoes the Abuissa Sports energy without copying it.
- **References:** usainbolt.com (narrative/storytelling), allysonfelix.com (restraint/simplicity), badosapaula.com (clarity, every element with a purpose).

## 11. Out of Scope (v1)

Blog/news feed, Arabic-language version, CMS, analytics dashboard, e-commerce, booking. Candidates for future iterations.

## 12. Pre-Launch Checklist

- [ ] Every claim verified against CV/LinkedIn; aspirational claims cut or reframed.
- [ ] NCAA wording identical across all pages.
- [ ] EY + Abuissa Holding present on Business and About, with honest verbs.
- [ ] Contact form test submission received in inbox.
- [ ] Visible email present; duplicate social links removed.
- [ ] LinkedIn profile is presentable (the site funnels diligence there).
- [ ] Alt text on all images; inputs labelled; contrast checked (Lighthouse ≥ 90).
- [ ] Mobile pass in DevTools device mode.
- [ ] Open Graph tags + favicon present.
- [ ] Repo has PROPOSAL.md, PRD.md, sketch, README; live URL in About; **repo URL** submitted on Canvas.
