<template>
    <div class="">
        <div class="flex justify-between">
            <h4 class="text-2xl font-semibold">Panel de control</h4>
            <AddForm/>
        </div>
        <hr>
        <div>
            <!-- Tablero de los jugadores -->
            <Team/>

            <div class="grid grid-cols-12">
                <!-- Cancha del terreno de juago -->
                <Alienation class="col-span-7"/>
                <!-- JUgadores en reserva o vanca -->
                <Reservation class="col-span-5"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Team from "./Team.vue";
    import Alienation from "./Alienation.vue";
    import Reservation from "./Reservation.vue";
    import AddForm from "./Addform.vue";

    export default {
        name: "Panel",
        components: {
            Team,
            Alienation,
            Reservation,
            AddForm
        }
    }
</script>