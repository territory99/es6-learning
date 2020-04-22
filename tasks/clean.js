/**
 * Created by qingxingao on 2019/8/14.
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})