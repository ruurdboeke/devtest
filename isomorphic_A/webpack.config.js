var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  [
    './src/shared/components/index.tsx'
  ],
  output: {
    path:     path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test:    /\.tsx?$/ ,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ],
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};