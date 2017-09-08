module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('sound', function () {

    return gulp.src('src/sound/**/*.{mp3,ogg}')
      .pipe(gulp.dest(config.source.dest));

  });


};
