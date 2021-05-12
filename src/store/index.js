import { createStore } from 'vuex'

export default createStore({
  state: {
    numbersSelecteds: [],
    typeGame: ''
  },
  mutations: {
    addNumbers(state, number) {
      state.numbersSelecteds.push(number)
    }
  }
})
