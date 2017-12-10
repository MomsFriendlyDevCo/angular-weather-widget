var _ = require('lodash');
var annotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['build']);
gulp.task('build', ['js', 'js:min', 'css', 'css:min']);


gulp.task('serve', ['build'], function() {
	var monitor = nodemon({
		script: './demo/server.js',
		ext: 'js css',
		ignore: ['**/*.js', '**/.css'], // Ignore everything else as its watched seperately
	})
		.on('start', function() {
			console.log('Server started');
		})
		.on('restart', function() {
			console.log('Server restarted');
		});

	watch(['./index.js', 'demo/**/*.js', 'src/**/*.js'], function() {
		console.log('Rebuild client-side JS files...');
		gulp.start('js');
	});

	watch(['demo/**/*.css', 'src/**/*.css'], function() {
		console.log('Rebuild client-side CSS files...');
		gulp.start('css');
	});
});


gulp.task('js', () => {
	gulp.src('./src/angular-weather-widget.js')
		.pipe(rename('angular-weather-widget.js'))
		.pipe(babel({presets: ['es2015']}))
		.pipe(annotate())
		.pipe(gulp.dest('./dist'));
});

gulp.task('js:min', () => {
	gulp.src('./src/angular-weather-widget.js')
		.pipe(rename('angular-weather-widget.min.js'))
		.pipe(babel({presets: ['es2015']}))
		.pipe(annotate())
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
	gulp.src('./src/angular-weather-widget.scss')
		.pipe(rename('angular-weather-widget.css'))
		.pipe(sass())
		.pipe(gulp.dest('./dist'))
});

gulp.task('css:min', () => {
	gulp.src('./src/angular-weather-widget.scss')
		.pipe(rename('angular-weather-widget.min.css'))
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
});
