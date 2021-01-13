<template>
  <div class="container">
    <sidebar />
    <div style="flex: 1; overflow-x: hidden" class="mb-16">
      <navbar />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  max-width: none;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: block;
  }
}

.content {
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
}
</style>
