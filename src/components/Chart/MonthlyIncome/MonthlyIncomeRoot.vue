<!--
                        [\    /]   |-------    ]------
                        [ \  / ]   |______     ]
                        [  \/  ]    ______|    ]______
-->
<template>
  <div class="container-chart w-100 pa-3 rounded-lg elevation-6">
    <nav class="d-flex align-center justify-space-between">
      <span class="text-blue font-weight-bold">Receita</span>
      <span class="text-white px-2 py-1 bg-black rounded-lg elevation-8">{{ currentMonth() }}</span>
    </nav>

    <main class=" d-flex justify-center align-center">
      <span class="text-white font-weight-bold text-h5">{{ formatValue(monthlyIncome) }}</span>
    </main>

    <v-divider></v-divider>

    <footer class="d-flex justify-center align-center">
      <span class="text-grey-lighten-1">Receita desse mês</span>
    </footer>
  </div>
</template>

<script setup>
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const token = store.state.token

let AllTransactions = ref([])
let monthlyIncome = ref(0)

onMounted(async () => {
  onSnapshot(collection(db, "transacoes"), (snapshot) => {
    snapshot.forEach((docTransaction) => {
      if(token.id === docTransaction.data().idUser) {

        const transactionDate = new Date(docTransaction.data().data.replace(/\//g,'-'))
        const currentDate = new Date

        if (transactionDate.getMonth() === currentDate.getMonth() &&
          transactionDate.getFullYear() === currentDate.getFullYear()
        ) {
          if (docTransaction.data().tipo === 'receita') {
            monthlyIncome.value += Number(docTransaction.data().valor)
          }
        }

        AllTransactions.value.push({
          id: docTransaction.id,
          nome: docTransaction.data().nome,
          valor: docTransaction.data().valor,
          tipo: docTransaction.data().tipo,
          data: new Date(docTransaction.data().data.replace(/\//g,'-')),
          idUser: docTransaction.data().idUser
        })

      }
    })
  });
})

const formatValue = (number) => {
  return `R$ ${Number(number).toFixed(2).replace('.',',')}`
}

const currentMonth = () => {
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  let currentMonth = new Date().getMonth()

  return months[currentMonth]
}

console.log(currentMonth())

</script>

<style lang="scss" scoped>
$main-background: #17191c;
$secondary-color: #25272c;

.container-chart {
  background-color: $secondary-color;
  height: 250px;

  nav {
    height: 10%;
  }

  main {
    height: 70%;
  }

  footer {
    height: 20%;
  }
}
</style>