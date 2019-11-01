const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map', // not good for production though
  output: {
    filename: 'components.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  plugins: [],
  externals: [
    'react',
    'react-dom'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.(tsx?|jsx?)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },
  stats: 'minimal'
}
