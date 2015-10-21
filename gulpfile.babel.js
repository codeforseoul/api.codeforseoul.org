import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import jshint from 'gulp-jshint';
import watch from 'gulp-watch';
import livereload from 'gulp-livereload';

livereload({ start: true })

gulp.task('lint', () => {
  gulp.src('./app/**/*.js')
    .pipe(jshint());
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'index.js',
    ext: 'js html csv',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('serve', ['lint','nodemon']);
