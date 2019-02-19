/* eslint-env node */
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable import/no-commonjs */

const { join, resolve } = require("path");

module.exports = {
    entry: "./docsrc/index.js",
    devtool: "inline-cheap-source-map",
    output: {
        path: join(__dirname, "dist"),
        filename: "docs-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: join(__dirname, "public"),
        host: "0.0.0.0",
        port: "8081"
    }
};
