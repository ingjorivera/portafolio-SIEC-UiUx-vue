<script setup>
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
  { name: 'valor', label: 'Valor', field: 'valor' },
  { name: 'valor_real', label: 'Valor real', field: 'valor_real' },
  { name: 'valor_vigente', label: 'Valor vigente', field: 'valor_vigente' },
  { name: 'valor_financiado', label: 'Valor financiado', field: 'valor_financiado', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'valor_reclamacion', label: 'Valor Reclamacion', field: 'valor_reclamacion', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows_dfactura = [
  {
   
    concepto: 21,
    descripcion_concepto: 'Valor factura periodo',
    valor: 1626724,
    valor_real: 1355604,
    valor_vigente: 1626720,
    valor_financiado: 0,
    valor_reclamacion: 0
  },
  {
   
    concepto: 51,
    descripcion_concepto: 'I.A.P.',
    valor: 2200,
    valor_real: '',
    valor_vigente: 2200,
    valor_financiado: 0,
    valor_reclamacion: 0
  },
  {
   
    concepto: 608,
    descripcion_concepto: 'Ajuste decena',
    valor: -4,
    valor_real: '',
    valor_vigente: 0,
    valor_financiado: 0,
    valor_reclamacion: 0
  },
]
</script>
<template>
<q-card class="column q-pa-lg full-width submenu" style="border-top-left-radius: 10px !important; border-top-right-radius: 10px !important; gap:20px">
        <div class="text-h6 primario-t ">Detalles de Factura</div>
        <q-table
          
          :rows="rows_dfactura"
          :columns="columns_dfactura"
          row-key="id"
          style="border-radius: 10px;"
        />
</q-card>
</template>