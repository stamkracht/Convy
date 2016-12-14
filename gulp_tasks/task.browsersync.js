module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function () {

    config.browsersync({
      proxy: 'http://localhost:8000',
      logPrefix: 'Convy',
      logConnections: true,
    });

  });


};
