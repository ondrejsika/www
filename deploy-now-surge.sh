#!/bin/sh

SITE=$1
NAME=$(echo $SITE | sed "s/\./-/g")
BRANCH=$CI_COMMIT_REF_SLUG
[ -z "$BRANCH" ] && BRANCH=$(git rev-parse --abbrev-ref HEAD)

DOMAIN=$NAME-$BRANCH-$(git rev-parse --short HEAD)-$(date +%s).surge.sh
DOMAIN_BRANCH=$NAME-$BRANCH.surge.sh

yarn static-$SITE
./node_modules/.bin/surge packages/$SITE/out $DOMAIN
./node_modules/.bin/surge packages/$SITE/out $DOMAIN_BRANCH
