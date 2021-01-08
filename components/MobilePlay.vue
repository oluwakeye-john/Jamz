<template>
  <div class="modal-container">
    <div class="close-button" @click="handleClose">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>
    <div class="modal-image"><img :src="data.imageUrl" /></div>
    <h2 class="text-2xl my-5 font-bold">{{ data.name }}</h2>

    <controls :expanded="true" />

    <div style="width: 80%" class="my-4">
      <slider :expanded="true" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  width: 100%;
  height: 100%;

  display: none;
  flex-direction: column;
  padding: 6rem 0;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }
}

.modal-image {
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
}

.close-button {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
}
</style>
