<template>
  <v-footer
    class="footer text-center d-flex flex-column py-7"
  >
    <div class="mb-1">
      <GitHubLink
        link="https://github.com/Luizboaventura1/daskfinances"
      />
    </div>

    <div class="mb-3">
      <p class="text-white">
        Developed by 
        <a
          class="text-decoration-none font-weight-bold text-white"
          href="https://github.com/Luizboaventura1"
        >
          Luiz
        </a>
      </p>
    </div>

    <div class="footer-text pb-2">
      All rights reserved to <strong>dask finances</strong>, unauthorized use will be processed without prior notice.
    </div>

    <div class="footer-text pb-2">
      <router-link class="footer-text-termos" to="/privacy-policy">Politica de privacidade</router-link> |
      <router-link class="footer-text-termos" to="/terms">Termos</router-link>
    </div>

    <v-divider></v-divider>

    <div class="text-white footer-copyright">
      All right reserved &copy; {{ new Date().getFullYear() }} — <strong>DaskFinances</strong>
    </div>
  </v-footer>
</template>

<script setup>
import GitHubLink from '../Buttons/ButtonsHome/GitHubLink.vue';
</script>

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

    .footer-text-termos {
      color: rgb(176, 176, 176);
      text-decoration: none;
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
</style>