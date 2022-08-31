const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename:'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./index.html"),
        })
    ],
    mode: 'development',
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, "build"),
                publicPath: "/build",
            }
        ],
        proxy: {
            '/api' : 'http://localhost:3000',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                loader: "babel-loader",
                options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                    }, 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}