import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CnameWebpackPlugin from 'cname-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import ReactSsrHtmlPlugin from './reactSsrHtmlPlugin.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('webpack').Configuration} */
export default {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[chunkhash]-[name].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [resolve(__dirname, './src'), 'node_modules'],

  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      inject: 'body',
      favicon: './src/img/favicon.ico',
    }),
    new ReactSsrHtmlPlugin({
      input: resolve(__dirname, 'src/ssr.js'),
    }),
    new CnameWebpackPlugin({ domain: 'nateharris.io' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    runtimeChunk: 'single',
  },
  devServer: {
    static: './dist',
    watchFiles: './*',
  },
};
