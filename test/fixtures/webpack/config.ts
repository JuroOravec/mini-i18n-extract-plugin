import path from 'path';
import type { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  context: path.dirname(module.filename),
  entry: {
    entry1: './entry1.js',
    entry2: './entry2.js',
  },
  output: {
    path: path.join(process.cwd(), 'temp', 'test', 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    },
  },
  module: {
    rules: [],
  },
  plugins: [],
};

export default config;
