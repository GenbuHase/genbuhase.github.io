const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const gulpRename = require("gulp-rename");
const del = require("del");
const gulpConcat = require("gulp-concat");
const sass = require("gulp-sass");
const ejs = require("gulp-ejs");

const notTransferedFiles = [
	"*.html",
	"*.css",
	"*.ejs",
	"*.scss"
];

gulp.task("default", ["watch"]);

gulp.task("watch", ["compile"], () => {
	gulp.watch("./src/!js/**/*.js", ["js-compile"]);
	gulp.watch(["./src/!css/**/*.scss", "./src/**/*.scss"], ["scss-compile"]);
	gulp.watch("./src/**/*.ejs", ["ejs-compile"]);
	gulp.watch("./src/**/*.*", ["transfer-or-remove"]);
});

gulp.task("compile", ["js-compile", "scss-compile", "ejs-compile", "transfer-or-remove"]);

gulp.task("js-compile", () => {
	gulp.src("./src/!libs/**/*.js")
		.pipe(gulpPlumber())
		.pipe(gulpConcat("common.js"))
		.pipe(gulp.dest("./js"));
});

gulp.task("scss-compile", () => {
	gulp.src("./src/!css/**/*.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./css"));

	gulp.src(["!./src/!css/**/*.scss", "./src/**/*.scss"])
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./"));
});

gulp.task("ejs-compile", () => {
	gulp.src(["!./src/**/_*.ejs", "./src/**/*.ejs"])
		.pipe(gulpPlumber())
		.pipe(ejs())
		.pipe(gulpRename({ extname: ".html" }))
		.pipe(gulp.dest("./"));
});

gulp.task("transfer-or-remove", e => {
	if (!e) return;

	if (e.type === "deleted") {
		return;
	}

	return gulp.src([
		"!./src/!*/**/*.*",
		...notTransferedFiles.map(file => `!./src/**/${file}`),
		
		"./src/**/*.*"
	]).pipe(gulp.dest("./"));
});