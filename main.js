window.addEventListener("DOMContentLoaded", () => {
	DOM("#Content_Toolbar_MenuBtn").addEventListener("click", () => {
		let drawer = new mdc.drawer.MDCPersistentDrawer(DOM("#Drawer"));
			drawer.open = !drawer.open;
	});

	DOM("#Content_Page").addEventListener("load", (event) => {
		new mdc.drawer.MDCPersistentDrawer(DOM("#Drawer")).open = false;
	});
});