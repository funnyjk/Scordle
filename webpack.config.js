const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: isDevelopment ? 'development' : 'production',
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
        options: {
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDevelopment,
        },
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
        },
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
  }), isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean)
}