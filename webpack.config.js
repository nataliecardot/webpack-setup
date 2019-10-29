// Among other things, html-webpack-plugin generates index.html using the version in src, but adds a script link to output main.js file, and html-loader (with the minimize option set to true) minimizes the HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
}