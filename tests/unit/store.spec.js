import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store, { mutations, actions, getters } from '../../src/store'
import firebaseConfig from '../../src/Firebase/index'

let localVue = createLocalVue()
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
    let store
    let commit
    beforeEach(() => {
        commit = jest.fn()
        store = new Vuex.Store({
            state: state,
            mutations: mutations,
            actions: {
                userJoin: actions.userJoin,
                userLogin: actions.userLogin,
                userSignOut: actions.userSignOut
            }
        })
    })

    test('getRecipes commits setRecipes returned by api method', async () => {
        const commit = jest.fn()
        await actions.getRecipes({ state, commit }, 'vegan')
        expect(commit).toHaveBeenCalledWith('setRecipes', [{ "recipe": { "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3fad4068268ff8385e1cb926dbfe02ab", "label": "Vegan Chocolate-Coffee Muffins Recipe", "image": "https://www.edamam.com/web-img/cd0/cd0f763c1566ec5a0f0ae099ecebc5a7.jpg", "source": "Serious Eats", "url": "http://www.seriouseats.com/recipes/2014/04/vegan-chocolate-coffee-muffins.html", "shareAs": "http://www.edamam.com/recipe/vegan-chocolate-coffee-muffins-recipe-3fad4068268ff8385e1cb926dbfe02ab/vegan", "yield": 12, "dietLabels": [], "healthLabels": [ "Vegan", "Vegetarian", "Dairy-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ], "cautions": [ "Sulfites" ], "ingredientLines": [ "1 1/2 cups all purpose flour", "1/3 cup unsweetened cocoa powder", "1 teaspoon baking soda", "1/2 teaspoon salt", "1 1/4 cups sugar", "1 teaspoon instant espresso powder", "1 cup freshly brewed coffee", "1 teaspoon vanilla extract", "1 teaspoon white vinegar", "3/4 cup vegan chocolate chips or vegan chocolate, chopped" ], "ingredients": [ { "text": "1 1/2 cups all purpose flour", "quantity": 1.5, "measure": "cup", "food": "all purpose flour", "weight": 187.5 },
            { "text": "1/3 cup unsweetened cocoa powder", "quantity": 0.3333333432674408, "measure": "cup", "food": "unsweetened cocoa powder", "weight": 28.666666666666664 }, { "text": "1 teaspoon baking soda", "quantity": 1, "measure": "teaspoon", "food": "baking soda", "weight": 4.6 }, { "text": "1/2 teaspoon salt", "quantity": 0.5, "measure": "teaspoon", "food": "salt", "weight": 3 }, { "text": "1 1/4 cups sugar", "quantity": 1.25, "measure": "cup", "food": "sugar", "weight": 250 }, { "text": "1 teaspoon instant espresso powder", "quantity": 1, "measure": "teaspoon", "food": "espresso", "weight": 5.000000000253605 }, { "text": "1 cup freshly brewed coffee", "quantity": 1, "measure": "cup", "food": "coffee", "weight": 237 }, { "text": "1 teaspoon vanilla extract", "quantity": 1, "measure": "teaspoon", "food": "vanilla extract", "weight": 4.2 }, { "text": "1 teaspoon white vinegar", "quantity": 1, "measure": "teaspoon", "food": "white vinegar", "weight": 5 }, { "text": "3/4 cup vegan chocolate chips or vegan chocolate, chopped", "quantity": 0.75, "measure": "cup", "food": "vegan chocolate chips", "weight": 126 } ], "calories": 2411.5760000000228, "totalWeight": 849.4124624355372,
            "totalNutrients": { "ENERC_KCAL": { "label": "Energy", "quantity": 2411.5760000000228, "unit": "kcal" }, "FAT": { "label": "Fat", "quantity": 45.33735333333379, "unit": "g" }, "FASAT": { "label": "Saturated", "quantity": 39.176465000000235, "unit": "g" }, "FAMS": { "label": "Monounsaturated", "quantity": 2.1177416666666664, "unit": "g" }, "FAPU": { "label": "Polyunsaturated", "quantity": 1.2793463333335664, "unit": "g" }, "CHOCDF": { "label": "Carbs", "quantity": 481.17145000000426, "unit": "g" }, "FIBTG": { "label": "Fiber", "quantity": 20.457166666666666, "unit": "g" }, "SUGAR": { "label": "Sugars", "quantity": 294.01981666666666, "unit": "g" }, "SUGAR.added": { "label": "Sugars, added", "quantity": 292.47860000000003, "unit": "g" }, "PROCNT": { "label": "Protein", "quantity": 35.549336666666974, "unit": "g" }, "CHOLE": { "label": "Cholesterol", "quantity": 1.26, "unit": "mg" }, "NA": { "label": "Sodium", "quantity": 1971.9295240005895, "unit": "mg" }, "CA": { "label": "Calcium", "quantity": 455.0473243178065, "unit": "mg" }, "MG": { "label": "Magnesium", "quantity": 241.3351246245557, "unit": "mg" }, "K": { "label": "Potassium", "quantity": 1568.396663661781, "unit": "mg" },
            "FE": { "label": "Iron", "quantity": 14.465111126036764, "unit": "mg" }, "ZN": { "label": "Zinc", "quantity": 7.793965795768743, "unit": "mg" }, "P": { "label": "Phosphorus", "quantity": 579.5853333333511, "unit": "mg" }, "VITA_RAE": { "label": "Vitamin A", "quantity": 1.26, "unit": "µg" }, "VITC": { "label": "Vitamin C", "quantity": 0.6400000000005072, "unit": "mg" }, "THIA": { "label": "Thiamin (B1)", "quantity": 1.6539270000000026, "unit": "mg" }, "RIBF": { "label": "Riboflavin (B2)", "quantity": 1.4600766666671154, "unit": "mg" }, "NIA": { "label": "Niacin (B3)", "quantity": 13.737636666679869, "unit": "mg" }, "VITB6A": { "label": "Vitamin B6", "quantity": 0.2836886666666717, "unit": "mg" }, "FOLDFE": { "label": "Folate equivalent (total)", "quantity": 586.0483333333359, "unit": "µg" }, "FOLFD": { "label": "Folate (food)", "quantity": 94.79833333333588, "unit": "µg" }, "FOLAC": { "label": "Folic acid", "quantity": 288.75, "unit": "µg" }, "VITB12": { "label": "Vitamin B12", "quantity": 0.35280000000000006, "unit": "µg" }, "TOCPHA": { "label": "Vitamin E", "quantity": 2.462316666666692, "unit": "mg" }, "VITK1": { "label": "Vitamin K", "quantity": 11.22316666666692, "unit": "µg" } },
            "totalDaily": { "ENERC_KCAL": { "label": "Energy", "quantity": 120.57880000000114, "unit": "%" }, "FAT": { "label": "Fat", "quantity": 69.74977435897506, "unit": "%" }, "FASAT": { "label": "Saturated", "quantity": 195.88232500000117, "unit": "%" }, "CHOCDF": { "label": "Carbs", "quantity": 160.39048333333474, "unit": "%" }, "FIBTG": { "label": "Fiber", "quantity": 81.82866666666666, "unit": "%" }, "PROCNT": { "label": "Protein", "quantity": 71.09867333333395, "unit": "%" }, "CHOLE": { "label": "Cholesterol", "quantity": 0.42, "unit": "%" }, "NA": { "label": "Sodium", "quantity": 82.16373016669122, "unit": "%" }, "CA": { "label": "Calcium", "quantity": 45.504732431780646, "unit": "%" }, "MG": { "label": "Magnesium", "quantity": 57.46074395822755, "unit": "%" }, "K": { "label": "Potassium", "quantity": 33.3701417800379, "unit": "%" }, "FE": { "label": "Iron", "quantity": 80.36172847798201, "unit": "%" }, "ZN": { "label": "Zinc", "quantity": 70.85423450698858, "unit": "%" }, "P": { "label": "Phosphorus", "quantity": 82.7979047619073, "unit": "%" }, "VITA_RAE": { "label": "Vitamin A", "quantity": 0.14, "unit": "%" }, "VITC": { "label": "Vitamin C", "quantity": 0.7111111111116747, "unit": "%" },
            "THIA": { "label": "Thiamin (B1)", "quantity": 137.82725000000022, "unit": "%" }, "RIBF": { "label": "Riboflavin (B2)", "quantity": 112.31358974362426, "unit": "%" }, "NIA": { "label": "Niacin (B3)", "quantity": 85.86022916674918, "unit": "%" }, "VITB6A": { "label": "Vitamin B6", "quantity": 21.822205128205514, "unit": "%" }, "FOLDFE": { "label": "Folate equivalent (total)", "quantity": 146.51208333333398, "unit": "%" }, "VITB12": { "label": "Vitamin B12", "quantity": 14.700000000000005, "unit": "%" }, "TOCPHA": { "label": "Vitamin E", "quantity": 16.415444444444613, "unit": "%" }, "VITK1": { "label": "Vitamin K", "quantity": 9.3526388888891, "unit": "%" } }, "digest": [ { "label": "Fat", "tag": "FAT", "schemaOrgTag": "fatContent", "total": 45.33735333333379, "hasRDI": true, "daily": 69.74977435897506, "unit": "g", "sub": [ { "label": "Saturated", "tag": "FASAT", "schemaOrgTag": "saturatedFatContent", "total": 39.176465000000235, "hasRDI": true, "daily": 195.88232500000117, "unit": "g" }, { "label": "Trans", "tag": "FATRN", "schemaOrgTag": "transFatContent", "total": 0, "hasRDI": false, "daily": 0, "unit": "g" }, { "label": "Monounsaturated", "tag": "FAMS", "schemaOrgTag": null, "total": 2.1177416666666664, "hasRDI": false, "daily": 0, "unit": "g" },
            { "label": "Polyunsaturated", "tag": "FAPU", "schemaOrgTag": null, "total": 1.2793463333335664, "hasRDI": false, "daily": 0, "unit": "g" } ] }, { "label": "Carbs", "tag": "CHOCDF", "schemaOrgTag": "carbohydrateContent", "total": 481.17145000000426, "hasRDI": true, "daily": 160.39048333333474, "unit": "g", "sub": [ { "label": "Carbs (net)", "tag": "CHOCDF.net", "schemaOrgTag": null, "total": 460.71428333333756, "hasRDI": false, "daily": 0, "unit": "g" }, { "label": "Fiber", "tag": "FIBTG", "schemaOrgTag": "fiberContent", "total": 20.457166666666666, "hasRDI": true, "daily": 81.82866666666666, "unit": "g" }, { "label": "Sugars", "tag": "SUGAR", "schemaOrgTag": "sugarContent", "total": 294.01981666666666, "hasRDI": false, "daily": 0, "unit": "g" }, { "label": "Sugars, added", "tag": "SUGAR.added", "schemaOrgTag": null, "total": 292.47860000000003, "hasRDI": false, "daily": 0, "unit": "g" } ] }, { "label": "Protein", "tag": "PROCNT", "schemaOrgTag": "proteinContent", "total": 35.549336666666974, "hasRDI": true, "daily": 71.09867333333395, "unit": "g" }, { "label": "Cholesterol", "tag": "CHOLE", "schemaOrgTag": "cholesterolContent", "total": 1.26, "hasRDI": true, "daily": 0.42, "unit": "mg" },
            { "label": "Sodium", "tag": "NA", "schemaOrgTag": "sodiumContent", "total": 1971.9295240005895, "hasRDI": true, "daily": 82.16373016669122, "unit": "mg" }, { "label": "Calcium", "tag": "CA", "schemaOrgTag": null, "total": 455.0473243178065, "hasRDI": true, "daily": 45.504732431780646, "unit": "mg" }, { "label": "Magnesium", "tag": "MG", "schemaOrgTag": null, "total": 241.3351246245557, "hasRDI": true, "daily": 57.46074395822755, "unit": "mg" }, { "label": "Potassium", "tag": "K", "schemaOrgTag": null, "total": 1568.396663661781, "hasRDI": true, "daily": 33.3701417800379, "unit": "mg" }, { "label": "Iron", "tag": "FE", "schemaOrgTag": null, "total": 14.465111126036764, "hasRDI": true, "daily": 80.36172847798201, "unit": "mg" }, { "label": "Zinc", "tag": "ZN", "schemaOrgTag": null, "total": 7.793965795768743, "hasRDI": true, "daily": 70.85423450698858, "unit": "mg" }, { "label": "Phosphorus", "tag": "P", "schemaOrgTag": null, "total": 579.5853333333511, "hasRDI": true, "daily": 82.7979047619073, "unit": "mg" }, { "label": "Vitamin A", "tag": "VITA_RAE", "schemaOrgTag": null, "total": 1.26, "hasRDI": true, "daily": 0.14, "unit": "µg" }, { "label": "Vitamin C", "tag": "VITC", "schemaOrgTag": null, "total": 0.6400000000005072,
            "hasRDI": true, "daily": 0.7111111111116747, "unit": "mg" }, { "label": "Thiamin (B1)", "tag": "THIA", "schemaOrgTag": null, "total": 1.6539270000000026, "hasRDI": true, "daily": 137.82725000000022, "unit": "mg" }, { "label": "Riboflavin (B2)", "tag": "RIBF", "schemaOrgTag": null, "total": 1.4600766666671154, "hasRDI": true, "daily": 112.31358974362426, "unit": "mg" }, { "label": "Niacin (B3)", "tag": "NIA", "schemaOrgTag": null, "total": 13.737636666679869, "hasRDI": true, "daily": 85.86022916674918, "unit": "mg" }, { "label": "Vitamin B6", "tag": "VITB6A", "schemaOrgTag": null, "total": 0.2836886666666717, "hasRDI": true, "daily": 21.822205128205514, "unit": "mg" }, { "label": "Folate equivalent (total)", "tag": "FOLDFE", "schemaOrgTag": null, "total": 586.0483333333359, "hasRDI": true, "daily": 146.51208333333398, "unit": "µg" }, { "label": "Folate (food)", "tag": "FOLFD", "schemaOrgTag": null, "total": 94.79833333333588, "hasRDI": false, "daily": 0, "unit": "µg" }, { "label": "Folic acid", "tag": "FOLAC", "schemaOrgTag": null, "total": 288.75, "hasRDI": false, "daily": 0, "unit": "µg" }, { "label": "Vitamin B12", "tag": "VITB12", "schemaOrgTag": null, "total": 0.35280000000000006, "hasRDI": true, "daily": 14.700000000000005, "unit": "µg" },
            { "label": "Vitamin D", "tag": "VITD", "schemaOrgTag": null, "total": 0, "hasRDI": false, "daily": 0, "unit": "µg" }, { "label": "Vitamin E", "tag": "TOCPHA", "schemaOrgTag": null, "total": 2.462316666666692, "hasRDI": true, "daily": 16.415444444444613, "unit": "mg" }, { "label": "Vitamin K", "tag": "VITK1", "schemaOrgTag": null, "total": 11.22316666666692, "hasRDI": true, "daily": 9.3526388888891, "unit": "µg" } ] }, "bookmarked": false, "bought": false } ])
    }),
    
    test('userJoin creates account in firebase then commits setUser and setIsAuthenticated', () => {
        store.dispatch('userJoin', { email:'test@gmail.com', password:'password' }).then(() => {
            expect(commit).toHaveBeenCalledWith('setUser', 'test@gmail.com')
            expect(commit).toHaveBeenCalledWith('setIsAuthenticated', true)
        })
    }),

    test('userLogin logs user in then commits setUser and setIsAuthenticated', () => {
        store.dispatch('userLogin', { email:'test@gmail.com', password:'password' }).then(() => {
            expect(commit).toHaveBeenCalledWith('setUser', 'test@gmail.com')
            expect(commit).toHaveBeenCalledWith('setIsAuthenticated', true)
        })
    }),

    test('userSignOut logs user out then commits a reset to setUser and setIsAuthenticated', () => {
        store.dispatch('userSignOut').then(() => {
            expect(commit).toHaveBeenCalledWith('setUser', null)
            expect(commit).toHaveBeenCalledWith('setIsAuthenticated', false)
        })
    })
}),

describe('Getters tests', () => {
    test('isAuthenticated is returning correct boolean value', () => {
        expect(getters.isAuthenticated(state)).toBe(false)
        mutations.setIsAuthenticated(state, true)
        expect(getters.isAuthenticated(state)).toBe(true)
    })
})