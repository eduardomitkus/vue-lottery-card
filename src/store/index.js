import { createStore } from 'vuex'
import GamesTypes from '../types/Games'

export default createStore({
  state: {
    numbersSelecteds: [],
    typeGame: ''
  },
  getters: {
    senaNumbersSelecteds: state => {
      return state.numbersSelecteds.filter(number => number <= 60)
    },
    isSenaGame: state => {
      return state.typeGame == GamesTypes.sena.value
    }
  }
})
