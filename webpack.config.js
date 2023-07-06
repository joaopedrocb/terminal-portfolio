const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const mode = isDevelopment ? 'development' : 'production';
  const output = {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    library: 'kosmos.web.components',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  };
  const entry = './src/index.ts';

  return {
    mode,
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
    entry,
    devtool: 'source-map',
    output,
    externals: [
      nodeExternals(),
      {
        'styled-components': {
          commonjs: 'styled-components',
          commonjs2: 'styled-components',
          amd: 'styled-components',
        },
      },
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.(gif|jpe?g|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
            },
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          type: 'asset/resource',
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
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
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
                sourceMap: isDevelopment,
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
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? './css/[name].css'
          : './css/[name].[hash].css',
        chunkFilename: isDevelopment
          ? './css/[id].css'
          : './css/[id].[hash].css',
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
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      }),
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'public/src'),
        'node_modules',
        path.resolve('node_modules'),
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        react: path.resolve('./node_modules/react'),
        reactDom: path.resolve('./node_modules/react-dom'),
      },
    },
  };
};
