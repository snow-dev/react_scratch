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
        test: /\.js$/,
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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
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