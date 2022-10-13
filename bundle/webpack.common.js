const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "template.html"
        }),
        new MiniCssExtractPlugin({
            linkType: "text/css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp|gif|heic)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
