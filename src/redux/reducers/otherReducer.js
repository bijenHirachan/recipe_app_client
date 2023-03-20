import { createAction, createReducer } from '@reduxjs/toolkit';

const statsRequest = createAction('statsRequest');
const statsSuccess = createAction('statsSuccess');
const statsFail = createAction('statsFail');
const clearError = createAction('clearError');

export const otherReducer = createReducer({}, builder => {
  builder
    .addCase(statsRequest, state => {
      state.loading = true;
    })
    .addCase(statsSuccess, (state, action) => {
      state.loading = false;
      state.stats = action.payload;
    })
    .addCase(statsFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, state => {
      state.error = null;
    });
});
