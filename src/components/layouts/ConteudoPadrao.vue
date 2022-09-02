<template>
	<div>
	<h1>{{titulo}}</h1>
		<keep-alive>
			<component :is="conteudo" />
		</keep-alive>
	</div>
</template>

<script>
	import Home from "../views/Home.vue";
	import PublicarVaga from "../views/PublicarVaga.vue";
	export default {
		name: "Conteudo",
		props: {
			conteudo: {
				type: String,
				required: true,
			}
		},
		components: {
			Home,
			PublicarVaga
		},
		data() {
			return {
				titulo: "Componente Conteudo",
			};
		},
		methods: {}
	};
</script>

<style module>
	.teste-1 {
		background-color: red;
	}
	#teste-2 {
		background-color: yellow;
	}
</style>
