module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  var dirs = [
    config.source.tmp,
    config.source.dest,
    config.source.styleguide,
  ];

  gulp.task('clean', function () {

    return config.del.sync(dirs);

  });


};
