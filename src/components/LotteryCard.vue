<template>
    <div class="card">
      <div class="card-content">
        <group-numbers :type-game="type" />
      </div>
    </div>
</template>

<script>
import GroupNumbers from './GroupNumbers'

export default {
  name: 'LoteryCard',
  props: {
    type: String,
  },
  components: { GroupNumbers }
}
</script>