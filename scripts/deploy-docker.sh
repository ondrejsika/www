#!/bin/sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
"$SCRIPT_DIR/docker-build-push.sh" $1 ondrejsika/www-manual-$1
