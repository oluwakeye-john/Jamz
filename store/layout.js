import { TOGGLE_SIDEBAR } from './types'

export const state = () => ({
  sidebar: false,
})

export const actions = {
  toggleSidebarAction({ commit }, value) {
    commit(TOGGLE_SIDEBAR, value)
  },
}

export const mutations = {
  [TOGGLE_SIDEBAR](state, value) {
    state.sidebar = value
  },
}
