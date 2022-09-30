<script setup>
  import User from '../pages/Dashboard/Sidebar/User.vue'
  import Menu from '../pages/Dashboard/Sidebar/Menu.vue'
  import '../css/menu.css'
  import { ref } from 'vue'
    
//revisa si el usuario inicio sesion, sino devolver al login

  
const leftDrawerOpen = ref(false)
    
</script>
<template>
    <q-layout view="hHh lpR fFf" class="degradado">
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left"  width=126 class="sidebar-menu">
        <div class="full-height column">
          <div class=" full-width">
            <User></User>
          </div>
          <div class="col">
            <Menu></Menu>
          </div>
      </div>
      </q-drawer>
  
      <q-page-container style="position: relative !important;" >
        <div class="menu-toggle" v-on:click="leftDrawerOpen=!leftDrawerOpen">
          <q-icon name="fas fa-bars" />
        </div>
        
        <router-view class="q-pa-lg" />
      </q-page-container >
      <div class="bg-img"></div>
    </q-layout>
  </template>
  
 