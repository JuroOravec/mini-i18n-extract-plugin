// @ts-nocheck
const envCi = require('env-ci');

const prConfig = require('./config/semantic-release/pr.config');
const mergeConfig = require('./config/semantic-release/merge.config');

const { isPr } = envCi();

/**
 * The setup here works with 2 conditions:
 * - If we make a PR to a branch accepted by semantic-release, we generate
 *   CHANGELOG.md
 * - If we're triggerd by merge to a branch accepted by semantic-release, we
 *   publish the package
 */

const config = isPr ? prConfig : mergeConfig;

module.exports = config;
