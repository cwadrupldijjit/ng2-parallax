var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	watch = require('gulp-watch'),
	sourcemap = require('gulp-sourcemaps');

var pathToTs = './src/**/*.ts';
var tsconfig = {
	target: 'ES5',
	noImplicitAny: false,
	removeComments: false,
	experimentalDecorators: true,
	emitDecoratorMetadata: true
};

function tsTranspileSystem(){
	var tsconfig_system = new Object(tsconfig);
	tsconfig_system.module = 'system';
	
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./src/'));
}

function tsTranspileUmd(){
	var tsconfig_umd = new Object(tsconfig);
	tsconfig_umd.module = 'umd';
	
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_umd))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./src/'));
}

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem);
	watch(pathToTs, tsTranspileUmd);
	watch(pathToTs, tsTranspileSystem);
}

gulp.task('tsc-system', tsTranspileSystem);
gulp.task('watch', watchForChanges);

gulp.task('default', ['tsc-system', 'watch']);