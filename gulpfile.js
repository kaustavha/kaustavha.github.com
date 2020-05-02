var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync');

const paths = {
  styles: {
    src: 'src/**/*.styl',
    dest: 'lib'
  },
  templates: {
      src: './src/index.jade',
      watch_src: ['./src/**/*.jade'],
      dest: './'
  }
};

function templates() {
  var locs = {};
  return gulp.src(paths.templates.src)
    .pipe(jade({locals: locs, pretty: true}))
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


var build = gulp.series(gulp.parallel(styles, templates), gulp.parallel(serve, watch));

exports.styles = styles;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;
