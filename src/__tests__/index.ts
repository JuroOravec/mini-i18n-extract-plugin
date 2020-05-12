import path from 'path';
import webpack from 'webpack';
// @ts-ignore
import { VueLoaderPlugin } from 'vue-loader';
import Vue from 'vue';
import zip from 'lodash.zip';

import MiniI18nExtractPlugin from '..';
import { ExportType } from '../types';

import {
  runWebpack,
  config as defaultConfig,
} from '../../test/fixtures/webpack';
import { prepare, restore, reset } from '../../test/lib/fs';
import * as content from '../../test/lib/content';
import expectAsyncThrow from '../../test/lib/expect-async-throw';

Vue.config.productionTip = false;

type SourceType = 'vue' | 'json' | 'yaml';

function prepNoLoaderConfig(type: SourceType) {
  const configs: { [Key in typeof type]: webpack.Configuration } = {
    vue: {
      resolve: {
        extensions: ['.vue'],
      },
    },
    json: {},
    yaml: {
      resolve: {
        extensions: ['.yaml', '.yml'],
      },
    },
  };
  const config: webpack.Configuration = configs[type];
  return config;
}

function prepConfig(type: SourceType, plugin?: any, loader?: object) {
  const configs: { [Key in typeof type]: webpack.Configuration } = {
    vue: {
      module: {
        rules: [
          {
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            use: ['@intlify/vue-i18n-loader'],
          },
          {
            test: /\.vue$/u,
            use: ['vue-loader'],
          },
        ],
      },
      plugins: [new VueLoaderPlugin()],
    },
    json: {
      module: {
        rules: [
          /* JSON is automatically resolved by Webpack */
          { test: /\.json$/u, use: [] },
        ],
      },
    },
    yaml: {
      module: {
        rules: [
          {
            test: /\.ya?ml$/,
            type: 'json',
            use: ['yaml-loader'],
          },
        ],
      },
    },
  };
  const config: webpack.Configuration = configs[type];
  if (plugin) {
    config.plugins = [...(config.plugins || []), plugin];
  }
  if (loader) {
    const loaders = (config.module?.rules[0]?.use || []) as any[];
    config.module!.rules[0].use = [loader, ...loaders];
  }
  return config;
}

type OutputInfo = { output: string; expected: string; locales?: string[] };
async function validateLocaleOutput(outputInfo: OutputInfo) {
  const { output, expected, locales } = outputInfo;

  const insertLocaleIntoPath = (
    { name, ext, base, ...rest }: path.ParsedPath,
    locale: string,
  ) =>
    path.format({
      ...rest,
      base: name.endsWith('.i18n')
        ? `${name.slice(0, -5)}.${locale}.i18n${ext}`
        : `${name}.${locale}${ext}`,
    });

  // If locales are specified, generate a list of paths, for both output and
  // expected paths, that have locale prepended before the extension.
  const [outputs, expects] =
    locales && locales.length
      ? [output, expected]
          .map(path.parse)
          .map((parsedPath) =>
            locales.map((locale) => insertLocaleIntoPath(parsedPath, locale)),
          )
      : [[output], [expected]];

  for (const [outputPath, expectedPath] of zip(outputs, expects)) {
    await content.compare(outputPath!, expectedPath!);
  }
}

describe('MiniI18nExtractPlugin', () => {
  type SourceTypeInfo = {
    /**
     * Format type name
     */
    type: SourceType;
    /**
     * Whether the file of this format needs a loader to be understood in
     * imports.
     *
     * JSON is automatically understood by Webpack, YAML and Vue SFC are not.
     *
     * Used so errors can be triangulated away from Webpack / eval failures.
     */
    needsLoader: boolean;
    /**
     * Whether file of this format can be emitted by Webpack just by
     * specifying the format in config.resolve.extensions.
     *
     * If `null`, this is unspecifiable.
     *
     * Used so errors can be triangulated away from Webpack / eval failures.
     *
     * Behaviours by format:
     * - JSON is automatically understood by Webpack.
     * - YAML may or may not be emitted based on the its contents
     * - Vue SFC are not emittable because of the '<>' tags.
     */
    emittable: boolean | null;
  };
  type SourceTypeInfos = [SourceType, SourceTypeInfo][];

  const fileFormats: SourceTypeInfos = [
    ['json', { type: 'json', needsLoader: false, emittable: true }],
    ['yaml', { type: 'yaml', needsLoader: true, emittable: null }],
    ['vue', { type: 'vue', needsLoader: true, emittable: false }],
  ];

  let createdDirRoot: string;

  beforeAll(async () => {
    const { tempDirRoot } = await prepare();
    createdDirRoot = tempDirRoot;
    createdDirRoot + createdDirRoot;
  });

  afterAll(async () => {
    await restore(createdDirRoot);
  });

  describe('setup', () => {
    test('[meta] setup works', () => {
      expect(true).toBe(true);
    });

    test('[meta] class MiniI18nExtractPlugin initializes', () => {
      const plugin = new MiniI18nExtractPlugin();
      expect(plugin).toBeTruthy();
    });
  });

  describe('setup - webpack', () => {
    const loaderlessFileFormats = fileFormats.filter(
      ([name, { needsLoader, emittable }]) => emittable && !needsLoader,
    );
    const loaderDepFileFormats = fileFormats.filter(
      ([name, { needsLoader, emittable }]) => !(emittable && !needsLoader),
    );
    const emittableFileFormats = fileFormats.filter(
      ([name, { emittable }]) => emittable === true,
    );
    const nonEmittableFileFormats = fileFormats.filter(
      ([name, { emittable }]) => emittable === false,
    );

    test('[meta] webpack works with js', async () => {
      const config = { entry: './entry1-null.js' };
      const { stats, each } = await runWebpack(config);
      expect(stats).toBeTruthy();
      await each.runInBrowser();
      // Uncomment to verify that the call indeed doesn't throw Error
      // await each.runInBrowser({ waitForError: true });
    });

    test.each(emittableFileFormats)(
      '[meta] webpack can emit %s without loader',
      async (fileFormat) => {
        const config = {
          ...prepNoLoaderConfig(fileFormat),
          entry: `./entry1.${fileFormat}`,
        };
        const { stats } = await runWebpack(config);
        expect(stats).toBeTruthy();
      },
    );

    test.each(nonEmittableFileFormats)(
      '[meta] webpack cannot emit %s without loader',
      async (fileFormat) => {
        await expectAsyncThrow(async () => {
          const config = {
            ...prepNoLoaderConfig(fileFormat),
            entry: `./entry1.${fileFormat}`,
          };
          const { stats } = await runWebpack(config);
          expect(stats).toBeTruthy();
        });
      },
    );

    test.each(loaderlessFileFormats)(
      '[meta] emitted js file from %s is valid without loader',
      async (fileFormat) => {
        const config = {
          entry: `./entry1.${fileFormat}`,
        };
        const { stats, each } = await runWebpack(config);
        expect(stats).toBeTruthy();
        await each.runInBrowser();
        // Uncomment to verify that the call indeed doesn't throw Error
        // await each.runInBrowser({ waitForError: true });
      },
    );

    test.each(loaderDepFileFormats)(
      '[meta] emitted js file from %s is not valid without loader',
      async (fileFormat) => {
        await expectAsyncThrow(async () => {
          const config = {
            ...prepNoLoaderConfig(fileFormat),
            entry: `./entry1.${fileFormat}`,
          };
          const { stats, each } = await runWebpack(config);
          expect(stats).toBeTruthy();
          await each.runInBrowser({ waitForError: true });
        });
      },
    );

    test.each(fileFormats)(
      '[meta] emitted js file from %s is valid with correct config',
      async (fileFormat) => {
        const config = {
          ...prepConfig(fileFormat),
          entry: `./entry1.${fileFormat}`,
        };
        const { stats, each } = await runWebpack(config);
        expect(stats).toBeDefined();
        await each.runInBrowser();
        // Uncomment to verify that the call indeed doesn't throw Error
        // await each.runInBrowser({ waitForError: true });
      },
    );

    test.each(fileFormats)(
      '[meta] emitted js file from %s with correct config can be imported by another file',
      async (fileFormat) => {
        const config = {
          ...prepConfig(fileFormat),
          entry: `./entry1-${fileFormat}.js`,
        };
        const { stats, each } = await runWebpack(config);
        expect(stats).toBeTruthy();
        await each.runInBrowser();
        // Uncomment to verify that the call indeed doesn't throw Error
        // await each.runInBrowser({ waitForError: true });
      },
    );
  });

  describe('IO', () => {
    const inputs = [
      ['json', 'json'],
      ['yaml', 'yaml'],
      ['yaml.vue', 'vue'],
      ['json.vue', 'vue'],
    ] as [string, SourceType][];

    const outputPath = path.resolve(
      defaultConfig.output!.path!,
      `main.i18n.yaml`,
    );
    const expectedPath = require.resolve(
      '../../test/fixtures/webpack/entry1-expected.yaml',
    );

    const plugin = new MiniI18nExtractPlugin({
      exportType: 'yaml',
      splitLocales: true,
    });

    beforeEach(async () => {
      await reset();
    });

    test.each(inputs)('from %s', async (fileFormat, configType) => {
      const config = {
        ...prepConfig(configType, plugin, plugin.asLoader),
        entry: `./entry1.${fileFormat}`,
      };
      await runWebpack(config);
      await validateLocaleOutput({
        expected: expectedPath,
        output: outputPath,
        locales: ['en', 'de'],
      });
    });

    test.each(inputs)(
      'from %s via js import',
      async (fileFormat, configType) => {
        const config = {
          ...prepConfig(configType, plugin, plugin.asLoader),
          entry: `./entry1-${fileFormat}.js`,
        };
        await runWebpack(config);
        await validateLocaleOutput({
          expected: expectedPath,
          output: outputPath,
          locales: ['en', 'de'],
        });
      },
    );
  });

  describe('export type', () => {
    /**
     * Tuples of [SpecifiedOutputType, ExpectedOutputType]
     */
    const exportTypes = [
      ['yaml', 'yaml'],
      ['json', 'json'],
      [undefined, 'json'],
    ] as [ExportType, ExportType][];

    beforeEach(async () => {
      await reset();
    });

    test.each(exportTypes)(
      'export type %s exports to %s',
      async (inputFileFormat, expectedFileFormat) => {
        const outputPath = path.resolve(
          defaultConfig.output!.path!,
          `main.i18n.${expectedFileFormat}`,
        );
        const expectedPath = require.resolve(
          `../../test/fixtures/webpack/entry1-expected.${expectedFileFormat}`,
        );

        const plugin = new MiniI18nExtractPlugin({
          exportType: inputFileFormat,
          splitLocales: true,
        });

        const config = {
          ...prepConfig('vue', plugin, plugin.asLoader),
          entry: `./entry1.yaml.vue`,
        };
        await runWebpack(config);
        await validateLocaleOutput({
          expected: expectedPath,
          output: outputPath,
          locales: ['en', 'de'],
        });
      },
    );
  });

  describe('split locale', () => {
    /**
     * Tuples of [SpecifiedSplitLocale, ExpectedSplitLocale]
     */
    const splitLocaleArgs = [
      [true, true],
      [false, false],
      [undefined, true],
    ] as [boolean | undefined, boolean][];

    const outputPath = path.resolve(
      defaultConfig.output!.path!,
      'main.i18n.json',
    );
    const expectedPath = require.resolve(
      '../../test/fixtures/webpack/entry1-expected.json',
    );

    beforeEach(async () => {
      await reset();
    });

    test.each(splitLocaleArgs)(
      'set to %s interpreted as %s',
      async (inputSplitLocale, expectedSplitLocale) => {
        const plugin = new MiniI18nExtractPlugin({
          exportType: 'json',
          splitLocales: inputSplitLocale,
        });

        const config = {
          ...prepConfig('vue', plugin, plugin.asLoader),
          entry: `./entry1.yaml.vue`,
        };
        await runWebpack(config);
        await validateLocaleOutput({
          expected: expectedPath,
          output: outputPath,
          locales: expectedSplitLocale ? ['en', 'de'] : undefined,
        });
      },
    );
  });

  describe('content merge', () => {
    /**
     * Tuples of [SpecifiedOutputType, ExpectedOutputType]
     */
    const exportTypes = [['yaml'], ['json']] as [ExportType][];

    beforeEach(async () => {
      await reset();
    });

    test.each(exportTypes)('%s output is merged', async (fileFormat) => {
      const outputPath = path.resolve(
        defaultConfig.output!.path!,
        `main.i18n.${fileFormat}`,
      );
      const expectedPath = require.resolve(
        `../../test/fixtures/webpack/merged-expected.${fileFormat}`,
      );

      const plugin = new MiniI18nExtractPlugin({
        exportType: fileFormat,
        splitLocales: true,
      });

      const config = {
        ...prepConfig(fileFormat, plugin, plugin.asLoader),
        entry: `./entry1-${fileFormat}-merged.js`,
      };
      await runWebpack(config);
      await validateLocaleOutput({
        expected: expectedPath,
        output: outputPath,
        locales: ['en', 'de'],
      });
    });
  });
});
