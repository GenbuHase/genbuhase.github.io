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
	{ name: "Animal Rider", url: "Animal Rider", noImage: true },
	{ name: "Command Tools", url: "Command Tools", noImage: true },
	{ name: "Customizable Blocks", url: "Customizable Blocks", noImage: true },
	{ name: "Data Helper", url: "API/Data Helper", noImage: true },
	{ name: "Earth Defence Force For MCPE", url: "Earth Defence Force For MCPE" },
	{ name: "GUI Helper", url: "API/GUI Helper", noImage: true },
	{ name: "Many Phones", url: "Many Phones" },
	{ name: "More Records", url: "More Records" },
	{ name: "Reality Building", url: "Reality Building", noImage: true },
	{ name: "Scripting+", url: "API/Scripting+", noImage: true },
	{ name: "Too Many Bombs", url: "Too Many Bombs" },
	{ name: "Trap Tools", url: "Trap Tools" },
	{ name: "Vehicle Rider", url: "Vehicle Rider", noImage: true },
	{ name: "Villager's Inventory", url: "Villager's Inventory" },
	{ name: "WorldEdit", url: "WorldEdit", noImage: true },
	{ name: "Zero Gravity", url: "Zero Gravity", noImage: true },
	{ name: "まさにカオス", url: "まさにカオス", noImage: true }
];	modInfo.forEach(mod => {
	new Mod(mod.name, mod.url, mod.noImage).append();
});