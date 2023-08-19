<template>
  <div
    v-if="stateModal"
    class="background-modal d-flex align-center justify-center px-3"
  >
    <div class="add-new-transaction-modal pa-4 rounded-lg">
      <nav class="d-flex pb-6 justify-space-between">
        <h1 class="text-white">Nova transação</h1>
        <slot name="nav" />
      </nav>

      <div class="inputs-container">
        <input
          v-model="nomeTransacao"
          class="input-transaction text-white w-100 border-0 px-2 py-3 rounded mb-4"
          placeholder="Descrição"
          maxlength="30"
        >
        <input
          v-model="valorTransacao"
          class="input-transaction text-white w-100 border-0 px-2 py-3 rounded mb-4"
          placeholder="Valor da transação"
          @input="validateInput"
          maxlength="14"
        >
        <input
          v-model="dataTransacao"
          type="date"
          class="input-transaction w-100 px-2 py-3 text-white rounded mb-4"
          min="2000-01-01" :max="currentDay()"
        >
      </div>

      <div class="transaction-type d-flex justify-space-between py-2 mb-4">
        <v-btn
          @click="prohibitedButton"
          class="prohibited-button elevation-0 text-white"
          :class="colorButtonProhibited"
        >
          Entrada
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512.171 512.171" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M479.046 283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305 4.779 347.526 0 341.638 0H170.971c-5.888 0-10.667 4.779-10.667 10.667v266.667H42.971a10.702 10.702 0 0 0-9.856 6.571c-1.643 3.989-.747 8.576 2.304 11.627l212.8 213.504c2.005 2.005 4.715 3.136 7.552 3.136s5.547-1.131 7.552-3.115l213.419-213.504a10.645 10.645 0 0 0 2.304-11.628z" data-original="#000000"></path></g></svg>
        </v-btn>
        <v-btn
          @click="exitButton"
          class="exit-button elevation-0"
          :class="colorButtonExit"
        >
          Saida
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512.171 512.171" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M479.046 283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305 4.779 347.526 0 341.638 0H170.971c-5.888 0-10.667 4.779-10.667 10.667v266.667H42.971a10.702 10.702 0 0 0-9.856 6.571c-1.643 3.989-.747 8.576 2.304 11.627l212.8 213.504c2.005 2.005 4.715 3.136 7.552 3.136s5.547-1.131 7.552-3.115l213.419-213.504a10.645 10.645 0 0 0 2.304-11.628z" data-original="#000000"></path></g></svg>
        </v-btn>
      </div>

      <div class="buttons-container">
        <v-btn
          @click="addTransacao"
          class="w-100 elevation-0 bg-blue-accent-3"
        >
            Confirmar
        </v-btn>
      </div>

    </div>
  </div>
  <AlertPopupPainel
    :statePopupPanel="statePopupPanel"
  >
    {{ textPopupPanel }}
  </AlertPopupPainel>
  <SuccessPopupPanel
    :statePopupPanel="stateSuccessPopup"
  >
    {{ textSuccess }}
  </SuccessPopupPanel>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { db } from '@/firebase'
import { collection, addDoc, updateDoc, onSnapshot,doc} from "firebase/firestore";
import AlertPopupPainel from "@/components/Popups/PanelPopups/AlertPopupPanel.vue";
import SuccessPopupPanel from '@/components/Popups/PanelPopups/SuccessPopupPanel.vue';
import { defineProps } from 'vue'
import { onMounted } from 'vue';

const store = useStore()

// Adicionar nova transação

let nomeTransacao = ref('')
let valorTransacao = ref('')
let dataTransacao = ref('')
let tipoTransacao = ref('')

const addTransacao = () => {

if(noSpaces()) {
  
  addDoc(collection(db, "transacoes"), {
    idUser: store.state.token.id,
    nome: nomeTransacao.value,
    valor: valorTransacao.value,
    data: dataTransacao.value.replace(/-/g,'/'),
    tipo: tipoTransacao.value,
  });

  const saldoDocRef = doc(db, 'saldo', idSaldoCollection.value);

  if (tipoTransacao.value === "receita") {
    updateDoc(saldoDocRef, {
    saldo: saldoUser.value += parseInt(valorTransacao.value),
    receita: receitaUser.value += parseInt(valorTransacao.value)
    })
  }else {
    updateDoc(saldoDocRef, {
    saldo: saldoUser.value -= parseInt(valorTransacao.value),
    gasto: gastoUser.value += parseInt(valorTransacao.value)
    })
  }

  successPopup('Transação conluída!')
  clearInputs()
}else {
  alertPopupPanel('Preencha os campos!')
}
}


// Mostrar dados de saldo

let saldoUser = ref(0)
let receitaUser = ref(0)
let gastoUser = ref(0)
let idSaldoCollection = ref()

onMounted(async () => {
  onSnapshot(collection(db, "saldo"), (snapshot) => {
    snapshot.forEach((docUser) => {
      console.log(docUser)
      if(store.state.token.id === docUser.data().idUser) {
        saldoUser.value = docUser.data().saldo
        receitaUser.value = docUser.data().receita
        gastoUser.value = docUser.data().gasto

        idSaldoCollection.value = docUser.id
      }
    })
  });
})

const validateInput = (() => {
  valorTransacao.value = valorTransacao.value.replace(/[^0-9.]/g, "")
})

const noSpaces = (() => {
  if(
     nomeTransacao.value.trim()  != '' 
  && valorTransacao.value.trim() != '' 
  && dataTransacao.value.trim()  != '' 
  && tipoTransacao.value.trim()  != ''
  )
    return true
    
  return false
})

const clearInputs = () => {
  nomeTransacao.value = ref('')
  valorTransacao.value = ref('')
  dataTransacao.value = ref('')
  tipoTransacao.value = ref('')
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

let stateSuccessPopup = ref(false)
let textSuccess = ref('')

const successPopup = (msg) => {
  stateSuccessPopup.value = true
  textSuccess.value = msg

  setTimeout(() => {
    stateSuccessPopup.value = false
  },2000)
}

defineProps({
  stateModal: Boolean
})

// transaction type
let colorButtonExit = ref('')
let colorButtonProhibited = ref('')

const prohibitedButton = () => {
  tipoTransacao.value = 'receita'
  colorButtonProhibited.value = 'bg-green-darken-2'
  colorButtonExit.value = ''
}

const exitButton = () => {
  tipoTransacao.value = 'gasto'
  colorButtonExit.value = 'bg-red-accent-3'
  colorButtonProhibited.value = ''
}

const currentDay = () => {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  const dataFormat = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`

  return dataFormat
}

</script>

<style lang="scss" scoped>

  .background-modal {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #17191c9b;
    backdrop-filter: blur(5px);

    .add-new-transaction-modal {
      background-color: #25272c;
      max-width: 500px;
      width: 100%;
    }

    .input-transaction {
      background-color: #33363c;
      outline: none;
      border: none;
    }

    .transaction-type {
      .prohibited-button {
        svg {rotate: 180deg;}
        background-color: #ffffff00;
      }

      .exit-button {
        background-color: rgba(255, 255, 255, 0);
        &:active {
          background-color: red;
        }
      }
      
      svg {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        fill: white;
      }
    }
  }
</style>