<template>
	<main>
		<Heading>トップページ</Heading>

		<article>
			<Paragraph break = "4">
				当サイトに足をお運び頂き、誠にありがとうございます。<br>
				1人でも多くの方々を楽しませられるようなコンテンツの充実を図りたいな、と思います。
			</Paragraph>

			<Paragraph break = "2">
				<b>嘘です。(前言撤回)</b><br>
				自己満足の為に建てたサイトということもあり、色々偏っているかと思います。<br>
				まぁこんなサイトでも楽しんで頂けるととっても喜びます( ˙꒳​˙ )←
			</Paragraph>

			<Paragraph>
				では、どうぞごゆっくり。
			</Paragraph>
		</article>
	</main>
</template>

<script>
	import Heading from "@/components/Heading/";
	import Paragraph from "@/components/Typography/Paragraph.vue";

	export default {
		name: "HomePage",
		components: { Heading, Paragraph }
	};
</script>