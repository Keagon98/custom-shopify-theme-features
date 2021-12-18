// List dependencies
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

// Create functions

// SCSS
function compilescss() {
    return src('custom/custom.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(dest('assets'))
}


// Create WatchTask
function watchTask() {
    watch('custom/*.scss', compilescss);
}

// Default Gulp
exports.default = series(
    compilescss,
    watchTask
);