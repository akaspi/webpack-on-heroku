const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');
const _ = require('lodash');
const config = require('../config.json');

const webpackDevConfig = _.cloneDeep(webpackConfig);

webpackDevConfig.entry.app.unshift('webpack/hot/dev-server');
webpackDevConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:' + config.devPort + '/');
webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(webpackDevConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(config.devPort, 'localhost');
