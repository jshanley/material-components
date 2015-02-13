var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 8080,
    livereload: true
  });
})

gulp.task('js', function() {
  gulp.src(['src/modules/**/_module.js', 'src/modules/**/*.js'])
    .pipe(concat('application.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(connect.reload());
})

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

gulp.task('copy-views', function() {
  gulp.src('src/views/**/*.html')
    .pipe(gulp.dest('build/views'))
    .pipe(connect.reload());
})

gulp.task('copy-templates', function() {
  gulp.src('src/modules/**/*.html')
    .pipe(gulp.dest('build/modules'))
    .pipe(connect.reload());
})

gulp.task('copy-index', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
})

gulp.task('copy', ['copy-bower', 'copy-index','copy-views', 'copy-templates']);

gulp.task('watch', function() {
  gulp.watch('src/modules/**/*.js', ['js']);
  gulp.watch('src/views/**/*.html', ['copy-views']);
  gulp.watch('src/modules/**/*.html', ['copy-templates']);
  gulp.watch('src/index.html', ['copy-index']);
  gulp.watch(['src/application.scss', 'src/modules/**/*.scss'], ['scss']);
})

gulp.task('build', ['js', 'scss', 'copy'])
gulp.task('serve', ['build', 'connect', 'watch']);
gulp.task('default', ['build'])
