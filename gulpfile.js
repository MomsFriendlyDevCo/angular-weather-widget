var _ = require('lodash');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['serve']);
gulp.task('build', ['js', 'css']);


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

	watch(['demo/**/*.js', 'src/**/*.js'], function() {
		console.log('Rebuild client-side JS files...');
		gulp.start('js');
	});

	watch(['demo/**/*.css', 'src/**/*.scss'], function() {
		console.log('Rebuild client-side CSS files...');
		gulp.start('css');
	});
});


gulp.task('js', () => {
	gulp.src('./src/angular-weather-widget.js')
		.pipe(plumber({
			errorHandler: function(err) {
				gutil.log(gutil.colors.red('ERROR DURING JS BUILD'));
				process.stdout.write(err.stack);
				this.emit('end');
			},
		}))
		.pipe(rename('angular-weather-widget.js'))
		.pipe(babel({presets: ['es2015']}))
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['angularjs-annotate'],
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('angular-weather-widget.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
});

gulp.task('css', () => {
	gulp.src('./src/angular-weather-widget.scss')
		.pipe(rename('angular-weather-widget.css'))
		.pipe(sass())
		.pipe(gulp.dest('./dist'))
		.pipe(rename('angular-weather-widget.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
});
