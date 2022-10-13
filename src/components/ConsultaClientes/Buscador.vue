<script setup>
import { ref } from 'vue'
let menu_consulta=ref(false)
    let text1=ref()
    let chips=ref([])
    function agregaChip(opcion,termino){
       
        menu_consulta.value=false
        chips.value.push({
            opcion:opcion,
            termino:termino,
            chip:ref(true)
        })
    
    }
    function acortarTexto(texto){
        let res=String
        if(texto.length>10){
            res=texto.substring(0,10)
            res+='...'
        }
        else{
            res=texto
        }
        return res
    }
    function quitarChip(id){
        chips.value.splice(id,1)
    }
</script>
<template>
<div class=" row bg-white" style="border-radius: 30px; min-width: 65vw;">
                            <div class="col row items-center q-pl-sm">
                            <template v-for="(ch,id) in chips">
                                <q-chip removable v-model="ch['chip']" @remove="quitarChip(id)" class="grupo-formulario-b" text-color="white" >
                                   {{ch.opcion}} : {{acortarTexto(ch.termino)}}
                                </q-chip>
                            </template>
                                
                                <q-btn v-if="chips.length<4" icon="fas fa-plus-circle" flat class="primario-t q-pa-none q-pr-sm" size="md" >
                                    <q-menu class="q-pa-sm submenu" anchor="top right" self="top left" style="border-radius: 10px;" v-model="menu_consulta"  >
                                        <q-input outlined v-model="text1" label="Texto a buscar" class="bg-white" dense style="border-radius: 5px;" :rules="[ val => val.length >= 3 || '3 caracteres minimo' ]" />
                                        <q-scroll-area  style="height: 150px; ">
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 1" style="margin-bottom: 5px;" v-on:click="agregaChip('OP1',text1)"></q-btn>
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 2" style="margin-bottom: 5px;"></q-btn>
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 3" style="margin-bottom: 5px;"></q-btn>
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 4" style="margin-bottom: 5px;"></q-btn>
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 5" style="margin-bottom: 5px;"></q-btn>
                                            <q-btn class="full-width text-black" dense  size="sm" color="primary" label="Opcion 6" style="margin-bottom: 5px;"></q-btn>
                                            
                                        </q-scroll-area>
                                    </q-menu>
                                </q-btn>
                                
                            </div>
                            
                            <q-btn icon-right="fas fa-search" size="md" label="Buscar" class="col-2 primario-b" style="border-radius: 20px;"></q-btn>
                        </div>
</template>