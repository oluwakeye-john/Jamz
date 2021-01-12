<template>
  <div class="m-10 create-container">
    <div class="create-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
      },
    ],
  },
}
</script>

<style lang="scss">
.create-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .create-content {
    width: 25rem;
    margin: 0 auto;
    @apply bg-bgColor3;
    padding: 2rem;

    @media (max-width: 768px) {
      width: 100%;
      background: unset;
      padding: 2rem 0;
    }
  }
  input,
  .file-input,
  select {
    &:focus {
      outline: none;
    }
    @apply bg-bgColor2;
    margin: 5px 0;
    width: 100%;
  }
  input,
  select,
  button {
    padding: 8px 20px;
    border-radius: 5px;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .title {
    margin: 3rem 0;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .input-container {
    flex-direction: column;
    margin: 1rem 0;
    font-size: 14px;

    label {
      display: block;
      font-weight: 500;
    }
  }
}
</style>
