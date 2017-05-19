const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react'],
    demo: './demo/show.js',
    app: './index.js',
  },
  output: {
    path: __dirname,
    filename: './demo/[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: false, minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),

  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  },
};