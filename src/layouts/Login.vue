<script setup>
import '../css/login.css'
import  router  from '../router';
router.push('formulario')
function cambiarPagina(ubicacion){
    router.push(ubicacion)
    setTimeout(() => {router.push('/dashboard/principal')}, 5000);

}
</script>
<template>
    <div class="row degradado" style="width=100vw; height:100vh;position:relative">
        <div class="col"></div>
        <div class="col-8 row">
            <div class="col-5 column justify-center">
                
                <div class="row" style="max-width: 450px;">
                   <q-card class="q-pa-md q-pb-lg  q-pt-lg login-box animar-tam" style="border-radius: 15px; min-width: 450px;"
                    v-motion :initial="{
                        opacity:0,
                        scale:0.9,
                    }"
                    :enter="{
                        opacity:1,
                        scale:1,
                        transition: {
                            duration: 100,
                            type: 'keyframes',
                            ease: 'easeOut',
                            delay:1500,
                            },
                    }">
                        <router-view @cambiarPagina="cambiarPagina"></router-view>
                   </q-card>
                </div>
                
            </div>
        </div>
        <div class="col"></div>
        <div class="bg-img"></div>
        <img src="../assets/ebsa-logo.svg" alt="" class="ebsa-logo">
        <img src="../assets/logo.svg" alt="" class="siec-logo">   
    </div>
    
</template>