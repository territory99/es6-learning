/**
 * Created by qingxingao on 2020/1/13.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));

