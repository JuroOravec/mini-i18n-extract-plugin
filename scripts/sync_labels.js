const fsp = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');
const inquirer = require('inquirer');
const githubLabelSync = require('github-label-sync');
const readPkgUp = require('read-pkg-up');
const yaml = require('js-yaml');

async function loadYaml(yamlPath) {
  const yamlFile = await fsp.readFile(yamlPath, 'utf8');
  return yaml.safeLoad(yamlFile);
}

async function syncLabels() {
  const { packageJson } = (await readPkgUp()) || {};

  // Guess defaults from package.json
  const gitInfoPattern = /.*?\/\/.*?\/(?<username>.*?)\/(?<repo>.*)\./u;
  const match = packageJson.repository.url.match(gitInfoPattern);
  const { username: usernameDefault, repo: repoDeault } = match
    ? match.groups
    : {};

  // Guess defaults from .env
  const { parsed: { GITHUB_LABEL_SYNC_TOKEN } = {} } = dotenv.config();

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Repository owner username',
      default: usernameDefault,
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Repository name',
      default: repoDeault,
    },
    {
      type: 'input',
      name: 'labelsPath',
      message: 'Labels file (relative to project root)',
      default: 'labels.json',
    },
    {
      type: 'confirm',
      name: 'allowAdded',
      message: 'Allow labels not defined in the labels file',
    },
    {
      type: 'input',
      name: 'accessToken',
      message: 'github-label-sync access token',
      default: GITHUB_LABEL_SYNC_TOKEN,
    },
    {
      type: 'confirm',
      name: 'displayChanges',
      message: 'Display changes made',
    },
  ]);

  const {
    labelsPath,
    username,
    repo,
    accessToken,
    allowAddedLabels,
    displayChanges,
  } = answers;

  if (!username) {
    throw Error('Repository owner username is required');
  }
  if (!repo) {
    throw Error('Repository name is required');
  }
  if (!accessToken) {
    throw Error('Access token is required');
  }
  if (!labelsPath) {
    throw Error('Labels file is required');
  }

  const labels = labelsPath.match(/.ya?ml$/u)
    ? await loadYaml(labelsPath)
    : require(path.resolve(process.cwd(), labelsPath));

  const res = await githubLabelSync({
    accessToken,
    labels,
    repo: `${username}/${repo}`,
    allowAddedLabels,
  });

  if (displayChanges) {
    console.log(res);
  }
}

if (require.main === module) {
  return syncLabels();
}
