const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react'],
    demo: './show.js',
    app: './index.js',
  },
  output: {
    path: __dirname,
    filename: './[name].js',
    publicPath: '/',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   warnings: false,
    //   conditionals: true,
    //   unused: true,
    //   comparisons: true,
    //   sourceMap: false,
    //   sequences: true,
    //   dead_code: true,
    //   evaluate: true,
    //   if_return: true,
    //   join_vars: true,
    //   output: { comments: false },
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: false, minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),

  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  },
};