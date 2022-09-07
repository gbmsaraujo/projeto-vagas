<template>
	<div>
		<h2>{{tituloToast}}</h2>
		<span>{{descricaoToast}}</span>
	</div>
</template>

<script>
export default {
  name:"Toast Message",
	props:{
		tituloToast:{
			type:String,
			required: true
		},
		descricaoToast:{
			type:String,
			required: true
		},
	}
}
</script>
