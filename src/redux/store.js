import { configureStore } from '@reduxjs/toolkit';
import { otherReducer } from './reducers/otherReducer';
import { recipeReducer, singleRecipeReducer } from './reducers/recipeReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    recipe: recipeReducer,
    singleRecipe: singleRecipeReducer,
    other: otherReducer,
  },
});

export default store;

export const server = process.env.REACT_APP_SERVER_URI;
// export const server = 'https://recipe-app-server-zv4s.onrender.com/api/v1';
