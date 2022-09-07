<template>
	<div>
		<vagas-favoritas />
		<topo @navegar="navegarPara($event)" />
		<conteudo :conteudo="view" />
	</div>
</template>
<script>
	import Conteudo from "@/components/layouts/ConteudoPadrao.vue";
	import Topo from "@/components/layouts/Topo.vue";
	import VagasFavoritas from "./components/shared/VagasFavoritas.vue";

	export default {
		name: "App",
		components: {
			Conteudo,
			Topo,
			VagasFavoritas
		},
		data() {
			return {
				view: "Home"
			};
		},
		methods: {
			desmontarComponente() {
				this.visibilidade = false;
			},
			navegarPara(view) {
				this.view = view;
			}
		}
	};
</script>

<style module></style>
