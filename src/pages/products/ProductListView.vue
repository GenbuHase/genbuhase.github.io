<template>
	<main>
		<div class = "products container">
			<div class = "row">
				<Product v-for = "(product, index) in products" :key = "index"
					:name = "product.name"
					:to = "product.root"
					:preview = "product.preview"
				/>
			</div>
		</div>
	</main>
</template>

<script>
	import Product from "./components/Product";

	export default {
		name: "ProductListView",
		components: { Product },

		props: {
			products: {
				type: Array,
				default: () => []
			}
		}
	};
</script>