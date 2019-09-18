import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, actions, getters } from '../../src/store'

const localVue = createLocalVue()
localVue.use(Vuex)
let state

beforeEach(() => {
    state = {
        recipes: [],
        apiURL: 'https://api.edamam.com/search',
        user: null,
        isAuthenticated: false,
        userRecipes: []
    }
}),

afterEach(() => {
    state = null
})

describe('Mutations tests', () => {
    test('setRecipe correctly sets the array of recipes and does not stay empty', () => {
        expect(state.recipes.length).toBe(0)
        mutations.setRecipes(state, ['recipe1', 'recipe2'])
        expect(state.recipes.length).toBe(2)
    })
    test('setUser correctly sets the user and is not null', () => {
        expect(state.user).toBe(null)
        mutations.setUser(state, 'testUser@gmail.com')
        expect(state.user).toBe('testUser@gmail.com')
    })
    test('setIsAuthenticated correctly changes the boolean value from false to true', () => {
        expect(state.isAuthenticated).toBe(false)
        mutations.setIsAuthenticated(state, true)
        expect(state.isAuthenticated).toBe(true)
    })
    test('setUserRecipes correctly sets the array of recipes for user and does not stay empty', () => {
        expect(state.userRecipes.length).toBe(0)
        mutations.setUserRecipes(state, ['recipe1', 'recipe2'])
        expect(state.userRecipes.length).toBe(2)
    })
}),

describe('Actions tests', () => {
    test('idk how to do', () => {
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
    })
}),

describe('Getters tests', () => {
    test('isAuthenticated is returning correct boolean value', () => {
        expect(getters.isAuthenticated(state)).toBe(false)
        mutations.setIsAuthenticated(state, true)
        expect(getters.isAuthenticated(state)).toBe(true)
    })
})