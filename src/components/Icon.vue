<template>
	<I :Class = "classes" :style = "style">{{ name }}</I>
</template>

<style lang = "scss" scoped>
	I { background: center / contain no-repeat }
</style>

<script>
	export default {
		props: {
			font: {
				type: String,
				default: "material-icons",

				validator (value) {
					return [
						"material-icons",
						"material-icons-extended"
					].includes(value);
				}
			},

			name: {
				type: String,
				default: null
			},

			src: {
				type: String,
				default: null
			}
		},

		computed: {
			classes () {
				if (this.src) return [];
				else return [ this.font ];
			},

			style () {
				if (this.src) return { "background-image": `url('${this.src}')` };
				else return {};
			}
		}
	};
</script>