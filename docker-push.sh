#!/bin/sh

for SITE in $(cat sites.txt)
do
docker push registry.sikahq.com/www/www/$SITE
done
