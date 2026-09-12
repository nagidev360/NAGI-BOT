# NAGI BOT

Production-oriented Discord management platform with a Next.js dashboard, Discord.js worker, Discord OAuth2 and Supabase/PostgreSQL schema.

## Architecture
- `app/` — Next.js dashboard and API routes
- `bot/` — Discord.js worker
- `lib/` — server-side integrations
- `supabase/migrations/` — PostgreSQL schema
- `render.yaml` — web + worker deployment blueprint

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Create a Discord application in the Discord Developer Portal.
3. Add OAuth2 redirect URI: `http://localhost:3000/api/auth/discord/callback`.
4. Generate a bot token and enable the Gateway intents required by your enabled modules.
5. Create a Supabase project and run `supabase/migrations/001_initial.sql` in SQL Editor.
6. Run `npm install`, then `npm run dev` for the web dashboard and `npm run bot` for the worker.

## Production
Use the Render Blueprint in `render.yaml`. Add all secrets through Render environment variables; never commit Discord client secrets, bot tokens or Supabase service-role keys.

## Security
OAuth uses a server-generated state value and HTTP-only cookie. All future dashboard mutations must perform server-side guild authorization and validate input before writing settings. Keep privileged Supabase keys server-only.

## Status
The repository is bootstrapped with the premium landing page, dashboard shell, OAuth foundation, health endpoint, Discord.js runtime, database schema and Render deployment blueprint. Feature modules can now be expanded without replacing the core architecture.
