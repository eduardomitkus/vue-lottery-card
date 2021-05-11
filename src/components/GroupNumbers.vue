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
      <selecteds-numbers-text :numbers-selecteds="numbersSelecteds.sort((a,b) => a - b)"/>
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
  props: {
    typeGame: String,
  },
  data() {
    return {
      numbersSelecteds: []
    }
  },
  computed: {
    totalNumbers() {
      return this.typeGame == GamesTypes.sena.value ? GamesTypes.sena.totalNumber : GamesTypes.quina.totalNumber
    },
    isMaximumNumberTotal() {
      return this.numbersSelecteds.length === 15
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
      this.numbersSelecteds.push(number)
    },
    removeNumber(number) {
      if(this.numbersSelecteds.includes(number)) {
        const index = this.numbersSelecteds.indexOf(number)

        return this.numbersSelecteds.splice(index, 1)
        
      }
    },    
  }
}
</script>