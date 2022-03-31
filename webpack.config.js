const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const DotenvFlow = require('dotenv-flow-webpack');
const webpack = require('webpack');

const environment = process.env.NODE_ENV;
const isDevelopment =
  environment === 'development' || environment === 'staging';
const isTesting = environment === 'testing';
const webpackMode = process.env.WEBPACK_MODE || environment || 'development';

module.exports = {
  mode: webpackMode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: isDevelopment || isTesting,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment || isTesting,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module.(s[ac]ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment || isTesting,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({}),
                require('cssnano')({
                  discardComments: {
                    removeAll: true,
                  },
                }),
              ],
              minimize: !isDevelopment,
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: './css',
          name: isDevelopment
            ? './fonts/[name].[hash].[ext]'
            : './fonts/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: isDevelopment
            ? './images/[name].[hash].[ext]'
            : './images/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        exclude: /src/,
        loader: 'file-loader',
        options: {
          name: isDevelopment
            ? './images/[name].[hash].external.[ext]'
            : './images/[name].external.[ext]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new DotenvFlow(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      filename: './index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? './css/[name].css' : './css/[name].[hash].css',
      chunkFilename: isDevelopment ? './css/[id].css' : './css/[id].[hash].css',
    }),
    new ImageminPlugin({
      bail: false,
      cache: true,
      imageminOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      removeUselessDefs: false,
                    },
                  },
                },
              ],
            },
          ],
        ],
      },
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      outputPath: './images/favicon',
      prefix: 'images/favicon/',
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          yandex: false,
          windows: false,
          firefox: false,
        },
      },
    }),
  ],
};
