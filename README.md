# balllvin-site

Alvin Stark personal website: a cinematic scroll-film site built with Next.js App Router and TypeScript.

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

## Production check

```bash
npm run build
npm run start
```

## Notes

- Dark theme only, plain CSS modules, no heavy animation libraries.
- Scroll scenes use CSS `position: sticky` and `animation-timeline` where supported, with fully readable fallbacks.
- Custom cursor and progress bar are progressive enhancement with `prefers-reduced-motion` support.
