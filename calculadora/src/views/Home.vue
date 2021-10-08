<template>
  <v-container>
    <v-row>
      <v-col>
        <calculadora-basica/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          elevation="6"
          @click="paso1"
        >About</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CalculadoraBasica from '../components/CalculadoraBasica.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CalculadoraBasica
  },
  methods: {
    paso1(){
      console.log("Clic en boton about")
      this.$router.push("/about");
    }
  }
}
</script>
