import axios from 'axios';
axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000/api';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const GET_JOKES = 'GET_JOKES';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const register = function(username, password, confirmPassword, history) {
  return async dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Password does not match.'));
      return;
    }
    try {
      await axios.post(`${ROOT_URL}/users`, { username, password });
      dispatch({ type: USER_REGISTERED });
      history.push('/signin');
    } catch (err) {
      dispatch(authError('Error registering user.'));
    }
  };
};

export const login = function(username, password, history) {
  return async dispatch => {
    try {
      const response = await axios.post(`${ROOT_URL}/login`, { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      dispatch({ type: USER_AUTHENTICATED });
      history.push('/jokes');
    } catch (err) {
      dispatch(authError('Error getting token.'));
    };
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: USER_UNAUTHENTICATED });
    localStorage.clear('token');
    this.context.history.push('/');
  };
};

export const getJokes = _ => {
  return async dispatch => {
    try {
      const response = await axios.get(`${ROOT_URL}/jokes`, {
        headers: { 
          Authorization: localStorage.getItem('token'),
        },
      });
      dispatch({
        type: GET_JOKES,
        payload: response.data,
      });
    } catch (err) {
      dispatch(authError('Error getting jokes.'));
    };
  };
};
