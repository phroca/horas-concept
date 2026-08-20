FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN apk add --no-cache apache2-utils

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.d/40-htpasswd.sh /docker-entrypoint.d/40-htpasswd.sh
RUN sed -i 's/\r$//' /docker-entrypoint.d/40-htpasswd.sh \
  && chmod +x /docker-entrypoint.d/40-htpasswd.sh

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://127.0.0.1/health || exit 1
