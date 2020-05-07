// @ts-nocheck
const { config: defaultConfig } = require('./config');

const config = {
  ...defaultConfig,
};

// Release the package to desired channels.
config.plugins = [
  ...config.plugins,
  // Publish to NPM, commit updated package.json, and publish GitHub release
  // https://github.com/semantic-release/semantic-release/issues/672
  ['@semantic-release/npm', { tarballDir: 'temp' }],
  ['@semantic-release/git', { assets: ['package.json'] }],
  ['@semantic-release/github', { assets: ['temp/*.tgz'] }],
];

module.exports = config;
