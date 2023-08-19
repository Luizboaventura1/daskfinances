<template>
  <BalancePanel/>
  <div class="container-add-finance pa-3 rounded-lg ma-3 elevation-6">
    <AddTransactionRoot />
  </div>
  <ListTransactions />
</template>

<script setup>
import ListTransactions from '@/components/DaskTransactions/ListTransactions.vue'
import BalancePanel from '@/components/BalanceContainer/BalancePanel.vue'
import AddTransactionRoot from '@/components/AddTransaction/AddTransactionRoot.vue';
</script>

<style lang="scss" scoped>
.container-add-finance {
  background-color: #25272c;
}

</style>