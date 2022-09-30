<script setup>
    import { ref } from 'vue';
   let control=ref(false)
    let btn2=ref(false)
    function close () {
      btn2.value=false
      control.value=false
    }
    </script>
<template>
    
    <q-scroll-observer @scroll="close" />
    <q-btn :ripple="false"  flat class="amarillo-palido-t row  q-mb-md q-pa-sm justify-center items-center" style="min-height: 100px; border-radius: 10px;" :loading="btn2" v-on:click="btn2=true">
      <template v-slot:loading class="">
        <q-card class="col row bg-primary q-pa-sm  justify-center items-center" style="min-height: 100px; border-radius: 10px;">
            <q-icon name="fas fa-cogs" color="black" size="sm"/>
            <div class="text-bold text-center enfasis xxs text-black" style=" line-height: 13px;">Parametrizacion Sistema</div>
        </q-card>
      </template>
       <q-icon name="fas fa-cogs" size="sm"/>
       <div class="text-bold text-center enfasis xxs" style=" line-height: 13px;">Parametrizacion Sistema</div>
       <q-menu
          v-model="control"
          :offset="[-120, -100]"
          class="q-pa-md menu-tail submenu"
          @hide="close"
          transition-show="jump-right"
          transition-hide="jump-left"
          v-on:mouseleave="control=false"
          style="border-radius: 10px; text-transform: uppercase;"
        >
        <q-expansion-item
        group="somegroup"
        label="Parametros del sistema"
        dense
        dense-toggle
        header-class="text-white enfasis"
        header-style="font-size:x-small"
        expand-icon-class="text-white"
        
        
        >
        <div class="row q-ml-sm q-mr-sm q-pa-sm amarillo-oscuro30-b subitems" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; max-width:fit-content; gap:5px">
            <q-btn :ripple="false" align="left" flat dense class="full-width q-pl-sm enfasis" size="sm" label="texto boton 1" color="white"></q-btn>
            <q-btn :ripple="false" align="left" flat dense class="full-width q-pl-sm enfasis" size="sm" label="texto boton 1" color="white"></q-btn>
            <q-btn :ripple="false" align="left" flat dense class="full-width q-pl-sm enfasis xs" size="sm" label="texto boton 1" color="white"></q-btn>
        </div>
        </q-expansion-item>
        </q-menu>
    </q-btn>

</template>