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
  { name: 'mes', align: 'center', label: 'Mes', field: 'mes'},
  { name: 'id', align: 'center', label: 'ID', field: 'id'},
  { name: 'nodo', align: 'center', label: 'Nodo', field: 'nodo', sortable: true },
  { name: 'grupo_calidad', align: 'center', label: 'Grupo Calidad', field: 'grupo_calidad'},
  { name: 'year_comp', align: 'center', label: 'Año comp', field: 'year_comp'},
  { name: 'mc', align: 'center', label: 'MC', field: 'mc'},
  { name: 'mf', align: 'center', label: 'MF', field: 'mf'},
  { name: 'vcd', align: 'center', label: 'VCD', field: 'vcd'},
  { name: 'valor_compensado', align: 'center', label: 'Valor Compensado', field: 'valor_compensado'},
 
  
  
]

const rows = [
  {
    id:1,
    year:2022,
    mes: 4,
    nodo: 21439,
    grupo_calidad: 31,
    year_comp: 3,
    mc: 0,
    mf: 1,
    vcd: '',
    valor_compensado: 0,

    
    
  },
  {
    id:2,
    year:2022,
    mes: 3,
    nodo: 21439,
    grupo_calidad: 31,
    year_comp: 3,
    mc: 0,
    mf: 1,
    vcd: '',
    valor_compensado: 0,

    
    
  },
  {
    id:3,
    year:2022,
    mes: 2,
    nodo: 21439,
    grupo_calidad: 31,
    year_comp: 2,
    mc: 0,
    mf: 1,
    vcd: '',
    valor_compensado: 0,

    
    
  },
  
  
]
let visibleColumns= ref([ 'year', 'mes', 'nodo', 'mc','mf' ])

const columns1 = [
  {
    name: 'no',
    required: true,
    label: 'Año',
    align: 'left',
    field: row => row.no,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'valor', align: 'center', label: 'Valor', field: 'valor', required:false },
  { name: 'estado', align: 'center', label: 'Estado', field: 'estado', sortable: true },
  { name: 'periodo', label: 'Periodo', field: 'periodo', sortable: true },
  { name: 'cobro', label: ' ', field: 'cobro', sortable: true },
  
  
  
]

const rows1 = [
  {
    no:1,
    estado: 'Cancelado',
    periodo: 2,
    valor: 0,
    cobro:0
 
  },
 
 
  
]


let datos_compensaciones=ref([
  {
    label:'DIU',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'FIU',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'HC',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
      
    ]
  },
  {
    label:'DT',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
      
    ]
  },
  {
    label:'DIUM',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'FIUM',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'VC',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'CEC',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
      
    ]
  },
  {
    label:'DIUG',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'FIUG',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'THC',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
      
    ]
  },
  {
    label:'Cargo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'Excluidas',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'Deuda',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'TVC',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
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

</script>
<template>
  
    <div class="col-1 row q-pr-md" style="gap: 10px;" >
        <div class="text-h5 primario-t text-bold enfasis col-grow">Compensaciones</div>
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
    <div class="col column bg-white" style="border-radius: 15px; max-height:61vh; ">
        <q-table
      class="fit cabecera-sticky cabecera-color "
      :rows="rows"
      :columns="columns"
      row-key="id"
      :visible-columns="visibleColumns"
      style=" overflow:hidden; border-radius: 15px; max-width: calc((100vw/12)*6) !important; background-color: transparent !important; z-index: 2;"
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
              <div class="text-subtitle1 text-bold enfasis q-pb-sm amarillo-palido30-t">Compensaciones FIU DIU</div>
            <q-card flat class="fit row wrap justify-start items-stretch content-end gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
              <template v-for="d in datos_compensaciones">
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
    <template v-slot:pagination="scope">
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="fas fa-step-backward"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="fas fa-chevron-left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
          v-on:click="filaSel=true"
        />

        <q-btn
          icon="fas fa-chevron-right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
          v-on:click="filaSel=true"
        />

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="fas fa-step-forward"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
          v-on:click="filaSel=true"
        />
      </template>
    
    </q-table>
    </div>
   
   

</template>