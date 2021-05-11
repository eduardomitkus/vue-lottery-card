<template>
  <div class="center row grey-text text-darken-2">
    <div v-if="numbersSelecteds.length > 0">
      <span class="text">Voce jogou as seguintes dezenas: </span>
      <span class="text" v-for="(numberSelected, key) in numbersSelecteds" :key="key">
        {{ additionalCharacter(key)+numberSelected }}
      </span>
    </div>
    <div v-else>
      Você ainda não marcou nenhuma dezena
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'SelectedsNumbersText',
  props: {
    numbersSelecteds: Array,
  },
  methods: {
    additionalCharacter(key) {
      return key === 0 ? '' : '+'
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .text {
      font-size: 12px;
    }
  }
</style>