module.exports = function (gulp) {

  'use strict';


  var historyApiFallback = require('connect-history-api-fallback');
  var config = require('./config')();

  gulp.task('browsersync', function () {

    config.browsersync.init({
      logPrefix: 'Convy',
      logConnections: true,
      server: './', // Serve files from same folder as gulpfile.js
      middleware: [ historyApiFallback() ] // Now we can reload the browser with html5 urls
    });

  });


};
