<template>
  <div>
    <form>
      <div class="center row">
        <label class="sena-check">
          <input name="type" type="radio" :value="typesValues.sena.value" v-model="typeSelected" />
          <span>{{ typesValues.sena.label }}</span>
        </label>
        <label>
          <input name="type" type="radio" :value="typesValues.quina.value" v-model="typeSelected" />
          <span>{{ typesValues.quina.label }}</span>
        </label>
      </div>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'SwitchGame',
  data() {
    return {
      typeSelected: '',
      typesValues: {
        sena: { value: 'sena', label: 'Sena'},
        quina: { value: 'quina', label: 'Quina'},
      }
    }
  },
  watch: {
    typeSelected(value) {
      this.$emit('select', value)
    }
  },
  created() {
    this.typeSelected = this.typesValues.sena.value
  }
}
</script>

<style scoped>
  .sena-check {
    margin-right: 30px;
  }
</style>