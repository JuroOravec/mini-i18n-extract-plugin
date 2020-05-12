import path from 'path';
import type { Configuration } from 'webpack';

import config from './config';
import pWebpack from '../../lib/p-webpack';
import runBrowserScript, {
  Options as RunInBrowserOpts,
} from '../../lib/run-browser-script';
import runNodeScript, {
  Options as RunInNodeOpts,
} from '../../lib/run-node-script';
import merge from 'lodash.merge';

export { config };

type RunInBrowser = (
  o?: RunInBrowserOpts,
) => ReturnType<typeof runBrowserScript>;
type RunInNode = (o?: RunInNodeOpts) => ReturnType<typeof runNodeScript>;

interface Entry {
  path: string;
  runInBrowser: RunInBrowser;
  runInNode: RunInNode;
}

interface Entries {
  [key: string]: Entry;
}

/**
 * Run method or access property of each value in Entries object.
 */
class EntriesEach {
  private _entries: [string, Entry][] = Object.entries(this.entries);
  constructor(public entries: Entries) {}

  get path() {
    return this._entries.map(([name, entry]) => entry.path);
  }

  async runInBrowser(o: RunInBrowserOpts = {}) {
    return Promise.all(
      this._entries.map(([name, entry]) => entry.runInBrowser(o)),
    );
  }

  async runInNode(o: RunInNodeOpts) {
    return Promise.all(
      this._entries.map(([name, entry]) => entry.runInNode(o)),
    );
  }
}

export async function runWebpack(configOverrides: Configuration = {}) {
  const mergedConfig: Configuration = merge({}, config, configOverrides, {
    module: {
      rules: [...(configOverrides?.module?.rules || [])],
    },
    plugins: [...(configOverrides?.plugins || [])],
  });

  const stats = await pWebpack(mergedConfig);
  const info = stats.toJson();
  // Check errors
  expect(info.errors).toHaveLength(0);
  expect(info.warnings).toHaveLength(0);

  // Prepare scripts so they can be run in node or browser
  const entries = await Object.entries(info.entrypoints || {}).reduce(
    async (entriesPromise, [entryName, { assets }]) => {
      const entries = await entriesPromise;
      const [entryfile] = assets.filter((asset) => !asset.includes('~'));
      const filepath = path.resolve(info.outputPath!, entryfile);

      entries[entryName] = {
        path: filepath,
        runInBrowser: async (o) =>
          await runBrowserScript(entryfile, {
            url: `file://${info.outputPath}`,
            ...o,
          }),
        runInNode: async (o) => await runNodeScript(filepath, o),
      };

      return entries;
    },
    {} as Promise<Entries>,
  );
  return { stats, entries, each: new EntriesEach(entries) };
}
