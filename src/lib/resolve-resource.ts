import type { types } from 'mini-extract-plugin';
import loaderUtils from 'loader-utils';

import debug from './debug';

export type SourceType = 'json' | 'yaml';
export type SourceTypeData = {
  lang: SourceType | null;
  locale: string | null;
  vue: boolean | null;
};

type LoaderContext = types.context.PitchContext['loaderContext'];

function isVueI18nLoaderResource(query: { [key: string]: any }) {
  return query.vue && query.blockType === 'i18n';
}

export function resolveResource(loaderCtx: LoaderContext) {
  const sourceTypeData: SourceTypeData = {
    lang: null,
    vue: null,
    locale: null,
  };
  if (loaderCtx.resourceQuery) {
    const query = loaderUtils.parseQuery(loaderCtx.resourceQuery);
    // Check if the resource represents a single locale
    if (query.locale) sourceTypeData.locale = query.locale;
    // Try to resolve as vue i18n block
    if (isVueI18nLoaderResource(query)) {
      sourceTypeData.vue = true;
      if (query.lang) {
        sourceTypeData.lang = query.lang;
        debug(`Resolving resource to: `, sourceTypeData);
        return sourceTypeData;
      }
      // vue-i18n-loader interprests blocks as JSON by default
      sourceTypeData.lang = 'json';
    }
    // Try to resolve lang based on query flags
    const queryLangMap: Map<string, SourceType> = new Map([
      ['json', 'json'],
      ['JSON', 'json'],
      ['yaml', 'yaml'],
      ['YAML', 'yaml'],
      ['yml', 'yaml'],
      ['YML', 'yaml'],
    ]);

    for (const [key, lang] of queryLangMap.entries()) {
      if (query[key]) {
        sourceTypeData.lang = lang;
        debug(`Resolving resource to: `, sourceTypeData);
        return sourceTypeData;
      }
    }
  }
  // Try to resolve lang based on resouce extension
  const extLangMap: Map<RegExp, SourceType> = new Map([
    [/\.ya?ml$/iu, 'yaml'],
    [/\.json$/iu, 'json'],
  ]);

  for (const [pattern, lang] of extLangMap.entries()) {
    if (pattern.test(loaderCtx.resource)) {
      sourceTypeData.lang = lang;
      debug(`Resolving resource to: `, sourceTypeData);
      return sourceTypeData;
    }
  }

  debug(`Resource lang possibly unknown, resolving to: `, sourceTypeData);
  return sourceTypeData;
}
