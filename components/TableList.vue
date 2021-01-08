<template>
  <div class="table-container">
    <h1 class="mt-0 mb-5 text-2xl font-bold">{{ title }}</h1>
    <table>
      <tr>
        <th class="sn">#</th>
        <th class="fav"></th>
        <th class="name">Name</th>
        <th class="artist">Artist</th>
        <th class="album">Album</th>
        <th class="l">L</th>
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

  @media (max-width: 768px) {
    td {
      min-width: 30px;
    }
  }

  th {
    color: #72727d;
    text-transform: uppercase;

    &.sn {
      width: 5%;
    }

    &.fav {
      width: 5%;
    }

    &.name {
      width: 30%;
    }
    &.artist,
    &.album,
    &.l {
      width: 20%;
    }

    @media (max-width: 768px) {
      &.fav {
        min-width: 50px;
      }
      &.name {
        min-width: 150px;
      }
      &.artist,
      &.album,
      &.l {
        min-width: 100px;
      }
    }
  }

  td,
  th {
    padding: 1rem 0;
  }

  .sn {
    color: #72727d;
  }

  .fav-icon {
    @apply text-primary;
    cursor: pointer;
  }

  tr {
    border-bottom: 1px solid #32323d;
  }
}
</style>
