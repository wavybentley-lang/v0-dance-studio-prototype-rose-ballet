# IMPLEMENTATION PLAN — Lovely Dance Prototype Visual Phase

## Goal

Transform the existing dance studio template into a visually polished prototype for Lovely Dance Beauty & Fitness Vomero.

This phase is NOT a full production build. The priority is to make the prototype look tailored, elegant, modern, and convincing enough to send to the prospect.

---

# CHECKLIST

## PHASE 1 — DESIGN SYSTEM

- [x] Update global color palette in globals.css
- [x] Replace old gold/dark palette with warm ivory/beige/rose palette
- [x] Add consistent accent colors and border colors
- [x] Update typography to:
  - [x] Playfair Display (headings)
  - [x] DM Sans (body)
- [x] Verify fonts load correctly
- [x] Check spacing consistency across sections

---

## PHASE 2 — NAVIGATION + BRANDING

- [x] Replace old studio name with “Lovely Dance”
- [x] Update navigation styling to match new aesthetic
- [x] Update CTA button styling
- [x] Ensure navigation works correctly on mobile
- [x] Verify sticky nav behavior still works

---

## PHASE 3 — HERO SECTION

- [x] Replace hero headline
- [x] Replace hero subheadline
- [x] Update CTA button text
- [x] Add WhatsApp CTA
- [x] Update hero overlay/gradient
- [x] Improve hero spacing/layout
- [x] Ensure hero looks premium on mobile
- [x] Verify text readability on all screen sizes

Suggested copy:

Headline:
La danza, la bellezza, il tuo momento

Subheadline:
Corsi di danza, fitness e benessere nel cuore del Vomero. Uno spazio accogliente dove movimento, energia e femminilità si incontrano.

---

## PHASE 4 — TRUST / STATS SECTION

- [x] Replace old stats with generic trust-oriented stats
- [x] Improve spacing/layout
- [x] Make section visually lighter and more elegant

Suggested stats:
- 10+ discipline
- Bambini e adulti
- Danza, fitness e benessere
- Vomero, Napoli

---

## PHASE 5 — ABOUT SECTION

- [x] Rewrite “Chi Siamo” section
- [x] Remove previous founder-specific references
- [x] Update imagery if needed
- [x] Add wellness/feminine positioning
- [x] Improve section readability

Suggested section title:
Uno spazio dove sentirti libera di muoverti

---

## PHASE 6 — COURSES SECTION

- [x] Update course categories
- [x] Rewrite course descriptions
- [x] Update course card styling
- [x] Improve hover effects
- [x] Verify mobile responsiveness

Suggested categories:
- Danza
- Fitness
- Pilates
- Yoga
- Benessere
- Eventi

---

## PHASE 7 — REMOVE OLD CLIENT-SPECIFIC CONTENT

- [x] Remove “Mamma e Figlia” section
- [x] Remove old founder/team references
- [x] Remove old testimonials if too client-specific
- [x] Remove irrelevant certifications/federation references
- [x] Remove outdated logos/branding
- [x] Remove unused images if necessary

---

## PHASE 8 — GALLERY SECTION

- [ ] Update gallery styling
- [ ] Improve spacing/layout
- [ ] Replace overly client-specific images if needed
- [ ] Ensure gallery works well on mobile
- [ ] Maintain elegant visual presentation

---

## PHASE 9 — CONTACT + CTA SECTION

- [x] Rewrite contact CTA section
- [x] Add stronger conversion-focused copy
- [x] Add WhatsApp CTA
- [x] Add placeholder contact info if needed
- [x] Verify buttons work correctly

Suggested title:
Vuoi provare un corso?

Suggested body:
Scrivici e ti aiutiamo a scegliere il percorso più adatto a te.

---

## PHASE 10 — WHATSAPP BUTTON

- [x] Add/update floating WhatsApp button
- [x] Verify mobile positioning
- [x] Verify desktop positioning
- [x] Add correct WhatsApp href format
- [x] Ensure button does not block important UI

Placeholder number:
+39 349 873 7169

---

## PHASE 11 — FOOTER

- [x] Update studio name
- [x] Update location to Vomero, Napoli
- [x] Update social links placeholders
- [x] Simplify footer if necessary
- [x] Ensure footer matches new aesthetic

---

## PHASE 12 — MOBILE QA

- [ ] Verify hero responsiveness
- [ ] Verify navigation responsiveness
- [ ] Verify cards stack correctly
- [ ] Verify no horizontal overflow
- [ ] Verify typography scaling
- [ ] Verify CTA buttons remain usable
- [ ] Verify spacing consistency

---

## PHASE 13 — FINAL QA

- [ ] Run npm run dev
- [ ] Fix visual issues
- [ ] Fix console errors
- [ ] Verify imports/components
- [ ] Run npm run build if possible
- [ ] Verify no broken links
- [ ] Verify all sections render correctly

---

# COLOR PALETTE

- Background: #F7F3EE
- Secondary background: #EFE7DD
- Card background: #FAF8F5
- Main text: #2B2B2B
- Muted text: #7A6F68
- Accent rose: #C97C6D
- Accent hover: #B86C5F
- Champagne/gold highlight: #C6A87A

---

# TYPOGRAPHY

- Headings: Playfair Display
- Body: DM Sans

---

# IMPORTANT NOTES

This phase is focused on:
- visual polish
- emotional presentation
- premium branding
- mobile appearance
- conversion feel

Do NOT overfocus on:
- backend functionality
- perfect legal pages
- final SEO
- production integrations
- perfect content accuracy

The goal is to create a highly convincing outreach prototype quickly.

---

# COMMIT AFTER COMPLETION

```bash
git add .
git commit -m "Rebrand template for Lovely Dance prototype"
