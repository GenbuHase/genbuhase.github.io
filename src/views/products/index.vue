<template>
	<router-view :products = "products" />
</template>

<script>
	import products from "./products.json";

	export default {
		name: "ProductsView",

		computed: {
			products () { return products }
		}
	};
</script>