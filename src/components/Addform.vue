<template>
    <div>
        <button
        @click="toggleForm" 
        class="bg-indigo-500 px-2 py-1 rounded-md text-xs font-semibold shadow-md text-gray-100 hover:bg-indigo-700 hover:text-white focus:outline-none">
            Nuevo jugador
        </button>
    
        <!-- Modal Form -->

        <div class="bg-gray-900 bg-opacity-70 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center" v-if="showForm">
            <div class="bg-gray-50 rounded-md p-5 shadow-lg">
                <form method="post" 
                class="text-gray-800 text-base font-semibold" 
                v-on:submit.prevent="addNewPlayer()">
                    <h5 class="mb-3">Registrar nuevo jugador</h5>
                    <hr>
                    <div class="w-full">
                        <label for="name">Nombre:</label>
                        <input type="text" name="name" placeholder="Nombre del jugador"
                        class="w-full border border-indigo-400 rounded-sm px-2 py-1 placeholder-gray-500"
                        id="name"
                        v-model="player.name">
                    </div>

                    <div>
                        <label for="avatar">Avatar</label>
                        <input type="url" name="avatar" placeholder="Ingrese la url de su avatar"
                        class="w-full border border-indigo-400 rounded-sm px-2 py-1 placeholder-gray-500"
                        id="avatar"
                        v-model="player.url">
                    </div>
                    
                    <button type="button" 
                    @click="toggleForm"
                    class="mt-3 mr-2 px-3 py-1 border-2 border-gray-400 rounded-md text-gray-600 font-semibold shadow-md hover:bg-gray-500 hover:text-white hover:border-gray-500">
                        CANCELAR
                    </button>
                    <button type="submit" class="mt-3 px-3 py-1 rounded-md text-white font-semibold shadow-md bg-indigo-500 hover:bg-indigo-800">Registrar</button>
                </form>
            </div>
        </div>
    
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
        name: "Form",
        data() {
            return {
                showForm: false,
                player: {
                    name: '',
                    url: ''
                }
            }
        },

        computed: {
            //Obtenemos los datos desde la tienda de Vuex
            ...Vuex.mapState(["integrantes"]),
        },

        methods: {
            toggleForm() {
                this.showForm = !this.showForm;
            },

            addNewPlayer(){
                this.integrantes.push({
                    name: this.player.name,
                    url: this.player.url,
                });

                console.log(this.player);
                this.toggleForm();
                this.player.name = "";
                this.player.url = "";
            }

        }
}
</script>