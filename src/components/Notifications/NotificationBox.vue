<template>
  <div class="notification elevation-3 rounded pa-2 overflow-y-auto">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .notification {
    width: 350px;
    height: 380px;
    background-color: rgb(28, 30, 32);
  }

  .notification::-webkit-scrollbar {
      width: 0;
  }
</style>