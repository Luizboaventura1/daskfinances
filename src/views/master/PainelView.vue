<template>
  <BalancePanel/>
  <div class="container-add-finance pa-3 rounded ma-3 elevation-6">
    <div class="w-100">
      <h1 class="text-white text-h6 font-weight-bold">Nova transação</h1>
    </div>
    <v-row class="py-3">
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <input
          v-model="nomeTransacao"
          placeholder="Transação"
          type="text"
          class="rounded-md text-white px-3 py-2 w-100">
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <input
          v-model="valorTransacao"
          placeholder="Valor"
          type="text"
          class="rounded-md text-white px-3 py-2 w-100"
          @input="validadeInput"
        >
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <input
          v-model="dataTransacao"
          placeholder="Data"
          type="date"
          class="rounded-md text-white px-3 py-2 w-100">
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <select v-model="tipoTransacao" class="rounded-md text-white px-3 py-2 w-100">
          <option value="">Selecione</option>
          <option value="receita">Receita</option>
          <option value="gasto">Gasto</option>
        </select>
      </v-col>
    </v-row>
    <div class="w-100 d-flex justify-end">
      <v-btn
      @click="addTransacao()"
      class="elevation-0 px-8 bg-green-accent-3">Adicionar</v-btn>
    </div>
  </div>
  <ListTransactions />
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
import ListTransactions from '@/components/DaskTransactions/ListTransactions.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { db } from '@/firebase'
import { collection, addDoc, onSnapshot,updateDoc,doc} from "firebase/firestore";
import { onMounted } from 'vue';
import AlertPopupPainel from "@/components/Popups/PanelPopups/AlertPopupPanel.vue";
import SuccessPopupPanel from '@/components/Popups/PanelPopups/SuccessPopupPanel.vue';
import BalancePanel from '@/components/BalanceContainer/BalancePanel.vue'

// Adicionar nova transação

let nomeTransacao = ref('')
let valorTransacao = ref('')
let dataTransacao = ref('')
let tipoTransacao = ref('')

const store = useStore()

const validadeInput = (() => {
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

const addTransacao = () => {

  if(noSpaces()) {
    
    addDoc(collection(db, "transacoes"), {
      idUser: store.state.token.id,
      nome: nomeTransacao.value,
      valor: valorTransacao.value,
      data: dataTransacao.value.replace(/-/g,'/'),
      tipo: tipoTransacao.value,
    });

    addDoc(collection(db, "notifications"), {
      idUser: store.state.token.id,
      title: 'Nova transação',
      text: `Transação ${formatNumber(valorTransacao.value)}`,
      date: String(new Date()),
      link: '/',
      unread: true
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
      if(store.state.token.id === docUser.data().idUser) {
        saldoUser.value = docUser.data().saldo
        receitaUser.value = docUser.data().receita
        gastoUser.value = docUser.data().gasto

        idSaldoCollection.value = docUser.id
      }
    })
  });
})

const formatNumber = (num) => {
  return `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`
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

</script>

<style lang="scss" scoped>
  // Add new finance

  .container-add-finance {
    background-color: #25272c;

    input {
      border: none;
      outline: none;
      background-color: #151516;
      width: 100%;
    }

    input::-webkit-input-placeholder {
      color: rgb(145, 145, 145);
    }

    select {
      border: none;
      outline: none;
      background-color: #151516;
      width: 100%;
    }
  }
</style>