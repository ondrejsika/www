#!/bin/sh

yarn run static-$1
statica $1 ./packages/$1/out
