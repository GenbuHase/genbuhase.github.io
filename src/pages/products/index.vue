<template>
	<router-view :products = "products" />
</template>

<script>
	import PRODUCTS from "./items.json";

	export default {
		name: "ProductPage",

		computed: {
			products () {
				const sanitized = PRODUCTS.map(product => {
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