'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'app')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      include: path.join(__dirname, 'app'),
      test: /\.(js|jsx)$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};