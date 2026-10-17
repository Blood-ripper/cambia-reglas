# Sangam Build Guide

The full user-supplied “Sangam — Hermes Build Guide” is the execution reference for the 24-hour build. The verified product baseline is in `docs/problem-statement.md`.

Execution order:

1. Local scaffold and quality rules
2. Supabase schema and RLS
3. Auth, profile and roles
4. Opportunity feed
5. Q&A, polls, Idea Lab and apply flow
6. Optional AI features with deterministic fallback
7. Hire-Proof engine
8. Seed data, tests and deployment
9. UI polish and demo rehearsal

Credentials are never placed in chat or committed. Supabase, Gemini, Cloudflare, GitHub and Vercel authentication must use official local/browser flows.

Adaptations for this repository:

- The Next.js scaffold already exists at this folder.
- The source PPTX/PDF are preserved under `docs/`.
- Supabase and external provider work begins only after local schema files and environment placeholders are prepared.
- The core demo must run without Gemini, Turnstile or Supabase credentials.
- Every phase requires a passing lint/build check and a progress update.
