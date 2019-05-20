FROM node as build
WORKDIR /app
COPY package.json .
COPY ./packages/archetype-web/package.json ./packages/archetype-web/package.json
COPY ./packages/archetype-theme/package.json ./packages/archetype-theme/package.json
COPY ./packages/course-landing/package.json ./packages/course-landing/package.json
COPY ./packages/skoleni-docker.cz/package.json ./packages/skoleni-docker.cz/package.json
COPY ./packages/skoleni-git.cz/package.json ./packages/skoleni-git.cz/package.json
COPY ./packages/skoleni-kubernetes.cz/package.json ./packages/skoleni-kubernetes.cz/package.json
COPY ./packages/ansible-skoleni.cz/package.json ./packages/ansible-skoleni.cz/package.json
COPY ./packages/gitlab-ci.cz/package.json ./packages/gitlab-ci.cz/package.json
COPY ./packages/ondrej-sika.cz/package.json ./packages/ondrej-sika.cz/package.json
COPY ./packages/sika-kraml.de/package.json ./packages/sika-kraml.de/package.json
COPY ./packages/ansible-schulung.de/package.json ./packages/ansible-schulung.de/package.json
COPY ./packages/kubernetes-schulung.de/package.json ./packages/kubernetes-schulung.de/package.json
COPY ./packages/dockerschulung.de/package.json ./packages/dockerschulung.de/package.json
RUN yarn install
COPY . .
# TODO: solve yarn install properly
RUN yarn install
ARG SITE=archetype-web
RUN yarn run static-$SITE

FROM nginx:alpine
ARG SITE=archetype-web
COPY --from=build /app/packages/$SITE/out /usr/share/nginx/html
