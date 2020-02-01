import Vue from "vue";
import router from "./router";

import App from "./App.vue";



Vue.config.productionTip = false;

new Vue({
	router,

	computed: {
		pageTitle () {
			const paths = this.$route.path.split("/").filter(path => path);
			let titles = [];

			let mem = [...paths, ""];
			while (mem = mem.slice(0, -1)) {
				const routing = this.$router.match(mem.join("/"));
				if (routing.name !== null) titles.push(routing.meta.title);

				if (!mem.length || routing.meta.override) break;
			}

			return titles.join("｜");
		},

		breakpoint () {
			for (const tag of Array.from(document.getElementsByTagName("style"))) {
				const matched = tag.innerText.match(/\-breakpoint: (\d+)px;/);

				if (matched) return parseInt(matched[1], 10);
			}

			return 0;
		}
	},

	render: h => h(App)
}).$mount("#App");