import Vue from 'vue'
import Vuex from 'vuex'
import newFlowController from './modules/newFlowController'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        newFlowController
    }
})