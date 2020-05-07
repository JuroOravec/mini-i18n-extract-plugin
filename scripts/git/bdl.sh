# Delete local branches
# Deletes _purely_ local branches, those that do not track any remote branch.
# https://stackoverflow.com/a/50473942/9788634
git branch -vv | cut -c 3- | awk '$3 !~/\[/ { print $1 }' | xargs git branch -D "$@"