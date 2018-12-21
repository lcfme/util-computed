const path = require('path');

const resolve = path.resolve.bind(path, __dirname);

module.exports = env => {
  return {
    entry: resolve('src/computed'),
    mode: env && env.production ? 'production' : 'development',
    output: {
      filename: 'wx-computed.js',
      library: 'Computed',
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
