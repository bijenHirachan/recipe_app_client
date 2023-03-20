import axios from 'axios';
import { server } from '../store';

export const getStats = () => async dispatch => {
  try {
    dispatch({ type: 'statsRequest' });
    const { data } = await axios.get(`${server}/stats`, {
      withCredentials: true,
    });
    dispatch({ type: 'statsSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'statsFail', payload: error.response.data.message });
  }
};
