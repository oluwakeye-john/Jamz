<template>
  <div class="container">
    <sidebar />
    <div style="flex: 1; overflow-x: hidden" class="mb-16">
      <navbar />
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <bottom-nav />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: none;

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
