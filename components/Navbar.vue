<template>
  <div class="navbar">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-bgColor2;
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 20px;
  }
}
</style>
