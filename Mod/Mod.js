const DOCPATH = "component.html";

class Mod {
	constructor (modName = "", url = "", noImage = false) {
		this.modName = modName,
		this.url = url,
		this.noImage = noImage;

		let self = this.self = new DOM.ComponentLoader(DOCPATH).load("Mod");
			self.querySelector(".mdc-grid-tile__title").textContent = modName;
			self.querySelector(".mdc-grid-tile__icon").href = url;

			if (!noImage) self.querySelector(".mdc-grid-tile__primary-content").src = `${url}/favicon.ico`;
	}

	append () {
		new DOM("$Modlist > UL").appendChild(this.self);
	}
}



let modInfo = [
	{ name: "Advanced Weapon", url: "Advanced Weapon" },
	{ name: "More Records", url: "More Records" }
];	modInfo.forEach(mod => {
	new Mod(mod.name, mod.url, mod.noImage).append();
});