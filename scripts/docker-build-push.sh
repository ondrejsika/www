#!/bin/sh

SITE=$1
IMAGE=$2

mkdir -p packages/$SITE/public/api
CI_COMMIT_TITLE=$(git show -s --format=%s)
slu static-api version -e "CI_COMMIT_TITLE=$CI_COMMIT_TITLE" -e "HOSTNAME=$(hostname)" > packages/$SITE/public/api/version.json
docker build --platform linux/amd64 --pull --build-arg SITE=$SITE -t $IMAGE .
rm -rf packages/$SITE/public/api/version.json
docker push $IMAGE
