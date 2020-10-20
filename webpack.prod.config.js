const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        //server: './index.js',
        //server: './app.js',
        //server: './src/backend/server/server-dev.js',
        //'server.bundle': './src/backend/server/server-dev.js',
        'server.bundle': path.resolve(__dirname, 'src','server.js'),
    },
    output: {
        //path: path.join(__dirname, 'dist'),
        //publicPath: '/',
        //filename: '[name].js'
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[{loader: "html-loader"}]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
            excludeChunks: ['server']
        })
    ]
};