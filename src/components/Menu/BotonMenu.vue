<script setup>
  import { ref } from 'vue';
  let control=ref(false)
  let btn2=ref(false)
  function close () {
      btn2.value=false
      control.value=false
  }
  const props = defineProps({
  titulo: String,
  icono:String,
  subitems:Array,
  })
</script>
<template>
    
    <q-scroll-observer @scroll="close" />
    <q-btn :ripple="false"  flat class=" amarillo-palido-t q-mb-md q-pa-sm full-width items-center" style="min-height:100px; border-radius: 10px;" :loading="btn2" v-on:click="btn2=true">
      <template v-slot:loading class="">
        <q-card class="col row bg-primary q-pa-sm items-center" style="min-height: 100px; border-radius: 10px;">
            <q-icon class="col-12" :name="icono" color="black" size="sm"/>
            <div class="row text-center text-bold enfasis xxs text-black text-center" style=" width:100%;line-height: 13px;justify-content: center;">{{titulo}}</div>
        </q-card>
      </template>
       <q-icon class="col-12" :name="icono" size="sm" />
       <div class="row text-center text-bold text-center enfasis xxs justify-center" style="line-height: 13px;">{{titulo}}</div>
       <q-menu
          v-model="control"
          :offset="[-120, -100]"
          class="q-pa-md menu-tail submenu column"
          @hide="close"
          transition-show="jump-right"
          transition-hide="jump-left"
          v-on:mouseleave="control=false"
          style="border-radius: 10px; text-transform: uppercase; gap:5px"
        >
        <template v-for="sub in subitems">
        <q-expansion-item v-if="sub.elementos" 
        group="somegroup"
        :label="sub.titulo"
        dense
        dense-toggle
        header-class="text-white enfasis"
        header-style="font-size:x-small"
        expand-icon-class="text-white"
        
        >
        <div class=" q-ml-sm q-mr-sm q-pa-sm amarillo-oscuro30-b subitems" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; max-width:fit-content; gap:5px">
            <q-btn v-for="item in sub.elementos" :ripple="false" align="left" flat dense class="full-width q-pl-sm enfasis" size="sm" :label="item.titulo" color="white"></q-btn>
            
        </div>
        </q-expansion-item>
        <q-btn class="row full-width" v-else :label="a"></q-btn>

        </template>
        </q-menu>
    </q-btn>

</template>