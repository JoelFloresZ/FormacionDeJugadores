<template>
  <div class="my-5">
    <p class="text-base font-semibold">{{ titleTeam }}</p>
    <div class="my-2">
      <!-- Lista de los jugadores -->
      <ul class="flex" v-if="integrantes.length > 0">
        <!-- 
          Recorremos la lista de los interantes para sacar cada jugador he ir mostrando en el tablero
         -->
        <li
          class="w-14 h-14 p-2 text-sm bg-gray-300 cursor-pointer rounded-full mr-2 border hover:border-green-600"
          v-for="(persona, index) in integrantes"
          :key="persona.id"
        >
          <!-- Mostramos la foto del jugador en el tablero -->
        <div class="relative">
            <span class="absolute font-semibold uppercase -top-4 -ml-4 
            bg-red-300 w-5 h-5 text-gray-700 text-center p-1 text-xs hover:cursor-pointer 
            rounded-full hover:text-white hover:bg-red-600"
            @click="removePlayer(index)">X</span>
            <img class="w-10 h-10" :src="persona.url" :alt="persona.name"
             @click="showModalChoosePosition(persona, index)" />
        </div>
        </li>
      </ul>

      <div v-else class="bg-yellow-200 text-gray-700 rounded-md px-4 py-1 border-2 border-yellow-500">
        <h4 class="font-semibold text-base">No tiene un equipo aún</h4>
      </div>

      <!-- Modal -->
      <div
        :class="{ hidden: showModal }"
        class="w-full h-full absolute top-0 left-0 bg-gray-900 flex justify-center items-center bg-opacity-75"
        id="modal"
      >
        <div class="w-1/3 px-4 py-5 bg-white shadow-lg rounded-md" id="window">
          <div id="header">
            <!-- Header modal -->
            <div class="flex justify-between">
              <p class="text-base font-semibold">Posición del jugador</p>
              <!-- Button close modal -->
              <button
                class="bg-red-300 px-2 py-1 text-xs rounded-md text-gray-900 mb-1 hover:bg-red-500 focus:outline-none"
                @click="showModalChoosePosition()"
              >
                X
              </button>
            </div>
            <hr />
            <!-- Message de warning -->
            <div
              class="w-full bg-green-200 border-2 border-green-800 py-1 text-sm text-center font-semibold rounded-md"
              v-if="showMessageError"
              @click="toggleMessageError"
            >
              {{ messageError }}
            </div>
            <!-- Opciones para seleccionar la posicion del jugador -->
            <div class="mt-3">
              <button
                class="bg-indigo-500 px-2 py-1 mr-2 text-xs rounded-md text-white font-semibold hover:bg-indigo-600"
                @click="
                  asignarJugadorCancha(dataJugador, dataJugador.id, 'portero')
                "
              >
                Portero
              </button>
              <button
                class="bg-green-500 px-2 py-1 mr-2 text-xs rounded-md text-white font-semibold hover:bg-green-600"
                @click="
                  asignarJugadorCancha(dataJugador, dataJugador.id, 'defensa')
                "
              >
                Defensa
              </button>
              <button
                class="bg-yellow-500 px-2 py-1 mr-2 text-xs rounded-md text-white font-semibold hover:bg-yellow-500"
                @click="
                  asignarJugadorCancha(dataJugador, dataJugador.id, 'central')
                "
              >
                Medio
              </button>
              <button
                class="bg-red-500 px-2 py-1 text-xs rounded-md text-white font-semibold hover:bg-red-600"
                @click="
                  asignarJugadorCancha(dataJugador, dataJugador.id, 'delantero')
                "
              >
                Delantero
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "Team",
  data() {
    return {
      showModal: true, //Muestra y oculat el modal (Toggle)
      dataJugador: [], //Datos del gudar que jugara en la cancha,
      titleTeam: "Lista de los jugadores", //Titulo del encabezado
      messageError: "", //Mensajes de advertencia por defecto esta vacio
      showMessageError: false,
    };
  },
  computed: {
    //Obtenemos los datos desde la tienda de Vuex
    ...Vuex.mapState(["integrantes", "alineacion"]),
  },
  created() {},

  methods: {
    /* 
      Metodo asignarJugadorCancha() nos asigna a los jugadores a sus pociones,
      El parametro jugador es un objeto que contine los datos de

      jugador {
        name: "joel",
        url : "https://avatars.dicebear.com/4.5/api/male/.svg"
      }

      index : la posicion en la que esta el jugador en el arreglo integrantes para.

      posicion: indetificamos la posicion que estara el jugador
    */
    asignarJugadorCancha(jugador, index, posicion) {
      /* Contador de los jugadores que se encuntra en el terreno de juego */
      let portero = this.alineacion.portero.length;
      let defensas = this.alineacion.defensas.length;
      let centrales = this.alineacion.medios.length;
      let delanteros = this.alineacion.delanteros.length;

      let totalDeJUgadoresEnElTerreno = 0;

      totalDeJUgadoresEnElTerreno = portero + defensas + centrales + delanteros;

      if (totalDeJUgadoresEnElTerreno <= 10) {
        //Asiganamos jugar a la cancha
      /* Con la condicon, validamos a cada jugador para asignar su repecto posicion  */
        if (posicion == "portero") {
          if (portero >= 1) {
            this.messageError =
              "Ya hay un jugador que ocupa el lugar en el campo de terreno";
            this.showMessageError = !this.showMessageError;
          } else {
            this.alineacion.portero.push({
              jugador: jugador.name,
              url: jugador.url,
              index: index,
            });

            this.removeJugadorIntegrantes(index);
          }
        } else if (posicion == "defensa") {
          if (defensas <= 7) {
            this.alineacion.defensas.push({
              jugador: jugador.name,
              url: jugador.url,
              index: index,
            });

            this.removeJugadorIntegrantes(index);
          } else {
            this.messageError =
              "La cantidad de jugadores como defensas ya esta completo, no puede asignar mas";
            this.showMessageError = !this.showMessageError;
          }
        } else if (posicion == "central") {
          if (centrales <= 8) {
            this.alineacion.medios.push({
              jugador: jugador.name,
              url: jugador.url,
              index: index,
            });

            this.removeJugadorIntegrantes(index);
          } else {
            this.messageError =
              "La cantidad de jugadores como centrales ya esta completo, no puede asignar mas";
            this.showMessageError = !this.showMessageError;
          }
        } else if (posicion == "delantero") {
          if (delanteros <= 8) {
            this.alineacion.delanteros.push({
              jugador: jugador.name,
              url: jugador.url,
              index: index,
            });

            this.removeJugadorIntegrantes(index);
          } else {
            this.messageError =
              "La cantidad de jugadores como delanteros ya esta completo, no puede asignar mas";
            this.showMessageError = !this.showMessageError;
          }
        }
      } else {
        this.titleTeam = "Jugadores de reserva";

        this.messageError ="Ya no puede asignar mas jugadores al terreno.";
        this.showMessageError = !this.showMessageError;
      }
    },

    removeJugadorIntegrantes(index) {
      //Removemos jugar de la banca
      this.integrantes.splice(index, 1);
      //console.log(this.integrantes);
      this.showModal = !this.showModal;
    },

    //Metodo  showModalChoosePosition() nos sirve para mostrar el modal y asignar el jugador a una posicion
    /* 
      Parametro persona es un objeto 
    */
    showModalChoosePosition(persona = {}, index = 0) {
      //console.log(persona, index);
      this.showModal = !this.showModal;
      this.dataJugador = {
        name: persona.name,
        url: persona.url,
        id: index,
      };
    },

    toggleMessageError() {
      this.showMessageError = !this.showMessageError;
    },

    removePlayer(index) {
      this.integrantes.splice(index, 1);
    }
  },
};
</script>
