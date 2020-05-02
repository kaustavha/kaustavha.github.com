var gulp = require('gulp'),
    log = require('gulp-util').log,
    pug = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    dest = './lib/',
    indexDest = './';

const paths = {
  styles: {
    src: 'src/**/*.styl',
    dest: 'lib'
  },
  templates: {
      src: './src/index.jade',
      watch_src: ['./src/**/*'],
      dest: './'
  }
};

function templates() {
  var locs = {};
  return gulp.src(paths.templates.src)
    .pipe(pug({locals: locs, pretty: true}))
    .pipe(gulp.dest(paths.templates.dest));
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(stylus())
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.templates.watch_src, templates);
  gulp.watch(paths.styles.src, styles);
}

function serve() {
  browserSync({
    files: [paths.styles.dest, `${paths.templates.dest}/index.html`],
    server: {
      baseDir: paths.templates.dest
    }
  });
};

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(gulp.parallel(styles, templates), gulp.parallel(serve, watch));

exports.styles = styles;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;
