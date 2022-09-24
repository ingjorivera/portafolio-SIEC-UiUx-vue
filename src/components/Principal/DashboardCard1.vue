<script>
export default {
    props:{
        icono:String,
        color:String,
        titulo:String,
        subtitulo:String
    }
}
</script>
<template>
<q-card flat class="col row borde-15 fondo-tarjeta items-center" style="gap:10px">
    <q-item>
        <q-item-section side>
            <q-avatar rounded :icon="icono" :color="color" text-color="white" style="border-radius: 10px;"></q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-white enfasis text-bold">
                {{titulo}}
            </q-item-label>
            <q-item-label caption class="gris-oscuro-claro-t">
                {{subtitulo}}
            </q-item-label>
        </q-item-section>
    </q-item>
</q-card>
</template>