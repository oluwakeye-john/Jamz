import {
  FAVORITE_KEY,
  GET_ALL_SONGS,
  TOGGLE_FAVORITE,
  TOGGLE_FETCHING,
} from './types'
import { GET_ALL_SONGS_CALL } from '~/services/types'
import storage from '~/services/local-storage'

export const state = () => ({ songs: [] })

export const actions = {
  async getInitial({ commit }) {
    commit(TOGGLE_FETCHING, true, { root: true })
    const response = await this.$axios.$get(GET_ALL_SONGS_CALL)
    commit(GET_ALL_SONGS, response)
    commit(TOGGLE_FETCHING, false, { root: true })
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
    commit(TOGGLE_FAVORITE, payload)
  },
}

export const mutations = {
  [GET_ALL_SONGS](state, data) {
    state.songs = data
  },

  [TOGGLE_FAVORITE]() {
    //
  },
}
