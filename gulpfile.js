const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const gulpRename = require("gulp-rename");
const gulpConcat = require("gulp-concat");
const sass = require("gulp-sass");
const ejs = require("gulp-ejs");

gulp.task("default", ["watch"]);

gulp.task("watch", ["compile"], () => {
	gulp.watch("./src/js/**/*.js", ["js-compile"]);
	gulp.watch("./src/css/**/*.scss", ["scss-compile"]);
	gulp.watch("./src/**/*.ejs", ["ejs-compile"]);
});

gulp.task("compile", ["js-compile", "scss-compile", "ejs-compile"]);

gulp.task("js-compile", () => {
	gulp.src("./src/js/**/*.js")
		.pipe(gulpPlumber())
		.pipe(gulpConcat("build.js"))
		.pipe(gulp.dest("./src/js"));
});

gulp.task("scss-compile", () => {
	gulp.src("./src/css/**/*.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./src/css"));
});

gulp.task("ejs-compile", () => {
	gulp.src(["./src/**/*.ejs", "!./src/**/_*.ejs"])
		.pipe(gulpPlumber())
		.pipe(ejs())
		.pipe(gulpRename({ extname: ".html" }))
		.pipe(gulp.dest("."));
});