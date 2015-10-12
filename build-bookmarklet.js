var fs = require('fs');
var path = require('path');

var webpack = require('webpack');

var config = {
  context: path.join(__dirname),
  entry: './bookmark/bookmark.src.js',
  output: {
    filename: 'bookmark.js',
    path: path.join(__dirname, 'bookmark'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
var compiler = webpack(config);
compiler.run(function(err, stats) {

  // Save bundle as bookmarklet
  var js = fs.readFileSync(config.output.path + '/bookmark.js');
  fs.writeFileSync(config.output.path + '/index.html',
    '<!DOCTYPE html> <html lang="en"> <head> <title></title> </head> <body>' +
    '<a href=\'javascript:(function(){ ' + js.toString() + ' })();\'>' +
    Date.now() + '</a>' +
    '</body></html>'
  );

  console.log('Built');
});
