# 🛠 Developing

This page will help you get started quickly with working and developing the
project, whether you are contributing to the project or working on your own
fork.

This page focuses on the practicalities (executing scripts in right order).

If you are contributing to the project, be sure to check out
[CONTRIBUTING.md][contributing]
for best practices, understanding the conventions we use, and the learning
about how to contribute to the project.

Also check out [Source Version Control and Workflow][svc_and_workflow], which talks more about the workflow, as well as GitHub integrations we use.

## Table of Content

- [Starting](#starting)
- [Developing](#developing)
- [Building](#building)
- [Testing](#testing)
- [Commiting and Pushing Changes](#commiting-and-pushing-changes)
- [Deploying / Publishing](#deploying-/-publishing)
- [References](#references)

## Starting

To get started with the project, clone it from GitHub.

```shell
git clone https://github.com/JuroOravec/mini-i18n-extract-plugin.git
cd instance-manager
npm install
```

If you're contributing to the original project (not a fork), create and work in
a new git branch that will contain all your changes.

```shell
git checkout -b <name_of_your_new_branch>
```

## Developing

The project is written in TypeScript.

To stick to the coding style, run

```bash
# Runs prettier - this will try to autofix style errors
npm run format
# Runs linter - this will warn you about existing errors - fix them yourself
npm run lint
```

If you've changed any APIs, types, or modified annotation, update documentation
with

```bash
npm run typedoc:markdown
```

If you are contributing to the original project, you might want to add yourself
to the contributors if you haven't done so yet. In such case, run

```bash
# Adds you to the contributors in `.all-contributorsrc`
# See https://allcontributors.org/docs/en/emoji-key for contribution types
npm run contributors:add <your-github-username> <contribution-type>
# Updates table of contributors in README
npm run contributors:generate
```

## Building

To build the distribution, run

```bash
# Build project
npm run build
# Or for live updates
npm run watch
```

## Testing

We use Jest for tests. Tests are written in `__tests__` directory that's in the
same location as the tested file. To run tests, run

```shell
npm test
```

If you need to add mocks, stubs, put them into root level `test` directory.

## Commiting and Pushing Changes

To commit, run

```bash
git commit
```

This will start
[Commitzen](https://github.com/commitizen/cz-cli)
that will help you to format the commit message correctly. The prompt will look
something like this.

```txt
? Select the type of change that you're committing: (Use arrow keys)
❯ feat:        A new feature
  fix:         A bug fix
  improvement: An improvement to a current feature
  docs:        Documentation only changes
  style:       Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor:    A code change that neither fixes a bug nor adds a feature
  perf:        A code change that improves performance
(Move up and down to reveal more choices)
```

To push the changes, run

```bash
# Set remote on your first push
git push --set-upstream origin/<name_of_your_new_branch>
# Next time you will be pushing, you can just run
git push
```

This will trigger validation (check linting, tests, security, etc).
If anything of the tests errors out, the push will abort.

## Deploying / Publishing

Publishing is handled by
[semantic-release](https://github.com/semantic-release/semantic-release)
on pull requests and merges to `master` branch in the CI.

If you need to publish outside the CI (e.g. to release your own fork to NPM),
semantic-release has a `--no-ci` flag. See semantic-release for
[all config options](https://github.com/semantic-release/semantic-release/blob/caa3526caa686c18eb935dace80a275017746215/docs/usage/configuration.md#configuration).

## References

Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc).

[svc_and_workflow]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/source_control_and_workflow.md
[contributing]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/CONTRIBUTING.md
