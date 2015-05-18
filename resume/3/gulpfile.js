var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus');

gulp.task('templates', function() {
  var locs = {};
  gulp.src('./src/index.jade')
    .pipe(jade({locals: locs}))
    .pipe(gulp.dest('./'))
});

gulp.task('styles', function() {
  gulp.src('./src/styles/index.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./lib'))
});

gulp.task('watch', function() {
	log('Watching files');
	gulp.watch('./src/**/*', ['build']);
});

gulp.task('clean', function() {
  gulp.src(['./index.html', './lib'], {read: false}).pipe(clean());
});

//define cmd line default task
gulp.task('build', ['templates', 'styles']);
gulp.task('default', ['build', 'watch']);
