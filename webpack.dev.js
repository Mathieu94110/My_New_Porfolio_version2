const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.html",
    aboutme: "./src/about-me.html",
    mywork: "./src/my-work.html",
    contact: "./src/contact.html",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      inject: true,
      chunks: ["contact"],
      filename: "contact.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/about-me.html",
      inject: true,
      chunks: ["aboutme"],
      filename: "about-me.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/my-work.html",
      inject: true,
      chunks: ["mywork"],
      filename: "my-work.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
