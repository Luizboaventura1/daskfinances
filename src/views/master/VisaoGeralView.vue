<template>
  <v-app>
    <div class="container-overview pa-3">
      <div class="account-balance d-flex">
        <v-row>
          <v-col cols="12" sm="4" class="pa-3">
            <div class="box-balance elevation-6 pa-3 rounded-lg">
              <div class="w-100">Saldo</div>
              <div class="w-100 d-flex align-end">
                <div class="w-25 d-flex justify-center align-end">
                  <img
                    class="arrow-down"
                    :src="imgArrowDown"
                    v-if="stateArrowDown"
                  >
                  <img
                    class="arrow-up"
                    :src="imgArrowUp"
                    v-if="stateArrowUp"
                  >
                  <span class="ms-1">10%</span>
                </div>
                <div class="w-75 d-flex justify-end align-end">
                  R$ 10,000,00
                </div> 
              </div>
            </div>
          </v-col> 
          <v-col cols="12" sm="4" class="pa-3">
            <div class="box-balance elevation-6 pa-3 rounded-lg">
              <div class="w-100">Receita</div>
              <div class="w-100 d-flex align-end">
                <div class="w-25 d-flex justify-center align-end">
                  <img
                    class="arrow-down"
                    :src="imgArrowDown"
                    v-if="stateArrowDown"
                  >
                  <img
                    class="arrow-up"
                    :src="imgArrowUp"
                    v-if="stateArrowUp"
                  >
                  <span class="ms-1">2%</span>
                </div>
                <div class="w-75 d-flex justify-end align-end">
                  R$ 5,000,00
                </div> 
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="4" class="pa-3">
            <div class="box-balance elevation-6 pa-3 rounded-lg">
              <div class="w-100">Gasto</div>
              <div class="w-100 d-flex align-end">
                <div class="w-25 d-flex justify-center align-end">
                  <img
                    class="arrow-down"
                    :src="imgArrowDown"
                    v-if="stateArrowDown"
                  >
                  <img
                    class="arrow-up"
                    :src="imgArrowUp"
                    v-if="stateArrowUp"
                  >
                  <span class="ms-1">14%</span>
                </div>
                <div class="w-75 d-flex justify-end align-end">
                  R$ 1,000,00
                </div> 
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="graphic-container">
        <CandlestickChart />
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import CandlestickChart from '@/components/Chart/CandlestickChart.vue'


const imgArrowDown  = require('@/assets/seta-para-baixo.png')
const imgArrowUp = require('@/assets/angulo-da-seta-para-cima.png')

let stateArrowDown = ref(true)
let stateArrowUp = ref(false)

</script>

<style scoped lang="scss">

.container-overview {
  width: 100%;

  .box-balance {
    width: 100%;
    height: 120px;
    background-color: rgb(42, 45, 48);

    div:nth-of-type(1) {
      height: 25%;
    }
    div:nth-of-type(2) {
      height: 75%;
    }
  }
}

.arrow-down {
  width: 20px;
  height: 20px;
}

.arrow-up {
  width: 15px;
  height: 15px;
  margin-bottom: 3px;
}

</style>