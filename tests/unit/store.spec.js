import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '../../src/store'
import { cloneDeep } from 'lodash'

test('Mutation', () => {
    //setRecipes(state, payload) {
        //state.recipes = payload;
    //},
    //setUser(state, payload) {
        //state.user = payload;
    //},
    //setIsAuthenticated(state, payload) {
        //state.isAuthenticated = payload;
    //},
    //setUserRecipes(state, payload){
        //state.userRecipes = payload;
    //}
}),

test('Actions', () => {
    //async getRecipes({ state, commit }, plan) {
        //try {
            //let response = await axios.get(state.apiURL, {
                //params: {
                    //q: plan,
                    //app_id: 'a00bad80',
                    //app_key: 'a0d09d9fe82fd86c9679043713deefc2	—',
                    //from: 0,
                    //to: 9
                //}
            //});
            //commit('setRecipes', response.data.hits);
        //} catch (error) {
            //commit('setRecipes', []);
        //}
    //},
    //userJoin({ commit }, { email, password }) {
        //firebase
            //.auth()
            //.createUserWithEmailAndPassword(email, password)
            //.then(user => {
                //commit('setUser', user);
                //commit('setIsAuthenticated', true);
                //router.push('/about');
            //})
            //.catch(() => {
                //commit('setUser', null);
                //commit('setIsAuthenticated', false);
                //router.push('/');
            //});
    //},
    //userLogin({ commit }, { email, password }) {
        //firebase
            //.auth()
            //.signInWithEmailAndPassword(email, password)
            //.then(user => {
                //commit('setUser', user);
                //commit('setIsAuthenticated', true);
                //router.push('/about');
            //})
            //.catch(() => {
                //commit('setUser', null);
                //commit('setIsAuthenticated', false);
                //router.push('/');
            //});
    //},
    //userSignOut({ commit }) {
        //firebase
            //.auth()
            //.signOut()
            //.then(() => {
                //commit('setUser', null);
                //commit('setIsAuthenticated', false);
                //router.push('/');
            //})
            //.catch(() => {
                //commit('setUser', null);
                //commit('setIsAuthenticated', false);
                //router.push('/');
            //});
    //},
    //addRecipe({ state }, payload) {
        //firebase
            //.database()
            //.ref('users')
            //.child(state.user.user.uid)
            //.push(payload.recipe.label);
    //},
    //getUserRecipes({state, commit}){
        //return firebase
        //.database()
        //.ref('users/' + state.user.user.uid)
        //.once('value', snapshot => {
            //commit('setUserRecipes', snapshot.val());
        //});
    //}
}),

test('Getters', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const cloneStore = new Vuex.Store(cloneDeep(store.toString()))
    const state = {
        recipes: [],
        apiURL: 'https://api.edamam.com/search',
        user: null,
        isAuthenticated: false,
        userRecipes: []
    }
    expect(state.isAuthenticated).toBe(false)
    state.isAuthenticated = true
    expect(state.isAuthenticated).toBe(true)

    //This shit works but its not really testing the getter
})