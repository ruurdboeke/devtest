import React       from 'react';
import { render }  from 'react-dom';
var { Route } = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
import { createStore, combineReducers } from 'redux';
var { Provider } = require ('react-redux');
var reducers     = require ('../shared/reducers');
import { fromJS }                       from 'immutable';

import routes from '../shared/routes';

const history = createBrowserHistory();
declare var window: any;

let initialState = window.__INITIAL_STATE__;
// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });
const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState);

render(
  <Provider store={store}>
      <Route.Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
