import { schema } from 'mini-extract-plugin';
import merge from 'lodash.merge';

const customOptionsSchema = {
  properties: {
    exportType: {
      type: 'string',
      oneOf: [{ enum: ['yaml', 'json'] }],
    },
    splitLocales: {
      type: 'boolean',
    },
  },
  errorMessages: {
    exportType: "must be either 'json' or 'yaml'",
  },
};

const pluginOptionsSchema = merge(
  {},
  schema.pluginOptions,
  customOptionsSchema,
);

export default pluginOptionsSchema;
