var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	sourcemap = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch');

var pathToTs = './src/**/*.ts';
var outputCssPath = './'
var tsconfig = {
	target: 'ES5',
	noImplicitAny: false,
	removeComments: false,
	experimentalDecorators: true,
	emitDecoratorMetadata: true
};

var tsconfig_system = new Object(tsconfig);
tsconfig_system.module = 'system';
tsconfig_system.moduleResolution = 'node';

function tsTranspileSystem() {
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./src/'));
}

function copyToDist() {
	gulp.src(pathToTs)
		.pipe(tsc(tsconfig_system))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/'));
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem);
}

gulp.task('tsc-system', tsTranspileSystem);
gulp.task('watch', watchForChanges);
gulp.task('copy-and-minify', copyToDist);

gulp.task('default', ['tsc-system', 'watch']);