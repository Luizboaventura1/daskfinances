<template>
  <div></div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { db } from '@/firebase'
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const store = useStore()

onMounted(async () => {

  onSnapshot(collection(db, "usuarios"), (snapshot) => {
    snapshot.forEach((docUsuario) => {
      // Criar novo saldo
      if (docUsuario.data().gmail === store.state.token.gmail) {
        if (store.state.token.id === '') {
          store.state.token.id = docUsuario.id
          store.commit('addToken',store.state.token)

          addDoc(collection(db,'saldo'), {
            idUser: docUsuario.id,
            saldo: 0,
            receita: 0,
            gasto: 0
          })

          addDoc(collection(db, "notifications"), {
            idUser: docUsuario.id,
            title: 'DaskFinances',
            text: 'Aproveite nossa plataforma 100% gratuita!',
            date: String(new Date()),
            link: '/',
            unread: true
          });
        }
      }
    })
  });
})

</script>