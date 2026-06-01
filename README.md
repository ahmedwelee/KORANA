# KoraNow (KORANA)

KoraNow is a full-stack football social + competitive platform for Morocco.

## Monorepo structure

- `apps/mobile` - React Native + Expo app
- `apps/web` - Next.js user-facing website
- `apps/admin-web` - Next.js admin panel
- `apps/api` - NestJS backend + Prisma
- `packages/shared` - shared constants, enums, and DTO contracts

## Brand palette

- Electric Green `#32D74B`
- Deep Blue `#007AFF`
- Dark Navy `#0A1128`

## API foundation included

- JWT auth + OAuth/phone scaffolds
- Role support (Player/Captain/Admin/Field Owner)
- City-filtered profile, team, and challenge endpoints
- Challenge lifecycle + match-room auto-expiry
- Realtime Socket.io gateway for room messaging
- Ratings, notifications, moderation reports
- Prisma schema + seed script

## Local commands

From repository root:

```bash
npm install
npm run lint
npm run build
npm run test
```

For API Prisma:

```bash
cd apps/api
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```
