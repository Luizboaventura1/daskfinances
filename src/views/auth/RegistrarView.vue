<template>
  <header class="d-flex justify-center align-center">
    <v-container class="d-flex justify-center align-center">
      <form class="elevation-10 rounded-lg py-3 px-4">
        <h1 class="text-white text-center mb-5">Registrar</h1>

        <div>
          <v-text-field
            required
            label="Nome"
            v-model="nome"
            class="text-white w-100 border-0 pa-2 rounded"
            type="email"
            placeholder="Primeiro nome"
            :rules="nameRules"
            variant="outlined"
          ></v-text-field>
        </div>

        <div>
          <v-text-field
            label="Email"
            required
            v-model="gmail"
            class="text-white w-100 border-0 pa-2 rounded"
            type="email"
            placeholder="Seu email"
            :rules="emailRules"
            variant="outlined"
          ></v-text-field>
        </div>

        <div>
          <v-text-field
            label="Senha"
            required
            v-model="senha"
            class="text-white w-100 border-0 pa-2 rounded"
            type="password"
            placeholder="Sua senha"
            :rules="passwordRules"
            variant="outlined"
          ></v-text-field>
        </div>

        <v-btn
        :disabled="loader"
        :loading="loader"
        @click="registrarUsuario()"
        class="w-100 my-3 button-registrar"
        >Criar conta</v-btn>

        <div class="w-100 text-center">
          <router-link
          class="link-registrar text-decoration-none font-weight-light"
          to="/auth/login">Tem uma conta?</router-link>
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
          Registrando
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
import { db } from '@/firebase'
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import AlertPopupPanel from '@/components/Popups/PanelPopups/AlertPopupPanel.vue';
//import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

/* Auth
const auth = getAuth()

const registerUser = () => {
  createUserWithEmailAndPassword(auth,'luiz2123@gmail.com','233784').then(user => {
    console.log(user.user)
  }).catch(error => [
    console.log(error)
  ])
}
*/
//==================================

const store = useStore()

let AllUsers = ref([])

onMounted(async () => {
  onSnapshot(collection(db, "usuarios"), (snapshot) => {
    snapshot.forEach((user) => {
      const obj = {
        id: user.id,
        nome: user.data().nome,
        gmail: user.data().gmail,
        senha: user.data().senha
      }

      AllUsers.value.push(obj)
    })
  });
})

let nome = ref('')
let gmail = ref('')
let senha = ref('')

let router = useRouter()

const registrarUsuario = () => {
  let nomeValue = nome.value.trim()
  let gmailValue = gmail.value.trim()
  let senhaValue = senha.value.trim()

  if(confirmRules) {

    let verificarSeAContaExiste = AllUsers.value.some(user => user.gmail.startsWith(gmailValue))
    
    if(!verificarSeAContaExiste) {
      loader.value = true
      setTimeout(() => {
        loader.value = false
        router.push('/painel')
      },900)
      
      addDoc(collection(db, "usuarios"), {
        nome: nomeValue,
        gmail: gmailValue,
        senha: senhaValue
      });

      store.commit('addToken',{
        id: '',
        nome: nomeValue,
        gmail: gmailValue,
        senha: senhaValue,
        tokenOn: true
      })

    }else {
      alertPopupPanel('Essa conta já existe!')
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

const nameRules = ref([
  value => {
    if(value)
      return true
    return 'Senha obrigatória!'
  },
  value => {
    if(value.length >= 3) 
      return true
    return 'Minimo 3 letras'
  }
])

const emailRules = ref([
  value => {
    if(value)
      return true
    return 'Email obrigatório!'
  },
  value => {
    if(value.includes('@'))
      return true
    return 'Email inválido!'
  },
])

const passwordRules = ref([
  value => {
    if(value)
      return true
    return 'Senha obrigatória!'
  },
  value => {
    if(value.length >= 8)
      return true
    return 'Minimo 8 caracteres'
  }
])

const confirmRules = () => {
  if(
    nameRules.value[0] && nameRules.value[1] &&
    emailRules.value[0] && emailRules.value[1] &&
    passwordRules.value[0] && passwordRules.value[1]
  ) return true

  return false
}

</script>

<style lang="scss" scoped>

  header {
    height: 100vh;
    background-color: #17191c;

    form {
      width: 100%;
      max-width: 400px;
      min-height: 350px;
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

      .button-registrar {
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