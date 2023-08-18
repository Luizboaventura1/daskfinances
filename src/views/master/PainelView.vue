<template>
  <BalancePanel/>
  <div class="container-add-finance pa-3 rounded-lg ma-3 elevation-6">
    <AddTransactionRoot />
  </div>
  <ListTransactions />
</template>

<script setup>
import ListTransactions from '@/components/DaskTransactions/ListTransactions.vue'
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";
import { onMounted } from 'vue';
import BalancePanel from '@/components/BalanceContainer/BalancePanel.vue'
import { useStore } from 'vuex';
import AddTransactionRoot from '@/components/AddTransaction/AddTransactionRoot.vue';

const store = useStore()

// Mostrar dados de saldo

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

</script>

<style lang="scss" scoped>
.container-add-finance {
  background-color: #25272c;
}

</style>