#!/bin/sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

sh ./scripts/deploy-docker.sh ondrej-sika.cz

docker tag ondrejsika/www-manual-ondrej-sika.cz registry.sikalabs.com/www/www/ondrej-sika.cz
docker push registry.sikalabs.com/www/www/ondrej-sika.cz

kubectl rollout restart deployment -n www-static www-static-ondrej-sika-cz
