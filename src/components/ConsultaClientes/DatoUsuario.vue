<script setup>

const props = defineProps({
  label: String,
  valores:String,
  
  })
</script>
<template>
    <div class="row q-pt-sm q-pb-sm">
        <div class="col-5 text-white text-bold -enfasis text-right q-pr-sm" style="font-size:smaller;">
            {{label}}
        </div>
        <div class="col column" style="gap:5px">
            <template v-for="val in valores">
                <div class=" amarillo-oscuro30h-b q-pa-xs text-white" style=" border-radius: 3px; font-size: small;">{{val.valor}}</div>
            </template>
        </div>
    </div>
    <q-separator class="gris-oscuro-claro-b"/>
</template>