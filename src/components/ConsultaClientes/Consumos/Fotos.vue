<script setup>
import {ref} from 'vue'

let slide=ref(1)

</script>
<template>
    <q-card class="column q-pa-lg full-width submenu" style="border-radius: 10px !important; gap:20px">
        <div class="text-h6 primario-t ">Fotos</div>
        <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
</q-card>
</template>