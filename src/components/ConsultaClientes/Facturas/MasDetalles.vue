<script setup>
import { ref } from 'vue'
//tabla detalle factura
const columns_dfactura = [
  {
    name: 'concepto',
    required: true,
    label: 'Concepto',
    align: 'left',
    field: row => row.concepto,
    format: val => `${val}`,
    sortable: true
  },
  
  { name: 'descripcion_concepto', label: 'Descripcion concepto', field: 'descripcion_concepto', sortable: true },
  { name: 'meddr', label: 'Meddr', field: 'meddr' },
  { name: 'cargo_cuenta', label: 'Cargo cuenta', field: 'cargo_cuenta' },
  { name: 'periodo_financiacion', label: 'Periodo Financiacion', field: 'periodo_financiacion' },
  { name: 'valor', label: 'Valor', field: 'valor', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'valor_real', label: 'Valor Real', field: 'valor_real' },
  { name: 'saldo', label: 'Saldo', field: 'saldo', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'estado', label: 'Estado', field: 'estado' },
  { name: 'cupon', label: 'Cupon', field: 'cupon' },
]

const rows_dfactura = [
  {
   
    concepto: 21,
    descripcion_concepto: 'Valor factura periodo',
    meddr: 1,
    cargo_cuenta: '',
    periodo_financiacion: '',
    valor: 4,
    valor_real: 3,
    saldo:0,
    estado:'S',
    cupon:151151960
  },
  {
   
   concepto: 21,
   descripcion_concepto: 'Valor factura periodo',
   meddr: 1,
   cargo_cuenta: '',
   periodo_financiacion: '',
   valor: 1626720,
   valor_real: 1355601,
   saldo:0,
   estado:'V',
   cupon:''
 },
 {
   
   concepto: 51,
   descripcion_concepto: 'I.A.P.',
   meddr: '',
   cargo_cuenta: '',
   periodo_financiacion: '',
   valor: 2200,
   valor_real: '',
   saldo:0,
   estado:'V',
   cupon:151151960
 },
]
</script>
<template>
<q-card class="column q-pa-lg full-width submenu" style="border-top-left-radius: 10px !important; border-top-right-radius: 10px !important; gap:20px">
        <div class="text-h6 primario-t ">Mas Detalles de Factura</div>
        <q-table
          
          :rows="rows_dfactura"
          :columns="columns_dfactura"
          row-key="id"
          style="border-radius: 10px;"
        />
</q-card>
</template>