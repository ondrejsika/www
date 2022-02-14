# syntax = docker/dockerfile:experimental
FROM node:15.14.0 as build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/app/node_modules yarn install
ARG SITE=archetype-web
RUN --mount=type=cache,target=/app/node_modules yarn run static-$SITE

FROM nginx:alpine
ARG SITE=archetype-web
COPY --from=build /app/packages/$SITE/out /usr/share/nginx/html
