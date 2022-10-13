<script setup>
import { ref } from 'vue'

//tabla detalle factura
const columns_dfacturas = [
  {
    name: 'concepto',
    required: true,
    label: 'Concepto',
    align: 'left',
    field: row => row.concepto,
    format: val => `${val}`,
    sortable: true
  },
  
  { name: 'descripcion', label: 'Descripcion', field: 'descripcion', sortable: true },
  { name: 'valor', label: 'Valor', field: 'valor' },
  
]

const rows_dfacturas = [
  {
   
    concepto: 21,
    descripcion: 'Valor factura periodo',
    valor: 1355604,
   
  },
  {
   
    concepto: 18,
    descripcion: 'CONTRIBUCIONES',
    valor: 271121,
    
  },
  {
   
    concepto: 289,
    descripcion: 'Concepto no definido',
    valor: 2200,
   
  },
]
//Consumo facturacion sitio

let datos_consumo_facturacion=ref([
  {
    label:'Medidor',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Tarifa',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Lectura Anterior',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Lectura Tomada',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Consumo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'T. Obs',
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
    label:'Fecha',
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
<q-card class="row column q-pa-lg  submenu" style="border-radius: 10px !important; gap:20px">
        <div class="text-h6 primario-t ">Detalles de Facturacion en Sitio</div>
        <div class="column" style="gap: 20px;">
            <q-table
            class="col"
            :rows="rows_dfacturas"
            :columns="columns_dfacturas"
            row-key="id"
            style="border-radius: 10px;"
          />
          <div class="col row">
            <q-card flat class="row fit row wrap justify-start items-stretch gris-claro-b q-pa-sm" style="border-radius: 10px; height:fit-content !important">
            
            <template v-for="d in datos_consumo_facturacion">
              <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                  <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                  <template v-for="val in d.valores">
                    <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                  </template>
                  
              </div>
            </template>
          </q-card>
          </div>
        </div>
        
</q-card>
</template>