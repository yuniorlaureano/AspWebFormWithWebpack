const path = require("path");

module.exports = function () {
    return {
        context: path.resolve(__dirname, './Scripts/src'),
        resolve: {
            extensions: ['ts', 'js']
        },
        entry: "./main.js",
        output: {
            publicPath: './Scripts/dist',
            path: path.resolve(__dirname, './Scripts/dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        }
    };
};