<template>
  <v-row class="container-saldo-conta w-100">
    <v-col cols="12" sm="4">
      <div class="saldo elevation-6 rounded-lg pa-2 d-flex ma-3">
        <span class="text-white font-weight-bold">Saldo</span>
        <div class="font-weight-regular text-green-accent-3 text-h6 w-100 align-self-end text-right">
          {{ formatNumber(saldoUser) }}
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="4">
      <div class="receitas elevation-6 rounded-lg pa-2 d-flex ma-3">
        <span class="text-white font-weight-bold">Receitas</span>
        <div class="font-weight-regular text-blue text-h6 w-100 align-self-end text-right">
          {{ formatNumber(receitaUser) }}
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="4">
      <div class="gastos elevation-6 rounded-lg pa-2 d-flex ma-3">
        <span class="text-white font-weight-bold">Gastos</span>
        <div class="font-weight-regular text-red-accent-3 text-h6 w-100 align-self-end text-right">
          {{ formatNumber(gastoUser) }}
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

let saldoUser = ref(0)
let receitaUser = ref(0)
let gastoUser = ref(0)
let idSaldoCollection = ref()

onMounted(async () => {
  onSnapshot(collection(db, "saldo"), (snapshot) => {
    snapshot.forEach((docUser) => {
      if(store.state.token.id === docUser.data().idUser) {
        saldoUser.value = docUser.data().saldo
        receitaUser.value = docUser.data().receita
        gastoUser.value = docUser.data().gasto

        idSaldoCollection.value = docUser.id
      }
    })
  });
})

const formatNumber = (num) => {
  return `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`
}
</script>

<style lang="scss" scoped>
  .saldo,.receitas,.gastos {
    width: 100%;
    height: 100px;
    background-color: #25272c;
  }
</style>