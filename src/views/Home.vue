<template>
  <div class="container">
    <switch-game @select="game" />
    <lottery-card :type="typeGame" />
  </div>
</template>

<script>
import LotteryCard from '../components/LotteryCard'
import SwitchGame from '../components/SwitchGame'

export default {
  name: 'Home',
  data() {
    return {
      typeGame: ''
    }
  },
  components: {
    LotteryCard,
    SwitchGame
  },
  methods: {
    game(game) {
      this.typeGame = game
    }
  }
}
</script>
