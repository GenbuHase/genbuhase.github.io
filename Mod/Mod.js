const DOCPATH = "./Mod.html";

class Mod {
	constructor (modName = "", url = "", noImage = false) {
		this.modName = modName,
		this.url = url,
		this.noImage = noImage;

		let self = this.self = new DOM.ComponentLoader(DOCPATH).load("Mod");
			self.querySelector('ModName').textContent = modName;
			self.querySelector('*[Data-Component="Link"]').href = `Contents/${url}/`;

			if (!noImage) self.querySelector('*[Data-Component="Picture"]').src = `Contents/${url}/favicon.ico`;
	}

	append () {
		new DOM("$Modlist > UL").appendChild(this.self);
	}
}