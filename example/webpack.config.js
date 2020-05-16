/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-undef: 0 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineI18nPlugin = require('html-webpack-inline-i18n-plugin')
  .default;

// Be sure to run `npm run build` before running this example
const I18nExtractPlugin = require('..').default;

const theI18nExtractPlugin = new I18nExtractPlugin();
const theHtmlWebpackPlugin = new HtmlWebpackPlugin();
const theHtmlWebpackInlineI18nPlugin = new HtmlWebpackInlineI18nPlugin();

const config = {
  mode: 'development',
  context: path.join(path.dirname(module.filename), 'src'),
  entry: './index.js',
  output: {
    path: path.join(process.cwd(), 'temp', 'example', 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    },
  },
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: [theI18nExtractPlugin.asLoader, 'yaml-loader'],
      },
      { test: /\.json$/u, use: [theI18nExtractPlugin.asLoader] },
    ],
  },
  plugins: [
    theI18nExtractPlugin,
    theHtmlWebpackPlugin,
    theHtmlWebpackInlineI18nPlugin,
  ],
};

module.exports = config;
