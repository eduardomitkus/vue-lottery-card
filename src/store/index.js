import { createStore } from 'vuex'

export default createStore({
  state: {
    numbersSelecteds: [],
    typeGame: ''
  },
  mutations: {
    setTypeGame(state, value) {
      state.typeGame = value
    },
    addNumbers(state, number) {
      state.numbersSelecteds.push(number)
    }
  }
})
