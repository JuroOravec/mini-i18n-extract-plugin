# Contributing

We love your input! We want to make contributing to this project as easy and
transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

_As you will read on the details of contributing, remember that when unsure
about something, e.g. formatting or level of detail, err on the side of
submitting those items. The formatting or details can always be filled in
later, but your insight cannot be replaced._

---

## Table of Content

- [Reporting Small Bugs, Quick Fixes, Typos](#reporting-small-bugs-quick-fixes-typos)
- [Reporting Bugs](#reporting-bugs)
- [Reporting Security Issues](#reporting-security-issues)
- [Suggesting a Feature or Enhancement](#suggesting-a-feature-or-enhancement)
- [Contribution Guidelines](#contribution-guidelines)
  - [Hosting Service](#hosting-service)
  - [Workflow](#workflow)
  - [Logging](#logging)
  - [Code, commit message and labeling conventions](#code-commit-message-and-labeling-conventions)
  - [Responsibilities](#responsibilities)
  - [Ways I can contribute](#ways-i-can-contribute)
  - [After Contributing](#after-contributing)
- [Pull Requests](#pull-requests)
- [Code Review Process](#code-review-process)
- [Your First Contribution](#your-first-contribution)
- [License](#license)
- [References](#references)

---

## Reporting Small Bugs, Quick Fixes, Typos

> In these cases, you can either
> [report it as a bug](#reporting-bugs), or
> [create a pull request](#pull-requests)
> right away, as the changes are likely to be accepted.

These are the bugs/fixes that do not introduce any new functionality or logic,
as long as the change does not affect functionality. Some examples are:

- Spelling / grammar fixes
- Typo correction, white space and formatting changes
- Comment clean up
- Bug fixes that change default return values or or constants
- Adding logging messages or debugging output
- Changes to ‘metadata’ files like .gitignore, build scripts, etc.
- Moving source files from one directory or package to another

---

## Reporting Bugs

> Report bugs using Github's [issues][issues]

Issues are very valuable to this project:

- Ideas are a valuable source of contributions others can make
- Problems show where this project is lacking
- With a question you show where contributors can improve the user experience

Thank you for creating them :heart:

### Writing bug reports

> The single most important thing is to report the bug. If you are unsure about
> some details or the format of the report, create an issue and write what you
> know!
>
> Once that is done, there will be plenty of opportunities to refine the
> issue to ensure we all understand the topic clearly.

Generally, write bug reports with detail, background, and sample code.
[This is a good example](http://stackoverflow.com/q/12488905/180626)
of a bug report.

**Great Bug Reports** tend to have:

- A quick summary and/or background.
- Steps to reproduce.
  - Be specific!
  - Give sample code if you can.
- What you expected would happen.
- What actually happens.
- Notes, possibly including why you think this might be happening, or stuff
  you tried that didn't work.

Thorough bug reports help _tremendously_ in getting the ideas across.

---

## Reporting Security Issues

> If you find a security vulnerability, email juraj.oravec.josefson@gmail.com.
> Do not open an issue as publicizing the security vulnerability may put more
> people/data at risk.

Not sure if you came across a security issue? Ask yourself these two questions:

- Can I access something that's not mine, or something I shouldn't have access
  to?
- Can I disable something for other people?

If the answers are yes, or you are not sure, it's safer to get in touch.

When reporting the security issue, follow the same general rules as when
[writing a bug report](#writing-bug-reports). Share the details and be
specific.

---

## Suggesting a Feature or Enhancement

Is our project missing something? Maybe a new feature, support for a particular
standard (think YAML vs JSON), or maybe documentation?

Whichever the area, if you think our porject should or could expand, share it
with the rest of the community!

> To suggest a feature, open a new issue and select the
> [Feature request template][feature_request_template]. The template will
> guide you through what information is needed to be able to fairly evaluate
> the feature request.
>
> Don't worry if you aren't sure about some of the details mentioned in the
> [Feature request template][feature_request_template]! Fill in what you know,
> and if the suggestions is suitable to the project, we will guide you on the
> rest of the information needed.

After the feature request is submitted, congratulations! Now be sure to check
out notifications on the issue and respond to questions or requests of more
information from the rest of the community.

Once all necessary information is know, the feature request is formalized so it
could be considered by the project's core team. You can see the state of the
suggestion throughout our pipeline by following the suggestion through our
[issue labelling conventions][issue_labels@status].

<!--
### If you have a particular roadmap, goals, or philosophy for
development, share it here

This information will give contributors context before they make suggestions
that may not align with the project’s needs.

> The Express philosophy is to provide small, robust tooling for HTTP servers,
> making it a great solution for single page applications, web sites, hybrids,
> or public HTTP APIs.
>
> Express does not force you to use any specific ORM or template engine. With
> support for over 14 template engines via Consolidate.js, you can quickly
> craft your perfect framework.

[source: [Express](https://github.com/expressjs/express#philosophy)]
-->

---

## Contribution Guidelines

Thank you for taking the time to read these guidelines. The aim of these
guidelines is to ensure the time of contributors and maintainers is used as
effectively as possible, so we all get more enjoyment from driving the project
forward.

This section goes more in-depth of how things work, so buckle up!

### Hosting Service

We use GitHub to host code, to track issues and feature requests, as well as
accept pull requests.

### Workflow

> We use [Github Flow](https://guides.github.com/introduction/flow/index.html).

For more details on the workflow we use and integrations that help us with that
see the page on [Source Version Control and Workflow][svc_and_workflow].

Pull requests are the best way to propose changes to the codebase. All code
changes should happen through them.

We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Logging

See our logging strategy and the tools we use [here](logging).

### Code, commit message and labeling conventions

Commit messages are covered in
[Source Version Control and Workflow][svc_and_workflow].

Label conventions are covered in
[Labelling Convention and Issue Pipeline][issue_labels].

#### Coding Style

For the styling details, see `.eslintrc.js` and `.prettierrc` (JS/TS files),
`.pug-lintrc.js` (PUG files), `stylelintrc.yml` ((S)CSS files).

As a rule of thumb:

- 2 spaces for indentation rather than tabs
- 80 character line length
- Run `npm run lint` to fix the style

### Responsibilities

#### Community

Keeping a healthy community that is welcoming to newcomers and encourages new
contributors from different walks of life is paramount to us. If you haven't
done so yet, be sure to check out our
[Code of Conduct][code_of_conduct].

#### Transparency

Always create issues for any notable changes and enhancements that you wish to
make. Discuss things transparently and get community feedback.

#### Cooperation

At times, we may ask you to provide additional information in issues or pull
requests, or ask you to make changes to your contributions to ensure that your
contribution fits in well with the rest of the code.

We do this as we strive for the balance of keeping the project as accessible as
possible while making sure it's still progressing in the agreed-upon direction.

#### Quality

To guard for quality, follow our [checklists][pull_request_template]
when submitting pull requests. Your submissions may also be blocked by bot
checks. In those cases we again ask you to refine the contribution to pass
those checks.

### Ways I can contribute

We have an open mind! Whether it's writing code, writing blogs, improving
documentation, bug triaging, or writing tutorials are all examples of helpful
contributions that mean less work for others.

And it doesn't have to stop there! Do you know of somebody who may benefit from our
project? Or you want to mention us at your next conference? Suggestions for
improving UX? The ways to help are truly endless!

[AllContributors](https://github.com/all-contributors/all-contributors),
has a list of pretty much
[every way how you can contribute](https://allcontributors.org/docs/en/emoji-key).

### After Contributing

We use
[AllContributors](https://github.com/all-contributors/all-contributors),
to recognize the work of everyone who has contributed. Once you have
contributed, we'd love to show the world that you are among our contributors.

For that we use the [AllContributors Bot](https://allcontributors.org/docs/en/bot/usage). To add you to the contributors, make a comment on an issue or a PR with text:

```txt
@all-contributors please add <your username> for <contributions>
```

where `<contributions>` is any of the [emoji keys](https://allcontributors.org/docs/en/emoji-key).

#### Adding Someone Else to Contributors

If the contributor doesn't add themselves, other community members might suggest to add them to recognize their contributions.

However not everybody might want to agree to it. We want to respect people's preferences, so if you want to add somebody, please first create an issue or a PR, mention the user there, and give them the chance to discuss it.

---

## Pull Requests

Please see and use the [available pull request template][pull_request_template].

To use the pull request template in GitHub, simply create a new pull request,
and the template will be automatically loaded. See
[GitHub's wiki](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository)
for more details.

The template will guide you through the process of writing a pull request
that contains all the information.

In short, the template ensure that each pull request:

### States its intent

It should be clear which problem you're trying to solve with your
contribution.

For example:

> Add link to code of conduct in README.md

Doesn't say anything about why you're doing that.

> Add link to code of conduct in README.md because users don't always look in
> the CONTRIBUTING.md

Mentions the problem that you have found, and the pull request shows the action
you have taken to solve it.

### Is traceable

Always include the reference to the issue that the pull request relates to. If
there is no issue, keep them `no-issue`.

### Is of good quality

The checklist in the pull request template serves as a reminder to keep the
code quality high by including tests, linting or updating docs or metadata.

### Is easy to read

By having a standard way to present the pull requests, we can get accustomed
to that and learn to navigate them faster.

If you would need help with english language contributions, have a look
at [Grammarly](grammarly.com) or [Hemingway App](http://www.hemingwayapp.com/)

### Follows the contributor covenant

This repository has a [code of conduct][code_of_conduct] which should be
followed.

---

## Code Review Process

The code review process is formalized in `.zappr.yml`.
[Zappr](https://zappr.opensource.zalan.do/) is a GitHub bot which checks
(among other), whether the required users or any members of certain groups have
reviewed the pull request.

The maintainers aim to review the pull requests on a regular basis (every or
every other week) and in response expect a reply within 2 weeks if any issues
were raised.

---

## Your First Contribution

> Unsure where to begin contributing? You can start by looking through
> issues tagged with [help wanted][help_wanted] label.

### New to Contributing to Open Source

Here is a couple of friendly tutorials:

- [Make a Pull Request](https://makeapullrequest.com/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

---

## License

In short, when you submit code changes, your submissions are understood to be
under the same [MIT License](http://choosealicense.com/licenses/mit/) that
covers the project. Feel free to contact the maintainers if that's a concern.

---

## References

This document was created adapting the great guidance and ideas from
[Brian A. Danielak's (briandk) template](https://gist.github.com/briandk/3d2e8b3ec8daf5a27a62),
[Billie Thompson's (PurpleBooth) template](https://gist.github.com/PurpleBooth/b24679402957c63ec426#gistcomment-3176036)
and
[Nadia Eghbal's (nayafia) template](https://github.com/nayafia/contributing-template/blob/ab3044b0b5812708e1d561815ce6b9dd53e1d6ae/CONTRIBUTING-template.md)

In addition (or in some cases because of taking inspiration from the above),
this document was adapted from the open-source contribution guidelines for
[dwyl](https://github.com/dwyl/contributing),
[Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md),
[Elasticsearch](https://github.com/elastic/elasticsearch/blob/master/CONTRIBUTING.md),
[React](https://github.com/facebook/react/blob/master/CONTRIBUTING.md#pull-requests), and
[Chef](https://github.com/chef/chef/blob/master/CONTRIBUTING.md#chef-obvious-fix-policy).

Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc).

<!-- Links within the repo grouped together to easilyl track things like directory
change, name/repo change, etc. -->

[issues]: https://github.com/JuroOravec/mini-i18n-extract-plugin/issues
[issue_labels]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/issue_labels.md
[issue_labels@status]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/issue_labels.md#status
[svc_and_workflow]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/source_control_and_workflow.md
[logging]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/logging.md
[code_of_conduct]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/CODE_OF_CONDUCT.md
[pull_request_template]: https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/docs/PULL_REQUEST_TEMPLATE.md
[feature_request_template]: https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/ISSUE_TEMPLATE/feature_request.md
[help_wanted]: https://github.com/JuroOravec/mini-i18n-extract-plugin/labels/help%20wanted
