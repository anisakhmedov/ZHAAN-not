FROM node:20-alpine AS base
WORKDIR /repo
RUN corepack enable
COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile

COPY apps/api apps/api
RUN pnpm --filter api build

FROM node:20-alpine
WORKDIR /app
COPY --from=base /repo/apps/api/dist ./dist
COPY --from=base /repo/apps/api/node_modules ./node_modules
COPY --from=base /repo/apps/api/package.json ./package.json

EXPOSE 4000
CMD ["node", "dist/main.js"]
