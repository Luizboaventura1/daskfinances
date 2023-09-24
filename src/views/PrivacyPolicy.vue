<template>
  <v-app>
    <header class="background">
      <v-container>
        <BackButton />
        <main class="rounded-lg pa-3 mt-9">
          <div class="text-white">
            <v-container>
              <h1 class="font-weight-bold text-h6 mb-9 text-center">Política de Privacidade do Sistema de Controle de Finanças Pessoais</h1>

              <h1 class="font-weight-bold text-h6 mb-2">Privacidade e Segurança:</h1>
              <p class="text-grey-lighten-1">Nós levamos a privacidade e a segurança dos seus dados a sério. As informações inseridas no sistema serão tratadas de acordo com nossa Política de Privacidade. No entanto, nenhum sistema de transmissão ou armazenamento de dados na Internet é 100% seguro. Ao utilizar nosso sistema, você reconhece os riscos associados à segurança de dados.</p>
              <br>

              <h1 class="font-weight-bold text-h6 mb-2">Coleta de Informações:</h1>
              <p class="text-grey-lighten-1">Coletamos informações pessoais que você nos fornece, como nome e endereço de e-mail, para melhorar sua experiência de uso. Esses dados serão tratados de acordo com nossa Política de Privacidade.</p>
              <br>

              <h1 class="font-weight-bold text-h6 mb-2">Uso de Cookies:</h1>
              <p class="text-grey-lighten-1">Utilizamos cookies para melhorar a funcionalidade do nosso sistema e para personalizar sua experiência. Ao utilizar nosso sistema, você consente com o uso de cookies conforme nossa Política de Cookies.</p>
              <br>

              <h1 class="font-weight-bold text-h6 mb-2">Compartilhamento de Dados:</h1>
              <p class="text-grey-lighten-1">Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para cumprir as funcionalidades do sistema ou exigido por lei.</p>
              <br>

              <h1 class="font-weight-bold text-h6 mb-2">Segurança dos Dados:</h1>
              <p class="text-grey-lighten-1">Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, não podemos garantir a segurança absoluta dos dados transmitidos pela Internet.</p>
              <br>

              <h1 class="font-weight-bold text-h6 mb-2">Alterações na Política:</h1>
              <p class="text-grey-lighten-1">Reservamo-nos o direito de modificar nossa Política de Privacidade a qualquer momento. As alterações serão efetivas assim que forem publicadas no sistema.</p>
              <br>

              <p class="text-grey-lighten-1">Ao utilizar nosso Sistema de Controle de Finanças Pessoais, você concorda com nossa Política de Privacidade. Se você não concordar, por favor, não continue a utilizar o sistema.</p>

            </v-container>
          </div>
        </main>
      </v-container>
    </header>
  </v-app>
</template>

<script setup>
import BackButton from "@/components/Buttons/BackButton.vue";
</script>

<style lang="scss" scoped>
.background {
  background-color: black !important;
  height: 100%;
}

main {
  background-color: #1d1f21;
}
</style>  