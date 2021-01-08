import {
  FAVORITE_KEY,
  GET_ALL_SONGS,
  TOGGLE_FETCHING,
  GET_FAVORITES,
  RECENT_KEY,
  GET_RECENT,
} from './types'
import { GET_ALL_SONGS_CALL } from '~/services/types'
import storage from '~/services/local-storage'

export const state = () => ({ songs: [], favorites: [], recent: [] })

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

  getRecent({ commit }) {
    const recent = storage.getArray(RECENT_KEY) || []
    commit(GET_RECENT, recent)
  },

  addToRecent({ commit }, item) {
    const recent = storage.getArray(RECENT_KEY) || []

    const resp = recent.filter((rec) => {
      if (rec._id === item._id) {
        return false
      } else {
        return true
      }
    })

    const payload = [item, ...resp].slice(0, 10)

    storage.set(RECENT_KEY, payload)
    commit(GET_RECENT, payload)
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

  [GET_RECENT](state, data) {
    state.recent = data
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
