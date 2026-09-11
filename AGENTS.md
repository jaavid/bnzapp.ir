# AGENTS.md

## Frontend design workflow

This repository uses Taste Skill as the default anti-template frontend review pass.

Install for Codex / compatible agents:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

For a stricter GPT/Codex pass:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "gpt-taste"
```

Before changing visual code:

1. Read `DESIGN.md`.
2. Preserve the BNZ product identity and RTL behavior.
3. Treat `DESIGN_VARIANCE=7`, `MOTION_INTENSITY=4`, `VISUAL_DENSITY=4` as the baseline.
4. Audit at 375px, 768px, 1024px and 1440px.
5. Keep animation optional and reduced-motion safe.
6. Do not invent pricing, official fuel-card connectivity, online sync, analytics, accounts, or live quota lookup.
7. Prefer asymmetric composition and varied section geometry over repetitive equal-card grids.
8. Keep the landing statically deployable to GitHub Pages.

## Verification

```bash
npm install
npm run build
```
