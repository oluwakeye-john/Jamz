import { GET_ALL_SONGS, TOGGLE_FETCHING } from './types'
import { GET_ALL_SONGS_CALL } from '~/services/types'

export const state = () => ({ songs: [] })

export const actions = {
  async getInitial({ commit }) {
    commit(TOGGLE_FETCHING, true, { root: true })
    const response = await this.$axios.$get(GET_ALL_SONGS_CALL)
    commit(GET_ALL_SONGS, response)
    commit(TOGGLE_FETCHING, false, { root: true })
  },
}

export const mutations = {
  [GET_ALL_SONGS](state, data) {
    state.songs = data
  },
}
