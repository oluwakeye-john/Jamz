<template>
  <div class="input-container">
    <font-awesome-icon class="icon" :icon="['fas', 'search']" />
    <input placeholder="Search..." />
    <div class="suggestion-container">
      <p v-for="(_, index) in 6" :key="index" class="suggestion-item">
        Hello world
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.input-container {
  font-size: 15px;
  position: relative;
  width: 60%;
  color: #fff;
  font-size: 14px;

  z-index: 4;

  @media (max-width: 768px) {
    width: unset;
    flex: 1;
  }
  .icon {
    margin-right: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
  }

  input {
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &:focus + .suggestion-container {
      /* display: block; */
    }
  }

  .suggestion-container {
    position: absolute;
    top: 200%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #23232d;
    display: none;
    border-radius: 4px;

    &:hover,
    &:focus,
    &:focus-within {
      /* display: block; */
    }
  }

  .suggestion-item {
    margin: 1rem 0;
  }
}
</style>
