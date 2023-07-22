import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import FirebaseApp from 'firebase/app'
import VueApexCharts from 'vue3-apexcharts'
 
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(FirebaseApp)
  .use(VueApexCharts)
  .mount('#app')