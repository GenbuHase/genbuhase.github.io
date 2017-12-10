const DOCPATH = "component.html";

class Mod {
	constructor (modName = "", url = "", backImg = "") {
		this.modName = modName,
		this.url = url,
		this.backImg = backImg;

		let self = this.self = new DOM.ComponentLoader(DOCPATH).load("Mod");
			self.querySelector(".mdc-grid-tile__primary-content").src = `${url}/${backImg}`;
			self.querySelector(".mdc-grid-tile__title").textContent = modName;
			self.querySelector(".mdc-grid-tile__icon").href = url;
	}

	append () {
		new DOM("$Modlist > UL").appendChild(this.self);
	}
}



let modInfo = [
	{ name: "Advanced Weapon", url: "Advanced Weapon", img: "assets/pack.png" },
	{ name: "More Records", url: "More Records", img: "favicon.ico" }
];	modInfo.forEach(mod => {
	new Mod(mod.name, mod.url, mod.img).append();
});