<script setup>
  import './css/main.css'
</script>
<template>
  <div style="width: 100vw; height:100vh">
    <RouterView v-slot="{Component}">
        <Transition name="main" mode="out-in" >
          <component :is="Component"/>
        </Transition>
  </RouterView>
  </div>
</template>


<style>
  .main-enter-active,
  .main-leave-active{
      transition: all 1s ease;
  }
 .main-enter-from,
 .main-leave-to{
     opacity:0;
     
 }
 </style>