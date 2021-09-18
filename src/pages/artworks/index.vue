<template>
	<main>
		<SubHeading type = "1">写真／Photography</SubHeading>
		<div class = "artworks">
			<Artwork v-for = "(photography, index) in photographies" :key = "index"
				:title = "photography.title"
				:description = "photography.description"
				:src = "photography.filepath"
			/>
		</div>

		<SubHeading type = "1">イラスト／Illustration</SubHeading>
	</main>
</template>

<script>
	import SubHeading from "@/components/SubHeading/";
	import Artwork from "./components/Artwork";

	import unformattedPhotographies from "./photographies.json";
	import unformattedIllustrations from "./illustrations.json";

	export default {
		name: "ArtworksPage",
		components: { SubHeading, Artwork },

		computed: {
			photographies () {
				const PATH_PREFIX = "/artworks/photography";

				const sanitized = [];
				for (const photography of unformattedPhotographies) {
					sanitized.push(
						Object.assign({}, photography, {
							filepath: `${PATH_PREFIX}/${photography.filepath}`
						})
					);
				}

				return sanitized;
			}
		}
	};
</script>