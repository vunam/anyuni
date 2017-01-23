const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
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
    },
    plugins: [
      new DashboardPlugin()
    ]
  }
}

module.exports = webpackConfig
