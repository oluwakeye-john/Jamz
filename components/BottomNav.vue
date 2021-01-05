<template>
  <div class="bottom-container">
    <button>
      <font-awesome-icon class="icon" :icon="['fas', 'backward']" />
    </button>
    <button>
      <font-awesome-icon class="icon icon--play" :icon="['fas', 'play']" />
    </button>
    <button>
      <font-awesome-icon class="icon" :icon="['fas', 'forward']" />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom-container {
  @apply bg-bgColor2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 50px;

  display: flex;
  justify-content: center;
}

.icon {
  margin: 0 1rem;

  &--play {
    font-size: 24px;
  }
}
</style>
