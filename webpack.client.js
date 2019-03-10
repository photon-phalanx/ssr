const webpack = require('webpack')
const {resolve} = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.isServer': 'false'
    })
  ]
}
module.exports = merge(config, clientConfig)
