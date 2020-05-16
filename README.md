# mini-i18n-extract-plugin

[![Latest Version](https://img.shields.io/npm/v/mini-i18n-extract-plugin/latest.svg)](https://www.npmjs.com/package/mini-i18n-extract-plugin)
[![Documentation](https://img.shields.io/badge/docs-yes-brightgreen.svg)](https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/docs)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#-contributing)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://tldrlegal.com/license/mit-license)
[![Package Size](https://img.shields.io/bundlephobia/min/mini-i18n-extract-plugin)](https://bundlephobia.com/result?p=mini-i18n-extract-plugin)

[![Build Status](https://travis-ci.org/JuroOravec/mini-i18n-extract-plugin.svg?branch=master)](https://travis-ci.org/JuroOravec/mini-i18n-extract-plugin)
![Dependencies](https://david-dm.org/JuroOravec/mini-i18n-extract-plugin.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/JuroOravec/mini-i18n-extract-plugin/badge.svg)](https://snyk.io/test/github/JuroOravec/mini-i18n-extract-plugin)
[![codecov](https://codecov.io/gh/JuroOravec/mini-i18n-extract-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/JuroOravec/mini-i18n-extract-plugin)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JuroOravec/mini-i18n-extract-plugin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/mini-i18n-extract-plugin/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/JuroOravec/mini-i18n-extract-plugin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/mini-i18n-extract-plugin/context:javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/0b14bfd23af30d632ef0/maintainability)](https://codeclimate.com/github/JuroOravec/mini-i18n-extract-plugin/maintainability)

---

<!--
One-liner explaining the purpose of the module
-->

I18n (JSON or YAML) extraction Webpack plugin based off mini-css-extract-plugin

#### 🏠 [Homepage](https://github.com/JuroOravec/mini-i18n-extract-plugin#readme) | 🗃 [Repository](https://github.com/JuroOravec/mini-i18n-extract-plugin) | 📦 [NPM](https://www.npmjs.com/package/mini-i18n-extract-plugin) | 📚 [Documentation](https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/docs) | 🐛 [Issue Tracker](https://github.com/JuroOravec/mini-i18n-extract-plugin/issues)

## 🪑 Table of Content

- [🧰 Features](#-features)
- [👶 Install](#-install)
- [🚀 Usage](#-usage)
- [🔮 Background](#-background)
- [🤖 API](#-api)
- [⏳ Changelog](#-changelog)
- [🛠 Developing](#-developing)
- [🏗 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [🧙 Contributors](#-contributors)
- [⭐ Show your support](#-show-your-support)
- [🐙 Community](#-community)
- [🔗 Related Projects](#-related-projects)
- [👨‍🔧 Maintainers](#-maintainers)
- [📝 License](#-license)

## 🧰 Features

<!--
A brief description of your project, what it is used for and how does life get
awesome when someone starts to use it.

- Note and briefly describe any key concepts (technical, philosophical, or both) important to the user’s understanding.
- Link to any supplementary blog posts or project main pages.
- State if it is out-of-the-box user-friendly, so it’s clear to the user.
- List its most useful/innovative/noteworthy features.
- State its goals/what problem(s) it solves.
-->

- Split i18n data by locales
- The plugin understands following formats:
  - JSON files
  - YAML files
  - [vue-i18n-loader](https://github.com/intlify/vue-i18n-loader) output
- Exports either JSON or YAML

## 👶 Install

<!--
- Getting it
- Installing It
- Configuring It
- Running it
-->

```bash
npm install -D mini-i18n-extract-plugin
```

## 🚀 Usage

See the example in the [./example](https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/example) subdirectory. To build the example, run:

```bash
npm run example
```

Which outputs the build to `./temp/example`.

<!-- Clear, _runnable_ example of usage -->

### Minimal setup

Say you have i18n data you want to extract. For example:

**component.i18n.json**

```json
{
  "en": {
    "greeting": "hello"
  },
  "de": {
    "greeting": "tschüss"
  }
}
```

**component.js**

```js
import './component.i18n.json';
```

To extract i18n files and split them by locales, add the loader and the plugin
to Webpack config. For example:

**webpack.config.js**

```js
const MiniI18nExtractPlugin = require('mini-i18n-extract-plugin').default;
// or
// import MiniI18nExtractPlugin from 'mini-i18n-extract-plugin';

// Plugin must be instantiated before use
const i18nExtractPlugin = new MiniI18nExtractPlugin();

module.exports = {
  plugins: [i18nExtractPlugin],
  module: {
    rules: [
      {
        test: /\.i18n\.json$/i,
        use: [i18nExtractPlugin.asLoader], // note the 'asLoader' property
      },
    ],
  },
};
```

By default, this will output the i18n JSON as separate files, split by locales,
and named as `[name].i18n.[locale].[ext]`, e.g. `main.i18n.en.json`. (See the
[default implementation for details](https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/src/lib/module-filename.ts)).

To automatically inline the generated i18n files in HTML generated by [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), use [html-webpack-inline-i18n-plugin](https://github.com/JuroOravec/html-webpack-inline-i18n-plugin).

### Inputs

The plugin can parse JSON and YAML files, and output from
[vue-i18n-loader](https://github.com/intlify/vue-i18n-loader).

A single instance can be used for all of them:

```js
import MiniI18nExtractPlugin from 'mini-i18n-extract-plugin';
// or const MiniI18nExtractPlugin = require('mini-i18n-extract-plugin').default

// Plugin must be instantiated before use
const i18nExtractPlugin = new MiniI18nExtractPlugin();

module.exports = {
  plugins: [i18nExtractPlugin],
  module: {
    rules: [
      // Parse JSON files
      {
        test: /\.i18n\.json$/i,
        use: [
          i18nExtractPlugin.asLoader, // note the 'asLoader'
        ],
      },
      // Parse YAML files
      {
        test: /\.i18n\.ya?ml$/,
        type: 'json',
        use: [
          i18nExtractPlugin.asLoader, // note the 'asLoader'
          'yaml-loader',
        ],
      },
      // Parse Vue i18n blocks using vue-loader
      {
        test: /\.vue$/u,
        use: ['vue-loader'],
      },
      {
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        use: [
          i18nExtractPlugin.asLoader, // note the 'asLoader'
          '@intlify/vue-i18n-loader',
        ],
      },
    ],
  },
};
```

#### Input resolution

Format of the data (JSON vs YAML) is dynamically resolved based on following
rules:

1. The request string indicates the resource comes from vue-i18n-loader?

   - Specifically, the request is checked for `vue` and `blockType=i18n` query
     params.

   - If request contains `lang=yaml` query param, it's read as YAML, otherwise
     as JSON.

2. The request string has `json` or `yaml` / `yml` query params?

   - This enables you to pass files with custom extensions and have them parsed
     as JSON or YAML.

     ```js
     // If this request will be passed to
     // MiniI18nExtractPlugin's loader, it will be read
     // as YAML
     require('my.i18n?yaml');
     ```

3. The resource has `.json` or `.yaml` / `.yml` extension?

If none of the rules succeed, the fallback is to interpret the resource as
JSON.

### Options

Options are passed to the plugin on instantiation.

```js
const MiniI18nExtractPlugin = require('mini-i18n-extract-plugin');

const i18nExtractPlugin = new MiniI18nExtractPlugin({
  // pass them configs here
  exportType: 'yaml',
  ...
});
```

The plugin accepts same options the default options of
[mini-extract-plugin](https://github.com/jurooravec/mini-extract-plugin#instance-options) (which is based on the options of
[mini-css-extract-plugin v0.9.0](https://github.com/webpack-contrib/mini-css-extract-plugin/blob/1ffc393a2e377fe0cc341cfcbc5396e07a8e4077/README.md#options)).

In addition to that, 2 custom options are available:

#### exportType

- Type: `'json' | 'yaml' | undefined`
- How the extracted data should be exported.
- Defaults to `'json'`.

#### splitLocales

- Type: `boolean | undefined`
- Whether the extracted i18n data should be split by locales. If `true`,
  separate file is generated for each locale per each entrypoint, otherwise all
  extracted data is in a single file per each entrypoint.
- Defaults to `true`.

### Typing

This project is written in TypeScript and the typings are included in the distribution.

Types used in this package can be imported and used as such:

```ts
import { types } from 'mini-i18n-extract-plugin';

const plugin: types.MiniI18nExtractPlugin = ...
```

### Debugging

This project uses [debug](https://www.npmjs.com/package/debug). To show debug logs, activate debug for `mini-i18n-extract-plugin`.

CLI example:

```sh
DEBUG=mini-i18n-extract-plugin node path/to/my/mini-i18n-extract-plugin-project
```

## 🔮 Background

<!-- Core Technical Concepts/Inspiration

- Potentially unfamiliar terms link to informative sources
- Why does it exist?
- Frame your project for the potential user.
- Compare/contrast your project with other, similar projects so the user knows how it is different from those projects.
- Highlight the technical concepts that your project demonstrates or supports. Keep it very brief.
- Keep it useful.
- Performs [cognitive funneling](https://github.com/noffle/art-of-readme#cognitive-funneling)
- Caveats and limitations mentioned up-front
-->

if you're new to Webpack, be sure to check out [Webpack's Getting Started guide](https://webpack.js.org/guides/getting-started/).

This package was made with the aim of encouraging modularized structure for internationalization data. The use of i18n data shares similarities with how CSS is used. However, different stakeholers need i18n data in different formats:

- For development, modularized and close-to-source structure is preferred.
- For serving the data to end user, files chunks should be split by the usage.
- For translations, having a single source to work with is preferred.

This package addresses the first two of the considerations.

To make an effective use of this, each message / translation should be defined
in a single place only. Otherwise the conflicting messages will be overwritten
and lead to unexpected results.

## 🤖 API

TypeDoc documentation can be [found here](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/typedoc/README.md).

Available options are described [here](#options).

## ⏳ Changelog

This projects follows semantic versioning. The
[changelog can be found here](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/CHANGELOG.md).

## 🛠 Developing

If you want to contribute to the project or have forked it,
[this guide will get you up and going](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/developing.md).

## 🏗 Roadmap

There is no explicit roadmap for this project. However, if you have ideas how it
could be improved, please be sure to share it with us by [opening an issue](#🤝-contributing).

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Thank you ❤️

Feel free to dive in! See [current issues](https://github.com/JuroOravec/mini-i18n-extract-plugin/issues),
[open an issue](https://github.com/JuroOravec/mini-i18n-extract-plugin/issues/new), or [submit PRs](https://github.com/JuroOravec/mini-i18n-extract-plugin/compare).

How to report bugs, feature requests, and how to contribute and what conventions we use is all described in the [contributing guide](https://github.com/JuroOravec/mini-i18n-extract-plugin/tree/master/docs/CONTRIBUTING.md).

When contributing we follow the
[Contributor Covenant](https://contributor-covenant.org/version/1/3/0/).
See our [Code of Conduct](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/master/docs/CODE_OF_CONDUCT.md).

## 🧙 Contributors

Contributions of any kind welcome. Thanks goes to these wonderful people ❤️

### Recent and Top Contributors

<!-- Hall of Fame uses 8 links (7 users + 1 stats), see https://github.com/sourcerer-io/hall-of-fame#faq -->

[![Hall of Fame Contributor 1](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/0)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/0)
[![Hall of Fame Contributor 2](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/1)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/1)
[![Hall of Fame Contributor 3](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/2)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/2)
[![Hall of Fame Contributor 4](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/3)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/3)
[![Hall of Fame Contributor 5](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/4)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/4)
[![Hall of Fame Contributor 6](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/5)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/5)
[![Hall of Fame Contributor 7](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/6)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/6)
[![Hall of Fame Contributor 8](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/images/7)](https://sourcerer.io/fame/JuroOravec/JuroOravec/mini-i18n-extract-plugin/links/7)

<!-- markdownlint-disable -->

<sub><em>Generated using [Hall of Fame](https://github.com/sourcerer-io/hall-of-fame#readme).</em></sub>

<!-- markdownlint-enable -->

### All Contributors

Contribution type [emoji legend](https://allcontributors.org/docs/en/emoji-key)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

_No additional contributors. Be the first one!_

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- markdownlint-disable -->

<sub><em>This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.</em></sub>

<!-- markdownlint-enable -->

## ⭐ Show your support

Give a ⭐️if this project helped you!

## 🐙 Community

- [Stack Overflow](https://stackoverflow.com/questions/tagged/mini-i18n-extract-plugin)
- [Quora](https://www.quora.com/search?q=%22mini-i18n-extract-plugin%22)
- [Spectrum community](https://spectrum.chat/mini-extract-plugin/i18n)

## 🔗 Related Projects

- This plugin is based on
  [mini-extract-plugin](https://github.com/jurooravec/mini-extract-plugin#instance-options),
  a generalized version of
  [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).
- Generated i18n files can be inlined in HTML generated by
  [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
  using
  [html-webpack-inline-i18n-plugin](https://github.com/JuroOravec/html-webpack-inline-i18n-plugin).

## 👨‍🔧 Maintainers

👤 **Juro Oravec**

- Twitter: [@JuroOravec](https://twitter.com/JuroOravec)
- GitHub: [@JuroOravec](https://github.com/JuroOravec)
- LinkedIn: [@jurooravec](https://linkedin.com/in/jurooravec)
- Sourcerer: [@JuroOravec](https://sourcerer.io/JuroOravec)

## 📝 License

Copyright © 2020 [Juro Oravec](https://github.com/JuroOravec).

This project is [MIT](https://tldrlegal.com/license/mit-license) licensed.
