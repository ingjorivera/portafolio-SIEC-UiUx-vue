<script setup>
import { ref } from 'vue'
import '../../../css//tablas.css'
import DetallesFactura from '../../../components/ConsultaClientes/Facturas/DetallesFactura.vue'
import FacturacionSitio from '../../../components/ConsultaClientes/Facturas/FacturacionSitio.vue'
import MasDetalles from '../../../components/ConsultaClientes/Facturas/MasDetalles.vue';
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

let datos_factura=ref([
  {
    label:'Deudor',
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
    label:'Excento IVA',
    valores:[
      {
        tipo:'texto',
        valor:'',
      }
      
    ]
  },
  {
    label:'Clase Servicio',
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
    label:'Estrato',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Periodicidad',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Recarga',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Municipio',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
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
    label:'Sector',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Ubicacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Nodo',
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
    label:'Empleado',
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
    label:'Secuencia',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Deuda Original',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Valor Original',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha emision',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Deuda Capital',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha Vencimiento',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Fecha Anulacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Deuda interes',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Numero Factura',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
      
    ]
  },
  {
    label:'Usuario Anulacion',
    valores:[
      {
        tipo:'texto',
        valor:'',
      },
     
    ]
  },
  {
    label:'Observacion Anulacion',
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
        <div class="text-h5 primario-t text-bold enfasis col-grow">Facturas</div>
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
            <div class="text-subtitle1 text-bold enfasis q-pb-sm amarillo-palido30-t">Datos de factura</div>
            <q-card flat class="fit row wrap justify-start items-stretch content-end gris-claro-b q-pa-sm" style="border-radius: 10px;">
            
              <template v-for="d in datos_factura">
                <div class=" row q-pa-sm col-grow items-center" style="min-width: 150px; gap:10px" >
                    <div class="text-bold enfasis gris-oscuro-claro-t" style="font-size:xx-small; text-transform: uppercase;">{{d.label+':'}}</div>
                    <template v-for="val in d.valores">
                      <div class="col-grow bg-white q-pa-xs" style="border-radius: 3px; font-size: x-small; min-width: 50px;">{{val.valor}}</div>
                    </template>
                    
                </div>
              </template>
            </q-card>
            <div class="row justify-center q-pt-md" style="gap: 15px;">
              <q-btn class="primario-b" size="xs" label="Detalles de factura" v-on:click="facturacion=true"></q-btn>
              <q-btn class="primario-b" size="xs" label="Detalles de facturacion en sitio" v-on:click="facturacion_sitio=true"></q-btn>
              <q-btn class="primario-b" size="xs" label="Mas detalles de factura" v-on:click="mas_detalles=true"></q-btn>
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
    <q-dialog full-width v-model="facturacion" position="bottom">
      <detalles-factura></detalles-factura>
    </q-dialog>
    <q-dialog v-model="facturacion_sitio" position="right">
      <FacturacionSitio></FacturacionSitio>
    </q-dialog>
    <q-dialog full-width v-model="mas_detalles" position="bottom">
      <MasDetalles></MasDetalles>
    </q-dialog>

</template>