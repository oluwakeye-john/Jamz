import { SET_SEARCH_RESULT, TOGGLE_SEARCH_FETCHING } from './types'
import { SEARCH_CALL } from '~/services/types'

export const state = () => ({
  result: [],
  input: '',
  fetching: true,
})

export const actions = {
  async getSearch({ commit }, input) {
    try {
      commit(TOGGLE_SEARCH_FETCHING, true)
      const response = await this.$axios.$get(SEARCH_CALL(input))
      commit(SET_SEARCH_RESULT, response)
      commit(TOGGLE_SEARCH_FETCHING, false)
    } catch {
      commit(SET_SEARCH_RESULT, [])
      commit(TOGGLE_SEARCH_FETCHING, false)
    }
  },
}

export const mutations = {
  [SET_SEARCH_RESULT](state, data) {
    state.result = data
  },
  [TOGGLE_SEARCH_FETCHING](state, val) {
    state.fetching = val
  },
}
