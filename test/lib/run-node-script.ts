import execa from 'execa';

export interface Options extends execa.Options {
  print?: boolean;
}

export default async function runNodeScript(
  filepath: string,
  options: Options = {},
) {
  const { print, ...execaOptions } = options;
  const importerScript =
    `const util = require('util');\n` +
    `const pprint = (x) => util.inspect(x, false, null, true);\n` +
    `const res = require("${filepath}");\n` +
    `pprint(res);\n`;
  const { exitCode, stderr, stdout } = await execa(
    'node',
    ['-e', importerScript],
    execaOptions,
  );
  if (exitCode || stderr) {
    throw Error(`${exitCode}: ${stderr}`);
  }
  return stdout;
}
