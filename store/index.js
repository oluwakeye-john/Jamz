import { TOGGLE_FETCHING } from './types'
export const state = () => ({
  fetching: true,
})

export const actions = {
  toggleFetching({ commit }, val) {
    commit(TOGGLE_FETCHING, val)
  },
}

export const mutations = {
  [TOGGLE_FETCHING](state, val) {
    state.fetching = val
  },
}
