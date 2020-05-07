# Auto detect current local branch and push upstream to origin
git push -u origin $(git branch | sed -n 's/^\* //p') "$@"