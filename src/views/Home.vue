<template>
  <lottery-card>
    <group-numbers /> 
  </lottery-card>
</template>

<script>
import GroupNumbers from '../components/GroupNumbers.vue'
import LotteryCard from '../components/LotteryCard'

export default {
  name: 'Home',
  components: {
    LotteryCard,
    GroupNumbers
  }
}
</script>
