<template>
  <base-layout>
    <div class="w-full flex justify-center items-center">
      <div class="error-container">
        <div>
          <div class="illaustration">
            <img src="~/assets/empty.svg" alt="empty" />
          </div>
          <div class="text-center">
            <h1>Ouch. This page does not exist.</h1>
            <div class="text-sm">
              <nuxt-link to="/"><button>Go home</button></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.illaustration {
  width: 10rem;
  margin: 2rem auto;
  img {
    width: 100%;
  }
}

button {
  @apply bg-primary;
  margin: 2rem 0;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
