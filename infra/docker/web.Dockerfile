FROM node:20-alpine AS base
WORKDIR /repo
RUN corepack enable
COPY package.json pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile

COPY apps/web apps/web
RUN pnpm --filter web build

FROM node:20-alpine
WORKDIR /app
COPY --from=base /repo/apps/web ./
EXPOSE 3000
CMD ["pnpm", "start"]
