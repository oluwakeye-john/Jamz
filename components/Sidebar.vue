<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <h1>Sidebar</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 250px;
  @media (max-width: 768px) {
    width: 0;
  }
}
.sidebar {
  width: 250px;
  min-height: 100vh;
  @apply bg-bgColor3;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem;

  @media (max-width: 768px) {
    transition: 0.3s;
    transform: translateX(-250px);
  }
}
.open {
  transform: translateX(0);
}
</style>
