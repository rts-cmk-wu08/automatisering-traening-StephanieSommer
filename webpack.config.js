const path = require("path")

module.exports = {
    entry: "./src/index.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
