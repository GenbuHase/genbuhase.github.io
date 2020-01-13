<template>
	<Main>
		<Div Class = "products container">
			<Div Class = "row">
				<Product v-for = "(product, index) in products" :key = "index"
					:name = "product.name"
					:to = "product.path"
					:preview = "`/products/${product.preview}`"
				/>

				<!--<Div Class = "card col s12">
					<Div Class = "card-image">
						<img src = "./ArticleEditor/assets/Screenshot001.png">
						<Span Class = "card-title truncate">Article Editor</Span>
					</Div>

					<Div Class = "card-action">
						<A Href = "./ArticleEditor/">Get Started</A>
					</Div>
				</Div>-->
			</Div>
		</Div>
	</Main>
</template>

<script>
	import Product from "./components/Product";
	import ProductList from "./products.json";

	export default {
		name: "ProductsView",
		components: { Product },

		computed: {
			products () { return ProductList }
		}
	};
</script>