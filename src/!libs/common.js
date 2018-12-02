/* global M */

window.addEventListener("DOMContentLoaded", () => {
	const sidenavs = document.querySelectorAll(".sidenav");
	for (const sidenav of sidenavs) M.Sidenav.init(sidenav);

	const carousels = document.querySelectorAll(".carousel");
	for (const carousel of carousels) M.Carousel.init(carousel);

	const materialboxes = document.querySelectorAll(".materialboxed");
	for (const materialbox of materialboxes) M.Materialbox.init(materialbox);
});