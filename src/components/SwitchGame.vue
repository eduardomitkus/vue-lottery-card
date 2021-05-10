<template>
  <div>
    <form>
      <div class="center row">
        <label class="sena-check">
          <input name="group1" type="radio" checked />
          <span>Sena</span>
        </label>
        <label>
          <input name="group1" type="radio" />
          <span>Quina</span>
        </label>
      </div>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'SwitchGame'
}
</script>

<style scoped>
  .sena-check {
    margin-right: 30px;
  }
</style>