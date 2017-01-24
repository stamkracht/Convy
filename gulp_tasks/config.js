module.exports = function (gulp) {

  'use strict';


  // packages.
  var browserify    = require('browserify');
  var babelify      = require("babelify");
  var buffer        = require('vinyl-buffer');
  var vss           = require('vinyl-source-stream');
  var cssnext       = require('postcss-cssnext');
  var browsersync   = require('browser-sync');
  var del           = require('del');
  var modernizr     = require('modernizr');
  var imagemin      = require('imagemin');
  var mozjpeg       = require('imagemin-mozjpeg');
  var pngquant      = require('imagemin-pngquant');
  var plugins       = require('gulp-load-plugins')({
    rename: {}
  });

  // environments.
  var env = {
    production: !!plugins.util.env.production
  };

  // locations.
  var source = {
    tmp         : 'tmp/',
    dest        : 'dest/',
    styleguide  : 'kss_styleguide/styleguide/',
  };

  return {
    browserify: browserify,
    babelify: babelify,
    buffer: buffer,
    vss: vss,
    cssnext: cssnext,
    browsersync: browsersync,
    del: del,
    modernizr: modernizr,
    imagemin: imagemin,
    mozjpeg: mozjpeg,
    pngquant: pngquant,
    plugins: plugins,
    env: env,
    source: source,
  };


};
