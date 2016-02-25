var gulp = require('gulp');
var combine = require('stream-combiner2');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

// ts-specific  
var pathToRef = './typings/main.d.ts';
var pathToTs = [pathToRef, './src/**/*.ts'];
var outputTsSrc = './src/';
var outputDist_ts = './dist/';
var tsconfig = {
	target: 'ES5',
	noImplicitAny: false,
	removeComments: false,
	experimentalDecorators: true,
	emitDecoratorMetadata: true
};

// es5-specific
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
	
	gulp.src('./parallax-ts.ts')
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./'));
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
		
		/* This task doesn't work for some reason, deriving from possibly not being able to
		   find the files, which doesn't make sense since the task above it works just fine. */
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

function compileTsPointer () {
	
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem.bind(null, './src/'));
}

gulp.task('tsc-system', tsTranspileSystem.bind(null, './src/'));
gulp.task('watch', watchForChanges);
gulp.task('copy-and-minify', copyToDist);

gulp.task('default', ['tsc-system', 'watch']);