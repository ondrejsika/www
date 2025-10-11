#!/bin/sh
# macOS only

newtab() {
  osascript \
  -e 'tell application "iTerm2" to tell current window to set newWindow to (create tab with default profile)'\
  -e "tell application \"iTerm2\" to tell current session of newWindow to write text \"${@}\""
}

if [ -z $1 ];
then
  for SITE in $(cat sites.txt)
  do
    newtab "yarn run dev-$SITE"
  done
else
  for SITE in $(cat sites.txt | grep $1)
  do
    newtab "yarn run dev-$SITE"
  done
fi
