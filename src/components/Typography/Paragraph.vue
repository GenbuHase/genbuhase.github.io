<template>
	<p :class = "classes"><slot /></p>
</template>

<script>
	export default {
		props: {
			break: {
				type: [ String, Number ],
				default: () => null
			}
		},

		computed: {
			classes () {
				const classes = ["paragraph"];
				if (["string", "number"].includes(typeof this.break)) classes.push(`paragraph--break-${this.break}`);

				return classes;
			}
		}
	};
</script>