<template>
  <div>
    <div
      v-for="notification in notificationsList"
      :key="notification"
      class="new-notification rounded elevation-3 mb-2 pa-2"
    >
      <a
        @click="notificationLink(notification.link)"
      >
        <div class="top px-2 d-flex justify-space-between">
          <div class="d-flex">
            <div class="d-flex align-center justify-start">
              <NotificationIcon
                :icon="notification.icon"
                size="40"
              />
            </div>
            <div class="ms-4 d-flex justify-start align-center">
              <span class="notification-title font-weight-bold text-white">{{ notification.title }}</span>
            </div>
          </div>
          <div class="notification-date">
            <span class="text-white">{{ calculateElapsedTime(notification.date) }}</span>
          </div>
        </div>
        <div class="bottom px-2 d-flex align-center">
          <span class="notification-text text-white">
            {{ notification.text }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import NotificationIcon from '@/components/Notifications/NotificationIcon.vue'
import { defineProps } from 'vue'

defineProps({
  notificationsList: Object,
  value: Number
})

const calculateElapsedTime = (time) => {
  const notificationTime = new Date(time);
  const currentTime = new Date();
  const elapsedMinutes = Math.floor((currentTime - notificationTime) / (1000 * 60));

  if (elapsedMinutes < 1) {
    return "Agora";
  } else if (elapsedMinutes < 60) {
    return (elapsedMinutes > 1) ? `Há ${elapsedMinutes} minutos`: `Há ${elapsedMinutes} minuto`
  }
  else if (elapsedMinutes >= 1440) {
    const elapsedDays = Math.floor(elapsedMinutes / 1440)
    return (elapsedDays > 1) ? `Há ${elapsedDays} dias` : `Há ${elapsedDays} dia`
  } else {
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    return (elapsedHours > 1) ? `Há ${elapsedHours} horas` : `Há ${elapsedHours} hora`
  }
}

const notificationLink = (link) => {
  if(link != '/')
    return location.href = link
}
</script>

<style lang="scss" scoped>
  .new-notification {
    cursor: pointer;
    height: 110px;
    width: 100%;
    min-width: 300px;
    background-color: rgb(41, 44, 46);
    transition: .3s;
    &:hover {
      background-color: rgb(54, 57, 60);
    }

    .top {
      height: 35px;
    }

    .bottom {
      height: 65px;
    }
  }

  .notification-date {
    font-size: 15px;
  }
</style>