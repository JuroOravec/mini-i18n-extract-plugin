[mini-i18n-extract-plugin](README.md)

# mini-i18n-extract-plugin

## Index

### Classes

* [I18nDependency](classes/i18ndependency.md)
* [I18nModule](classes/i18nmodule.md)

### Interfaces

* [ConstructorOptions](interfaces/constructoroptions.md)
* [MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)

### Type aliases

* [ClassParams](README.md#classparams)
* [DepCtorParams](README.md#depctorparams)
* [DependencyOptions](README.md#dependencyoptions)
* [DependencyParams](README.md#dependencyparams)
* [ExportType](README.md#exporttype)
* [I18nDependencyClass](README.md#i18ndependencyclass)
* [I18nModuleClass](README.md#i18nmoduleclass)
* [LoaderContext](README.md#loadercontext)
* [SourceType](README.md#sourcetype)
* [SourceTypeData](README.md#sourcetypedata)
* [Tail](README.md#tail)
* [Taps](README.md#taps)

### Variables

* [MiniI18nExtractPlugin](README.md#const-minii18nextractplugin)
* [debug](README.md#const-debug)
* [pluginOptionsSchema](README.md#const-pluginoptionsschema)
* [type](README.md#const-type)
* [typeReadable](README.md#const-typereadable)

### Functions

* [addQueryParams](README.md#addqueryparams)
* [entrypointName](README.md#entrypointname)
* [extractVueI18nData](README.md#extractvuei18ndata)
* [getDebugLogger](README.md#getdebuglogger)
* [isVueI18nLoaderResource](README.md#isvuei18nloaderresource)
* [resolveResource](README.md#resolveresource)
* [splitArray](README.md#splitarray)

### Object literals

* [customOptionsSchema](README.md#const-customoptionsschema)
* [hooks](README.md#const-hooks)

## Type aliases

###  ClassParams

Ƭ **ClassParams**: *object*

*Defined in [src/types/index.ts:37](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L37)*

#### Type declaration:

* **constructorOptions**: *[ConstructorOptions](interfaces/constructoroptions.md)*

* **dependencyClass**: *[I18nDependencyClass](README.md#i18ndependencyclass)*

* **moduleClass**: *[I18nModuleClass](README.md#i18nmoduleclass)*

___

###  DepCtorParams

Ƭ **DepCtorParams**: *ConstructorParameters‹typeof Dependency›*

*Defined in [src/types/index.ts:11](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L11)*

___

###  DependencyOptions

Ƭ **DependencyOptions**: *DependencyOptions & object*

*Defined in [src/types/index.ts:7](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L7)*

___

###  DependencyParams

Ƭ **DependencyParams**: *[[DependencyOptions](README.md#dependencyoptions), DepCtorParams[1], DepCtorParams[2]]*

*Defined in [src/types/index.ts:12](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L12)*

___

###  ExportType

Ƭ **ExportType**: *"json" | "yaml"*

*Defined in [src/types/index.ts:30](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L30)*

___

###  I18nDependencyClass

Ƭ **I18nDependencyClass**: *types.DependencyClass‹[I18nDependency](classes/i18ndependency.md), [DependencyParams](README.md#dependencyparams)›*

*Defined in [src/types/index.ts:18](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L18)*

___

###  I18nModuleClass

Ƭ **I18nModuleClass**: *types.ModuleClass‹[I18nModule](classes/i18nmodule.md), [I18nDependency](classes/i18ndependency.md)› & typeof Module*

*Defined in [src/types/index.ts:27](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L27)*

___

###  LoaderContext

Ƭ **LoaderContext**: *PitchContext["loaderContext"]*

*Defined in [src/lib/resolve-resource.ts:13](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/resolve-resource.ts#L13)*

___

###  SourceType

Ƭ **SourceType**: *"json" | "yaml"*

*Defined in [src/lib/resolve-resource.ts:6](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/resolve-resource.ts#L6)*

___

###  SourceTypeData

Ƭ **SourceTypeData**: *object*

*Defined in [src/lib/resolve-resource.ts:7](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/resolve-resource.ts#L7)*

#### Type declaration:

* **lang**: *[SourceType](README.md#sourcetype) | null*

* **locale**: *string | null*

* **vue**: *boolean | null*

___

###  Tail

Ƭ **Tail**: *function extends function ? R : never*

*Defined in [src/types/index.ts:52](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L52)*

___

###  Taps

Ƭ **Taps**: *types.hook.Taps‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)›*

*Defined in [src/types/index.ts:47](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/types/index.ts#L47)*

## Variables

### `Const` MiniI18nExtractPlugin

• **MiniI18nExtractPlugin**: *object* = miniExtractPluginFactory<ClassParams>({
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
})

*Defined in [src/index.ts:17](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/index.ts#L17)*

#### Type declaration:

* **new __type**(`options?`: T["options"]): *T*

___

### `Const` debug

• **debug**: *log* = getDebugLogger()

*Defined in [src/lib/debug.ts:16](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/debug.ts#L16)*

___

### `Const` pluginOptionsSchema

• **pluginOptionsSchema**: *object & object* = merge(
  {},
  schema.pluginOptions,
  customOptionsSchema,
)

*Defined in [src/schemas/plugin-options.ts:19](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/schemas/plugin-options.ts#L19)*

___

### `Const` type

• **type**: *"i18n"* = "i18n"

*Defined in [src/config.ts:1](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/config.ts#L1)*

___

### `Const` typeReadable

• **typeReadable**: *"I18n"* = "I18n"

*Defined in [src/config.ts:2](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/config.ts#L2)*

## Functions

###  addQueryParams

▸ **addQueryParams**(`url`: string, `params`: object): *string*

*Defined in [src/lib/add-query-params.ts:6](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/add-query-params.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`params` | object | {} |

**Returns:** *string*

___

###  entrypointName

▸ **entrypointName**(`chunk`: Chunk): *string | undefined*

*Defined in [src/lib/entrypoint-name.ts:6](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/entrypoint-name.ts#L6)*

Find Chunk's entrypoint name

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *string | undefined*

___

###  extractVueI18nData

▸ **extractVueI18nData**(`exportsData`: any): *any*

*Defined in [src/lib/extract-vue-i18n-data.ts:4](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/extract-vue-i18n-data.ts#L4)*

Extract data from source that came from VueI18n loader

**Parameters:**

Name | Type |
------ | ------ |
`exportsData` | any |

**Returns:** *any*

___

###  getDebugLogger

▸ **getDebugLogger**(): *log*

*Defined in [src/lib/debug.ts:4](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/debug.ts#L4)*

**Returns:** *log*

___

###  isVueI18nLoaderResource

▸ **isVueI18nLoaderResource**(`query`: object): *boolean*

*Defined in [src/lib/resolve-resource.ts:15](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/resolve-resource.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | object |

**Returns:** *boolean*

___

###  resolveResource

▸ **resolveResource**(`loaderCtx`: [LoaderContext](README.md#loadercontext)): *object*

*Defined in [src/lib/resolve-resource.ts:19](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/resolve-resource.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderCtx` | [LoaderContext](README.md#loadercontext) |

**Returns:** *object*

* **lang**: *[SourceType](README.md#sourcetype) | null*

* **locale**: *string | null*

* **vue**: *boolean | null*

___

###  splitArray

▸ **splitArray**<**T**, **C**>(`arr`: T[], `categorizer`: function): *T[][]*

*Defined in [src/lib/split-array.ts:5](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/lib/split-array.ts#L5)*

Split an array into an array of arrays based on the return value of
categorizer. Items with matching return values are grouped together.

**Type parameters:**

▪ **T**

▪ **C**

**Parameters:**

▪ **arr**: *T[]*

▪ **categorizer**: *function*

▸ (`a`: T, ...`args`: any[]): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`...args` | any[] |

**Returns:** *T[][]*

## Object literals

### `Const` customOptionsSchema

### ▪ **customOptionsSchema**: *object*

*Defined in [src/schemas/plugin-options.ts:4](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/schemas/plugin-options.ts#L4)*

▪ **errorMessages**: *object*

*Defined in [src/schemas/plugin-options.ts:14](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/schemas/plugin-options.ts#L14)*

* **exportType**: *string* = "must be either 'json' or 'yaml'"

▪ **properties**: *object*

*Defined in [src/schemas/plugin-options.ts:5](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/schemas/plugin-options.ts#L5)*

* **exportType**: *object*

  * **oneOf**: *object[]* = [{ enum: ['yaml', 'json'] }]

  * **type**: *string* = "string"

* **splitLocales**: *object*

  * **type**: *string* = "boolean"

___

### `Const` hooks

### ▪ **hooks**: *object*

*Defined in [src/hooks.ts:15](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L15)*

###  beforeRenderMain

▸ **beforeRenderMain**(`context`: RenderContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹››, `modules`: [I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[]): *[I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[][]*

*Defined in [src/hooks.ts:142](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L142)*

If `splitLocales` is enabled, split the modules that should be rendered
for a given entrypoint into groups by locale, so separate files are
emitted for individual locales.

**Parameters:**

Name | Type |
------ | ------ |
`context` | RenderContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›› |
`modules` | [I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[] |

**Returns:** *[I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[][]*

###  dependency

▸ **dependency**(`context`: PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹››, `dependencyContext`: LoaderModuleContext): *object[]*

*Defined in [src/hooks.ts:77](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L77)*

Split i18n data of each file into separate blocks by locales so they could
be possibly optimized/cached

**Parameters:**

Name | Type |
------ | ------ |
`context` | PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›› |
`dependencyContext` | LoaderModuleContext |

**Returns:** *object[]*

###  extracted

▸ **extracted**(`context`: PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹››, `remainingSource`: string): *string*

*Defined in [src/hooks.ts:131](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L131)*

Return empty JSON object, so the loader works with JSON Webpack module rules

**Parameters:**

Name | Type |
------ | ------ |
`context` | PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›› |
`remainingSource` | string |

**Returns:** *string*

###  initialize

▸ **initialize**(`instance`: [MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›, `options`: [ConstructorOptions](interfaces/constructoroptions.md)‹›): *void*

*Defined in [src/hooks.ts:19](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L19)*

Set defaults

**Parameters:**

Name | Type |
------ | ------ |
`instance` | [MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹› |
`options` | [ConstructorOptions](interfaces/constructoroptions.md)‹› |

**Returns:** *void*

###  merge

▸ **merge**(`ctx`: RenderContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹››, `modules`: [I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[]): *ConcatSource‹›*

*Defined in [src/hooks.ts:154](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L154)*

Override the merging process to join the i18n data as JSONs

**Parameters:**

Name | Type |
------ | ------ |
`ctx` | RenderContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›› |
`modules` | [I18nModule](classes/i18nmodule.md)‹› & Module‹object, Dependency‹object, DependencyOptions, any››[] |

**Returns:** *ConcatSource‹›*

###  source

▸ **source**(`context`: PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹››): *any*

*Defined in [src/hooks.ts:33](https://github.com/JuroOravec/mini-i18n-extract-plugin/blob/dfa2e8a/src/hooks.ts#L33)*

Modify the source from intlify/vue-i18n-loader and pass the module ID
along

**Parameters:**

Name | Type |
------ | ------ |
`context` | PitchCompilationContext‹[MiniI18nExtractPlugin](interfaces/minii18nextractplugin.md)‹›› |

**Returns:** *any*
