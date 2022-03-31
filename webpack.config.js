const path = require('path')
const webpack = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const UnusedWebpackPlugin = require('unused-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },

      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(png|jp(e)g|svg|gif)$/g,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]',
              },
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
              },
            },
          }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'url-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: undefined
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    // fallback: {
    //   os: require.resolve('os'),
    //   https: require.resolve('https'),
    //   http: require.resolve('http'),
    //   // https: require.resolve('https-browserify'),
    //   // http: false,
    //   // https: false,
    //   // http: require.resolve('stream-http'),
    //   crypto: require.resolve('crypto'),
    // },
  },

}
