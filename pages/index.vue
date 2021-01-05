<template>
  <div class="container">
    <sidebar />
    <div style="flex: 1; overflow: hidden">
      <navbar />
      <div class="content">
        <slide-list />
      </div>
    </div>
    <bottom-nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
}

.content {
  width: 100%;
  padding: 2rem;
}
</style>
