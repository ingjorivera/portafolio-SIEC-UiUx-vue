<script>
    export default {
        props:{
            icono:String,
            color:String,
            titulo:String,
            texto:String
            
        }
    }
    </script>
<template>

<q-card class="q-mb-sm" flat :style="'border-left: 7px solid '+color">
<q-item>
    <q-item-section side>
    <q-icon :name="icono" size="xs"/>
    </q-item-section>
    <q-item-section>
        <q-item-label class="text-bold enfasis">
            {{titulo}}
        </q-item-label>
        <q-item-label caption  lines="2" class="texto">
            {{texto}}
        </q-item-label>
    </q-item-section>
 </q-item>   
</q-card>
</template>