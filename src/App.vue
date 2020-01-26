<template>
	<Div ID = "App">
		<Title>{{ $root.pageTitle || "どっかのプログラなーいのサイト。" }}</Title>

		<Navigation />

		<transition name = "pageRouting" mode = "out-in" @enter = "onRouting" @leave = "onRouting">
			<router-view />
		</transition>
	</Div>
</template>

<style lang="scss">
	@import "./public/libs/Materialize-v1.0.0/sass/materialize";
</style>

<style lang="scss">
	.pageRouting {
		&-enter-active, &-leave-active {
			transition: opacity 0.25s;
		}

		&-enter, &-leave-to {
			opacity: 0;
		}
	}
</style>

<style lang="scss" scoped>
	@import "./public/libs/Materialize-v1.0.0/sass/components/color-variables";
	@import "./public/libs/Materialize-v1.0.0/sass/components/variables";
	@import "./public/libs/Materialize-v1.0.0/sass/components/extends/extends-variables";
	
	:root { -breakpoint: $navbar-breakpoint-width }
</style>

<script>
	/* global M */
	import Navigation from "./components/Navigation/";
	
	export default {
		components: { Navigation },

		updated () {
			M.AutoInit();
		},

		methods: {
			onRouting () {
				if (this.$root.breakpoint < window.innerWidth) return;

				const sideNav = this.$el.querySelector("#navigation_sideNav");
				(sideNav && sideNav.M_Sidenav && sideNav.M_Sidenav.isOpen) && (sideNav.M_Sidenav.close());
			}
		}
	};
</script>