import miniExtractPluginFactory, {
  // @ts-ignore
  types, // Fixes TS4024
} from 'mini-extract-plugin';

import type { ClassParams, I18nModuleClass } from './types';
import debug from './lib/debug';
import { type } from './config';
import Dependency from './models/dependency';
import Module from './models/module';
import pluginOptionsSchema from './schemas/plugin-options';
import hooks from './hooks';

export * as types from './types';

debug('Creating MiniI18nExtractPlugin class');
const MiniI18nExtractPlugin = miniExtractPluginFactory<ClassParams>({
  type,
  dependencyClass: Dependency,
  moduleClass: Module as I18nModuleClass,
  pluginOptionsSchema,
  hooks: [
    {
      name: 'initialize' as 'initialize',
      type: 'tap' as 'tap',
      hooks: [hooks.initialize!],
    },
    {
      name: 'source' as 'source',
      type: 'tap' as 'tap',
      hooks: [hooks.source!],
    },
    {
      name: 'dependency' as 'dependency',
      type: 'tap' as 'tap',
      hooks: [hooks.dependency!],
    },
    {
      name: 'extracted' as 'extracted',
      type: 'tap' as 'tap',
      hooks: [hooks.extracted!],
    },
    {
      name: 'beforeRenderMain' as 'beforeRenderMain',
      type: 'tap' as 'tap',
      hooks: [hooks.beforeRenderMain!],
    },
    {
      name: 'merge' as 'merge',
      type: 'tap' as 'tap',
      hooks: [hooks.merge!],
    },
  ],
});
debug('Done creating MiniI18nExtractPlugin class');

export default MiniI18nExtractPlugin;
