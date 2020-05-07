# Run commitizen only if we're not in CI env. 
if [[ -z "$CI" ]]; then
  # https://github.com/commitizen/cz-cli/tree/607d514a46c77a837904359224f15cae78a0d0f8#traditional-git-hooks
  exec < /dev/tty && node_modules/.bin/git-cz --hook || true
fi