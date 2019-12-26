const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = new HtmlWebpackPlugin(
  {
    title: 'My Page',
    meta: {
      viewport: 'width=device-width, initial-scale=1',
    },
    template: './src/index.html',
  }
);