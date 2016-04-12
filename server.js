var config = require('./config.json');
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

server.listen(process.env.PORT || config.prodPort, function () {
    console.log('Production server listening at port %d', server.address().port);
});

var static_path = path.join(path.resolve(path.dirname()), config.publicFolder);
app.use(express.static(static_path));

var isDevelopment = (process.env.NODE_ENV !== 'production');
if (isDevelopment) {
    var webpackDevConf = require('./webpack.config.js');
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');

    var devServer = new WebpackDevServer(webpack(webpackDevConf), {
        publicPath: webpackDevConf.output.publicPath,
        hot: true,
        stats: { colors: true }
    });

    devServer.listen(config.devPort, function (err) {
        if (err) { console.log(err); }
        console.log('Development server listening at port %d', config.devPort);
    });

}