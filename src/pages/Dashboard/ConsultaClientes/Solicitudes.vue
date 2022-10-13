<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'
import Acciones from '../../../components/ConsultaClientes/Solicitudes/Acciones.vue'
const columns = [
  {
    name: 'dependencia',
    required: true,
    label: 'Dependencia',
    align: 'left',
    field: row => row.dependencia,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'id', align: 'center', label: 'ID', field: 'id', required:false },
  { name: 'num', align: 'center', label: '#', field: 'num', sortable: true },
  { name: 'tipo', label: 'Tipo', field: 'tipo', sortable: true },
  { name: 'solicitud', label: 'Solicitud', field: 'solicitud' },
  { name: 'fecha', label: 'Fecha', field: 'fecha' },
  { name: 'estado', label: 'Estado', field: 'estado' },
  { name: 'receptor0', label: 'Receptor', field: 'receptor0', sortable: true },
  { name: 'receptor1', label: ' ', field: 'receptor1', sortable: true },
  
]

const rows = [
  {
    id:1,
    num: 3104337,
    dependencia: 62011,
    tipo: 8,
    solicitud: 'RELIQUIDACION INTE',
    fecha: '22-JUL-2021',
    estado: 'Terminada',
    receptor0: 'LUPINZON',
    receptor1: '',
    
  },
  {
    id:2,
    num: 3052657,
    dependencia: 50500,
    tipo: 32,
    solicitud: 'LECTURA REPORTAD',
    fecha: '05-ABR-2022',
    estado: 'Terminada',
    receptor0: 'SREYES',
    receptor1: '',
    
  },
  {
    id:3,
    num:2941680,
    dependencia: 50500,
    tipo: 48,
    solicitud: 'ACTUALIZAR SECTOR',
    fecha: '19-AGO-2022',
    estado: 'Terminada',
    receptor0: 'SREYES',
    receptor1: '',
    
  },
  
]
let visibleColumns= ref([ 'num', 'dependencia', 'tipo', 'fecha', 'estado' ])

let datos_solicitudes=ref([
  {
    label:'Nombre',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Telefono',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Doc Soporte',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Correo electronico',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Direccion',
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
  
])



let filtro=ref('')
let filaSel=ref(true)
let acciones=ref(false)


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
        <div class="text-h5 primario-t text-bold enfasis col-grow">Solicitudes</div>
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
            
              <template v-for="d in datos_solicitudes">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </q-card>
            <div class="row justify-center q-pt-md" style="gap: 15px;">
              <q-btn class="primario-b" size="xs" label="Acciones" v-on:click="acciones=true"></q-btn>
              
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
    <q-dialog full-width v-model="acciones" position="bottom">
      <Acciones></Acciones>
    </q-dialog>
    

</template>