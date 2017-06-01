module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var processors = [
    config.cssnext(
      {
        browsers: ['last 2 versions'],
        features: {
          customProperties: {
            preserve: true
          }
        }
      }
    )
  ];

  gulp.task('css', function () {

    gulp.src('src/css/index.convy.scss')
      .pipe(config.plugins.plumber())
      .pipe(config.env.production ? config.plugins.util.noop() : config.plugins.sourcemaps.init())
        .pipe(config.plugins.sass())
        .pipe(config.plugins.postcss(processors))
        .pipe(config.plugins.rename({ basename: 'main' }))
        .pipe(config.env.production ? config.plugins.cssnano({ zindex: false }) : config.plugins.util.noop())
        .pipe(config.plugins.rename({ suffix: '.min' }))
      .pipe(config.env.production ? config.plugins.util.noop() : config.plugins.sourcemaps.write())
      .pipe(gulp.dest(config.source.dest))
      .pipe(config.browsersync.reload({ stream: true }));

  });


};
