#!/bin/sh

SITE=$1
NAME=$(echo $SITE | sed "s/\./-/g")

DOMAIN=$NAME-$(git rev-parse --abbrev-ref HEAD)-$(git rev-parse --short HEAD)-$(date +%s).surge.sh

yarn static-$SITE
surge packages/$SITE/out $DOMAIN
