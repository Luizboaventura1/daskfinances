<!--
                        [\    /]   |-------    ]------
                        [ \  / ]   |______     ]
                        [  \/  ]    ______|    ]______
-->
<template>
  <div
    class="container-chart elevation-12 rounded-lg pa-3"
  >
    <div class="container-header-chart mb-2">
      <div class="box-header-chart d-flex justify-space-between align-center rounded-lg py-1 px-4 elevation-7">
        <div class="text-white font-weight-bold">Revenue</div>
        <div
          :class="`monthly-increase ${colorMonthlyIncrease}`"
        >
          {{ currentIncome() }}%
        </div>
      </div>
    </div>
    <div class="container-bars d-flex justify-space-around align-end">

      <v-tooltip
        v-for="bar in bars"
        :key="bar" :text="`${bar.toFixed(1).replace('.',',')}%`"
      >
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="bar rounded-t-lg elevation-12"
            :style="`height: ${bar}%`"
          ></div>
        </template>
      </v-tooltip>

    </div>

    <v-divider :thickness="2" class="border-opacity-25 chart-divider"></v-divider>

    <div class="container-months d-flex justify-space-around py-2">
      <div
      v-for="months in chartMonths"
      :key="months"
        class="month text-white"
      >
        {{ months }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'

let bars = ref([])
let sixMonthIncome = ref([1300,1400, 1450, 1475, 1490,1600,1700])
let currentMonth = new Date().getMonth() + 1
let chartMonths = ref([])

const getMonths = () => {
  for(let i = 1;i < 7;i++) {
    chartMonths.value.push(`/0${currentMonth--}`)
  }
  chartMonths.value = chartMonths.value.reverse()
}

onMounted(() => {
  getMonths()
  barsPercentage()
})

let colorMonthlyIncrease = ref('')

let positiveIncrease = 'text-teal-accent-3'
let negativeIncrease = 'text-red-lighten-1'

const currentIncome = () => {
  let percentage = (((sixMonthIncome.value.at(5) - sixMonthIncome.value.at(4)) / sixMonthIncome.value.at(4)) * 100).toFixed(1).replace('.',',')
  parseInt(percentage).toFixed(2) > 0 ? colorMonthlyIncrease.value = positiveIncrease : colorMonthlyIncrease.value = negativeIncrease

  return percentage
}

const barsPercentage = () => {
  for(let i = 0;i < 6;i++) {
    bars.value.push(
      ((sixMonthIncome.value.at(i + 1) - sixMonthIncome.value.at(i)) / sixMonthIncome.value.at(i)) * 100
    )
  }
}

</script>

<style lang="scss" scoped>
.container-chart {
  width: 100%;
  height: 350px;
  //background-color: rgb(40, 38, 42);
  background-image: linear-gradient(to top right,
  #25272c,
  #25262b);

  .container-header-chart {
    height: 12%;

    .box-header-chart {
      background-color: #3d3f45;
    }
  }

  .container-bars {
    height: 78%;
    .bar {
      width: 100%;
      max-width: 50px;
      height: 0px;
      background-image: linear-gradient(to top right,
      rgb(204, 0, 255),
      rgb(136, 0, 255));
      margin: 0 3px;
    }
  }

  .container-months {
    height: 10%;
  }
}

.chart-divider {
  border-color: rgb(146, 146, 146) !important;
}

</style>