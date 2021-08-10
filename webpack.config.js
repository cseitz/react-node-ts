const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const tsConfig = require('./tsconfig.json');
const src = resolve(__dirname, tsConfig.compilerOptions.rootDir || '')

const prod = process.env.NODE_ENV === 'production'
exports.mode = prod ? 'production' : 'development'

exports.entry = resolve(src, 'app.jsx')

exports.output = {
    path: __dirname + '/build/client'
}

let rules = [
    {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        },
        use: 'ts-loader'
    }
]
let plugins = [
    new HtmlWebpackPlugin({
        template: resolve(src, 'index.html')
    })
]

exports.resolve = {
    plugins: [
        new TsconfigPathsPlugin({

        })
    ]
}

exports.plugins = plugins
exports.module = {
    rules
}

