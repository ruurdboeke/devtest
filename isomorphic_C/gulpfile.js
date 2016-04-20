'use strict';

var gulp = require('gulp');
var gutil = require('gutil');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var config = require('./webpack.config');
var babel = require('gulp-babel');
var shell = require('gulp-shell'); // todo: still need this for something? otherwise remove
var ts = require('gulp-typescript');

// configures to use tsconfig with the typescript that we installed
var tsProject = ts.createProject('tsconfig.json', {
	typescript: require('typescript')
});

// transpile our server.jsx
gulp.task('compileServer', function() {
	var stream = gulp.src('server.jsx')
			.pipe(babel())
			.pipe(gulp.dest('./'));		// just output it next to it for now. TODO: should change
	return stream;		// return will let gulp understand it is sync
});

// transpile our source files to the dist folder
gulp.task('compiletsx', function() {
	var stream = gulp.src('src/**/*.tsx')
			.pipe(ts(tsProject))
			.pipe(babel())
			.pipe(gulp.dest('./dist'));
	return stream;		// return will let gulp understand it is sync
});

// bundle it up
gulp.task('pack', ['compileServer', 'compiletsx'], function() {
   var stream = webpack(config, function(error, stats) {
			if (error) throw new gutil.PluginError('webpack', error);
			gutil.log('[webpack]', stats.toString());
		});
   return stream;		// return will let gulp understand it is sync
});

gulp.task('browser-sync', ['nodemon'], function() {
	return browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
