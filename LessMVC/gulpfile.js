/// <binding AfterBuild='css' />
var gulp = require('gulp');
var bower = require('gulp-bower');
var less = require('gulp-less');
var path = require('path');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

gulp.task('bower', function () {
    return bower({ layout: "byComponent" });
});

gulp.task('default', ['bower']);

gulp.task('css', function () {
    return gulp.src('Content/less/**/*.less')
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('Content'))
      .on('error', gutil.log);
});