<template>
  <apexchart type="candlestick" :options="chartOptions" :series="chartSeries" />
</template>

<script setup>
import { ref } from 'vue';

let chartOptions = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
})

let chartSeries = ref([{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}])
</script>