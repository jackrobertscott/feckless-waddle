var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  dist: 'assets/css',
  sass: 'assets/sass',
};

gulp.task('styles', function() {
  return gulp.src(path.join(config.sass, '**/*.{sass,scss}'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dist));
});

gulp.task('watch', function() {
  gulp.watch(config.sass, gulp.series('styles'));
});

gulp.task('serve', gulp.series('styles', 'watch'));
