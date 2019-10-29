#!/bin/sh

touch /usr/share/nginx/html/redirects.txt

echo "" > /etc/nginx/redirects.conf
echo "map_hash_bucket_size 128;" >> /etc/nginx/redirects.conf
echo "map \$request_uri \$redirect_uri {" >> /etc/nginx/redirects.conf

while read line; do
  [ -z "$line" ] && continue
  echo "$line;" >> /etc/nginx/redirects.conf
  echo "$line;" | sed 's/ /\/ /g' >> /etc/nginx/redirects.conf
done </usr/share/nginx/html/redirects.txt

echo "}" >> /etc/nginx/redirects.conf

exec "$@"
