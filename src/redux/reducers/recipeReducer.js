import { createAction, createReducer } from '@reduxjs/toolkit';

const myRecipesRequest = createAction('myRecipesRequest');
const myRecipesSuccess = createAction('myRecipesSuccess');
const myRecipesFail = createAction('myRecipesFail');
const createRecipeRequest = createAction('createRecipeRequest');
const createRecipeSuccess = createAction('createRecipeSuccess');
const createRecipeFail = createAction('createRecipeFail');
const recipesRequest = createAction('recipesRequest');
const recipesSuccess = createAction('recipesSuccess');
const recipesFail = createAction('recipesFail');

const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const recipeReducer = createReducer({}, builder => {
  builder

    .addCase(recipesRequest, state => {
      state.loading = true;
    })
    .addCase(recipesSuccess, (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    })
    .addCase(recipesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createRecipeRequest, state => {
      state.loading = true;
    })
    .addCase(createRecipeSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(createRecipeFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(myRecipesRequest, state => {
      state.loading = true;
    })
    .addCase(myRecipesSuccess, (state, action) => {
      state.loading = false;
      state.myRecipes = action.payload;
    })
    .addCase(myRecipesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearMessage, state => {
      state.message = null;
    })
    .addCase(clearError, state => {
      state.error = null;
    });
});

const addStepRequest = createAction('addStepRequest');
const addStepSuccess = createAction('addStepSuccess');
const addStepFail = createAction('addStepFail');
const loadCategoriesRequest = createAction('loadCategoriesRequest');
const loadCategoriesSuccess = createAction('loadCategoriesSuccess');
const loadCategoriesFail = createAction('loadCategoriesFail');
const addCategoryRequest = createAction('addCategoryRequest');
const addCategorySuccess = createAction('addCategorySuccess');
const addCategoryFail = createAction('addCategoryFail');
const removeCategoryRequest = createAction('removeCategoryRequest');
const removeCategorySuccess = createAction('removeCategorySuccess');
const removeCategoryFail = createAction('removeCategoryFail');
const deleteRecipeRequest = createAction('deleteRecipeRequest');
const deleteRecipeSuccess = createAction('deleteRecipeSuccess');
const deleteRecipeFail = createAction('deleteRecipeFail');
const deleteStepRequest = createAction('deleteStepRequest');
const deleteStepSuccess = createAction('deleteStepSuccess');
const deleteStepFail = createAction('deleteStepFail');
const singleRecipeRequest = createAction('singleRecipeRequest');
const singleRecipeSuccess = createAction('singleRecipeSuccess');
const singleRecipeFail = createAction('singleRecipeFail');
const createCategoryRequest = createAction('createCategoryRequest');
const createCategorySuccess = createAction('createCategorySuccess');
const createCategoryFail = createAction('createCategoryFail');

export const singleRecipeReducer = createReducer({}, builder => {
  builder
    .addCase(deleteRecipeRequest, state => {
      state.loading = true;
    })
    .addCase(deleteRecipeSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(deleteRecipeFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createCategoryRequest, state => {
      state.loading = true;
    })
    .addCase(createCategorySuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(createCategoryFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addCategoryRequest, state => {
      state.loading = true;
    })
    .addCase(addCategorySuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(addCategoryFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(removeCategoryRequest, state => {
      state.loading = true;
    })
    .addCase(removeCategorySuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(removeCategoryFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(loadCategoriesRequest, state => {
      state.loading = true;
    })
    .addCase(loadCategoriesSuccess, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(loadCategoriesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteStepRequest, state => {
      state.loading = true;
    })
    .addCase(deleteStepSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(deleteStepFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addStepRequest, state => {
      state.loading = true;
    })
    .addCase(addStepSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(addStepFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(singleRecipeRequest, state => {
      state.loading = true;
    })
    .addCase(singleRecipeSuccess, (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
    })
    .addCase(singleRecipeFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearMessage, state => {
      state.message = null;
    })
    .addCase(clearError, state => {
      state.error = null;
    });
});
