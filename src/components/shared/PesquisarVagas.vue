<template>
	<div class="h-100 p-5 bg-light border rounded-3">
		<h3>Pesquisar Vagas</h3>
		<div class="row">
			<div class="col">
				<div class="form-group">
					<label for="">Título Da Vaga</label>
					<input
						type="text"
						class="form-control"
						placeholder="Pesquise por palavras chaves, por ex. 'PHP', 'Pleno', 'Analista'"
						v-model="tituloFiltrado"
					/>
					<small class="form-text text-muted"
						>Informe Palavras que estejam relacionadas com a
						vaga</small
					>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<button
					class="btn btn-outline-dark mt-2"
					@click="handleFiltro(tituloFiltrado)"
				>
					Buscar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PesquisarVagas",
		data() {
			return {
				tituloFiltrado: ""
			};
		},
		methods: {
			handleFiltro(title) {
				this.emitter.emit("vagaFiltrada", title);
			}
		},

		watch: {
			tituloFiltrado(newValue) {
				if (!newValue) {
					this.emitter.emit("vagaFiltrada", newValue);
				}
			}
		}
	};
</script>

<style></style>
