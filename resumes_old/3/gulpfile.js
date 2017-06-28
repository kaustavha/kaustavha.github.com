var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    coffee = require('gulp-coffee'),
    browserSync = require('browser-sync'),
    open = require('gulp-open');


gulp.task('open', function(){
 gulp.src('./index.html')
    .pipe(open());
});

gulp.task('scripts', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', log))
    .pipe(gulp.dest('./public/assets'))
});

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

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('clean', function() {
  gulp.src(['./index.html', './lib'], {read: false}).pipe(clean());
});

//define cmd line default task
gulp.task('build', ['templates', 'styles', 'scripts']);
gulp.task('default', ['build', 'watch', 'browserSync']);
