const path = require('path')

//Para que funcione em qualquer SO essa requisição é feita.

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
  },

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
