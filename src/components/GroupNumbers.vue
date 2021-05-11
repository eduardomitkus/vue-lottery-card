<template>
  <div>
      <div class="row">
        <div v-for="number in totalNumbers" :key="number">
          <number-button 
            @isSelected="(isSelected) => this.numberSelected(number, isSelected)" 
            :number="number"
            :is-maximum-number-total="isMaximumNumberTotal"
          />
        </div>
      </div>
      <selecteds-numbers-text :numbers-selecteds="getNumbersSelecteds()"/>
  </div>
</template>

<script>
import NumberButton from './NumberButton'
import GamesTypes from '../types/Games'
import SelectedsNumbersText from './SelectedsNumbersText'
import Store from '../store/index'

export default {
  name: 'GroupNumbers',
  components: {
    NumberButton,
    SelectedsNumbersText
  },
  props: {
    typeGame: String,
  },
  computed: {
    totalNumbers() {
      return this.typeGame == GamesTypes.sena.value ? GamesTypes.sena.totalNumber : GamesTypes.quina.totalNumber
    },
    isMaximumNumberTotal() {
      return Store.state.numbersSelecteds.length === 15
    }
  },
  methods: {
    numberSelected(number, isSelected) {
      if(! isSelected) {
        return this.removeNumber(number)
      }

      return this.addNumber(number)
    },
    addNumber(number) {
      Store.state.numbersSelecteds.push(number)
    },
    removeNumber(number) {
      if(Store.state.numbersSelecteds.includes(number)) {
        const index = Store.state.numbersSelecteds.indexOf(number)

        return Store.state.numbersSelecteds.splice(index, 1)        
      }
    },
    getNumbersSelecteds() {
      return Store.state.numbersSelecteds.sort((a,b) => a - b)
    }
  },
}
</script>