<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'
import Fotos from '../../../components/ConsultaClientes/Consumos/Fotos.vue'

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
  { name: 'meddr', label: 'Meddr', field: 'meddr', sortable: true },
  { name: 'contador', label: 'Contador', field: 'contador' },
  { name: 'serie', label: 'Serie', field: 'serie' },
  { name: 'empty', label: ' ', field: 'empty' },
  { name: 'energia', label: 'Energia', field: 'energia' },
  { name: 'mdc', label: 'Mdc', field: 'mdc' },
  { name: 'tipo_obs', label: 'Tipo obs', field: 'tipo_obs' },
  { name: 'ciclo', label: 'Ciclo', field: 'empty' },
  { name: 'lectura_anterior', label: 'Lectura anterior', field: 'lectura_anterior' },
  { name: 'lectura_tomada', label: 'Lectura tomada', field: 'lectura_tomada' },
  { name: 'lec_factura', label: 'Lec. factura', field: 'lec_facura' },
  { name: 'real', label: 'Real', field: 'real' },
  { name: 'consumo_promedio', label: 'Consumo promedio', field: 'consumo_promedio' },
  { name: 'valorizado', label: 'Valorizado', field: 'valorizado' },
  { name: 'consumo_ajustado', label: 'Consumo ajustado', field: 'consumo_ajustado' },
  { name: 'consumo_total', label: 'Consumo total', field: 'consumo_total' },
  { name: 'valor_m', label: 'Valor M', field: 'valor_m' },
  { name: 'dias_exceso', label: 'Dias exceso', field: 'dias_exceso' },
]

const rows = [
  {
    id:'1',
    year: '2022',
    mes: 4,
    meddr: 1,
    contador: 'PAFAL',
    serie: 13666158,
    empty: 'A',
    energia: 'A',
    mdc: 'Sencilla',
    tipo_obs:1628920,
    ciclo:1628920,
    lectura_anterior:1628920,
    lectura_tomada:1628920,
    lec_factura:1628920,
    real:1628920,
    consumo_promedio:1628920,
    valorizado:1628920,
    consumo_ajustado:1628920,
    consumo_total:1628920,
    valor_m:1628920,
    dias_exceso:1628920,
    
    
  },
  {
    id:'2',
    year: '2022',
    mes: 3,
    meddr: 1,
    contador: 'PAFAL',
    serie: 13666158,
    empty: 'A',
    energia: 'A',
    mdc: 'Sencilla',
    tipo_obs:1628920,
    ciclo:1628920,
    lectura_anterior:1628920,
    lectura_tomada:1628920,
    lec_factura:1628920,
    real:1628920,
    consumo_promedio:1628920,
    valorizado:1628920,
    consumo_ajustado:1628920,
    consumo_total:1628920,
    valor_m:1628920,
    dias_exceso:1628920,
    
    
  },
  {
    id:'3',
    year: '2022',
    mes: 4,
    meddr: 1,
    contador: 'PAFAL',
    serie: 13666158,
    empty: 'A',
    energia: 'A',
    mdc: 'Sencilla',
    tipo_obs:1628920,
    ciclo:1628920,
    lectura_anterior:1628920,
    lectura_tomada:1628920,
    lec_factura:1628920,
    real:1628920,
    consumo_promedio:1628920,
    valorizado:1628920,
    consumo_ajustado:1628920,
    consumo_total:1628920,
    valor_m:1628920,
    dias_exceso:1628920,
    
    
  },
  
]
let visibleColumns= ref([ 'year', 'mes', 'meddr', 'contador', 'serie', 'lectura_anterior' ])

let datos_consumo=ref([
  {
    label:'Contador',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
    ]
  },
  {
    label:'Serie',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Factor multiplicacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Acumulativo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Digitos',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Promedio',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  
])


let datos_contador=ref([
  {
    label:'Ingreso contador',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
    ]
  },
  {
    label:'Lectura original',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Cancelo contador',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha original',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  
  
])

let datos_consumo2=ref([
  {
    label:'Tarifa',
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
    label:'Estado consumo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Tipo obsrvcn',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Tipo obsrvc original',
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
    label:'Anomalia critica',
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
    label:'Lectura original',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
      
    ]
  },
  {
    label:'Tipo consumo',
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
    label:'Porcentaje consumo',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
      
    ]
  },
  {
    label:'Aforador',
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
    label:'Fecha tomada',
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
    label:'Informe FS',
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
        <div class="text-h5 primario-t text-bold enfasis col-grow">Consumos</div>
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
            
            <q-card flat class="column gris-claro-b q-pa-sm" style="border-radius: 10px;">
            <div style="font-size: smaller;" class="q-pb-sm gris-t">Consumo</div>
            <div class="fit row wrap justify-start items-stretch content-end  q-pa-sm" style="border: 1px solid var(--gris-formulario-oscuro); border-radius: 7px;">
                <template v-for="d in datos_consumo">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </div>
            <div style="font-size: smaller;" class="q-pb-sm q-pt-sm gris-t">Datos Consumo</div>
            <div class="fit row wrap justify-start items-stretch content-end  q-pa-sm" style="border: 1px solid var(--gris-formulario-oscuro); border-radius: 7px;">
                <template v-for="d in datos_contador">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </div>
            <div class="fit row wrap justify-start items-stretch content-end  q-pa-sm" >
                <template v-for="d in datos_consumo2">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </div>
            </q-card>
            
            <div class="row justify-center q-pt-md" style="gap: 15px;">
              <q-btn class="primario-b" size="xs" label="Fotos" v-on:click="facturacion=true"></q-btn>
              
            </div>
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
    <q-dialog v-model="facturacion" >
      <fotos></fotos>
    </q-dialog>
    

</template>