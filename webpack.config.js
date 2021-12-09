// const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: path.join(__dirname, 'src', 'Index.jsx'),
//   output: {
//     path: path.join(__dirname, 'public'),
//     // filename: 'bundle.js',
//     filename: '[name].bundle.js',
//     chunkFilename: '[name].bundle.js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', ''],
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/env', '@babel/react'],
//           },
//         },

//       },
//       {
//         test: /.(png|jp(e)g|svg|gif)$/g,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               query: {
//                 name: 'assets/[name].[ext]',
//               },
//             },
//           },
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               query: {
//                 mozjpeg: {
//                   progressive: true,
//                 },
//                 gifsicle: {
//                   interlaced: true,
//                 },
//                 optipng: {
//                   optimizationLevel: 7,
//                 },
//               },
//             },
//           }],
//       },
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader' }],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2)$/,
//         use: 'url-loader?name=[name].[ext]',
//       },
//     ],
//   },
//   plugins: [
//     new BundleAnalyzerPlugin(),
//     new CompressionPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'Custom template',
//       template: 'index.html',
//     }),
//   ],
//   optimization: {
//     minimizer: [new UglifyJsPlugin()],
//   },
//   // devtool: 'source-map',

// }

const neutrino = require('neutrino')

module.exports = neutrino().webpack()
