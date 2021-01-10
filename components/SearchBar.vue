<template>
  <form
    class="input-container text-lightText"
    tabindex="0"
    @submit.prevent="searchMain"
  >
    <font-awesome-icon class="icon" :icon="['fas', 'search']" />
    <input v-model="input" placeholder="Search..." />
    <div v-if="data.length" class="suggestion-container">
      <p v-for="(item, index) in data" :key="index" class="suggestion-item">
        {{ item.name }}
      </p>
    </div>
  </form>
</template>

<script>
import { SEARCH_CALL } from '../services/types'
export default {
  data() {
    return {
      data: [],
      input: '',
    }
  },
  watch: {
    // input(newValue) {
    //   if (newValue) {
    //     this.searchSuggestion(newValue)
    //   } else {
    //     this.input = ''
    //     this.data = []
    //   }
    // },
  },
  methods: {
    async searchSuggestion(val) {
      try {
        const response = await this.$axios.get(SEARCH_CALL(val))
        if (response.data) {
          if (this.input) {
            this.data = response.data
          }
        } else {
          this.data = []
        }
      } catch {
        this.data = []
      }
    },
    searchMain() {
      this.$router.push(`/search/${this.input}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-container {
  font-size: 15px;
  position: relative;
  width: 60%;
  font-size: 14px;

  z-index: 4;

  &:focus {
    outline: none;
  }

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

  &:focus-within .suggestion-container {
    display: block;
  }

  input {
    background-color: transparent;
    &:focus {
      outline: none;
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

    &:active,
    &:focus {
      display: block;
    }
  }

  .suggestion-item {
    margin: 1rem 0;
  }
}
</style>
