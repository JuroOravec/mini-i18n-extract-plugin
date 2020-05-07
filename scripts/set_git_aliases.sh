#!/bin/bash
for filepath in scripts/git/*.sh; do
    if [[ ! -e "$filepath" ]]; then continue; fi
    filename=${filepath##*/}
    git config "$@" "alias.${filename%.*}" "!sh scripts/git/$filename"
done