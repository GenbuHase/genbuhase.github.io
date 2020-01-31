<template>
	<Header Class = "navbar-fixed">
		<Nav>
			<Div Class = "nav-wrapper">
				<A Class = "sidenav-trigger" Data-Target = "navigation_sideNav" Href = "#">
					<Icon font = "material-icons" name = "menu" />
				</A>

				<Span Class = "brand-logo" v-text="$root.pageTitle" />
			</Div>
		</Nav>
	</Header>
</template>

<script>
	import Icon from "../Icon";

	export default {
		components: { Icon }
	};
</script>