const path = require('path')

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/client/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: 'public/dist',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel'
      }
    ]
  }
}

module.exports = webpackConfig
