var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    imageResize = require('gulp-image-resize'),
    imageminPngquant = require('imagemin-pngquant'),
    del = require('del'),
    concat = require('gulp-concat');

// Styles
gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

// Images
gulp.task('images', function() {
    return gulp.src('images/*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [imageminPngquant({
                quality: '65-80',
                speed: 4
            })]
        }))
        .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/images', 'dist/js', 'dist/css'], cb);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {

  // Watch .css files
  gulp.watch('css/*.css', ['styles']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('images/*.png', ['images']);

});
