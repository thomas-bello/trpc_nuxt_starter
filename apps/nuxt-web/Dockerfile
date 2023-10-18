FROM node:lts-buster-slim AS base
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app
RUN export NODE_ENV=production
RUN npm install -g pnpm

FROM base as build
COPY . .
# COPY ./.env.production.local ./.env
RUN pnpm install
RUN pnpm build:nuxt-web

FROM base as prod

COPY --from=build  /app/apps/nuxt-web/.output .
# COPY --from=build  /app/.env.production.local ./.env
# COPY --from=build  /app/packages/database/prisma ./prisma

# RUN npm install -g prisma

EXPOSE 3000
# CMD ["prisma", "migrate", "deploy", "&&", "node", "apps/web/server.js"]
CMD ["node", "server/index.mjs"]
