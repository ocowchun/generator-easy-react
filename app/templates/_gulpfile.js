'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var rimraf = require('gulp-rimraf');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var html2react = require('gulp-html2react');

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
	return gulp.src('app/javascripts/templates/*.html')
		.pipe(html2react())
		.pipe(gulp.dest('temp/javascripts/templates'));
});

gulp.task('copy_components', function() {
	var files = 'app/javascripts/components/*.js';
	return gulp.src(files).pipe(gulp.dest('temp/javascripts/components'));
});

gulp.task('copy_js', function() {
	var files = 'app/javascripts/*.js';
	return gulp.src(files).pipe(gulp.dest('temp/javascripts'));
});

gulp.task('copy_html', function() {
	var files = 'app/*.html';
	return gulp.src(files).pipe(gulp.dest('dist'));
});


gulp.task('copy', ['copy_components', 'copy_js', 'copy_html'], function() {

});

// using vinyl-source-stream:
gulp.task('browserify', ['copy', 'react'], function() {
	var bundleStream = browserify('./temp/javascripts/app.js').bundle();
	bundleStream
		.pipe(source('./javascripts/app.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify', 'browserSync'], function() {
	gulp.watch('app/*.html', ['copy_html']);
	gulp.watch('app/javascripts/*.*', ['browserify']);
});