const webpack = require("webpack"),
  path = require("path"),
  merge = require("webpack-merge"),
  common = require("./webpack.common.js"),
  lessLoaderConfig = {
    loader: "less-loader",
    options: {
      strictUnits: true,
      sourceMap: true,
      javascriptEnabled: true,
    },
  };

module.exports = merge(common, {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          lessLoaderConfig,
        ],
        include: /\.module\.less$/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          lessLoaderConfig,
        ],
        exclude: /\.module\.less$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: {
      index: "/index.html",
    },
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
    clientLogLevel: "error",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
