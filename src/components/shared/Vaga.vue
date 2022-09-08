<template>
	<div class="card">
		<div class="card-header bg-dark text-white">
			<div class="row">
				<div class="col d-flex justify-content-between">
					<div>{{ titulo }}</div>
					<div>
						<div class="form-check form-switch">
							<input
								class="form-check-input"
								type="checkbox"
								v-model="favoritada"
							/>
							<label class="form-check-label">Favoritar</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card-body">
			<p>{{ descricao }}</p>
		</div>
		<div class="card-footer">
			<small class="text-muted">
				Salário: R$ {{ salario }}| Modalidade: {{ getModalidade }} |
				Tipo: {{ getTipo }} | Publicação: {{ publicacao }}
			</small>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Vaga",
		props: {
			titulo: {
				type: String,
				required: true,
				/* validator(p) {
					if (p.length < 6) return false;
					return true;
				} */
			},
			descricao: {
				type: String,
				required: true
			},
			salario: {
				type: [String, Number],
				required: true
			},
			modalidade: {
				type: String,
				required: true
			},
			tipo: {
				type: String,
				required: true
			},
			publicacao: {
				type: String,
				required: true
			}
		},
		data: () => ({
				favoritada: false
			}),

		computed: {
			getModalidade() {
				return this.modalidade === "1" ? "Home-Office" : "Presencial";
			},
			getTipo() {
				return this.tipo === "1" ? "CLT" : "PJ";
			}
		},
		methods:{
			emitirAlerta(favoritada){
				if(favoritada){
					console.log(this.favoritada)
					this.emitter.emit('alerta')
				}
			}
		},
		watch:{
			favoritada(newValue){
				newValue ? this.emitter.emit('favoritarVaga', this.titulo) : this.emitter.emit('desfavoritarVaga', this.titulo)

				this.emitirAlerta(newValue)
			}
		}
	};
</script>

<style></style>
