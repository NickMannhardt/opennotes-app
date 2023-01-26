#! /bin/bash

configs=("content" "sandbox")

for c in ${configs[@]}; do
    npx webpack --env config=$c
done
