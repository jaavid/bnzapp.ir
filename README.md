# bnzapp.ir

Official landing page for **BNZ**, the Persian offline-first Android fuel tracker.

## Stack

- Vite
- React
- Plain CSS
- GitHub Pages
- Custom domain: `bnzapp.ir`

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Taste Skill

The visual direction is documented in `DESIGN.md` and is intended to be reviewed with [Taste Skill](https://github.com/Leonxlnx/taste-skill).

Install the default skill:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Or use the stricter GPT/Codex variant:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "gpt-taste"
```

Then ask the agent to read `DESIGN.md` and `AGENTS.md` before changing the UI.

## GitHub Pages

The workflow at `.github/workflows/pages.yml` builds `dist/` and deploys it with GitHub Pages Actions.

One-time repository setting:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Merge the landing PR into `main` or manually run the Pages workflow.

The `public/CNAME` file sets the custom domain to `bnzapp.ir`.

### DNS for the apex domain

Create these `A` records for `@`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional `www` record:

```text
CNAME  www  jaavid.github.io
```

After DNS is active, enable **Enforce HTTPS** in GitHub Pages.

## Product source of truth

Website copy should only advertise functionality documented in `jaavid/Benzin`. In particular, BNZ is currently offline-first and has no account, backend, ads, analytics or official live fuel-card balance lookup.
