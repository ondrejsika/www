#!/bin/sh

SITE=$1
NAME=$(echo $SITE | sed "s/\./-/g")

DOMAIN=$NAME-$(git rev-parse --abbrev-ref HEAD)-$(git rev-parse --short HEAD)-$(date +%s).surge.sh
DOMAIN_BRANCH=$NAME-$(git rev-parse --abbrev-ref HEAD).surge.sh

yarn static-$SITE
surge packages/$SITE/out $DOMAIN
surge packages/$SITE/out $DOMAIN_BRANCH
