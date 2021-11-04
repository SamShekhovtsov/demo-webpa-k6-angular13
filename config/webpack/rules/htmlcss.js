// config/webpack/rules/vue.js
//const { VueLoaderPlugin } = require('raw-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(html|css)$/, 
        loader: 'raw-loader',
      }
    ]
  },
  //plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.html', '.css']
  }
}