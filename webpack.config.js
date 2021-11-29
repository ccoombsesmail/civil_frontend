const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'Index.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', ''],
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
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  // devtool: 'source-map',

}
