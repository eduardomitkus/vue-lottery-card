import { createStore } from 'vuex'

export default createStore({
  state: {
    numbersSelecteds: [],
    typeGame: ''
  },
  getters: {
    senaNumbersSelecteds: state => {
      return state.numbersSelecteds.filter(number => number <= 60)
    }
  }
})
