<template>
	<div>
		<vagas-favoritas />
		<topo @navegar="navegarPara($event)" />
		<alerta v-if="exibirAlerta">

			<template v-slot:titulo>
				<h3>Sucesso!</h3>
			</template>

			<p>Vaga Favoritada ^^ </p>

		</alerta>
		<conteudo :conteudo="view" />
	</div>
</template>
<script>
	import Conteudo from "@/components/layouts/ConteudoPadrao.vue";
	import Topo from "@/components/layouts/Topo.vue";
	import VagasFavoritas from "./components/shared/VagasFavoritas.vue";
	import Alerta from "./components/shared/Alerta.vue";

	export default {
		name: "App",
		components: {
			Conteudo,
			Topo,
			VagasFavoritas,
			Alerta
		},
		data() {
			return {
				view: "Home",
				exibirAlerta: false
			};
		},
		methods: {
			desmontarComponente() {
				this.visibilidade = false;
			},
			navegarPara(view) {
				this.view = view;
			}
		},
		mounted() {
			this.emitter.on("alerta", () => {
				this.exibirAlerta = true;

				setTimeout(() => {
					this.exibirAlerta = false;
				}, 2500);
			});
		}
	};
</script>

<style module></style>
