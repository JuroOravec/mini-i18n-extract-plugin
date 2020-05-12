import { Dependency } from 'mini-extract-plugin';

import * as types from '../types';

export default class I18nDependency
  extends Dependency<{ dependencyOptions: types.DependencyOptions }>
  implements types.I18nDependency {
  locale: types.I18nDependency['locale'];

  constructor(
    options: types.DependencyParams[0],
    ...args: types.Tail<types.DependencyParams>
  ) {
    super(options, ...args);

    this.locale = options.locale;
  }
}
