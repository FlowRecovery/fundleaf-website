# FundLeaf homepage

Minimal public website for [fundleaf.co.uk](https://fundleaf.co.uk), built with Next.js and deployed on Vercel.

The public homepage is intentionally separate from the future FundLeaf application. The application can later be deployed as its own Vercel project at `app.fundleaf.co.uk` without changing this repository.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` deploy to the production Vercel project through its GitHub integration. Pull requests receive preview deployments.

No database, analytics, forms, or other external services are required for this scaffold.

## Content rules

- Do not use em dashes (`—`). Use en dashes (`–`) or commas instead.
