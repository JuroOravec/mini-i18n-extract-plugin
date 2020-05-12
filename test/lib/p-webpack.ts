import webpack from 'webpack';
/**
 * Promisified version of webpack function.
 */
export default function pWebpack<T>(
  options: webpack.Configuration | webpack.ConfigurationFactory,
): Promise<webpack.Stats> {
  return new Promise((resolve, reject) => {
    try {
      webpack(options, (err, stats) => (err ? reject(err) : resolve(stats)));
    } catch (err) {
      reject(err);
    }
  });
}
