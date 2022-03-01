#!/usr/bin/env bash

# checkout repo from github
mkdir -p .temp
pushd .temp
git clone --depth=1 https://github.com/pythonkr/pyconkr-secrets.git 
rsync -arv ./pyconkr-secrets/pyconkr-web-2022/ ../
popd
rm -rf ./.temp
