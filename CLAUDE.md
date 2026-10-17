# Sangam — Hermes Build Rules

- Use Next.js App Router with TypeScript and Tailwind.
- Keep Supabase browser/server clients in `src/lib/supabase/`.
- Put database access in typed helpers under `src/lib/db/`; do not use raw SQL in components.
- Never commit `.env.local`, credentials, API keys, or service-role keys.
- Never put secrets in client components or `NEXT_PUBLIC_` variables.
- Enforce authorization with Supabase Row-Level Security.
- Never use the Supabase service-role key in browser code.
- Keep AI features optional and provide deterministic fallbacks for the demo.
- Preserve the official Sangam scope in `docs/problem-statement.md`.
- Update `progress/CURRENT_TASK.md` and `progress/TODO.md` after each meaningful phase.
- Run `npm run lint` and `npm run build` before claiming a phase complete.
- Use conventional commits: `type(scope): description`.
- Do not publish to GitHub or deploy to Vercel until authentication and target repository are verified.

## Commands

- `npm run dev` — local development
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run start` — production server

## Current demo path

Landing page → opportunity feed preview → Idea Lab preview. Next phase adds Supabase schema, auth and roles.
