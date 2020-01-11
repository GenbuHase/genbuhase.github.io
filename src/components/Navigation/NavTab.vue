<template>
	<Li>
		<router-link :to = "to">
			<Icon :font = "iconFont" :name = "icon" :src = "iconSrc" /><slot />
		</router-link>
	</Li>
</template>

<script>
	import Icon from "../Icon";

	export default {
		components: { Icon },

		props: {
			to: {
				type: String,
				required: true
			},

			iconFont: {
				type: String,
				default: "material-icons"
			},

			icon: {
				type: String,
				default: null
			},

			iconSrc: {
				type: String,
				default: null
			}
		}
	};
</script>