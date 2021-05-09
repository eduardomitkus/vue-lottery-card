<template>
  <title-head />
  <router-view/>
</template>

<script>
import TitleHead from './components/TitleHead'

export default {
  components: {
    TitleHead
  }
}
</script>