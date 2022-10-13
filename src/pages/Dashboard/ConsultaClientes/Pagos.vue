<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'

const columns = [
  {
    name: 'banco',
    required: true,
    label: 'banco',
    align: 'left',
    field: row => row.banco,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'id', align: 'center', label: 'ID', field: 'id', required:false },
  { name: 'fecha_consignacion', align: 'center', label: 'Fecha consignacion', field: 'fecha_consignacion', sortable: true },
  { name: 'extracto', label: 'Extracto', field: 'extracto', sortable: true },
  { name: 'periodo', label: 'Periodo', field: 'periodo' },
  { name: 'pago', label: 'Pago', field: 'pago' },
  { name: 'consec_pago', label: 'Consec Pago', field: 'consec_pago' },
  { name: 'valor_pago', label: 'Valor Pago', field: 'valor_pago', sortable: true },
  { name: 'saldo_amortizar', label: 'Saldo por amortizar', field: 'saldo_amortizar', sortable: true },
  
]

const rows = [
  {
    id:'1',
    banco: 'X6',
    fecha_consignacion: '20/04/2022',
    extracto: 50476843,
    periodo: 2022,
    pago: 4,
    consec_pago: 151151960,
    valor_pago: 0,
    saldo_amortizar: 0,
    
  },
  {
    id:'2',
    banco: 'X6',
    fecha_consignacion: '20/03/2022',
    extracto: 50141978,
    periodo: 2022,
    pago: 3,
    consec_pago: 150176175,
    valor_pago: 0,
    saldo_amortizar: 0,
    
  },
  {
    id:'3',
    banco: 'C4',
    fecha_consignacion: '01/04/2022',
    extracto: 5026370,
    periodo: 2022,
    pago: 3,
    consec_pago: 150622299,
    valor_pago: 1337960,
    saldo_amortizar: 0,
    
  },
  
]
let visibleColumns= ref([ 'banco', 'fecha_consignacion', 'extracto', 'periodo', 'pago' ])

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
  { name: 'des_concepto', align: 'center', label: 'Des concepto', field: 'des_concepto', sortable: true },
  { name: 'valor', label: 'Valor', field: 'valor', sortable: true },
  
  
]

const rows1 = [
  {
    year:'2022',
    mes: '4',
    des_concepto: 'Ajuste decena',
    valor: -4,
 
  },
  {
    year:'2022',
    mes: '4',
    des_concepto: 'Valor factura periodo',
    valor: 4,
 
  },
 
  
]


let datos_pago=ref([
  {
    label:'Nombre del banco',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha del recaudo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Fecha grabacion del extracto',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Observacion extracto',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Numero cupon cargue',
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
        <div class="text-h5 primario-t text-bold enfasis col-grow">Pagos</div>
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
            
            <q-card flat class="fit row wrap justify-start items-stretch content-end gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
              <template v-for="d in datos_pago">
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