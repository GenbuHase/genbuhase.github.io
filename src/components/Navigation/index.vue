<template>
	<Aside>
		<Header />
		<SideNav />
	</Aside>
</template>

<script>
	import Header from "./Header";
	import SideNav from "./SideNav";

	export default {
		name: "Navigation",

		components: { Header, SideNav }
	};
</script>