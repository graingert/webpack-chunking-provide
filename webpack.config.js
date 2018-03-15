const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      Promise: ['@babel/runtime/core-js/promise', 'default'],
      'Object.assign': ['@babel/runtime/core-js/object/assign.js', 'default'],
    }),
  ]
}
