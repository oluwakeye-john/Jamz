<template>
  <div class="container">
    <div class="spinner" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 3px solid transparent;
    border-top: 3px solid #ef5466;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }
}
</style>
