<template>
  <div class="container">
    <switch-game />
    <lottery-card>
      <group-numbers />
    </lottery-card>  
  </div>
  
</template>

<script>
import GroupNumbers from '../components/GroupNumbers'
import LotteryCard from '../components/LotteryCard'
import SwitchGame from '../components/SwitchGame'

export default {
  name: 'Home',
  components: {
    LotteryCard,
    GroupNumbers,
    SwitchGame
  }
}
</script>
