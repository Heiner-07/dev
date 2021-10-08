<template>
<div>
    <h1>Calculadora Basica</h1>
    <input type="number" v-model="n1">
    <input type="number" v-model="n2">
    <button @click="suma(n1,n2)">Sumar</button>
    <button @click="resta(n1,n2)">Restar</button>
    <span>{{ resultado }}</span>
</div>
</template>

<script>
export default {
    name: "CalculadoraBasica",
    data:()=>{
        return{
            n1: null, 
            n2: null, 
            resultado: ""
        }
    },
    methods: {
        suma(n1,n2){
            this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
        },
        resta(n1,n2){
            this.resultado = parseFloat(this.n1) - parseFloat(this.n2);
        }
    },
}
</script>

<style>

</style>