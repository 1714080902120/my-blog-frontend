module.exports = {
  // publicPath: './',
  configureWebpack: {
    // externals: {
    //   'T': 'T'
    // },
    // performance: {
    //   hints: false
    // },
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network',
        'store': '@/store',
        'router': '@/router'
      }
    }
  }
}
