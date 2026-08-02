# Zhaan Booking Ecosystem

Multi-category booking platform covering hotels, salons, rentals, flight tickets and train tickets.

## Structure

Monorepo (pnpm workspaces + Turborepo):

```
apps/
  web/       Next.js customer-facing booking site
  admin/     Next.js admin/operations dashboard
  api/       NestJS backend API (REST)
  mobile/    Expo (React Native) mobile app
packages/
  ui/          Shared React component library (used by web + admin)
  types/       Shared TypeScript types/DTOs
  utils/       Shared utility functions
  config/      Shared eslint/typescript/tailwind configs
  api-client/  Typed SDK for calling the API (used by web, admin, mobile)
infra/
  docker/    Dockerfiles per app
  nginx/     Reverse proxy config
docs/        Architecture & domain documentation
```

## Getting started

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Run a single app:

```bash
pnpm dev:web
pnpm dev:admin
pnpm dev:api
pnpm dev:mobile
```

## Domains

The API is organized around a generic booking core (`providers`, `bookings`,
`availability`, `payments`, `reviews`) plus per-category modules under
`apps/api/src/modules/categories/`: `hotels`, `salons`, `rentals`, `flights`,
`trains`. New booking categories should follow the same pattern.
