import Vue from "vue";
import VueRouter from "vue-router";

import ProductList from "../views/products/products.json";

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
			path: "/products",
			component: () => import("../views/products/index.vue"),

			meta: { title: "Products" }
		},

		// /products/:product
		...ProductList.map(product => {
			return {
				path: `/products/${product.path}`,
				component: () => import("../views/products/$product.vue"),

				meta: { title: product.name }
			};
		})
	]
});