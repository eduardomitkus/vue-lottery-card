<template>
  <div class="container">
    <switch-game />
    <lottery-card/>
    <confirm-game />
  </div>
</template>

<script>
import ConfirmGame from '../components/ConfirmGame.vue'
import LotteryCard from '../components/LotteryCard'
import SwitchGame from '../components/SwitchGame'

export default {
  name: 'Home',
  components: {
    LotteryCard,
    SwitchGame,
    ConfirmGame
  },
}
</script>
