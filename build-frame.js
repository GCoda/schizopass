var fs = require('fs');
var path = require('path');

var webpack = require('webpack');

var config = {
  context: path.join(__dirname),
  entry: './frame/index.src.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'frame'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
var compiler = webpack(config);

compiler.run(function(err, stats) {
  console.log('Built');
});
