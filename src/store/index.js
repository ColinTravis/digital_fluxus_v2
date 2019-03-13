import Vue from 'vue';
import Vuex from 'vuex';

import user from '@/store/user';
import prompt from '@/store/prompt';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        
    },

    modules: {
        user,
        prompt
    }
});

export default store;