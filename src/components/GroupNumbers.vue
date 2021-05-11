<template>
  <div>
      <div class="row">
        <div v-for="number in totalNumbers" :key="number">
          <number-button :number="number"/>
        </div>
      </div>
  </div>
</template>

<script>
import NumberButton from './NumberButton'
import GamesTypes from '../types/Games'

export default {
  name: 'GroupNumbers',
  components: { NumberButton },
  props: {
    typeGame: String,
  },
  computed: {
    totalNumbers() {
      return this.typeGame == GamesTypes.sena.value ? GamesTypes.sena.totalNumber : GamesTypes.quina.totalNumber
    }
  }
}
</script>