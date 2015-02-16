var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass');

var sys = require('sys'),
    exec = require('child_process').exec;

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 8080,
    livereload: true
  });
})

gulp.task('site-js', function() {
  gulp.src(['src/site/**/_module.js', 'src/site/**/*.js'])
    .pipe(concat('site.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(connect.reload());
})

gulp.task('component-js', function() {
  gulp.src(['src/components/**/_module.js', 'src/components/**/*.js'])
    .pipe(concat('material-components.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(connect.reload());
})

gulp.task('js', ['component-js', 'site-js'])

gulp.task('scss', function() {
  gulp.src('src/application.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(connect.reload());
})

gulp.task('copy-bower', function() {
  gulp.src('bower_components/**/*')
    .pipe(gulp.dest('build/bower'));
})

gulp.task('copy-site-views', function() {
  gulp.src('src/site/views/**/*.html')
    .pipe(gulp.dest('build/views'))
    .pipe(connect.reload());
})

gulp.task('copy-component-templates', function() {
  gulp.src('src/components/**/*.html')
    .pipe(gulp.dest('build/components'))
    .pipe(connect.reload());
})

gulp.task('copy-index', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
})

gulp.task('copy', ['copy-bower', 'copy-index','copy-site-views', 'copy-component-templates']);

gulp.task('watch', function() {
  gulp.watch('src/components/**/*.js', ['component-js']);
  gulp.watch('src/components/**/*.scss', ['scss']);
  gulp.watch('src/components/**/*.html', ['copy-component-templates']);
  gulp.watch('src/site/**/*.js', ['site-js']);
  gulp.watch('src/site/**/*.scss', ['scss'])
  gulp.watch('src/site/views/**/*.html', ['copy-site-views']);
  gulp.watch('src/index.html', ['copy-index']);
  gulp.watch('src/application.scss', ['scss']);
})

gulp.task('clean', function() {
  exec('rm -rf ' + __dirname + '/build/*')
})

gulp.task('build', ['js', 'scss', 'copy'])
gulp.task('serve', ['build', 'connect', 'watch']);
gulp.task('default', ['build'])
