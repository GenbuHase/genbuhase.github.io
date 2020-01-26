<template>
	<Main>
		<Section>
			<H1 Class = "heading" v-text = "product.name" />
			<img Class = "responsive-img materialboxed" :src = "product.preview" :Data-Caption = "product.description">
		</Section>

		<component :is = "getDetail" />
	</Main>
</template>

<script>
	export default {
		name: "ProductDetailView",

		props: {
			products: {
				type: Array,
				default: () => []
			}
		},

		computed: {
			product () {
				const product = this.products.find(item => item.root === this.$route.params.pathMatch);
				return product || {};
			}
		},

		methods: {
			async getDetail () {
				return await import(`./${this.product.root}/index.vue`);
			}
		}
	};
</script>