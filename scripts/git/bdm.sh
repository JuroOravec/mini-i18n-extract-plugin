# Delete merged branches from local branches
# https://stackoverflow.com/a/6127884/9788634
git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d