const webpack = require('webpack');

module.exports = {
    cache: true,    
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] },
            { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader'] }
        ]
    }
};
