<template>
	<div class = "card col s12">
		<div class = "card-image">
			<img :src = "preview">
			<span class = "card-title truncate" v-text = "name" />
		</div>

		<div class = "card-action">
			<router-link :to = "to" append>Get Started</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card {
		padding: 0;

		&-title {
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