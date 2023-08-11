<template>
  <v-app>
    <div class="config-account ma-3 pa-3 rounded">
      <div class="container-perfil d-flex justify-center pt-4 pb-7">
        <v-avatar
          color="#25272c"
          size="120"
        >
          <img class="w-100" :src="imgAvatar" alt="Logo">
        </v-avatar>
      </div>
      <div class="bar"></div>
      <div class="w-100 d-flex justify-center py-6">
        <div class="account-data">
          <div class="login-account-data py-2 w-100 d-flex align-center">
            <span class="font-weight-bold me-3">Nome</span>
            <div class="pa-3 rounded-lg w-100">{{ name }}</div>
          </div>
          <div class="login-account-data py-2 w-100 d-flex align-center">
            <span class="font-weight-bold me-3">Gmail</span>
            <div class="pa-3 rounded-lg w-100">{{ gmail }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()

const name = ref(store.state.token.nome)
const gmail = ref(store.state.token.gmail)

let imgAvatar = require('@/assets/img-perfil.png')

</script>

<style scoped lang="scss">

.bar {
  width: 100%;
  height: 2px;
  background-color: #363940;
}
.config-account {
  background-image: linear-gradient(to right,#36393e,#222428);
}

.account-data {
  width: 100%;
  max-width: 400px;
  .login-account-data {
    div {
      background-color: #4d5458;
    }
  }
}

</style>