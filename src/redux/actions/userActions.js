import axios from 'axios';
import { server } from '../store';

export const myProfile = () => async dispatch => {
  try {
    dispatch({ type: 'myProfileRequest' });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({ type: 'myProfileSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'myProfileFail', payload: error.response.data.message });
  }
};

export const register = formData => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/users`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
      credentials: 'include',
    });
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
        credentials: 'include',
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};
export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'changePasswordRequest' });

    const { data } = await axios.put(
      `${server}/changepassword`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'changePasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'changePasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });

    const { data } = await axios.put(
      `${server}/updateprofile`,
      {
        name,
        email,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};
export const forgotPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgotPasswordRequest' });

    const { data } = await axios.post(
      `${server}/forgotpassword`,
      {
        email,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    dispatch({ type: 'forgotPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'forgotPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });

    const { data } = await axios.post(
      `${server}/resetpassword/${token}`,
      {
        password,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    dispatch({ type: 'resetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error.response.data.message,
    });
  }
};
