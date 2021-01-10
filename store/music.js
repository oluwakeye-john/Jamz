import {
  FAVORITE_KEY,
  TOGGLE_FETCHING,
  GET_FAVORITES,
  RECENT_KEY,
  GET_RECENT,
  SET_HOME_DATA,
} from './types'
import { GET_TOP_SONGS_CALL, GET_TOP_ARTISTS_CALL } from '~/services/types'
import storage from '~/services/local-storage'

export const state = () => ({ home: {}, favorites: [], recent: [] })

export const actions = {
  getInitial({ commit }) {
    const getHomeSongs = this.$axios.$get(GET_TOP_SONGS_CALL)
    const getHomeArtists = this.$axios.$get(GET_TOP_ARTISTS_CALL)
    Promise.all([getHomeSongs, getHomeArtists]).then((response) => {
      commit(TOGGLE_FETCHING, true, { root: true })
      commit(SET_HOME_DATA, response)
      commit(TOGGLE_FETCHING, false, { root: true })
    })
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
  [SET_HOME_DATA](state, data) {
    state.home = data
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
