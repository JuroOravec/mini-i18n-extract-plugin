/**
 * Export plugins too so other child configs can access them easily
 */
const plugins = {};
module.exports.plugins = plugins;

/**
 * Verify package.json contains only stable / mature dependencies
 */
plugins.verifyDeps = {
  name: 'semantic-release-verify-deps',
  options: {
    dependencies: true,
    regExps: [
      // Error on pre-release deps (e.g. beta, alpha, etc)
      // Matches ending without a digit
      '\\D$',
      // Error on relative deps (e.g. ./ or ../)
      // Matches start with a dot
      '^\\.',
      // Error on GitHub deps
      // Matches deps including 'github'
      '.*github.*',
    ],
  },
};

/**
 * Parse commit messages
 */
plugins.commitAnalyzer = {
  name: '@semantic-release/commit-analyzer',
  // https://github.com/semantic-release/commit-analyzer/tree/2b9c73e1b4d63221980da18fd3d1f2817aaee1b8#rules-definition
  options: {
    releaseRules: [
      { type: 'refactor', release: 'patch' },
      { type: 'style', release: 'patch' },
      { type: 'build', release: 'patch' },
      // README change.
      // Scope contains variation of README, also incl. dashed variations
      // (e.g. read-me)
      {
        type: 'docs',
        scope: '*{README,{R,r}ead{-,}{M,m}e}*',
        release: 'patch',
      },
      // API docs change.
      // Scope contains variation of API
      {
        type: 'docs',
        scope: '*{A,a}{P,p}{I,i}*',
        release: 'patch',
      },
      // TypeDoc docs change
      // Scope contains variation of TypeDoc, also incl. dashed variations
      // (e.g. type-doc)
      {
        type: 'docs',
        scope: '*{T,t}ype{-,}{D,d}oc*',
        release: 'patch',
      },
      // Dependency changed (NOT devDep).
      // Scope matches one of following (including lowercase variations):
      // - Dep
      // - Deps
      // - Dependency
      // - Dependencies
      { scope: '{D,d}ep{endenc{y,ies},s,}', release: 'patch' },
      // Ignore no-release scope
      { scope: 'no-release', release: false },
    ],
  },
};

/**
 * Construct release notes based on parsed commits
 */
plugins.releaseNotesGen = {
  name: '@semantic-release/release-notes-generator',
  options: {},
};

// Main config object, define common paramters here.
// For config options, see:
// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const config = {
  /**
   * Other plugins available at https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
   * Order is important, see:
   * - https://github.com/semantic-release/changelog/tree/bede4d04b0a9ec13a5661bf0424465176486f3fd#examples
   * - https://github.com/semantic-release/npm/tree/1d1bc40fb8a47f3e40cb8c0268b8ca17b2ace95a#examples
   */
  plugins: [
    [plugins.verifyDeps.name, plugins.verifyDeps.options],
    [plugins.commitAnalyzer.name, plugins.commitAnalyzer.options],
    [plugins.releaseNotesGen.name, plugins.releaseNotesGen.options],
  ],
};

module.exports.config = config;
