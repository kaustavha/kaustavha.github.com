var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    coffee = require('gulp-coffee'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    source = './src/',
    dest = './lib/',
    indexDest = './';


gulp.task('scripts', function() {
  gulp.src(source + '**/*.coffee')
    .pipe(coffee({bare: true}).on('error', log))
    .pipe(gulp.dest(dest));
  log("Succesfully transpiled scripts: coffee -> js");

});

gulp.task('templates', function() {
  var locs = {};
  gulp.src(source + 'index.jade')
    .pipe(jade({locals: locs, pretty: true}))
    .pipe(gulp.dest(indexDest));
  log('Succesfully transpiled markup: Jade -> HTML');
});

gulp.task('styles', function() {
  gulp.src(source + 'index.styl')
    .pipe(stylus())
    .pipe(gulp.dest(dest));
  log('Succesfully transpiled styles: Stylus -> CSS');
});

gulp.task('watch', function() {
	log('Watching files');
	gulp.watch(source + '**/*', ['build']);
});

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: indexDest
    }
  });
});

gulp.task('clean', function() {
  gulp.src([indexDest + 'index.html', dest], {read: false}).pipe(clean());
  log('Succesfully removed generated files');
});

//define cmd line default task
gulp.task('build', ['templates', 'styles', 'scripts']);
gulp.task('default', ['clean', 'build', 'watch', 'browserSync']);
