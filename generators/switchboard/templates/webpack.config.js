/* eslint-disable
  func-names,
  no-console,
  global-require */
const path = require('path');
// This plugin can increase the performance of the build by caching and incrementally building
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

require('dotenv-extended').load();

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const isDev = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase().startsWith('prod') !== true;
const mode = isDev ? DEVELOPMENT : PRODUCTION;

console.log(`Compiling in ${process.env.NODE_ENV}:${mode} mode`);

const config = {
  entry: './switchboard/index.ts',
  mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: mode === PRODUCTION ? 'switchboard.min.js' : 'switchboard.js',
    library: 'switchboard',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
};

module.exports = config;
