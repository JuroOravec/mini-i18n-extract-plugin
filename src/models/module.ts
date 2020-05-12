import { Module, types } from 'mini-extract-plugin';

import * as localTypes from '../types';

export default class I18nModule extends Module<{
  dependency: localTypes.I18nDependency;
}> {
  locale: localTypes.I18nModule['locale'];

  constructor(dependency: localTypes.I18nDependency) {
    super(dependency);

    this.locale = dependency.locale;
  }

  updateCacheModule(module: I18nModule) {
    super.updateCacheModule(module);
    this.locale = module.locale;
  }

  updateHash(hash: types.webpack.Hash) {
    super.updateHash(hash);

    hash.update(this.locale || '');
  }
}
