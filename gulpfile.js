const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	gulp.src('src/*.css')
		.pipe(autoPrefixer())
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.css', ['styles']);
});

