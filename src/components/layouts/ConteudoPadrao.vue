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
				teste: "O componente foi criado",
				titulo: "Componente Conteudo",
				conteudo: "home"
			};
		},
		methods: {
			atualizarComponente() {
				this.titulo += "*";
			}
		},

		created() {
			console.log("criad o");
		}
		/* beforeCreate() {
			console.log("Antes de criar", this.teste);

		},


		beforeMount() {
			console.log("Antes de montar");
		},
		mounted() {
			console.log("Montado");
		},
		beforeUpdate() {
				console.log('Antes de Atualizar: ')
		},
		updated() {
				console.log('atualizado' )
		},

		beforeUnmount() {
				console.log('antes de destruir')
		},
		unmounted() {
				console.log('destruído')
		}, */
		/*
		errorCaptured(){
				console.log('Erro Capturado')
		},
		renderTracked() {
				console.log('Re-renderização Rastreada')
		},
		renderTriggered() {
				console.log('R-renderização ativada')
		},
		activated() {
				console.log('Componente ativado')
		},
		deactivated() {
				console.log('Componente desativado')
		}, */
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
