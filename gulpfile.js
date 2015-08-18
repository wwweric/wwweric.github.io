'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');
var header  = require('gulp-header');
var jade = require('gulp-jade');
var browserSync = require("browser-sync");

/* sass */
gulp.task('compass',function(){
  gulp.src('./assets/sass/*.sass')
    .pipe(compass({
      config_file : 'config.rb',
      comments : false,
      css : './css/',
      sass: './assets/sass/'
    }))
    .pipe(header('@charset "utf-8";\n'))
    .pipe(gulp.dest('./css/'));
});

/* jade */
gulp.task('jade',function(){
  gulp.src("./assets/jade/*.jade")
    .pipe(jade({
      pretty:true,
      options: "encoding='utf-8'"
      }))
    .pipe(gulp.dest('./'));
});

// browsersync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./", function() {
        browserSync.reload();
    });
    gulp.watch(['./assets/jade/*.jade'],['jade']).on('change', browserSync.reload);
    gulp.watch(['./assets/sass/*.sass'],['compass']).on('change', browserSync.reload);
});


gulp.task('default', ['browserSync']);