var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  [
    './src/client/mainClientHookup.jsx'
  ],
  output: {
    path:     path.join(__dirname, 'public'),
    filename: 'bundle.js',
    sourcemaps: '[file].js.map'
  },
  devtool: 'source-map',
  plugins: [
      new webpack.SourceMapDevToolPlugin({
          test:  ['/\.tsx?$/', '/\.jsx?$/'],
          exclude: 'node_modules',
          module: true,
          filename: '[file].map',
          append: false
      })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src/shared'],
    extensions:         ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test:    /\.tsx?$/,
        exclude: [/node_modules/,/typings/],
        loaders: ['babel-loader','ts-loader']
      },
      {
        test:    /\.jsx?$/,
        exclude: [/node_modules/,/typings/],
        loaders: ['babel-loader']
      }
    ],
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};