#!/bin/sh
npm install
npm run build
npm run extract
sha256sum build.zip > SHA256SUMS.txt

