<template> 
  <div>
    <div class="col s1">
      <button class="left waves-effect waves-light btn size lighten-5 text-darken-2"
        :class="{ grey: !isSelected, 'grey-text': !isSelected }"
        @click="isSelected = !isSelected"
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
  }
}
</script>

<style scoped>
  .size {
    width: 45px;
  }

  .row .col.s1 {
    /* width: 10%; */
    margin-bottom: 4px;
  }
</style>