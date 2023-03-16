const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")


let listOfComponents = ['index', 'update', 'delete']

const entry = listOfComponents.reduce((entries, componentName) => {
	entries[componentName] = path.join(__dirname, `../src/${componentName}.js`);
	return entries;
}, {});

const htmlGenerators = listOfComponents.map(componentName => {
    return new HtmlWebpackPlugin({
        template: 'template.html',
        inject: true,
        chunks: [componentName],
        filename: `${componentName}.html`
    })

})

module.exports = {
    entry,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../build")
    },
    plugins: [
        ...htmlGenerators,
        new MiniCssExtractPlugin()
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
