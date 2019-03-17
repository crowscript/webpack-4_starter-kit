const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const imgPath = './assets/img/';
const jsPath = './assets/js/';
const cssPath = './assets/css/';

module.exports = {
     mode : devMode ? 'development' : 'production',
    // mode : devMode ? 'production' : 'development',
    entry : './src/js/index.js',
    output : {
        filename: '' + jsPath + 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '' + imgPath + '[name].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.gitkeep$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '.gitkeep',
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html'
        }),

        new MiniCssExtractPlugin({
            filename: devMode ? '' + cssPath + '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '' + cssPath + '[id].css' : '[id].[hash].css',
        })
    ],
    

}