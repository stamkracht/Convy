module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function () {

    config.browsersync.init({
      server: './', // Serve files from same folder as gulpfile.js
    });

  });


};
