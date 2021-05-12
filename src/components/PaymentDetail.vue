<template>
  <div class="card">
      <div class="card-content center">
        <h4 class="grey-text text-darken-2">{{ getMessage() }}</h4>
      </div>
    </div>
</template>

<script>
import Monetary from '../helper/Monetary'

export default {
  name: 'PaymentDetail',
  methods: {
    getCurrency() {
      return Monetary(this.$store.state.priceGame)
    },
    getText() {
      return `Você finalizou o jogo! Valor total: ${this.getCurrency()}`
    },
    getMessage() {
      return this.$store.state.priceGame ? this.getText() : 'Nenhum valor a exibir'
    }
  }
}
</script>