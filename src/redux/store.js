import { configureStore } from '@reduxjs/toolkit';
import { recipeReducer, singleRecipeReducer } from './reducers/recipeReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    recipe: recipeReducer,
    singleRecipe: singleRecipeReducer,
  },
});

export default store;

// export const server = process.env.REACT_APP_SERVER_URI;
export const server = 'https://recipe-app-server-zv4s.onrender.com/api/v1';
