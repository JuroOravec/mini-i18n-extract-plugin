// Required so Webpack's Module properties are recognized on the
// MiniExtractPlugin's Module class, since the latter subclasses the former
declare module 'webpack/lib/Module' {
  import type { compilation } from 'webpack';
  export = compilation.Module;
}
