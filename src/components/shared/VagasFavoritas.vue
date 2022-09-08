<template>
	<div>
		<div class="btn-vagas-favoritas">
			<button
				class="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			>
				Vagas Favoritas
			</button>
		</div>
		<div
			class="offcanvas offcanvas-end"
			tabindex="-1"
			id="offcanvasRight"
			aria-labelledby="offcanvasRightLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasRightLabel">
					Vagas Favoritadas
				</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="list-group" v-for="(vaga, index) in vagasFavoritadas" :key="index">
					<li class="list-group-item mt-2">{{vaga}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "VagasFavoritas",
		data: () => ({
			vagasFavoritadas: []
		}),
		mounted() {
			this.emitter.on("favoritarVaga", (titulo) => {
				this.vagasFavoritadas.push(titulo);
			});

			this.emitter.on("desfavoritarVaga", (titulo) => {
				let indexOf = this.vagasFavoritadas.indexOf(titulo)
				if(indexOf !== -1){
					this.vagasFavoritadas.splice(indexOf,1);
				}
			});

		}
	};
</script>

<style scoped>
	.btn-vagas-favoritas {
		position: absolute;
		z-index: 1;
		top: 10px;
		right: 100px;
	};
	.text-size-canvas{
		font-size: 20px;
	}
</style>
