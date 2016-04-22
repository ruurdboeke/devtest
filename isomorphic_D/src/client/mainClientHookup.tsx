/// <reference path="../../typings/main.d.ts" />

import React       from 'react';
import { render }  from 'react-dom';
var { Route, browserHistory, Router  } = require('react-router');
import { createStore, combineReducers } from 'redux';
var { Provider } = require ('react-redux');
import todoAppReducer from './../shared/reducers/reducers';
import { fromJS }  from 'immutable';

import routes from './../shared/routes';

declare var window: any;

let initialState = window.__INITIAL_STATE__;
// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
// todo: doesn't work for me?
// Object
//   .keys(initialState)
//   .forEach(key => {
//     initialState[key] = fromJS(initialState[key]);
//    });
//const reducer = combineReducers(reducers);
const store   = createStore(todoAppReducer, initialState);

render(
  <Provider store={store}>
      <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);
