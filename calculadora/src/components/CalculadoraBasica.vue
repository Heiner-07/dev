<template>
<v-container>
    <v-row>
        <v-col>
            <h1 class="text-center">Calculadora Basica</h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-text-field
                type="number"
                label="Numero 1"
                :rules="rules"
                hide-details="auto"
                v-model="n1"
            ></v-text-field>
        </v-col>
        <v-col>
            <v-text-field
                type="number"
                label="Numero 2"
                :rules="rules"
                hide-details="auto"
                v-model="n2"
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn
                color="primary"
                elevation="13"
                rounded
                @click="suma(n1,n2)"
            >Sumar</v-btn>
        </v-col>
        <v-col>
            <v-btn
            color="primary"
            elevation="13"
            rounded
            @click="resta(n1,n2)"
            >Restar</v-btn>
        </v-col>
        <v-col>
            <v-btn
            color="primary"
            elevation="13"
            rounded
            @click="multiplicacion(n1,n2)"
            >Multiplicar</v-btn>
        </v-col>
        <v-col>
            <v-btn
            color="primary"
            elevation="13"
            rounded
            @click="division(n1,n2)"
            >Dividir</v-btn>
        </v-col>
    </v-row>
    <span>{{ resultado }}</span>
</v-container>
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
        },
        multiplicacion(n1,n2){
            this.resultado = parseFloat(this.n1) * parseFloat(this.n2);
        },
        division(n1,n2){
            this.resultado = parseFloat(this.n1) / parseFloat(this.n2);
        }
    },
}
</script>

<style>

</style>