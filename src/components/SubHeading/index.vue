<template>
	<h2 :class = "`subheading subheading-${type}`"><slot /></h2>
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