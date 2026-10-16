# Vishnu Subramani — Portfolio

The single-page portfolio at https://vishnus.online, built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. Includes light/dark themes, a native cursor, a compact Ghost Notes entry with a hover/focus photo preview and a mobile tap control, and a static production export.

## Development

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm run build
```

Production files are generated in `out/`. Preview that directory with a static HTTP server; `next start` is not supported with static export.

## Content

- `src/app/page.tsx`: introduction and page layout
- `src/data/projects.ts`: selected projects
- `src/data/experience.ts`: work history
- `src/data/skills.ts`: technical stack and agent tooling
- `src/data/links.ts`: contact and social links
- `src/app/layout.tsx`: search and sharing metadata
- `public/photos/`: optimized, metadata-free WebP copies of user-supplied performance photos; originals are kept outside the repository

The resume link and public PDF have been removed. Dispatchient (formerly Keyfortly Agent) links to its public marketing frontend at https://dispatchient.mistyfrog8.chatgpt.site. Its private repository is not linked.

## Deployment

AWS Amplify app `d2y6sl25s1iozp` in `us-east-2` builds the `main` branch automatically using `amplify.yml`. The production domains are `vishnus.online` and `www.vishnus.online`.

After pushing a verified commit to `main`, check the Amplify build and verify the public domain:

```sh
aws amplify list-jobs --app-id d2y6sl25s1iozp --branch-name main --region us-east-2 --max-results 5
```
