<template>
  <v-footer
    class="footer text-center d-flex flex-column py-7"
  >
    <div class="footer-text pb-6">
      All rights reserved to <strong>dask finances</strong>, unauthorized use will be processed without prior notice.
    </div>

    <v-divider></v-divider>

    <div class="text-white footer-copyright">
      All right reserved &copy; {{ new Date().getFullYear() }} — <strong>DaskFinances</strong>
    </div>
  </v-footer>
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');

  * {
    font-family: 'Sora',sans-serif;
  }

  $main-background: #17191c;
  $secondary-color: #25272c;
  $blue-color: rgb(0, 157, 255);

  .footer {
    background-color: #090909;

    .footer-text {
      color: rgb(176, 176, 176);
      font-size: small;
    }

    .footer-copyright {
      font-size: small;
    }
  }
</style>