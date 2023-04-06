const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: './client/js/main.js',
  plugins: [new ESLintPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
