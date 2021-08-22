<template>
	<H2 :Class = "`subheading subheading-${type}`"><slot /></H2>
</template>

<script>
	export default {
		props: {
			type: {
				type: [ String, Number ],
				default: () => 1
			}
		}
	};
</script>