const path = require('path');
const utils = require('./utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    //配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map', //这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
    // 入口
    entry: {
        index: './src/index',
        vendor: ['jquery'], //明确第三方库
    },
    // 出口
    output: {
        path: utils.resolve('../dist'),
        filename: 'static/js/[name]-[hash].bundle.js', //[name]为入口名称index
        publicPath: '/', // 打包后的资源的访问路径前缀
    },
    // 模块
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader', //loader的名称（必须）
            },
            {
                test: /\.css$/,
                // loader: 'style!css?modules!postcss', //!感叹号表示使同一文件能够使用不同类型的loader,  跟前面相比就在后面加上了?modules
                use: ['style-loader', 'css-loader'] //一个是 CSS-loader 来读取 CSS 文件，另一个是 Style-loader 用来把 <style> 标签插入 HTML 页面。
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'] //less-loader 编译 Less -> CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]',
                },
            },
        ],
    },
    // postcss: [
    //     require('autoprefixer')//调用autoprefixer插件
    // ],
    resolve: {
    // 解析扩展能够使用户在引入模块时不带扩展：
    //import File from '../path/to/file'    。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        extensions: ['.js', '.css', 'scss', '.json', '.jsx'],
        alias: {
            '@': path.join(__dirname, '..', 'src'), // 在项目中使用@符号代替src路径，导入文件路径更方便
        },
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: utils.resolve('../static'), // 从哪个目录copy
                    to: 'static', // copy到那个目录
                },
            ],
        }),
    ],
};
