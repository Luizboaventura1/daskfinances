<template>
  <div
    v-if="statePopupPanel"
    class="popup elevation-6 rounded-lg text-white overflow-hidden pa-2 d-flex justify-center align-center"
  >
    <span>
      <slot />
    </span>
    <div class="container-bar">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  statePopupPanel: Boolean
})

</script>

<style scoped lang="scss">

.popup {
  width: 100%;
  max-width: 250px;
  height: 100px;
  background-color: #373940;
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9999;
}

span {
  user-select: none;
  color: #009dff;
}

.container-bar {
  background-color: #121314;
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  bottom: 0;


  .bar {
    height: 4px;
    background-color: #009dff;
    animation: bar 2s linear;
  }
}

@keyframes bar {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>