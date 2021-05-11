<template>
    <div class="card">
      <div class="card-content">
        <group-numbers />
      </div>
    </div>
</template>

<script>
import GroupNumbers from './GroupNumbers'

export default {
  name: 'LoteryCard',
  components: { GroupNumbers }
}
</script>