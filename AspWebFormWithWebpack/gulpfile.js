const gulp = require("gulp");
const concat = require('gulp-concat');

const path = {
    nodeModules: "./node_modules/",
    scriptDest: "./Scripts/",
    styleDest: "./Content/"
};

gulp.task("copy:css", function () {

    const cssToCopy = [
        `${path.nodeModules}toastr/build/toastr.min.js`
    ];

    return gulp.src(cssToCopy).pipe(concat("vendor.css")).pipe(gulp.dest(`${path.styleDest}`));
});


gulp.task("copy:js", function () {

    const jsToCopy = [
        `${path.nodeModules}toastr/build/toastr.min.css`
    ];

    return gulp.src(jsToCopy).pipe(concat("vendor.js")).pipe(gulp.dest(`${path.scriptDest}`));
});

gulp.task("default", ['copy:css', 'copy:js']);