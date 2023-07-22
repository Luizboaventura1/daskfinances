<template>
  <router-view />
  <ReceberDados />
</template>

<script setup>
import ReceberDados from '@/components/FirebaseData/ReceberDados.vue'
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  html,body {
    height: 100% !important;
  }

  ::-webkit-scrollbar {
    width: 0 !important;
  }
</style>
