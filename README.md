# locus-site

Marketing + whitepaper site for **Locus** — the verifiable AI memory primitive for Solana.

- Live: https://locus.automate-capture.com
- Protocol code: https://github.com/Lumi-node/locus
- Whitepaper: `/whitepaper`

## Stack

- [Astro](https://astro.build) (static, zero-JS by default)
- [Tailwind CSS](https://tailwindcss.com)
- MDX for long-form content
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)

## Develop

```bash
npm install
npm run dev          # localhost:4321
npm run build        # static output to dist/
npm run preview
```

## Deploy

Cloudflare Pages:
- Connect this GitHub repo
- Build command: `npm run build`
- Build output: `dist`
- Node version: 20

DNS:
- `locus.automate-capture.com` → CNAME → `<project>.pages.dev`

## License

MIT
