# --- Base dependencies ---
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Builder stage ---
FROM deps AS builder
WORKDIR /app
COPY . .
ENV NEXT_DISABLE_TYPECHECK=1
RUN npm run build

# --- Dev image ---
FROM deps AS dev
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# --- Production image ---
FROM node:18-alpine AS prod
WORKDIR /app


# Only needed files from builder stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package-lock.json ./package-lock.json


ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]