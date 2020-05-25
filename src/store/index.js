import Vue from 'vue'
import Vuex from 'vuex'
import { levels } from '@/data/levels'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        levels: levels,
        currentChapter: 0
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})