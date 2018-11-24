const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const gulpRename = require("gulp-rename");
const gulpConcat = require("gulp-concat");
const sass = require("gulp-sass");
const ejs = require("gulp-ejs");



const notTransferedFiles = [
	"*.html",
	"*.css",
	"*.ejs",
	"*.scss"
];

const bundleLibs = () => {
	gulp.src([
		"./src/!libs/materialize-1.0.0/js/bin/materialize.min.js",
		"./src/!libs/!(materialize-1.0.0)/**/*.js",
		"./src/!libs/*.js",
	])	.pipe(gulpPlumber())
		.pipe(gulpConcat("common.js"))
		.pipe(gulp.dest("./js"));

	gulp.src("./src/!libs/common.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "compact", sourceMap: true }))
		.pipe(gulp.dest("./css"));
};

const compileScss = () => {
	gulp.src("./src/!css/**/*.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./css"));

	gulp.src(["./src/**/*.scss", "!./src/!css/**/*.scss"])
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./"));
};

const compileEjs = () => {
	gulp.src(["./src/**/*.ejs", "!./src/**/_*.ejs"])
		.pipe(gulpPlumber())
		.pipe(ejs())
		.pipe(gulpRename({ extname: ".html" }))
		.pipe(gulp.dest("./"));
};

const transferAssets = () => {
	gulp.src([
		"!./src/!*/**/*.*",
		...notTransferedFiles.map(file => `!./src/**/${file}`),
		
		"./src/**/*.*"
	]).pipe(gulp.dest("./"));
};



gulp.task("default", ["watch"]);
gulp.task("lib-bundle", bundleLibs);
gulp.task("scss-compile", () => {});
gulp.task("ejs-compile", () => {});
gulp.task("transfer", () => {});
gulp.task("compile", ["lib-bundle", "scss-compile", "ejs-compile", "transfer"]);

gulp.task("watch", ["compile"], () => {
	gulp.watch("./src/!libs/**/*.js", ["lib-bundle"]);

	gulp.watch([
		"./src/!css/**/*.scss",
		"./src/**/*.scss",

		"!./src/!libs/**/*.scss"
	], ["scss-compile"]);

	gulp.watch("./src/**/*.ejs", ["ejs-compile"]);

	gulp.watch([
		"./src/**/*.*",

		"!./src/!*/**/*.*",
		...notTransferedFiles.map(file => `!./src/**/${file}`)
	], ["transfer"]);
});