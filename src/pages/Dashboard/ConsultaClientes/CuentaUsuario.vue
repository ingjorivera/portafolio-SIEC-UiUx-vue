<script setup>
import DatoUsuario from '../../../components/ConsultaClientes/DatoUsuario.vue';
import { useConsultaCliente } from '../../../stores/ConsultaClientes/Cliente';

const cliente=useConsultaCliente()


</script>
<template>
    <template v-for="(c,id) in cliente.categorias">
        <q-expansion-item
        group="cuentaUsuario"
        :label="c.label"
        
        header-class="text-black enfasis text-bold primario-b"
        dense
        class="q-mb-sm"
        >
            <template v-for="du in cliente.info ">
                <template v-if="du.categoria===c.label">
                   
                    <DatoUsuario :label="du.label" :valores="du.valores"></DatoUsuario>
                    
                </template>
            </template>
            
        </q-expansion-item>
    </template>
    
</template>