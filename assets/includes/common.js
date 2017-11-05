class Component {
	constructor (componentName = "") {
		try {
			if (!this.constructor) throw new TypeError("Please use the 'new' operator, the component can't be called as a function.");
			
			let component = document.importNode(Component.doc.querySelector(`*[Data-Component="${componentName}"]`), true);
			
			let componentWrapper = DOM("ComponentWrapper");
				componentWrapper.appendChild(component);

				componentWrapper.firstElementChild.outerHTML = (() => {
					let content = componentWrapper.firstElementChild.outerHTML;
					
					for (let i = 0; i < arguments.length + 1; i++) {
						content = content.replace(new RegExp("\\$\\{" + i + "\\}", "g"), arguments[i + 1]);
					}

					return content;
				})();
				
			return componentWrapper.firstElementChild;
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * コンポーネントへの参照
	 * @returns {HTMLBodyElement}
	 */
	static get doc () {
		let doc = DOM("HTML");
		
		try {
			doc.innerHTML = DOM.xhr({
				type: "GET",
				url: "/assets/includes/common.html",
				doesSync: false
			}).response;
		} catch (error) {}

		return doc;
	}

	static get CommonLayout () {
		return class CommonLayout {
			constructor () {
				return new Component("CommonLayout", DOM("#Content").outerHTML)
			}
		}
	}
}

window.addEventListener("DOMContentLoaded", () => {
	window.mdc.autoInit();

	DOM("#Toolbar_MenuBtn").addEventListener("click", () => {
		let drawer = new mdc.drawer.MDCPersistentDrawer(DOM("#Drawer"));
			drawer.open = !drawer.open;
	});
});