import ProductList from "@/pages/products/products.json";

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
			...ProductList.map(product => {
				return {
					path: `(${product.root})`,
					component: () => import("@/pages/products/ProductDetailView.vue"),

					meta: { title: product.name }
				};
			})
		]
	}
];