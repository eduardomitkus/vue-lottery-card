<template>
  <div v-show="hasPrice()" class="center row grey-text text-darken-2">
    <div class="col s12">
      <h5>Valor do Jogo: {{ getPrice() }}</h5>
    </div>
    <div class="col s12">
      <button id="confirm-game" class="btn waves-effect waves-light" type="submit" name="action">Confirmar Jogo</button>
    </div>
  </div>

</template>

<script>
import Prices from '../types/Prices'

export default {
  name: 'ConfirmGame',
  methods: {
    getPrice() {
      return Prices[this.$store.state.typeGame][this.totalNumbersSelecteds]
    },
    hasPrice() {
      return this.totalNumbersSelecteds >= this.minTotal
    },
  },
  computed: {
    minTotal() {
      return this.$store.getters.isSenaGame ? 6 : 5
    },
    totalNumbersSelecteds() {
      return this.$store.state.numbersSelecteds.length
    }
  }
}
</script>