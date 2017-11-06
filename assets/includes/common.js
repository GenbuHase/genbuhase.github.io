window.addEventListener("DOMContentLoaded", () => {
	window.mdc.autoInit();

	DOM('@A[Href]:Not([Href="#"]):Not([Href^="javascript:"])').forEach(anchor => {
		anchor.addEventListener("click", (event) => {
			if (parent.document.querySelector("#Content_Page")) {
				event.preventDefault();
				parent.document.querySelector("#Content_Page").src = anchor.href;
			}
		});
	});
});