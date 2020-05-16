import { ConcatSource, OriginalSource } from 'webpack-sources';
import { util, types } from 'mini-extract-plugin';
import merge from 'lodash.merge';
import yaml from 'js-yaml';

import type { Taps } from './types';
import entrypointName from './lib/entrypoint-name';
import splitArray from './lib/split-array';
import extractVueI18nData from './lib/extract-vue-i18n-data';
import debug from './lib/debug';
import { resolveResource } from './lib/resolve-resource';
import addQueryParams from './lib/add-query-params';
import defaultModuleFilename from './lib/module-filename';

const hooks: Partial<Taps> = {
  /**
   * Set defaults
   */
  initialize: (instance, options) => {
    debug('Started hook "initialize"');
    const { exportType, splitLocales, moduleFilename } = options;
    instance.options.splitLocales = splitLocales ?? true;
    instance.options.exportType = exportType ?? 'json';
    instance.options.moduleFilename =
      moduleFilename ?? (defaultModuleFilename as types.ModuleFilenameFunction);
    debug('Done hook "initialize"');
  },

  /**
   * Modify the source from intlify/vue-i18n-loader and pass the module ID
   * along
   */
  source: (context) => {
    debug('Started hook "source"');
    const {
      childCompiler: {
        options: { output: { filename } = {} },
      },
      childCompilation: { assets },
    } = context;

    const asset = assets[filename as string];
    const origSrc = asset?.source();

    if (!origSrc) {
      debug('No source');
      return origSrc;
    }

    // Find the module ID and add it to exports object so it can be accessed
    // once the module is evaluated
    const [internals, id, ...userContents] = origSrc.split('/***/');
    const userContent = userContents.join('/***/');
    const moduleId = id.split('\n')[0].trim().slice(1, -2); // remove quotes and colon

    // Insert statement after all user's statements
    const idVarInsertIndex = userContent.lastIndexOf('/***/') - 1;
    const newUserContent = [
      userContent.slice(0, idVarInsertIndex),
      `  module.exports._moduleId = "${moduleId}";`,
      userContent.slice(idVarInsertIndex),
    ].join('\n');
    const newSource = [internals, id, newUserContent].join('/***/');

    // Force the source to return our modified source by placing it to cache
    asset._cachedSource = newSource;
    debug(`Module ID "${moduleId}" added to exports`);

    debug('Done hook "source"');
    return asset._cachedSource;
  },

  /**
   * Split i18n data of each file into separate blocks by locales so they could
   * be possibly optimized/cached
   */
  dependency: (context, dependencyContext) => {
    debug('Started hook "dependency"');
    const {
      childCompilation,
      classOptions: { type, moduleType },
      loaderContext,
    } = context;
    const { exports: exported } = dependencyContext;

    const { vue: isVueBlock, locale: resourceLocale } = resolveResource(
      loaderContext,
    );

    const deps = [];

    for (const [err, content] of exported) {
      if (err) throw err;

      const data = isVueBlock
        ? JSON.parse(extractVueI18nData(content))
        : content;

      const moduleId = content._moduleId;
      delete content._moduleId;
      const mod = util.module.findById(childCompilation.modules, moduleId);
      if (!mod) {
        debug(`No Module found for ID "${moduleId}"`);
        continue;
      }
      // If resource query specified locale, we assume all data belongs to that
      // locale, so top-level keys of the data are not locale keys, but i18n
      // data already.
      const locales: Array<[string, any]> = resourceLocale
        ? [[resourceLocale, data]]
        : Object.entries(data);

      for (const [locale, localeData] of locales) {
        deps.push({
          miniExtractType: type,
          moduleType,
          locale,
          identifier: addQueryParams(mod.identifier(), { locale }),
          content: JSON.stringify(localeData),
          context: mod.context,
        });
      }
    }
    debug('Done hook "dependency"');
    return deps;
  },

  /**
   * Return empty JSON object, so the loader works with JSON Webpack module rules
   */
  extracted: (context, remainingSource) => {
    debug('Started hook "extracted"');
    debug('Done hook "extracted"');
    return '{}';
  },

  /**
   * If `splitLocales` is enabled, split the modules that should be rendered
   * for a given entrypoint into groups by locale, so separate files are
   * emitted for individual locales.
   */
  beforeRenderMain: (context, modules) => {
    debug('Started hook "beforeRenderMain"');
    const moduleGroups = context.options.splitLocales
      ? splitArray(modules, (mod: any) => mod.locale)
      : [modules];
    debug('Done hook "beforeRenderMain"');
    return moduleGroups;
  },

  /**
   * Override the merging process to join the i18n data as JSONs
   */
  merge: (ctx, modules) => {
    debug('Started hook "merge"');
    const { chunk } = ctx.renderOptions;
    const { exportType, splitLocales } = ctx.options;

    const source = new ConcatSource();
    if (!modules.length) return new ConcatSource(source);

    const finalJson = merge(
      {},
      ...modules.map((m) => {
        const data = JSON.parse(m.content);
        // Scope the locale data to its locale key if all locales should
        // be in same file
        return splitLocales ? data : { [m.locale]: data };
      }),
    );

    // If the modules are split by locales we can infer the currect locale
    // by looking at any of the modules
    const localeSuffix = splitLocales ? `.${modules[0].locale}` : '';
    const name = `${entrypointName(chunk) || ''}${localeSuffix}`;

    const serializer = exportType === 'yaml' ? yaml.safeDump : JSON.stringify;

    source.add(new OriginalSource(serializer(finalJson), name));
    source.add('\n');

    debug('Done hook "merge"');
    return new ConcatSource(source);
  },
};

export default hooks;
