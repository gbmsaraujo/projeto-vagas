<template>
	<div>
		<topo />
		<conteudo>
			<h3>Conteúdo</h3>
		</conteudo>
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
			return {};
		},
		methods: {
			desmontarComponente() {
				this.visibilidade = false;
			}
		}
	};
</script>

<style module></style>
