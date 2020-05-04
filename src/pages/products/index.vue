<template>
	<router-view :products = "products" />
</template>

<script>
	import DATA_PRODUCTS from "./products.json";

	export default {
		name: "ProductPage",

		computed: {
			products () {
				const sanitized = DATA_PRODUCTS.map(product => {
					const ROUTE_PREFIX = `/products/${product.root}`;

					return Object.assign({}, product, {
						preview: `${ROUTE_PREFIX}/${product.preview}`
					});
				});

				return sanitized;
			}
		}
	};
</script>