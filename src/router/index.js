import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



/**
 * @typedef {object} PageMetadata
 * @prop {string} title
 * @prop {boolean} [override=false]
 */

export default new VueRouter({
	mode: "history",

	base: process.env.BASE_URL,
	routes: [
		{
			path: "",
			component: () => import("../views/Home.vue"),

			meta: { title: "どっかのプログラなーいのサイト。", override: true }
		},

		{
			name: "Products", path: "/products",
			component: () => import("../views/products/index.vue"),

			meta: { title: "Products" }
		}
	]
});