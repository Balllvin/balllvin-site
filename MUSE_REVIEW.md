# Second Muse Review — mobile hero fills first screen

Date: 2026-09-18 (Europe/Zurich)
Reviewer: second Muse (read-only review; no `app/` source edited in this pass)
Scope: mobile hero viewport fill so "What I Do" does not peek at scrollY=0
Implement commit under review: `63b476d` (message: Mobile hero: fill first screen with 100svh+1px (no What I Do peek))
Prior HEAD: `d1c70f4`

## Verdict: PASS

## Evidence

- **Diff scope — CSS only, minimal:** `git show 63b476d --stat` = `app/page.module.css | 11 +++++++++++`, 1 file, 11 insertions. `git diff d1c70f4..63b476d --name-only` = `app/page.module.css` only. No `page.tsx`, no other files in the implement commit. No unrelated refactors.
- **Base `.open` fallback chain correct:** now `min-height: 100vh; min-height: 100svh; min-height: 100dvh;` — progressive enhancement (legacy → small → dynamic). Desktop cascade unchanged in effect (still resolves to `100dvh` where supported); scroll-film pacing intact (no layout/JS/pacing changes).
- **Mobile override correct:** inside `@media (max-width: 800px)`, `.open { min-height: calc(100vh + 1px); min-height: calc(100svh + 1px); }` overrides the base `dvh` on phone-width only. `100svh` is the stable at-load viewport (iOS Safari toolbar expanded ⇒ `dvh ≈ svh` at scrollY=0), so `svh + 1px` guarantees the hero is 1px taller than the visible first screen, pushing "What I Do" below the fold and absorbing subpixel rounding. Unit choice is right for the stated failure mode.
- **iOS Safari reasoning — svh over dvh is intentional, not a bug:** `dvh` would also cover the fold at load but would grow mid-scroll as the toolbar collapses, stretching the hero under the user (jank / pacing shift). `svh` stays fixed, so the hero owns exactly the first screen at load without re-growing. The code comment states this rationale. Fallback `calc(100vh + 1px)` precedes the `svh` line for browsers without `svh`.
- **Copy untouched:** `git diff d1c70f4..63b476d -- app/page.tsx` is empty — zero changes to What I Do / Shipped Work / My Slop / Elsewhere or any other copy.
- **Build green:** `npm run build` → `✓ Generating static pages (7/7)`, no type/lint errors (verified in this review pass).
- **Read-only constraint honored:** no edits to `app/` in this pass; only this review file updated. Not pushed, implement commit not amended.

## Residual risk notes

- None blocking. The 1px guard means mobile users must scroll ~1px before the hero releases — imperceptible and exactly the intended "no peek" tradeoff. Desktop unaffected (media query scoped to ≤800px).
