<template> 
  <div>
    <div class="col s1">
      <a class="left waves-effect waves-light btn size grey lighten-5 grey-text text-darken-2">{{ number }}</a>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'NumberButton',
  props: {
    number: Number
  }
}
</script>

<style scoped>
  .size {
    width: 45px;
  }

  .row .col.s1 {
    width: 9.3333333333%;
    margin-bottom: 4px;
  }
  
</style>