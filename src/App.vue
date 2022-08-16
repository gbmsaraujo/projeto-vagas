<template>
	<div>
		<topo />
		<conteudo v-if="visibilidade">
			<h3>Conteúdo</h3>
		</conteudo>

		<button @click="desmontarComponente()">
			Desmontar Componente Conteudo
		</button>
	</div>
</template>

<script>
	import Conteudo from "@/components/layouts/ConteudoPadrao.vue";
	import Topo from "@/components/layouts/Topo.vue";

	export default {
		name: "App",
		components: {
			Conteudo,
			Topo
		},
		data() {
			return {
				visibilidade: true
			};
		},
		methods: {
			desmontarComponente() {
				this.visibilidade = false;
			}
		}
	};
</script>

<style module></style>
