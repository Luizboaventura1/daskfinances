<template>
  <v-app theem="dark">
    <header class="d-flex justify-center align-center">
      <v-container class="d-flex justify-center align-center">
        <form class="elevation-10 rounded-lg py-3 px-4">
          <h1 class="text-white text-center mb-5">Login</h1>
          <div class="mb-2">
            <v-text-field
              label="Email"
              v-model="gmail"
              class="text-white w-100 border-0 pa-2 rounded"
              type="email"
              placeholder="Seu email"
              prepend-inner-icon="mdi-email-outline"
              :rules="emailRules"
              variant="outlined"
            ></v-text-field>
          </div>
          <div class="mb-2">
            <v-text-field
              label="Senha"
              v-model="senha"
              class="text-white w-100 border-0 pa-2 rounded"
              placeholder="Sua senha"
              :rules="passwordRules"
              prepend-inner-icon="mdi-lock-outline"
              @click:append-inner="visiblePassword = !visiblePassword"
              :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visiblePassword ? 'text' : 'password'"
              variant="outlined"
            ></v-text-field>
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
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { db } from '@/firebase'
import { collection, onSnapshot} from "firebase/firestore";
import { onMounted } from 'vue';
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

  if(confirmRules) {

    let verificarSeAContaExiste = AllUsers.value.find(user => {
      if(user.gmail === gmailValue && user.senha === senhaValue) 
        return true

      return false
    })

    let gmailUser = AllUsers.value.find((item) => item.gmail === gmailValue)
    let senhaUser = AllUsers.value.find((item) => item.senha === senhaValue)
    let nomeUser = AllUsers.value.find((item) => {
      if(item.gmail === gmailValue)
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
  }
}

// Loader

let loader = ref(false)

// Popups

let statePopupPanel = ref(false)
let textPopupPanel = ref('')

const alertPopupPanel = (msg) => {
  statePopupPanel.value = true
  textPopupPanel.value = msg

  setTimeout(() => {
    statePopupPanel.value = false
  },2000)
}

// Rules login

let validationGmail = ref(false)
let validationPassword = ref(false)

const emailRules = [
  value => {
    if(value)
      return validationGmail.value = true
    else
      validationGmail.value = false
      return 'Email obrigatório!'
  },
  value => {
    if(value.includes('@') && !value.includes(' ') && value.split('@').length == 2 && value.split('@').at(1).trim() != '' && value.split('@').at(0).trim() != '')
      return validationGmail.value = true
    else
      validationGmail.value = false
      return 'Email inválido!'
  },
  value => {
    if(value.length <= 50)
      return validationGmail.value = true
    else
      validationGmail.value = false
      return 'Máximo 50 caracteres!'
  }
]

const passwordRules = [
  value => {
    if(value)
      return validationPassword.value = true
    else
      validationPassword.value = false
      return 'Senha obrigatória!'
  },
  value => {
    if(value.length >= 8)
      return validationPassword.value = true
    else
    validationPassword.value = false
      return 'Minimo 8 caracteres'
  },
  value => {
    if(value.split(' ').length === 1)
      return validationPassword.value = true
    else
    validationPassword.value = false
      return 'Senha inválida!'
  },
  value => {
    if(value.length <= 50)
      return validationPassword.value = true
    else
    validationPassword.value = false
      return 'Máximo 50 caracteres'
  }
]

const confirmRules = () => {
  if(validationGmail.value && validationPassword.value)
    return true
  return false
}

let visiblePassword = ref()

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