<template>
  <div class="container">
    <switch-game />
    <lottery-card/>
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
}
</script>
