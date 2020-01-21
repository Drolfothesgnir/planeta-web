const webpack = require("webpack"),
  path = require("path"),
  merge = require("webpack-merge"),
  common = require("./webpack.common.js"),
  lessLoaderConfig = {
    loader: "less-loader",
    options: {
      strictUnits: true,
      sourceMap: true
    }
  };

module.exports = merge(common, {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              },
              sourceMap: true,
              importLoaders: 1
            }
          },
          lessLoaderConfig
        ],
        include: /\.module\.less$/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          lessLoaderConfig
        ],
        exclude: /\.module\.less$/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
    clientLogLevel: "silent"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
