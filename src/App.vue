<template>
	<Div ID = "App">
		<Navigation />
		<router-view />
	</Div>
</template>

<style lang="scss">
	@import "./public/libs/Materialize-v1.0.0/sass/materialize";
</style>

<script>
	/* global M */
	import Navigation from "./components/Navigation/";
	
	export default {
		components: { Navigation },

		mounted () {
			M.AutoInit();
		}
	};
</script>