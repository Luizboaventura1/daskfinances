<template>
  <BalancePanel />
  <div class="container-chart ma-3">
    <v-row>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <MonthlyIncomeRoot />
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="6">
        <MonthlyExpenseRoot />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import BalancePanel from '@/components/BalanceContainer/BalancePanel.vue';
import MonthlyIncomeRoot from '@/components/Chart/MonthlyIncome/MonthlyIncomeRoot.vue';
import MonthlyExpenseRoot from '@/components/Chart/MonthlyIncome/MonthlyExpenseRoot.vue';

</script>

<style scoped lang="scss">

</style>