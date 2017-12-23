window.addEventListener("DOMContentLoaded", () => {
	new DOM("@Drawing").forEach(drawing => {
		drawing.classList.add("mdc-grid-tile"),
		drawing.classList.add("mdc-grid-list--twoline-caption");

		drawing.querySelector('Drawing-Picture').classList.add("mdc-grid-tile__primary"),
		drawing.querySelector('Drawing-Details').classList.add("mdc-grid-tile__secondary"),
		drawing.querySelector('Drawing-Title').classList.add("mdc-grid-tile__title"),
		drawing.querySelector('Drawing-DrawedAt').classList.add("mdc-grid-tile__support-text");

		drawing.querySelector('Drawing-Picture').style.backgroundImage = `URL("assets/images/${drawing.querySelector('Drawing-Title').textContent}.png")`;
	});
});