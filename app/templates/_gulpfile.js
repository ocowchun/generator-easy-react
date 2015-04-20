'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var rimraf = require('gulp-rimraf');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var html2react = require('gulp-html2react');
var changed = require('gulp-changed');
var debowerify = require('debowerify');

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  })
    .pipe(rimraf({
  force: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init(['dist/**'], {
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('react', function() {
  return gulp.src('app/javascripts/templates/**/*.html')
  .pipe(html2react())
  .pipe(gulp.dest('temp/javascripts/templates'));
});

gulp.task('copy_js', function() {
  var files = ['app/javascripts/**/*.js'];
  return gulp.src(files).pipe(gulp.dest('temp/javascripts'));
});

gulp.task('copy', ['copy_js'], function() {
  var files = ['app/**/*', '!app/javascripts', '!app/javascripts/**/*'];
  var DEST = 'dist'

  return gulp.src(files).pipe(changed(DEST)).pipe(gulp.dest(DEST));
});

// using vinyl-source-stream:
gulp.task('browserify', ['copy', 'react'], function() {
  var bundleStream = browserify('./temp/javascripts/app.js').transform(debowerify).bundle();
  bundleStream
  .pipe(source('./javascripts/app.js'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify', 'browserSync'], function() {
  gulp.watch('app/*.html', ['copy']);
  gulp.watch('app/stylesheets/**/*', ['copy']);

  gulp.watch('app/javascripts/**/*', ['browserify']);
});
