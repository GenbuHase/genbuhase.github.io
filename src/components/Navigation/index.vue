<template>
	<Navigation>
		<Header />
		<SideNav />
	</Navigation>
</template>

<script>
	import Header from "./Header";
	import SideNav from "./SideNav";

	export default {
		components: { Header, SideNav }
	};
</script>