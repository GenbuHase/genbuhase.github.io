<template>
	<Main>
		<Div Class = "products container">
			<Div Class = "row">
				<Product v-for = "(product, index) in products" :key = "index"
					:name = "product.name"
					:to = "product.path"
					:preview = "`${product.preview}`"
				/>
			</Div>
		</Div>
	</Main>
</template>

<script>
	import Product from "./components/Product";

	export default {
		name: "ProductListView",
		components: { Product },

		props: {
			products: {
				type: Object,
				default: () => { {} }
			}
		}
	};
</script>