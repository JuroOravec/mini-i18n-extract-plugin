declare module 'webpack/lib/Module' {
  import type webpack from 'webpack';
  export = webpack.compilation.Module;
}
