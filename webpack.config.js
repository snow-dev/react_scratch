const path = require('path');
const nodeExternals = require('webpack-node-externals');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtool: "inline-source-map",

  // entry: ['./server/index.js'],

  // target: 'node',

  // externals: [nodeExternals()],

  // output: {
  //   path: path.resolve('server-build'),
  //   filename: 'main.js'
  // },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};