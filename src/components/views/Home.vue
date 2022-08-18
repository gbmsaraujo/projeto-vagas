<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<pesquisar-vagas />
			</div>
		</div>

		<div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
			<div class="col">
				<vaga v-bind="vaga" />
			</div>
		</div>

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
	import PesquisarVagas from "../shared/PesquisarVagas.vue";
	import Vaga from "../shared/Vaga.vue";

	export default {
		name: "Home",
		components: {
			PesquisarVagas,
			Indicador,
			Vaga
		},

		data: () => ({
			usuariosOnline: 0,
			vagas: []
		}),

		methods: {
			getUsuariosOnline() {
				this.usuariosOnline = Math.floor(Math.random() * 101); //entre zero e 100
			},
			insertDataPublicacao(arrVagas, date) {
				return arrVagas.map((vaga) => {
					if (!vaga.publicacao) {
						return {
							...vaga,
							publicacao: date.toLocaleString("pt-BR")
						};
					}
					return vaga;
				});
			}
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
