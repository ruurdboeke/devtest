var path    = require('path');
var webpack = require('webpack');

// note, we are using webpack only for bundling, not for compiling, please see gulp

module.exports = {
  entry:  [
    './dist/client/mainClientHookup.js'
  ],
  noInfo: false,
  output: {
    path:     path.join(__dirname, 'public'),
    filename: 'bundle.js',
    sourcemaps: '[file].js.map'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/shared'],
    extensions:         ['', '.js']
  }
};