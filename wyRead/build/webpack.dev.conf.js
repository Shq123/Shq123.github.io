'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const man = require('../static/json/man.json')
const women = require('../static/json/women.json')
const publish = require('../static/json/publish.json')
const admission = require('../static/json/admission.json')
const adMan = require('../static/json/admissionMan.json')
const adGirl = require('../static/json/admissionGirl.json')

const heavyMan = require('../static/json/more/heavyMan.json')
const heavyGirl = require('../static/json/more/heavyGirl.json')
const editor = require('../static/json/more/editor.json')
const newBook = require('../static/json/more/newBook.json')
const classic = require('../static/json/more/classic.json')

const rankingMan = require('../static/json/rankingMan.json')
const rankingGirl = require('../static/json/rankingGirl.json')
const rankingClassic = require('../static/json/rankingClassic.json')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app){
        app.get('/api/man',(req,res) => {
        res.json({data:man})
      }),
        app.get('/api/women',(req,res) => {
          res.json({data:women})
        }),
        app.get('/api/publish',(req,res) => {
            res.json({data:publish})
          }),
        app.get('/api/admission',(req,res) => {
          res.json({data:admission})
        }),
        app.get('/api/adMan',(req,res) => {
          res.json({data:adMan})
        }),
          app.get('/api/adGirl',(req,res) => {
            res.json({data:adGirl})
          }),
          app.get('/api/heavyMan',(req,res) => {
            res.json({data:heavyMan})
          }),
          app.get('/api/heavyGirl',(req,res) => {
            res.json({data:heavyGirl})
          }),
          app.get('/api/editor',(req,res) => {
            res.json({data:editor})
          }),
          app.get('/api/newBook',(req,res) => {
            res.json({data:newBook})
          }),
          app.get('/api/classic',(req,res) => {
            res.json({data:classic})
          }),
          app.get('/api/rankingMan',(req,res) => {
            res.json({data:rankingMan})
          }),
          app.get('/api/rankingGirl',(req,res) => {
            res.json({data:rankingGirl})
          }),
          app.get('/api/rankingClassic',(req,res) => {
            res.json({data:rankingClassic})
          })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
