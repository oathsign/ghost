var gulp=require('gulp');
var options={
    paths:{
        less:['./source/less/*.less'],
        del:['./css/**/*']
    }
};

var plugins={
    less:require('gulp-less')
};
require('load-gulp-tasks')(gulp,options,plugins);
gulp.task('dist',['compless']);