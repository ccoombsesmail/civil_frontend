const react = require('@neutrinojs/react');
const compression = require('neutrino-middleware-compression')
const devServer = require('@neutrinojs/dev-server');

// module.exports = {
//   // options: {
//   //       root: __dirname
//   //   },
//   use: [react(), compression()],
// };

module.exports = (neutrino) => {
  neutrino.use(react());
  neutrino.use(compression(neutrino));
  neutrino.use(devServer({
      port: 5000,
      compress: true,
      hot: true,
      // Redirect 404s to index.html, so that apps that use the HTML 5 History API work.
      historyApiFallback: true,
      // Only display compile duration and errors/warnings, to reduce noise when rebuilding.
      stats: {
        all: false,
        errors: true,
        timings: true,
        warnings: true,
      },
    }),)

};

