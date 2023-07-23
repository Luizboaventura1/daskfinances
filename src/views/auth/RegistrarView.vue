<template>
  <header class="d-flex justify-center align-center">
    <v-container class="d-flex justify-center align-center">
      <form class="elevation-10 rounded-lg py-3 px-4">
        <h1 class="text-white text-center mb-5">Registrar</h1>

        <div class="mb-4">
          <input
          required
          v-model="nome"
          class="text-white w-100 border-0 pa-2 rounded"
          type="email"
          placeholder="Primeiro nome">
          <ErrorInputLogin
            :statePopup="stateErrorInputName"
          >
            Preencha corretamente!
          </ErrorInputLogin>
        </div>

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
            Preencha corretamente!
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
            Preencha corretamente!
          </ErrorInputLogin>
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
import ErrorInputLogin from '@/components/Popups/ErrorLogin/ErrorInputLogin.vue';
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

  if(nomeValue != '' && gmailValue != '' && senhaValue != '' && errorRegister(nomeValue,gmailValue,senhaValue) === true) {

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
  else if(!errorRegister(nomeValue,gmailValue,senhaValue)) {
    alertPopupPanel('Preencha os campos corretamente!')
  }
  else {
    ErrorInputs(nome.value,gmail.value,senha.value)
  }
}


const errorRegister = (name,email,password) => {
  if(name.length > 1 && email.split('@').length > 1 && password.length >= 8) 
    return true
  return false
}

// Loader

let loader = ref(false)

// Popups

let stateErrorInputName = ref(false)
let stateErrorInputGmail = ref(false)
let stateErrorInputPassword = ref(false)

const ErrorInputs = (name,gmail,password) => {
  if(name === '') {
    stateErrorInputName.value = true
  }

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