const path = require( 'path' );
const plugins = require( './webpack.config/plugins' );
const configModule = require( './webpack.config/module' );

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'build' ),
  },
  plugins,
  module: configModule,
};

module.exports = config;