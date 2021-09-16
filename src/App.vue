<template>
	<div id = "App">
		<title>{{ $root.pageTitle || "どっかのプログラなーいのサイト。" }}</title>

		<Navigation />

		<transition name = "pageRouting" mode = "out-in" @enter = "onEnter" @leave = "onLeave">
			<router-view />
		</transition>
	</div>
</template>

<style lang = "scss">
	.pageRouting {
		&-enter-active, &-leave-active {
			transition: opacity 0.25s;
		}

		&-enter, &-leave-to {
			opacity: 0;
		}
	}
</style>

<style lang = "scss">
	@import "@/../public/libs/Materialize-v1.0.0/sass/materialize";

	@import "@/components/Heading/";
	@import "@/components/SubHeading/";
	@import "@/components/Typography/";
	@import "@/components/Navigation/";


	:root { -breakpoint: $navbar-breakpoint-width }

	article {
		font-size: 0.875rem;
		letter-spacing: 0.04em;
		line-height: 1.5rem;
	}
</style>

<script>
	/* global M */
	import Navigation from "@/components/Navigation/";

	export default {
		components: { Navigation },

		methods: {
			onEnter () {
				M.AutoInit();
				this.onRouting();
			},

			onLeave () {
				this.onRouting();
			},

			onRouting () {
				if (this.$root.breakpoint < window.innerWidth) return;

				const sideNav = this.$el.querySelector("#navigation_sideNav");
				(sideNav && sideNav.M_Sidenav && sideNav.M_Sidenav.isOpen) && (sideNav.M_Sidenav.close());
			}
		}
	};
</script>