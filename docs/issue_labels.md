# Issue Labelling

This page outlines the suggested pipeline for issues management, suggested labels
available in this project, why they were chosen, and when to use them.

---

## Table of Content

- [Why Labelling Issues](#why-labelling-issues)
- [Labels](#labels)
  - [General Labels](#general-labels)
  - [Type](#type)
  - [Priority](#priority)
  - [Status](#status)
  - [Scale](#scale)
  - [Severity](#severity)
  - [Value](#value)
  - [Effort](#effort)
  - [Work](#work)
- [Other Label Ideas](#other-label-ideas)
  - [User](#user)
  - [Domain](#domain)
  - [Team](#team)
  - [Change](#change)
  - [Urgency](#urgency)
  - [Impact](#impact)
  - [Custom Labels](#custom-labels)
- [Why the Granularity](#why-the-granularity)
- [Updating Labels](#updating-labels)
- [Cheatsheet](#cheatsheet)
- [References and Useful Links](#references-and-useful-links)

---

## Why Labelling Issues

Labelling is all about three thing:

1. Making sense of the data (issues) to be able to make correct prioritization decisions.
2. Minimizing the churn of both contributors and ideas.
3. Opening up to automatization by standardizing the process.

First comes from a simple premise that to make data-driven decisions, you need
to generate and categorize the data. Only once you do that you can look at the
numbers and decide what issues are the most important for the project.

The "side effect" of actively categorizing the issues is better communication
and community engagement, as the decision-making process becomes more
transparent, and so more collaborators may contribute.

You get as much out of it as the time you put into it. Do note that based on
how large your project is, the time requirements to manage the issue pipeline
well will vary. Small teams may not have to worry too much as they will
categorize and prioritize issues as they go and as they experience them,
but in larger projects the time for this may either need to be formalized or
may need an extra helping hand focusing just on that.

Remember though that this page serves only as a suggestion on what's possible,
and it's up to your project's needs to evaluate which information to track.
While we believe the that the collection outlined below is helpful to more
complex projects, projects with few external contributors or small
decision-making bodies (or individuals) may work just as well with less
metadata.

---

## Labels

### **General Labels**

Labels that either don't fit other classifications or some of the
[GitHub's default labels](https://help.github.com/en/github/managing-your-work-on-github/about-labels).

- `duplicate`
- `good first issue`
- `help wanted` - Pull requests that fully implement this feature are welcome
  from the community.
- `needs refresh` - Discussion stalled and needs refreshing
- `breaking change` - Issue or pull request includes breaking changes

Additionally, there are 3 labels that indicate the high-level issue
categorization (the intent).

- `bug` - Report a bug. Some tools may require the use of GitHub's `bug`
  label to display bugs properly.
- `suggestion` - Feedback or design change or feature of some sort
- `question` - Ask a question

### **Type**

The type of the issue in the technical sense.

- `type: doc` - Documentation only changes
- `type: i18n` - Internationalization changes
- `type: a11y` - Accessibility changes
- `type: feat` - New Feature
- `type: refactor` - A code change that neither fixes a bug nor adds a feature
- `type: test` - Adding missing tests or correcting existing tests
- `type: style` - A code changes styling
- `type: maintenance` - Repository Maintenance
- `type: ci` - Changes to CI configuration files and scripts
- `type: security` - Security-related changes

### **Priority**

Which issues to prioritize

This should be derived considering the scale, severity, value, type of work and
effort. Or if using metrics like urgency and impact, then those.

Priority labels are included for 2 reasons:

- To have a clear understanding of which issues are ultimately prioritized if
  using multiple labels such as value, effort, scale, etc.

- As a less-elaborate alternative to using the additional labels. For small
  teams, using just the priority labels may be enough.

Note that if issue prioritization happens in a different environment
(e.g. a project management tool, prioritization labels may be omited).

- `priority: critical` - other efforts should be adjusted to ensure that this
  issue will be resolved as soon as possible. Note that the project team
  should strive not to have any critical issues. As they say, you should do
  things based on how important they are, not how urgent they are.
- `priority: high` - self-explanatory
- `priority: medium` - self-explanatory
- `priority: low` - self-explanatory

### **Status**

Status describes the state of the issue within the project management pipeline.
If you imagine a simple Kanban board, this can be as simple as _todo_, _doing_,
_done_, _rejected_. Most projects will however benefit from having more options
to choose from to decrease ambiguity.

Status labels ultimately depend on the project / issue management strategy.
The example shown is partially inspired by
[TypeScript](https://github.com/microsoft/TypeScript/wiki/Contributing-to-TypeScript)
and [Yoast](https://github.com/Yoast/wordpress-seo/wiki/Issue-labels), and the
pipeline can be roughly illustrated as below:

#### Issue Pipeline

<figure>
  <img src="https://raw.githubusercontent.com/JuroOravec/mini-i18n-extract-plugin/master/docs/issue_pipeline.png" alt="Issue Pipeline and Labelling"/>
  <figcaption>
  <strong>Issue Pipeline and Labelling</strong>
  - Issue pipeline inspired by TypeScript and Yoast. Labels are used for
  marking distinct states within the pipeline. Labels are marked with colon
  (<code>:</code>).
  </figcaption>
</figure>

#### Note on Issue Pipeline

As you can see in the diagram, status labels serve to mark the current state.
Although an issue may have similar requirements, if these requirements arise at
different parts of the pipeline, it's better to designate different labels to
them to distinguish clearly between the two states (e.g. both
`status: on hold (needs proposal)` and `status: on hold (needs more info)` ask
for more info, but at different stages).

Some parts of the pipeline may get on hold due to multiple factors (discussion
can be on hold due to lack of info or stakeholder's decision, and
implementation can be blocked by lacking review or tests). If adding custom
requirements that may put the issue on hold, do create new labels for these
conditions.

Some statuses like `status: on hold (blocked)`, or `status: declined (...)` may
arise in any part of the pipeline.

#### Status Labels

- `status: on hold (needs proposal)` - A full write-up is needed to explain how
  the feature should work
- `status: proposal` - Issue has been formalized into a proposal
- `status: on hold (needs more info)` - A proposal exists, but there are
  follow-up questions that need to be addressed
- `status: in discussion` - This issue is being discussed.
- `status: on hold (needs decision)` - These are issues that need some decision
  for direction to take.
- `status: ready to implement` - The proposal is accepted and has been designed
  enough that it can be implemented now
- `status: in progress` - We have allocated time on the team schedule to
  implement this feature
- `status: on hold (needs tests)` - The proposal was implemented but needs
  additional tests
- `status: on hold (needs review)` - The proposal was implemented and needs to
  be review now
- `status: on hold (blocked)` - These issues / pull requests depend on other
  issues to be closed or code to be merged elsewhere.
- `status: declined (out of scope)` - Is outside the scope; would be better
  implemented as a separate tool or extension
- `status: declined (too complex)` - The amount of complexity that this (and
  its future implications) would introduce is not justified by the amount of
  value it adds
- `status: declined (breaking change)` - Would meaningfully break compatibility
  with a previous version, or would prevent us from implementing known future
  proposals
- `status: declined (by design)` - This aspect of the language is an
  intentional design decision

### **Scale**

Scale label describes how many users are/will be affected. It is inspired by
labels at
[SaltStack](https://docs.saltstack.com/en/master/topics/development/labels.html#priority).
The importance of this label is to surface those issues that affect the most
users.

- `scale: all` - issue or change affects all
- `scale: majority` - issue or change affects majority
- `scale: some` - issue or change doesn't affect majority, but still
  considerable portion
- `scale: few` - issue or change affects a small portion of userbase (e.g.
  a corner case)

### **Severity**

Severity is the measure of the possible damage or impediment of inaction, and
as such it relates mostly to bugs.

The importance of it is to identify the issues that pose the most risk and try
to mitigate that. It is inspired by
[this SaltStack's article](https://docs.saltstack.com/en/master/topics/development/labels.html#severity).

- `severity: blocker` - The issue is blocking an impending release.
- `severity: critical` - The issue causes data loss, crashes or hangs salt
  processes, makes the system unresponsive, etc.
- `severity: high` - The issue reports incorrect functionality, bad
  functionality, a confusing user experience, etc.
- `severity: medium` - The issue reports cosmetic items, formatting, spelling,
  colors, etc.

#### Note on Severity

Low severity is omited. This is because low severity is the default and
expected state. E.g. if I want introduce a new non-critical feature, than
_not having_ that feature doesn't pose any risk, hence it automatically has low
severity.

### **Value**

How much value will it give to the user? This is drawn on
[the MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method)
translating the concepts of must-haves, should-haves and nice-to-haves to
labels.

It stands as a reminder to always strive to fulfil those tasks first which
bring the most value to the user.

- `value: high` - must-have, critical or expected feature, or heavily-requested
  feature that cannot be easily replaced
- `value: medium` - should-have, friction-reduction, often-used or requested
  feature, but maybe applicable only in some scenarios, or some aspects of it
  can be replaced with other tools.
- `value: low` - nice-to-have, doesn't impact the key proposition of the
  software, rarely needed or easily replaced with something else.

### **Effort**

The relative effort to complete the issue's _remaining_ tasks.

As per
[Sean Trane's example](https://github.com/seantrane/github-label-presets#label-groups)
the effort follows
[the Scrum estimation technique](http://scrumorakel.de/blog/index.php?/archives/48-Estimating-relative-sizes-e.g.-story-points.html),
which has a range of benefits:

- familiarity, which leads to mutual understanding
- unbounded - unlike a 1-5 or 1-10 scale, this one can grow as necessary if
  more complex tasks emerge.

Since in Scrum, tasks with large estimates usually indicate that the tasks
should be split and explored further, effort labels until 13 or 21 should be
sufficient.

- `effort: 1` - self-explanatory
- `effort: 2` - self-explanatory
- `effort: 3` - self-explanatory
- `effort: 5` - self-explanatory
- `effort: 8` - self-explanatory
- `effort: 13` - self-explanatory

#### Note on Effort

Since the [type of work](###work) is assessed separately, it should not affect
the effort estimate. Hence if there's a _mindless_ task comparable to the
_complicated_ task, they should be rated similarly in terms of effort.

### **Work**

Work label outlines the nature of the knowledge work as defined in the
[Cynefin framework](https://en.wikipedia.org/wiki/Cynefin_framework).
The idea of using it as a label is from
[Sean Trane's example](https://github.com/seantrane/github-label-presets#label-groups).

The point of using these labels is to set up the expectations of how the team
should approach the issue and what is expected (e.g. we cannot expect best
practice solution from an issue where we realize we do not even know what are
the things that are important for this issue).

Most of the tasks should fall into _obvious_ category. Some tasks may fall
into the _complicated_ bin, in which case thorough discussion is expected,
and you can think of them as
[spikes](<https://en.wikipedia.org/wiki/Spike_(software_development)>).
For issues with _complex_ label, not as much deductive work is expected but
rather quick experiments. And hopefully no issue will be under the chaotic
label, where action is more important than inaction.

Please do read
[the wikipedia article](https://en.wikipedia.org/wiki/Cynefin_framework)
on the framework to familiarize yourself with it. To get a better feel for
it and its relevance to issue management, the project-relevant interpretation
of the categories are:

- `work: mindless`

  - this is a custom category which is not part of the Cynefin framework. Its
    intention is to distinguish regular _obvious_ tasks from _mindless_ ones.

  - e.g. Simple updating tasks, or repeated tasks such as data entry

  - tl;dr - mindless tasks like data entry

- `work: obvious` - _known knowns_

  - when you know that applying best practices is sufficient to complete the
    task

  - e.g. Setting up a system (e.g. a DB or REST API) with known requirements.
    You might not know every single step of the process beforehand, but you
    know that by following best practices, you will be able to complete the
    task.

  - tl;dr - following best practices is enough

- `work: complicated` - _known unknowns_

  - only following best practices is not sufficient, e.g. because they do not
    exist, or system components are used in novel way and it is unknown
    beforehand how they will interact. Through the process of learning about
    the system and its requirements, you will be able to develop practices
    on how to solve the given task.

  - e.g. Setting up a system where the requirements are not known, but the
    goal is, e.g. make a product that solves problem X. You might not know
    the requirements beforehand, and you will discover them only as you
    learn more about the problem, e.g. audience size, channels, how to
    connect things together, etc.

  - tl;dr - we need to devise the practices

- `work: complex` - _unknown unknowns_

  - working with complex systems where the cause and effect relationships are
    not clear, but they are believed to be there, and where system
    introspection is impractical. Hence, to gain confidence in the
    relationships, experimentation is critical, so a "test fast, fail fast"
    approach that enables to analyze the system retrospectively.

  - e.g. Working on novel features for a large userbase. It is impractical
    to discover the response from each (or even just a majority) of users
    towards the feature, although we can assume that some relationship is
    probably there. We "query the system" by testing the feature on
    subpopulations, and based on the results we try to construct assumptions
    that would constrain us into working with _known unknowns_ only.

  - tl;dr - we need to test so we could devise the practices later

- `work: chaotic`

  - relationships cannot be deduced, either because there are none, or are
    too complex, or the context doesn't permit to explore the relationships.
    Don't assume that a right answer exists. The best is to act and respond
    to the situation.

  - e.g. Unprecedented situations with no option of probing the system could
    be a security attack or a natural disaster. In those cases we would not
    have the time nor resources to test and explore the system, and so acts
    to attempt to mitigate the risks is all we can do. Hopefully this never
    happens.

  - tl;dr - response is required but unknown. Any is better than none.

---

## Other Label Ideas

These are labels that either fill in the gaps, or may depend on the project's
nature and the organizational structure, or are too varied to be included in
the previous section.

### User

Type of user

If your project team serve multiple stakeholders (e.g. internal projects,
client projects, etc), you may want to tag issues also based on who is the
affected user group.

Example:

- `user: internal`

### Domain

Domain (in Typescript) or functional area (in SaltStack) labels group the
issues based on the software functionality or source code they relate to.
If the project modularizes functionalities, these could be the individual
modules (see [Yoast's](https://github.com/Yoast/wordpress-seo/labels)
`component: ...` and `Yoast: ...` labels).

Example:

- `domain: cart`

### Team

Engineering team or the organizational structure that has ownership of the
issue, also called
[functional group at SaltStack](https://docs.saltstack.com/en/master/topics/development/labels.html#functional-group).
This can be useful to clarify the ownership of the issues, however, there's
also the risk that this separation could encourage silo-ing of the teams, as
each team would focus on the issues labelled for them.

Example:

- `team: core`
- `team: platform`
- `team: analytics`

### Change

Another one from
[SaltStack](https://docs.saltstack.com/en/master/topics/development/labels.html#functional-group),
the change describes the extend of a change for pull requests, to signal the
requirements for review (e.g. large changes may need someone who is well
familiar with the source code, and changes in domain-specific algorithms will
need an expert review).

Example:

- `change: small`
- `change: expert`

### Urgency

How soon the thing should be solved - should be derived from scale and severity.

This could be an optional label to disect the issues based on how soon they
should be completed. Since ultimately the prioritization estimation should
include scale and severity, this label can be omited if it is not
explicitly necessary.

The values could be simple and mirror the priority labels:

- `urgency: critical`
- `urgency: high`
- `urgency: medium`
- `urgency: low`

### Impact

Most bang for the buck - should be derived from scale, value and effort.

Just like urgency label, also impact expresses a composite value (scale, value
and effort). Since ultimately the prioritization estimation should include
scale, value and effort, this label can be omited if it is not explicitly
necessary.

The values could be simple and mirror the priority labels:

- `impact: critical`
- `impact: high`
- `impact: medium`
- `impact: low`

### Custom Labels

For unique or one-off events, creating separate tag for just that event is
recommended (e.g. cleaning up the issues or migration or a special initiative).
Although the setup outlined in this page strives to provide aframework to
minimize the need to add of custom labels, there's just too many things that
can happen to be able to capture them all, so custom labels are expected.

For examples for how one-off labels are used in projects, again, have a look
at [TypeScript](https://github.com/microsoft/TypeScript/labels) or
[Yoast](https://github.com/Yoast/wordpress-seo/labels).

---

## Why the Granularity

If you don't want to, you don't have to use the more-specific labels such as
scale or value, and just use priority.

The reason using them, however, is the ability to inspect the system better,
and to aid with human communication and collaboration.

As an example of importance of clear and specific communication, imagine
a situation where your partner tells you that they are bored.

Maybe they are bored because they have nothing to do. Or maybe it is a hint
that they want to spend the time with you. And maybe it's a sign of
disinterest, for example they are anxious about something, which prevents them
from enjoying anything properly, which leads to the perceived boredom.

Human interaction is very complex, but luckily you can use secondary signals
like the partner's tone of voice, body language, shared history, etc.,
to make an informed decision on which scenario are they really dealing with.

But if you take only the high-level signal, the boredom, you can make a wrong
decision. Maybe the partner wants to spend the time with you, and instead you
tell them to go and meet their friends.

The takeaway from this example is that in complex systems, same effect or
perceived state can be achieved through multiple paths with different
configurations. Only when we have more granular understanding of the system
at hand, we can deduce which of the multiple paths is the one that we are
confronting.

While using only a subset of labels can be sufficient, in larger projects,
the extra dimensions we capture by the additional info may just save us from
making that wrong decision in our project.

---

## Updating Labels

To update the labels in your project, use tools like
[github-label-sync](https://github.com/Financial-Times/github-label-sync).
To use it, you will need the access token.

### Update Labels Script

A convenient way to update the labels is to run `npm run labels:sync`. This
will search the repo for relevant info, will prompt you to confirm/update it,
and will run `github-label-sync` for you.

This is the preferred way as the script accepts both JSON and YAML files (YAML
files must have `.yml` or `yaml` extension).

### CLI

Alternatively, you can interact with `github-label-sync` directly through CLI.

```bash
# replace token value, username and repo

# to avoid overwriting already existing labels, use `--allow-added-labels`

npx github-label-sync --access-token 0123456789abcdefghijklmnopqrstuvwxyz1234 username/repo
```

This will update (**AND OVERWRITE**) the labels in your repo with the labels
defined in `labels.json`.

Note: Out of the box `github-label-sync` supports only JSON files. Once
[this pull request is integrated](https://github.com/Financial-Times/github-label-sync/pull/47),
use YAML instead of JSON.

### Labels in YAML

For more details see
[github-label-sync](https://github.com/Financial-Times/github-label-sync).

---

## Cheatsheet

### General Labels

- `duplicate`
- `good first issue`
- `help wanted`
- `needs refresh`
- `breaking change`
- `bug`
- `suggestion`
- `question`

### Effort

- `effort: 1`
- `effort: 2`
- `effort: 3`
- `effort: 5`
- `effort: 8`
- `effort: 13`

### Priority

- `priority: critical`
- `priority: high`
- `priority: medium`
- `priority: low`

### Scale

- `scale: all`
- `scale: majority`
- `scale: some`
- `scale: few`

### Severity

- `severity: blocker`
- `severity: critical`
- `severity: high`
- `severity: medium`

### Status

- `status: on hold (needs proposal)`
- `status: proposal`
- `status: on hold (needs more info)`
- `status: in discussion`
- `status: on hold (needs decision)`
- `status: ready to implement`
- `status: in progress`
- `status: on hold (needs tests)`
- `status: on hold (needs review)`
- `status: on hold (blocked)`
- `status: declined (out of scope)`
- `status: declined (too complex)`
- `status: declined (breaking change)`
- `status: declined (by design)`

### Type

- `type: doc`
- `type: i18n`
- `type: a11y`
- `type: feat`
- `type: refactor`
- `type: test`
- `type: style`
- `type: maintenance`
- `type: ci`
- `type: security`

### Value

- `value: high`
- `value: medium`
- `value: low`

### Work

- `work: mindless`
- `work: obvious`
- `work: complicated`
- `work: complex`
- `work: chaotic`

---

## References and Useful Links

Articles:

- [GitHub wiki](https://help.github.com/en/github/managing-your-work-on-github/about-labels)
- [Sane GitHub Labels by Dave Lunny](https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63)
- [How we organize GitHub issues: A simple styleguide for tagging by Zach Dunn](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/)
- [Useful GitHub Features by Jenny Wong](https://jwong.co.uk/blog/2018/09/01/useful-github-features/)

Examples:

- [TypeScript labels](https://github.com/microsoft/TypeScript/labels)
- [Yoast labels](https://github.com/Yoast/wordpress-seo/labels)
- [SaltStack labels](https://docs.saltstack.com/en/master/topics/development/labels.html#functional-group)
- [ReadTheDocs labels](https://docs.readthedocs.io/en/stable/development/issue-labels.html)
- [github-label-presents](https://github.com/seantrane/github-label-presets/tree/732222d9e116c36edb0f2affd1910ba5ae841686#label-groups)
- [github-standard-labels](https://github.com/yoshuawuyts/github-standard-labels/issues/2)
- [github-label-setup](https://github.com/azu/github-label-setup/tree/2a223aa6ec984ce0b1c8f4473339d232faa60d82)

Syncing labels with GitHub:

- [github-label-sync](https://github.com/Financial-Times/github-label-sync) -
  this one is recommended as it syncs label descripts too.

Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc).
