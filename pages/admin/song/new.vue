<template>
  <song-detail />
</template>

<script>
const initial = {
  name: '',
  imageUrl: '',
  fileUrl: '',
  artistId: '',
}

export default {
  data() {
    return {
      artists: [],
      input: initial,
    }
  },
}
</script>
