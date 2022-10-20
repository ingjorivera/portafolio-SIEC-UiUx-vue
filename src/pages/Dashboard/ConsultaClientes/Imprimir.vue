<script setup>
    import {ref} from 'vue'

    let opciones=['Opcion1','Opcion2']
    let checkbox=ref(false)
</script>
<template>
    <div class="column fit" style="gap:30px" >
        <div class="col-1 text-h5 text-bold primario-t enfasis">Imprimir Historia</div>
        <div class="col row justify-center ">
            <q-card class="col-10 q-pa-lg column" flat style="height:fit-content; gap:7px; border-radius: 10px;">
                <q-select dense outlined :options="opciones" label="Tipo de reporte" />
                <div  class="row" style="gap: 20px;">
                    <q-input dense class="col-2" label="Ano"/>
                    <q-input dense class="col" label="Mes"/>
                    
                </div>
                <q-input dense label="Empleado responsable"/>
                <q-input dense label="Cargo"/>
                <q-input dense label="Imprimir desde"/>
                <div class="row">
                    <q-checkbox v-model="checkbox" dense class="col-6" label="Imprimir bancos reales" />
                    <q-btn dense color="primary" class="col" text-color="black" label="Imprimir"></q-btn>
                </div>
                
            </q-card>
        </div>
    </div>
    
</template>