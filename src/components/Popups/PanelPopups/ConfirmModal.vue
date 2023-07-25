<template>
  <div
    v-if="stateConfirmModal"
    class="popup elevation-6 rounded-lg text-white overflow-hidden pa-2"
  >
    <div class="w-100 text-center py-2">
      <span>
        <slot />
      </span>
    </div>
    <div class="d-flex w-100 justify-space-between container-buttons px-3">
      <v-btn
        @click="$emit('confirmButton')"
        class="bg-blue-accent-3"
      >
        Confirmar
      </v-btn>
      <v-btn
        @click="$emit('cancelButton')"
        class="bg-red-accent-3"
      >
        Cancelar
      </v-btn>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  stateConfirmModal: Boolean
})

</script>

<style scoped lang="scss">

.popup {
  width: 100%;
  max-width: 290px;
  height: 120px;
  background-color: #373940;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

span {
  user-select: none;
  color: #ffffff;
}

.container-buttons {
  position: absolute;
  bottom: 10px;
  left: 0;
}

</style>