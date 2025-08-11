FROM node:22-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /services/api-gateway

RUN yarn global add turbo
COPY . .
RUN turbo prune api-gateway --docker


# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /services/api-gateway

# First install dependencies (as they change less often)
COPY --from=builder /services/api-gateway/out/json/ .
RUN yarn install

# Build the project and its dependencies
COPY --from=builder /services/api-gateway/out/full/ .

RUN yarn turbo build

FROM base AS runner
WORKDIR /services/api-gateway

# Don't run production as root
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /services/api-gateway .

CMD node apps/api-gateway/dist/index.js
