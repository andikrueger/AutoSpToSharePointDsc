const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            compact: true,
                            babelrc: false,
                            cacheDirectory: true,
                            presets: [
                                ["@babel/preset-env",
                                    {
                                        targets: {
                                            browsers: [
                                                "last 2 versions",
                                                "IE >= 11"
                                            ]
                                        },
                                        useBuiltIns: "entry"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {}
                    }
                ]
            }]
    },
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.css', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                keep_classnames: true,
                keep_fnames: true
            }
        })
    ]
};