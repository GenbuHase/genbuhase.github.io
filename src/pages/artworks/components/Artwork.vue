<template>
	<div class = "artwork">
		<img class = "artwork__image materialboxed" :src = "src">

		<div class = "artwork__info">
			<h4 class = "artwork__info__title">{{ title }}</h4>
			<p class = "artwork__info__description">{{ description }}</p>
		</div>
	</div>
</template>

<style lang = "scss">
	.artwork {
		&__image {
			display: block;
			max-width: 100%;
		}

		&__info {
			&__title {
				display: block;

				font-size: 1.25em;
				font-weight: bold;
			}

			&__description {
				padding-left: 1em;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},

			description: {
				type: String,
				default: ""
			},

			src: {
				type: String,
				default: ""
			}
		}
	};
</script>