<template>
  <div class="lista-transacoes w-100">
    <div class="ma-3">
      <h1 class="text-h6 font-weight-bold text-white mb-5">Transações</h1>
    </div>
    <div class="min-scroll-transactions">
      <div class="nome-itens-lista d-flex align-center px-3 ma-3 rounded elevation-6">
        <div class="w-25">
          <span class="text-white font-weight-regular">Transação</span>
        </div>
        <div class="w-25">
          <span class="text-white font-weight-regular">Valor</span>
        </div>
        <div class="w-25">
          <span class="text-white font-weight-regular">Data</span>
        </div>
        <div class="w-25">
          <span class="text-white font-weight-regular">Tipo</span>
        </div>
      </div>
      <div class="container-transacoes">
        <div
        v-for="(transacao,index) in transacoes"
        :key="transacao"
        class="transacao-single px-3 mx-3">
        <div class="info-transacao w-100 d-flex align-center">
          <div class="w-25 overflow-hidden">
            <span class="text-white font-weight-regular">{{transacao.nome}}</span>
          </div>
          <div class="w-25 overflow-hidden">
            <span class="text-white font-weight-regular">R$ {{parseFloat(transacao.valor).toFixed(2).replace('.',',')}}</span>
          </div>
          <div class="w-25">
            <span class="text-white font-weight-regular">{{transacao.data}}</span>
          </div>
          <div class="w-25">
            <span class="text-white font-weight-regular">{{transacao.tipo}}</span>
          </div>
        </div>
        <div class="edit-transacao d-flex justify-start align-center w-100">
          <v-btn
            @click="transactionEdit(index)"
            class="bg-blue-accent-4 font-weight-bold text-white me-3"
          >
            Editar
          </v-btn>
          <DeleteBtn
            @deleteClick="deleteTransaction(index)"
          />
        </div>
        </div>
      </div>
        </div>
    </div>
  <div
    v-if="stateTransactionModal"
    class="modal-transaction-edit pa-3 d-flex justify-center align-center"
  >
    <div class="edit-form elevation-3 px-3">
      <nav class="d-flex py-4">
        <div class="transaction-name w-75">
          <span
            class="font-weight-bold text-h5 text-white"
          >
            {{ editName }}
          </span>
        </div>
        <div class="close-popup w-25 d-flex justify-end">
          <CloseButton
            @click="stateTransactionModal = false"
          />
        </div>
      </nav>
      <div class="container-edit justify-center align-center">
        <div class="edit-name w-100 mb-5">
          <div class="d-flex align-center mb-3">
            <svg id="icon-edit" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" fill-rule="evenodd" class=""><g><path d="m19.638 7.199-5.997-4.967A.997.997 0 0 0 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.969a.998.998 0 0 0-.362-.77zM12 8a1 1 0 0 0 1.005 1L18 8.974V20H6V4h6zM9 18h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0-4h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm5-7.005 2.242-.012L14 5.126z" data-original="#000000" class=""></path></g></svg>
            <span class="ms-4 text-white">Descrição</span>
          </div>
          <div class="edit-description">
            <input
              class="input-edit pa-3"
              type="text"
              placeholder="Descrição"
              v-model="editName"
            >
          </div>
        </div>
        <div class="edit-transaction-value w-100 mb-5">
          <div class="d-flex align-center mb-3">
            <svg id="icon-edit" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm4-8c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268a1 1 0 0 0 1-1 .768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 7.999 10c0-1.654 1.346-3 3-3V6a1 1 0 1 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 16 14.001Z" data-original="#000000" class=""></path></g></svg>
            <span class="ms-4 text-white">Valor da transação</span>
          </div>
          <div>
            <input
              class="input-edit pa-3"
              placeholder="Valor da transacao"
              type="text"
              v-model="editTransactionValue"
            >
          </div>
        </div>
        <div class="edit-date w-100 mb-5">
          <div class="d-flex align-center mb-3">
            <svg id="icon-edit" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Zm0-8a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Zm-7 4a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1Z" data-original="#000000" class=""></path></g></svg>
            <span class="ms-4 text-white">Data da transação</span>
          </div>
          <div>
            <input
              class="input-edit pa-3"
              type="date"
              placeholder="Data"
              v-model="editDate"
            >
          </div>
        </div>
        <div class="container-edit-buttons d-flex justify-space-between pb-4">
          <v-btn
            @click="saveChanges"
            class="rounded me-2 bg-green-accent-3"
          >
            Salvar
          </v-btn>
          <v-btn
            class="rounded bg-red-accent-3"
            @click="stateTransactionModal = false"
          >
            Cancelar
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <SuccessPopupPanel
    :statePopupPanel="statePopupPanel"
  >
    {{ textPopupPanel }}
  </SuccessPopupPanel>
  <ConfirmModal
    @confirmButton="confirmDeleteTransaction"
    @cancelButton="cancelButton"
    :stateConfirmModal="stateConfirmModal"
  >
    {{ messageConfirmModal }}
  </ConfirmModal>
  <!--<v-btn @click="sendMessage">Send</v-btn>-->
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { db } from '@/firebase'
import { collection, onSnapshot, updateDoc, deleteDoc, doc} from "firebase/firestore";
import { onMounted } from 'vue';
import CloseButton from '@/components/Buttons/CloseButton.vue'
import SuccessPopupPanel from '@/components/Popups/PanelPopups/SuccessPopupPanel.vue'
import DeleteBtn from '@/components/Buttons/DeleteBtn.vue'
import ConfirmModal from '../Popups/PanelPopups/ConfirmModal.vue';

/*const sendMessage = () => {
  addDoc(collection(db, "notifications"), {
            title: 'DaskFinances',
            text: 'Saldo e transações resetadas.',
            date: String(new Date()),
            link: '/',
            unread: true
          });
}*/

const store = useStore()

let token = store.state.token

let transacoes = ref([])

onMounted(async () => {
  onSnapshot(collection(db, "transacoes"), (snapshot) => {
    let newTransactions = ref([])
    snapshot.forEach((docTransaction) => {
      if(token.id === docTransaction.data().idUser) {
        newTransactions.value.push({
          id: docTransaction.id,
          nome: docTransaction.data().nome,
          valor: docTransaction.data().valor,
          tipo: docTransaction.data().tipo,
          data: docTransaction.data().data,
          idUser: docTransaction.data().idUser
        })
      }
      if(docTransaction.data().nome === 'a') {
        let docRef = doc(db,'transacoes','0SUE45ZYzIkKkAz4aqH3')
        deleteDoc(docRef)
  
        stateConfirmModal.value = false
      }
    })
    transacoes.value = newTransactions.value
  });
})

let currentyIdTransaction = ref('')

const transactionEdit = ((index) => {
  currentyIdTransaction.value = transacoes.value[index].id

  stateTransactionModal.value = true
  currentyTransaction.value = {...transacoes.value[index]}

  editName.value = currentyTransaction.value.nome
  editTransactionValue.value = currentyTransaction.value.valor
  editDate.value = currentyTransaction.value.data
})

let currentyTransaction = ref({})
let stateTransactionModal = ref(false)

let editName = ref("")
let editTransactionValue = ref("")
let editDate = ref("")

const saveChanges = () => {
  const transactionDocRef = doc(db, 'transacoes', currentyIdTransaction.value);

  updateDoc(transactionDocRef, {
    nome: editName.value,
    valor: editTransactionValue.value,
    data: editDate.value.replace(/-/g,'/'),
  })

  alertPopupPanel('Alterado com sucesso!')
  stateTransactionModal.value = false
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

// Delete Transaction

let messageConfirmModal = ref()
let stateConfirmModal = ref(false)
let indexDeleteTransaction = ref()

const deleteTransaction = (index) => {
  stateConfirmModal.value = true
  messageConfirmModal.value = 'Deletar transação?'
  indexDeleteTransaction.value = index
}

const cancelButton = () => {
  stateConfirmModal.value = false
}

const confirmDeleteTransaction = async () => {
  let docRef = doc(db,'transacoes',transacoes.value.at(indexDeleteTransaction.value).id)
  await deleteDoc(docRef)
  
  stateConfirmModal.value = false
}

</script>

<style lang="scss" scoped>
.lista-transacoes {
  overflow-x: auto;
  .min-scroll-transactions {
    min-width: 500px;
  }
    .nome-itens-lista {
      background-color: #4f5258;
      height: 50px;
      min-width: 500px;
    }

    .container-transacoes {
      
      .transacao-single {
        min-width: 500px;
        background-color: #25272c;
        height: 50px;
        overflow: hidden;
        transition: .3s;

        &:hover {
          height: 100px;
        }
      }

      .info-transacao {
        min-height: 50px;
      }

      .edit-transacao {
        height: 50px;

        .excluir-transacao {
          svg {
            fill: rgb(101, 101, 101) !important;widows: 27px;height: 27px;
            transition: .3s;
            cursor: pointer;
            &:hover {
              fill: rgb(205, 24, 24) !important;
            }
          }
        }
      }
    }
  }

  // Modal

  .modal-transaction-edit {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #17191c9b;
    backdrop-filter: blur(5px);

    .edit-form {
      background-color: #25272c;
      max-width: 500px;
      width: 100%;
    }
  }

  #icon-edit {
    width: 25px;
    height: 25px;
    fill: white;
  }

  .input-edit {
    outline: none;
    border: none;
    width: 100%;
    background-color: #34363c;
    &:focus {
      border-bottom: 1px solid rgb(0, 170, 255);
    }
  }

  .container-edit-buttons {
    .v-btn:nth-of-type(1) {
      width: 72%;
    }

    .v-btn:nth-of-type(2) {
      width: 23%;
    }
  }

</style>