const webpack = require('webpack'),
      miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'index.bundle.js'
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    contentBase: './public',
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: `${__dirname}/node_modules`,
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        miniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.jsx?$/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }, {
      test: /\.(woff2?|ttf|eot|svg)$/i,
      use: 'file-loader'
    }]
  }
}