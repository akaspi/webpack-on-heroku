const webpack = require('webpack');
const path = require('path');
const config = require('./config.json');

module.exports = {
    cache: true,
    devtool: 'source-map',
    entry: {
        app: ['./src/index.jsx'],
        vendors: ['lodash', 'react', 'react-dom']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, config.publicFolder),
        publicPath: '/' + config.publicFolder +'/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        })
    ]
};