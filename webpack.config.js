// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    mode: 'development',
    entry: {
        index: './front/src/scripts/index.js',
        analytics: './front/src/scripts/analytics.js',
        dashboard: './front/src/scripts/dashboard.js',
        'log-in': './front/src/scripts/log-in.js',
        'sign-up': './front/src/scripts/sign-up.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: 'scripts/[name].js',
        assetModuleFilename: "images/[name][ext][query]",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './front/src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: './sub-pages/analytics.html',
            template: './front/src/sub-pages/analytics.html',
            chunks: ['analytics'],
        }),
        new HtmlWebpackPlugin({
            filename: './sub-pages/dashboard.html',
            template: './front/src/sub-pages/dashboard.html',
            chunks: ['dashboard']
        }),
        new HtmlWebpackPlugin({
            filename: './sub-pages/log-in.html',
            template: './front/src/sub-pages/log-in.html',
            chunks: ['log-in']
        }),
        new HtmlWebpackPlugin({
            filename: './sub-pages/sign-up.html',
            template: './front/src/sub-pages/sign-up.html',
            chunks: ['sign-up']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

export default config;
