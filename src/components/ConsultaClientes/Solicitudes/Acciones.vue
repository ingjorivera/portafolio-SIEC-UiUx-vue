<script setup>
import { ref } from 'vue'
//tabla detalle factura
const columns = [
  {
    name: 'no',
    required: true,
    label: 'No.',
    align: 'left',
    field: row => row.no,
    format: val => `${val}`,
    sortable: true
  },
  
  { name: 'tipo0', label: 'Tipo', field: 'tipo0', sortable: true },
  { name: 'accion', label: 'Accion', field: 'accion' },
  { name: 'tipo1', label: 'Tipo', field: 'tipo1' },
  { name: 'recomendacion', label: 'Recomendacion', field: 'recomendacion' },
  { name: 'estado', label: 'Estado', field: 'estado', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  
]

const rows = [
  {
   
    no: 20,
    tipo0: 'T0',
    accion: 'Accion',
    tipo1: 'T1',
    recomendacion: 'Recomendacion',
    estado: 'Asignada',
   
  },
  {
   
   no: 21,
   tipo0: 'T0',
   accion: 'Accion',
   tipo1: 'T1',
   recomendacion: 'Recomendacion',
   estado: 'Asignada',
  
 },
 
]
let datos_acciones=ref([
  {
    label:'Dpdencia asignada',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Soporte',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'Observacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Realizo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha realizacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Usuario grabacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha grabacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Usuario respuesta',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha respuesta',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  
  
])
</script>
<template>
   
<q-card class="column q-pa-lg submenu" style="border-top-left-radius: 10px !important; border-top-right-radius: 10px !important; gap:20px; width:fit-content !important">
        <div class="text-h6 primario-t ">Acciones</div>
        <q-table
      class="cabecera-sticky cabecera-color "
      :rows="rows"
      :columns="columns"
      row-key="no"
      :visible-columns="visibleColumns"
      style=" overflow:hidden; border-radius: 15px; max-width: calc((100vw/12)*6) !important; ß z-index: 2;"
      @row-click="verBotones"
      :filter="filtro"
      
    >
    <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props" >
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" class="amarillo-palido30-t" flat dense @click="props.expand = !props.expand" :icon="props.expand ? 'fas fa-chevron-circle-up' : 'fas fa-chevron-circle-down'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr  v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class=" q-pb-md">
           
            <q-card flat class="fit row wrap justify-start items-stretch content-end gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
              <template v-for="d in datos_acciones">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </q-card>
           
          </div>
          </q-td>
        </q-tr>
      </template>
    
    
    </q-table>
</q-card>
</template>