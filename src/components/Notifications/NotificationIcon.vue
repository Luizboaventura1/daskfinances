<template>
  <img
    :style="{'width': size+'px'}"
    :src="icon" 
    alt="Icon"
  >
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  icon: String,
  size: String
})
</script>

