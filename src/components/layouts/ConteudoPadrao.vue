<template>
	<div>
		<button @click="conteudo = 'home'">Home</button>
		<button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
		<!-- <home></home>
		<publicar-vaga></publicar-vaga> -->

		<!-- Renderizar de forma dinâmica Home e Publicar Vaga (views) -->
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
		components: {
			Home,
			PublicarVaga
		},
		data() {
			return {
				titulo: "Componente Conteudo",
				conteudo: "home"
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
