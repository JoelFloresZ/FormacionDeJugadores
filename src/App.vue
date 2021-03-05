<template>
  <header class="w-full bg-gray-700">
    <h2 class="text-white font-semibold px-10 py-3 shadow-lg">{{title}}</h2> 
  </header>
  <!-- Panel -->
  <Panel class="w-11/12 mx-auto mt-5 border-2 border-gray-200 p-3"/>
</template>

<script>
import Panel from "./components/Panel.vue";

export default {
  name: "App",
  data() {
    return {
      title: "FormaciónDeJugadores"
    }
  },
  components: {
    Panel
  }
};
</script>

