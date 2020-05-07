# Source Version Control and Workflow

## Table of Content

- [Source Version Control](#source-version-control)
- [Workflow](#workflow)
- [Workflow: Issues](#workflow-issues)
- [Workflow: Branches](#workflow-branches)
- [Workflow: Commits](#workflow-commits)
  - [Commit Hooks](#commit-hooks)
  - [Conventional Commits](#conventional-commits)
- [Pull Requests](#pull-requests)
  - [Approvals](#approvals)
  - [Formatting](#formatting)
  - [Code quality](#code-quality)
- [Workflow: Other](#workflow-other)
- [GitHub: Integrations](#github-integrations)
- [GitHub: Web Extensions](#github-web-extensions)
  - [General](#general)
  - [Readability/Formatting](#readability-formatting)
  - [Collaboration](#collaboration)
  - [Project analysis](#project-analysis)
  - [Miscellaneous](#miscellaneous)

---

## Source Version Control

This project uses [git](https://git-scm.com/) and [GitHub](https://github.com/)
for version control.

Some useful git aliases are shown [here](https://stackoverflow.com/a/21910335/9788634).

GitHub-specific commands such as cloning a repo, can be executed from command
line using [hub](https://hub.github.com/).

Both Git and GitHub provide a lot of surface for workflow automation. See
available [Git hooks](https://githooks.com/) and
[GitHub webhooks](https://developer.github.com/webhooks/).

---

## Workflow

Project's setup and automation considers the following workflow:

Master ⟶ Issue ⟶ Branch ⟶ Commit ⟶ Pull request ⟶ Merge to dev ⟶ Merge to master on release

In other words:

We have our main branch. Upon recognizing a new issue that should be worked on,
we create a new branch where we carry out the changes and commit them. When
done, we create a pull request to merge the changes into the main branch.

Releasing is done through tagged commits.

## Workflow: Issues

This project does not apply any conventions or workflows to issues tracking and
management.

## Workflow: Branches

This project does not apply any conventions or workflows to branches. General
advice apply:

- Use separete master and dev branches, optionally staging branch.
- Never modify the master directly, always make a branch from dev
  and merge that to dev.
- Tag releases
- It might be a good idea to set a
  [convention for branch naming](https://stackoverflow.com/questions/273695/)
  to include the change type or branch owner, but this is up to your needs.
- In terms of project management, ensure that each branch has an owner.

## Workflow: Commits

### Commit Hooks

Hooks that run on different git actions are handled in `husky` property
in `package.json`.

A lot can be going on the pre-commit hook, so before the code is actually
commited.
The actions are handled by
[lint-staged](https://github.com/okonet/lint-staged),
and all the steps included can be found in `.lintstagedrc`.

Generally, what we want to do is to:

1. Lint and format the code.
2. Test the code to confirm we're not breaking anything we shouldn't.
3. Check that we are not commiting any sensitive information.
   - Note that the NPM package that provides this
     [detect-secrets](https://github.com/lirantal/detect-secrets),
     requires running Docker
4. If the code has been modified during this process in any way (e.g. by
   formatters), add the new changes to the commit.

### Conventional Commits

Why should be care about the standardized commits? Let's pose
counter-questions:

Would it not be nice if the changes could be easily searched and skimmed? Or if
things like versioningm releases and changelogs could be automated? And as
always, reducing mental burden is imporant.

That's why the projects follows the
[Conventional Commits spec](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

By default, the project uses commit types recognized by
[standard-version](https://github.com/conventional-changelog/standard-version).
If you need to modify the commit types, modify the types in `.releaserc.yml` as
outlined in
[this article](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7).

#### Conventional Commits: Client-side

Conventional commits are guarded when you make a commit in your workspace by
a combination of Husky (git hooks), Commitlint (validation) and Commitzen
(formatter). This ensures that anything you push should be conformant.

To make a commit, make sure your changes are ready and run only `git commit`.
Commitzen will automatically ask you for commit type, message, body and other
required info if necessary.

See [this](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7)
and [this](https://itnext.io/how-to-automate-versioning-and-publication-of-an-npm-package-233e8757a526)
article for implementation details.

More on Commitzen [here](http://commitizen.github.io/cz-cli/).

#### Conventional Commits: Service-side

Client-side checks can be bypassed either explicitly, or if the commit is made
in a different environemnt or from an app/service. To make these exceptions
visible on pull requests, we additionally use
[Zappr's](https://github.com/zalando/zappr) option to
[validate commit messages](https://zappr.readthedocs.io/en/latest/setup/#commit-messages).

Zappr checks for 2 things:

- that the commit message have the conventional format.
- that the commit message contains the reference to the issue it relates to, or
  an explicit `no-issue`.

More on setting up Zappr can be found
[here](https://zappr.readthedocs.io/en/latest/).

---

## Pull Requests

Pull requests are the gates before letting a change to enter the codebase.
Because of that a lot of checks happen here.

### Approvals

All pull requests should be approved as a sign of acknowledgment.
[Zappr](https://zappr.opensource.zalan.do/) helps us to be explicit about the
approval requirements by allowing us to write the _Approval as a Code_ (aka
AaaC, and I might have just made that up).

You can see the number of required approvals and from which groups
of people they should be from in `.zappr.yaml`. Downside of using Zappr,
however, is that it doesn't support the native GitHub's approval. Instead,
Zappr's approval work by reading the comments under the PR and matching them
against regexes, such as `+1` or `LGTM`. Nevertheless, having a system which
allows us to be explicit about the requirements is good for transparency.

### Formatting

Zappr's `specification` config section allows us to validate the format of the
PR.

The Zappr's `Pull Request Tasks` checks if all checkboxes in the PR were
fulfilled.

NOTE: `Pull Request Tasks` would have been useful if Zappr allowed to ignore
some checkboxes. Currently it required ALL checkboxes to be ticked, which is
good if checkboxes represent tasks, but not good if checkboxes represent
choices.

While these are minor things, it can help to catch incomplete PRs if they were
to arise, which could otherwise raise issues in the future when searching for
things retrospectively.

Unfortunately,
[Zappr's documentation](https://zappr.readthedocs.io/en/latest/setup/#specification)
is lacking in this aspect, so it might not work as expected.
Nevertheless, the current settings at least require to link the PRs
to their issues.

### Code quality

To minimize errors and ambiguity entering the codebase, a suite of apps carry
out checks like tests, code complexity and vunelrability checks, conformation
to conventions, etc. See the list of
[GitHub apps used on pull requests](#github-integrations)
used in this project.

## Workflow: Other

Additional improvements to this setup could be in terms of standardized issue
tracking and categorization, or project management frameworks to specify the
issues and their scope.

## GitHub: Integrations

- [Codecov](https://codecov.io/) - Checks whether the codebase fulfills
  specified code coverage. Expected code coverage thresholds are specified in
  `jest.config.js`.
- [LGTM](https://lgtm.com/) - Security and code quality analysis. Can detect
  some security issues and code quality issues. Complements both Snyk and
  CodeClimate.
- [Snyk](https://snyk.io/) - Security analysis. Checks dependency
  vulnerabilities.
- [CodeClimate](https://codeclimate.com/quality/) - Code quality review. Checks
  things like logic complexity, argument counts, refactoring opportunities,
  etc. The
  [config](https://docs.codeclimate.com/docs/configuring-your-analysis#section-maintainability-checks)
  can be modified in `.codeclimate.yml`.
- [Zappr](https://github.com/zalando/zappr) - Pull request, commit, and
  approval policies as a code. Checks that commits and PRs are conformant, and
  that PRs receive enough approvals before accepting. The
  [config](https://zappr.readthedocs.io/en/latest/setup)
  can be modified in `.zappr.yml`.
- [DependaBot](https://dependabot.com/) - Dependency management - Creates
  a pull request when there's a dependency that should be updated. The
  [config](https://dependabot.com/docs/config-file)
  can be modified in `dependabot/config.yml`.
- [Travis](https://travis-ci.com/) - CI pipeline. Used for testing, deploying
  and releases. The
  [config](https://docs.travis-ci.com/user/customizing-the-build/)
  can be modified in `.travis.yml`.
- [AllContributors](https://github.com/all-contributors/all-contributors-bot) - Contributors list management.

For more ways how the GitHub workflow could be automated, see
[ProBot](https://probot.github.io/apps/)
([some](https://probot.github.io/apps/dco/)
[examples](https://probot.github.io/apps/delete-merged-branch/)
[in](https://probot.github.io/apps/pull/)
[these](https://probot.github.io/apps/release-drafter/)
[links](https://probot.github.io/apps/stale/)
[here](https://probot.github.io/apps/reminders/))

## GitHub: Web Extensions

To make it easier to work with GitHub, below is a set of web extensions that
help with readability or productivity.

The full list of curated extensions can be found
[@ Awesome GitHub](https://github.com/stefanbuck/awesome-browser-extensions-for-github).

### General

- [Refined GitHub](https://github.com/sindresorhus/refined-github)

### Readability/Formatting

- [GitHub Repo Size](https://github.com/harshjv/github-repo-size)
- [GitHub Code Folding](https://github.com/noam3127/github-code-folding)
- [OctoLinker](https://github.com/OctoLinker/OctoLinker)
- [OctoHint](https://github.com/pd4d10/octohint)
- [OctoPeek](https://github.com/sheonhan/octopeek) once
  [this](https://github.com/sheonhan/octopeek/issues/2) is fixed
- [GitHub Issue Link Status](https://github.com/fregante/github-issue-link-status)

### Collaboration

- [Git History Browser Extension](https://github.com/pomber/git-history)

### Project analysis

- [OctoTree](https://github.com/ovity/octotree)
- [CodeFlower](https://github.com/code-flower)
  ([why?](https://chrome.google.com/webstore/detail/codeflower/mnlengnbfpfgcfdgfpkjekoaeophmmeh/related))

### Miscellaneous

- [OctoPermalinker](https://github.com/josephfrazier/octopermalinker)
- [Notifications Preview for GitHub](https://github.com/tanmayrajani/notifications-preview-github)
  could be useful
  [once fixed](https://github.com/tanmayrajani/notifications-preview-github/issues/92)
- [GitHub File Icon](https://github.com/homerchen19/github-file-icon)
- [Awesome Autocomplete for GitHub](https://github.com/algolia/github-awesome-autocomplete)

## References

Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc).
