const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ],
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ],
            test: /\.s?css$/
        }]
    }
};

// loader
