<template>
	<div>
		<div class="alert alert-success" role="alert">
			<slot name="titulo">
        <h3>Título da Mensagem de Feedback</h3>
      </slot>
      <hr>
      <slot>
        <p>Descrição do Feedback</p>
      </slot>
		</div>
	</div>
</template>

