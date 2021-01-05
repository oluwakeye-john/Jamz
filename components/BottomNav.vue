<template>
  <div class="bottom-container border-border">
    <button class="icon">
      <font-awesome-icon :icon="['fas', 'backward']" />
    </button>
    <button class="icon icon--play">
      <font-awesome-icon :icon="['fas', 'play']" />
    </button>
    <button class="icon">
      <font-awesome-icon :icon="['fas', 'forward']" />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom-container {
  border-width: 1px;
  @apply bg-bgColor2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 50px;

  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
}

.icon {
  margin: 0 1rem;
  opacity: 0.6;

  &:focus {
    outline: none;
  }

  &--play {
    opacity: 1;
    font-size: 24px;
  }
}
</style>
