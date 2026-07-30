FROM node:24-alpine AS build

WORKDIR /app

COPY todo/package*.json ./
RUN npm ci

COPY todo/ .
RUN npm run build

FROM nginx:1.27-alpine

COPY todo/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/todo/browser /usr/share/nginx/html

EXPOSE 10000

