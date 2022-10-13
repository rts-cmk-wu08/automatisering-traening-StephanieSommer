const { merge } = require("webpack-merge")
const path = require("path");
const commonConfig = require("./webpack.common.js")

module.exports = merge(
    commonConfig,
    {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
})
