<script setup>
import { useMenuStore } from '../../../stores/menu';
import { ref } from 'vue';
import BotonMenu from '../../../components/Menu/BotonMenu.vue';

const menu=useMenuStore()

//Indicadores de menu
let objscroll=ref(null)
function checkCaret(info){
    let caret=document.getElementsByClassName('selector')
    if(info.verticalPercentage===0){
        caret[0].classList.remove('scroll-menut')
    }
    else if(info.verticalPercentage===1){
        caret[1].classList.remove('scroll-menub')
    }
    else{
        caret[0].classList.add('scroll-menut')
        caret[1].classList.add('scroll-menub')
    }
    
}
</script>
<template>
    <div class="column  full-height q-pb-md" style="gap:10px; padding-left:10px; padding-right:10px">
        
        <q-separator  class="gris-oscuro-b selector scroll-menut q-pl-md" size="2px"/>
        <q-scroll-area ref="objscroll" class=" col row mascara-scroll " @scroll="checkCaret" :bar-style="{opacity:0,width:'1px'}" :thumb-style="{opacity:0, width:'0px'}" >
            <template v-for="(item,index) in menu.items">
                <boton-menu :titulo="item.titulo" :icono="item.icono" :subitems="item.subItems" ></boton-menu>
            </template>
            
            
                  
        </q-scroll-area>
        <q-separator  class="gris-oscuro-b selector scroll-menub" size="2px"/>
        <q-btn size="sm" color="primary" text-color="black" class="text-bold q-pa-xs q-mt-sm q-mb-sm">Cerrar Sesion</q-btn>
    </div>
</template>