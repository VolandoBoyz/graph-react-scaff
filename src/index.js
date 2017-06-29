import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import App from './App';
import fire from './modules/fire';

const enhancers = [];
// redux devTools
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const makeRootReducer = asyncReducers => combineReducers({
  fire,
  forms: formReducer,
  ...asyncReducers,
});

const store = createStore(
  makeRootReducer(),
  {},
  compose(applyMiddleware(ReduxThunk), ...enhancers)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
