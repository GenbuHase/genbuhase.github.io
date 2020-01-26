<template>
	<router-view :products = "products" />
</template>

<script>
	import DATA_PRODUCTS from "./products.json";

	export default {
		name: "ProductsView",

		computed: {
			products () {
				const sanitized = DATA_PRODUCTS.map(product => {
					return Object.assign({}, product, {
						preview: `/products/${product.root}/${product.preview}`
					});
				});

				return sanitized;
			}
		}
	};
</script>