const path = require('path');

const resolve = path.resolve.bind(path, __dirname);

module.exports = env => {
  return {
    entry: resolve('src/reh'),
    mode: env && env.production ? 'production' : 'development',
    output: {
      filename: 'reh.js',
      library: 'Reh',
      libraryTarget: 'umd',
      path: resolve('out')
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: resolve('src')
        }
      ]
    }
  };
};
