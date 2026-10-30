# Charles Michael Sports Hub

Static Astro website for Charles Michael Sports Hub.

## Local development

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`. Astro writes the generated site to `dist/`.

## Deploy to Cloudflare Workers

The Wrangler configuration in `wrangler.jsonc` publishes Astro's `dist/` directory as static assets. In the Cloudflare dashboard, configure the connected Worker build as follows:

- **Root directory:** the repository root (leave blank if the project is at the repository root)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

Cloudflare must run the build command before deployment so that the configured `dist/` directory exists. To deploy locally, run `npm ci`, then `npm run build` and `npx wrangler deploy`.
