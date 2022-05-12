const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx"]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: "public/index.html",
    hash: true, // cache busting
    filename: '../dist/index.html'
  })]
}