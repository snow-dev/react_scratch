import path  from 'path';
import  ExtractTextPlugin from 'extract-text-webpack-plugin';
import  autoPrefixer  from 'autoprefixer';


// const browserConfig = {
//   entry: "./src/browser/index.js",
//   output: {
//     path: __dirname,
//     filename: ".public/bundle.js"
//   },
//
//   devtool: "cheap-module-source-map",
//   module: {
//     rules: [
//       {
//         test: [/\.svg$/, /\.gif$/, /\.jpe/, /\.png$/],
//         loader: "file-loader",
//         options: {
//           name: "public/media/[name].[ext]",
//           publicPath: url => url.replace(/public/, "")
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           use: [
//             {
//               loader: "css-loader",
//               options: {importLoaders: 1}
//             },
//             {
//               loader: "postcss-loader",
//               options: {plugins: [autoPrefixer()]}
//             }
//           ]
//         })
//       },
//       {
//         test: /js$/,
//         exclude: /(node_modules)/,
//         loader: "babel-loader",
//         query: {presets: ["react-app"]}
//       },
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: "public/css/[name].css"
//     })
//   ]
// };

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output:
    {
      path: __dirname,
      filename: "./src/server.js",
      libraryTarget: "commonjs2"
    },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
        test: /\.css&/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {presets: ["react-app"]}
      }
    ]
  }
};

module.exports = [serverConfig];