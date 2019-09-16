/**
 * 生产环境下的webpack配置，通过merge方法合并webpack.base.conf.js基础配置
 * 合并基础的webpack配置
 * 配置样式文件的处理规则，styleLoaders
 * 配置webpack的输出
 * 配置webpack插件
 * gzip模式下的webpack插件配置
 * webpack-bundle分析
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// copy-webpack-plugin，用于将static中的静态文件复制到产品文件夹dist
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// optimize-css-assets-webpack-plugin，用于优化和最小化css资源
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  // 样式文件的处理规则，对css/sass/scss等不同内容使用相应的styleLoaders
  // 由utils配置出各种类型的预处理语言所需要使用的loader，例如sass需要使用sass-loader
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  // 是否使用source-map
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  // webpack输出路径和命名规则
  output: {
    path: config.build.assetsRoot, //导出文件目录
    filename: utils.assetsPath('js/[name].[chunkhash].js'), //导出的文件名
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') //非入口文件的文件名，而又需要被打包出来的文件命名配置,如按需加载的模块
  },
  // webpack插件
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env//配置全局环境为生产环境
    }),
    // 丑化压缩JS代码
    new UglifyJsPlugin({ //js文件压缩插件
      uglifyOptions: {
        compress: {//压缩配置
          warnings: false// 不显示警告
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true//生成sourceMap文件?
    }),
    // extract css into its own file
    new ExtractTextPlugin({//将js中引入的css分离的插件
      filename: utils.assetsPath('css/[name].[contenthash].css'),//分离出的css文件名
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({//压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({//生成html的插件,引入css文件和js文件
      filename: config.build.index,//生成的html的文件名
      template: 'index.html', //依据的模板
      inject: true,//注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
      minify: { //压缩配置
        removeComments: true,//删除html中的注释代码
        collapseWhitespace: true,//删除html中的空白符
        removeAttributeQuotes: true//删除html元素中属性的引号
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'//按dependency的顺序引入
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({//分离公共js到vendor中
      name: 'vendor',//文件名
      minChunks (module) { // 声明公共的模块来自node_modules文件夹
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    //上面虽然已经分离了第三方库,每次修改编译都会改变vendor的hash值，导致浏览器缓存失效。原因是vendor包含了webpack在打包过程中会产生一些运行时代码，运行时代码中实际上保存了打包后的文件名。当修改业务代码时,业务代码的js文件的hash值必然会改变。一旦改变必然会导致vendor变化。vendor变化会导致其hash值变化。
    //下面主要是将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    // copy custom static assets
    // 复制静态资源,将static文件内的内容复制到指定文件夹
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']//忽视.*文件
      }
    ])
  ]
})

if (config.build.productionGzip) {//配置文件开启了gzip压缩

  //引入压缩文件的组件,该插件会对生成的文件进行压缩，生成一个.gz文件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]', //目标文件名
      algorithm: 'gzip',//使用gzip压缩
      test: new RegExp(//满足正则表达式的文件会被压缩
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,//资源文件大于10240B=10kB时会被压缩
      minRatio: 0.8//最小压缩比达到0.8时才会被压缩
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
