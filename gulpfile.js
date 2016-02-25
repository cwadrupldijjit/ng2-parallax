var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	sourcemap = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch');

var pathToTs = './examples/ts-ng2-parallax/app/**/*.ts';
var outputCssPath = './'
var tsconfig = {
	target: 'ES5',
	noImplicitAny: false,
	removeComments: false,
	experimentalDecorators: true,
	emitDecoratorMetadata: true
};

function tsTranspileSystem() {
	var tsconfig_system = new Object(tsconfig);
	tsconfig_system.module = 'system';
	
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./dist/ts/'));
}

function copyToDist() {
	gulp.src(pathToTs)
		.pipe(tsc(tsconfig))
		.pipe(uglify())
		.pipe(rename(function(path) {
			
		}))
		.pipe(gulp.dest('./dist/ts/'));
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem);
}

gulp.task('tsc-system', tsTranspileSystem);
gulp.task('watch', watchForChanges);
gulp.task('copy-and-minify', copyToDist);

gulp.task('default', ['tsc-system', 'watch']);