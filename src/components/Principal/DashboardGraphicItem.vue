<script>
    export default {
        props:{
            icono:String,
            color:String,
            titulo:String,
            
        }
    }
    </script>
<template>
<q-item class="q-pa-none q-ma-none">
    <q-item-section side>
        <q-avatar :icon="icono" :color="color" text-color="white" size="sm"></q-avatar>
    </q-item-section>
    <q-item-section>
        <q-item-label class="text-white">Titulo opcion</q-item-label>
        
    </q-item-section>
</q-item>
</template>