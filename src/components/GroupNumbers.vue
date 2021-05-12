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

export default {
  name: 'GroupNumbers',
  components: {
    NumberButton,
    SelectedsNumbersText
  },
  computed: {
    totalNumbers() {
      return this.$store.getters.isSenaGame ? GamesTypes.sena.totalNumber : GamesTypes.quina.totalNumber
    },
    isMaximumNumberTotal() {
      return this.$store.state.numbersSelecteds.length === 15
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
      this.$store.state.numbersSelecteds.push(number)
    },
    removeNumber(number) {
      if(this.$store.state.numbersSelecteds.includes(number)) {
        const index = this.$store.state.numbersSelecteds.indexOf(number)

        return this.$store.state.numbersSelecteds.splice(index, 1)        
      }
    },
    getNumbersSelecteds() {
      return this.$store.state.numbersSelecteds.sort((a,b) => a - b)
    }
  },
}
</script>