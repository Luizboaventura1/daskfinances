<template>
  <div
    @click="stateModal = true"
    class="button-add-transaction rounded-pill d-flex align-center"
  >
    <div
      class="container-icon d-flex justify-center align-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z" data-original="#000000" class=""></path></g></svg>
    </div>
    <div
      class="container-text text-white font-weight-bold"
    >
      Nova transação
    </div>
  </div>

  <AddTransactionModal
    :stateModal="stateModal"
  >
    <template #nav>
      <CloseButton
        @click="stateModal = false" 
      />
    </template>
  </AddTransactionModal>
</template>

<script setup>
import AddTransactionModal from './AddTransactionModal.vue';
import { ref } from 'vue'
import CloseButton from '../Buttons/CloseButton.vue';

let stateModal = ref(false)

</script>

<style lang="scss" scoped>
.button-add-transaction {
  background-color: rgb(0, 166, 255);
  white-space: nowrap;
  height: 40px;
  width: 40px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: .3s;

  &:hover {
    width: 240px;
  }

  .container-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .container-text {
    padding-left: 45px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
}
</style>