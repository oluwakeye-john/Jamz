import player from '../utils/Player'
import {
  SET_CURRENT_TIME,
  TOGGLE_FETCHING,
  TOGGLE_PLAYING,
  UP_BY_ONE_SECOND,
  SET_DURATION,
} from './types'
export const state = () => ({
  fetching: true,
  isPlaying: false,
  currentTrack: {
    url: '',
    name: 'Yosemite',
    duration: 0,
    currentTime: 0,
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

    const dur = player.getDuration()
    commit(SET_DURATION, dur)
    player.toggle()
  },

  seekAction({ commit }, val) {
    player.seek(val)
    commit(SET_CURRENT_TIME, val)
  },

  checkTime({ commit }) {
    const prev = Math.floor(player.getCurrentTime() || 0)
    commit(UP_BY_ONE_SECOND, prev)
  },

  setDuration({ commit }) {
    const dur = player.getDuration()

    commit(SET_DURATION, dur)
  },
}

export const mutations = {
  [TOGGLE_FETCHING](state, val) {
    state.fetching = val
  },
  [TOGGLE_PLAYING](state, val) {
    state.isPlaying = val
  },
  [SET_CURRENT_TIME](state, val) {
    state.currentTrack.currentTime = val
  },
  [SET_DURATION](state, val) {
    console.log('setting dur', val)
    state.currentTrack.duration = val
  },
  [UP_BY_ONE_SECOND](state, val) {
    if (state.isPlaying) {
      state.currentTrack.currentTime = val
    }
  },
}
