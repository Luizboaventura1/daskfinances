import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBR_uCu-xgljf7JktU0RpReDO42pa7CeJ4",
  authDomain: "dask-finances.firebaseapp.com",
  projectId: "dask-finances",
  storageBucket: "dask-finances.appspot.com",
  messagingSenderId: "855301062994",
  appId: "1:855301062994:web:9f9de4d13f386f58b37a8b",
  measurementId: "G-536EGF6T1K"
  /*apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID*/
})

const db = getFirestore(firebaseApp)

export {
  db
}
