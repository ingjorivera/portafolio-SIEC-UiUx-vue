<script setup>

import { ref } from 'vue';
import  router from '../../router'
import '../../css/toolbar.css'
import Buscador from '../../components/ConsultaClientes/Buscador.vue'
import CuentaUsuarioVue from './ConsultaClientes/CuentaUsuario.vue';


let botones_toolbar=ref([
        {
            titulo:'Facturas',
            estado:'boton_toolbar',
            pagina:'facturas'
        },
        {
            titulo:'Consumos',
            estado:'boton_toolbar',
            pagina:'consumos'
        },
        {
            titulo:'Pagos',
            estado:'boton_toolbar',
            pagina:'pagos'
        },
        {
            titulo:'Cargos',
            estado:'boton_toolbar',
            pagina:'cargos'
        },
        {
            titulo:'Financiaciones',
            estado:'boton_toolbar',
            pagina:'financiaciones'
        },
        {
            titulo:'Ajuste Periodos',
            estado:'boton_toolbar',
            pagina:'ajuste-periodos'
        },
        {
            titulo:'Solicitudes',
            estado:'boton_toolbar',
            pagina:'solicitudes'
        },
        {
            titulo:'Compensaciones',
            estado:'boton_toolbar',
            pagina:'compensaciones'
        },
        {
            titulo:'Gestion Cartera',
            estado:'boton_toolbar',
            pagina:'gestion-cartera'
        },
        {
            titulo:'Imprimir Historia',
            estado:'boton_toolbar',
            pagina:'imprimir'
        },
    ])
    let contenedor=ref()
    let text=ref()
    let terminos=ref()
    let num_col=ref('toolbar-close')
    let num_toolbar=ref('col')
    let toolbar_open=ref(false)
    
    
function abrir_toolbar(b){
        num_col.value='toolbar-open'
        num_toolbar.value='col-3'
        toolbar_open.value=true
       
        

        for(let i=0; i<botones_toolbar.value.length; i++){
           botones_toolbar.value[i].estado='boton_toolbar' 
        }
        b.estado='boton_toolbar_select'
        router.push('/dashboard/consulta-clientes/'+b.pagina)
    }
    function cerrar_toolbar(){
        for(let i=0; i<botones_toolbar.value.length; i++){
           botones_toolbar.value[i].estado='boton_toolbar' 
        }
        num_col.value='toolbar-close'
        num_toolbar.value='col'
        toolbar_open.value=false
        
    }
   
   let vista_principal=ref(false) 
</script>

<template>
 <div class="row justify-center" style="height: 100vh">
        <div class="col-11 column " style="gap: 20px;">
            <div class="column" style="gap: 20px;">
                <div class="col column">
                    <div class="text-h4 text-bold enfasis primario-t">CONSULTA DE</div>
                    <div class="text-h6 enfasis primario-t">CLIENTES</div>
                </div>
                <div class="col-5 column" style="gap: 10px;">
                    <div class="col-4 text-white texto">
                        Presiona el boton + e ingresa el termino para buscar
                    </div>
                    <div class="col row buscador">
                        <Buscador></Buscador>
                    </div>
                </div>
            </div>
            <div  class="col row q-gutter-x-md no-wrap"  >
                <q-card class="col-3 column submenu q-pa-md" style="border-radius: 10px; ">
                <div class="row q-pb-sm">
                    <div class="col-7 text-white text-caption enfasis text-bold">Numero de cuenta:</div>
                    <div class="col text-white text-right texto">00000000000</div>
                </div>
                <q-separator color="white"  />
                    <q-scroll-area class="col  q-pl-sm q-pr-sm">
                       <CuentaUsuarioVue ></CuentaUsuarioVue>
                    </q-scroll-area>
                    <div class="row justify-center">
                        <q-pagination
                        v-model="current"
                        max="5"
                        input
                        dense
                        color="white"
                        size="8px"
                        input-class="text-white"
                        />
                    </div>
                </q-card>
                <q-card  class="row bg-black q-pl-md q-pt-md q-pb-md" :class="num_col"  style="border-radius: 10px; gap:10px; transition: all 0.5s !important;">
                    <q-card  flat class="gris-formulario-b justify-center items-center q-pl-sm q-pt-md q-pb-sm"  style="border-radius: 10px; width:calc(((100vw / 12) * 2) - 32px ); height:calc(100% - 5px) ">
                        <q-scroll-area class="full-height row">
                            <template v-for="b in botones_toolbar" style="gap:10px">
                                <div  class="full-width text-caption enfasis text-bold" :class="b.estado" v-on:click="abrir_toolbar(b)">{{b.titulo}}</div>
                                <q-separator inset class="q-mt-sm q-mb-sm" />
                            </template>
                        </q-scroll-area>
                    </q-card>
                <div v-auto-animate class="col q-pr-md"   >
                    <div  v-if="toolbar_open" class="row column full-height q-pl-md  q-pt-sm " >
                        <router-view v-auto-animate />
                    </div>
                </div>
                    <q-icon v-if="toolbar_open"  color="white" name="fas fa-times" style="position: absolute; top:10px;right:10px" v-on:click="cerrar_toolbar"/>
                </q-card>
                
                
            </div>
            
        </div>
    </div>
    
</template>