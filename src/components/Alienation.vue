<template>
  <div class="h-96" id="cancha">
    <div class="w-full h-full">
      <!-- Alineacion del los jugadores -->
      <div class="grid grid-cols-4 h-full">
        <!-- Porteria -->
        <div class="flex items-center">
          <ul>
            <!-- Iteramos los jugadores de la alineacion porteria -->
            <li v-for="(jugador, index) in alineacion.portero" :key="index">
              <!-- Mostramos el avatar del jugador -->
              <img
                class="w-10 h-10 bg-gray-200 p-1 rounded-full border-2 cursor-pointer hover:border-red-500"
                :src="jugador.url"
                :alt="jugador.name"
                @click="sacarJugadorDeLaCancha(index, jugador, 'portero')"
              />
            </li>
          </ul>
        </div>

        <!-- Defensores -->
        <div class="flex items-center">
          <ul>
              <!-- Iteramos los jugadores de la alineacion defensivo -->
            <li
              class="my-6"
              v-for="(jugador, index) in alineacion.defensas"
              :key="index"
            >
              <img
                class="w-10 h-10 bg-gray-200 p-1 rounded-full border-2 cursor-pointer hover:border-red-500"
                :src="jugador.url"
                :alt="jugador.name"
                @click="sacarJugadorDeLaCancha(index, jugador, 'defensa')"
              />

            </li>
          </ul>
        </div>

        <!-- Centrales -->
        <div class="flex items-center">
          <ul>
              <!-- Iteramos los jugadores de la alineacion central -->
            <li
              class="my-10"
              v-for="(jugador, index) in alineacion.medios"
              :key="index"
            >
              <img
                class="w-10 h-10 bg-gray-200 p-1 rounded-full border-2 cursor-pointer hover:border-red-500"
                :src="jugador.url"
                :alt="jugador.name"
                 @click="
                  sacarJugadorDeLaCancha(index, jugador, 'central')
                "
              />
              
            </li>
          </ul>
        </div>

        <!-- Delanteros -->
        <div class="flex items-center">
          <ul>
              <!-- Iteramos los jugadores de la alineacion delantera -->
            <li
              class="my-10"
              v-for="(jugador, index) in alineacion.delanteros"
              :key="index"
            >
              <img
                class="w-10 h-10 bg-gray-200 p-1 rounded-full border-2 cursor-pointer hover:border-red-500"
                :src="jugador.url"
                :alt="jugador.name"
                 @click="
                  sacarJugadorDeLaCancha(index, jugador, 'delantero')
                "
              />
             
            </li>
          </ul>
        </div>

      </div>
      
    </div>
  
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "Alienation",

  computed: {
    ...Vuex.mapState(["alineacion", "integrantes"]),
  },

  methods: {
    /* 
      Metodo sacarJugadorDeLaCancha() nos permite sacar los jugadores del terreno de juego

      index: contines el valor de la posicion del jugador a sacar del terreno
      jugador: Es un objeto de los datos del jugador, contines el nombre y el avatar del jugador
      posicion: Contiene la posicion del jugador y este nos permite saber de donde se debe de sacar el jugador  
    */
    sacarJugadorDeLaCancha(index, jugador, posicion) {
      if (posicion == "portero") {
        this.alineacion.portero.splice(index, 1);
        this.integrantes.push({ name: jugador.name, url: jugador.url });
      } else if (posicion == "defensa") {
        this.alineacion.defensas.splice(index, 1);
         this.integrantes.push({ name: jugador.name, url: jugador.url });
      } else if (posicion == "central") {
        this.alineacion.medios.splice(index, 1);
         this.integrantes.push({ name: jugador.name, url: jugador.url });
      } else if (posicion == "delantero") {
        this.alineacion.delanteros.splice(index, 1);
        this.integrantes.push({ name: jugador.name, url: jugador.url });
      }
    },
  },
};
</script>
