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

const compileJs = () => {
	gulp.src("./src/!libs/**/*.js")
		.pipe(gulpPlumber())
		.pipe(gulpConcat("common.js"))
		.pipe(gulp.dest("./js"));
};

const compileScss = () => {
	gulp.src("./src/!css/**/*.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./css"));

	gulp.src(["!./src/!css/**/*.scss", "./src/**/*.scss"])
		.pipe(gulpPlumber())
		.pipe(sass({ outputStyle: "expanded", sourceMap: true }))
		.pipe(gulp.dest("./"));
};

const compileEjs = () => {
	gulp.src(["!./src/**/_*.ejs", "./src/**/*.ejs"])
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

const transferAsset = filename => {
	console.info(`Starting to transfer '${filename}'...`);
	gulp.src(filename).pipe(gulp.dest("./"));
};

const cleanAsset = filename => {
	console.info(`Starting to clean '${filename}'...`);
	// fs.unlink(filename);
};



gulp.task("default", ["watch"]);

gulp.task("compile", ["js-compile", "scss-compile", "ejs-compile", "transfer"]);
gulp.task("js-compile", compileJs);
gulp.task("scss-compile", compileScss);
gulp.task("ejs-compile", compileEjs);
gulp.task("transfer", transferAssets);

gulp.task("watch", ["compile"], () => {
	gulp.watch("./src/!js/**/*.js", ["js-compile"]);
	gulp.watch(["./src/!css/**/*.scss", "./src/**/*.scss"], ["scss-compile"]);
	gulp.watch("./src/**/*.ejs", ["ejs-compile"]);

	gulp.watch([
		"!./src/!*/**/*.*",
		...notTransferedFiles.map(file => `!./src/**/${file}`),
		
		"./src/**/*.*"
	], ["transfer"]);
});