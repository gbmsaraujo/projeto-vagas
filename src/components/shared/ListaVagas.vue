<template>
	<div class="row mt-5" v-for="(vaga, index) in arrayDeVagas" :key="index">
		<div class="col">
			<vaga v-bind="vaga" />
		</div>
	</div>
</template>

<script>
	import Vaga from "../shared/Vaga.vue";
	export default {
		name: "ListaVagas",
		components: {
			Vaga
		},
		props: {
			listaDeVagas: {
				type: Array
			}
		},

		data() {
			return {
				vagasFiltradas: [],
				filtro: false
			};
		},

		methods: {
			filtrarVagas(vagaFiltrada) {
				this.filtro = true;

				const vagasFiltradas = this.listaDeVagas.reduce(
					(accVagas, vaga) => {
						if (
							vaga.titulo
								.toLowerCase()
								.includes(vagaFiltrada.toLowerCase())
						) {
							accVagas.push(vaga);
						}

            return accVagas
					},
					[]
				);

				this.vagasFiltradas = vagasFiltradas;
			}
		},

		computed: {
			arrayDeVagas() {
				return this.filtro ? this.vagasFiltradas : this.listaDeVagas;
			}
		},

		mounted() {
			this.emitter.on("vagaFiltrada", (filtroEvent) => {
				filtroEvent
					? this.filtrarVagas(filtroEvent)
					: (this.filtro = false);
			});
		}
	};
</script>
