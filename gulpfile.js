var gulp = require('gulp');
var combine = require('stream-combiner2');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

// ts-specific  
var pathToTs = './src/**/*.ts';
var outputTsSrc = './src/';
var outputDist_ts = './dist/';
var tsconfig = {
	target: 'ES5',
	noImplicitAny: false,
	removeComments: false,
	experimentalDecorators: true,
	emitDecoratorMetadata: true
};

var pathToEs5 = './src/es5/**/*.js';
var outputDist_es5 = './dist/es5/';

var tsconfig_system = new Object(tsconfig);
tsconfig_system.module = 'system';
tsconfig_system.moduleResolution = 'node';

function tsTranspileSystem(destination) {
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest(destination));
}

function copyToDist() {
	combine.obj([
		// ts
		// copy
		tsTranspileSystem(outputDist_ts),
		
		// minify
		gulp.src(pathToTs)
			.pipe(tsc(tsconfig_system))
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(outputDist_ts)),
		
		// es5
		// copy
		gulp.src(pathToEs5)
			.pipe(gulp.dest(outputDist_es5)),
		
		// // minify
		// gulp.src(pathToEs5)
		// 	.pipe(uglify())
		// 	.pipe(rename({
		// 		suffix: '.min'
		// 	}))
		// 	.pipe(gulp.dest(outputDist_es5))
	]);
	
	combine.on('error', console.error.bind(console));
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem.bind('./src/'));
}

gulp.task('tsc-system', tsTranspileSystem.bind('./src/'));
gulp.task('watch', watchForChanges);
gulp.task('copy-and-minify', copyToDist);

gulp.task('default', ['tsc-system', 'watch']);