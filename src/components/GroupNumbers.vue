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

export default {
  components: { NumberButton },
  name: 'GroupNumbers',
  data() {
    return {
      totalNumbers: 60
    }
  }
}
</script>