var webpack = require("webpack");
var path = require('path');
var CommonsChunk = require('webpack/lib/optimize/CommonsChunkPlugin'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        boxes: path.join(__dirname, 'boxes.js'),
        circles: path.join(__dirname, 'circles.js'),
        clicks: path.join(__dirname, 'clicks.js'),
        counters: path.join(__dirname, 'counters.js'),
        todo: path.join(__dirname, 'todo.js'),
        voronoi: path.join(__dirname, 'voronoi.js')
    },
    resolve: {
        extensions: ['', '.elm', '.webpack.js', '.web.js', '.js'],
        modulesDirectories: ['node_modules']
    },
    devtool: 'source-map',
    output: {
        path: '__bundles',
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.html$/, exclude: /node_modules/, loader: 'file?name=[name].[ext]'},
            { test: /\.elm$/, exclude: [/elm-stuff/, /node_modules/], loader: 'elm-webpack' }
        ],
        noParse: [/.elm$/] 
    },
    plugins: [
        new CommonsChunk('commons-boxes.js', ['boxes']),
        new CommonsChunk('commons-circles.js', ['circles']),
        new CommonsChunk('commons-clicks.js', ['clicks']),
        new CommonsChunk('commons-counters.js', ['counters']),
        new CommonsChunk('commons-todo.js', ['todo']),
        new CommonsChunk('commons-voronoi.js', ['voronoi']),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"])
        ])
    ]
};
