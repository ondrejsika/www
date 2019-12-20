#!/bin/sh

. deploy-now.env.sh

SITE=$1

IMAGE=$CI_REGISTRY_IMAGE/now/$SITE

rm -rf packages/$SITE/out packages/$SITE/.next
yarn static-$SITE
rm -rf ci/docker/out
cp -r packages/$SITE/out ci/docker/out
docker build -t $IMAGE ci/docker
rm -rf ci/docker/out
docker push $IMAGE
sod_curl_url="$SOD_URL/api/v1/deploy/docker/?image=$IMAGE&domain=$SITE&token=$SOD_TOKEN&registry=$CI_REGISTRY&registry_user=$CI_REGISTRY_USER&registry_password=$CI_REGISTRY_PASSWORD"
sod_curl_cmd="curl -f $sod_curl_url"
echo $sod_curl_cmd
$sod_curl_cmd
echo
