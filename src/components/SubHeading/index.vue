<template>
	<H2 :Class = "`subheading subheading-${type}`"><slot /></H2>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number,
				default: () => 1
			}
		}
	};
</script>