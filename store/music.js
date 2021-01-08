import {
  FAVORITE_KEY,
  GET_ALL_SONGS,
  TOGGLE_FETCHING,
  GET_FAVORITES,
} from './types'
import { GET_ALL_SONGS_CALL } from '~/services/types'
import storage from '~/services/local-storage'

export const state = () => ({ songs: [], favorites: [] })

export const actions = {
  async getInitial({ commit }) {
    commit(TOGGLE_FETCHING, true, { root: true })
    const response = await this.$axios.$get(GET_ALL_SONGS_CALL)
    commit(GET_ALL_SONGS, response)
    commit(TOGGLE_FETCHING, false, { root: true })
  },

  getFavorites({ commit }) {
    const favorites = storage.getArray(FAVORITE_KEY) || []
    commit(GET_FAVORITES, favorites)
  },

  toggleFavorite({ commit }, item) {
    const favorites = storage.getArray(FAVORITE_KEY) || []
    let isFav = false

    const payload = favorites.filter((fav) => {
      if (fav._id === item._id) {
        isFav = true
        return false
      } else {
        return true
      }
    })

    if (!isFav) {
      payload.push(item)
    }

    storage.set(FAVORITE_KEY, payload)
    commit(GET_FAVORITES, payload)
  },
}

export const mutations = {
  [GET_ALL_SONGS](state, data) {
    state.songs = data
  },

  [GET_FAVORITES](state, data) {
    state.favorites = data
  },
}

export const getters = {
  isFavorite: (state) => (item) => {
    const resp = state.favorites.find((x) => x._id === item._id)
    if (resp && resp._id) {
      return true
    } else {
      return false
    }
  },
}
