<template>
  <v-app>
    <div class="config-account ma-3 pa-3 rounded">
      <h1
        class="text-white font-weight-bold text-h5 pb-3"
      >
        Seu perfil
      </h1>
      <div class="bar"></div>
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
  </v-app>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()

const name = ref(store.state.token.nome)
const gmail = ref(store.state.token.gmail)

</script>

<style scoped lang="scss">

.bar {
  width: 100%;
  height: 3px;
  background-color: #363940;
}
.config-account {
  background-color: #25272c;
}

.account-data {
  .login-account-data {
    div {
      background-color: #181819;
    }
  }
}

</style>