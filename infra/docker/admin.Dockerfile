FROM node:20-alpine AS base
WORKDIR /repo
RUN corepack enable
COPY package.json pnpm-workspace.yaml ./
COPY apps/admin/package.json apps/admin/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile

COPY apps/admin apps/admin
RUN pnpm --filter admin build

FROM node:20-alpine
WORKDIR /app
COPY --from=base /repo/apps/admin ./
EXPOSE 3001
CMD ["pnpm", "start"]
