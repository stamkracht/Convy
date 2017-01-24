module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('env', function() {

    if (config.env.production) {
      process.env.NODE_ENV = 'production';
    } else {
      process.env.NODE_ENV = 'development';
    }

    if (process.env.NODE_ENV === 'production') {
      console.log('NODE_ENV set in production mode');
    } else if (process.env.NODE_ENV === 'development') {
      console.log('NODE_ENV set in development mode');
    } else {
      console.log('NODE_ENV set as: ' + process.env.NODE_ENV);
    }

  });


};
