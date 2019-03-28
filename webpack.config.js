const webpack = require("webpack");
const path = require('path');
// import, require 在 window, apple 上也是大小写敏感的
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
/**
 * 确定基础路径
 * @param {*} newPath 
 * __dirname: node全局变量，当前路径
 */ 
const resolve = newPath => path.resolve(path.resolve(__dirname, './'), newPath);

let cfg = {
    // 入口文件
    entry: {
        'uncleTools': resolve('./src/index'),
    },
    //导出
    output: {
        // 输出路径
        path: resolve('dist'), 
        // 输出的入口文件名称
        filename: '[name].js',
        // 输出的非入口文件输出的名称
        chunkFilename: '[name].[chunkhash].min.js',
        // 对外暴露的变量名称，需要和libraryTarget配合使用
        library: 'uncleTools',
        // 对外模块的类型，commonjs,amd,umd,
        libraryTarget: 'umd',
        /**
         * 通过webpack加载静态资源时的基础路径，
         * 也可以在在js运行时通过 __webpack_public_path__ 来动态设置 publicPath
         */
        publicPath: '/'
    },
    // 模块处理
    module: {
        // 处理条件，规则
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|ts)$/,
                use: [
                    'eslint-loader'
                ],
                exclude: [
                    resolve('node_modules')
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                include: [
                    resolve('src'),
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ],
                include: [
                    resolve('src'),
                ],
                exclude: [
                    resolve('node_modules'),
                ],
            },
        ]
    },
    devtool: 'eval-source-map',
    watch: true,
    // 解析
    resolve: {
        //别名，确保模块引入变得更简单
        alias: {
            '@': resolve('./src/')
        },
        // 自动填充文件类型
        extensions: ['.js', '.ts'],
        // 解析目录时要使用的文件名
        mainFiles: ['index'],
        // 文件搜索目录
        modules: [
            resolve('./node_modules'),
            resolve('./src'),
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
    ],
    // 配置 dev server 信息
    devServer: {
        contentBase: './dist/', // web服务器的根目录
        publicPath: '/', // 编译后的文件存放位置
        historyApiFallback: true,
        hot: true, // 自动刷新
        inline: true, // 内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器
        progress: true,
        host: '0.0.0.0', // 0.0.0.0 不检查 host
        allowedHosts: [
            'localhost',
        ],
        port: 3005 // 端口
    }
}

module.exports = cfg;