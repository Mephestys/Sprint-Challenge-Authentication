/* Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

/* Components */
import App from './App';
import SignIn from './components/signin';
import SignUp from './components/signup';
import RequireAuth from './components/HOC/RequireAuth';
import Jokes from './components/jokes';
import SignOut from './components/signout';

import reducers from './reducers';

/* Styles */
import './index.css';

/* End Imports */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/jokes' component={RequireAuth(Jokes)} />
        <Route path='/signout' component={SignOut} />
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
