<template>
	<Div ID = "App">
		<Navigation />

		<transition name = "pageRouting" mode = "out-in" @enter = "onRoutingEnter">
			<router-view />
		</transition>
	</Div>
</template>

<style lang="scss">
	@import "./public/libs/Materialize-v1.0.0/sass/materialize";
</style>

<style lang="scss" scoped>
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

		computed: {
			breakpoint () {
				for (const tag of Array.from(document.getElementsByTagName("style"))) {
					const matched = tag.innerText.match(/\-breakpoint: (\d+)px;/);
					
					if (matched) return parseInt(matched[1], 10);
				}

				return 0;
			}
		},

		mounted () {
			M.AutoInit();
		},

		methods: {
			onRoutingEnter () {
				if (this.breakpoint < window.innerWidth) return;

				const sideNav = this.$el.querySelector("#navigation_sideNav");
				(sideNav && sideNav.M_Sidenav && sideNav.M_Sidenav.isOpen) && (sideNav.M_Sidenav.close());
			}
		}
	};
</script>