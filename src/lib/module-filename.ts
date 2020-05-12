import type { types } from 'mini-extract-plugin';

import type { MiniI18nExtractPlugin } from '../types';
import debug from './debug';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default <types.ModuleFilenameFunction<MiniI18nExtractPlugin>>(
  function moduleFilename(ctx, templateOptions, modules) {
    const {
      plugin: {
        classOptions: { type },
        options: { exportType, splitLocales },
      },
    } = ctx;

    const filename =
      splitLocales && modules.length
        ? `[name].${modules[0].locale}.${type}.${exportType}`
        : `[name].${type}.${exportType}`;

    debug(`Resolving module filename to:  "${filename}"`);
    return filename;
  }
);
