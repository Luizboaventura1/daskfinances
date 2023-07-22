import { createStore } from 'vuex'

export default createStore({
  state: {
    token: JSON.parse(localStorage.getItem('token')) ? 
    JSON.parse(localStorage.getItem('token')) : {tokenOn: false},
  },
  mutations: {
    addToken(state,data) {
      state.token = data
      localStorage.setItem('token', JSON.stringify(data))
    }
  },
})
