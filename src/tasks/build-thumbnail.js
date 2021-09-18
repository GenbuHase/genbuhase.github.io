const glob = require("glob");
const fs = require("fs");
const sharp = require("sharp");

glob("./public/artworks/photography/*", (err, files) => {
	if (err) throw err;

	if (!fs.existsSync("./public/artworks/photography/thumbnails")) {
		fs.mkdirSync("./public/artworks/photography/thumbnails");
	}

	for (const file of files) {
		sharp(file)
			.resize(400, null)
			.toFile(`${file.replace(/artworks\/photography/, "artworks/photography/thumbnails")}`, (err, info) => {
				if (err) throw err;

				console.log(info);
			});
	}
});