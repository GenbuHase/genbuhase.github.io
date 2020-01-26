import ProductList from "../views/products/products.json";

export default [
	{
		path: "/products",
		component: () => import("../views/products/index.vue"),

		children: [
			{
				path: "",
				component: () => import("../views/products/ProductListView.vue"),

				meta: { title: "Products" }
			},

			// /products/:product
			...ProductList.map(product => {
				return {
					path: `(${product.root})`,
					component: () => import("../views/products/ProductDetailView.vue"),

					meta: { title: product.name }
				};
			})
		]
	}
];