<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<pesquisar-vagas />
			</div>
		</div>

		<lista-vagas :listaDeVagas="vagas" />

		<div class="row mt-5">
			<div class="col-4">
				<indicador
					titulo="Vagas Abertas"
					indicador="25"
					bg="bg-dark"
					color="text-white"
				/>
			</div>
			<div class="col-4">
				<indicador
					titulo="Profissionais Cadastrados"
					indicador="125"
					bg="bg-dark"
					color="text-white"
				/>
			</div>
			<div class="col-4">
				<indicador
					titulo="Visitantes online"
					:indicador="usuariosOnline"
					bg="bg-light"
					color="text-black"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import Indicador from "../shared/Indicador.vue";
	import ListaVagas from "../shared/ListaVagas.vue";
	import PesquisarVagas from "../shared/PesquisarVagas.vue";

	export default {
		name: "Home",
		components: {
			PesquisarVagas,
			Indicador,
			ListaVagas
		},

		data: () => ({
			usuariosOnline: 0,
			vagas: [],
		}),

		methods: {
			getUsuariosOnline() {
				this.usuariosOnline = Math.floor(Math.random() * 101); //entre zero e 100
			},
		},

		created() {
			setInterval(this.getUsuariosOnline, 3000);
		},

		activated() {
			let vagas = JSON.parse(localStorage.getItem("vagas"));
			this.vagas = vagas;
		}
	};
</script>

<style scoped>
	h1 {
		color: rgb(41, 114, 114);
	}
</style>
