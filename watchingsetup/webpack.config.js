var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  [
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test:    ['/\.jsx?$/', '/\.tsx?$/'],
        exclude: /node_modules/,
        loaders: ['react-hot', 'ts-loader']
      }
    ]
  }
};