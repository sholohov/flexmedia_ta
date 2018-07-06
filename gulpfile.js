const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');

const path = {
	res: './res/**/*.*',
	pug: './src/views/index.pug',
	scripts: './src/js/**/*.js',
	libs: './lib/**/*.js',
	styles: ['./src/css/**/*.scss'],
};

const entryFile = './src/js/index.js';

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('res', function() {
	return gulp
		.src(path.res)
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return browserify({
			paths: [path.libs, path.scripts],
			entries: entryFile,
			debug: true,
			transform: [
				[
					babelify,
					{
						presets: ['es2015'],
						plugins: ['transform-class-properties']
					}
				]
			]
		})
		.transform(babelify)
		.bundle()
		.on('error', function(error) {
			gutil.log(gutil.colors.red('[Build Error]', error.message));
			//browserSync.notify(error.message, 3000);
			this.emit('end');
		})
		.pipe(source('script.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(browserSync.stream());
});

gulp.task('styles', function() {
	return gulp.src(path.styles)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(concat('styles.css'))
		.pipe(
			autoprefixer({
				browsers: ['last 20 versions']
			})
		)
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
});

gulp.task('pug', function() {
	return gulp.src(path.pug)
		.pipe(pug())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream());
});

gulp.task('server', function(done) {
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});
	done();
});

gulp.task('watch', function() {
	gulp.watch(path.res, gulp.series('res'));
	gulp.watch(path.styles, gulp.series('styles'));
	gulp.watch(path.scripts, gulp.series('scripts'));
	gulp.watch('./src/views/**/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts', 'res'), 'pug'));

gulp.task('debug', gulp.series('default', 'server', 'watch'));