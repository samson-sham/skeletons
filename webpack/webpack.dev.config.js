const path = require('path');
module.exports = {
    // This is for webpack's built-in optimizations, default production
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // This makes your configuration independent from CWD
    context: path.resolve(__dirname, 'app'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
    }
};