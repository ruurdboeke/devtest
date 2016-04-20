'use strict';
var express = require('express');
var React                     = require ('react');
var { renderToString }        = require ('react-dom/server');
var { RouterContext, match } = require ('react-router');
var createLocation            = require ('history/lib/createLocation');
var { createStore, combineReducers} = require ('redux');
var { Provider }              = require ('react-redux');

import * as reducers from './dist/shared/reducers';
import routes from './dist/shared/routes.js';

const app = express();
app.use(express.static('public'));
app.use((req, res) => {
const location = createLocation(req.url);
const reducer  = combineReducers(reducers);
const store    = createStore(reducer);
 
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');
    
    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    
    const initialState = store.getState();
    
    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>rj isomorphic playground</title>
        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>    
`
    res.end(HTML);
  });
});


module.exports = app;