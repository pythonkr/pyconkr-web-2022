#!/usr/bin/env bash



# REPO_BASE_URL="github.com/pythonkr/pyconkr-secrets.git"
# REPO_URL="https://${REPO_BASE_URL}"
REPO_URL="git@github.com:pythonkr/pyconkr-secrets.git"

# checkout repo from github
mkdir -p .temp
pushd .temp
git clone --depth=1 ${REPO_URL}
rsync -arv ./pyconkr-secrets/pyconkr-web-2022/ ..
popd
rm -rf ./.temp
