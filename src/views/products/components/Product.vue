<template>
	<Div Class = "product card col s12">
		<Div Class = "card-image">
			<img :src = "`/products/${preview}`">
			<Span Class = "card-title truncate" v-text = "name" />
		</Div>

		<Div Class = "card-action">
			<router-link :to = "to" append>Get Started</router-link>
		</Div>
	</Div>
</template>

<style lang="scss" scoped>
	.card.product {
		padding: 0;

		.card-title {
			width: 100%;
			background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.46));
		}
	}
</style>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true
			},

			to: {
				type: String,
				default: "/"
			},

			preview: {
				type: String,
				default: null
			}
		}
	};
</script>