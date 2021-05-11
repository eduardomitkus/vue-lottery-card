<template> 
  <div>
    <div class="col s1">
      <button class="left waves-effect waves-light btn size lighten-5 text-darken-2 number-button"
        :class="{ grey: !isSelected, 'grey-text': !isSelected }"
        @click="clickNumber"
      >
        {{ number }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberButton',
  props: {
    number: Number,
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    clickNumber() {
      this.isSelected = ! this.isSelected
      this.$emit('isSelected', this.isSelected)
    }
  }
}
</script>

<style scoped>
  .size {
    width: 45px;
  }

  .col.s1 {
    margin-bottom: 12px;
  }
  .row .col.s1 {
    width: 10%;
  }
</style>