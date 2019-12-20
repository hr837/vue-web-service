// vue.config.js

const aliasExtned = require('./extends/alias.extend')
const routeExtend = require('./extends/route.extend')
const svgExtend = require('./extends/svg.extend')

module.exports = {
  // 修改webpack配置
  chainWebpack: config => {
    // 别名扩展
    aliasExtned(config)
    // 路由扩展
    routeExtend(config)
    // svg扩展
    svgExtend(config)
  },
  configureWebpack: {
    module: {
      unknownContextCritical: false
    },
    optimization: {
      minimize: false
    }
  }
}