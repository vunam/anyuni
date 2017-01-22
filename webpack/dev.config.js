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
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    stats: {
      chunks: false,
      colors: true,
      children: false
    },
    publicPath: '/assets/dist/',
    proxy: {
      '*': `http://localhost:${process.env.PORT || 3000}`
    }
  }
}

module.exports = webpackConfig
