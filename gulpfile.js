var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');

var config = {
  dist: 'assets/dist',
  styles: 'assets/styles',
  scripts: 'assets/scripts',
};

gulp.task('styles', function() {
  return gulp.src(path.join(config.styles, '**/*.{sass,scss}'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('styles.min.css'))
    .pipe(csso())
    .pipe(gulp.dest(config.dist));
});

gulp.task('scripts', function() {
  return gulp.src(path.join(config.scripts, '**/*.js'))
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist));
});

gulp.task('watch', function() {
  gulp.watch(config.styles, gulp.series('styles'));
  gulp.watch(config.scripts, gulp.series('scripts'));
});

gulp.task('serve', gulp.series(gulp.parallel('styles', 'scripts'), 'watch'));
