import { reducer as FormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import {
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
  GET_JOKES,
} from '../actions';

const AuthReducer = (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return { ...auth, authenticated: true };
    case USER_UNAUTHENTICATED:
      return { ...auth, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...auth, error: action.payload };
    case CHECK_IF_AUTHENTICATED:
      return { ...auth };
    default:
      return auth;
  }
};

const JokesReducer = (jokes = [], action) => {
  switch (action.type) {
    case GET_JOKES:
      return action.payload;
    default:
      return jokes;
  }
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  jokes: JokesReducer,
});

export default rootReducer;
