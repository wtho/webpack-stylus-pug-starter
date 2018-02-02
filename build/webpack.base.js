const path = require('path')

const config = require('../config')

module.exports = {
  entry: [ './' + path.join('.', config.styleInput) ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.pug$/,
      use: [
        'pug-loader'
      ]
    }]
  }
}
