const webpack = require('webpack');

module.exports = {
    cache: true,
    devtool: 'eval',   
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'] },
            { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] },
            { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader'] }
        ]
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
};
