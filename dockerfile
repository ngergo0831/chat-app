FROM node:alpine AS builder
WORKDIR /app
COPY *.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 80
CMD npm start
