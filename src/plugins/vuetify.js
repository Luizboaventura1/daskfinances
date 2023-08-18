// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify  } from 'vuetify'

const mydefaultTheme = {
  dark: false,
  colors: {
    primary: '#25272c',
    secondary: '#0e0e0e',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


export default createVuetify({
  theme: {
    defaultTheme: 'mydefaultTheme',
    themes: {
      mydefaultTheme,
    },
  },
})