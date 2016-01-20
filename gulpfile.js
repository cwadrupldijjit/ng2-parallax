var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	watch = require('gulp-watch'),
	sourcemap = require('gulp-sourcemaps');

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
		.pipe(gulp.dest('./examples/ts-ng2-parallax/app/'));
}

function copyStyles() {
	gulp.src('./src/**/*.*')
		.pipe(gulp.dest('./examples/ts-ng2-parallax/app'))
		.pipe(gulp.dest('./examples/js-ng2-parallax/app'))
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem);
	watch('./src/styles.css', copyStyles);
	watch(pathToTs, tsTranspileSystem);
}

gulp.task('tsc-system', tsTranspileSystem);
gulp.task('copy-styles', copyStyles);
gulp.task('watch', watchForChanges);

gulp.task('default', ['tsc-system', 'copy-styles', 'watch']);