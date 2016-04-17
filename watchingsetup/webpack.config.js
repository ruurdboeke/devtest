var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  [
    './src/HelloReact.tsx'
  ],
  output: {
    path:     path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test:    /\.tsx?$/ ,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  }
};