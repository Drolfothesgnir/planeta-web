const merge = require("webpack-merge"),
  common = require("./webpack.common.js"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              strictUnits: true
            }
          }
        ],
        include: /\.module\.less$/
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              strictUnits: true
            }
          },
          "postcss-loader"
        ],
        exclude: /\.module\.less$/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Planeta Web",
      template: "public/index.html",
      hash: true,
      cache: true
    }),
    new MiniCssExtractPlugin()
  ]
});
