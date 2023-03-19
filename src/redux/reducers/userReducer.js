import { createAction, createReducer } from '@reduxjs/toolkit';

const myProfileRequest = createAction('myProfileRequest');
const myProfileSuccess = createAction('myProfileSuccess');
const myProfileFail = createAction('myProfileFail');
const changePasswordRequest = createAction('changePasswordRequest');
const changePasswordSuccess = createAction('changePasswordSuccess');
const changePasswordFail = createAction('changePasswordFail');
const forgotPasswordRequest = createAction('forgotPasswordRequest');
const forgotPasswordSuccess = createAction('forgotPasswordSuccess');
const forgotPasswordFail = createAction('forgotPasswordFail');
const resetPasswordRequest = createAction('resetPasswordRequest');
const resetPasswordSuccess = createAction('resetPasswordSuccess');
const resetPasswordFail = createAction('resetPasswordFail');
const updateProfileRequest = createAction('updateProfileRequest');
const updateProfileSuccess = createAction('updateProfileSuccess');
const updateProfileFail = createAction('updateProfileFail');
const registerRequest = createAction('registerRequest');
const registerSuccess = createAction('registerSuccess');
const registerFail = createAction('registerFail');
const loginRequest = createAction('loginRequest');
const loginSuccess = createAction('loginSuccess');
const loginFail = createAction('loginFail');
const logoutRequest = createAction('logoutRequest');
const logoutSuccess = createAction('logoutSuccess');
const logoutFail = createAction('logoutFail');
const clearMessage = createAction('clearMessage');
const clearError = createAction('clearError');

export const userReducer = createReducer({}, builder => {
  builder
    .addCase(forgotPasswordRequest, state => {
      state.loading = true;
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase(forgotPasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(resetPasswordRequest, state => {
      state.loading = true;
    })
    .addCase(resetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase(resetPasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(myProfileRequest, state => {
      state.loading = true;
    })
    .addCase(myProfileSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(myProfileFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(changePasswordRequest, state => {
      state.loading = true;
    })
    .addCase(changePasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(changePasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateProfileRequest, state => {
      state.loading = true;
    })
    .addCase(updateProfileSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updateProfileFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(registerRequest, state => {
      state.loading = true;
    })
    .addCase(registerSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(registerFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(loginRequest, state => {
      state.loading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(loginFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logoutRequest, state => {
      state.loading = true;
    })
    .addCase(logoutSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase(logoutFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, state => {
      state.error = null;
    })
    .addCase(clearMessage, state => {
      state.message = null;
    });
});
