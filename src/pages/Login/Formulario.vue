
<template>
    <q-card-section>
        <p class="enfasis primario-t xxl bold">Iniciar Sesion</p>
        <p class="blanco-t texto m normal texto-login">Bienvenido nuevamente, ingresa los datos para acceder al sistema.</p>
    </q-card-section>
    <q-card-section>
    <div class="column gris-formulario-b q-pa-md " style="border-radius: 10px; gap:10px">
        <q-input  outlined v-model="text"  bg-color="white" dense label="Usuario">
            
            
        </q-input>
        <q-input  outlined v-model="text"  bg-color="white" dense label="Password" type="password">
            
        </q-input>
        <q-checkbox class="grupo-formulario-t" v-model="right" size="xs"  label="Mantener sesion iniciada" style="font-size: 12px;" />
    </div> 
    </q-card-section>
    <q-card-section>
    
        <q-btn color="primary" class="full-width" text-color="black" label="Ingresar" style="font-weight: bold;" v-on:click="$emit('cambiarPagina','loader')" ></q-btn>
    
</q-card-section>

</template>