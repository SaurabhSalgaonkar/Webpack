const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = "production";
if(process.env.NODE_ENV === "development") mode = "development";

module.exports = {
    mode,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "scripts")
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/public/index.html'
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        }
    }
}