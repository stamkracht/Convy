module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var compress = { compress: { drop_console: true } };

  gulp.task('js', function () {

    config.browserify({
      entries: 'src/js/index.convy.js',
      debug: true
    })
      .transform(config.babelify, { presets: ['es2015', 'es2016', 'es2017', 'react'] })
      .bundle()
      .pipe(config.vss('main.js'))
      .pipe(gulp.dest(config.source.tmp))
      .pipe(config.buffer())
      .pipe(config.plugins.sourcemaps.init({ loadMaps: true }))
        .pipe(config.plugins.rename({ suffix: '.min' }))
        .pipe(config.env.production ? config.plugins.uglify(compress) : config.plugins.util.noop())
      .pipe(config.plugins.sourcemaps.write('../' + config.source.tmp))
      .pipe(gulp.dest(config.source.dest));

  });


};
