const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-Sync').create();

function style() {
   return gulp.src('./app/scss/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('./app/css'))
            .pipe(browserSync.stream())
}

function watch() {
   browserSync.init({
      server: {
         baseDir: './app/'
      }
   })
   gulp.watch('./app/scss/**/*.scss',style);
   gulp.watch('./app/*.html').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;