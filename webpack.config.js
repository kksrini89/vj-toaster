const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vj-toaster.js',
    library: 'vj-toaster',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', miniCSSExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyWebpackPlugin([
      {
        context: 'node_modules/@webcomponents/webcomponentsjs',
        from: '**/*.js',
        to: 'webcomponents'
      }
    ]),
    new miniCSSExtractPlugin({
      filename: 'styles.css'
    }),
    new htmlWebpackPlugin({ inject: 'head', title: 'Toaster Web Component', template: './index.html' })
  ]
};
