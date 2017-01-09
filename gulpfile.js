var gulp = require('gulp');
var combine = require('stream-combiner2');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

// ts-specific  
var pathToRef = './typings/main.d.ts';
var pathToTs = [pathToRef, './src/ts/parallax.directive.ts'];
function TS_Config(module) {
	this.target = 'ES5';
	this.moduleResolution = 'node';
	this.noImplicitAny = false;
	this.removeComments = false;
	this.experimentalDecorators = true;
	this.emitDecoratorMetadata = true;
	
	this.module = module;
};

var destinations = {
	es5: './dist/es5/',
	system: './dist/ts/system/',
	commonjs: './dist/ts/commonjs/'
};

// es5-specific
var pathToEs5 = './src/es5/**/*.js';

var tsconfig_system = new TS_Config('system');
tsconfig_system.module = 'system';

var tsconfig_commonjs = new TS_Config('commonjs');
tsconfig_commonjs.module = 'commonjs';

function tsTranspileSystem() {
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest(destinations.system));
	
	gulp.src('./system.ts')
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_system))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./'));
}

function tsTranspileCommonJs() {
	gulp.src(pathToTs)
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_commonjs))
		.pipe(sourcemap.write())
		.pipe(gulp.dest(destinations.commonjs));
	
	gulp.src('./commonjs.ts')
		.pipe(sourcemap.init())
			.pipe(tsc(tsconfig_commonjs))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./'));
}

function copyToDist() {
	combine.obj([
		// ts
		// copy
		tsTranspileSystem(),
		
		// minify System
		gulp.src(pathToTs)
			.pipe(tsc(tsconfig_system))
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(destinations.system)),
		
		tsTranspileCommonJs(),
		
		// minify commonjs
		gulp.src(pathToTs)
			.pipe(tsc(tsconfig_commonjs))
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(destinations.commonjs)),
		
		// es5
		// copy
		gulp.src(pathToEs5)
			.pipe(gulp.dest(destinations.es5)),
		
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

function watchForChanges() {
	watch(pathToTs, tsTranspileSystem);
	watch(pathToTs, tsTranspileCommonJs);
}

gulp.task('tsc-system', tsTranspileSystem);
gulp.task('tsc-commonjs', tsTranspileCommonJs);
gulp.task('watch', watchForChanges);
gulp.task('copy-and-minify', copyToDist);

gulp.task('default', ['tsc-system', 'tsc-commonjs', 'watch']);