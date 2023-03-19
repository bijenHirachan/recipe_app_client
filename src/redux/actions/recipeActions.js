import axios from 'axios';
import { server } from '../store';

export const getMyRecipes = () => async dispatch => {
  try {
    dispatch({ type: 'myRecipesRequest' });
    const { data } = await axios.get(`${server}/myrecipes`, {
      withCredentials: true,
    });
    dispatch({ type: 'myRecipesSuccess', payload: data.myRecipes });
  } catch (error) {
    dispatch({ type: 'myRecipesFail', payload: error.response.data.message });
  }
};

export const getAllRecipes = () => async dispatch => {
  try {
    dispatch({ type: 'recipesRequest' });
    const { data } = await axios.get(`${server}/recipes`);
    dispatch({ type: 'recipesSuccess', payload: data.recipes });
  } catch (error) {
    dispatch({ type: 'recipesFail', payload: error.response.data.message });
  }
};

export const createRecipe = formData => async dispatch => {
  try {
    dispatch({ type: 'createRecipeRequest' });

    const { data } = await axios.post(`${server}/createrecipe`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'createRecipeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createRecipeFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteRecipe = id => async dispatch => {
  try {
    dispatch({ type: 'deleteRecipeRequest' });

    const { data } = await axios.delete(`${server}/deleterecipe/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'deleteRecipeSuccess', payload: data.recipe });
  } catch (error) {
    dispatch({
      type: 'deleteRecipeFail',
      payload: error.response.data.message,
    });
  }
};

export const singleRecipe = id => async dispatch => {
  try {
    dispatch({ type: 'singleRecipeRequest' });

    const { data } = await axios.get(`${server}/recipes/${id}`);
    dispatch({ type: 'singleRecipeSuccess', payload: data.recipe });
  } catch (error) {
    dispatch({
      type: 'singleRecipeFail',
      payload: error.response.data.message,
    });
  }
};

export const addStep = (id, description) => async dispatch => {
  try {
    dispatch({ type: 'addStepRequest' });

    const { data } = await axios.put(
      `${server}/recipe/${id}/addstep`,
      {
        description,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'addStepSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addStepFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteStep = (id, stepId) => async dispatch => {
  try {
    dispatch({ type: 'deleteStepRequest' });

    const { data } = await axios.delete(
      `${server}/recipe/${id}/deletestep/${stepId}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteStepSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteStepFail',
      payload: error.response.data.message,
    });
  }
};

export const loadCategories = () => async dispatch => {
  try {
    dispatch({ type: 'loadCategoriesRequest' });

    const { data } = await axios.get(`${server}/allcategories`);

    dispatch({ type: 'loadCategoriesSuccess', payload: data.categories });
  } catch (error) {
    dispatch({ type: 'loadCategoriesFail' });
  }
};

export const addCategory = (id, category) => async dispatch => {
  try {
    dispatch({ type: 'addCategoryRequest' });

    const { data } = await axios.put(
      `${server}/recipe/${id}/addcategory`,
      {
        category,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'addCategorySuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'addCategoryFail', payload: error.response.data.message });
  }
};

export const removeCategory = (id, category) => async dispatch => {
  try {
    dispatch({ type: 'removeCategoryRequest' });

    const { data } = await axios.put(
      `${server}/recipe/${id}/removecategory`,
      {
        category,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'removeCategorySuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'removeCategoryFail',
      payload: error.response.data.message,
    });
  }
};
export const createCategory = name => async dispatch => {
  try {
    dispatch({ type: 'createCategoryRequest' });

    const { data } = await axios.post(
      `${server}/createcategory`,
      {
        name,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'createCategorySuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCategoryFail',
      payload: error.response.data.message,
    });
  }
};
