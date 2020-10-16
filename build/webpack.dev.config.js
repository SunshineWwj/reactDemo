const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(baseWebpackConfig, {
    // 指定构建环境
    mode: 'development',
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Anna', //html 浏览器的标题
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html', //html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        }),
    ],
    // 开发环境本地启动的服务配置
    devServer: {
        open: true, //When open is enabled, the dev server will open the browser.
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: '8081', // 指定端口号
        publicPath: '/', // 访问资源加前缀
        before: app => {
            console.log('cc:', app);
        },
        proxy: {
            // 接口请求代理
            '/api': {
                target: 'http://localhost:3001', //请求到 /api/list 现在会被代理到请求 http://localhost:3001/api/list
                changeOrigin: true,
                // 如果你不想请求路径中有/api ，则需要重写路径，此时请求到 /api/list 现在会被代理到请求 http://localhost:3001/list
                pathRewrite: {'^/api': ''},
                secure: true, //接受https的代理
            },
            '/weiyinfu': {
                target: 'https://github.com',
                // port: 80,
                // ingorePath 默认即为 false, 注释掉也可以
                // ingorePath: false,
                // changeOrigin是关键，如果不加这个就无法跳转请求
                changeOrigin: true,
                // pathRewrite: {'^/weiyinfu' : ''},
                secure: true, //接受https的代理。。。 因为使用的是https，会有安全校验，所以设置secure为false
            },
        },
    },
});
