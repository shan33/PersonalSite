const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: {
          presets: ["@babel/react", "@babel/env"],
        }
      },
      {
        test: /\.less$/, exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      }, {
        test: /.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash:8][name].[ext]',
            outputPath: 'images/',
            publicPath: 'images/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'XuLanshan',
      template: './build/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
    hot: true,
    host: 'localhost',
    port: 8080,
    headers: {
      time: new Date().getMilliseconds()
    }
  },
}