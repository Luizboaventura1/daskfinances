<template>
  <v-app theme="dark">
    <v-navigation-drawer
      color="#25272c"
      v-model="isDrawer"
    >
      <div class="container-logo px-4 py-4">
        <router-link
          class="text-decoration-none"
          to="/"
        >
          <h1
            class="text-white"
          >
            <strong>Dask</strong>Finances
          </h1>
        </router-link>
      </div>
      <div class="container-perfil w-100 py-3 ps-4 pe-2 d-flex align-center">
        <v-avatar
          color="#25272c"
          size="x-large"
        >
          <img class="w-100" :src="imgAvatar" alt="Logo">
        </v-avatar>
        <span class="text-white font-weight-bold ms-4">{{ nome }}</span>
      </div>
      <v-list>
        <v-list-item>
          <router-link class="text-decoration-none" to="/painel">
          <div class="btn-dashboard w-100 py-3 ps-6 pe-2 d-flex align-center">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M58.474 28.965 34.521 6.37a3.68 3.68 0 0 0-5.048 0L5.535 28.96a4.851 4.851 0 0 0 3.325 8.387h1.812v15.253a6.041 6.041 0 0 0 6.034 6.034h7.469a3.682 3.682 0 0 0 3.678-3.678v-9.849a1.035 1.035 0 0 1 1.034-1.034h6.232a1.035 1.035 0 0 1 1.033 1.034v9.849a3.682 3.682 0 0 0 3.679 3.678h7.457A6.04 6.04 0 0 0 53.32 52.6V37.348h1.823a4.853 4.853 0 0 0 3.33-8.383zm-7.653 3.383a2.5 2.5 0 0 0-2.5 2.5v17.753a1.035 1.035 0 0 1-1.033 1.034h-6.136v-8.527a6.04 6.04 0 0 0-6.033-6.034h-6.232a6.041 6.041 0 0 0-6.034 6.034v8.527h-6.147a1.035 1.035 0 0 1-1.034-1.034V34.848a2.5 2.5 0 0 0-2.5-2.5h-3.94l22.765-21.487 22.777 21.487z" data-original="#000000" class=""></path></g></svg>
            <span class="ms-3 text-white">Painel</span>
          </div>
        </router-link>
        </v-list-item>
        <v-list-item>
          <router-link class="text-decoration-none" to="/transacoes">
            <div class="btn-dashboard w-100 py-3 ps-6 pe-2 d-flex align-center">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.7600000000000002,0,0,0.7600000000000002,3.8399999999999963,3.835062732696535)"><path d="M22.72 27.537a2.01 2.01 0 0 1-.256-2.817L24.73 22H3c-1.097 0-2-.903-2-2s.903-2 2-2h26a2 2 0 0 1 1.536 3.28l-5 6a2.01 2.01 0 0 1-2.816.257zM29 14H3a2 2 0 0 1-1.536-3.28l5-6a2 2 0 1 1 3.072 2.56L7.271 10H29a2 2 0 0 1 0 4z" data-original="#000000" class=""></path></g></svg>
              <span class="ms-3 text-white">Transações</span>
            </div>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link class="text-decoration-none" to="/visao-geral">
            <div class="btn-dashboard w-100 py-3 ps-6 pe-2 d-flex align-center">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.8000000000000003,0,0,0.8000000000000003,51.19999694824219,51.20004882812498)"><path d="M495.93 82.599H332.84c-8.87 0-16.07 7.19-16.07 16.07v32.46c0 8.87 7.2 16.07 16.07 16.07h68.89l-140.96 140.95-59.76-59.76c-12.62-12.61-33.07-12.61-45.69 0L4.71 379.019c-6.28 6.27-6.28 16.45 0 22.72l22.95 22.96c6.27 6.27 16.45 6.27 22.72 0l127.79-127.79 59.75 59.76c12.619 12.623 33.072 12.628 45.69 0l163.79-163.79v68.89c0 8.87 7.19 16.07 16.07 16.07h32.46c8.88 0 16.07-7.2 16.07-16.07v-163.1c0-8.88-7.19-16.07-16.07-16.07z" data-original="#000000" class=""></path></g></svg>
              <span class="ms-3 text-white">Visão geral</span>
            </div>
          </router-link>
        </v-list-item>
        <div class="line"></div>
        <v-list-item>
          <router-link class="text-decoration-none" to="/perfil">
            <div class="btn-dashboard w-100 py-3 ps-6 pe-2 d-flex align-center">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zM9 25.74a7 7 0 0 1 14 0 11.94 11.94 0 0 1-14 0zm15.8-1.61a9 9 0 0 0-17.6 0 12 12 0 1 1 17.6 0zM16 6a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" data-name="Layer 38" data-original="#000000"></path></g></svg>
              <span class="ms-3 text-white">Perfil</span>
            </div>
          </router-link>
        </v-list-item>
        <v-list-item>
          <div @click="logout" class="btn-sair w-100 py-3 ps-6 pe-2 d-flex align-center">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m27.3 256 114.3-101.6v63.5h228.7v76.2H141.7v63.5zm457.4 203.2V52.8H179.8v127H256V129h152.4v254H256v-50.8h-76.2v127z" data-original="#000000" class=""></path></g></svg>
            <span class="ms-3 text-white">Sair</span>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="d-flex"
      color="#25272c"
    >
      <v-app-bar-nav-icon
        class="text-white"
        @click="isDrawer = !isDrawer"
      >
      </v-app-bar-nav-icon>
      <div class="w-100 d-flex justify-end me-5">
        <v-menu>
          <template v-slot:activator="{ props }">
            <BadgeIcon
              @readNotification="readNotification"
              :propsBadge="props"
            />
          </template>
          <NotificationBox>
            <NewNotification
              :notificationsList="notificationsList"
            />
          </NotificationBox>
        </v-menu>
      </div>

    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <ConfirmModal
      @confirmButton="confirmButton"
      @cancelButton="cancelButton"
      :stateConfirmModal="stateConfirmModal"
    >
    Tem certeza?
  </ConfirmModal>
  </v-app>
</template>

<script setup>
import store from '@/store'
import { ref } from 'vue'
import ConfirmModal from '@/components/Popups/PanelPopups/ConfirmModal.vue';
import NotificationBox from '@/components/Notifications/NotificationBox.vue';
import NewNotification from '@/components/Notifications/NewNotification.vue';
import BadgeIcon from '@/components/Notifications/BadgeIcon.vue';
import { db } from '@/firebase'
import { collection, onSnapshot,updateDoc, doc} from "firebase/firestore";
import { onMounted } from 'vue';

let imgDask = require('../../assets/logo-daskfinances-semfundo.png')

let notificationsList = ref([])

onMounted(async () => {
  onSnapshot(collection(db, "notifications"), (snapshot) => {
    let notifications = []
    snapshot.forEach((notification) => {
      if(store.state.token.id === notification.data().idUser) {
        notifications.push({
          id: notification.id,
          icon: imgDask,
          title: notification.data().title,
          text: notification.data().text,
          date: notification.data().date,
          link: notification.data().link
        })
      }
    })
    notificationsList.value = notifications
  });
})

const readNotification = () => {
  notificationsList.value.forEach(notification => {
    const notificationDocRef = doc(db, 'notifications', notification.id);

    updateDoc(notificationDocRef, {
      unread: false
    })
  })
}

let imgAvatar = require('@/assets/logo-daskfinances-semfundo.png')
let nome = ref(store.state.token.nome)

const logout = () => {
  stateConfirmModal.value = true
}

let isDrawer = ref(true)

const currentWidth = () => {
  if(window.innerWidth >= 768)
    return isDrawer.value = true
  return isDrawer.value = false
}

onMounted(() => {
  currentWidth()
})

// sign out of account

let stateConfirmModal = ref(false)

const cancelButton = () => {
  stateConfirmModal.value = false
}

const confirmButton = () => {
  location.href = '/'
  store.commit('addToken', {})
}

</script>

<style lang="scss" scoped>

.container-logo {
  h1 {font-size: 16px;font-weight: normal;}
}

.btn-dashboard:hover {
  background-color: #32343b;
  border-radius: 10px;

  span {
    transition: .3s;
    color: rgb(0, 200, 255) !important;
  }

  svg {
    transition: .3s;
    fill: rgb(0, 179, 255) !important;
  }
}

.btn-sair:hover {
  background-color: #32343b;
  border-radius: 10px;

  span {
    transition: .3s;
    color: rgb(255, 0, 68) !important;
  }

  svg {
    transition: .3s;
    fill: rgb(255, 0, 68) !important;
  }
}

svg {
  width: 25px;
  height: 25px;
  fill: white;
  cursor: pointer;
  user-select: none;
  transition: .3s;
  &:hover {
    fill: rgb(0, 179, 255);
  }
}
  
.line {
  height: 1px;
  width: 90%;
  background-color: #555556;
  margin: 6px auto;
}
</style>