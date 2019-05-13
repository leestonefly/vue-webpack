const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new MyAwesomeWebpackPlugin()
        ]
    }
}