<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'

const columns = [
  {
    name: 'year',
    required: true,
    label: 'Año',
    align: 'left',
    field: row => row.year,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'id', align: 'center', label: 'ID', field: 'id', required:false },
  { name: 'mes', align: 'center', label: 'Mes', field: 'mes', sortable: true },
  { name: 'ciclo', label: 'Ciclo', field: 'ciclo', sortable: true },
  { name: 'deuda', label: 'Deuda', field: 'deuda' },
  { name: 'estado', label: 'Estado', field: 'estado' },
  { name: 'valor', label: 'Valor', field: 'valor' },
  { name: 'valor_pago', label: 'Valor Pago', field: 'valor_pago', sortable: true },
  { name: 'valor_financiado_reclamacion', label: 'Valor Financiado o Reclamacion', field: 'valor_financiado_reclamacion', sortable: true },
  { name: 'saldo_factura', label: 'Saldo de esta factura', field: 'saldo_factura', sortable: true}
]

const rows = [
  {
    id:'1',
    year: '2022',
    mes: 4,
    ciclo: 2,
    deuda: 0,
    estado: 'Activa',
    valor: 1337960,
    valor_pago: 0,
    valor_financiado_reclamacion: 0,
    saldo_factura:1628920
  },
  {
    id:'2',
    year: '2022',
    mes: 3,
    ciclo: 2,
    deuda: 0,
    estado: 'Activa',
    valor: 1402790,
    valor_pago: 1402790,
    valor_financiado_reclamacion: 0,
    saldo_factura:0
  },
  {
    id:'3',
    year: '2022',
    mes: 2,
    ciclo: 2,
    deuda: 0,
    estado: 'Activa',
    valor: 1573240,
    valor_pago: 1573240,
    valor_financiado_reclamacion: 0,
    saldo_factura:0
  },
  
]
let visibleColumns= ref([ 'year', 'mes', 'ciclo', 'deuda', 'estado', 'valor', 'valor_pago', 'saldo_factura' ])

let datos_ajustes=ref([
  {
    label:'Consecutivo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Solicitud',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Año facturacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      {
        tipo:'texto',
        valor:'',
      }
    ]
  },
  {
    label:'Estado',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Usuario solicitud',
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
  {
    label:'Aprobo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Fecha_a',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Observacion ajuste',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Cancelo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha_b',
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
  
])



let filtro=ref('')
let filaSel=ref(true)
let facturacion=ref(false)
let facturacion_sitio=ref(false)
let mas_detalles=ref(false)

function verBotones(evt,row,index){
  filaSel.value=false
  for(let tb of evt.path[2].getElementsByTagName('tr')){
    tb.classList.remove('fondo-tabla-sel')
  }
  evt.path[1].classList.add('fondo-tabla-sel')
  
}
function ver1(){
console.log('se ejecuta')
}
</script>
<template>
  
    <div class="col-1 row q-pr-md" style="gap: 10px;" >
        <div class="text-h5 primario-t text-bold enfasis col-grow">Ajuste Periodos</div>
        <q-select
          v-model="visibleColumns"
          multiple
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          filled
          bg-color="white"
          style="transform:scale(.8)" 
          popup-content-class="fondo-select"
        />
        <q-input debounce="300" v-model="filtro"  outlined  bg-color="white" dense label="Buscar" style="transform: scale(.8);">
            
            
          </q-input>
        
     
    </div>
    <div class="col row bg-white" style="border-radius: 15px;   ">
       
    
    </div>
    <q-card flat class="q-mt-sm row wrap justify-start items-stretch gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
            <template v-for="d in datos_ajustes">
              <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                  <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                  <template v-for="val in d.valores">
                    <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                  </template>
                  
              </div>
            </template>
    </q-card>

</template>