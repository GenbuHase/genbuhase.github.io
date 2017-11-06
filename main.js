window.addEventListener("DOMContentLoaded", () => {
	DOM("#Content_Toolbar_MenuBtn").addEventListener("click", () => {
		let drawer = new mdc.drawer.MDCPersistentDrawer(DOM("#Drawer"));
			drawer.open = !drawer.open;
	});
});