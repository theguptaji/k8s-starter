import Vue from 'vue'
import Vuex from 'vuex'
import { levels } from '@/data/levels'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        levels: levels,
        level: 0
    },
    getters: {
        getAllLevels : state => {
            return state.levels
        },
        getCurrentLevel : state => {
            return state.levels[state.level]
        },
        getCurrentLevelId : state => {
            return state.level
        }
    },
    mutations: {
        CURRENT_LEVEL_ID : (state, levelId) => {
            state.level = levelId
        }
    },
    actions: {

    }
})