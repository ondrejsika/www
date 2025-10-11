#!/bin/sh

SITE=$1
IMAGE=$2

rm -rf packages/$SITE/out packages/$SITE/.next
yarn static-$SITE
rm -rf ci/docker/out
cp -r packages/$SITE/out ci/docker/out
docker build --platform linux/amd64 -t $IMAGE ci/docker --pull
rm -rf ci/docker/out
docker push $IMAGE
