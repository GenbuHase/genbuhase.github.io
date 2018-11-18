const DOCPATH = "./../Detail.html";

class Item {
	constructor (itemName = "", itemId = 0, imageUrl = "") {
		let self = new DOM.ComponentLoader(DOCPATH).load("ItemCard");
			self.querySelector('ItemName').textContent = itemName;
			self.querySelector('ItemID').textContent = itemId;
			self.querySelector('Item').style.backgroundImage = `URL("${imageUrl}")`;

		return self;
	}
}