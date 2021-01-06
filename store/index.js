import player from '../utils/Player'
import { TOGGLE_FETCHING, TOGGLE_PLAYING } from './types'
export const state = () => ({
  fetching: true,
  isPlaying: false,
  currentTrack: {
    url: '',
  },
})

export const actions = {
  toggleFetching({ commit }, val) {
    commit(TOGGLE_FETCHING, val)
  },
  togglePlaying({ commit }) {
    const isPlaying = player.isPlaying
    const toggled = !isPlaying

    commit(TOGGLE_PLAYING, toggled)
    player.toggle()
  },
}

export const mutations = {
  [TOGGLE_FETCHING](state, val) {
    state.fetching = val
  },
  [TOGGLE_PLAYING](state, val) {
    state.isPlaying = val
  },
}
