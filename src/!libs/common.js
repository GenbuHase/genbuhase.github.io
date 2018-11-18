window.addEventListener("DOMContentLoaded", () => {
	new mdc.toolbar.MDCToolbar(document.querySelector('Header[Data-Component="Frame-Content_Toolbar"]'));

	document.querySelector('*[Data-Component="Frame-Content_Toolbar_DrawerBtn"]').addEventListener("click", () => {
		let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('*[Data-Component="Frame-Drawer"]'));
		drawer.open = !drawer.open;
	});
		
	window.mdc.autoInit();
});



/* global mdc */