<template>
  <div
    @click="$emit('readNotification')"
    class="badge" v-bind="propsBadge">
    <div
      v-if="unread"
      class="circle rounded-circle"
    ></div>
    <v-img width="20" src="../../assets/img-notification.svg"></v-img>
  </div>
</template>

<script setup>
import { db } from '@/firebase'
import { collection, onSnapshot,} from "firebase/firestore";
import { onMounted } from 'vue';
import { useStore } from 'vuex'
import { ref } from 'vue'
import { defineProps } from 'vue'
let store = useStore()

let unread = ref(false)

onMounted(async () => {
  onSnapshot(collection(db, "notifications"), (snapshot) => {
    let notifications = []
    snapshot.forEach((notification) => {
      if(store.state.token.id === notification.data().idUser) {
        notifications.push({
          id: notification.id,
          title: notification.data().title,
          text: notification.data().text,
          date: notification.data().date,
          link: notification.data().link,
          unread: notification.data().unread
        })
      }
    })
    unread.value = notifications.some(notification => notification.unread === true )
  });
})

defineProps({
  propsBadge: String
})

</script>

<style lang="scss" scoped>
  .badge {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    .circle {
      position: absolute;
      width: 12px;
      height: 12px;
      z-index: 10;
      right: -6px;
      top: -6px;
      background-color: rgb(199, 25, 25);
    }
  }
</style>