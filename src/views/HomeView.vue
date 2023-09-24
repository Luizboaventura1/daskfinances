<template>
  <v-app theme="dark">
    <header>
      <v-container>

        <!-- Navbar -->

        <nav class="d-flex">
          <div class="container-logo w-25 d-flex justify-start align-center">
            <router-link to="/">
              <v-img
                class="img-nav"
                src="../assets/logo-daskfinances-semfundo.png"
              ></v-img>
            </router-link>
          </div>
          <div class="container-menu w-75 d-flex justify-end align-center">
            <ul class="d-flex align-center">
              <li class="px-2">
                <v-btn
                  v-if="hasAccount"
                  class="to-enter font-weight-bold"
                  to="/painel"
                >
                  Entrar
                </v-btn>
              </li>
              <li class="px-2">
                <BtnLoginNav
                  v-if="notLogged"
                  link="/auth/login"
                >
                  Login
                </BtnLoginNav>
              </li>
            </ul>
          </div>
        </nav>
        <main class="d-flex align-center">
          <div class="w-50">
            <div>
              <h1 class="text-white">Controle melhor <span class="line-headline">suas</span> <span class="line-headline">finanças</span> conosco!</h1>
              <p class="text-grey-lighten-2 mb-12">Sistema completo,rápido e moderno.</p>
              <BtnLoginNav
                @click="linkPagina()"
                link="/auth/registrar"
              >
                Comece agora!
              </BtnLoginNav>
            </div>
          </div>
          <div class="w-50">
            <v-img
              class="img-nav"
              src="../assets/undraw_chart.png"
            ></v-img>
          </div>
        </main>
      </v-container>
    </header>

    <!-- Container Benefits -->

    <section class="container-benefits py-7">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card class="card-benefits w-100 pa-4">
              <div>
                <v-img
                  class="img-benefits"
                  src="../assets/painel-de-controle.png"
                ></v-img>
              </div>
              <v-card-text class="text-benefits px-0 pt-6 text-white">
                Controle suas finanças de forma fácil
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card class="card-benefits w-100 pa-4">
              <div>
                <v-img
                  class="img-benefits"
                  src="../assets/seguro.png"
                ></v-img>
              </div>
              <v-card-text class="text-benefits px-0 pt-6 text-white">
                Segurança financeira em suas mãos
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-card class="card-benefits w-100 pa-4">
              <div>
                <v-img
                  class="img-benefits"
                  src="../assets/investimento.png"
                ></v-img>
              </div>
              <v-card-text class="text-benefits px-0 pt-6 text-white">
                Invista melhor o seu dinheiro
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Container Results -->

    <section class="container-results py-9">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="d-flex align-center"
          >
            <h1
              class="text-white font-weight-bold"
            >
              Otimize seus resultados e cresça seu patrimônio <span class="line-results"><span class="number-results">10x</span> mais rápido!</span>
            </h1>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="d-flex justify-center align-center px-8"
          >
            <v-img class="img-results" src="../assets/growth-chart.svg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Efficiency -->

    <section class="d-flex justify-center container-efficiency px-4 px-md-0 py-10">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <v-img
              class="w-100 img-efficiency"
              src="../assets/undraw_performance_overview_re_mqrq.svg"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <h1 class="font-weight-bold mb-5 text-white">Tenha mais controle e eficiência em suas movimentações!</h1>
            <BtnLoginNav
                @click="linkPagina()"
                link="/auth/registrar"
            >
              Comece agora!
            </BtnLoginNav>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="container-testimonials py-7">
      <v-container>
        <h1
          class="text-center mb-7 text-h6 d-flex align-center"
        > 
          <div class="bar-title me-3"></div>
          Depoimentos
        </h1>
        <v-row>
          <v-col
            v-for="testimonial in testimonials"
            :key="testimonial"
            cols="12"
            md="4"
            class="d-flex justify-center"
          >
            <div class="testimonial rounded-lg pa-4 elevation-6">
              <div class="h-75">
                <h1
                  class="text-subtitle-1"
                >
                  {{ testimonial }}
                </h1>
              </div>
              <div class="h-25 d-flex align-end">
                <div class="d-flex">
                  <v-img
                    v-for="star in [,,,,]"
                    :key="star" 
                    width="16"
                    height="16"
                    class="me-1"
                    src="../assets/black-star-silhouette.png"
                  ></v-img>
                </div>
              </div>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CEO -->

    <section class="ceo py-14 px-4 px-md-0 d-flex justify-center">
      <v-container class="d-flex justify-center">
        <div class="card-ceo rounded-lg">
          <h1>Luiz</h1>
          <h3 class="text-subtitle-1 font-italic mb-4">Ceo/Front-end Developer</h3>
          <p>Criador da DaskFinances, uma plataforma de controle financeiro que ajuda pessoas a registrar seus gastos, receitas e aprender a cuidar melhor do seu dinheiro.</p>
        </div>
      </v-container>
    </section>
    <FooterHome />
  </v-app>
</template>

<script setup>
import BtnLoginNav from '@/components/Buttons/ButtonsHome/BtnLoginNav.vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { onMounted } from 'vue';
import FooterHome from '@/components/Footer/FooterHome.vue'

const router = useRouter();
const store = useStore();

const linkPagina = () => {
  if (store.state.token.tokenOn) 
    return router.push('/painel')

  return router.push('/auth/registrar')
}

onMounted(() => {
  if(store.state.token.tokenOn === true) {
    hasAccount.value = true
    notLogged.value = false
  }
})

let hasAccount = ref(false)
let notLogged = ref(true)

const testimonials = [
  "Sistema de controle de finanças simples e eficiente.",
  "Ótima ferramenta para organizar as finanças pessoais. Recomendo!",
  "Esse sistema me ajudou a economizar e planejar melhor minhas finanças. Muito útil!"
]

</script>

<style scoped lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');

  * {
    font-family: 'Sora',sans-serif;
  }

  $main-background: #17191c;
  $secondary-color: #25272c;
  $blue-color: rgb(0, 157, 255);

  header {
    width: 100%;
    height: 100vh;
    background-color: $main-background;

    nav {
      height: 50px;
      .img-nav {
        width: 50px;
      }

      ul {
        list-style-type: none;

        .to-enter {
          background-color: rgb(0, 157, 255);
          color: rgb(255, 255, 255);
          transition: .3s;
          &:hover {
            background-color: rgb(0, 116, 188);
          }
        }
      }
    }

    main {
      height: calc(100vh - 100px);

      h1 {
        font-size: 3rem;
      }

      .line-headline {
        text-decoration: underline;
        text-decoration-color: rgb(0, 179, 255);
      }
    }
  }

  @media screen and (max-width: 466px) {
    header {
      main {
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    main {
      div:nth-of-type(1) {
        width: 100% !important;
        padding: 0 15px;
      }

      div:nth-of-type(2) {
        
        display: none !important;
      }
    }
  }

  .container-benefits {
    background-color: $main-background;
    .card-benefits {
      background-color: $secondary-color;
      transition: .3s;
      &:hover {
        background-color: #37393e;
      }
    }

    .text-benefits {
      font-size: 16px;
    }

    .img-benefits {
      width: 40px;
    }
  }

  .container-results {
    background-color: $main-background;

    .img-results {
      max-width: 300px;
    }

    h1 {
      font-size: 30px;
    }

    .line-results {
      text-decoration: underline;
      text-decoration-color: $blue-color;
    }

    .number-results {
      color: $blue-color;
    }
  }

  .container-efficiency {
    background-color: #272a2d;
    h1 {
      font-size: 2rem;
    }

    .img-efficiency {
      max-width: 400px;
    }
  }

  @media screen and (max-width: 768px) {
    .container-results {
      h1 {
        text-align: center;
        font-size: 28px;
      }
    }
  }

  .container-testimonials {
    background-color: #17191c;

    .testimonial {
      width: 100%;
      max-width: 350px;
      height: 130px;
      background-color: #25272c;
    }
  }

  .real-time-users-container {
    background-color: #121213;

    h1 {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(to top right,rgb(0, 136, 255) 45%,rgb(0, 225, 255));
    }

    .line-rtu {
      height: 3px;
      width: 100%;
      background-image: linear-gradient(to top right,rgb(0, 136, 255) 45%,rgb(0, 225, 255))
    }
  }

  .bar-title {
    height: 3px;
    width: 25px;
    background-color: rgb(0, 136, 255);
  }

  .ceo {
    background-color: #272a2d;

    h3 {
      color: #9ea0a1;
    }

    .card-ceo {
      width: 100%;
      max-width: 550px;

    }
  }

</style>