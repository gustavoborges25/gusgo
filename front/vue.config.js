const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        App: path.resolve(__dirname, 'src/app/'),
        Support: path.resolve(__dirname, 'src/support/'),
        Domain: path.resolve(__dirname, 'src/domain/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
      },
    },
  },
};
