const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//Para que funcione em qualquer SO essa requisição é feita.

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public' , 'index.html')
    })
  ],

  // babel-loader é responsável por fazer a comunicação com o webpack.

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader', 
      }
    ],
  }
};
