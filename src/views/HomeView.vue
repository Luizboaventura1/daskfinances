<template>
  <v-app theme="dark">
    <header>
      <v-container>
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
              <h1 data-aos="fade-left" class="text-white">Controle melhor <span class="line-headline">suas</span> <span class="line-headline">finanças</span> conosco!</h1>
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
    <section class="container-cta-app py-7">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="d-flex align-center"
          >
            <v-img class="img-results" src="../assets/mockup-celular.png"></v-img>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="d-flex justify-center align-center px-8"
          >
            <div>
              <h1 class="mb-7 text-white">100% gratuito comece a usar hoje!</h1>
              <BtnLoginNav
                @click="linkPagina()"
                link="/auth/registrar"
              >
                Comece agora!
              </BtnLoginNav>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="container-testimonials">
      <v-container>
        <v-row>
          <v-col
            cols="12"
          >
            <v-carousel
              cycle
              height="350"
              hide-delimiter-background
              show-arrows="hover"
            >
              <v-carousel-item
                v-for="slide in testimonials"
                :key="slide"
              >
                <div class="container-card-testimonials d-flex justify-center align-center">
                  <div
                    class="card-testimonials rounded-lg elevation-6 pa-3"
                  >
                    <div class="text-testimonials d-flex align-center">
                      <cite class="text-testimonials-cite text-white">"{{ slide.text }}"</cite>
                    </div>
                    <div class="assessment d-flex">
                      <div
                        class="mx-1"
                        v-for="star in [,,,,,]"
                        :key="star"
                      >
                        <v-img
                          class="img-assessment"
                          src="../assets/black-star-silhouette.png"
                        ></v-img>
                      </div>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <div class="real-time-users-container py-5">
      <div class="box-rtu d-flex justify-center">
        <v-container class="ps-12 ps-sm-0">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              class="d-flex justify-start justify-sm-center"
            >
            <div class="total-users">
              <h1 class="text-h3 text-sm-h2 font-weight-bold">+{{ formatNumber(totalUsers) }}</h1>
              <div class="line-rtu my-3"></div>
              <div class="text-subtitle-2 text-white">Usuários na plataforma</div>
            </div>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              class="d-flex justify-start justify-sm-center"
            >
            <div class="total-users">
              <h1 class="text-h3 text-sm-h2 font-weight-bold">+{{ formatNumber(totalTransactions) }}</h1>
              <div class="line-rtu my-3"></div>
              <div class="text-subtitle-2 text-white">Transaçõoes</div>
            </div>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              class="d-flex justify-start justify-sm-center"
            >
            <div class="total-users">
              <h1 class="text-h3 text-sm-h2 font-weight-bold">+20</h1>
              <div class="line-rtu my-3"></div>
              <div class="text-subtitle-2 text-white">Avaliações positivas</div>
            </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
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
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";

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

// Testimonials

const testimonials = ref([
  {
    text: 'Excelente sistema de controle financeiro pessoal. Recomendo!',
  },
  {
    text: 'Simples de usar e me ajudou a economizar dinheiro.',
  },
  {
    text: 'Muito útil para organizar minhas despesas diárias.',
  },
  {
    text: 'Ótima ferramenta para alcançar metas financeiras importantes.',
  },
])

let totalUsers = ref(0)
let totalTransactions = ref(0)

onMounted(async () => {
  onSnapshot(collection(db, "usuarios"), (snapshot) => {
    let sum = []
    snapshot.forEach((doc) => {
      sum.push(doc.id)
    })

    totalUsers.value = sum.length
  });

  onSnapshot(collection(db, "transacoes"), (snapshot) => {
    let sum = []
    snapshot.forEach((doc) => {
      sum.push(doc.id)
    })

    totalTransactions.value = sum.length
  });
})

const formatNumber = (number) => {
  if(number >= 1000) 
    return `${(parseFloat(number) / 1000).toFixed(0)} mil`
  else if(number >= 1000000)
    return `${(parseFloat(number) / 1000000).toFixed(0)} m`
  else if(number < 1000) 
    return number
}

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

  @media screen and (max-width: 768px) {
    .container-results {
      h1 {
        text-align: center;
        font-size: 28px;
      }
    }
  }

  .container-cta-app {
    background-image: linear-gradient(to right,#36393e,#222428);
  }

  .container-testimonials {
    background-color: #222428;
    .container-card-testimonials {
      width: 100%;
      height: 100%;
      .card-testimonials {
        background-color: $secondary-color;
        width: 100%;
        max-width: 300px;
        height: 150px;

        .text-testimonials {
          height: 100px;
        }

        .text-testimonials-cite {
          font-size: 15px; 
        }

        .assessment {
          height: 30px;

          .img-assessment {
            width: 15px !important;
          }
        }
      }
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
</style>