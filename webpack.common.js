const path = require("path"),
  webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/images/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      CACHE_VERSION: JSON.stringify(
        Math.random()
          .toString(36)
          .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      )
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
