<script setup>
  import { ref} from 'vue';
let notificaciones=ref(false)
</script>
<template>
  <div class="column full-width items-center" style="gap: 5px; padding: 15px;">
    <q-icon name="fas fa-user" class="  amarillo-palido30-b" color="white" style="border-radius: 100%; border:3px solid #f4ddae; padding:15px" size="sm">
      
      </q-icon>
      <q-icon class="amarillo-palido-t" name="fas fa-bell"  style="position:absolute;top:10px; right:10px; padding:5px" v-on:click="notificaciones=true"/>
        
      
    <div class="row column"> 
        <div class="text-center q-mb-none q-pt-sm text-white enfasis" style="font-size:smaller;">Nelcy Jhoana Garcia</div>
        <p class="text-center q-mb-none primario-t enfasis" style="font-size:x-small;">area</p>
    </div>
  </div>
  <q-dialog v-model="notificaciones" position="left">
      <q-card class="q-pa-md full-height"  style="width: 20vw; border-bottom-left-radius: 0; border-top-left-radius: 0px; border-bottom-right-radius: 15px; border-top-right-radius:15px ;">
      Hola mundo
      </q-card>
    </q-dialog>
</template>