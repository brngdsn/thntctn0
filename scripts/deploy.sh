#!/bin/sh
# this is after the build succeeds
cd build
git init
git checkout --orphan gh-pages
    git remote add upstream https://$GH_TOKEN@github.com/brngdsn/thntctn0
git add .
git commit -m "deploy"
git push upstream gh-pages --force