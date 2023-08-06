<template>
  <BalancePanel />
  <div class="container-chart ma-3">
    <v-row>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <ChartMSC />
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">

      </v-col>
    </v-row>

  </div>
</template>

<script setup>
import BalancePanel from '@/components/BalanceContainer/BalancePanel.vue';
import ChartMSC from '@/components/Chart-MSC-V1/ChartMSC.vue';
</script>

<style scoped lang="scss">


</style>