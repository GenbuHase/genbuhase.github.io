const DOCPATH = "/Mod/Contents/Detail.html";

class BlockCard {
	constructor (blockName = "", blockId = 0, imageUrl = "") {
		let self = new DOM.ComponentLoader(DOCPATH).load("BlockCard");
			self.querySelector('BlockName').textContent = blockName;
			self.querySelector('BlockID').textContent = blockId;
			self.querySelector('Block').style.backgroundImage = `URL("${imageUrl}")`;

		return self;
	}
}