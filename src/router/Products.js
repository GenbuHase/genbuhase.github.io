import PRODUCTS from "@/pages/products/items.json";

export default [
	{
		path: "/products",
		component: () => import("@/pages/products/index.vue"),

		children: [
			{
				path: "",
				component: () => import("@/pages/products/ProductListView.vue"),

				meta: { title: "Products" }
			},

			// /products/:product
			...PRODUCTS.map(product => {
				return {
					path: `(${product.root})`,
					component: () => import("@/pages/products/ProductDetailView.vue"),

					meta: { title: product.name }
				};
			})
		]
	}
];