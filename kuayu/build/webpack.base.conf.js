/**
 * 主要对build目录下的webpack配置做详细分析??
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


console.log(process,'process---process---process---process');
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath//生产模式或开发模式下html、js等文件内部引用的公共路径
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], //自动解析确定的拓展名,使导入模块时不带拓展名
    alias: {// 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {//模块解析module
    rules: [
      {
        test: /\.vue$/,// vue文件后缀
        loader: 'vue-loader',//使用vue-loader处理
        options: vueLoaderConfig//options是对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,// js文件后缀
        loader: 'babel-loader',//使用babel-loader处理
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        //必须处理包含src和test文件夹
        // exclude: /node_modules/ // 不包括路径
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片后缀
        loader: 'url-loader',//使用url-loader处理
        options: {
          limit: 10000,//图片小于10000字节时以base64的方式引用
          // 1024字节=1kb 1024kb=1mb
          name: utils.assetsPath('img/[name].[hash:7].[ext]')//文件名为name.7位hash值.拓展名
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,//字体文件
        loader: 'url-loader',//使用url-loader处理
        options: {
          limit: 10000,//字体文件小于10000字节的时候处理方式
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')//文件名为name.7位hash值.拓展名
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
