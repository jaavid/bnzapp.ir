# BNZ landing design direction

## Design Read

Reading this as: a Persian consumer utility landing page for Android drivers, with a calm but distinctive product language, leaning toward BNZ's warm-neutral / petrol-green / saffron native identity rather than generic SaaS styling.

## Taste Skill dials

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 4`

## Visual contract

- Persian-first and RTL-native.
- Primary petrol green: `#0F5C4A`.
- Warm background: `#F7F8F4`.
- Mint support: `#DCE8E0` and `#A9E5CB`.
- Saffron accent: `#B56B12`; one accent only.
- Primary type: Vazirmatn with Persian digits.
- Avoid AI-purple gradients, glass-card grids, centered-template heroes and three identical feature cards.
- Hero should feel product-led and asymmetric, with the app UI as the dominant visual object.
- Motion is decorative only. Respect `prefers-reduced-motion`.
- No invented product claims. Copy must track the Android app's documented capabilities.

## Source of truth

Product functionality and visual identity come from `jaavid/Benzin`, especially:

- `README.md`
- `CHANGELOG.md`
- `design/README.md`
- `design/product-design/TOKENS.md`

The generated historical `design-system/benzin/MASTER.md` in the Android repository is explicitly non-authoritative and must not override the approved petrol-green / saffron direction.
