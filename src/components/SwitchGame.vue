<template>
  <div>
    <form>
      <div class="center row">
        <label class="sena-check">
          <input id="sena" name="type" type="radio" :value="games.sena.value" v-model="typeSelected" />
          <span>{{ games.sena.label }}</span>
        </label>
        <label>
          <input id="quina" name="type" type="radio" :value="games.quina.value" v-model="typeSelected" />
          <span>{{ games.quina.label }}</span>
        </label>
      </div>
    </form>  
  </div>
</template>

<script>
import GamesTypes from '../types/Games'

export default {
  name: 'SwitchGame',
  data() {
    return {
      typeSelected: '',
      games: {},
    }
  },
  watch: {
    typeSelected(value) {
      this.$store.state.typeGame = value
    }
  },
  created() {
    this.games = GamesTypes
    this.typeSelected = this.games.sena.value
  },
}
</script>

<style scoped>
  .sena-check {
    margin-right: 30px;
  }
</style>