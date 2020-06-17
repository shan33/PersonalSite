const path = require('path');

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./dev.config.js');
const options = {
  contentBase: path.resolve(__dirname, 'build'),
  hot: true,
  host: 'localhost',
  headers: {
    time: new Date().getMilliseconds()
  }
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8080, 'localhost', () => {
  console.log('dev server listening on port 8080');
});