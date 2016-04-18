'use strict';

var gulp = require('gulp');
var gutil = require('gutil');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var config = require('./webpack.config');


gulp.task('default', ['pack'], function () {
});

gulp.task('pack', function(callback) {
  webpack(config, function(error, stats) {
    if (error) throw new gutil.PluginError('webpack', error);
    gutil.log('[webpack]', stats.toString());

    callback();
  });
});

gulp.task('dev', ['browser-sync'], function() {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
