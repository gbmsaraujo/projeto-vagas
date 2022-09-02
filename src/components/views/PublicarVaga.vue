<template>
	<div class="container py-4">
		<div class="row">
			<div class="col">
				<h4>Apresente a sua vaga para milhares de profissionais</h4>
			</div>
		</div>

		<div class="row mt-3">
			<div class="col">
				<label class="form-label">Título da vaga</label>
				<input type="text" class="form-control" v-model="titulo" />
				<div class="form-text">Por Exemplo: Programador Javascript</div>
			</div>
		</div>

		<div class="row mt-3">
			<div class="col">
				<label class="form-label">Descrição</label>
				<textarea class="form-control" v-model="descricao"></textarea>
				<div class="form-text">Informe os Detalhes da Vaga</div>
			</div>
		</div>

		<div class="row mt-3">
			<div class="col">
				<label class="form-label">Salário</label>
				<input
					type="number"
					class="form-control"
					min="0"
					max="1000000"
					v-model="salario"
				/>
				<div class="form-text">Informe o Salário</div>
			</div>

			<div class="col">
				<label class="form-label">Modalidade</label>
				<select class="form-select" v-model="modalidade">
					<option disabled value="">Selecione</option>
					<option value="1">Home-Office</option>
					<option value="2">Presencial</option>
				</select>
				<div class="form-text">Informe o Regime de Trabalho</div>
			</div>
			<div class="col">
				<label class="form-label">Tipo</label>
				<select class="form-select" v-model="tipo">
					<option disabled value="">Selecione</option>
					<option value="1">CLT</option>
					<option value="2">PJ</option>
				</select>
				<div class="form-text">Informe o tipo de contratação</div>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col d-flex flex-column align-items-center">
				<button
					type="submit"
					class="btn btn-primary"
					@click="salvarVaga"
				>
					Cadastrar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PublicarVaga",
		data: () => ({
			titulo: "",
			descricao: "",
			salario: "",
			modalidade: "",
			tipo: ""
		}),
		methods: {
			salvarVaga() {
				let vagas = JSON.parse(localStorage.getItem("vagas"));

				if (!vagas) vagas = [];

				vagas.push({
					titulo: this.titulo,
					descricao: this.descricao,
					salario: this.salario,
					modalidade: this.modalidade,
					tipo: this.tipo,
					publicacao: `${this.getDataPublicacao}`
				});

				localStorage.setItem("vagas", JSON.stringify(vagas));

				alert("Vaga Cadastrada Com Sucesso");

			}
		},
		computed: {
			getDataPublicacao() {
				const date = new Date();
				return date.toLocaleDateString("pt-BR");
			}
		}
	};
</script>

<style></style>
