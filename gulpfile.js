'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

gulp.task('less', function() {
  gulp.src('app/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('less/*.less', ['less']);
});

gulp.task('serve', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'index.html', cache: false })
  ).listen(8080, done);
});
