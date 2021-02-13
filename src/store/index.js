import { createStore } from "vuex";


export default createStore({
  state: {
    // Contiene la lista de los jugadores del equipo
    /* 
      name: "Nombre del jugador",
      url : "avatar del jugador"
    */
    integrantes: [
      {
        name: "JF", 
        url : "https://avatars.dicebear.com/4.5/api/male/.svg"
      },
      {
        name: "LF",
        url : "https://avatars.dicebear.com/4.5/api/avataaars/.svg"
      },
      {
        name: "CR7",
        url: "https://avatars.dicebear.com/4.5/api/avataaars/%20%20%20.svg"  
      },
      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/%20.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/api/avataaars/%20%20%20%20%20%20.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/%20h.svg"
      },
      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/%20y.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/%20yuuuuuuuu.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/bottts/%20yuuuuuuuuuuuuu.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/avataaars/%20yuuuuuuuuuuuuuuuuuu.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/avataaars/%20yuuuuuuuuuuuuuuummmuuu.svg"
      },

      {
        name: "LM",
        url: "https://avatars.dicebear.com/4.5/api/avataaars/%20yuuuu8jdudn.svg"
      },

      {
        name: "PL",
        url: "https://avatars.dicebear.com/4.5/api/avataaars/%20yuuuur8jdudn.svg"
      }



    ],
    /* 
      Alineacion del quipo
      Contines las alineacion y datos de cada jugador
    */
    alineacion: 
      {
        portero : [],
        defensas: [],
        medios: [],
        delanteros: [],
      },
    
    reserva: [],
  },
  mutations: {
    /* tituloPregunta(state, pregunta_titulo){
      state.titulo_pregunta = pregunta_titulo;
    }, */
  },
  actions: {
    
  },
  modules: {}
});
