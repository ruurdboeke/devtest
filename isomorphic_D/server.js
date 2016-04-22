'use strict';

var _reducers = require('./dist/shared/reducers/reducers.js');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./dist/shared/routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var React = require('react');

var _require = require('react-dom/server');

var renderToString = _require.renderToString;

var _require2 = require('react-router');

var RouterContext = _require2.RouterContext;
var match = _require2.match;

var _require3 = require('redux');

var createStore = _require3.createStore;

var _require4 = require('react-redux');

var Provider = _require4.Provider;


var PORT = process.env.PORT || 5000;

var app = express();
var store = createStore(_reducers2.default);

app.use(express.static('public'));
app.use(function (req, res) {

  match({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    var InitialComponent = React.createElement(RouterContext, renderProps);

    var initialState = store.getState();

    var componentHTML = renderToString(InitialComponent);
    var HTML = '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>rj isomorphic playground</title>\n        <script type="application/javascript">\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n        </script>\n      </head>\n      <body>\n        <div id="react-view">' + componentHTML + '</div>\n        <script type="application/javascript" src="/bundle.js"></script>\n      </body>\n  </html>    \n';
    res.end(HTML);
  });
});

app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});