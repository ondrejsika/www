#!/bin/sh

. deploy-now.env.sh

SITE=$1

IMAGE=$CI_REGISTRY_IMAGE/now/$SITE

yarn static-$SITE
rm -rf ci/docker/out
cp -r packages/$SITE/out ci/docker/out
docker build -t $IMAGE ci/docker
docker push $IMAGE
curl -f "$SOD_URL/api/v1/deploy/docker/?image=$IMAGE&domain=$SITE&token=$SOD_TOKEN&registry=$CI_REGISTRY&registry_user=$CI_REGISTRY_USER&registry_password=$CI_REGISTRY_PASSWORD"
rm -rf ci/docker/out
