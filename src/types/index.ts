import type { types, Dependency, Module } from 'mini-extract-plugin';

export interface I18nDependency extends types.Dependency {
  locale: string;
}

export type DependencyOptions = types.DependencyOptions & {
  locale: string;
};

type DepCtorParams = ConstructorParameters<typeof Dependency>;
export type DependencyParams = [
  DependencyOptions,
  DepCtorParams[1],
  DepCtorParams[2],
];

export type I18nDependencyClass = types.DependencyClass<
  I18nDependency,
  DependencyParams
>;

export interface I18nModule extends types.Module {
  locale: string;
}

export type I18nModuleClass = types.ModuleClass<I18nModule, I18nDependency> &
  typeof Module;

export type ExportType = 'json' | 'yaml';

export interface ConstructorOptions extends types.ConstructorOptions {
  splitLocales?: boolean;
  exportType?: ExportType;
}

export type ClassParams = {
  dependencyClass: I18nDependencyClass;
  moduleClass: I18nModuleClass;
  constructorOptions: ConstructorOptions;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MiniI18nExtractPlugin
  extends types.MiniExtractPlugin<ClassParams> {}

export type Taps = types.hook.Taps<MiniI18nExtractPlugin>;

// Tail<T> returns a tuple with the first element removed
// so Tail<[1, 2, 3]> is [2, 3]
// (works by using rest tuples)
export type Tail<T extends any[]> = ((...t: T) => void) extends (
  h: any,
  ...r: infer R
) => void
  ? R
  : never;
