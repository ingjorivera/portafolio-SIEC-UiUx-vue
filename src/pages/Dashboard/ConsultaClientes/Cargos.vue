<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'

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
  { name: 'cod_concepto', align: 'center', label: 'Codigo Concepto', field: 'cod_concepto', required:false },
  { name: 'des_concepto', align: 'center', label: 'Des concepto', field: 'des_concepto', sortable: true },
  { name: 'valor', label: 'Valor', field: 'valor', sortable: true },
  { name: 'saldo', label: 'Saldo', field: 'saldo', sortable: true },
  { name: 'estado0', label: 'Estado', field: 'estado0', sortable: true },
  { name: 'estado1', label: ' ', field: 'estado1', sortable: true },
  
  
]

const rows = [
  {
    no:'18962371',
    cod_concepto: 662,
    valor: 4560,
    saldo: 0,
    estado0: 'T',
    estado1: 'erminado',
    
    
  },
  {
    no:'18858166',
    cod_concepto: 669,
    valor: 3177,
    saldo: 0,
    estado0: 'T',
    estado1: 'erminado',
    
    
  },
  {
    no:'18749766',
    cod_concepto: 668,
    valor: 19623,
    saldo: 0,
    estado0: 'T',
    estado1: 'erminado',
    
    
  },
  
]
let visibleColumns= ref([ 'no', 'cod_concepto', 'valor', 'saldo', 'estado' ])

const columns1 = [
  {
    name: 'year',
    required: true,
    label: 'Año',
    align: 'left',
    field: row => row.year,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'mes', align: 'center', label: 'Mes', field: 'mes', required:false },
  { name: 'valor', align: 'center', label: 'Valor', field: 'valor', sortable: true },
  { name: 'estado0', label: 'Estado', field: 'estado0', sortable: true },
  { name: 'estado1', label: ' ', field: 'estado1', sortable: true },
  
  
  
]

const rows1 = [
  {
    year:'2022',
    mes: '4',
    valor: 4560,
    estado0: 'L',
    estado1:'iquidado'
 
  },
 
 
  
]


let datos_cargo=ref([
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
    label:'Tipo cargo',
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
    label:'Tipo cobro',
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
    label:'Tipo valor',
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
    label:'Interes/Incremento',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Kwh',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Periodo pago',
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
    label:'Cont recon',
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
    label:'Observacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'Creo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
      
    ]
  },
  {
    label:'Motivo cancelacion',
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
        <div class="text-h5 primario-t text-bold enfasis col-grow">Cargos</div>
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
      row-key="no"
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
            
            <q-card flat class="fit row wrap justify-start items-stretch content-end gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
              <template v-for="d in datos_cargo">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
              <div class="q-pt-md fit">
              <q-table
                    class="fit cabecera-color  "
                    :rows="rows1"
                    :columns="columns1"
                    row-key="id"
                   dense
                    style=" overflow:hidden; border-radius: 15px; background-color: white !important; z-index: 2;"
                    
                   
                    
                  />
                </div>
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
    <q-dialog full-width v-model="facturacion" position="bottom">
     
    </q-dialog>
   

</template>