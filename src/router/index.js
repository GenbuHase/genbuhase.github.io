import Vue from "vue";
import VueRouter from "vue-router";

import ProductsRouter from "./Products";

Vue.use(VueRouter);



/**
 * @typedef {object} PageMetadata
 * @prop {string} title
 * @prop {boolean} [override=false]
 */

const router = new VueRouter({
	mode: "history",

	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: () => import("@/pages/Home.vue"),

			meta: { title: "どっかのプログラなーいのサイト。", override: true }
		},

		...ProductsRouter,

		{
			path: "/artworks",
			component: () => import("@/pages/artworks/index.vue"),

			meta: { title: "Artworks" }
		},

		{
			path: "*",
			component: {
				template: `ERROR`
			},

			meta: { title: "404 Not Found" }
		},
	],
});



export default router;