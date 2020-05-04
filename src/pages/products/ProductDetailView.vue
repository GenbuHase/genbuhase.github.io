<template>
	<Main>
		<Heading v-text = "product.name" />
		<img Class = "responsive-img materialboxed" :src = "product.preview" :Data-Caption = "product.description">

		<component :is = "getDetailView" :product = "product" />
	</Main>
</template>

<style lang = "scss">
	@import "../../../public/libs/Prism/prism.css";

	pre[class*="language-"] {
		&::before, &::after { content: none }
	}
</style>

<script>
	import("@/../public/libs/Prism/prism.js");
	import Heading from "@/components/Heading/";


	export default {
		name: "ProductDetailView",
		components: { Heading },

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

		updated () {
			M.AutoInit();


			Prism.plugins.NormalizeWhitespace.setDefaults({
				"remove-indent": true
			});

			Prism.highlightAll();
		},

		methods: {
			async getDetailView () {
				return await import(`./${this.product.root}/index.vue`);
			}
		}
	};
</script>