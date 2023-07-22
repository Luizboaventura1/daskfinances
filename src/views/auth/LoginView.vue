<template>
  <header class="d-flex justify-center align-center">
    <v-container class="d-flex justify-center align-center">
      <form class="elevation-10 rounded-lg py-3 px-4">
        <h1 class="text-white text-center mb-5">Login</h1>
        <div class="mb-4">
          <input
          required
          v-model="gmail"
          class="text-white w-100 border-0 pa-2 rounded"
          type="email"
          placeholder="Seu email">
          <ErrorInputLogin
            :statePopup="stateErrorInputGmail"
          >
            Gmail incorreto!
          </ErrorInputLogin>
        </div>

        <div class="mb-6">
          <input
          required
          v-model="senha"
          class="text-white w-100 border-0 pa-2 rounded"
          type="password"
          placeholder="Sua senha">
          <ErrorInputLogin
            :statePopup="stateErrorInputPassword"
          >
            Senha incorreta!
          </ErrorInputLogin>
        </div>

        <v-btn
        :disabled="loader"
        :loading="loader"
        @click="logarUsuario()"
        class="w-100 my-3 button-entrar"
        >Entrar</v-btn>

        <div class="w-100 text-center">
          <router-link
          class="link-registrar text-decoration-none font-weight-light"
          to="/auth/registrar">Não tem uma conta?</router-link>
        </div>
      </form>
    </v-container>
  </header>

  <v-dialog
      v-model="loader"
      :scrim="false"
      persistent
      width="auto"
    >
      <v-card
        color="blue-darken-1"
      >
        <v-card-text>
          Entrando
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

  <AlertPopupPanel
    :statePopupPanel="statePopupPanel"
  >
    {{ textPopupPanel }}
  </AlertPopupPanel>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";
import { onMounted } from 'vue';
import ErrorInputLogin from '@/components/Popups/ErrorLogin/ErrorInputLogin.vue';
import AlertPopupPanel from '@/components/Popups/PanelPopups/AlertPopupPanel.vue';

let AllUsers = ref([])

onMounted(async () => {
  onSnapshot(collection(db, "usuarios"), (snapshot) => {
    snapshot.forEach((docUser) => {
      const user = {
        id: docUser.id,
        nome: docUser.data().nome,
        gmail: docUser.data().gmail,
        senha: docUser.data().senha
      }

      AllUsers.value.push(user)
    })
  });
})

let gmail = ref('')
let senha = ref('')

let store = useStore()
let router = useRouter()

const logarUsuario = () => {
  let gmailValue = gmail.value.trim()
  let senhaValue = senha.value.trim()

  if(gmailValue != '' && senhaValue != '') {
    //Verifica se tem uma conta existente
    let verificarSeAContaExiste = AllUsers.value.find(user => {
      if(user.gmail === gmailValue && user.senha === senhaValue) {
        return true
      }

      return false
    })

    let gmailUser = AllUsers.value.find((item) => item.gmail == gmailValue)
    let senhaUser = AllUsers.value.find((item) => item.senha == senhaValue)
    let nomeUser = AllUsers.value.find((item) => {
      if(item.gmail == gmailValue)
        return item.nome
    })

    if(verificarSeAContaExiste) {
      loader.value = true
      setTimeout(() => {
        loader.value = false
        router.push('/painel')
      },900)

      const token = {
        id: gmailUser.id,
        nome: nomeUser.nome,
        gmail: gmailUser.gmail,
        senha: senhaUser.senha,
        tokenOn: true
      }

      store.commit('addToken',token)
    }else {
      alertPopupPanel('Conta não encontrada!')
    }
  }else {
    ErrorInputs(gmail.value,senha.value)
  }
}

// Loader

let loader = ref(false)

// Popups

let stateErrorInputGmail = ref(false)
let stateErrorInputPassword = ref(false)

const ErrorInputs = (gmail,password) => {

  if(gmail === '') {
    stateErrorInputGmail.value = true
  }

  if(password === '') {
    stateErrorInputPassword.value = true
  }

}

let statePopupPanel = ref(false)
let textPopupPanel = ref('')

const alertPopupPanel = (msg) => {
  statePopupPanel.value = true
  textPopupPanel.value = msg

  setTimeout(() => {
    statePopupPanel.value = false
  },2000)
}

</script>

<style lang="scss" scoped>
  header {
    height: 100vh;
    background-color: #17191c;

    form {
      width: 100%;
      max-width: 400px;
      min-height: 300px;
      background-color: #25272c;

      input {
        outline: none;
        background-color: #17191c;
      }

      .link-registrar {
        color: #959595;
        font-size: 15px;

        &:hover {
          color: #949494;
          text-decoration: underline !important;
        }
      }

      .button-entrar {
        background-color: #00b2ff;
        color: white;
        box-shadow: none;

        &:hover {
          box-shadow: 0 0 10px #0084ff65;
        }
      }
    }
  }
</style>