#!/bin/sh

SITE=$1
IMAGE=$2

rm -rf packages/$SITE/out packages/$SITE/.next
mkdir -p packages/$SITE/public/api
CI_COMMIT_TITLE=$(git show -s --format=%s)
slu static-api version -e "CI_COMMIT_TITLE=$CI_COMMIT_TITLE" -e "HOSTNAME=$(hostname)" > packages/$SITE/public/api/version.json
yarn static-$SITE
rm -rf packages/$SITE/public/api/version.json
rm -rf ci/docker/out
cp -r packages/$SITE/out ci/docker/out
docker build --platform linux/amd64 -t $IMAGE ci/docker --pull
rm -rf ci/docker/out
docker push $IMAGE
