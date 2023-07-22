<template>
  <router-link
    class="btn-login text-decoration-none font-weight-bold rounded"
    :to="link"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  link: String
})
</script>

<style scoped lang="scss">
  .btn-login {
    color: white;
    background-color: rgb(0, 136, 255);
    padding: 8px 35px;
    transition: .3s;
    &:hover {
      background-color: rgb(0, 101, 190);
    }
  }
</style>