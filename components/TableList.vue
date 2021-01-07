<template>
  <div class="table-container">
    <h1 class="mt-0 mb-5 text-2xl font-bold">{{ title }}</h1>
    <table>
      <tr>
        <th class="sn">#</th>
        <th></th>
        <th>Artist</th>
        <th>Artist</th>
        <th>Album</th>
        <th>L</th>
      </tr>
      <tr v-for="(item, index) in data" :key="item.id">
        <td class="sn">{{ index + 1 }}</td>
        <td>
          <font-awesome-icon
            class="fav-icon"
            :icon="['fas', 'heart']"
            @click="toggleFavorite(item)"
          />
        </td>
        <td>
          <span class="name" @click="playTrack(item)">
            {{ item.name }}
          </span>
        </td>
        <td>-</td>
        <td>-</td>
        <td>02/01/2021</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({
      toggleFavorite: 'music/toggleFavorite',
      setTrack: 'player/setTrack',
    }),
    playTrack(item) {
      this.setTrack(item)
    },
  },
}
</script>

<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
  font-size: 14px;
}
table {
  width: 100%;
  text-align: left;

  .name {
    cursor: pointer;
  }

  th {
    padding: 1rem 0;
    color: #72727d;
    text-transform: uppercase;
  }

  .sn {
    color: #72727d;
  }

  .fav-icon {
    @apply text-primary;
    cursor: pointer;
  }

  td {
    padding: 1rem 0;
  }

  tr {
    border-bottom: 1px solid #32323d;
  }
}
</style>
