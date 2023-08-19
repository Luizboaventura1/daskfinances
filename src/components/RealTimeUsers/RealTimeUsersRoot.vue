<template>
  <div class="real-time-users-container py-5">
    <div class="box-rtu d-flex justify-center">
      <v-container class="ps-12 ps-sm-0">
        <v-row>
          <v-col
            cols="12"
            sm="4"
            class="d-flex justify-start justify-sm-center"
          >
          <div class="total-users">
            <h1 class="text-h3 text-sm-h2 font-weight-bold">+{{ formatNumber(totalUsers) }}</h1>
            <div class="line-rtu my-3"></div>
            <div class="text-subtitle-2 text-white">Usuários na plataforma</div>
          </div>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex justify-start justify-sm-center"
          >
          <div class="total-users">
            <h1 class="text-h3 text-sm-h2 font-weight-bold">+{{ formatNumber(totalTransactions) }}</h1>
            <div class="line-rtu my-3"></div>
            <div class="text-subtitle-2 text-white">Transaçõoes</div>
          </div>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex justify-start justify-sm-center"
          >
          <div class="total-users">
            <h1 class="text-h3 text-sm-h2 font-weight-bold">+20</h1>
            <div class="line-rtu my-3"></div>
            <div class="text-subtitle-2 text-white">Avaliações positivas</div>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
/*import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";*/

let totalUsers = ref(0)
let totalTransactions = ref(0)

/*onMounted(async () => {
  onSnapshot(collection(db, "usuarios"), (snapshot) => {
    let sum = []
    snapshot.forEach((doc) => {
      sum.push(doc.id)
    })

    totalUsers.value = sum.length
  });

  onSnapshot(collection(db, "transacoes"), (snapshot) => {
    let sum = []
    snapshot.forEach((doc) => {
      sum.push(doc.id)
    })

    totalTransactions.value = sum.length
  });
})

const formatNumber = (number) => {
  if(number >= 1000) 
    return `${(parseFloat(number) / 1000).toFixed(0)} mil`
  else if(number >= 1000000)
    return `${(parseFloat(number) / 1000000).toFixed(0)} m`
  else if(number < 1000) 
    return number
}
*/
</script>

<style lang="scss" scoped>

</style>