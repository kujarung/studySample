
// vue.config.js
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  devServer: {
    // host: '0.0.0.0',
    disableHostCheck: true,
    https: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
