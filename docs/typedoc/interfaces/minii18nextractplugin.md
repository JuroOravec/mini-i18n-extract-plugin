[mini-i18n-extract-plugin](../README.md) › [MiniI18nExtractPlugin](minii18nextractplugin.md)

# Interface: MiniI18nExtractPlugin <**I, Params**>

## Type parameters

▪ **I**: *AbstractMiniExtractPlugin‹T›*

▪ **Params**: *ParamsParse‹[ClassParams](../README.md#classparams)›*

## Hierarchy

* MiniExtractPlugin‹[ClassParams](../README.md#classparams)›

  ↳ **MiniI18nExtractPlugin**

## Implements

* Ploadin

## Index

### Constructors

* [constructor](minii18nextractplugin.md#constructor)

### Properties

* [apply](minii18nextractplugin.md#apply)
* [classOptions](minii18nextractplugin.md#classoptions)
* [hooks](minii18nextractplugin.md#hooks)
* [options](minii18nextractplugin.md#options)

### Accessors

* [_classId](minii18nextractplugin.md#_classid)
* [_instanceId](minii18nextractplugin.md#_instanceid)
* [asLoader](minii18nextractplugin.md#asloader)
* [_classId](minii18nextractplugin.md#static-_classid)
* [asLoader](minii18nextractplugin.md#static-asloader)

### Methods

* [loader](minii18nextractplugin.md#loader)
* [pitch](minii18nextractplugin.md#pitch)

## Constructors

###  constructor

\+ **new MiniI18nExtractPlugin**(): *[MiniI18nExtractPlugin](minii18nextractplugin.md)*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[constructor](minii18nextractplugin.md#constructor)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:2

**Returns:** *[MiniI18nExtractPlugin](minii18nextractplugin.md)*

## Properties

###  apply

• **apply**: *function*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[apply](minii18nextractplugin.md#apply)*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing-abstract.d.ts:27

#### Type declaration:

▸ (`c`: Compiler): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Compiler |

___

###  classOptions

• **classOptions**: *Required‹ClassOptions‹I["classOptions"]››*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[classOptions](minii18nextractplugin.md#classoptions)*

*Overrides void*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing.d.ts:14

___

###  hooks

• **hooks**: *ActiveHooks*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[hooks](minii18nextractplugin.md#hooks)*

*Overrides void*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing.d.ts:13

___

###  options

• **options**: *Params["constructorOptions"]*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[options](minii18nextractplugin.md#options)*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing-abstract.d.ts:23

## Accessors

###  _classId

• **get _classId**(): *ClassId*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[_classId](minii18nextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:6

**Returns:** *ClassId*

___

###  _instanceId

• **get _instanceId**(): *InstanceId*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[_instanceId](minii18nextractplugin.md#_instanceid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:4

**Returns:** *InstanceId*

___

###  asLoader

• **get asLoader**(): *object*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[asLoader](minii18nextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:14

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *number | undefined*

___

### `Static` _classId

• **get _classId**(): *ClassId*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[_classId](minii18nextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:5

**Returns:** *ClassId*

___

### `Static` asLoader

• **get asLoader**(): *object*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[asLoader](minii18nextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:7

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *undefined*

## Methods

###  loader

▸ **loader**(`loaderContext`: any, `source?`: undefined | string, `sourceMap?`: undefined | string, `data?`: any): *void*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[loader](minii18nextractplugin.md#loader)*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing-abstract.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`data?` | any |

**Returns:** *void*

___

###  pitch

▸ **pitch**(`loaderContext`: any, `request`: string, `precedingRequest`: string, `data`: object): *void*

*Inherited from [MiniI18nExtractPlugin](minii18nextractplugin.md).[pitch](minii18nextractplugin.md#pitch)*

Defined in node_modules/mini-extract-plugin/dist/types/subclassing-abstract.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`request` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *void*
