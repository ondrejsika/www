# syntax=docker/dockerfile:1
FROM node:26 AS build
# yarn workspace to install & build in (. or sites20)
ARG WORKSPACE=.
ARG SITE
ARG SITE_DIR=packages/$SITE
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
  cd $WORKSPACE && \
  yarn install --frozen-lockfile && \
  yarn run static-$SITE
RUN mv $SITE_DIR/out /out

FROM nginx:alpine
COPY ci/docker/entrypoint.sh /
COPY ci/docker/nginx-site.conf /etc/nginx/conf.d/default.conf
COPY --from=build /out /usr/share/nginx/html
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
