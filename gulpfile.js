'use strict';

// require gulp.
var gulp = require('gulp');

// task for development.
gulp.task('default', ['css', 'js', 'img', 'font', 'sound', 'modernizr'], function () {
  gulp.start('watch');
});

// task for the production server.
gulp.task('build', ['clean'], function () {
  gulp.start('css', 'js', 'img', 'font', 'sound', 'modernizr');
});

// utility function that gets a task module.
function task (task) { return require('./gulp_tasks/' + task)(gulp); }

// list all task modules.
task('task.browsersync');
task('task.clean');
task('task.css');
task('task.font');
task('task.img');
task('task.js');
task('task.kss');
task('task.modernizr');
task('task.server');
task('task.sound');
task('task.watch');
