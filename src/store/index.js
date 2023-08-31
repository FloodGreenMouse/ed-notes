import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  actions: {
    addNote ({ commit }, note) {
      commit('ADD_NOTE', note)
    },
    removeNote ({ commit }, id) {
      commit('REMOVE_NOTE', id)
    }
  },
  mutations: {
    ADD_NOTE (state, note) {
      state.notes.push(note)
    },
    REMOVE_NOTE (state, id) {
      state.notes.splice(id, 1)
    }
  }
})
