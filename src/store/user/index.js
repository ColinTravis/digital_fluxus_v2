import firebase from '@/firebase';

import { SET_PROFILE } from './mutations';

const state = {
    user: {},
    loggedIn: false
};

const getters = {

};

const mutations = {
    [SET_PROFILE](state, user){
        state.loggedIn = true;
        state.user = {
            name: user.displayName,
            picture: user.photoURL
        };
    }
};

const actions = {
    async login({commit}) {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};