<template>
  <div
    class="w-100 text-center text-red-accent-3 py-1"
    v-if="statePopup"
  >
    <slot/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  statePopup: Boolean
})
</script>
