#!/bin/sh

. deploy-now.env.sh

SITE=$1
NAME=$(echo $SITE | sed "s/\./-/g")

IMAGE=$CI_REGISTRY_IMAGE-$SITE-deploy-now:$(git rev-parse --abbrev-ref HEAD)-$(git rev-parse --short HEAD)-$(date +%s)

rm -rf packages/$SITE/out packages/$SITE/.next
yarn static-$SITE
rm -rf ci/docker/out
cp -r packages/$SITE/out ci/docker/out
docker build -t $IMAGE ci/docker --pull
rm -rf ci/docker/out
docker push $IMAGE
ORIGINAL_KUBERNETES_CONTEXT=$(kubectl config current-context)
kubectl config use-context $KUBERNETES_CONTEXT
helm upgrade --install $NAME ondrejsika/one-image --set host=$SITE --set image=$IMAGE --set changeCause=$(git rev-parse --abbrev-ref HEAD)-$(git rev-parse --short HEAD)
kubectl config use-context $ORIGINAL_KUBERNETES_CONTEXT
