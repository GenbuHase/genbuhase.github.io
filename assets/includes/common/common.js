window.addEventListener("DOMContentLoaded", () => {
	let menuContainer = new DOM.ComponentLoader("/assets/includes/common/").doc.querySelector("Body");
		menuContainer.childNodes.forEach(component => document.body.appendChild(component));

		new DOM('$*[Data-Component="Content"]').appendChild(new DOM("$Main"));

		new DOM('$*[Data-Component="Content_Toolbar_DrawerBtn"]').addEventListener("click", () => {
			let drawer = new mdc.drawer.MDCPersistentDrawer(new DOM('$*[Data-Component="Drawer"]'));
				drawer.open = !drawer.open;
		});
		
	window.mdc.autoInit();

	new DOM('@A[Href]:Not([Href=""]):Not([Href="#"]):Not([Href^="javascript:"])').forEach(anchor => {
		anchor.addEventListener("click", (event) => {
			if (parent.document.querySelector("#Content_Page")) {
				event.preventDefault();
				parent.document.querySelector("#Content_Page").src = anchor.href;
			}
		});
	});

	new DOM("@Main").forEach(elem => {
		elem.classList.add("mdc-typography");
	});
});