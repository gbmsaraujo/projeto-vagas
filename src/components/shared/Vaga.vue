<template>
	<div class="card">
		<div class="card-header bg-dark text-white">{{ titulo }}</div>
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
				validator(p) {
					if (p.length < 6) return false;
					return true;
				}
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
		computed: {
			getModalidade() {
				return this.modalidade === "1" ? "Home-Office" : "Presencial";
			},
			getTipo() {
				return this.tipo === "1" ? "CLT" : "PJ";
			}
		}
	};
</script>

<style></style>
