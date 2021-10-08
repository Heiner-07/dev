<template>
<div>
    <h1>Calculadora Basica</h1>
    <v-text-field
        type="number"
        label="Numero 1"
        :rules="rules"
        hide-details="auto"
        v-model="n1"
    ></v-text-field>
    <v-text-field
        type="number"
        label="Numero 2"
        :rules="rules"
        hide-details="auto"
        v-model="n2"
    ></v-text-field>
    <v-btn
        color="primary"
        elevation="13"
        rounded
        @click="suma(n1,n2)"
    >Sumar</v-btn>
        <v-btn
        color="primary"
        elevation="13"
        rounded
        @click="resta(n1,n2)"
    >Restar</v-btn>
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
            resultado: "",
            rules: [
            value => !!value || 'Requerido.',
            value => (value && value.length >= 3) || 'Min 3 caracteres',
            ],
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