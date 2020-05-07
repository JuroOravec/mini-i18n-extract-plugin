// @ts-nocheck
const envCi = require('env-ci');

const { config: defaultConfig, plugins } = require('./config');
const { branches } = require('./merge.config');
const { plugin } = require('semantic-release-changelog-update');

const { prBranch, branch } = envCi();

const config = {
  ...defaultConfig,
  dryRun: true,
  ci: false,
  branches: [branch, prBranch].filter(Boolean),
};

const pluginOptions = {
  // Ensure changelog is updated for all the cases defined in base config
  releaseRules: plugins.commitAnalyzer.options.releaseRules,
};
if (branches !== undefined) {
  pluginOptions.releaseBranches = branches;
}

// If we're triggered by PR and merging to allowed branch, we generate and
// commit CHANGELOG.md so it can still be review before the merge.
config.plugins = [
  [plugins.verifyDeps.name, plugins.verifyDeps.options],
  // Plugin calls release-notes-generator, changelog and git plugins itself,
  // so we don't have to include them here.
  [plugin, pluginOptions],
];

module.exports = config;
