var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpReplace = require('gulp-replace');
var sass = require('gulp-sass');

gulp.task('default', [
    'sass',
    'watch'
]);

gulp.task('sass', () => {
    gulp.src('./src/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulpReplace('display:', 'display /**/:'))
        .pipe(gulpReplace('content:', 'content /**/:'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.scss', ['sass']);
});
